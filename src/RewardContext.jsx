import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { Bookings } from "./data.js";

export const RewardContext = createContext();

export const RewardProvider = ({ children }) => {
  const [showEarning, setShowEarning] = useState(false);
  

  const acctdCashback = Bookings.reduce(
    (acc, current) => acc + current.price * 0.015,
    0
  );
 
  return (
    <RewardContext.Provider
      value={{
        showEarning,
        setShowEarning,
        acctdCashback,
        
      }}
    >
      {children}
    </RewardContext.Provider>
  );
};

RewardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
