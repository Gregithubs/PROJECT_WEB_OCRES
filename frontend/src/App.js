import React, { Component }  from 'react';
import './App.css';


const Box = (props) => {
  const style = props.style?props.style:{}
  return (
    <div style={{...style, backgroundColor:'#2c2828', color: "#c7950c"}}>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "Title">Cryptomonnaies</div>
        <main className = "Main">
          <nav className = "Menu">
            <ul>
              <li><a href="#"><span class="Title">Home</span></a></li>
              <li><a href="#">User</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Informations</a></li>
            </ul>
          </nav>
          <div className = "Widget">
            <Box style={{gridColumnStart: 1, gridColumnEnd: 3}}>1</Box>
            <Box style={{gridColumnStart: 3, gridColumnEnd: 5}}>2</Box>
            <Box style={{gridColumnStart: 5, gridColumnEnd: 7}}>3</Box>
            <Box style={{gridColumnStart: 1, gridColumnEnd: 4, gridRow: "2 / span 6"}}>4</Box>
            <Box style={{gridColumnStart: 4, gridColumnEnd: 7, gridRow: "2 / span 6"}}>5</Box>
            <Box style={{gridColumnStart: 1, gridColumnEnd: 7, gridRow: "8 / span 12"}}>6</Box>
          </div>
          <nav className = "Total">
            <ul>
              <a>Total <br/>Cryptocurrencies</a><br/>
              <a></a><br/><br/>

              <a>Total Exchanges</a><br/>
              <a></a><br/><br/>

              <a>Total Market Cap</a><br/>
              <a></a><br/><br/>

              <a>Total 24h Volume</a><br/>
              <a></a><br/><br/>
            </ul>
          </nav>
        </main>
      </header>
    </div>
  );
}

export default App;