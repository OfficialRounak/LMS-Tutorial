import React from 'react';

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  return <div dangerouslySetInnerHTML={{ __html: value }} />;
};
