import './Pricecard.scss';

type Props = {
  title: string;
  first_text: string;
  second_text: string;
  length: number;
}

export const Pricecard: React.FC<Props> = (
  { title, first_text, second_text, length }
) => {
  return (
    <div className="pricecard">
      <p className="pricecard_title">
        {title}
      </p>
      <div className="pricecard_dotted">
        <p className="pricecard_first_text">{first_text}</p>
        <p className="pricecard_first_text">
          {second_text.slice(0, length)}
          <a href="#dsf" className="second_text_link">
            {second_text.slice(length, -1)}
          </a>
        </p>
      </div>
    </div>
  );
};