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
        <Input type="text" id="category" name="category" placeholder="Category" />
        <Input type="number" id="value" name="value" placeholder="Value" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Day
        </button>
      </form>
    </div>
  );
}

export default AddDay;