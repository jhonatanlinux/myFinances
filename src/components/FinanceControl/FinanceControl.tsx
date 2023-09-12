import { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps";
import { Movement } from "../../models/interfaces/Movement/Movement";
import Balance from "../Balance/Balance";
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
      <Balance currentBalance={balance} emitMovement={receiveNewMovement} />
      {/* EXPENSE */}
    </div>
  );
};

export default FinanceControl;
