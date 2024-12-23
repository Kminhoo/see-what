'use client';

import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    fetch('api/musical')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return <div className="text-black">HomePage</div>;
};

export default HomePage;
