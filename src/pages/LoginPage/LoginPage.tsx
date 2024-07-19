import './LoginPage.scss';
import logo from '../../images/HyperTech.svg';
import { About } from '../../components/About';
import { AnotherFooter } from '../../components/AnotherFooter';
import { Link, useNavigate } from 'react-router-dom';
import ukraine_flag from '../../images/icons/ukraine-flag.svg';
import React, { useEffect, useState } from 'react';
import eye_open from '../../images/icons/eye.svg';
import { User } from '../../types/User';

type Props = {
  user: User | null;
  onCheck: (number: string, password: string) => void;
}

export const LoginPage: React.FC<Props> = ({ onCheck, user }) => {
  const [phoneNum, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [hasSelectedUserError, setHasSelectedUserError] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleInputTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(e.target.value);
    setHasSelectedUserError(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setHasSelectedUserError(false);
  };

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    onCheck(phoneNum, password);

    if (!user) {
      setHasSelectedUserError(true);
      return;
    }

    setHasSelectedUserError(false);
    console.log(user)

    navigate('/profile');
  }
  
  return (
    <div className="login-wrap">
      <div className="login_top-bar">
        <Link to="/">
          <img src={logo} alt="logo" className='logo' />
        </Link>
        <div className="login__contact">
          <div className="login__tel-icon"></div>
          <a href='tel: 380634312344' className="login__number">+380 63 431 23 44</a>
        </div>
      </div>
      <div className="login_main_wrap">
        <div className="login_main">
          <div className="welcome">
            <h1 className='welcome_title'>З поверненням до співпраці з HyperTech</h1>
            <p className="welcome_subtitle">Ви можете отримувати замовлення і гідно заробляти</p>
            <div className="welcome_list">
              <About
                number={1} 
                maintext='Наші виконавці заробляють від 20 000 грн. на місяць'
                subtext='У середньому майстер заробляє ~ 34700 ₴'
              />
              <About
                number={2} 
                maintext='Гнучкий графік роботи та віддалена робота'
                subtext='Баланс між роботою та особистим життям'
              />
              <About
                number={3} 
                maintext='Клієнт отримує якісні послуги та надійну підтримку нашого сервісу.'
                subtext='До нас повертаються 36% для замовлення'
              />
            </div>
          </div>
          <div className="login_form-wrap">
            <form action="http://localhost:3000/" className='login_form' onSubmit={handleSubmitLogin}>
              <p className="form_title">
                Вхід виконавця
              </p>
              <div className="inputs">
                <fieldset className='fieldset'>
                  <legend className='legend'>Телефон</legend>
                  <div className="select_wrap">
                    <div className='select'>
                      <div className='option'>
                        <img src={ukraine_flag} alt="ukraine" />
                        +380
                      </div>
                    </div>
                    <input
                      type="tel"
                      className='tel_input'
                      maxLength={10}
                      value={phoneNum}
                      onChange={handleInputTelChange}
                    />
                  </div>
                </fieldset>
                <div className="password_wrapper">
                  <input
                    className="input_password input"
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    placeholder='Пароль'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <img 
                    src={eye_open} 
                    alt="eye" 
                    className='eye_icon'
                    onClick={() => handleShowPassword()}
                  />
                </div>
              </div>
              <div className="button_wrap">
                  <button type="submit" className={`form_button`}>
                    Увійти
                  </button>
              </div>
              {hasSelectedUserError && (
                <p style={{ color: 'red' }}>Please enter correct data</p>
              )}
              <div className="form_bottom">
                <p className="forget">
                  <Link to="/forgot" className='forget_link'>Забули пароль?</Link>
                </p>
                <p className="need_to_register">
                  У вас ще немає акаунта? <Link to="/registration" className='register_link'>Зареєструватися</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="login_footer">
        <AnotherFooter />
      </div>
    </div>
  );
};