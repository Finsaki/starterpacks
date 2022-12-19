import React, { useState, useEffect } from 'react'
import itemService from './services/items'
import Item from './components/Item'

const App = () => {
  const [items, setItems] = useState([]) 

  //fetching items data with axios from items.js module
  useEffect(() => {
    itemService
      .getAllItems()
      .then(initialItems => {
        setItems(initialItems)
      })
  }, [])

  return (
    <div>
      <h2>Info</h2>
      <Items items={items} />
    </div>
  )
}

const Items = (props) => {
  return (
    <div>
        {props.items.map(item => <Item key={item.id} item={item} />)}
    </div>
  )
}

export default App