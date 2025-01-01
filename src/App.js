import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore, { persistor } from "./utils/appStore";
import { PersistGate } from "redux-persist/integration/react";
import Footer from "./components/Footer";

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "ABC",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div>
            <Header />
            <Outlet />
            {/* <Body /> */}
            <Footer />
          </div>
        </UserContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;
