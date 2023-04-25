import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div className='itemListContainer'>
        
        <p className='text-danger'>{props.greeting}</p>
    </div>
    
  )
}

export default ItemListContainer