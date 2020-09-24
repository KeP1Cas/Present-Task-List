import React from 'react'
import classNames from 'classnames';
import Badge from '../Badge'

import removeSvg from '../../assets/img/remove.svg'
import './List.scss'
const List = ({items, isRemovable, onClick, onRemove}) => {
    
  const removeList = (item) => {
      if(window.confirm('Удалить?')){
        onRemove(item)
      }
  }
    return (
            <ul onClick={onClick} className="list">
                {
                    items.map(item => (
                        <li key={item.id} className={classNames(item.className, {'active': item.active})}>
                            <i>
                                {
                                    item.icon ? (item.icon): <Badge color={item.color}/>
                                }
                            </i>
                            <span>{item.name}</span>
                            {isRemovable && 
                                <img 
                                    src={removeSvg} 
                                    alt='remove' 
                                    className='list__remove-icon'
                                    onClick={() => removeList(item)}
                                    />}
                        </li>
                    ))
                }
            </ul>
    )
}

export default List;
