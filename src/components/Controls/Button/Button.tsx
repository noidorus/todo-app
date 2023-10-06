import './Button.scss';

export const Button = (props: ButtonProps) => {
  return (
    <button className="button" type="button" onClick={props.onCLick}>
      {props.name}
    </button>
  );
};

interface ButtonProps {
  name: string;
  onCLick: () => void;
}
