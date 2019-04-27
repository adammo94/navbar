import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
class Toolbar extends React.Component {
   logowanie() {
       if (this.state.logged_status_bin===1){
        this.props.handleToUpdate(2);
        this.props.handleToUpdte(2);
        this.setState({logged_status: 'zaloguj', logged_status_bin: 0});

        }
        else {
            this.props.handleToUpdate(1);
            this.props.handleToUpdte(1);
            this.setState({logged_status: 'wyloguj', logged_status_bin: 1});
        }

    }
    state = {logged_status: 'zaloguj', logged_status_bin: 0}
  render() {
    return (
        <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={this.props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar_items">
                <ul>
                    <li><a href="javascript:void(0)"><img src={ require('../images/account.png')} className="account_icon" onClick={()=> this.logowanie()}></img></a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
  }
}

export default Toolbar;