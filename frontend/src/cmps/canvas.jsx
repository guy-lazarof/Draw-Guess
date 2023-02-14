import { useEffect, useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { useDispatch } from 'react-redux';

import { socket } from '../services/socket.service';
import colorPicker from './../assets/img/color.jpg';
import reset from './../assets/img/reset.png';
import undo from './../assets/img/undo.jpg';

export default function Canvas() {
  const [canvasSize, setCanvasSize] = useState([350, 350]);
  const [brushColor, setBrushColor] = useState('');
  const [brushSize, setBrushSize] = useState('');

  const canvasRef = useRef(null);

  function handleChangeCanvas() {
    const canvas = canvasRef.current;
    let canvasData
    if (canvas) {
      canvasData = canvas.getSaveData();
    }
  }

  useEffect(() => {
    socket.on("drawing-from-server", (data) => {
      if (!data.payload) return;
      canvasRef.current.loadSaveData(data.payload);

    });

    return () => {
      socket.off("drawing-from-server");
    };
  });

  function handleChangeColor({ target }) {
    let { value, name: field, type } = target
    value = (type === 'range') ? +value : value
    setBrushColor((prevGuessing) => ({ ...prevGuessing, [field]: value }))
    console.log(brushColor)
  }

  function handleChangeSize({ target }) {
    let { value, name: field, type } = target
    value = (type === 'range') ? +value : value
    setBrushSize((prevGuessing) => ({ ...prevGuessing, [field]: value }))
    console.log(brushSize)
  }
  function onUndo() {
    const canvas = canvasRef.current;
    canvas.undo()
  }

  function onReset() {
    const canvas = canvasRef.current;
    canvas.clear()
  }

  return (
    <section>
      <div className='canvas-editor'>
        <label className='brush-size-label'>
          <p>brush size</p>
          <input type={"range"} id="size" name="size"
            onChange={handleChangeSize} value={brushSize.size || 3} min="1" max="7" className='brush-size-input'>
          </input>
        </label>

        <label className='brush-color-label'>
          <img src={colorPicker} className='color btn' />
          <input type={"color"} id="color" name="color"
            onChange={handleChangeColor} className='brush-color-input'>
          </input>
        </label>

        <img src={undo} onClick={onUndo} className='undo btn' />
        <img src={reset} onClick={onReset} className='reset btn' />
      </div>
      <CanvasDraw
        className={"canvas"}
        lazyRadius={0}
        brushColor={brushColor.color}
        brushRadius={brushSize.size || 3}
        canvasHeight={canvasSize[0]}
        canvasWidth={canvasSize[1]}
        ref={canvasRef}
        disabled={false}
        backgroundColor={"rgb(236, 246, 244)"}
        gridColor={"rgb(236, 246, 244)"}
        onChange={handleChangeCanvas}
      />
    </section>
  );
}