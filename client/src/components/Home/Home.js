import React from 'react';
import './Home.css';
import Dogs from '../Dogs/Dogs'

export default function Home(props){
    return (
        <div className="home" >
            <div>
               <Dogs/>
            </div>
        </div>
    )
}
