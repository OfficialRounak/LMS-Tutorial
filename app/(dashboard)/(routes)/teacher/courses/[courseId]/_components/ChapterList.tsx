'use client';
import { Chapter } from '@prisma/client';
import React, { useEffect, useState } from 'react';

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from '@hello-pangea/dnd';
import { cn } from '@/lib/utils';
import { Grip, Pencil } from 'lucide-react';

interface ChapterListProps {
  items: Chapter[];
  onReorder: (updateData: { id: string; position: number }[]) => void;
  onEdit: (id: string) => void;
}

const ChapterList = ({ items, onEdit, onReorder }: ChapterListProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [chapters, setChapters] = useState(items);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // this is to remove the hydration errors as this is a 3rd party package and is not optimsed for server-side rendering, despite of having use client directive to make this a client component
  //at first this code is checked on server side and then run in the client side, so it might have hydration errors , so this useEffect is used so that this compoment stays unmounted while server check and only when it comes to client side then it gets mounted.
  useEffect(() => {
    setChapters(items);
  }, [items]);

  if (!isMounted) {
    //this check is only for the server side ,which happens in the begining ,at that time nothing will be returned and when the controls comes to clientside, in the initial loading of the app the useEffect will turn mounted to true hence the component starts working with the real return
    return null;
  }

  const onDragEnd = (results: DropResult) => {
    if (!results.destination) {
      return;
    }
    const items = Array.from(chapters);
    const [reorderItem] = items.splice(results.source.index, 1);
    items.splice(results.destination.index, 0, reorderItem);

    const startIndex = Math.min(
      results.source.index,
      results.destination.index
    );
    const endIndex = Math.max(results.source.index, results.destination.index);

    const updatedChapters = items.slice(startIndex, endIndex + 1);
    setChapters(items);

    const bulkUpdateData = updatedChapters.map((chapter) => ({
      id: chapter.id,
      position: items.findIndex((item) => item.id === chapter.id),
    }));

    onReorder(bulkUpdateData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="chapters">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {chapters.map((chapter, index) => (
              <Draggable
                key={chapter.id}
                draggableId={chapter.id}
                index={index}
              >
                {(provided) => (
                  <div
                    className={cn(
                      'flex items-center gap-x-2 bg-slate-200 border-slate-200 border text-slate-700 rounded-md mb-4 text-sm',
                      chapter.isPublished &&
                        'bg-sky-100 border-sky-200 text-sky-700'
                    )}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <div
                      className={cn(
                        'px-2 py-3 border-r border-r-slate-200 hover:bg-slate-300 rounded-l-md transition',
                        chapter.isPublished &&
                          'border-r-sky-200 hover:bg-sky-200'
                      )}
                      {...provided.dragHandleProps}
                    >
                      <Grip className="h-5 w-5" />
                    </div>
                    {chapter.title}
                    <div className="ml-auto pr-2 flex items-center gap-x-2">
                      {chapter.isFree && (
                        <div className="bg-black text-white border rounded-xl text-xs py-1 px-2">
                          Free
                        </div>
                      )}
                      <div
                        className={cn(
                          'bg-slate-500 text-white text-xs border rounded-xl py-1 px-2',
                          chapter.isPublished &&
                            'bg-sky-700 text-white text-xs border rounded-xl py-1 px-2'
                        )}
                      >
                        {chapter.isPublished ? 'Published' : 'Draft'}
                      </div>
                      <Pencil
                        onClick={() => onEdit(chapter.id)}
                        className="w-4 h-4 cursor-pointer hover:opacity-75 transition"
                      />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ChapterList;
