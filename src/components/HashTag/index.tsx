import React from 'react';
interface Props {
  word: string;
}

export default function HashTag({ word }: Props) {
  return <div className="hashtag"># {word}</div>;
}
