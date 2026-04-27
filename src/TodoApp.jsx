import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tambahInventory, hapusSemua } from "./inventorySlice";

function TodoApp() {
  const [input, setInput] = useState("");
  const tugas = useSelector((state) => state.inventory.listInventory);
  const dispatch = useDispatch();

  const handleTambah = () => {
    if (input.trim() === "") return;
    dispatch(tambahInvetory(input));
    setInput("");
  };

  return (
    <div className="container">
      <h2>Inventory LIST</h2>

     <ul>
        {tugas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* input */}
      <input
        type="text"
        placeholder="Tulis tugas..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleTambah}>Tambah</button>


      <button onClick={() => dispatch(hapusSemua())}>
        Bersihkan
      </button>
    </div>
  );
}

export default TodoApp;