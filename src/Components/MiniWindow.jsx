import React from "react";

export const MiniWindow = ({ handleOpen }) => {
  const inputAmount = (e) => {
    console.log(e.target.value);
  };
  const inputSelect = (e) => {
    console.log(e.target.value);
  };
  const inputNote = (e) => {
    console.log(e.target.value);
  };

  const testLocalStorage = () => {
    const storedToken = localStorage.getItem("token");
    console.log(storedToken, "StoredToken");
  };
  const deleteStorage = () => {
    localStorage.removeItem("token");
  };
  const handleAddRecord = () => {
    const transactionData = [
      {
        userId: "bring user ID",
        name: "user name",
        amount: "bring inputAmount",
        transaction_type: "INC || EXP",
        description: "TEXT, bring note",
        createdAt: "Date",
        updateAt: "Date",
        categoryId: "bring catId",
        payee: "text",
      },
    ];
  };
  return (
    <div className="flex h-full items-center">
      <div className="w-[800px] h-[512px] bg-white m-auto rounded-lg">
        <div className="flex justify-between py-5 px-6 text-xl font-semibold">
          <div>Add Record</div>
          <button className="text-black" onClick={handleOpen}>
            <i class="fa-solid fa-circle-xmark text-orange-500"></i>
          </button>
        </div>
        <hr />
        {/* Left side =============================== */}
        <div className="flex px-6 py-5">
          <div>
            <div className="flex items-center w-[348px] h-10 justify-between bg-gray-100 rounded-full mb-5">
              <div className="w-1/2 flex justify-center hover:bg-orange-500">
                Expense
              </div>
              <div className="w-1/2 flex justify-center">Income</div>
            </div>
            <div className=" border border-gray-300 rounded-lg bg-gray-100 px-4 py-3 mb-[19px]">
              <p>Amount</p>
              <div className="flex gap-1">
                <p className="text-gray-400">₮</p>
                <input
                  type="number"
                  placeholder="0.00"
                  className="bg-gray-100 px-1 w-full"
                  onChange={inputAmount}
                />
              </div>
            </div>
            <div className="flex flex-col mb-[19px]">
              <label htmlFor="" className="mb-[5px]">
                Category
              </label>
              <select
                name=""
                id=""
                className=" rounded-lg border border-gray-300 w-[348px] h-[48px] px-4 bg-gray-100"
                onChange={inputSelect}
              >
                <option value="choose">Choose</option>
                <option value="test">Test</option>
              </select>
            </div>
            <div className="flex gap-3">
              <div>
                <div className="mb-[5px]">Date</div>
                <select
                  name=""
                  id=""
                  className="w-[168px] h-12 border border-gray-300 rounded-lg bg-gray-100"
                >
                  <option value=""></option>
                </select>
              </div>
              <div>
                <div className="mb-[5px]">Time</div>
                <select
                  name=""
                  id=""
                  className="w-[168px] h-12 border border-gray-300 rounded-lg bg-gray-100"
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="mt-8">
              <button
                className="w-[348px] bg-orange-500 h-10 rounded-full text-white"
                onClick={testLocalStorage}
              >
                Add Record
              </button>
              {/* Testing purpose */}
              <button className="border" onClick={deleteStorage}>
                Delete Storage
              </button>
            </div>
          </div>
          {/* Right side =============================== */}
          <div className="px-6">
            <div className="mb-[19px]">
              <div className="mb-[5px]">Payee</div>
              <select
                name=""
                id=""
                className="w-[384px] h-12 border border-gray-300 bg-gray-100 rounded-lg"
              >
                <option value=""></option>
              </select>
            </div>
            <div>
              <p className="mb-[5px]">Note</p>
              <textarea
                name=""
                id=""
                cols="39"
                rows="10"
                className="border border-gray-300 bg-gray-100 rounded-lg p-4"
                placeholder="Write here"
                onChange={inputNote}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniWindow;
