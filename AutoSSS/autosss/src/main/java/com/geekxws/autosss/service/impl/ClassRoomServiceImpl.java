package com.geekxws.autosss.service.impl;

import com.geekxws.autosss.domain.ClassRoom;
import com.geekxws.autosss.domain.ClassRoomRepository;
import com.geekxws.autosss.domain.Seat;
import com.geekxws.autosss.service.ClassRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by geek720 on 2017/5/4.
 */
@Service("classRoomService")
public class ClassRoomServiceImpl implements ClassRoomService {
    @Autowired
    private ClassRoomRepository classRoomRepository;


    @Override
    public ClassRoom findClassRoomByName(String name) {
        return classRoomRepository.findByName(name);
    }

    @Override
    public ClassRoom findClassRoomById(String id) {
        return classRoomRepository.findById(id);
    }

    @Override
    public List<ClassRoom> getClassRooms() {
        return classRoomRepository.findAll();
    }

    @Override
    public String bookSeat(ClassRoom room, int row, int col, Date date) {
        List<Seat> seats = room.getSeat();
        String uuid = String.valueOf(UUID.randomUUID());
        for(Seat seat: seats) {
            if(seat.getRow() == row && seat.getCol() == col) {
                seat.setBookDay(date);
                seat.setBook(true);
                seat.setBookLog(uuid);
            }
        }
        classRoomRepository.save(room);
        return uuid;
    }
}
