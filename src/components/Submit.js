import React from 'react'
const Submit = (props) => {
    const { text } = props

    const style = {
        margin: 5,
        fontSize: 24
    }

    return (<input type='submit' value={text} style={style}></input>)
}

export default Submit