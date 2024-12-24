import TeamInfoCard from '@components/ui/layout/TeamInfoCard';

export interface TeamMembers {
  id: number;
  name: string;
  src: string;
}

const Footer = () => {
  const teamMembersInfo: TeamMembers[] = [
    {
      id: 1,
      name: '김민후',
      src: 'https://github.com/kminhoo'
    },
    {
      id: 2,
      name: '김문식',
      src: 'https://github.com/kminhoo'
    },
    {
      id: 3,
      name: '김지은',
      src: 'https://github.com/kminhoo'
    },
    {
      id: 4,
      name: '김진실',
      src: 'https://github.com/kminhoo'
    },
    {
      id: 5,
      name: '한다영',
      src: 'https://github.com/kminhoo'
    }
  ];

  return (
    <footer>
      <div className="max-w-[1280px] w-full m-auto flex flex-col items-center justify-center p-4 text-white font-light">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            {teamMembersInfo.map((member) => (
              <TeamInfoCard key={member.id} member={member} />
            ))}
          </div>
          <p className="text-sm">@Copyright 2024 3조 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
