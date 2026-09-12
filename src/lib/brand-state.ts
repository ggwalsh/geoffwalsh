import { create } from "zustand";

export type BrandState = "idle" | "think" | "build" | "done";

export const useBrand = create<{
  state: BrandState;
  setState: (state: BrandState) => void;
}>((set) => ({
  state: "idle",
  setState: (state) => set({ state }),
}));
