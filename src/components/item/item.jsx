import React from 'react'

const item = () => {
    const {id,titulo,descripcion} = props;
    return (
        <div className="card" style="width: 18rem;">
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <button>Ver mas</button>
        </div>
      </div>
  )
}

export default item