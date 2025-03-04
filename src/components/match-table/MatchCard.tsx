import React from 'react';
import TeamCard from './TeamCard';
import MatchStatus from './MatchStatus';
import { Match } from '../../types/match';

interface MatchCardProps {
    match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({match}) => {
    return (
        <div className='flex items-center p-4 bg-[#0B0E12] rounded gap-4'>
          <div className='flex-1 flex items-center justify-between'>
            
            <TeamCard name={match.homeTeam.name} />

            <MatchStatus match={match}/>

            <TeamCard name={match.awayTeam.name} reverse={true} />
          </div>
        </div>
    )
}

export default MatchCard;