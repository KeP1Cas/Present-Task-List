import React from 'react'
import TasksForm from './TasksForm'
import axios from 'axios'

import editSvg from '../../assets/img/edit.svg'
// import doneSvg from '../../assets/img/check.svg';
import './Tasks.scss'
const Tasks = ({list, onEditTitle}) => {

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
        <h2 className="tasks__title">
          {list.name}
          <img onClick={editTitle} src={editSvg} alt="done" />
        </h2>

        <div className="tasks__items">
        {!list.tasks.length && <h2>Задачи отсутствуют</h2>}
        {
          list.tasks.map(tasks => (
            <div key={tasks.id} className='tasks__items-row'>
            <div className="checkbox">
            <input id={`task-${tasks.id}`} type="checkbox" />
            <label htmlFor={`task-${tasks.id}`}>
                <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
            </label>
            </div>
              <input readOnly value={tasks.text}/>
            </div>
          ))
        }
          <TasksForm/>
        </div>
      </div>
    );
}

export default Tasks;
