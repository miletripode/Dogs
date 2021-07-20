import React from 'react';
import './Home.css';
import { connect } from "react-redux";
import Dogs from './Dogs'

function Home(props){
    return (
        <div className="home" >
            <div>
               <Dogs/>
            </div>
        </div>
    )
}



function mapStateToProps(state){
    return{
      dogs: state.dogs
    };
}

export default connect(
    mapStateToProps
)(Home);