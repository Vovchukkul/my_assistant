import { Link } from 'react-router-dom';
import './PersonalInfo.scss';
import { useState } from 'react';
import UploadImage from './Upload';
import { User } from '../types/User';
import { useLocalStorage } from '../services/useLocalStorage';

type Props = {
  user: User | null,
};

export const ProfileInfo: React.FC<Props> = ({ user }) => {
  const array_of_specialities = ['Наявність інструментів', 'Наявність майстерні', 'Наявність автомобіля', 'Фізична особа-підприємець', 'Терміновий виїзд', 'Надаю гарантію', 'Наявність договору', 'Без авансу за роботу', 'Працюю з командою', 'Без авансу за матеріали'];
  const [isEditingBasicInfo, setIsEditingBasicInfo] = useState(false);
  const [basicInfoFormData, setBasicInfoFormData] = useLocalStorage('userData', {
    name: `${user?.name}`,
    surname: '- не заповнено -',
    city: '- не заповнено -',
    dataOfBirth: '- не заповнено -',
    middleName: '- не заповнено -',
  });
  const [isEditingAdditionalContacts, setIsEditingAdditionalContacts] = useState(false);
  const [additionalContactsFormData, setAdditionalContactsFormData] = useLocalStorage('userAdditionalData',{
    phone: `${user?.tel}`,
    email: '- не заповнено -',
  });
  const [isEditingAboutYourself, setIsEditingAboutYourself] = useState(false);
  const [aboutYourselfFormData, setAboutYourselfFormData] = useLocalStorage('userPersonal', {
    professionAndExperience: '- не заповнено -',
    aboutMe: '- не заповнено -',
  });

  const [specialities, setSpecialities] = useState<boolean[]>(Array(array_of_specialities.length).fill(false));

  const toggleBasicInfoEditing = () => {
    setIsEditingBasicInfo(!isEditingBasicInfo);
  };

  const toggleAdditionalContactsEditing = () => {
    setIsEditingAdditionalContacts(!isEditingAdditionalContacts);
  };

  const toggleAboutYourselfEditing = () => {
    setIsEditingAboutYourself(!isEditingAboutYourself);
  };

  const handleBasicInfoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBasicInfoFormData({
      ...basicInfoFormData,
      [name]: value
    });
  };

  const handleAdditionalContactsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdditionalContactsFormData({
      ...additionalContactsFormData,
      [name]: value
    });
  };

  const handleAboutYourselfInputChange = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAboutYourselfFormData({
      ...aboutYourselfFormData,
      [name]: value
    });
  };

  const handleBasicInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingBasicInfo(false);
  };

  const handleAdditionalContactsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingAdditionalContacts(false);
  };

  const handleAboutYourselfSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingAboutYourself(false);
  };

  const getIndexOfItem = (item: string) => {
    return array_of_specialities.indexOf(item);
  };

  const handleSpecialityChange = (index: number) => {
    const updatedSpecialities = [...specialities];
    updatedSpecialities[index] = !updatedSpecialities[index];
    setSpecialities(updatedSpecialities);
  };

  return (
    <div className="profile_info">
      <h1 className="profile_info_title">Персональні дані</h1>
      <div className="profile_info_wrap">
        <div className="profile_info_left">
          <div className="basic_info">
            <div className="basic_info_top">
              <p className="basic_info_title">Загальна інформація</p>
              {!isEditingBasicInfo
                ? (<div className="icon_edit" onClick={toggleBasicInfoEditing} />)
                : (<div className="icon_cancel" onClick={toggleBasicInfoEditing} />)
              }
            </div>
            <div className="basic_info_bottom">
              {!isEditingBasicInfo
                ? (
                  <ul className="basic_info_list">
                    <li className="basic_info_items">Прізвище: {basicInfoFormData.surname}</li>
                    <li className="basic_info_items">Ім'я: {basicInfoFormData.name}</li>
                    <li className="basic_info_items">По-батькові: {basicInfoFormData.middleName}</li>
                    <li className="basic_info_items">Дата народження: {basicInfoFormData.dataOfBirth}</li>
                    <li className="basic_info_items">Місто: {basicInfoFormData.city}</li>
                  </ul>
                ) : (
                  <form className='basic_info_form' onSubmit={handleBasicInfoSubmit}>
                    <div className="basic_elements">
                      <label htmlFor="surname">Прізвище</label>
                      <input 
                        type="text" 
                        name='surname' 
                        id='surname' 
                        className='input'
                        value={basicInfoFormData.surname}
                        onChange={handleBasicInfoInputChange}
                      />
                    </div>
                    <div className="basic_elements">
                      <label htmlFor="name">Ім'я</label>
                      <input 
                        type="text" 
                        name='name' 
                        id='name'
                        className='input' 
                        value={basicInfoFormData.name}
                        onChange={handleBasicInfoInputChange}
                      />
                    </div>
                    <div className="basic_elements">
                      <label htmlFor="middle_name">По батькові</label>
                      <input 
                        type="text" 
                        name='middleName' 
                        id='middle_name' 
                        className='input' 
                        value={basicInfoFormData.middleName}
                        onChange={handleBasicInfoInputChange}
                      />
                    </div>
                    <div className="basic_elements">
                      <label htmlFor="birthday">День народження</label>
                      <input 
                        type="date" 
                        name='dataOfBirth' 
                        id='birthday' 
                        className='input' 
                        value={basicInfoFormData.dataOfBirth}
                        onChange={handleBasicInfoInputChange}
                      />
                    </div>
                    <div className="basic_elements">
                      <label htmlFor="city">Місто</label>
                      <input 
                        type="text" 
                        name='city' 
                        id='city' 
                        className='input' 
                        value={basicInfoFormData.city}
                        onChange={handleBasicInfoInputChange}
                      />
                    </div>
                    <div className="submit_buttons">
                      <button className="cancel_button type_button" onClick={toggleBasicInfoEditing}>Скасувати</button>
                      <button type='submit' className="save_button type_button">Зберегти</button>
                    </div>
                  </form>
                )}
            </div>
          </div>
          <div className="photo">
            <p className="photo_title">Фотографія</p>
            <div className="photo_bottom">
              {/* <div className="photo_img"></div> */}
              <UploadImage />
              <p className="photo_subtitle">
                <strong>Увага!</strong> На фото не повинно бути сторонніх об’єктів (темних окулярів, головних уборів, алкоголю, сигарет, оголених частин тіла, татуювання, посторонніх людей та тварин), а сама фотографія повинна бути гарної якості.
                Завантажена фотографія підвищує довіру клієнта до виконавця.
              </p>
            </div>
          </div>
          <div className="additional_contacts">
            <div className="additional_contacts_top">
              <p className="additional_contacts_title">Додаткові контакти</p>
              <div className="icon_edit" onClick={toggleAdditionalContactsEditing} />
            </div>
            {!isEditingAdditionalContacts
              ? (
                <ul className="additional_contacts_list">
                  <li className="additional_contacts_item"><span className="gray">Телефон:</span> {additionalContactsFormData.phone}</li>
                  <li className="additional_contacts_item"><span className="gray">Ел. пошта:</span> {additionalContactsFormData.email}</li>
                </ul>
              ) : (
                <form className='additional_contacts_form' onSubmit={handleAdditionalContactsSubmit}>
                  <div className="basic_elements">
                    <label htmlFor="phone">Телефон</label>
                    <input 
                      type="text" 
                      name='phone' 
                      id='phone' 
                      className='input'
                      value={additionalContactsFormData.phone}
                      onChange={handleAdditionalContactsInputChange}
                    />
                  </div>
                  <div className="basic_elements">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      name='email' 
                      id='email'
                      className='input' 
                      value={additionalContactsFormData.email}
                      onChange={handleAdditionalContactsInputChange}
                    />
                  </div>
                  <div className="submit_buttons">
                      <button className="cancel_button type_button" onClick={toggleAdditionalContactsEditing}>Скасувати</button>
                      <button type='submit' className="save_button type_button">Зберегти</button>
                    </div>
                </form>
              )}
          </div>
          <div className="about_yourself">
            <div className="about_yourself_top">
              <p className="about_yourself_title">Інформація про себе</p>
              <div className="icon_edit" onClick={toggleAboutYourselfEditing} />
            </div>
            {!isEditingAboutYourself
              ? (
                <ul className="about_yourself_list">
                  <li className="about_yourself_item"><span className="gray">Професія та досвід:</span> {aboutYourselfFormData.professionAndExperience}</li>
                  <li className="about_yourself_item"><span className="gray">Про мене:</span> {aboutYourselfFormData.aboutMe}</li>
                </ul>
              ) : (
                <form className='about_yourself_form' onSubmit={handleAboutYourselfSubmit}>
                  <div className="basic_elements">
                    <label htmlFor="experience">Професія та досвід</label>
                    <input 
                      type="text" 
                      name='professionAndExperience' 
                      id='experience' 
                      className='input'
                      value={aboutYourselfFormData.professionAndExperience}
                      onChange={handleAboutYourselfInputChange}
                    />
                  </div>
                  <div className="basic_elements">
                    <label htmlFor="aboutMe">Про мене</label>
                    <textarea
                      name='aboutMe' 
                      id='aboutMe'
                      className='input' 
                      value={aboutYourselfFormData.aboutMe}
                      onChange={handleAboutYourselfInputChange}
                    />
                  </div>
                  <div className="submit_buttons">
                      <button className="cancel_button type_button" onClick={toggleAboutYourselfEditing}>Скасувати</button>
                      <button type='submit' className="save_button type_button">Зберегти</button>
                    </div>
                </form>
              )}
          </div>
          <div className="speciality_info">
            <div className="speciality_info_top">
              <p className="speciality_info_title">Спеціалізована інформація</p>
              <div className="icon_edit"></div>
            </div>
            <ul className="speciality_info_list">
              {array_of_specialities.map((item, index) => (
                <div className="input_items">
                  <input 
                    name={getIndexOfItem(item).toString()} 
                    type="checkbox" 
                    className="speciality_info_item"
                    checked={!item[index]}
                    onChange={() => handleSpecialityChange(index)}
                  />
                  <label htmlFor={getIndexOfItem(item).toString()} className='input_label'>{item}</label>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="profile_info_right">
          <div className="number_for_entry">
            <p className="number_title">Телефон для входу</p>
            <p className="number_subtitle"><span className="gray">Основний номер для входу:</span> *Тут писатиметься, що вказано під час реєстрації*</p>
            <div className="orange_block">
              <div className="icon_warning" />
              <p className="orange_block_text">
                Телефон для входу в особистий кабінет змінюється на сторінці <Link to="/" className='link_to_setupe'>Налаштування</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
