import './Card.scss';

type Props = {
  name: string,
  speciality: string,
};

export const Card: React.FC<Props> = ({ name, speciality }) => {
  return (
    <div className="card">
      {/* <img src={image} alt="image" /> */}
      <div className="circle"></div>
      <p className="name">{name}</p>
      <p className="speciality">{speciality}</p>
    </div>
  );
}