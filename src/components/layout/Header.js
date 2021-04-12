import React from 'react'

export default function Header() {
    return (
        <div style= {headerStyle}>
            <h1> To-do list </h1>
        </div>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    margin: '5px'
}
