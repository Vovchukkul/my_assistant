import './Pricelist.scss';
import { Service } from './Service';

export const Pricelist = () => {
  return (
    <div className="pricelist">
      <h1 className="pricelist_title">Прайс лист</h1>
      <div className="pricelist_main">
        <Service />
        <button className="add_service">
          +
        </button>
      </div>
    </div>
  );
};