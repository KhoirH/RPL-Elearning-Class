import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Items from './components/Items';
import Form from './components/Form';
import FormEdit from './components/FormEdit';

// shouldComponentUpdate
// PureComponent

// useMemo
// React.memo


class App extends Component{
  state = {
    data: [],
    indexPost: false,
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
  // selected index 
  selectedEdit = (e, index) => {
    e.preventDefault();
    // reset indexPost
    this.setState({
      indexPost: false
    });
    setTimeout(() => {
      this.setState({
        indexPost : index
      })
    })
  }
  // fungsi untuk edit data 
  editData = (e, id) => {
    // membuat ini tidak terefresh
    e.preventDefault();
        
    // value
    const title = e.target.title.value;
    const content = e.target.content.value;

    Axios.post(`http://localhost:3000/posts/${id}`, {
      title,
      content,
    })
    .then((res) => {
      this.setState({
        indexPost: false,
      })
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
    const singleData = this.state.indexPost !== false ? this.state.data[this.state.indexPost] : {};
    console.log(singleData);
    return (
      <div className='container'>
        <div className="row">
          {/* ini untuk fetch data */}
          <div className='col'>
            <h2>Data</h2>
            {
              this.state.data.map((extdata, index) => {
                return (
                  <Items
                    key={index}
                    title={extdata.title}
                    content={extdata.content}
                    id={extdata.id}
                    index={index}
                    onDeleted={this.deleteData}
                    onSelected={this.selectedEdit}
                  />
                )
              })
            }
          </div>
          <div className='col'>
            <h2>Form Post</h2>
            {/* untuk nge post data */}
            <Form
              onSubmit={this.createData}
            />
            {
              this.state.indexPost !== false
              ? <>
                <h2>Form Edit</h2>
                {/* untuk nge edit data */}
                <FormEdit
                  onSubmit={this.editData}
                  
                  title={singleData.title}
                  content={singleData.content}
                  id={singleData.id}
                />
              </>
              : null
            }
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
