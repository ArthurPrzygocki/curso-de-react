
import { useNavigate } from 'react-router-dom';


function App() {
    const navigate = useNavigate();

  function onNavigateToDinheiroPage() {
    navigate("/dinheiro");
  }

  function onNavigateToGerenciadorPage() {
    navigate("/gerenciador");
  }

  return (
    <div className="w-screen h-screen bg-slate-500 justify-center p-6 flex gap-4">
      <button onClick={onNavigateToDinheiroPage} className="bg-green-800 w-50 h-20 rounded-md">Gerenciamento de Dinheiro</button>
      <button onClick={onNavigateToGerenciadorPage} className="bg-blue-500 w-50 h-20 rounded-md">Gerenciamento de Tarefas</button> 

    </div>
  );
}

export default App