import React from 'react';
import { ReactComponent as Refresh} from '../../assets/icons/Refresh.svg';
import { RefetchOptions, QueryObserverResult } from '@tanstack/react-query';

interface RefreshButtonProps {
    onRefresh: (options?: RefetchOptions) => Promise<QueryObserverResult>;
    isLoading: boolean;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({onRefresh, isLoading}) => {
    return (
        <div 
          className={`flex items-center px-6 py-2 bg-[#EB0237] rounded gap-2.5 cursor-pointer transition-all duration-300 hover:bg-[#c20230] ${
            isLoading ? 'opacity-60 cursor-not-allowed' : ''
          }`} 
          onClick={isLoading ? undefined : () => onRefresh()}
        >
          <p className='text-lg text-white m-0'>Обновить</p>
          <Refresh className={`w-[26px] h-[26px] ${isLoading ? 'animate-spin' : ''}`}/>
        </div>
    );
}

export default RefreshButton;