import './AddTarefa.css';
import { useState } from "react";

function AddTarefa({adicTarefa}) {
    
    const [ texto, setTexto ] = useState();

    const handleTextoChange = (event) => {
      adicTarefa(texto);
      setTexto('');
    }    
    
    return (
    <div>
        Digite sua tarefa: <br/>
        <textarea value={texto} onChange={event => setTexto(event.target.value)}/><br/>
        <button onClick={handleTextoChange}> Adicionar </button>
    </div>
  );
}

export default AddTarefa;