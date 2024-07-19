import './Blockabout.scss';

type Props = {
  number: number,
  maintext: string,
  subtext: string,
}

export const Blockabout: React.FC<Props> = ({ number, maintext, subtext }) => {
  return (
    <div className="block_about" style={{ height: 300 }}>
      <p className="number">{number}</p>
      <div className="block_about-right">
        <div className="block_about-text">{maintext}</div>
        <div className="block_about-subtext">{subtext}</div>
      </div>
    </div>
  )
}