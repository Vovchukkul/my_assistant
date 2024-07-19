import { useState, useRef, ChangeEvent } from "react";
import ReactAvatarEditor from "react-avatar-editor";
import "./Upload.scss";
import useLocalStorage from "../useLocalStorage";

const UploadImage = () => {
  const [image, setImage] = useLocalStorage<string>("uploadedImage", '');
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0.5,
    y: 0.5,
  });
  const editorRef = useRef<ReactAvatarEditor>(null);

  const handleNewImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePositionChange = (position: { x: number; y: number }) => {
    setPosition(position);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="uploaded_image">
      <div className="uploaded_image_circle" onClick={handleClick}>
        <ReactAvatarEditor
          ref={editorRef}
          scale={1.5}
          position={position}
          onPositionChange={handlePositionChange}
          width={125}
          height={125}
          borderRadius={62.5}
          image={image}
          color={[255, 255, 255, 0]}
          className="editor-canvas"
        />
        <input
          ref={inputRef}
          name="upload-img-input"
          type="file"
          onChange={handleNewImage}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default UploadImage;
