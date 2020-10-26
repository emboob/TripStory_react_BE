import React, { Component } from 'react';

class BoardItem extends React.Component {
    handleRemove = () => {
      const { row, onRemove } = this.props;
      onRemove(row.brdno);
    }
  
    render() {
      console.log(this.props.row.brdno);
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td><a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
                <td><button onClick={this.handleRemove}>삭제</button></td>
            </tr>
        );
    }
}

export default BoardItem;