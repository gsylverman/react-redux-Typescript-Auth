import { AUTH_USER, AUTH_ERROR } from "../actions/types";
const INITIAL_STATE = {
    authentichated: "",
    errorMessage: ""
};
interface StateProps {
    authentichated?: string | null;
    errorMessage?: string | null;
}
interface ActionProps {
    type: string;
    payload: string;
}

export default function (state: StateProps = INITIAL_STATE, action: ActionProps) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, errorMessage: "", authentichated: action.payload };
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload, authentichated: "" };;
        default:
            return state;
    }
}