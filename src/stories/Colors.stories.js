import React from 'react';

export default {
    title: 'Colors',
    parameters: {
        backgrounds: [
            { name: 'default', value: '#e6e6e6', default: true },
        ]
    },
};

export const Color = () => (
    <>
        <div style={{ background: '#BE52F2', width: '160px', height: '140px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
        <div style={{
            width: '160px', height: '50px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', display: "flex", alignItems: 'center', justifyContent: 'center', background: '#FFFFFF'
        }}>
            < p style={{
                margin: 0,
                fontSize: "17px",
                fontFamily: "SF Pro Text",
                lineHeight: "22px",
            }}>
                #BE52F2
            </p>
        </div >
    </>
);
