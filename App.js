import React, { useState, useRef } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';

function App() {
  const [stickers, setStickers] = useState([]);
  const stageRef = useRef();

  const addSticker = (src) => {
    const id = Date.now();
    const x = Math.round(50 / 40) * 40;
    const y = Math.round(50 / 40) * 40;
    setStickers([...stickers, { id, src, x, y }]);
  };

  const updateStickerPosition = (id, x, y) => {
    setStickers(prev =>
      prev.map(s => s.id === id ? { ...s, x, y } : s)
    );
  };

  const deleteSticker = (id) => {
    setStickers(prev => prev.filter(s => s.id !== id));
  };

  const downloadImage = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = uri;
    link.click();
  };

  return (
    <div className="app">
      <div className="sidebar">
        <StickerButton src="/stickers/sticker1.png" onClick={() => addSticker('/stickers/sticker1.png')} />
        <StickerButton src="/stickers/sticker2.png" onClick={() => addSticker('/stickers/sticker2.png')} />
        <StickerButton src="/stickers/sticker3.png" onClick={() => addSticker('/stickers/sticker3.png')} />
        <button onClick={downloadImage} className="download-btn">Download</button>
      </div>
      <Canvas
        stageRef={stageRef}
        stickers={stickers}
        onDragEnd={updateStickerPosition}
        onDelete={deleteSticker}
      />
    </div>
  );
}

export default App;
