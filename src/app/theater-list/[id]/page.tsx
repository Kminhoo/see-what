import { fetchTheaterDetail } from '@lib/theaterDetailApi/serverApi';
import TheaterMap from './_components/TheaterMap';
import CommentForm from '@components/common/CommentForm';
import TheaterInfoDetail from './_components/TheaterInfoDetail';
import TheaterConvenienceDetail from './_components/TheaterConvenienceDetail';

interface TheaterDetailProps {
  params: { id: string };
}

export const dynamic = 'force-dynamic';

const TheaterDetailPage = async ({ params }: TheaterDetailProps) => {
  const { id } = params;

  const theaterInfo = await fetchTheaterDetail(id);

  return (
    <>
      <div className="mt-20 text-white  flex flex-col items-center">
        <section className="mt-20 px-4 flex flex-col md:flex-row justify-between gap-10 w-full  max-w-screen-xl mx-auto">
          {/* 공연장 정보 Section */}
          <div className="flex-1">
            <TheaterInfoDetail theaterInfo={theaterInfo} />
            <TheaterConvenienceDetail theaterInfo={theaterInfo} />
          </div>

          {/* 지도 Section */}
          <TheaterMap theaterInfo={theaterInfo} />
        </section>
      </div>
      
      <hr className="h-px bg-white border-0 my-10 max-w-screen-xl mx-auto" />
      
      {/* 댓글 Section */}
      <CommentForm />
    </>
  );
};

export default TheaterDetailPage;
