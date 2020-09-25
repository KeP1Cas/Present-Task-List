import React, { useEffect, useState } from 'react'
import List from '../List/List'
import Badge from '../Badge'
import axios from 'axios';

import addFolder from '../../assets/img/add.svg';
import closeSvg from '../../assets/img/close.svg';
import './AddButtonList.scss'

const AddList = ({colors, onAdd}) => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const  [selectedColor, setSelectColor] = useState(3)
  const  [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if(Array.isArray(colors)) {
      setSelectColor(colors[0].id)
    }
  },[colors])

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setSelectColor(colors[0].id);
  }

  const addList = () => {
    if(!inputValue){
      return
    }
    
    setIsLoading(true);
    axios
      .post('http://localhost:3001/lists', {
        name: inputValue,
        colorId: selectedColor
      })
      .then(({data}) =>{
        const color = colors.filter(item => item.id === selectedColor)[0].name;
        const listObj = {...data, color: {name: color}};
        onAdd(listObj);
        onClose();
    })
      .finally(() => {
        setIsLoading(false)
      })
    
  }

    return (
      <div className="add-list">
        <List 
          onClick={() => setVisiblePopup(true)}
          items={[
              {
                className: 'list__add-button',
                icon: <img src={addFolder} alt="Add Item"/>,
                name: 'Добавить список',
                id: true
              }
            ]}
          />
          {visiblePopup && <div className="add-list__popup">
            <img 
              onClick={onClose}
              src={closeSvg} 
              alt="Close" 
              className="add-list__popup-close-btn"/>

            <input 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
              className="field" 
              type="text" 
              placeholder="Название списка"/>

            <div className="add-list__popup-colors">
              {
                colors.map(color => (
                  <Badge 
                    onClick={() => setSelectColor(color.id)} 
                    key={color.id} 
                    color={color.name}
                    className={selectedColor === color.id && 'active'}
                    />
                ))
              }
            </div>
            <button onClick={addList} className="button">
              {isLoading ? 'Добавление...' : 'Добавить'}
            </button>
          </div>}
      </div> 
    )
}

export default AddList;
