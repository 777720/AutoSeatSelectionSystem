package com.geekxws.autosss.service;

import com.geekxws.autosss.domain.ClassRoom;
import com.geekxws.autosss.domain.Seat;

import java.util.Date;
import java.util.List;

/**
 * Created by geek720 on 2017/5/4.
 */
public interface ClassRoomService {
    ClassRoom findClassRoomByName(String name);
    ClassRoom findClassRoomById(String id);
    List<ClassRoom> getClassRooms();
    List<Seat> bookSeat(ClassRoom room, int row, int col, Date date);
    Seat getSeat(ClassRoom room ,int row ,int col);
    void updateClassroom(ClassRoom classRoom);

}
