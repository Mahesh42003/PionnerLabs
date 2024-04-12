import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoHome} from 'react-icons/io5'
import {CgOrganisation} from 'react-icons/cg'
import {FaHistory, FaRegUserCircle} from 'react-icons/fa'
import {IoMdNotifications, IoIosSettings} from 'react-icons/io'
import {MdContactSupport} from 'react-icons/md'
import {BsThreeDotsVertical} from 'react-icons/bs'
import './index.css'

class Header extends Component {
  state = {activeButton: 'Home'}

  clickingOrganisation = () => {
    this.setState({activeButton: 'Organisation'})
  }

  clickingHome = () => {
    this.setState({activeButton: 'Home'})
  }

  clickingHistory = () => {
    this.setState({activeButton: 'History'})
  }

  render() {
    const {activeButton} = this.state
    return (
      <div>
        <div>
          <IoHome
            className={activeButton === 'Home' ? 'Home-icon1' : 'Home-icon'}
          />
          <Link
            to="/"
            className={activeButton === 'Home' ? 'Home-link1' : 'Home-link'}
            onClick={this.clickingHome}
          >
            Home
          </Link>
        </div>
        <div>
          <CgOrganisation
            className={
              activeButton === 'Organisation' ? 'Home-icon1' : 'Home-icon'
            }
          />
          <Link
            to="/organisation"
            className={
              activeButton === 'Organisation' ? 'Home-link1' : 'Home-link'
            }
            onClick={this.clickingOrganisation}
          >
            Organistion
          </Link>
        </div>
        <div>
          <FaHistory
            className={activeButton === 'History' ? 'Home-icon1' : 'Home-icon'}
          />
          <Link
            to="/History"
            className={activeButton === 'History' ? 'Home-link1' : 'Home-link'}
            onClick={this.clickingHistory}
          >
            History
          </Link>
        </div>
        <div className="displaying-notification-icon">
          <IoMdNotifications className="Home-icon notification-icon" />
          <p className="Home-link notification-icon">Notifications</p>
          <button className="button-12">12</button>
        </div>
        <div className="displaying-notification-icon">
          <MdContactSupport className="Home-icon" />
          <p className="Home-link support-heading">Support</p>
        </div>
        <div className="displaying-notification-icon">
          <IoIosSettings className="Home-icon" />
          <p className="Home-link support-heading">Settings</p>
        </div>
        <div className="user-background-color">
          <FaRegUserCircle className="user-icon-size" />
          <div>
            <h5 className="name">Gudipati Mahesh</h5>
            <p className="email">mahesh.123@gmail.com</p>
          </div>
          <BsThreeDotsVertical className="Home-icon" />
        </div>
      </div>
    )
  }
}
export default Header
