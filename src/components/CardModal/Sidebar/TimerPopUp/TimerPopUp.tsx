import './TimerPopUp.scss';

export const TimerPopUp = ({ id, timer, ...props }: TimerPopUpProps) => {
  const handleCLickStart = () => {
    props.setTimer(id, Date.now());
  };

  const handlePauseTimer = () => {
    if (timer.startedTime) {
      const duration = Date.now() - timer.startedTime;
      props.pauseTimer(id, duration);
    }
  };

  const handleResetTimer = () => {
    props.resetTimer(id);
  };

  return (
    <div className="timer__popup">
      {timer.startedTime ? (
        <button onClick={handlePauseTimer}>Pause</button>
      ) : (
        <button onClick={handleCLickStart}>Start</button>
      )}
      <button disabled={timer.duration === 0} onClick={handleResetTimer}>
        Reset
      </button>
    </div>
  );
};

interface TimerPopUpProps {
  id: string;
  timer: {
    startedTime: null | number;
    duration: number;
  };
  setTimer: (id: string, startedTime: number) => void;
  pauseTimer: (id: string, duration: number) => void;
  resetTimer: (id: string) => void;
}
