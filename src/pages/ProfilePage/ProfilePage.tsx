/* eslint-disable jsx-a11y/anchor-is-valid */
import './ProfilePage.scss';
import logo from '../../images/HyperTech.svg';
import { AnotherFooter } from '../../components/AnotherFooter';
import { TopDropdown } from '../../components/TopDropdown';
import { useState } from 'react';
import { Dashboard } from '../../components/Dashboard';
import { Pricelist } from '../../components/Pricelist';
import { ProfileInfo } from '../../components/PersonalInfo';
import { Locations } from '../../components/Locations';
import { Settings } from '../../components/Settings';
import { Myorders } from '../../components/Myorders';
import { Rate } from '../../components/Rate';
import { User } from '../../types/User';

type Props = {
  user: User | null,
  setSelectedUser: (user: User | null) => void,
};

export const ProfilePage: React.FC<Props> = ({ user, setSelectedUser }) => {
  const [activeItem, setActiveItem] = useState<number | null>(0);
  const [activeOrders, setActiveOrders] = useState<number | null>(5);

  const handleItemClick = (index: number | null) => {
    setActiveItem(index);
  };

  const handleOrderClick = (index: number | null) => {  
    setActiveOrders(index);
  };

  const [activePage, setActivePage] = useState<number | null>(1);

  return (
    <div className="profile-wrap">
      <div className="profile_top-bar">
        <img src={logo} alt="logo" className='logo' />
        <TopDropdown setActivePage={setActivePage} setSelectedUser={setSelectedUser} />
      </div>
      {activePage === 1 && (
        <>
          <nav className="profile_nav">
            <ul className="profile_list">
              <li className={`profile_item ${activeItem === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                <a className="profile_link">Dashboard</a>
              </li>
              <li className={`profile_item ${activeItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
                <a className="profile_link">Персональні дані</a>
              </li>
              <li className={`profile_item ${activeItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
                <a className="profile_link">Прайс лист</a>
              </li>
              <li className={`profile_item ${activeItem === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
                <a className="profile_link">Робочі локації</a>
              </li>
              <li className={`profile_item ${activeItem === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)}>
                <a className="profile_link">Налаштування</a>
              </li>
            </ul>
          </nav>
          <div className="profile_main_wrap">
            {activeItem === 0 && <Dashboard />}
            {activeItem === 1 && <ProfileInfo user={user} />}
            {activeItem === 2 && <Pricelist />}
            {activeItem === 3 && <Locations />}
            {activeItem === 4 && <Settings />}
          </div>
        </>
      )}
      {activePage === 2 && (
        <>
          <nav className="profile_nav">
            <ul className="profile_list order_list">
              <li className={`profile_item ${activeItem === 5 ? 'active' : ''}`} onClick={() => handleOrderClick(5)}>
                <a className="profile_link">Мої замовлення</a>
              </li>
              <li className={`profile_item ${activeItem === 6 ? 'active' : ''}`} onClick={() => handleOrderClick(6)}>
                <a className="profile_link">Рейтинг</a>
              </li>
            </ul>
          </nav>
          <div className="profile_main_wrap">
            {activeOrders === 5 && <Myorders />}
            {activeOrders === 6 && <Rate />}
          </div>
        </>
      )}
      <div className="orders_footer">
        <AnotherFooter />
      </div>
    </div>
  );
};