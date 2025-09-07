import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";

function App() {
  return (
    <div className="box">
      <AppName />
      <AppToDo />
      <ToDoItem1 />
      <ToDoItem2 />
    </div>
  );
}
export default App;
