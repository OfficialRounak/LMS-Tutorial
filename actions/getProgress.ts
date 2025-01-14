import { db } from "@/lib/db";

export const progress = async (
  userId: string,
  courseId: string
): Promise<number> => { // when its an async call it returns a promise type
    try {
        const publishedChapters = await db.chapter.findMany({
            where:{
                courseId: courseId,
                isPublished : true
            },
            select : {
                id : true
            }
        })

        const publishedChapterIds =  publishedChapters.map((chapter)=> chapter.id) // The transformation [ { "id": "1" }, { "id": "2" } ] → ["1", "2"] ensures the data is in a format compatible with the in clause. 
        // Without this transformation, 
        // the query will throw a type mismatch error.

        const validCompletedChapters =  await db.userProgress.count({
            where: {
                userId:userId,
                chapterId :{
                    in:publishedChapterIds
                },
                isCompleted:true
            }
        }) // this helps in filtering chapters completed from the published chapter in a course 

        const progressPercentage = (validCompletedChapters/publishedChapterIds.length)*100;
        
        return progressPercentage
    } catch (error) {
        console.log("[GET_PROGRESS]",error)
        return 0
    }
};
