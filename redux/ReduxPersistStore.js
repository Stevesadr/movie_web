import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localstorage from "redux-persist/lib/storage"; //local storage
import sessionstorage from "redux-persist/lib/storage"; //session storage
import galeryslicer from "./fichers/Slice/MainSlicer";
import myzharnSlicer from "./fichers/Slice/ZhanrsSlicer";
import movesave from "./fichers/Slice/AddToSave";
import { persistReducer, persistStore } from "redux-persist";
import users from "./fichers/usersSlice/usersRedux";

const localConfiguration = {
  key: "root",
  storage: localstorage,
  blacklist: ["username"],
};
const sessionConfiguration = {
  key: "root",
  storage: sessionstorage,
};

const rootReducer = combineReducers({
  imageslice: galeryslicer,
  zhanrslice: myzharnSlicer,
  savemovieslice: movesave,
  username: persistReducer(sessionConfiguration, users),
});

const reduxPersistReducer = persistReducer(localConfiguration, rootReducer);

export const ReduxPersistStore = configureStore({
  reducer: reduxPersistReducer,
});

export const reduxPersistor = persistStore(ReduxPersistStore);
