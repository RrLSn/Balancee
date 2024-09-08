import styles from "../styles/Reward.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { RewardContext } from "../RewardContext";
import { useContext, useState } from "react";
import Cashback_history from "../components/Cashback_history";
import Cashout from "../components/Cashout";
import ToBank from "../components/ToBank";
import ToCode from "../components/ToCode";

const Reward = () => {
  const navigate = useNavigate();

  const { showEarning, setShowEarning, acctdCashback} =
    useContext(RewardContext);
  const [buttonContent, setButtonContent] = useState("Withdraw");
  const [withdrawnAmount, setWithdrawnAmount] = useState(0);
  const [currentAmount,setCurrentAmount] = useState(acctdCashback)
  const [errMsg, setErrMsg] = useState("")
  const [okMsg, setOkMsg] = useState("")


  const handleClick = () => {
    if(withdrawnAmount <1000){
      setErrMsg("Minimum withdraw is 1000 naira")
      setOkMsg("")
    }else if(currentAmount < 1000){
      setErrMsg("Insufficient fund")
      setOkMsg("")
    }else{
      setErrMsg("")
      setOkMsg("Withdraw in process...")
      let amount = acctdCashback - withdrawnAmount
    setCurrentAmount(amount)
    }
    
  }


  const handleCashout = () => {
    if (buttonContent === "Withdraw") {
      navigate("/cashout");
      setButtonContent("Rewards");
    } else {
      navigate("/history");
      setButtonContent("Withdraw");
    }
  };

  return (
    <section className="w-[100vw] min-h-[100vh] h-[max-content] flex flex-col gap-[50px]  bg-[#f5f5f5] pb-8">
      <div className="w-[100%] h-[200px] bg-[#0d74ed] py-5 px-14">
        <span className="flex justify-between mb-3">
          <button className={styles.button}>Book a Repair</button>
          <button className={styles.button} onClick={handleCashout}>
            {buttonContent}
          </button>
        </span>
        <div className="flex gap-5 p-2 items-center">
          <h1 className="text-3xl font-bold text-white">Available:</h1>
          <img
            onClick={() => setShowEarning(!showEarning)}
            src={showEarning ? "/svg/pass_show.svg" : "/svg/pass_hide.svg"}
            alt=""
            className="w-[15px] h-[15px] cursor-pointer"
          />
        </div>
        <div className={styles.cashback}>
          <div className=" w-[20rem] h-[4rem] py-[5px] text-5xl font-bold text-white flex items-center justify-center ">
            {showEarning ? <p> ₦{currentAmount}</p> : <p>....</p>}
          </div>
          <div className="flex gap-4 text-white">
            <p>Accumulated cashback:</p>
            {showEarning ? <p>₦{acctdCashback}</p> : <p>....</p>}
          </div>
        </div>
      </div>
      <Routes>
        <Route index element={<Cashback_history />} />
        <Route path="/history" element={<Cashback_history />} />
        <Route path="/cashout" element={<Cashout  />} />
        <Route path="/toBank" element={<ToBank withdrawnAmount={withdrawnAmount} handleClick={handleClick} setWithdrawnAmount={setWithdrawnAmount} errMsg={errMsg} okMsg={okMsg} />} />
        <Route path="/toCode" element={<ToCode withdrawnAmount={withdrawnAmount} handleClick={handleClick} setWithdrawnAmount={setWithdrawnAmount} errMsg={errMsg} okMsg={okMsg} />} />
      </Routes>
    </section>
  )
};

export default Reward;
