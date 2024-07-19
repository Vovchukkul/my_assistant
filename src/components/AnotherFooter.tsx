import './AnotherFooter.scss';
import footerLogo from '../images/HyperTech.svg';
import { FooterList } from './FooterList';

export const AnotherFooter = () => {
  const employee = ["Увійти", "Реєстрація"];
  const forClients = ["Поширені запитання", "Договор оферты", "Правила пользования"];
  const usefulLinks = ["Політика конфіденційності", "Work with us"];
  const company = ["Про нас", "Контакти"];

  return (
    <div className="anotherfooter">
      <div className="anotherfooter-wrap">
        <div className="anotherfooter-logo-content">
          <img
            src={footerLogo}
            alt="logo"
            className='footer-logo'
          />
          <div className="socials">
            <div className="facebook social-icon"></div>
            <div className="youtube social-icon"></div>
            <div className="instagram social-icon"></div>
          </div>
        </div>
        <div className="lists-footer">
          <FooterList title='Для виконавців' items={employee} />
          <FooterList title='Для клієнтів' items={forClients} />
          <FooterList title='Корисні посилання' items={usefulLinks} />
          <FooterList title='Компания' items={company} />
        </div>
      </div>
    </div>
  );
}