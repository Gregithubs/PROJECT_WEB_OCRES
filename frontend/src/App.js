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
        <div style={{backgroundColor: "#2c2828", color:"#c7950c"}}>Cryptomonnaies</div>
        <main style={{display: "flex", gap: "1rem", height: "100%"}}>
          <nav style={{backgroundColor: "#2c2828", color:"#c7950c", maxWidth: "195px"}}>
            <ul>
              <li>
                <a>
                <span class="title">Index</span>
                </a>
                </li>
              <li></li>
              <li>
                <a>
                Connexion
                </a>
                </li>
              <li>
                <a>
                  Aide
                  </a>
                </li>
            </ul>
          </nav>
          <div style={{marginTop: "1rem", display: "grid", gridGap: '1rem', gridTemplateColumns: "repeat(6, 1fr)", width: "100%"}}>
            <Box style={{gridColumnStart: 1, gridColumnEnd: 3}}>1</Box>
            <Box style={{gridColumnStart: 3, gridColumnEnd: 5}}>2</Box>
            <Box style={{gridColumnStart: 5, gridColumnEnd: 7}}>3</Box>
            <Box style={{gridColumnStart: 1, gridColumnEnd: 4, gridRow: "2 / span 6"}}>4</Box>
            <Box style={{gridColumnStart: 4, gridColumnEnd: 7, gridRow: "2 / span 6"}}>5</Box>
            <Box style={{gridColumnStart: 1, gridColumnEnd: 7, gridRow: "8 / span 12"}}>6</Box>
          </div>
          <nav style={{maxWidth: "195px"}}>
            <ul>
              <li>Some</li>
              <li>Elements</li>
              <li>Some</li>
              <li>Elements</li>
            </ul>
          </nav>
        </main>
      </header>
    </div>
  );
}

export default App;