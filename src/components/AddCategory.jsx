import { useState } from "react";

/* eslint-disable react/prop-types */

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newCategory = inputValue.trim();
    if (newCategory.length <= 1) return;
    onAddCategory(newCategory);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Agregar categoría"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
