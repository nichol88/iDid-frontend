import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {logout} from '../actions/currentUser.js'
import {fetchUserActions} from '../actions/actions.js'
// import {fetchCounters} from '../actions/counters.js'


// Material UI
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import HistoryIcon from '@material-ui/icons/History';

const BottomNav = (props) => {
  //
  // useEffect(() => {
  // })

  const handleNavChange = (newValue) => {
    props.changeAppState(newValue)
  }

  const handleLogout = () => {
    props.logout()
    props.history.push('/')
  }

  const handleHistoryClick = () => {
    props.fetchUserActions(props.currentUser.id)
  }

  return (
    <BottomNavigation
      value={props.value}
      onChange={(event, newValue) => {
        handleNavChange(newValue)
      }}
      showLabels
    >
      <BottomNavigationAction name="home" label="Dashboard" icon={<DashboardIcon />}  />
      <BottomNavigationAction name="routines" label="My Routines" icon={<OfflinePinIcon />} />
      <BottomNavigationAction onClick={handleHistoryClick} name="actions" label="History" icon={<HistoryIcon />} />
      <BottomNavigationAction label="Log Out" onClick={handleLogout} />
    </BottomNavigation>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    value: state.value
  }
}

export default withRouter(connect(mapStateToProps, {logout, fetchUserActions})(BottomNav))
