import React, { createRef, useState } from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { Button } from '../../Commons/Button/Button';

export const SidebarButtonLayout = ({
  name,
  children,
}: SidebarButtonLayoutProps) => {
  const [childrenVisible, setChildrenVisible] = useState(false);
  const itemRef = createRef<HTMLLIElement>();

  useOnClickOutside(itemRef, () => {
    if (childrenVisible) setChildrenVisible(false);
  });

  const handleCloseChildren = () => {
    setChildrenVisible(false);
  };

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        closePopUp: handleCloseChildren,
      });
    });
  };

  return (
    <li className="sidebar__item" ref={itemRef}>
      <Button
        class="btn-sidebar"
        onClick={() => setChildrenVisible((state) => !state)}
        name={name}
      />

      {childrenVisible && renderChildren()}
    </li>
  );
};

interface SidebarButtonLayoutProps {
  children: JSX.Element;
  name: string;
}
