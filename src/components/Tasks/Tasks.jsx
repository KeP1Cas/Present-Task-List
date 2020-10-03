import React from 'react'
import TasksForm from './TasksForm'
import axios from 'axios'
import { Link } from 'react-router-dom' 
import editSvg from '../../assets/img/edit.svg'
// import doneSvg from '../../assets/img/check.svg';
import './Tasks.scss'
import TasksRow from './TasksRow'
const Tasks = ({list, onEditTitle, onAddTask, onRemoveTask, onEditTask, onCompleteTask, withoutEmpty}) => {

  const editTitle = () => {
    const newTitle = window.prompt('Название списка', list.name)
    if(newTitle) {
      onEditTitle(list.id, newTitle)
      axios.patch('http://localhost:3001/lists/' + list.id, {
        name: newTitle
      }).catch(() => {
        alert('Не удалось обновить название списка');
      })
    }
  };


    return (
      <div className="tasks">
        <Link to={`/lists/${list.id}`}>
          <h2 style={{ color: list.color.hex }} className="tasks__title">
            {list.name}
            <img className="tasks__btn-add" onClick={editTitle} src={editSvg} alt="done" />
          </h2>
        </Link>

        <div className="tasks__items">
        {!withoutEmpty && list.tasks && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
        {
          list.tasks && list.tasks.map(task => (
            <TasksRow key={task.id} list={list} onEdit={onEditTask} onComplete={onCompleteTask} onRemove={onRemoveTask} {...task}/>
          ))
        }
          <TasksForm key={list.id} list={list} onAddTask={onAddTask}/>
        </div>
      </div>
    );
}

export default Tasks;
