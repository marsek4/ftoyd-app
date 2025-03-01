import React from 'react';
import './MatchTable.css';
import { ReactComponent as TeamLogo } from '../assets/icons/TeamLogo.svg';

const MatchTable = () => {
  return (
    <div className="match-table">
      {/* Match table content will go here */}
      <div className='match-card'>
        <div className='team-card'>
            <TeamLogo />
            <p className='team-name'>Command №1</p>
        </div>
        <div className='match-status'>
            <div className='match-status-count'>
                <p className='match-status-count-text'>1</p>
                <p className='match-status-count-text'>:</p>
                <p className='match-status-count-text'>2</p>
            </div>
            <div className='match-status-card'>
                <p className='match-status-card-text'>Live</p>
            </div>
        </div>
        <div className='team-card'>
            <p className='team-name'>Command №2</p>
            <TeamLogo />
        </div>
      </div>
    </div>
  );
};

export default MatchTable;