import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store"


// -----------------------Creating Custom useDispatch which has more options----------------------------------
type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;

// -----------------------Creating Custom useDispatch End----------------------------------

// -----------------------Creating Custom useSelector which has more options----------------------------------
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;