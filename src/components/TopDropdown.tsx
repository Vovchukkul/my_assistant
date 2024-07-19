import './TopDropdown.scss';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { User } from '../types/User';

type Props = {
  setActivePage: React.Dispatch<React.SetStateAction<number | null>>,
  setSelectedUser: (user: User | null) => void,
};

export const TopDropdown: React.FC<Props> = ({ setActivePage, setSelectedUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeIndex = (index: number | null) => {
    setActivePage(index);
  };

  return (
    <div className="top_dropdown">
      <button
        className="top_dropdown_button"
        onClick={handleOpenMenu}
        style={{
          backgroundColor: isOpen ? "rgba(88, 109, 120, 1)" : 'transparent'
        }}
      >
        <div className="top_dropdown_main">
          <div className="top_dropdown-icon" />
          <p className="top_dropdown_text">Кабінет</p>
          <div className="toogle_button" />
        </div>
      </button>

      {isOpen && (
        <ul className="top_dropdown-menu">
          <li className='top_dropdown-menu_item' onClick={() => handleChangeIndex(1)}>
            <a className='top_dropdown-menu_link'>Мій профіль</a>
          </li>
          <li className='top_dropdown-menu_item' onClick={() => handleChangeIndex(2)}>
            <a className='top_dropdown-menu_link'>Замовлення</a>
          </li>
          <li className='top_dropdown-menu_item' onClick={() => handleChangeIndex(3)}>
            {/* <a className='top_dropdown-menu_link'>Вихід</a> */}
            <button className="top_dropdown-menu_link" onClick={() => {
               navigate('/')
               setSelectedUser(null);
            }}>Вихід</button>
          </li>
        </ul>
      )}
    </div>
  );
};
