import React from 'react';
import { Route } from 'react-router-dom';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  
  return (
    <div className="App">
      <h1>HomePage</h1>
      <Route path="/todos" component={TodoFeature}/>
      <Route path="/albums" component={AlbumFeature}/>
      
    </div>
  );
}

export default App;
