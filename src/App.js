import React from 'react';
import { Link, Route } from 'react-router-dom';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  
  return (
    <div className="App">
      <h1>HomePage</h1>

      <Link to="/todos"> </Link>
      <Link to="/albums"> </Link>
      <Route path="/todos" component={TodoFeature}/>
      <Route path="/albums" component={AlbumFeature}/>
      
    </div>
  );
}

export default App;
