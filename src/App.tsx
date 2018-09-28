import * as React from 'react';
import './App.css';


import Button, {ButtonStyle} from './core/Button';
import Sidebar from './files/Sidebar';
import MainSidebar from './MainSidebar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
				<MainSidebar />
				<Sidebar/>
				<Button style={ButtonStyle.Light} text="Hello"/>
			</div>
    );
  }
}

export default App;
