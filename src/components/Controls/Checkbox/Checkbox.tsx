import { ChangeEvent } from 'react';
import './Checkbox.scss';

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.checked);
  };

  return (
    <input
      className="checkbox"
      type="checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
};

interface CheckboxProps {
  checked: boolean;
  onChange: (ckecked: boolean) => void;
}
