import React from 'react';

function Dog({name, img, temperament }){
    return (
        <div className= 'dog'>
            <div className="img">
                <img src={img} alt='No especificado'/>
            </div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                {temperament}
            </div>
        </div>
    )
}

export default Dog;