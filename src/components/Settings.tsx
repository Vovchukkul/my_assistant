import { Link } from 'react-router-dom';
import './Settings.scss';

export const Settings = () => {
  return (
    <div className="settings">
      <h1 className="settings_title">
        Налаштування
      </h1>
      <div className="settings_main">
        <div className="settings_main_left">
          <div className="change_number section">
            <p className="section_title">Зміна номера телефону</p>
            <form className="form">
              <div className="input_wrap">
                <label htmlFor="current_number_label" className="current label">Ваш поточний номер:</label>
                <input type="number" id='current_number_label' className="current_number_input input" />
              </div>
              <div className="input_wrap">
                <label htmlFor="new_number_label" className="new label">Новий номер:</label>
                <input type="number" id='new_number_label' className="new_number_input input" />
              </div>
              <button className='submit_button'>Змінити</button>
            </form>
          </div>
          <div className="change_password section">
            <p className="section_title">Зміна пароля</p>
            <form className="form">
              <div className="input_wrap">
                <label htmlFor="current_password_label" className="current label">Ваш поточний пароль:</label>
                <input type="number" id='current_number_label' className="current_password_input input" />
              </div>
              <div className="input_wrap">
                <label htmlFor="new_password_label" className="new label">Новий пароль:</label>
                <input type="number" id='new_password_label' className="new_password_input input" />
              </div>
              <button className='submit_button'>Змінити</button>
            </form>
          </div>
        </div>
        <div className="settings_main_right">
          <div className="additional_contact">
            <p className="additional_title">Додаткові контакти</p>
            <label className='additional_input'>Ел. пошта:</label>
            <div className="additional_warning">
              <div className="icon_warning" />
              <p className="additional_text">
                Ел.пошту змінюється на сторінці <br /> <Link to="/" className='link_to_personal_info'>Персональні дані</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};