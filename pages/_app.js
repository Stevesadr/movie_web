import { Store } from "@/redux/Store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import { ReduxPersistStore, reduxPersistor } from "@/redux/ReduxPersistStore";
import PersistStore from "redux-persist/lib/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import SpinnerComponent from "@/components/SpinnerComponent";
import FotterComponents from "@/components/FotterComponents";

const font = localFont({
  src: "../public/fonts/RobotoCondensed-VariableFont_wght.ttf",
});
const irFont = localFont({
  src: "../public/fonts/IRANSansWeb.woff",
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={ReduxPersistStore}>
      <PersistGate loading={<SpinnerComponent />} persistor={reduxPersistor}>
        <div className={(font.className, irFont.className)}>
          <NavBar />
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}
