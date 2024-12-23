import Link from 'next/link';

import GitHub from '@components/icons/GitHub';

import { TeamMembers } from '@components/layout/Footer';

interface TeamInfoProps {
  member: TeamMembers;
}

const TeamInfoCard = ({ member }: TeamInfoProps) => {
  return (
    <Link key={member.id} href={member.src} className="flex items-center justify-center gap-1">
      <GitHub className="fill-white w-[20px] h-[20px]" />
      <div>
        <p>{member.name}</p>
      </div>
    </Link>
  );
};

export default TeamInfoCard;
