import "./FinanceControl.css";


const FinanceControl = (props: {
    alertFunction: () => void

}) => {
    return(
        <div>
            <button onClick={props.alertFunction}>Exibir Alerta</button>    
        </div>
    )
};

export default FinanceControl;