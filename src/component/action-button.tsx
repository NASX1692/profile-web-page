import { animated, useSpring } from '@react-spring/web';
import colorPalettes from '../../color-palettes';
import { useCallback, useEffect, useState } from 'react';

export interface IButton {
  name?: string;
  display: string;
  activeId?: string;
  onSelectAction?: (sectionId: string) => void;
}

const ActionButton = ({
  name = '',
  display,
  activeId,
  onSelectAction,
}: IButton) => {
  const [active, setActive] = useState<boolean>(false);
  const [springs, setSprings] = useSpring(() => ({
    x: 0,
    color: colorPalettes.light,
    transform: `translateX(0px)`,
    opacity: 0.7,
  }));

  const styleChecker = (isActive: boolean) => {
    setSprings({
      opacity: isActive ? 10 : 0.7,
      transform: isActive ? `translateX(30px)` : `translateX(0px)`,
      delay: 100,
      color: isActive ? colorPalettes.content : colorPalettes.content,
    });
  };

  const handleGetAction = useCallback(
    (actionName: string | undefined) => {
      if (actionName && onSelectAction) {
        onSelectAction(actionName);
      }
    },
    [onSelectAction],
  );

  useEffect(() => {
    if (active) {
      styleChecker(true);
    } else {
      styleChecker(false);
    }
  }, [active]);

  useEffect(() => {
    if (activeId === name) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeId]);

  return (
    <animated.div style={springs}>
      <button
        onClick={() => {
          handleGetAction(name);
        }}
        onMouseOver={() => styleChecker(true)}
        onMouseLeave={() => styleChecker(false)}
        className="flex justify-center border-0	m-0	p-0 bg-transparent cursor-pointer "
      >
        {display}
      </button>
    </animated.div>
  );
};

export default ActionButton;
