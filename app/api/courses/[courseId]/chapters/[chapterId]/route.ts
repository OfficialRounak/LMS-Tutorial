import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";

const {Video} = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!
)


export async function PATCH(
  req: Request,
  { params }: { params: { chapterId: string; courseId: string } }
) {
  try {
    const {isPublished,description,...values} = await req.json();
    const { userId } = auth();

    if (!userId) {
        return new NextResponse("Unauthorized",{status:401})
    }

    const ownCourse= await db.course.findUnique({
        where : {
            userId,
            id : params.courseId
        }
    })

    if(!ownCourse){
        return new NextResponse("Unauthorized",{status:401})
    }

   const chapter = await db.chapter.update({
    where: {
        id : params.chapterId,
        courseId : params.courseId
    },
    data : {
        describtion:description,
        ...values
    }
   })
//here is the cleaning function to clean if there is an existing video while editing , and also clear the video Assets from mux 
   if(values.videoUrl){
    const existingMuxData = await db.muxdata.findFirst({
      where : {
        id : params.chapterId
      }
    })

    if(existingMuxData){
      await Video.Assets.del(existingMuxData.id)
      await db.muxdata.delete({
        where : {
          id : existingMuxData.id
        }
      })
    }

    const videoAsset = await Video.Assets.create({
      input : values.videoUrl,
      playback_policy : "public",
      test:false
    })

    await db.muxdata.create({
     data : {
      chapterId : params.chapterId,
      assetId : videoAsset.id,
      playbackId : videoAsset.playback_ids?.[0]?.id,
     }
    })
   }

   return NextResponse.json(chapter)
  } catch (error) {
    console.log("[COURSE_CHAPTER]",error)
    return new NextResponse("Internal Error",{status:500})
  }
}
