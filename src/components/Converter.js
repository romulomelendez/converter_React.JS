import React, { Component } from 'react'
import './Converter.css'

class Converter extends Component {

    constructor(props){

        super(props)

        this.state = {
             
            currentyA_value: "",
            currentyB_value: 0,

        }

        this.converter = this.converter.bind(this)

    }

    converter () {

        let url = `https://free.currconv.com/api/v7/convert?q=BRL_USD&compact=ultra&apiKey=e5ce6db23eaf8c7b0276`

        fetch(url)

            .then( response => {
                
                return response.json()
            
            }).then( json => {
                
                let cotacao = json.BRL_USD
                let valor_convertido = ( parseFloat( this.state.currentyA_value ) * cotacao ).toFixed(2)
                this.setState({ currentyB_value: valor_convertido })
            
            })        

    }   

    render() {

        return (

            <form id = "form-converter">

                <h3>From: { this.props.currentyA } </h3>
                <input className = "from" type = "number" onChange = { (event) => this.setState({ currentyA_value: event.target.value }) } />
                <h3>To: { this.props.currentyB } </h3>
                <input className = "to" type = "number" value = { this.state.currentyB_value } disabled />
                <input className = "btn-converter" type = "button" value = "Converter" onClick =  { this.converter } />

            </form>
        )
    }
}

export default Converter

