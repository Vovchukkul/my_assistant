import './FooterList.scss';

type Props = {
  title: string,
  items: string[],
};

export const FooterList: React.FC<Props> = ({ items, title }) => {
  return (
    <div className='f-main-list'>
      <p className="f-title">{title}</p>
      <ul className="f-list">
        {items.map((item) => (
          <li className="f-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}