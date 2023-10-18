import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Image, Transformer ,Text } from "react-konva";
import "./App.css";
import imageLink from "./assets/image.jpeg";
import VideoRender from "./VideoRender";


function App() {
  const [image, setImage] = useState(null);
  const [text ,setText] = useState()
  const [renderText , setRenderText] = useState({text:'' , isAdd :false})
  const imageRef = useRef();
  // const textRef = useRef()
  const trRef = useRef();
  // const trRef2 = useRef();
  
  const [imageProps, setImageProps] = useState({
    x: 100, // Initial X position
    y: 100, // Initial Y position
    width: 200, // Initial width
    height: 200, // Initial height
    selected: false, // Selected state
  });

  const [textProps ,setTextProps] = useState({
    selected :false 
  })

  useEffect(() => {
    const img = new window.Image();
    img.src = imageLink;

    img.onload = () => {
      setImage(img);
    };
  }, []);

  useEffect(() => {
    if (imageProps.selected) {
      trRef.current.nodes([imageRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [imageProps.selected]);

  const handleImageClick = () => {
    setImageProps({
      ...imageProps,
      selected: !imageProps.selected,
    });
    console.log(imageProps.selected)
  };
  
  const addButtonHandler = ( )=>{
    if(renderText.isAdd){
      setRenderText({...renderText , text:'' , isAdd:false})
    }else{
      setRenderText({...renderText , text:text , isAdd:true})
    }
  }



  return (
    <>
    <Stage width={800} height={600}>
      <Layer>
            <Image
              ref={imageRef}
              image={image}
              x={imageProps.x}
              y={imageProps.y}
              width={imageProps.width}
              height={imageProps.height}
              onClick={handleImageClick}
            />
        {imageProps.selected && (
          <Transformer
            ref={trRef}
            enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
  
          />
        )}
    { renderText.isAdd ? <Text
          text={renderText.text}
          x={100}
          y={100}
          fontSize={30}
          fontFamily="Arial"
          fill="white"
          draggable ={true}
        />  :null}
        
      </Layer>
    </Stage>
     <input  onChange={(e)=>setText(e.target.value)} value={text}></input>
    <button onClick={()=> addButtonHandler()}>{renderText.isAdd?'Remove':"Add"}</button>
    <VideoRender/>
    </>

  );
}

export default App;
