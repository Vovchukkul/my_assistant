import './Service.scss';

export const Service = () => {
  return (
    <div className="service">
      <div className="service_top">
        <p className="service_top_title">Послуга</p>
        <div className="icon_edit" />
      </div>
      <div className="service_bottom">
        <ul className="service_info">
          <li className="service_items">Назвва полуги:</li>
          <li className="service_items">Час виконання:</li>
          <li className="service_items">Ціна:</li>
        </ul>
      </div>
    </div>
  );
};