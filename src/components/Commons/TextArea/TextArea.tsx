import classNames from 'classnames';
import { ChangeEvent, KeyboardEvent, RefObject, useEffect } from 'react';

export const TextArea = ({
  textAreaRef,
  value,
  className,
  autofocus = false,
  placeholder = '',
  onChange,
  onEnter,
  onBlur,
}: TextAreaProps) => {
  const classes = classNames('textarea', className);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + 'px';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea
      ref={textAreaRef}
      value={value}
      onChange={handleChangeTextarea}
      onKeyDown={onEnter}
      autoFocus={autofocus}
      placeholder={placeholder}
      className={classes}
      onBlur={onBlur}
    />
  );
};

interface TextAreaProps {
  placeholder?: string;
  value: string;
  autofocus?: boolean;
  className?: string;
  textAreaRef: RefObject<HTMLTextAreaElement>;
  onChange: (text: string) => void;
  onEnter: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
}
