import React, { useState } from 'react'
import List from '../List/List'
import Badge from '../Badge'

import addFolder from '../../assets/img/add.svg';
import closeSvg from '../../assets/img/close.svg';
import './AddButtonList.scss'

const AddList = ({colors}) => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const  [selectedColor, setSelectColor] = useState(colors[0].id)

    return (
      <div className="add-list">
        <List 
          onClick={() => setVisiblePopup(true)}
          items={[
              {
                className: 'list__add-',
                icon: <img src={addFolder} alt="Add Item"/>,
                name: 'Добавить список',
                id: true
              }
            ]}
          />
          {visiblePopup && <div className="add-list__popup">
            <img 
              onClick={() => setVisiblePopup(false)}
              src={closeSvg} 
              alt="Close" 
              className="add-list__popup-close-btn"/>
            <input className="field" type="text" placeholder="Название списка"/>
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
            <button className="button">Добавить</button>
          </div>}
      </div> 
    )
}

export default AddList;
