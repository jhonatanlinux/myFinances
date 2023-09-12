import { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps";
import { Movement } from "../../models/interfaces/Movement/Movement";
import "./FinanceControl.css";

const FinanceControl = ({
  handleSetMovement,
  balance,
  expense,
}: FinanceControlProps) => {
  const receiveNewMovement = (movement: Movement) => {
    movement && handleSetMovement(movement);
  };
  return (
    <div className="container_finances">
      {/* BALANCE */}
      {/* EXPENSE */}
    </div>
  );
};

export default FinanceControl;
