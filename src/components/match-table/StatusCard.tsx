import React from 'react';

interface StatusCardProps {
    status: string;
}

const StatusCard: React.FC<StatusCardProps> = ({status}) => {
    if (status === 'Finished') {
        return (
            <div className='bg-[#EB0237] px-4 py-1.5 rounded min-w-[92px]'>
              <p className = 'text-white text-sm m-0'>Finished</p>
            </div>
        );
    }
    if (status === 'Ongoing') {
        return (
            <div className='bg-[#43AD28] px-4 py-1.5 rounded min-w-[92px]'>
              <p className = 'text-white text-sm m-0'>Live</p>
            </div>
        );
    }
    return (
        <div className='bg-[#EB6402] px-4 py-1.5 rounded min-w-[92px]'>
              <p className = 'text-white text-sm m-0'>Preparing</p>
        </div>
    );
}

export default StatusCard;