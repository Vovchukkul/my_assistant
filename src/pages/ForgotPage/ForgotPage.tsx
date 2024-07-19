import { Link } from 'react-router-dom';
import { About } from '../../components/About';
import { AnotherFooter } from '../../components/AnotherFooter';
import logo from '../../images/HyperTech.svg';
import ukraine_flag from '../../images/icons/ukraine-flag.svg';
import { SetStateAction, useState } from 'react';
import './ForgotPage.scss';
import eye_open1 from '../../images/icons/eye.svg';

export const ForgotPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNumberRight, setIsNumberRight] = useState(true);
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handlePhoneNumberChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPhoneNumber(e.target.value);
  };

  const handleShowPassword = () => {
    setIsPasswordShowed(!isPasswordShowed);
  }

  const handleChangeNewPassword = (e: { target: { value: SetStateAction<string>; }; }) => {
    setNewPassword(e.target.value);
  };

  const handleChangeIsNumberRight = () => {
    setIsNumberRight(!isNumberRight);
  };

  return (
    <div className="forgot">
      <div className="register_top-bar">
        <img src={logo} alt="logo" className='logo' />
        <div className="register__contact">
          <div className="register__tel-icon"></div>
          <a href='tel: 380634312344' className="register__number">+380 63 431 23 44</a>
        </div>
      </div>
      <div className="register_main_wrap">
        <div className="register_main">
          <div className="welcome">
            <h1 className='welcome_title'>Ласкаво просимо до співпраці з HyperTech</h1>
            <p className="welcome_subtitle">Після реєстрації ви можете отримувати замовлення і гідно заробляти</p>
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
          <div className="register_form-wrap">
            {isNumberRight ? (
              <form action="http://localhost:3000/" className='register_form'>
                <p className="form_title forgot_title">
                  Забули пароль?
                </p>
                <p className="form_subtitle">
                  Який номер телефону зв'язані з вашим профілем?
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
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className='tel_input'
                      />
                    </div>
                  </fieldset>
                </div>
                <div className="button_wrap">
                  <button 
                    type="submit" 
                    className="form_button"
                    onClick={handleChangeIsNumberRight}
                  >
                    Отримати код
                  </button>
                </div>
                <div className="form_bottom">
                  Згадали пароль? <Link to="/login" className='form_bottom-link'>Повернутися</Link>
                </div>
              </form>
            ) : (
              <form action="http://localhost:3000/" className='register_form'>
                <p className="form_title forgot_title">
                  Встановити новий пароль
                </p>
                <p className="form_subtitle">
                  Нам потрібно переконатися, що це дійсно ви. Введіть код підтвердження, який ми надіслали в SMS на ваш телефон.
                </p>
                <div className="inputs">
                  <fieldset className='fieldset'>
                    <legend className='legend'>Код підтвердження</legend>
                    <div className="code_wrap">
                      <input
                        type="number"
                        className='code_input'
                      />
                    </div>
                  </fieldset>
                  <p className="send_code_again">Відправити новий код</p>
                  <fieldset className='fieldset'>
                    <legend className='legend'>Введіть новий пароль</legend>
                    <div className="password_wrap_first">
                      <input
                        className="input_password input"
                        type={isPasswordShowed ? 'text' : 'password'}
                        value={newPassword}
                        onChange={handleChangeNewPassword}
                        name='password'
                        placeholder='Пароль'
                      />
                      <img
                        src={eye_open1}
                        alt="eye"
                        className='eye_icon_first'
                        onClick={() => handleShowPassword()}
                      />
                    </div>
                  </fieldset>
                </div>
                <div className="button_wrap">
                  <Link to="/">
                    <button 
                      type="submit" 
                      className="form_button"
                      onClick={handleChangeIsNumberRight}
                    >
                      Підтвердити новий пароль
                    </button>
                  </Link>
                </div>
                <div className="form_bottom">
                  Ввели не той номер? <p className='form_bottom-link' onClick={handleChangeIsNumberRight}>Повернутися</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="register_footer">
        <AnotherFooter />
      </div>
    </div>
  );
};