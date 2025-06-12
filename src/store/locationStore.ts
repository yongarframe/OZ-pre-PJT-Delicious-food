import { create } from "zustand";
import type { Location } from "../types/placestype";

type Store = {
  location: Location;
  setLocation: (data: Location) => void;
};

export const useLocation = create<Store>((set) => ({
  location: { lat: 1, lon: 1 },
  setLocation: (data) => {
    set(() => ({ location: data }));
  },
}));
