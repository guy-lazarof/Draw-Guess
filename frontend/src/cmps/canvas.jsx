import { useEffect, useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { useDispatch, useSelector } from 'react-redux';

import { socket } from '../services/socket.service';
import { getActionDraw } from '../store/draw.action';
import colorPicker from './../assets/img/color.jpg';
import reset from './../assets/img/reset.png';
import undo from './../assets/img/undo.jpg';

export default function Canvas({ status = false, drawSent }) {
  const [canvasSize, setCanvasSize] = useState([400, 350]);
  const [brushColor, setBrushColor] = useState('');
  const [brushSize, setBrushSize] = useState('');
  const canvasRef = useRef(null);
  const draw = useSelector(storeState => storeState.drawModule.draw)

  function handleChangeCanvas() {
    const canvas = canvasRef.current;
    let canvasData
    if (canvas) {
      canvasData = canvas.getSaveData();
    }
    getActionDraw(canvasData)
    console.log('draw:', canvasData)
  }

  useEffect(() => {
    if (drawSent) {
      canvasRef.current.loadSaveData(drawSent);
    }
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
          <p>brush size 📶</p>
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
        disabled={status}
        backgroundColor={"rgb(236, 246, 244)"}
        gridColor={"rgb(236, 246, 244)"}
        onChange={handleChangeCanvas}
      />

    </section>
  );
}