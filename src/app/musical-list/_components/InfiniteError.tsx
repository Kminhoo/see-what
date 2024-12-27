'use client';

import { useRouter } from 'next/navigation';

import Button from '@components/common/Button';

const InfiniteError = () => {
  const router = useRouter();

  return (
    <div>
      <div className="text-white text-sm text-center">뮤지컬 데이터를 가져오지 못했습니다.</div>
      <div className="mt-[30px]">
        <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
          <div className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
            <div className="flex gap-2">
              <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-white">Please try again</p>
                <p className="text-gray-500">This is the description part</p>
              </div>
            </div>
            <Button
              onClick={() => router.push('./')}
              type="button"
              className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteError;
