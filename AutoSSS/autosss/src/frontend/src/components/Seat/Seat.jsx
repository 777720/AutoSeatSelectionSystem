import React, { PropTypes } from 'react'


class Seat extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isClick: false,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isClick: nextProps.isClick,
    })
  }
  onClickSeat = () => {
    this.props.onClick(this.props.index, this.props.seatInfo);
  }

  render () {
  const seatInfo = this.props.seatInfo;

    const trueSeatStyle = {
      width: 35,
      height: 35,
      background: seatInfo.seat ? ( seatInfo.book ? '#888' : '#ccc' ) : 'transparent' ,
      border: this.state.isClick ? '1px solid #c70c2f' : '1px solid #aaa',
      display: 'inline-block',
      margin: 4,
      textAlign: 'center',
      lineHeight: 2,
    }
    return (
      <span  style={trueSeatStyle} onClick={this.onClickSeat}>{this.props.seatNo}</span>
    );
  }
}
Seat.propTypes = {
  index: PropTypes.string,
  seatNo: PropTypes.string,
  seatInfo: PropTypes.Object,
  onClick: PropTypes.string,
  isClick: PropTypes.boolean,
}

export default Seat;
