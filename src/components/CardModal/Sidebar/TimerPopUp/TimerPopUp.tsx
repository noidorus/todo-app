import { Button } from '../../../Commons/Button/Button';
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

  const handleClose = () => {
    if (props.closePopUp) props.closePopUp();
  };

  return (
    <div className="timer__popup">
      {timer.startedTime ? (
        // <button onClick={handlePauseTimer}>Pause</button>
        <Button class="btn-orange" name="Pause" onClick={handlePauseTimer} />
      ) : (
        <Button class="btn-green" name="Start" onClick={handleCLickStart} />
      )}

      <Button
        name="Reset"
        class="btn-red"
        onClick={handleResetTimer}
        disabled={!timer.duration}
      />

      <Button class="btn-sec" name="Close" onClick={handleClose} />
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
  closePopUp?: () => void;
}
