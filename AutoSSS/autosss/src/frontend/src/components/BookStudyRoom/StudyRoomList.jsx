import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import moment from 'moment';

const columns = [{
  title: '名称',
  dataIndex: 'name',
  key: 'name'
},{
  title: '地址',
  dataIndex: 'address',
  key: 'address'
},{
  title: '开放时间',
  dataIndex: 'openTime',
  key: 'openTime'
},{
  title: '是否开放',
  dataIndex: 'open',
  key: 'open'
}];

class StudyRoomList extends React.Component {
  constructor(props) {
    super(props);

  }

  clickRow = (e) => {
    this.props.getClickIndex(e.key);
  }



  render () {
    const roomList = this.props.roomList;
    const roomData = [];
    roomList && roomList.map((item, index) => {
      const room ={
        key: index,
        name: item.name,
        address: item.address,
        openTime: moment(item.openTime).format("H:HH"),
        open: item.open ? '开放' : '不开放',
      }
      roomData.push(room);
    });
    return(
      <div>
        <Table onRowClick={this.clickRow} columns={columns} dataSource={roomData}/>
      </div>
    );
  }
}
StudyRoomList.propTypes = {
  roomList: PropTypes.array,
  getClickIndex: PropTypes.func,
}

export default StudyRoomList;
