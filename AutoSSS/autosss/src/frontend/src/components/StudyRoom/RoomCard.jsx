import React, { PropTypes } from 'react';
import { Card } from 'antd';
import moment from 'moment';


const RoomCard = (props) => {
  const seat = props.room.seat;
  const seatInfo = calSeatInfo(seat);
  return(
    <Card loading={ props === null ? true : false } title={props.room.name} style={{ width: '34%' }}>
      <p>地址:{props.room.address}</p>
      <p>是否开放:{props.room.open ? '开放中' : '暂不开放' }</p>
      <p>开放预约时间:{moment(props.room.openTime).format("H:HH")}</p>
      <p>座位情况: 总座位数:{seatInfo.realSeatNum}个 已预订:{seatInfo.bookSeatNum}个</p>
    </Card>
  );
}
export default RoomCard;

const calSeatInfo = (seat) => {
  let getSeatInfo = {
    realSeatNum: 0,
    bookSeatNum: 0,
  }
  seat.map((item) => {
    if (item.seat === true) {
      getSeatInfo.realSeatNum ++;
      if (item.book === true) {
        getSeatInfo.bookSeatNum ++;
      }
    }
  });
  return getSeatInfo;
}
