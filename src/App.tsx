import React from 'react';
import './index.css';
import './App.css';

import Files from './apps/files/Files';
import Headerbar from './components/Headerbar';

function App() {
  return (
    <div className="App">
			<Headerbar />
			<Files />
		</div>
  );
}

export default App;
