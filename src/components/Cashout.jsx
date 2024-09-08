import { useNavigate } from "react-router-dom";

const Cashout = () => {
  const navigate = useNavigate();
  return (
    <section className="w-[100%] h-[max-content]  flex flex-col gap-[3rem]">
      <div className="w-[100%] h-[max-content] flex justify-center gap-16">
        <div className="flex flex-col justify-center items-center">
          <span
            className="w-[50px] h-[50px] p-4 flex justify-center items-center bg-blue-200 hover:bg-blue-100 cursor-pointer rounded-lg"
            onClick={() => navigate("/toBank")}
          >
            <img src="/svg/bank.svg" alt="" />
          </span>
          <p>Withdraw to Bank</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span
            className="w-[50px] h-[50px] p-4 flex justify-center items-center bg-blue-200 cursor-pointer hover:bg-blue-100 rounded-lg"
            onClick={() => navigate("/toCode")}
          >
            <img src="/svg/gift.svg" alt="" />
          </span>
          <p>Convert to Code</p>
        </div>
      </div>
      <div className="w-[70%] min-h-[40rem] m-auto bg-white p-10 rounded-md flex flex-col gap-10">
        <p className=" text-2xl ">Transaction History</p>

        <div className="w-[100%] h-[40rem]">
          
        </div>

        <button className="w-[90px] h-[2rem] border rounded-md  flex justify-center items-center m-auto">
          View more
        </button>
      </div>
    </section>
  );
};

export default Cashout;
