package com.geekxws.autosss.service;

import com.geekxws.autosss.domain.ClassRoom;

import java.util.Date;
import java.util.List;

/**
 * Created by geek720 on 2017/5/4.
 */
public interface ClassRoomService {
    ClassRoom findClassRoomByName(String name);
    ClassRoom findClassRoomById(String id);
    List<ClassRoom> getClassRooms();
    String bookSeat(ClassRoom room, int row, int col, Date date);

}
