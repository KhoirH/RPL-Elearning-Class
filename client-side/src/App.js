import React, { Component } from 'react';
import ComponentName from './ComponentName';
import './App.css';
import Logo from './image/logo.svg';
import Axios from 'axios';
import ComponentContent from './ComponentContent';

// shouldComponentUpdate
// PureComponent

// useMemo
// React.memo


class App extends Component{
  state = {
    data: []
  }
  // component di jalankan setelah render
  componentDidMount() {
    Axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data.data
        });
      })  
      .catch((err) => {
      })
  }
  // component di jalankan sebelum render
  componentWillMount(){}

  render() {
    return (
      <div>
        <img src={Logo} alt="" style={{width:50}} />
        {
          this.state.data.map((extdata) => {
            return (
              <>      
                <ComponentName
                  nama={extdata.employee_name}
                />
                <ComponentContent
                  konten={extdata.employee_salary}
                />
              </>
            )
          })
        }
        
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
