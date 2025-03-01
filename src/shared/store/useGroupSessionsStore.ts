import { create } from "zustand";
import { api } from "../lib/api";
import { GroupSessionData, StoreGroupSession } from "../types/fetchData.types";

export const useGroupSessionStore = create<StoreGroupSession>((set) => ({
  groupSession: [],

  fetchGroupSession: async () => {
    try {
      const data: GroupSessionData[] = await api(`sessions/group`);
      set({ groupSession: data });
    } catch (error) {
      console.error(error);
    }
  },
}));
