import "./RegistrationPage.scss";
import logo from "../../images/HyperTech.svg";
import { About } from "../../components/About";
import { Link, useNavigate } from "react-router-dom";
import { AnotherFooter } from "../../components/AnotherFooter";
import { SetStateAction, useState } from "react";
import ukraine_flag from "../../images/icons/ukraine-flag.svg";
import eye_open1 from "../../images/icons/eye.svg";
import eye_open2 from "../../images/icons/eye.svg";
import { User } from "../../types/User";

type Props = {
  onSubmit: (user: User) => void;
};

export const RegisterPage: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [hasNameError, setHasNameError] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [hasPhoneError, setHasPhoneError] = useState(false);

  const [password, setPassword] = useState("");
  const [hasPasswordError, setHasPasswordError] = useState(false);

  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [hasPasswordRepeatError, setHasPasswordRepeatError] = useState(false);

  const [showPasswordFirst, setShowPasswordFirst] = useState(false);
  const [showPasswordSecond, setShowPasswordSecond] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setHasNameError(false);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    setHasPhoneError(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setHasPasswordError(false);
  };

  const handlePasswordRepeatChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordRepeat(e.target.value);
    setHasPasswordRepeatError(false);
  };

  const handleShowPasswordFirst = () => {
    setShowPasswordFirst(!showPasswordFirst);
  };

  const handleShowPasswordSecond = () => {
    setShowPasswordSecond(!showPasswordSecond);
  };

  const reset = () => {
    setName('');
    setPhoneNumber('');
    setPassword('');
    setPasswordRepeat('');
  }

  const handleSubmitRegistration = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setHasNameError(!name.trim());
    setHasPhoneError(!phoneNumber.trim());
    setHasPasswordError(!password.trim());
    setHasPasswordRepeatError(password !== passwordRepeat);

    if (
      !name.trim() ||
      !phoneNumber.trim() ||
      !password.trim() ||
      !passwordRepeat.trim() ||
      password !== passwordRepeat
    ) {
      return;
    }

    onSubmit({
      id: 0,
      name: name,
      tel: phoneNumber,
      password: password,
      speciality: 'none',
    });

    reset()
  };

  return (
    <div className="register-wrap">
      <div className="register_top-bar">
        <img src={logo} alt="logo" className="logo" />
        <div className="register__contact">
          <div className="register__tel-icon"></div>
          <a href="tel: 380634312344" className="register__number">
            +380 63 431 23 44
          </a>
        </div>
      </div>
      <div className="register_main_wrap">
        <div className="register_main">
          <div className="welcome">
            <h1 className="welcome_title">
              Ласкаво просимо до співпраці з HyperTech
            </h1>
            <p className="welcome_subtitle">
              Після реєстрації ви можете отримувати замовлення і гідно заробляти
            </p>
            <div className="welcome_list">
              <About
                number={1}
                maintext="Наші виконавці заробляють від 20 000 грн. на місяць"
                subtext="У середньому майстер заробляє ~ 34700 ₴"
              />
              <About
                number={2}
                maintext="Гнучкий графік роботи та віддалена робота"
                subtext="Баланс між роботою та особистим життям"
              />
              <About
                number={3}
                maintext="Клієнт отримує якісні послуги та надійну підтримку нашого сервісу."
                subtext="До нас повертаються 36% для замовлення"
              />
            </div>
          </div>
          <div className="register_form-wrap">
            <form
              action="http://localhost:3000/"
              className="register_form"
              onSubmit={handleSubmitRegistration}
              method="POST"
            >
              <p className="form_title">Реєстрація виконавця</p>
              <div className="inputs">
                <input
                  className="input_name input"
                  name="name"
                  placeholder="Ім'я"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
                {hasNameError && (
                  <p style={{ color: "red", margin: 0, padding: 0 }}>
                    Name is required
                  </p>
                )}
                <fieldset className="fieldset">
                  <legend className="legend">Телефон</legend>
                  <div className="select_wrap">
                    <div className="select">
                      <div className="option">
                        <img src={ukraine_flag} alt="ukraine" />
                        +380
                      </div>
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      className="tel_input"
                      maxLength={9}
                    />
                  </div>
                  {hasPhoneError && (
                    <p style={{ color: "red", margin: 0, padding: 0 }}>
                      Phone number is required
                    </p>
                  )}
                </fieldset>
                <div className="password_wrap_first">
                  <input
                    className="input_password input"
                    type={showPasswordFirst ? "text" : "password"}
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <img
                    src={eye_open1}
                    alt="eye"
                    className="eye_icon_first"
                    onClick={() => handleShowPasswordFirst()}
                  />
                </div>
                {hasPasswordError && (
                  <p style={{ color: "red", margin: 0, padding: 0 }}>
                    Please enter some password
                  </p>
                )}
                <div className="password_wrap_second">
                  <input
                    className="input_repeat_password input"
                    type={showPasswordSecond ? "text" : "password"}
                    name="repeat_password"
                    placeholder="Повторіть пароль"
                    value={passwordRepeat}
                    onChange={handlePasswordRepeatChange}
                  />
                  <img
                    src={eye_open2}
                    alt="eye"
                    className="eye_icon_second"
                    onClick={() => handleShowPasswordSecond()}
                  />
                </div>
                {hasPasswordRepeatError && (
                  <p style={{ color: "red", margin: 0, padding: 0 }}>
                    Passwords aren`t the same
                  </p>
                )}
              </div>
              <p className="form_subtitle">
                Реєструючись, ви приймаєте{" "}
                <span className="conditions">
                  Умови користувацької угоди та Політику конфіденційності
                </span>
              </p>
              <div className="button_wrap">
                <button type="submit" className="form_button">
                  Продовжити
                </button>
              </div>
              <div className="form_bottom">
                Уже є акаунт?{" "}
                <Link to="/login" className="form_bottom-link">
                  Увійти
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="register_footer">
        <AnotherFooter />
      </div>
    </div>
  );
};
