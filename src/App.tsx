import { Toaster } from "react-hot-toast";

import AddTodo from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
