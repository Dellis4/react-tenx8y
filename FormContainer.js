import React, {Component} from 'react';
import FormView from './FormView';
import moment from 'moment'
class FormContainer extends Component{
    constructor(){
      this.state = {
        birthday: new Date(),
        ageInRealLife:0,
        ageInGame:0
      }
      this.onInput = this.onInput.bind(this)
      this.onClick = this.onClick.bind(this)
    }
    onInput(date){
      this.setState({
        birthday:date        
      })
    }
    onClick(){
      var now = Date.now()
      var diff = now - this.state.birthday
      var myRealAge = Math.floor(diff/1000/60/60/24/365)
      console.log(myRealAge)
      this.setState({
        ageInRealLife: myRealAge
      })
    }
    render(){
      return <FormView data = {this.state} onInput = {this.onInput} onClick={this.onClick}/>
    }
}

export default FormContainer
