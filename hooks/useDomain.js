// useModelAdmin.js
import { create } from 'zustand'

const useDomain = create((set) => ({
  path: "https://roubly.com",
}));

export default useDomain;