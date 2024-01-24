import { useState } from "react";

import { SketchPicker } from "react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("#fff");

  return (
    <div>
      <SketchPicker
        color={color}
        disableAlpha
        onChange={(newColor) => setColor(newColor.hex)}
      />
    </div>
  );
};

export default ColorPicker;
