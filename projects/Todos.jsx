import React from 'react';

const Todos = ( props ) => {
    const { id, title, items } = props;

    return (
      <div className="Todos">
        {title}
        <ul>
          {
            items.map((item, index)=>{
              return (
                <li key={id+"_"+index} style={{ listStyle:'none'}}>
                  <input type="checkbox"  value={item.title} defaultChecked={item.isDone}/> {item.title}
                </li>
              )
            })
          }
        </ul>
      </div>
    );

}

export default Todos;
