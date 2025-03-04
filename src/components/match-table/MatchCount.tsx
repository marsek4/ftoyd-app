import React from 'react';
import { Match } from '../../types/match';

interface MatchCountProps {
    match: Match;
}

const MatchCount: React.FC<MatchCountProps> = ({match}) => {
    return (
        <div className='flex gap-2'>
            <p className='text-2xl text-white m-0'>{match.homeScore}</p>
            <p className='text-2xl text-white m-0'>:</p>
            <p className='text-2xl text-white m-0'>{match.awayScore}</p>
        </div>
    );
}

export default MatchCount;