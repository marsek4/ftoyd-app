import React from 'react';
import { ReactComponent as ErrorLoadingIcon } from '../../assets/icons/ErrorLoading.svg';

interface ErrorLoadingProps {
    error: string | null;
}

const ErrorLoading: React.FC<ErrorLoadingProps> =({error}) => {
    if (!error) return null;
    return (
        <div className='flex items-center px-6 py-2 bg-[#0F1318] rounded gap-2.5'>
            <ErrorLoadingIcon className='w-[28px] h-[28px]'/>
            <p className='text-lg text-white m-0'>Ошибка: не удалось загрузить информацию</p>
        </div>
    );
}

export default ErrorLoading;