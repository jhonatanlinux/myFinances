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

  const formSubmitHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputValue.trim().length === 0) {
      setIsFormValid(false);
      return;
    }
    hideInputForm();
    emitMovement({
      name: inputName,
      value: inputValue,
      type: "Input",
    });
  };

  const handleInputNameForm = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    inputValue.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false);
    setInputName(eventValue);
  }

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
          {renderInputForm && (
            <form onSubmit={formSubmitHandler}>
              <div
                className={`input_form_container ${
                  !isFormValid ? "invalid" : ""
                }`}
              >
                  <input
                    type="text"
                    placeholder="Nome"
                    className="balance_input"
                    value={inputName}
                    onChange={handleInputNameForm}/>
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
