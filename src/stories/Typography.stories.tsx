import React, { FunctionComponent } from 'react';

export default {
    title: 'Typography',
    parameters: {
        backgrounds: [
            { name: 'default', value: '#e6e6e6', default: true },
        ]
    },
};

export const Text = ({ text = 'Lorem ipsum dolor sit amet', fontSize = "17px", fontFamily = "SF Pro Text", lineHeight = "22px" }) => {
    return (
        <>
            < p style={{
                margin: 0,
                fontSize: fontSize,
                fontFamily: fontFamily,
                lineHeight: lineHeight,
            }}>
                {text}
            </p>
        </>
    )
}

export const TextLarge = () => Text({ fontSize: '25px' })
