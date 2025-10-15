import { create } from "zustand";

interface AccountIdStore {
  accountId: null | number;
  setAccountId: (id: number) => void;
}

export const useAccountIdStore = create<AccountIdStore>((set) => ({
  accountId: null,

  setAccountId: (id: number) => {
      set({
        accountId: id
      });
  }
}));
