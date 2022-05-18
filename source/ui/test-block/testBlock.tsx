import Link from 'next/link';
import { dataSets } from '~source/data/dataSets';
import React from 'react';
import { ColoredBox } from '~source/ui';
import {
    availableBackgroundTypes,
    availableColors,
} from '../colored-box/coloredBox';
import cx from 'classnames';
import $ from './testBlock.module.scss';

const TestBlock = () => {
    const color = (index: number) =>
        availableColors[index % availableColors.length];
    const backgroundType = (index: number) =>
        availableBackgroundTypes[index % availableBackgroundTypes.length];
    return (
        <div className={$.container}>
            {Object.keys(dataSets).map((keyName, keyIndex) => {
                return (
                    <ColoredBox
                        key={keyName}
                        className={$.block}
                        color={color(keyIndex)}
                        backgroundType={backgroundType(keyIndex)}
                    >
                        <h1 className={$.blockTitle}>{keyName}</h1>
                        <p className={$.blockDesc}>{dataSets[keyName].desc}</p>
                        <p
                            className={cx(
                                $.blockIcon,
                                dataSets[keyName].iconType === 'text' &&
                                    $.blockIconText,
                            )}
                        >
                            {dataSets[keyName].icon}
                        </p>
                        <Link
                            href={{
                                pathname: '/learn/' + keyName,
                            }}
                        >
                            <span className={$.blockLink} />
                        </Link>
                    </ColoredBox>
                );
            })}
        </div>
    );
};

export default TestBlock;
