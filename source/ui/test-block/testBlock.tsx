import Link from 'next/link';
import { dataSets } from 'pages/data/dataSets';
import React from 'react';
import { ColoredBox } from '~source/ui';
import {
    availableBackgroundTypes,
    availableColors,
} from '../colored-box/coloredBox';
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
                        <p className={$.blockIcon}>{dataSets[keyName].icon}</p>
                        {/* <div className={$.blockIcon}>
                            <svg width="100%" height="100%" viewBox="0 0 60 60">
                                <text x="0" y="60" fontSize="75">
                                    {dataSets[keyName].icon}
                                </text>
                            </svg>
                        </div> */}
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
