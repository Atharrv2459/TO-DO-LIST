import { useState } from "react";

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="relative w-full">
      <div className="flex items-center border rounded-md px-3 py-2 w-full">
        <i className="material-symbols-rounded mr-2">{icon}</i>
        <input type={isPasswordShown ? "text" : type} placeholder={placeholder} className="w-full outline-none" required/>
        {type === "password" && (
          <i onClick={() => setIsPasswordShown((prev) => !prev)}
            className="material-symbols-rounded ml-2 cursor-pointer select-none">
            {isPasswordShown ? "visibility" : "visibility_off"}
          </i>
        )}
      </div>
    </div>
  );
};

export default InputField;
