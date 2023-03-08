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
  const [canClear, setCanClear] = useState(false);

  const [rectangles, setRectangles] = useState([]);
  const [currentStartX, setCurrentStartX] = useState(0);
  const [currentStartY, setCurrentStartY] = useState(0);
  const [currentRectWidth, setCurrentRectWidth] = useState(0);
  const [currentRectHeight, setCurrentRectHeight] = useState(0);
  const [responseData, setResponseData] = useState([]);

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
    setCurrentStartX(startX.current);
    startY.current = nativeEvent.offsetY;
    setCurrentStartY(startY.current);

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
    setCurrentRectWidth(rectWidht);
    const rectHeight = newMouseY - startY.current;
    setCurrentRectHeight(rectHeight);

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
    setCanClear(true);
    setRectangles((prev) => [
      ...prev,
      {
        currentStartX,
        currentStartY,
        currentRectWidth,
        currentRectHeight,
        newMouseX,
        newMouseY,
      },
    ]);

    setResponseData((prev) => [
      ...prev,
      {
        id: data.id,
        boudingBox: {
          topLeft: {
            x: currentStartX.toFixed(4),
            y: (-1 * (currentStartY - canvasRef.current.width)).toFixed(4),
          },
          bottomRight: {
            x: newMouseX.toFixed(4),
            y: (-1 * (newMouseY - canvasRef.current.width)).toFixed(4),
          },
        },
      },
    ]);

    rectangles.map((rectangle) => {
      contextRef.current.strokeRect(
        rectangle.currentStartX,
        rectangle.currentStartY,
        rectangle.currentRectWidth,
        rectangle.currentRectHeight
      );
    });
    setCanSubmit(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(responseData);

    // redirect to thank you page
    return navigate("/thankyou", {
      state: {
        success: true,
      },
    });
  };

  const handleReset = () => {
    setCanSubmit(false);
    setCanClear(false);
    setRectangles([]);
    setResponseData([]);
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
        disabled={!canClear}
      >
        Clear Everything
      </button>
    </form>
  );
};
