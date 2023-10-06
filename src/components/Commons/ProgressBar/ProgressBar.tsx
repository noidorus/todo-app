import './ProgressBar.scss';

export const ProgressBar = ({ completed }: ProgressBarProps) => {
  const fillerStyle = {
    width: `${completed}%`,
    backgroundColor: completed === 100 ? 'green' : 'blue',
  };

  return (
    <div className="progressbar-container">
      <span className="percents">{`${completed}%`}</span>
      <div className="progressbar">
        <div style={fillerStyle} className="filler"></div>
      </div>
    </div>
  );
};

interface ProgressBarProps {
  completed: number;
}
