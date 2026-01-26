import { Heading1 } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Page/HomePage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />

      </Routes>
    </>
  );
};
export default AppRouter;
