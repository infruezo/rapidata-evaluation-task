import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CarCanvas = ({
  componentRef,
  image,
  data,
}: {
  componentRef: any;
  image: string;
  data: any;
}) => {
  const navigate = useNavigate();

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [newMouseX, setNewMouseX] = useState(0);
  const [newMouseY, setNewMouseY] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);
  const [canDraw, setCanDraw] = useState(true);

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

    if (!canDraw) return;

    startX.current = nativeEvent.offsetX;
    startY.current = nativeEvent.offsetY;

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
    setCanDraw(false);
    setCanSubmit(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      id: data.id,
      boundingBox: {
        topLeft: {
          x: startX.current.toFixed(4),
          y: (-1 * (startY.current - canvasRef.current.width)).toFixed(4),
        },
        bottomRight: {
          x: newMouseX.toFixed(4),
          y: (-1 * (newMouseY - canvasRef.current.width)).toFixed(4),
        },
      },
    });

    // redirect to thank you page
    return navigate("/thankyou", {
      state: {
        success: true,
      },
    });
  };

  const handleReset = () => {
    setCanDraw(true);
    setCanSubmit(false);
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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

      <button type="submit" className="button-v1" disabled={!canSubmit}>
        Submit Response
      </button>

      <button
        type="button"
        className="button-v2"
        onClick={handleReset}
        disabled={canDraw}
      >
        Reset
      </button>
    </form>
  );
};
