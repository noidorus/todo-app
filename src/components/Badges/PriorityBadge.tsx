import classNames from 'classnames';

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const classes = classNames({
    badge: true,
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
