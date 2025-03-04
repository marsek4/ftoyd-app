import React from 'react';
import { Match } from '../../types/match';
import MatchCard from './MatchCard';

interface MatchTableProps {
  matches: Match[];
  isLoading: boolean;
  error: string | null;
}

const MatchTable: React.FC<MatchTableProps> = ({ matches, isLoading, error }) => {
  if (error) return <div className="flex flex-col gap-4 mt-4">{error}</div>;

  return (
    <div className="flex flex-col gap-4 mt-4">
      {matches.map((match, index) => (
        <MatchCard key={index} match={match}/>
      ))}
    </div>
  );
};

export default MatchTable;