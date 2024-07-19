import './Worklocation.scss';

export const Worklocation = () => {
  return (
    <div className="worklocation">
      <div className="worklocation_top">
        <p className="worklocation_top_title">Населений пункт</p>
        <div className="icon_edit" />
      </div>
      <div className="worklocation_bottom">
        <ul className="worklocation_info">
          <li className="worklocation_items">Регіон:</li>
        </ul>
        <div className="choose_location"></div>
      </div>
    </div>
  );
}