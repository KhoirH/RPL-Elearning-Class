import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Items from './components/Items';
import Form from './components/Form';

// shouldComponentUpdate
// PureComponent

// useMemo
// React.memo


class App extends Component{
  state = {
    data: []
  }
  // fungsi untuk ngeluarin data
  fetchData = () => { 
    Axios.get('http://localhost:3000/posts/')
    .then((res) => {
      this.setState({
        data: res.data.posts
      });
    })  
    .catch((err) => {
    })
  }
  // fungsi untuk buat data
  createData = (e) => {
    // membuat ini tidak terefresh
    e.preventDefault();
    
    // value
    const title = e.target.title.value;
    const content = e.target.content.value;

    Axios.post('http://localhost:3000/posts/', {
      title,
      content,
    })
    .then((res) => {
      this.fetchData()
    })  
    .catch((err) => {
      console.log(err);
    })
  }
  // fungsi untuk delete data 
  deleteData = (e, id) => {
    // membuat ini tidak terefresh
    e.preventDefault();

    Axios.post(`http://localhost:3000/posts/destroy/${id}`)
    .then((res) => {
      this.fetchData()
    })  
    .catch((err) => {
      console.log(err);
    })
  }
  // component di jalankan setelah render
  componentDidMount() {
    this.fetchData()
  }
  // component di jalankan sebelum render
  componentWillMount(){}
  
  render() {
    return (
      <div className='container'>
        <div className="row">
          {/* ini untuk fetch data */}
          <div className='col'>
            <h2>Data</h2>
            {
              this.state.data.map((extdata) => {
                return (
                  <Items
                    title={extdata.title}
                    content={extdata.content}
                    id={extdata.id}
                    onDeleted={this.deleteData}
                  />
                )
              })
            }
          </div>
          <div className='col'>
            <h2>Form</h2>
            {/* untuk nge post data */}
            <Form
              onSubmit={this.createData}
            />
          </div>
        </div>
      </div>
    )
  }
}
// function App() {
  // ini ada state
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);

  // useEffect(() => {
    // setLoading(true)
    // Axios.get('http://localhost:3000/posts')
    //   .then((res) => {
    //     setLoading(false)
    //     setData(res.data.posts)
    //   })
    //   .catch((err) => {
    //     setLoading(false)
    //     setData([])
    //   })
    // component unwillmount / keluar dari page
    // return () => {
      
    // }
  // }, [])
  // return (
  //   <div className="App">
//        {
//         data.map((item, i) => {
//           return <div key={i} style={{ display: 'flex' }}>
//               {i + 1} 
//               {' '}
//               <b>{item.title}</b>
//               <span>{item.content}</span>
//             </div>
//         })
//       } 
//     </div>
//   );
// }

export default App;
