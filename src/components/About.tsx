import './About.scss';

type Props = {
  number: number,
  maintext: string,
  subtext: string,
}

export const About: React.FC<Props> = ({ number, maintext, subtext }) => {
  return (
    <div className="block_about">
      <p className="number">{number}</p>
      <div className="block_about-right">
        <div className="block_about-text">{maintext}</div>
        <div className="block_about-subtext">{subtext}</div>
      </div>
    </div>
  )
}