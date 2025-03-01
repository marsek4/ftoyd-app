import React from 'react';
import { ReactComponent as MatchTrackerLogo } from '../assets/icons/MatchTrackerLogo.svg';
import { ReactComponent as ErrorLoading } from '../assets/icons/ErrorLoading.svg';
import { ReactComponent as Refresh } from '../assets/icons/Refresh.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
        <div className='header-icon'>
            <MatchTrackerLogo style={{ width: '258px', height: '23px' }} />
        </div>
        <div className='header-loading-status-container'>
            <div className='header-loading-error'>
                <ErrorLoading style={{ width: '28px', height: '28px' }}/>
                <p className='header-loading-status-text'>Ошибка: не удалось загрузить информацию</p>
            </div>
            <div className='header-refresh-button'>
                <p className='header-loading-status-text'>Обновить</p>
                <Refresh style={{ width: '26px', height: '26px' }}/>
            </div>
        </div>
    </div>
  );
};

export default Header;