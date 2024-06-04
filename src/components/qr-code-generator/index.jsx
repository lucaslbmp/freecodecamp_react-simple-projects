import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleGenerateCode() {
    setQrCode(input);
  }

  return (
    <div className="qr-code-container">
      <input
        onChange={handleInputChange}
        type="text"
        name="qr-code"
        placeholder="Enter your value"
        value={input}
      />
      <QRCode id="qr-code-value" value={qrCode} />
      <button disabled={!input || !input?.trim()} onClick={handleGenerateCode}>
        Generate
      </button>
    </div>
  );
}
