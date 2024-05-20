import { create } from "zustand";


export const useAdminPassword = create(set => ({
    password: "2521",
    passwordStored: false,
    storePassword: () => set({ passwordStored: true })
}));