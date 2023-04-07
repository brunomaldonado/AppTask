import  React, { useState } from 'react';
import { createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

const ob = [{
  title: 'ABCDEFGH',
  description: 'This is a test',
  completed: false,
  date: "Wed April 5 6:03 PM"
}]

function TodoProvider(props) {
    // const [patito, setPatito] = useLocalStorage('PATITO_V1', "Angela");
  // const [tasksList, setTasksList] = useLocalStorage('TODOS_V1', []);

  const {
    item: tasksList,
    saveItem: saveTasksList,
    loading,
    error, 
  }= useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [taskTitleValue, setTaskTitleValue] = useState('');
  const [taskBodyValue, setTaskBodyValue] = useState('');
  const [taskEdit, setTaskEdit] = useState({title: '', body: '', completed: false});
  const [dateTimeLocal, setDateTimeLocal] = useState();



  const completedLists = tasksList.filter(task => !!task.completed).length;
  const totalTask = tasksList.length;
  // console.log("total lists", tasksList.length);

  //como filtrar la cantidad de task list de nuestra aplicacion dependiendo del valor que ingrsamos en searchValue (input)
  let searchedTaskList = [];
  // console.log("searchValue", searchValue.length)

  if (!searchValue.length >= 1) {
    searchedTaskList = tasksList;
    // console.log("searvh", searchValue);
  } else {
    searchedTaskList = tasksList.filter(task => {
      const titleText = task.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return titleText.includes(searchText);
    })
  }

  // console.log("searchedTaskList", searchedTaskList)

  const onChangeTaskTitle = ({target}) => {
    setTaskTitleValue(target.value);
    // console.log("onChangeTaskTitle", target.value);
  }
  const onChangeTaskBody = ({target}) => {
    setTaskBodyValue(target.value);
    // console.log("onChangeTaskBody", target.value);

  }

  const onClickAddTask = (title, description, dateToStart, image) => {
    const timeNow = new Date();
    // date = timeNow.toLocaleString('en-US')
    dateToStart = timeNow.toLocaleString('en-US', {
      weekday: 'short', // long, short, narrow
      day: 'numeric', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: 'long', // numeric, 2-digit, long, short, narrow
      hour: 'numeric', // numeric, 2-digit
      minute: 'numeric', // numeric, 2-digit
      second: 'numeric', // numeric, 2-digit
  })
    
    // console.log("timeNow", timeNow);
    // console.log("local", timeNow.toLocaleString('en-US'))
    // console.log("Date", timeNow.toLocaleString('en-US', {
    //   weekday: 'short', // long, short, narrow
    //   day: 'numeric', // numeric, 2-digit
    //   year: 'numeric', // numeric, 2-digit
    //   month: 'long', // numeric, 2-digit, long, short, narrow
    //   hour: 'numeric', // numeric, 2-digit
    //   minute: 'numeric', // numeric, 2-digit
    //   second: 'numeric', // numeric, 2-digit
    // }));


    let field = document.querySelector("#date");
    
    let dateTime = new Date(field.value);
    let dateToEnd = dateTime.toLocaleString('en-US', {
      weekday: 'short', // long, short, narrow
      day: 'numeric', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: 'long', // numeric, 2-digit, long, short, narrow
      hour: 'numeric', // numeric, 2-digit
      minute: 'numeric', // numeric, 2-digit
      second: 'numeric', // numeric, 2-digit
    })

    console.log("date local", dateToEnd)

    // console.log("time to end", dateTime);
    // console.log("DATE TO END", dateTime.toLocaleString('en-US', {
    //   weekday: 'short', // long, short, narrow
    //   day: 'numeric', // numeric, 2-digit
    //   year: 'numeric', // numeric, 2-digit
    //   month: 'long', // numeric, 2-digit, long, short, narrow
    //   hour: 'numeric', // numeric, 2-digit
    //   minute: 'numeric', // numeric, 2-digit
    //   second: 'numeric', // numeric, 2-digit
    // }))

    const newTasksList = [...tasksList]
    newTasksList.push({
      image,
      title,
      description,
      dateToStart,
      dateToEnd,
      completed: false,

    })

    saveTasksList(newTasksList);

  }

  const onClickCompleteTask = (title) => {
    const taskIndex = tasksList.findIndex(task => task.title === title);

    const newTasksList = [...tasksList]
    tasksList[taskIndex].completed = true;

    saveTasksList(newTasksList);
    // tasksList[taskIndex] = {
    //   title: tasksList[taskIndex].title,
    //   completed: true,
    // }
  }

  const onClickDeleteTask = (title) => {
    // console.log('CONTEXT', title)
    // alert("You whish to delete the task  " + title + "?")
    const taskIndex = tasksList.findIndex(task => task.title === title);
    const newTasksList = [...tasksList];
    newTasksList.splice(taskIndex, 1);
    saveTasksList(newTasksList);
    
  }

  const onClickEditTask = (title, body) => {
    document.querySelector('.newTasks').style.zIndex = '-99';
    // console.log('edit task title', 
    // `${title}
    //   description ${body}
    // `)

    // const newTasksList = [...tasksList];
    // const taskIndex = tasksList.findIndex(task => task.title === title);
    // newTasksList[taskIndex].title = title.title;
    // newTasksList[taskIndex].body = body.body;
    // saveTasksList(newTasksList);

    
    const taskToEdit = tasksList.filter(task => (task.title === title))
    // console.log('EDIT TASKS', taskToEdit)
    // console.log('GET TASKS title', taskToEdit.map(title => title.title))

    // const newTitle = taskToEdit.map(title => title.title);
    // console.log('task title', taskToEdit[0].title)

    setTaskEdit(taskToEdit[0])
    setTaskTitleValue(taskToEdit[0].title);
    setTaskBodyValue(taskToEdit[0].body);

    setOpenEditModal(true);
    // console.log('TASK LIST', tasksList);
  }

  const onClickTaskUpdate = () => {
    // NEW TASK LIST
    setTaskEdit((prev) => prev.title = taskTitleValue);
    // setTaskEdit(prev => prev.body = taskBodyValue);
    //COPY
    const updateTask = [...tasksList];  
    // Get index
    const taskIndexOf = updateTask.indexOf(taskEdit); 
    // Remplace
    updateTask.splice(taskIndexOf,1,taskEdit);
    //SET
    // saveTasksList(updateTask);
    // console.log('update TASKS', updateTask)     
     
    setOpenEditModal(false);
  }

  const dateTime = (event) => {
    setDateTimeLocal(event.target.value);

    let field = document.querySelector("#date");
    
    let dateTime = new Date(field.value);

    console.log("dateTime local string", dateTime);
    console.log(dateTime.toLocaleString('en-US', {
      weekday: 'short', // long, short, narrow
      day: 'numeric', // numeric, 2-digit
      year: 'numeric', // numeric, 2-digit
      month: 'long', // numeric, 2-digit, long, short, narrow
      hour: 'numeric', // numeric, 2-digit
      minute: 'numeric', // numeric, 2-digit
      second: 'numeric', // numeric, 2-digit
    }))


    console.log("dateTime local", dateTimeLocal);
    // console.log(event.target.value);
    // const date = event.target.value;
    // console.log("date", date.toLocaleString('en-US'));
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTask,
      completedLists,
      searchValue,
      setSearchValue,
      searchedTaskList,
      onClickCompleteTask,
      onClickDeleteTask,
      openModal,
      setOpenModal,
      onChangeTaskTitle,
      onChangeTaskBody,
      onClickEditTask,
      openEditModal,
      setOpenEditModal,
      onClickAddTask,
      taskTitleValue,
      setTaskTitleValue,
      taskBodyValue,
      setTaskBodyValue,
      onClickTaskUpdate,
      dateTime,
    }}>

      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };