import {Component} from 'react'
import {FaHandsClapping} from 'react-icons/fa6'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import BitCoinData from '../BitCoinData'
import './index.css'

class HomePage extends Component {
  state = {
    sourceName: '',
    data: [],
    description: '',
    datasetLink: '',
    bitCoinData: [],
  }

  componentDidMount() {
    this.getData()
    this.bitData()
  }

  bitData = async () => {
    const response = await fetch(
      'https://api.coindesk.com/v1/bpi/currentprice.json',
    )
    const data = await response.json()
    this.setState({bitCoinData: data.bpi})
  }

  getData = async () => {
    const response = await fetch(
      'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
    )
    const data1 = await response.json()
    const sourcing = data1.source[0].annotations.source_name
    this.setState({
      sourceName: sourcing,
      data: data1.data,
      description: data1.source[0].annotations.source_description,
      datasetLink: data1.source[0].annotations.dataset_link,
    })
  }

  render() {
    const {sourceName, data, description, datasetLink, bitCoinData} = this.state
    if (bitCoinData.length === 0) {
      return ''
    }
    return (
      <div>
        <div className="flexing2">
          <div>
            <div className="trading-and-name flexing1">
              <div>
                <h1 className="Name">
                  Hello, <span className="span-element">Gudipati Mahesh</span>{' '}
                  <FaHandsClapping className="hands-clapping" />
                </h1>
                <h3 className="Name">
                  Welcome to{' '}
                  <span className="spot-trading">Spot trading !</span>
                </h3>
              </div>
              <button className="start-trading-button">Start Trading</button>
            </div>
            <div className="census-graph">
              <h3 className="sourceName-heading">United States {sourceName}</h3>
              <hr />
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  width={800}
                  height={400}
                  data={data}
                  margin={{
                    top: 5,
                    right: 20,
                    bottom: 10,
                    left: 50,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="Year" scale="band" stroke="#f57ff1" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Population" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="Population" stroke="#ff7300" />
                </ComposedChart>
              </ResponsiveContainer>
              <button className="Trading-button start-trading-button1">
                Trade
              </button>
            </div>
          </div>
          <div className="census-graph1">
            <h2 className="Name recent-posts">In recent posts</h2>
            <hr />
            <div className="inside-recent-post">
              <img
                src="https://img.freepik.com/free-vector/creative-data-logo-template_23-2149213540.jpg?t=st=1712804202~exp=1712807802~hmac=55230a8f990007482e1540c50662683bfba096bc46bb9245f545615ada598a3e&w=740"
                className="recent-post-logo-size"
              />
              <div>
                <h2 className="data-logo">DATA LOGO</h2>
                <p className="data-logo">
                  Data Logo: Pionner Finanicial Solutions for a Greater Future.
                </p>
                <p className="data-logo">Read More: {datasetLink}</p>
                <p className="description">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="Name">Assets</h2>
        <div className="flexing2">
          <div className="each-card-bitcoin-background-color">
            <h3>{bitCoinData.USD.code}</h3>
            <p>{bitCoinData.USD.description}</p>
            <h3>{bitCoinData.USD.symbol}</h3>
            <p>{bitCoinData.USD.rate}</p>
            <button className="trade-button">Trade</button>
          </div>
          <div className="each-card-bitcoin-background-color">
            <h3>{bitCoinData.GBP.code}</h3>
            <p>{bitCoinData.GBP.description}</p>
            <h3>{bitCoinData.GBP.symbol}</h3>
            <p>{bitCoinData.GBP.rate}</p>
            <button className="trade-button1">Trade</button>
          </div>
          <div className="each-card-bitcoin-background-color">
            <h3>{bitCoinData.EUR.code}</h3>
            <p>{bitCoinData.EUR.description}</p>
            <h3>{bitCoinData.EUR.symbol}</h3>
            <p>{bitCoinData.EUR.rate}</p>
            <button className="trade-button2">Trade</button>
          </div>
        </div>
      </div>
    )
  }
}
export default HomePage
