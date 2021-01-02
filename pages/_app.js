import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import rootReducer from "./reducers";

import '../styles/style.scss';

// const store = configureStore({
//    reducer: rootReducer,
// });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
