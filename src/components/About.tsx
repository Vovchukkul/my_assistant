import './About.scss';

type Props = {
  number: number,
  maintext: string,
  subtext: string,
}

export const About: React.FC<Props> = ({ number, maintext, subtext }) => {
  return (
    <div className="block_about_f">
      <p className="number">{number}</p>
      <div className="block_about_f-right">
        <div className="block_about_f-text">{maintext}</div>
        <div className="block_about_f-subtext">{subtext}</div>
      </div>
    </div>
  )
}