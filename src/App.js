import React, { useState } from 'react';
import List from './components/List/List'
import Tasks from './components/Tasks/Tasks';
import AddList from './components/AddList/AddButtonList';

import listSvg from './assets/img/list.svg';
import DB from './assets/db.json';


function App() {

  const [lists, setLists] = useState(
    DB.lists.map(item => {
      item.color = DB.colors.filter(color => color.id === item.colorId)[0].name
      return item;
    })
  )

  const onAddList = (obj) => {
    const newList = [...lists, obj]
    setLists(newList)
  }

  return (
    <div className="todo">
      <div className="todo__sidebar">

        <List items={[
          {
            className: "list__tasks",
            icon: <img src={listSvg} alt="ListItem"/>,
            name: 'Все задачи',
            alt: "IconList",
            active: true,
            id: true
          }
        ]}/>
        <List items={lists}
        isRemovable
        onRemove={list => console.log(list)}
        />
      <AddList onAdd={onAddList} colors={DB.colors}/>
      </div>

      <div className="todo__tasks">
        <Tasks/>
      </div>
    </div>
  );
}

export default App;
