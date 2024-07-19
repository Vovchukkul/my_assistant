import './List.scss';

type Props = {
  title: string,
  items: string[],
};

export const List: React.FC<Props> = ({ items, title }) => {
  return (
    <div className='main_list'>
      <p className="title">{title}</p>
      <ul className="list">
        {items.map((item) => (
          <li className="item">{item}</li>
        ))}
      </ul>
    </div>
  );
}