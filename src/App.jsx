import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Reward from "./page/Reward";
import { RewardProvider } from "./RewardContext";

function App() {
  return (
    <div>
      <RewardProvider>
        <Router>
          <Reward />
        </Router>
      </RewardProvider>
    </div>
  );
}

export default App;
