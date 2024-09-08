import { useNavigate } from "react-router-dom";
import { Banks } from "../data";


const ToBank = ({withdrawnAmount, setWithdrawnAmount, handleClick, errMsg,okMsg}) => {
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
      <div className="w-[70%] min-h-[30rem] h-[max-content] m-auto bg-white p-10 rounded-md flex flex-col gap-[20px]">
      <p className={errMsg ? "text-blue-50 font-bold p-2 bg-red-500 italic" : " hidden"} >{errMsg}</p>
        <p className={okMsg ? " italic text-blue-50 p-2 font-bold bg-green-500" : "hidden"}>{okMsg}</p>
        <span className="flex flex-col">
          <label>Bank Name:</label>
          <select
            name=""
            id=""
            className="border outline-none w-[100%] h-[40px]"
          >
            <option value="">~Select Bank~</option>
            {Banks.map((bank, index) => (
              <option value={bank} key={index}>
                {bank}
              </option>
            ))}
          </select>
        </span>

        <span className="flex flex-col">
          <label>Account Number:</label>
          <input
            type="text"
            placeholder="Account number"
            className="border outline-none w-[100%] h-[40px] p-5"
          />
        </span>
        <div className="hidden"></div>
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

export default ToBank;
