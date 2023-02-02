import {useState, useRef, useEffect} from 'react';
import Form from './components/Form';
import TaskContain from './components/TaskContain';
import Footer from './components/Footer';
import './App.css';





const App = () => {
    const [task, setTask] = useState({id:0, task: ''});
    const [tasks, setTasks] =useState([]);

    const inputRef = useRef();

    useEffect(() => {
      inputRef.current.focus();
    },[]);


    useEffect(() => {
      let storage = localStorage.getItem('tasks');
      let storageItem = JSON.parse(storage);

      storageItem && setTasks(storageItem);
    },[]);

    useEffect(() => {
      //tasks.length === 0 && localStorage.removeItem('tasks')
      tasks.length >= 0 && localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const handleSubmit = (e) => {
      e.preventDefault();
      task.task.length >= 1 && setTasks([...tasks, task])
      setTask({id:0, task:''})
      inputRef.current.focus();
    }


    const handleDelete = (id) => {
      setTasks(tasks.filter((item) => item.id !== id))
      inputRef.current.focus();
    }




  return (
    <main>
     <Form 
     inputRef={inputRef} 
     task={task} 
     setTask={setTask} 
     handleSubmit={handleSubmit} 
     />
     <hr />
     <TaskContain tasks={tasks} handleDelete={handleDelete}/>
     <hr />
     <Footer />
    </main>
  );
}

export default App;

