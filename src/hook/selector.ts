
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

const useTheme = () => useSelector((state: any) => state.theme.theme);

export default useTheme;