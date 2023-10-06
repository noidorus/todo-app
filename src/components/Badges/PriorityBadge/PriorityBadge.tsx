import classNames from 'classnames';

import './PriorityBadge.scss';

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const classes = classNames({
    'task-prio': true,
    'prio-pos-1': priority === '+1',
    'prio-pos-2': priority === '+2',
    'prio-neg-1': priority === '−1',
  });
  return (
    <>{priority !== '±0' && <span className={classes}>{priority}</span>}</>
  );
};

interface PriorityBadgeProps {
  priority: string;
}
