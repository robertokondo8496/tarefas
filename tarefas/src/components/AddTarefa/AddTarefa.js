import './AddTarefa.css';

function AddTarefa() {
  return (
    <div>
        <form>
            <label>
                Nova tarefa... <br/>
                <input type="text" name="novaTarefa" placeholder="Tarefa.."/><br/>
            </label>
            <input type="submit" value="Adicionar"/>
        </form>
    </div>
  );
}

export default AddTarefa;