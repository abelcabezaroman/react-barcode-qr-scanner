import './App.css';
import { BarcodeScanner } from "./BarcodeScanner/BarcodeScanner";
import { QrScanner } from "./QrScanner/QrScanner";

function App () {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Barcode Scanner</h1>
                <BarcodeScanner/>
                <h1>Qr Scanner</h1>
                <QrScanner/>
            </header>
        </div>
    );
}

export default App;
