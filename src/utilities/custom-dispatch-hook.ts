import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";

// Typed version of useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
