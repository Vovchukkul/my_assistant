import './Myorders.scss';

export const Myorders = () => {
  return (
    <div className="myorders">
      <h1 className="myorders_title">
        Мої замовлення
      </h1>
      <div className="myorders_filter_wrap">
        <p className="myorders_text">Стадія:</p>
        <ul className="myorders_filter">
          <li className="myorders_items">Всі</li>
          <li className="myorders_items">Нове замовлення</li>
          <li className="myorders_items">Домовляюся</li>
          <li className="myorders_items">В роботі</li>
        </ul>
      </div>
    </div>
  );
};