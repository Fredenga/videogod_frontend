import WatchPage from "./app/pages/WatchPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WatchPage />} />
    </Routes>
  );
};

export default App;
