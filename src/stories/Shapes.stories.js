import React from 'react';

export default {
    title: 'Shapes',
    parameters: {
        backgrounds: [
            { name: 'default', value: '#e6e6e6', default: true },
        ]
    },
};


export const Rectangle = ({ width = '160px', height = '140px', bgColor = '#FFFFFF', btlRad = '12px', btrRad = '12px', bblRad = '12px', bbrRad = '12px', annotate = false }) => {
    if (annotate) {
        return (
            <>
                <div style={{ background: bgColor, width: width, height: height, borderTopLeftRadius: btlRad, borderTopRightRadius: btrRad, borderBottomLeftRadius: bblRad, borderBottomRightRadius: bbrRad }} >
                    < p style={{
                        margin: 0,
                        fontSize: "17px",
                        fontFamily: "SF Pro Text",
                        lineHeight: "22px",
                    }}>
                        width: {width} <br />
                        height: {height}
                    </p>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div style={{ background: bgColor, width: width, height: height, borderTopLeftRadius: btlRad, borderTopRightRadius: btrRad, borderBottomLeftRadius: bblRad, borderBottomRightRadius: bbrRad }}>
                </div>
            </>
        )
    }
}
