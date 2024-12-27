const InfiniteLoading = () => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
      <h2 className="text-white mt-4">Loading...</h2>
      <p className="text-zinc-600 ">뮤지컬 데이터를 가져오고 있습니다.</p>
    </div>
  );
};

export default InfiniteLoading;
