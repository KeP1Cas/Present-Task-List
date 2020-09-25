import React, { useState } from 'react'
import addSvg from '../../assets/img/add.svg';

import axios from 'axios';

import './TasksForm.scss'
const TasksForm = ({list, onAddTask}) => {

    const [visibleForm, setVisibleForm] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState('')

    const toggleFormVisible = () => {
        setVisibleForm(!visibleForm)
        setInputValue('')
    }

    const addTask = () => {
        const obj = {
            listId: list.id,
            text: inputValue,
            completed: false
          };
          setIsLoading(true);
          axios
            .post('http://localhost:3001/tasks', obj)
            .then(({ data }) => {
              onAddTask(list.id, data);
              toggleFormVisible();
            })
            .catch(() => {
                alert('Ошибка при добавление задачи!')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="tasks__form">
            {
                !visibleForm ? 
                (<div onClick={toggleFormVisible} className="tasks__form-new">
                <img src={addSvg} alt="add" />
                <span>Новая задача</span>
            </div>) : 
            (<div className="tasks__form-block">
                <input 
                    value={inputValue}
                    className="field" 
                    type="text" 
                    placeholder="Название задачи"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button disabled={isLoading} onClick={addTask} className="button">
                    {isLoading ? 'Добавление...' : 'Добавить задачу'}
                </button>
                <button onClick={toggleFormVisible}  className="button button--grey">Отмена</button>
            </div>)
        }

        </div>
    )
}

export default TasksForm;
