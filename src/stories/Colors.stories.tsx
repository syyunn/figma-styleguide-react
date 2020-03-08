import React from 'react';
import { Rectangle, RectangleTextCenter } from './Shapes.stories'
// import { Text } from './Typography.stories'

export default {
    title: 'Colors',
    parameters: {
        backgrounds: [
            { name: 'default', value: '#e6e6e6', default: true },
        ]
    },
};

export const Palette = ({ bgColor = '#000000' }) => {
    return (
        <>
            <Rectangle bblRad='0px' bbrRad='0px' bgColor={bgColor} />
            <RectangleTextCenter text={bgColor} height='50px' btlRad='0px' btrRad='0px' />
        </>
    )
}

export const Black = () => Palette({ bgColor: '#BE52F2' })
