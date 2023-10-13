import { useEffect, useState } from 'react';
import { getDuration } from '../../helpers/date';
import classNames from 'classnames';

export const TimerBadge = ({ timer }: TimerBadgeProps) => {
  const [duration, setDuration] = useState(
    getDuration(timer.startedTime, timer.duration)
  );

  useEffect(() => {
    if (timer.startedTime) {
      const interval = setInterval(() => {
        const duration = getDuration(timer.startedTime, timer.duration);
        setDuration(duration);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timer]);

  const badgeVisible = !!timer.startedTime || timer.duration > 0;
  const classes = classNames({
    badge: true,
    'timer-badge': true,
    'timer-badge-active': !!timer.startedTime,
    'timer-badge-paused': !timer.startedTime,
  });

  return <>{badgeVisible && <span className={classes}>{duration}</span>}</>;
};

interface TimerBadgeProps {
  timer: {
    startedTime: null | number;
    duration: number;
  };
}
