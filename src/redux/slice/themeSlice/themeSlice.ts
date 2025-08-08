import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

const themes = [
  "light", "dark", "blue", "green", "magenta",
  "orange", "purple", "red", "teal", "yellow"
];

// Safely get initial theme from localStorage
const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem("theme") || "light";
  }
  return "light"; // fallback for SSR or testing
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const currentIndex = themes.indexOf(state.theme);
      const nextTheme = themes[(currentIndex + 1) % themes.length];
      state.theme = nextTheme;
    },
    setTheme: (state, action: PayloadAction<string>) => {
      if (themes.includes(action.payload)) {
        state.theme = action.payload;
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;