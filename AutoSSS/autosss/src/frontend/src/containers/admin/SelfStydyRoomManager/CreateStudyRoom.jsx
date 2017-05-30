import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, TimePicker, Cascader } from 'antd';
import SeatList from '../../../components/Seat/SeatList.jsx';
import axios from 'axios';

const seatInfo = [];

const options = [{
  value: 'A',
  label: 'A楼',
  children: [
    {
      value: 'A101',
      label: 'A101',
    },{
      value: 'A201',
      label: 'A201',
    },{
      value: 'A301',
      label: 'A301',
    }],
  }, {
  value: 'B',
  label: 'B楼',
  children: [
    {
      value: 'B101',
      label: 'B101',
    },{
      value: 'B201',
      label: 'B201',
    },{
      value: 'B301',
      label: 'B301',
    }],
}];

class CreateStudyRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRenderSeat: false,
      openTime: null,
      address: null,
    }
  }
  handleClickCreate = () => {
    const row = this.row.refs.input.value;
    const col = this.col.refs.input.value;

    this.createSeat(row, col);
  }
  handleClickRest = () => {
    seat.splice(0, seat.length);
    this.setState({
      isRenderSeat: true,
    })
  }
  save = () => {
    const row = this.row.refs.input.value;
    const col = this.col.refs.input.value;
    const name = this.name.refs.input.value;
    const address = this.state.address;
    const openTime = this.state.openTime;
    const isOpen = true;
    const seat = [];
    seatInfo.map((row) => {
      row.map((col) => {
        seat.push(col)
      })
    })
    const classroom = { name, seat, address, openTime, open };
    console.log(classroom);
    axios.post('/api/admin/createclassroom', classroom)
    .then((response) => {
      if(response.success) {
        console.log(response.message);
      }
    })

  }
  createSeat = (row, col) => {
    let no = 0;
    for(let i = 0; i < row; i++) {
      const row  = [];
      for(let k = 0; k < col; k++ ) {
        const tpl = {seatNo: no + 1, seat: true, row: i+1, col: k+1 }
        row.push(tpl);
        no++;
      }
      seatInfo.push(row);
    }
    console.log(seatInfo);
    this.setState({
      isRenderSeat: true,
    })
  }
  timeOnChange = (time, timeString) => {
    console.log(time, timeString);
    this.setState({
      openTime: time,
    })

  }
  addressOnChange = (value) => {

    this.setState({
      address: value.join("-"),
    })
  }


  render () {
    return(
      <div>
        <TimePicker onChange={this.timeOnChange} placeholder="开放时间" ref={(c) => { this.openTime = c; }} format={"HH:mm'"}/>
        <Input placeholder="请输入自习室名称" style={{ width: 140 }} ref={(c) => { this.name = c; }} />
        <Cascader options={options} onChange={this.addressOnChange} placeholder="请输入自习室地址" />
        <hr />
        <Input placeholder="请输入行座位数" style={{ width: 140 }} ref={(c) => { this.row = c; }} />
        <Input placeholder="请输入列座位数" style={{ width: 140 }} ref={(c) => { this.col = c; }} />
        <Button onClick={this.handleClickCreate}>生成基本座位</Button>
        <Button onClick={this.handleClickRest}>重置座位</Button>
        <Button onClick={this.save}>保存自习室</Button>
        <hr/>
        <div>
          {this.state.isRenderSeat ? <SeatList data={seatInfo}/> : ''}
        </div>
      </div>
    );

  }
}

export default CreateStudyRoom;
