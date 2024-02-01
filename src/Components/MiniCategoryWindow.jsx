import React, { useEffect, useState } from "react";

export const MiniCategoryWindow = ({ handleOpenCaty, fetchCategory }) => {
  const [selectValue, setSelectValue] = useState("");
  const [catNameValue, setCatNameValue] = useState("");

  const inputSelect = (e) => {
    setSelectValue(e.target.value);
  };
  const inputCatName = (e) => {
    setCatNameValue(e.target.value);
  };

  const handleAddCategory = async () => {
    try {
      if (!selectValue || !catNameValue) {
        return alert("Please enter Category Name or select the items!");
      }
      const categoryData = {
        name: catNameValue,
        categoryImg: selectValue,
      };

      const response = await fetch("http://localhost:8080/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoryData),
      });
      if (response.ok) {
        console.log(response.message);
        handleOpenCaty();
        fetchCategory();
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-full items-center">
      <div className="w-[495px]  bg-white m-auto rounded-lg">
        <div className="flex justify-between items-center px-6 py-5 ">
          <div className="text-xl font-semibold">Add Category</div>
          <i
            class="fa-solid fa-x cursor-pointer text-orange-500"
            onClick={handleOpenCaty}
          ></i>
        </div>

        <hr />
        <div className="p-6 ">
          <div className="flex gap-3 mb-8">
            <select
              name=""
              id=""
              className="w-[84px] h-12 px-4 border-gray-300 bg-gray-100 rounded-lg hover:shadow-lg duration-200"
              onChange={inputSelect}
            >
              <option value="&#127968;">&#127968;</option>
              <option value="&#128187;">&#128187;</option>
              <option value="&#129692;">&#129692;</option>
              <option value="&#128249;">&#128249;</option>
              <option value="&#127858;">&#127858;</option>
              <option value="&#9968;">&#9968;</option>
              <option value="&#128670;">&#128670;</option>
              <option value="&#128672;">&#128672;</option>
              <option value="&#128693;">&#128693;</option>
              <option value="&#128665;">&#128665;</option>
            </select>
            <input
              type="text"
              placeholder="Name"
              onChange={inputCatName}
              className="w-[350px] h-12 border border-gray-300 bg-gray-100 rounded-lg px-4 hover:shadow-lg duration-200"
            />
          </div>
          <button
            className="w-[446px] h-10 bg-orange-500 flex items-center justify-center gap-2 text-white rounded-lg hover:shadow-lg duration-200 active:scale-95"
            onClick={handleAddCategory}
          >
            <i class="fa-solid fa-plus"></i> Add Category
          </button>
        </div>
      </div>
    </div>
  );
};
export default MiniCategoryWindow;
