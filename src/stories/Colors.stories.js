import React from 'react';

export default {
    title: 'Colors',
    parameters: {
        backgrounds: [
            { name: 'default', value: '#e6e6e6', default: true },
        ]
    },
};

export const Color = ({ bgColor = '#000000' }) => {
    return (
        <>
            <div style={{ background: bgColor, width: '160px', height: '140px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
            <div style={{
                width: '160px', height: '50px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', display: "flex", alignItems: 'center', justifyContent: 'center', background: '#FFFFFF'
            }}>
                < p style={{
                    margin: 0,
                    fontSize: "17px",
                    fontFamily: "SF Pro Text",
                    lineHeight: "22px",
                }}>
                    {bgColor}
                </p>
            </div >
        </>
    )
}

export const Black = () => Color({ bgColor: '#BE52F2' })