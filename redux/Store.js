import { configureStore } from "@reduxjs/toolkit";
import galeryslicer from "./fichers/Slice/MainSlicer";
import myzharnSlicer from "./fichers/Slice/ZhanrsSlicer";
import movesave from "./fichers/Slice/AddToSave";

export const Store = configureStore({
  reducer: {
    imageslice: galeryslicer,
    zhanrslice: myzharnSlicer,
    savemovieslice: movesave,
  },
});
