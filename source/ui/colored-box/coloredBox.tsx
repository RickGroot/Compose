import React from 'react';
import cx from 'classnames';
import $ from './coloredBox.module.scss';

type AvailableColors = 'red' | 'blue' | 'green' | 'yellow';
type BackgroundTypes = 'linear' | 'radial';

const availableColors: AvailableColors[] = ['red', 'blue', 'green', 'yellow'];
const availableBackgroundTypes: BackgroundTypes[] = ['linear', 'radial'];

const ColoredBox = ({
    className,
    children,
    onClick,
    color,
    backgroundType,
    animate,
}: {
    children: any;
    onClick?: () => void;
    className?: string;
    color?: AvailableColors;
    backgroundType?: BackgroundTypes;
    animate?: boolean;
}) => {
    const [blockColor, setBlockColor] = React.useState<AvailableColors>('red');
    const [blockBackground, setBlockBackground] =
        React.useState<BackgroundTypes>('linear');

    const randomTime = Math.floor(Math.random() * 25);

    React.useEffect(() => {
        if (color) return setBlockColor(color);

        const randomNumber = Math.floor(Math.random() * 4);
        return setBlockColor(availableColors[randomNumber]);
    }, [color]);

    React.useEffect(() => {
        if (backgroundType) return setBlockBackground(backgroundType);

        const randomNumber = Math.floor(Math.random() * 2);
        return setBlockBackground(availableBackgroundTypes[randomNumber]);
    }, [color]);

    return (
        <section
            className={cx(
                $.container,
                className && className,
                $[`container-${blockColor}-${blockBackground}`],
                animate && $[`containerAnimate-${randomTime}`],
            )}
            onClick={() => onClick && onClick()}
        >
            {children}
        </section>
    );
};

export { availableColors, availableBackgroundTypes };
export default ColoredBox;
