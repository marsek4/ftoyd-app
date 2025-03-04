import React from 'react';
import { ReactComponent as TeamLogo } from '../../assets/icons/TeamLogo.svg';

interface TeamCardProps {
    name: string;
    reverse?: boolean;
}

const TeamCard: React.FC<TeamCardProps> =({name, reverse = false}) => {
    return (
        <div className='flex items-center gap-2' style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
              <TeamLogo className='w-[48px] h-[48px]'/>
              <p className='text-lg text-white m-0'>{name}</p>
        </div>
    );
}

export default TeamCard;