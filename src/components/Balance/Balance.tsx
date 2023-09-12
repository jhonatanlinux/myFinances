import { useState } from "react";
import { BalanceProps } from "../../models/interfaces/BalanceProps/BalanceProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import "./Balance.css";
import { updateCurrentUser } from "firebase/auth";
import Button from "../Button/Button";

const Balance = ({ emitMovement, currentBalance }: BalanceProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleRenderInputForm = () => setRenderInputForm(!false);

  const hideInputForm = () => {
    setRenderInputForm(false);
    setIsFormValid(true);
    setInputName("");
    setInputValue("");
  };

  return (
    <div>
      <div className="balance_cantainer">
        <div className="balance_card">
          <header className="balance_header">
            <FontAwesomeIcon icon={faDollar} color="#7af1a7" size="2x" />
            <h2>Saldo</h2>
          </header>
          <h3> {currentBalance > 0 ? currentBalance : "R$ 0"} </h3>
          {!renderInputForm && (
            <Button
              action={handleRenderInputForm}
              title="Entrada"
              priority="Input"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
