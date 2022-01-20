
import React, {useState} from "react"


const Calc = () => {
    const [result, setResult] = useState("0")
    const handleButton = (input) => {
        setResult(result + input)}


    return (

     <div className="calcgrid">
         
         <span>{result}</span>
        <button name="-" onClick={() => handleButton("-")}/>
        <button name="x" onClick={() => handleButton("x")}/>
        <button name="/" onClick={() => handleButton("/")}/>
        
        
        <button name="=" onClick={() => handleButton ("=")} />
        <button name="8" onClick={() => handleButton ("8")}/>
        <button name="9" onClick={() => handleButton ("9")}/>
        <button name="7" onClick={() => handleButton ("7")}/>
        
        <button name="6" onClick={() => handleButton ("6")}/>
        <button name="5" onClick={() => handleButton ("5")}/>
        <button name="4" onClick={() => handleButton ("4")}/>
        <button name="3" onClick={() => handleButton ("3")}/>
        
        <button name="2" onClick={() => handleButton ("2")}/>
        <button name="1" onClick={() => handleButton ("1")}/>
        <button name="0" onClick={() => handleButton ("0")}/>
        <button name="." onClick={() => handleButton (".")} />
        <button name="AC" onClick={() => handleButton ("AC")} />
         
         
    </div>
     )
}



export default Calc;