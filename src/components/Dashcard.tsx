import './Dashcard.scss';

type Props = {
  title: string;
  first_text: string;
  second_text: string;
  length: number;
}

export const Dashcard: React.FC<Props> = (
  { title, first_text, second_text, length }
) => {
  return (
    <div className="dashcard">
      <p className="dashcard_title">
        {title}
      </p>
      <div className="dashcard_dotted">
        <p className="dashcard_first_text">{first_text}</p>
        <p className="dashcard_first_text">
          {second_text.slice(0, length)}
          <a href="#dsf" className="second_text_link">
            {second_text.slice(length, -1)}
          </a>
        </p>
      </div>
    </div>
  );
};