import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import DotGrid from './components/DotGrid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(todoString)
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleDelete = (e, id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo("");
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className='relative w-full min-h-screen overflow-hidden '>
      {/* Fullscreen DotGrid Background */}
      <div className="absolute inset-0 -z-10 cursor-pointer bg-gradient-to-br from-purple-400 via-pink-500 to-purple-400">
        <DotGrid
          dotSize={10}
          gap={25}
          baseColor="#a855f7"
          activeColor="#00d8ff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <Navbar /> 
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-white/15 backdrop-blur-md min-h-[80vh] md:w-[35%] relative z-10 border border-white/20 shadow-2xl transform transition-all duration-300 hover:-translate-y-1">
        <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>

        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-2xl font-bold'>Add a Todo</h2>
          <div className="flex">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className='w-full rounded-full px-5 py-1 bg-white focus:outline-purple-700'
              onKeyDown={(e) => {
                if (e.key === 'Enter' && todo.length > 2) handleAdd();
              }}
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 2}
              className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white cursor-pointer'
            >
              Save
            </button>
          </div>
        </div>

        <input
          className='my-4 cursor-pointer'
          id='show'
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />
        <label className='mx-2' htmlFor="show">Show Finished</label>

        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-2xl font-bold'>Your Todos</h2>

        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex my-3 justify-between">
                <div className='flex gap-5'>
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                    className='cursor-pointer'
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1 cursor-pointer'><FaEdit /></button>
                  <button onClick={(e) => handleDelete(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1 cursor-pointer'><AiFillDelete /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App