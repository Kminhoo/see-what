'use client';

import React from 'react';
import Button from './Button';
import { CommentInputProps } from '@tsc/commentCommon';

const CommentInput = ({ value, onChange, onSubmit, buttonText }: CommentInputProps): JSX.Element => {
  return (
    <form onSubmit={onSubmit} className="flex items-start gap-4 p-4 bg-[#1E1E1E] rounded-lg">
      <textarea
        className="flex-grow h-24 p-3 text-white bg-[#121212] border border-gray-700 rounded-lg resize-none"
        placeholder="댓글을 입력해주세요."
        value={value}
        onChange={onChange}
      />
      <Button
        type="submit"
        className="px-10 py-2 bg-buttonBackGround text-white font-semibold rounded-lg h-24 flex items-center justify-center"
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default CommentInput;
