import React,{ useState } from "react";

const Me = () => {
    const defaultList = [
      ""
    ];
  
    const [list, updateList] = useState(defaultList);
  
    const handleRemoveItem = (e) => {
     const name = e.target.getAttribute("name")
      updateList(list.filter(item => item.name !== name));
    };
  
    return (
      <div>
        {list.map(item => {
          return (
            <>
              <span name={item.name} onClick={handleRemoveItem}>
                x
              </span>
              <span>{item.name}</span>
            </>
          );
        })}
      </div>
    );
};

export default Me;