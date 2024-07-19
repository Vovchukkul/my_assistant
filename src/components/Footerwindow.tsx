import './Footerwindow.scss';
import mailbox from '../images/mailbox.svg';

export const Footerwindow = () => {
  return (
    <div className="footer-window">
      <div className="window-left">
        <h1 className="window-title">Потрібна допомога у підборі майстра?</h1>
        <p className="window-subtitle">
          Просто зателефонуйте або залиште заявку на підбір майстра
        </p>
        <div className="window-buttons">
          <div className="number-button">
            <div className="number__tel-icon"></div>
            <div className="number__number">
              <a href="tel: 380634312344" className='number__link'>+380 63 431 23 44</a>
            </div>
          </div>
          <button className="comment-button">
            Залишити заявку на підбір майстра
          </button>
        </div>
      </div>
      <img
        src={mailbox}
        alt="mailbox"
        className='mailbox'
      />
    </div>
  );
}