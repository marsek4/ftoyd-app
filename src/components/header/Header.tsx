import React from 'react';
import { ReactComponent as MatchTrackerLogo } from '../../assets/icons/MatchTrackerLogo.svg';
import RefreshButton from '../header/RefreshButton';
import ErrorLoading from '../header/ErrorLoading';
import { RefetchOptions, QueryObserverResult } from '@tanstack/react-query';

interface HeaderProps {
  onRefresh: (options?: RefetchOptions) => Promise<QueryObserverResult>;
  isLoading: boolean;
  error: string | null;
}

const Header: React.FC<HeaderProps> = ({ onRefresh, isLoading, error }) => {
  return (
    <div className='flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <MatchTrackerLogo className="w-[258px] h-[23px]" />
      </div>
      <div className='flex items-center gap-4'>
        <ErrorLoading error={error} />
        <RefreshButton onRefresh={onRefresh} isLoading={isLoading}/>
      </div>
    </div>
  );
};

export default Header;