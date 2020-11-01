import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import BoardForm from './BoardForm';
import BoardItem from './BoardItem';

class App extends Component {
  state = {
    maxNo: 3,
    boards: [
      {
        brdno: 1,
        brdwriter: 'Kim-DH',
        images: <img src="/images/haeun.jpg"/>,
        //images: "",
        brdtitle: '신나는 부산여행',
        brddate: new Date()
      },
      {
        brdno: 2,
        brdwriter: 'Shim-ZH',
        images: <img src="/images/park.jpg"/>,
        brdtitle: '박정권의 정권찌르기',
        brddate: new Date()
      }
    ]
  }

  handleSaveData = (data) => {
    this.setState({
      maxNo: this.state.maxNo+1,
      boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data })
    });
  }

  handleRemove = (brdno) => {
    this.setState({
      boards: this.state.boards.filter(row => row.brdno !== brdno)
    })
  }
  
  render() {
    const { boards } = this.state;
    // react에서는 화살표식 함수정의로 사용해야함.
    return (
      <div>
        <Router>
          <Route path='BoardWrite'>Hello</Route>
        </Router>
        <BoardForm onSaveData={this.handleSaveData}/>
        <table border="1">
          <tbody>
            <tr align="center">
              <td width="50">No.</td>
              <td width="300">Title</td>
              <td width="200">Images</td>
              <td width="100">Name</td>
              <td width="100">Date</td>
            </tr>
            {
              boards.map(row =>
                (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}/>)
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
