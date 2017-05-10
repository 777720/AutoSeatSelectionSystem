import React, { PropTypes } from 'react';
import Seat from './Seat.jsx';

export default class SeatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      selectedSeat: null,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
    })
  }
  onClickSeat = (index, seatInfo) => {
    this.setState({
      selectedSeat: index,
    })
    this.props.getSelectedSeat(seatInfo);
  }
  render () {
    const rowStyle = {
      overflow: 'hidden',
      background: '#abc',
      padding: '5px 0px',
    }
    const data = this.state.data;
    return(

      <div style={{ backgroundColor: "rgb(130, 155, 175)", float: 'left'}}>
        {
          data && data.map((row,i) => {
            const col = row.map((col, j) =>
              <Seat
                key={`${i}-${j}`}
                index={`${i}-${j}`}
                seatNo={col.seatNo}
                seatInfo={col}
                onClick={this.onClickSeat}
                isClick={this.state.selectedSeat === `${i}-${j}`}
              />
            );
            return <div key={i} style={{rowStyle}}>{col}</div>;
          })
        }
      </div>
    );
  }
}
Seat.propTypes = {
  data: PropTypes.array,
  getSelectedSeat: PropTypes.func,
}
