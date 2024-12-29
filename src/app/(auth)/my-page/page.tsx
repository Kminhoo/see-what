import MyProfilePage from '@app/(auth)/my-page/_components/MyProfilePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEEWHAT 마이페이지',
  description: 'SEEWHAT 마이페이지에서 개인 정보를 관리하세요. 프로필 업데이트, 닉네임 변경 기능을 이용할 수 있습니다.'
};

const MyPage = () => {
  return (
    <div>
      <MyProfilePage />
    </div>
  );
};

export default MyPage;
