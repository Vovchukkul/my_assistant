import './Header.scss';
import logo from './../images/HyperTech.svg';
import { Filter } from './Filter';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <div className="top-bar">
        <div className="top-bar__contact">
          <div className="top-bar__tel-icon"></div>
          <a href='tel: 380634312344' className="top-bar__number">+380 63 431 23 44</a>
        </div>
        <Link to="/">
          <img 
            src={logo}
            alt="logo"
            className="top-bar__logo"
          />
        </Link>
        <div className="top-bar__buttons">
          <Link to="/login">
            <button type="button" className="login">Вхід</button>
          </Link>
          <Link to="/registration">
            <button type="button" className="registration">Реєстрація</button>
          </Link>
        </div>
      </div>
      <div className="header__middle">
        <div className="header__title">
          Замовляй послуги
        </div>
        <div className="header__subtitle">
          перевірених майстрів
        </div>
        <div className="header__info">
          На сервісі зареєстровані кваліфіковані фахівці для виконання будь-якої роботи по техніці
        </div>
      </div>
      <div className="header__bottom">
        <Filter />
      </div>
    </div>
  );
}