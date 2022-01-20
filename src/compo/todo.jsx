import React, { useState } from "react"

const Todo = () => {
  const [list, setList] = useState([])

  const handleForm = (item) => {
    setList([...list, item.toLowerCase()])
  }

  return (
    <div className="todo">
      <h1>To Do List </h1>
      <CustomForm handleForm={handleForm}  />
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

const CustomForm = ({ handleForm }) => {
  const [userInput, setUserInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleForm(userInput)
    setUserInput("")
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} value={userInput} />

      <button type="submit">Add to List</button>
      
    </form>
  )
}



export default Todo