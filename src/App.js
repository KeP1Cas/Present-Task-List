import React from 'react';
import List from './components/List/List'
import nextId from "react-id-generator";
import AddList from './components/AddList/AddButtonList';

import listSvg from './assets/img/list.svg';
import DB from './assets/db.json'


function App() {

  

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
        <List items={[
          {
            color: 'green',
            name: 'Покупки',
            id: nextId()
          },
          {
            color: 'blue',
            name: 'Фронтенд',
            id: nextId()
          },
          {
            color: 'pink',
            name: 'Фильмы и сериалы',
            id: nextId()
          },
          {
            color: 'light-green',
            name: 'Книги',
            id: nextId()
          },
          {
            color: 'grey',
            name: 'Личное',
            id: nextId()
          }
        ]}
        isRemovable
        />
      <AddList colors={DB.colors}/>
      </div>

      <div className="todo__tasks">
        <h1>Hello blyt</h1>
      </div>
    </div>
  );
}

export default App;
