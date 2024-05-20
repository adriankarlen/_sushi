import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface AppState {
  q: string;
  commandKey: string;
}

export const useAppStore = create<AppState>()(
  devtools(set => ({
    q: "",
    commandKey: ""
  }))
);
