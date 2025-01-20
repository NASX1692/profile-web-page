import { animated, useSpring } from '@react-spring/web';
type Props = {
  children: string | JSX.Element | JSX.Element[];
  delayCounter?: number;
};

const Fade = ({ children, delayCounter = 200 }: Props) => {
  const transitions = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    delay: delayCounter,
  });

  return <animated.div style={transitions}>{children}</animated.div>;
};

export default Fade;
