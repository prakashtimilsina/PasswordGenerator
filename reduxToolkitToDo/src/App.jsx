import Todos from "./components/Todos"
import AddTodo from './components/AddTodo';


function App() {

  return (
    <>
    <h1 className="text-3xl text-center font-serif font-bold" > ReduxToolKit Tutorial</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
