import classNames from 'classnames';
import './Button.scss';

export const Button = ({ disabled = false, ...props }: ButtonProps) => {
  const classes = classNames('button', props.class);

  return (
    <button
      className={classes}
      disabled={disabled}
      type="button"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

interface ButtonProps {
  name: string;
  class?: string;
  disabled?: boolean;
  onClick: () => void;
}
