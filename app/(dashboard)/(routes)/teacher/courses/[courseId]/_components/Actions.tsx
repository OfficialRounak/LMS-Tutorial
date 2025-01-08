'use client';
import { ConfirmModal } from '@/components/modals/ConfirmModal';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Confetti from 'react-confetti';

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

const Actions = ({ disabled, courseId, isPublished }: ActionsProps) => {
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const router = useRouter();

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/courses/${courseId}`);
      toast.success('Course Deleted');
      router.refresh();
      router.push(`/teacher/courses`);
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const onClick = async () => {
    try {
      setLoading(true);
      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success('Course Unpublished');
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast.success('Course Published');

        // Show confetti for 3 seconds
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      }
      router.refresh();
    } catch {
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          numberOfPieces={1000} // Number of confetti pieces
          gravity={0.1} // Speed at which confetti falls
          wind={0.01} // Wind effect on confetti
          
        />
      )}
      <div className="flex items-center gap-x-2">
        <Button
          disabled={disabled || loading}
          onClick={onClick}
          variant="outline"
          size="sm"
        >
          {isPublished ? 'Unpublish' : 'Publish'}
        </Button>
        <ConfirmModal onConfirm={onDelete}>
          <Button size="sm" disabled={loading}>
            <Trash className="h-4 w-4" />
          </Button>
        </ConfirmModal>
      </div>
    </>
  );
};

export default Actions;
