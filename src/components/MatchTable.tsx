import React from 'react';
import './MatchTable.css';
import { ReactComponent as TeamLogo } from '../assets/icons/TeamLogo.svg';
import { ReactComponent as ArrowInfo } from '../assets/icons/ArrowInfo.svg';
import { Match } from '../types/match';

interface MatchTableProps {
  matches: Match[];
  isLoading: boolean;
  error: string | null;
}

const MatchTable: React.FC<MatchTableProps> = ({ matches, isLoading, error }) => {
  if (isLoading) return <div className="match-table" style={{ color: 'white' }}>Обновление...</div>;
  if (error) return <div className="match-table">{error}</div>;

  return (
    <div className="match-table">
      {matches.map((match, index) => (
        <div key={index} className='match-card'>
          <div className='match-card-info'>
            <div className='team-card'>
              <TeamLogo />
              <p className='team-name'>{match.homeTeam.name}</p>
            </div>
            <div className='match-status'>
              <div className='match-status-count'>
                <p className='match-status-count-text'>{match.homeScore}</p>
                <p className='match-status-count-text'>:</p>
                <p className='match-status-count-text'>{match.awayScore}</p>
              </div>
              {match.status === 'Finished' ? (
              <div className='match-status-card-finished'>
                <p className = 'match-status-card-text'>Finished</p>
              </div>
              ) : match.status === 'Ongoing' ? (
                <div className='match-status-card-live'>
                  <p className = 'match-status-card-text'>Live</p>
                </div>
              ) : (
                <div className='match-status-card-preparing'>
                  <p className = 'match-status-card-text'>Match Preparing</p>
                </div>
              )}
            </div>
            <div className='team-card'>
              <p className='team-name'>{match.awayTeam.name}</p>
              <TeamLogo />
            </div>
          </div>
          {/* <div className='show-more-info-button-container'>
            <ArrowInfo className='match-table-info-arrow'/>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default MatchTable;