import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
  );
  return(
    <div>
      latitude: 
    </div>
  )
}

class App extends React.Component {
  render() {
    return(
      <div>
        You are in the Northern Hemisphere!
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)