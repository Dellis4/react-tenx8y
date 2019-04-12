import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
function FormView(props){
  return (
    <div>
    <h1>What's your birthday?</h1>
    <DatePicker
      selected={props.data.birthday}
      onChange={props.onInput}
      showYearDropdown
            dateFormatCalendar="MMMM"
            scrollableYearDropdown
            yearDropdownItemNumber={30} /><br/><br/>
    <button onClick={props.onClick}>Submit</button>
    <p >You are {props.data.ageInRealLife} years old</p>
    </div>
  )
}
export default FormView