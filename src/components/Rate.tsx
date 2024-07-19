import './Rate.scss';
import rating_img from '../images/rating.svg';

export const Rate = () => {
  return (
    <div className="rate">
      <h1 className="rate_title">Рейтинг</h1>
      <div className="rate_main">
        <img src={rating_img} alt="img" className='rating_img' />
        <p className="rating_text">Щойно вас оцінять як виконавця, отримані оцінки відобразяться тут разом із загальним рейтингом.</p>
      </div>
    </div>
  );
};