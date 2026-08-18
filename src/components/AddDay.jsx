import Input from "../components/Input";

function AddDay({ onAddDiaSubmit }) {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dia = formData.get("day");
        const categorias = formData.get("category").split(",");
        const valor = parseFloat(formData.get("value"));
        onAddDiaSubmit(dia, categorias, valor);
      }}>
        <Input type="text" id="day" name="day" placeholder="Day" />
        <select
            id="category"
            name="category"
            className="border p-2 rounded-md text-gray-400"
        >
            <option value="">Selecione uma categoria</option>
            <option value="alimentacao">Alimentação</option>
            <option value="transporte">Transporte</option>
            <option value="lazer">Lazer</option>
            <option value="contas">Contas</option>
        </select>
        <Input type="float" id="value" name="value" placeholder="Value" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Day
        </button>
      </form>
    </div>
  );
}

export default AddDay;