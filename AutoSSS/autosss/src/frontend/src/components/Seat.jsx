import React, { PropTypes } from 'react'

export default class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
    })
  }
  render () {
    const rowStyle = {
      overflow: 'hidden',
      background: '#abc',
      padding: '5px 0px',
    }
    const trueSeatStyle = {
      width: 25,
      height: 25,
      background: '#ccc',
      border: '1px solid #aaa',
      display: 'inline-block',
      margin: 3,
    }
    const data = this.state.data;
    console.log(this.state.data);
    return(

      <div style={{ backgroundColor: "rgb(130, 155, 175)", float: 'left'}}>
        {
          data && data.map((row,index) => {
            const col = row.map((col) => <span key={col.seatNo} style={trueSeatStyle}>{col.seatNo}</span>);
            return <div key={index} style={{rowStyle}}>{col}</div>;
          })
        }
      </div>
    );

  }
}
