'use client';

import { useState } from 'react';

const CommentForm: React.FC = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    if (!comment.trim()) {
      alert('댓글을 입력해주세요.');
      return;
    }
  };

  

  return (
    <div className="flex items-start gap-4 p-4 bg-[#1E1E1E] rounded-lg max-w-screen-xl mx-auto">
      {/* 댓글 입력 영역 */}
      <textarea
        className="flex-grow h-24 p-3 text-white bg-[#121212] border border-gray-700 rounded-lg resize-none"
        placeholder="댓글을 입력해주세요."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      {/* 등록 버튼 */}
      <button
        className="px-10 py-2 bg-buttonBackGround text-white font-semibold rounded-lg h-24 flex items-center justify-center"
        onClick={handleSubmit}
      >
        등 록
      </button>
    </div>
  );
};

export default CommentForm;
