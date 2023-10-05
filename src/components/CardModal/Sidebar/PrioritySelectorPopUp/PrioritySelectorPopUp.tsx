import classNames from 'classnames';
import { useMemo } from 'react';
import './PrioritySelectorPopUp.scss';

export const PrioritySelectorPopUp = (props: PrioritySelectorProps) => {
  const handleCLickSelector = (val: string) => {
    props.setPrioritySelector(props.id, val);
    if (props.closePopUp) {
      props.closePopUp();
    }
  };

  const selector = useMemo(() => {
    return ['+2', '+1', '±0', '−1'].map((val) => {
      const classes = classNames({
        'selector-item': true,
        checked: val === props.priority,
      });

      return (
        <li
          className={classes}
          key={val}
          value={val}
          onClick={() => handleCLickSelector(val)}
        >
          {val}
        </li>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.priority]);

  return <ul className="priority-selector">{selector}</ul>;
};

interface PrioritySelectorProps {
  id: string;
  priority: string;
  setPrioritySelector: (id: string, priority: string) => void;
  closePopUp?: () => void;
}
