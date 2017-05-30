import React from 'react';
import PropTypes from 'prop-types';
import SeatList from '../Seat/SeatList.jsx';
import { Button, Modal, DatePicker, message, Menu, Select, Icon } from 'antd';
import axios from 'axios';



class StudyRoomView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      seatInfo: props.room.seat,
    }
    this.isOpen = props.room.seat.open;
    this.time = null;
    this.selectedSeat = {};
  }
  transformSeat = (seat) => {
    const seats = [];
    let tempIndex = 1;
    let row = [];
    seat.map((item, index) => {
      if (tempIndex === item.row) {
        row.push(item);
      } else {
        seats.push(row);
        row = [];
        row.push(item);
        tempIndex ++;
      }
    });
    seats.push(row)
    return seats;
  }
  openModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  getSelectedSeat = (seatInfo) => {
     this.selectedSeat = seatInfo;
  }
  deleteSeat = () => {
    if (this.selectedSeat === null) {
      message.error("请选择座位！");
      return;
    }
    if (this.selectedSeat.book) {
      message.error("该座位已被预订，不能删除！");
      return;
    }
    if (!this.selectedSeat.seat) {
      message.error("该座位不是个座位");
      return;
    }
    let deleteSeat = this.selectedSeat;
    deleteSeat.seat = false;
    let seatTemp = this.state.seatInfo;
    seatTemp[seatTemp.seatNo-1] = deleteSeat;
    this.setState({
      seatInfo: seatTemp,
    })
  }
  addSeat = () => {
    if (this.selectedSeat === null ) {
      message.error("请选择座位！");
      return;
    }
    if (this.selectedSeat.seat) {
      message.error("该座位已是个座位");
      return;
    }
    let addSeat = this.selectedSeat;
    addSeat.seat = true;
    let seatTemp = this.state.seatInfo;
    seatTemp[seatTemp.seatNo-1] = addSeat;
    this.setState({
      seatInfo: seatTemp,
    })


  }
  save = () => {
    console.log(this.isOpen);

    const seat = this.state.seatInfo;
    const isOpen = this.isOpen;
    const classroom = {
      seat,
      open: isOpen,
    }

    axios.post(`/api/admin/${this.props.room.id}/updateclassroom`, classroom)
    .then((response) => {
      message.success("自习室修改成功！");
    })

  }




  handleOk = () => {
    this.setState({
      loading: true,
    });
    axios.put(`/api/user/${this.props.room.id}/${this.time}/${this.selectedSeat.row}/${this.selectedSeat.col}/bookSeat`)
    .then((response) => {
      if (response.data.success) {
        this.setState({
          loading: false,
          visible: false,
          seatInfo: response.data.data,
        })
        message.success('座位预定成功');
      }
    })
  }
  handleMenuClick = (value) => {
    if (value === 'true') {
      this.isOpen = true;
    }else {
      this.isOpen = false;
    }

  }
  timeOnChange = (date, dateString) => {
    this.time = dateString;
  }
  render () {
    const spanStyle = {
      marginLeft: 40,
    }
    return (
      <div>
        <div>
          <div style={{ marginBottom: 15 }}>
            <span style={ spanStyle }>位置：{this.props.room.address}</span>
            <span style={ spanStyle }>座位数：{this.props.room.seat.length}</span>
          </div>

          {
            this.props.isAdmin ?
            <div>
              <Select defaultValue={ this.isOpen ? 'true' : 'false' } style={{ width: 120 }} onChange={this.handleMenuClick}>
                <Select.Option value='true'>开放</Select.Option>
                <Select.Option value='false'>不开放</Select.Option>
              </Select>
              <Button type="primary"  onClick={this.deleteSeat} style={ spanStyle }>删除座位</Button>
              <Button type="primary"  onClick={this.addSeat} style={ spanStyle }>增加座位</Button>
              <Button type="primary"  onClick={this.save} style={ spanStyle }>保存修改</Button>
            </div>
            :
            <Button type="primary" onClick={this.openModal} style={ spanStyle }>预定座位</Button>
          }
          <Modal
            visible={this.state.visible}
            title="预定座位"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
              <Button key="submit" type="primary" size="large"  onClick={this.handleOk} loading={this.state.loading}>
                预定
              </Button>,
            ]}
          >
            <DatePicker onChange={this.timeOnChange} placeholder='请选择预定日期'/>
          </Modal>
        </div>
        <div style={{ marginTop: 20 }}>
          <SeatList  data={this.transformSeat(this.state.seatInfo)} getSelectedSeat={this.getSelectedSeat} />
        </div>
      </div>
    )
  }
}

StudyRoomView.propTypes = {
  room: PropTypes.any,
  isAdmin: PropTypes.bool.isRequired,
}
StudyRoomView.defaultProps = {
  isAdmin: false,
}

export default StudyRoomView;
