import React, { Fragment } from 'react';
import Rectangle from 'react-rectangle';

export default {
    title: 'Colors',
    parameters: {
        backgrounds: [
            { name: 'default', value: '#e6e6e6', default: true },
        ]
    },
};

export const Colors = () => (
    <>
        <Rectangle>
            <div style={{ background: '#BE52F2', width: '160px', height: '140px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
            <Rectangle>
                <div style={{ background: '#FFFFFF', width: '160px', height: '50px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', display: "flex", alignItems: 'center', justifyContent: 'center' }} >
                    <p style={{
                        fontSize: "17px",
                        fontFamily: "San Francisco",
                        lineHeight: "22px",
                    }}>
                        #BE52F2
                    </p>
                </div>
            </Rectangle>
        </Rectangle>
    </>
);
