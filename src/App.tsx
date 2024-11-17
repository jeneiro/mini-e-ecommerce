import React, { useEffect } from "react";
import "./App.css";
import AppRoutes from "./Router";
import { useDispatch, useSelector } from "react-redux";
import { restoreSession } from "./redux/auth";
import { RootState } from "./redux/store";
import { Spinner } from "flowbite-react";
function App() {
  const dispatch = useDispatch();
  const sessionRestored = useSelector(
    (state: RootState) => state.auth.sessionRestored
  );
  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);
  if (!sessionRestored) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <Spinner
            aria-label="Center-aligned Extra large spinner example"
            size="xl"
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
