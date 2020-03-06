import React from 'react';
import { Text } from './Typography.stories'

export default {
    title: 'Shapes',
    parameters: {
        backgrounds: [
            { name: 'default', value: '#e6e6e6', default: true },
        ]
    },
};


export const Rectangle = ({ width = '160px', height = '140px', bgColor = '#FFFFFF', btlRad = '12px', btrRad = '12px', bblRad = '12px', bbrRad = '12px' }) => {

    return (
        <>
            <div style={{ background: bgColor, width: width, height: height, borderTopLeftRadius: btlRad, borderTopRightRadius: btrRad, borderBottomLeftRadius: bblRad, borderBottomRightRadius: bbrRad }} >
            </div>
        </>
    )
}

export const RectangleTextCenter = ({ width = '160px', height = '140px', bgColor = '#FFFFFF', btlRad = '12px', btrRad = '12px', bblRad = '12px', bbrRad = '12px', text = 'Lorem ipsum' }) => {
    return (
        <>
            <div style={{ background: bgColor, width: width, height: height, borderTopLeftRadius: btlRad, borderTopRightRadius: btrRad, borderBottomLeftRadius: bblRad, borderBottomRightRadius: bbrRad, display: "flex", alignItems: 'center', justifyContent: 'center' }} >
                <Text text={text} />
            </div >
        </>
    )
}
