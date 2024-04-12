import {BrowserRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CiSearch} from 'react-icons/ci'
import Header from './components/Header'
import HomePage from './components/HomePage'
import './App.css'

const App = () => (
  <div>
    <div className="flexing">
      <div className="App-Page-background-color">
        <div className="combination-of-logo-and-hamburger">
          <img
            src="https://img.freepik.com/free-vector/creative-data-logo-template_23-2149213540.jpg?t=st=1712804202~exp=1712807802~hmac=55230a8f990007482e1540c50662683bfba096bc46bb9245f545615ada598a3e&w=740"
            className="logo-size"
          />
          <GiHamburgerMenu className="hamburger-icon-size" />
        </div>
        <div className="searching">
          <button>
            <CiSearch alt="Search" />
          </button>
          <input type="search" placeholder="Search" className="input-search" />
        </div>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </div>
      <div className="second-page-background-color">
        <HomePage />
      </div>
    </div>
  </div>
)

export default App
