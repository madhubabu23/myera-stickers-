// src/App.js or src/components/StickerApp.js
import React, { useState } from 'react';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';
import { Image } from 'react-konva';
import useImage from 'use-image';

const Sticker = ({ src, x, y }) => {
  const [image] = useImage(src);
  return <Image image={image} x={x} y={y} draggable />;
};

const StickerApp = () => {
  const [stickers, setStickers] = useState([]);

  const handleAddSticker = (src) => {
    setStickers([...stickers, { src, x: 50, y: 50 }]);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '20px' }}>
      <div>
        <StickerButton src="https://res.cloudinary.com/dnfml2tzo/image/upload/v1749278110/canvas_oucubf.png" alt="Sticker 1" onClick={() => handleAddSticker('/stickers/sticker1.png')} />
        <StickerButton src="/stickers/sticker2.png" alt="Sticker 2" onClick={() => handleAddSticker('/stickers/sticker2.png')} />
        <StickerButton src="/stickers/sticker3.png" alt="Sticker 3" onClick={() => handleAddSticker('/stickers/sticker3.png')} />
      </div>

      <Canvas>
        {stickers.map((sticker, index) => (
          <Sticker key={index} src={sticker.src} x={sticker.x} y={sticker.y} />
        ))}
      </Canvas>
    </div>
  );
};

export default StickerApp;
