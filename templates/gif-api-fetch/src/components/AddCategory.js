import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => setInputValue(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

// Para obligar pasar el argumento para la función
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
