import React from 'react';
import { useSpring, animated } from '@react-spring/web';

function ReactSpring() {
    const [isToggled, setIsToggled] = React.useState(false);

    const fadeStyles = useSpring({
        opacity: isToggled ? 1 : 0,
        transform: isToggled ? 'translateY(0)' : 'translateY(-20px)',
        config: { duration: 500 }
    });

    return (
        <div>
            <animated.div style={fadeStyles}>
                Hello, world!
            </animated.div>
            <button onClick={() => setIsToggled(!isToggled)}>
                Toggle
            </button>
        </div>
    );
}

export default ReactSpring;