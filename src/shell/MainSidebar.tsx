import * as React from 'react';
import {  NavLink } from 'react-router-dom';

import './MainSidebar.scss';

import logo from '../res/img/logo_white_nopadding.svg';
import Icon, { IconStyle } from 'src/core/Icon';
import Avatar from '../core/Avatar';

class MainSidebar extends React.Component {
  public render() {
    return (
      <header className="mainsidebar">
        <section className="top">
          <div className="logo-container">
            <img className="logo" src={logo} />
          </div>
          <nav>
            <NavLink className="app-link" to="/apps/files"><Icon name="folderOutline" style={IconStyle.White} size={1.5} /></NavLink>
            <NavLink className="app-link" to="/apps/calendar"><Icon name="calendar" style={IconStyle.White} size={1.5} /></NavLink>
            <NavLink className="app-link" to="/apps/images"><Icon name="imageOutline" style={IconStyle.White} size={1.5} /></NavLink>
            <NavLink className="app-link" to="/apps/contacts"><Icon name="accountMultipleOutline" style={IconStyle.White} size={1.5} /></NavLink>
          </nav>
        </section>
        <section className="bottom">
          <Avatar name="Pascal Riesinger" size={3}/>
        </section>
      </header>
    )
  }
}

export default MainSidebar;
