import './App.scss';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import * as React from 'react';


import MainSidebar from './shell/MainSidebar';
import FileApp from './apps/files/FileApp';
import CalendarApp from './apps/calendar/CalendarApp';
import SettingsApp from './apps/settings/SettingsApp';
import { userStore } from './store/UserStore';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainSidebar userStore={userStore}/>
          <main>
            <Route exact path="/" render={FilesRedirect}/>
            { /* tslint:disable */ }
            <Route exact path="/apps/files" render={(props) => <FileApp {...props} base="/apps/files"/>}/>
            <Route path="/apps/files/:type" render={(props) => <FileApp {...props} base="/apps/files"/>}/>
            <Route path="/apps/files/:type/*" render={(props) => <FileApp {...props} base="/apps/files"/>}/>
            { /* tslint:enable */ }

            <Route path="/apps/calendar" component={CalendarApp}/>
            <Route path="/apps/settings" component={SettingsApp}/>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const FilesRedirect = () => ( <Redirect to="/apps/files" />);


export default App;