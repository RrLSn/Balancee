import { useNavigate } from "react-router-dom";

const ToCode = ({withdrawnAmount, setWithdrawnAmount, handleClick, errMsg, okMsg}) => {
  const navigate = useNavigate();

  const handleWithdraw = (e) => {
    setWithdrawnAmount(e.target.value);
  };
  return (
    <section>
      <div
        className="w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer ml-5"
        onClick={() => navigate("/cashout")}
      >
        <img src="/svg/arrowLeft.svg" alt="" />
      </div>
      <div className="w-[70%] h-[30rem] m-auto bg-white p-10 rounded-md flex flex-col gap-10">
      <p className={errMsg ? "text-blue-50 font-bold p-2 bg-red-500 italic" : " hidden"} >{errMsg}</p>
        <p className={okMsg ? " italic text-blue-50 p-2 font-bold bg-green-500" : "hidden"}>{okMsg}</p>
        <span className="flex flex-col">
          <select
            name=""
            id=""
            className="border outline-none w-[100%] h-[40px]"
          >
            <option value="">~Select Gift~</option>
            <option value="code">Redeem to Code</option>
          </select>
        </span>

        
        <span className="flex flex-col">
          <label>Amount:</label>
          <input
            type="number"
            placeholder=""
            onChange={handleWithdraw}
            value={withdrawnAmount}
            className="border outline-none w-[100%] h-[40px] p-5"
          />
        </span>
        <button className="w-[120px] h-[40px] bg-[#0d74ed] rounded-lg m-auto text-white font-bold hover:bg-blue-500" onClick={handleClick}>
          Continue
        </button>
      </div>
    </section>
  );
};

export default ToCode;
