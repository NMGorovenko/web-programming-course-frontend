import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers/rootReducer";
import {store} from "../store/store";

/** Typed selector for redux. */
export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;

/** Custom type dispatch hook. */
export type AppDispatch = typeof store.dispatch;

/** Custom typed dispatch hook. */
export const useAppDispatch = () => useDispatch<AppDispatch>();
