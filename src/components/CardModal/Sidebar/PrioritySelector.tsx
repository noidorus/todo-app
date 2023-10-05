import classNames from 'classnames';
import { useState, useMemo, createRef, MouseEvent } from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

export const PrioritySelector = (props: PrioritySelectorProps) => {
  const [selectorVisible, setSelectorVisible] = useState(false);
  const priorityRef = createRef<HTMLDivElement>();

  const handleCLickSelector = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const val = target.getAttribute('value');
    if (val) {
      props.setPrioritySelector(props.id, val);
    }

    setSelectorVisible((state) => !state);
  };

  useOnClickOutside(priorityRef, () => {
    if (selectorVisible) setSelectorVisible(false);
  });

  const selector = useMemo(() => {
    return ['+2', '+1', '±0', '−1'].map((val) => {
      const classes = classNames({
        'selector-item': true,
        checked: val === props.priority,
      });

      return (
        <li className={classes} key={val} value={val}>
          {val}
        </li>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.priority]);

  return (
    <div
      className="sidebar-item"
      onClick={handleCLickSelector}
      ref={priorityRef}
    >
      Priority
      {selectorVisible && <ul className="priority-selector">{selector}</ul>}
    </div>
  );
};

interface PrioritySelectorProps {
  id: string;
  priority: string;
  setPrioritySelector: (id: string, priority: string) => void;
}
