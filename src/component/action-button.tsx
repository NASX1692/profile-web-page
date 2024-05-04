import { animated, useSpring } from '@react-spring/web';
import colorPalettes from '../../color-palettes';
export interface IButton {
  name?: string;
  display: string;

  action?: string;
  onSelectAction?: (actionName: string | undefined) => void;
}

const ActionButton = ({
  name = '',
  display,
}: //   onSelectAction,
IButton) => {
  const [springs, setSprings] = useSpring(() => ({
    // y: 100,
    x: 0,
    color: '#ffff',
    transform: `translateX(0px)`,
    opacity: 0.7,
  }));

  const onHover = (isHover: boolean) => {
    setSprings({
      opacity: isHover ? 10 : 0.7,
      transform: isHover ? `translateX(30px)` : `translateX(0px)`,
      delay: 100,
      color: isHover ? colorPalettes.onSelect : '#ffff',
    });
  };

  //   const handleGetAction = useCallback(
  //     (actionName: string | undefined) => {
  //       onSelectAction(actionName);
  //     },
  //     [],
  //   );

  return (
    <animated.div style={springs}>
      <button
        onClick={() => {
          //   handleGetAction(name);
        }}
        onMouseOver={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        id={name}
        className="flex w-[200px] justify-center"
      >
        {display}
      </button>
    </animated.div>
  );
};

export default ActionButton;
