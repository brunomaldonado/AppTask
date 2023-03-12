import  React, { useState } from 'react';
import { createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {
    // const [patito, setPatito] = useLocalStorage('PATITO_V1', "Angela");
  // const [tasksList, setTasksList] = useLocalStorage('TODOS_V1', []);
  const {
    item: tasksList,
    saveItem: saveTasksList,
    loading,
    error, 
  }= useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false)
  const [taskTitleValue, setTaskTitleValue] = useState('');
  const [taskBodyValue, setTaskBodyValue] = useState('');
  const [taskEdit, setTaskEdit] = useState({title: '', body: '', completed: false});

  const completedLists = tasksList.filter(task => !!task.completed).length;
  const totalTask = tasksList.length;
  // console.log("total lists", totalTask);

  //como filtrar la cantidad de task list de nuestra aplicacion dependiendo del valor que ingrsamos en searchValue (input)
  let searchedTaskList = [];
  // console.log("searchValue", searchValue.length)

  if (!searchValue.length >= 1) {
    searchedTaskList = tasksList;
  } else {
    searchedTaskList = tasksList.filter(task => {
      const titleText = task.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return titleText.includes(searchText);
    })
  }

  const onChangeTaskTitle = ({target}) => {
    setTaskTitleValue(target.value);
    console.log("onChangeTaskTitle", target.value);
  }
  const onChangeTaskBody = ({target}) => {
    setTaskBodyValue(target.value);
    console.log("onChangeTaskBody", target.value);

  }

  const addTasks = (title, body, image) => {
    const newTasksList = [...tasksList]
    newTasksList.push({
      image,
      title,
      body,
      completed: false,
    })

    saveTasksList(newTasksList);
    // tasksList[taskListIndex] = {
    //   title: tasksList[taskListIndex].title,
    //   completed: true,
    // }
  }

  const toggleCompleteTask = (title) => {
    const taskListIndex = tasksList.findIndex(task => task.title === title);

    const newTasksList = [...tasksList]
    tasksList[taskListIndex].completed = true;

    saveTasksList(newTasksList);
    // tasksList[taskListIndex] = {
    //   title: tasksList[taskListIndex].title,
    //   completed: true,
    // }
  }

  const toggleDeleteTask = (title) => {
    // console.log('CONTEXT', title)
    // alert("You whish to delete the task  " + title + "?")
    const titleIndex = tasksList.findIndex(task => task.title === title);
    const newTasksList = [...tasksList];
    newTasksList.splice(titleIndex, 1);
    saveTasksList(newTasksList);
  }

  const onClickEditTask = (title, body) => {
    document.querySelector('.newTasks').style.zIndex = '-99';
    // console.log('edit task title', 
    // `${title}
    //   description ${body}
    // `)

    // const newTasksList = [...tasksList];
    // const taskListIndex = tasksList.findIndex(task => task.title === title);
    // newTasksList[taskListIndex].title = title.title;
    // newTasksList[taskListIndex].body = body.body;
    // saveTasksList(newTasksList);

    
    const taskToEdit = tasksList.filter(task => (task.title === title))
    console.log('EDIT TASKS', taskToEdit)
    console.log('EDIT TASKS titlw', taskToEdit.map(title => title.title))

    const newTitle = taskToEdit.map(title => title.title);

    setTaskEdit(newTitle);
    console.log("setTaskEdit", setTaskEdit)
    setTaskTitleValue(title);
    setTaskBodyValue(body);

    setOpenEditModal(true);
    setShowModal(false)
  }


  const onClickTaskUpdate = () => {
    const update = setTaskEdit(taskTitleValue);
    console.log('task update', update);

    // const _taskList = [...tasksList];       
    //     // Get index
    //     const _index = _taskList.indexOf(taskEdit); 
    //     // Remplace
    //     _taskList.splice(_index,1,taskEdit);
    //     console.log('task LIST', _taskList);
        // Set            
        // saveTasksList(_taskList);

  }

  // const editTask = (editedTask) => {
  //   console.log('edit task todocontext', editedTask.title)
    // const updatedTasksList = tasks.map((task) => {
    //   if(task.id === editedTask.id) {
    //     return editedTask;
    //   } else {
    //     return task;
    //   };
    // });
  //   saveTasksList(updatedTasksList);
  // }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTask,
      completedLists,
      searchValue,
      setSearchValue,
      searchedTaskList,
      toggleCompleteTask,
      toggleDeleteTask,
      openModal,
      setOpenModal,
      onChangeTaskTitle,
      onChangeTaskBody,
      onClickEditTask,
      openEditModal,
      setOpenEditModal,
      addTasks,
      showModal,
      setShowModal,
      taskTitleValue,
      setTaskTitleValue,
      taskBodyValue,
      setTaskBodyValue,
      onClickTaskUpdate,
    }}>

      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };