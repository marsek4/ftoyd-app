import React from 'react';
import StatusCard from './StatusCard';
import MatchCount from './MatchCount';
import {Match} from '../../types/match';

interface MatchStatusProps {
    match: Match;
}

const MatchStatus: React.FC<MatchStatusProps> = ({match}) => {
    return (
        <div className='flex flex-col items-center gap-2'>
            <MatchCount match={match}/>
            <StatusCard status={match.status} />
        </div>
    );
}

export default MatchStatus;