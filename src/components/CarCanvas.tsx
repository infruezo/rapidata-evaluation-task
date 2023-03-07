import { useEffect, useRef, useState } from "react";

export const CarCanvas = ({
  componentRef,
  image,
}: {
  componentRef: any;
  image: string;
}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [newMouseX, setNewMouseX] = useState(0);
  const [newMouseY, setNewMouseY] = useState(0);

  const canvasOffSetX = useRef(null);
  const canvasOffSetY = useRef(null);
  const startX = useRef(null);
  const startY = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 350;
    canvas.height = 350;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "red";
    context.lineWidth = 1;
    contextRef.current = context;

    const canvasOffSet = componentRef.current.getBoundingClientRect();
    canvasOffSetX.current = canvasOffSet.top;
    canvasOffSetY.current = canvasOffSet.left;
  }, []);

  const startDrawingRectangle = ({ nativeEvent }: any) => {
    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();

    startX.current = nativeEvent.offsetX;
    startY.current = nativeEvent.offsetY;

    console.log({
      X: startX.current,
      Y: startY.current,
    });

    setIsDrawing(true);
  };

  const drawRectangle = ({ nativeEvent }: any) => {
    if (!isDrawing) {
      return;
    }

    nativeEvent.preventDefault();
    nativeEvent.stopPropagation();

    setNewMouseX(nativeEvent.offsetX - canvasOffSetX.current);
    setNewMouseY(nativeEvent.offsetY - canvasOffSetY.current);

    const rectWidht = newMouseX - startX.current;
    const rectHeight = newMouseY - startY.current;

    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    contextRef.current.strokeRect(
      startX.current,
      startY.current,
      rectWidht,
      rectHeight
    );
  };

  const stopDrawingRectangle = () => {
    setIsDrawing(false);
  };

  return (
    <div className="flex flex-col space-y-4">
      <canvas
        className="canvas canvas-container cursor-cell"
        style={{ backgroundImage: `url(${image})` }}
        ref={canvasRef}
        onMouseDown={startDrawingRectangle}
        onMouseMove={drawRectangle}
        onMouseUp={stopDrawingRectangle}
        onPointerDown={startDrawingRectangle}
        onPointerMove={drawRectangle}
        onPointerUp={stopDrawingRectangle}
      ></canvas>
    </div>
  );
};
