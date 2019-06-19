import React from 'react'
import ReactDOM from 'react-dom'
import './header.css'

// function Header(props)
// {
//     console.log(props)
//     return <div className='header-container'>
//         <p>
//             {props.name.gender}----{props.name.age}
//         </p>
//     </div>
// }

class A{
    static 
}

class Header extends React.Component{
    render(){
        console.log(this.props)
        return <div className='header-container'>
            <p>
                {this.props.name.gender}----{this.props.name.age}
            </p>
        </div> 
    }
}

export default Header