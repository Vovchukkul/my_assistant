import './Locations.scss';
import { Worklocation } from "./Worklocation";

export const Locations = () => {
  return (
    <div className="locations">
      <h1 className="locations_title">Робочі локації</h1>
      <Worklocation />
      <button className="add_location">
        +
      </button>
    </div>
  );
};