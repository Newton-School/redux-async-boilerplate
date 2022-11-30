import React, { Component } from 'react';
import './App.css';
import store from './store';
import { connect } from 'react-redux';
import { getPostByIdFunc, getPostsBulkFunc } from './actions';

class App extends Component {
  render() {
   return (
      <div className="App"> 
        <button id='getIdButton' onClick={() => {
          this.props.getPostById(1);
        }}>Title By Id</button>
        <button id='getBulkButton' onClick={() => {
          this.props.getPostBulk();
        }}>Titles In bulk</button><br/>
  {/* Code Here */}
              <p id='idTitle'></p> <h1 id='idLoading'>Loading....</h1>
           <p className='bulkTitleList'></p> <h1 id='bulkLoading'>Loading....</h1>
        
      </div>
    );
   
  }
}



const mapStateToProps = state => {
  return {
    state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getPostById: getPostByIdFunc(dispatch),
    getPostBulk: getPostsBulkFunc(dispatch)
  }
};


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;