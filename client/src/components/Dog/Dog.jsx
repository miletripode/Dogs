import React from 'react';

export default function Dog({name, img, temperament }){
    return (
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src={img} width='200'/>
              <span class="card-title">{name}</span>
            </div>
            <div class="card-content">
              <p>{temperament}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

{/* <div className= 'dog'>
<div className="img">
    <img src={img} alt='No especificado'/>
</div>
<div>
    <h3>{name}</h3>
</div>
<div>
    {temperament}
</div>
</div> */}