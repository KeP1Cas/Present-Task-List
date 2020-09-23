import React from 'react';
import listSvg from './assets/img/list.svg';
import List from './components/List/List'

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">

        <List items={[
          {
            icon: <img src={listSvg} alt="ListItem"/>,
            name: 'Все задачи',
            alt: "IconList",
            active: true
          }
        ]}/>
        <List items={[
          {
            color: 'green',
            name: 'Покупки'
          },
          {
            color: 'blue',
            name: 'Фронтенд'
          },
          {
            color: 'pink',
            name: 'Фильмы и сериалы'
          },
          {
            color: 'light-green',
            name: 'Книги'
          },
          {
            color: 'gray',
            name: 'Личное'
          }
        ]}/>

      </div>

      <div className="todo__tasks">
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;
