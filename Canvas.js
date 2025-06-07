// src/components/Canvas.js
import React from 'react';
import { Stage, Layer } from 'react-konva';

const Canvas = ({ children }) => {
  return (
    <div className="canvas-container" style={{ border: '1px solid #ccc', display: 'inline-block' }}>
      <Stage width={600} height={400}>
        <Layer>
          {children}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
