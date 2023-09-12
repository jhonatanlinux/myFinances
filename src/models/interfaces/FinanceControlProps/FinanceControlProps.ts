import { Movement } from "../Movement/Movement";

export interface FinanceControlProps {
    handleSetMovement: (movement: Movement) => void;
    balance: number;
    expense: number;
}