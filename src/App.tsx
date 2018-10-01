import './App.scss';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import * as React from 'react';


import MainSidebar from './shell/MainSidebar';
import FileApp from './apps/files/FileApp';
import CalendarApp from './apps/calendar/CalendarApp';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainSidebar />
          <main>
            <Route exact path="/" render={FilesRedirect}/>
            { /* tslint:disable-next-line */ }
            <Route path="/apps/files" render={(props) => <FileApp {...props} base="/apps/files"/>}/>
            <Route path="/apps/calendar" component={CalendarApp}/>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const FilesRedirect = () => ( <Redirect to="/apps/files" />);


export default App;