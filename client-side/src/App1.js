import React, { Component } from 'react';
import ComponentName from './ComponentName';
import './App.css';

// shouldComponentUpdate
// PureComponent

// useMemo
// React.memo


class App extends Component{
  nama = 'hilmi'
  state = {
    name : 'hilmi',
  }
  // component di jalankan setelah render
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'hilmi khoirulloh'
      })
    }, 5000)
  }
  // component di jalankan sebelum render
  componentWillMount(){}

  
  // component jalan tampilan
  render() {
    return (
      <div>
        <ComponentName
          nama={this.state.name}
        />
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
