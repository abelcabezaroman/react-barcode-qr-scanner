import React from "react"; // ES6
import QrReader from 'react-qr-scanner'

const previewStyle = {
    height: 500,
    width: 625,
}

export function QrScanner () {

    const successScan = (data) => {
        if (data) {
            console.log(data);
        }
    }


    const errorScan = (err) => {
        console.log(err);
    }

    return (
        <QrReader
            style={previewStyle}
            onError={errorScan}
            onScan={successScan}
        />
    )
}
