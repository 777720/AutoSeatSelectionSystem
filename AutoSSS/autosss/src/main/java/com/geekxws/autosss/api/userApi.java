package com.geekxws.autosss.api;

import com.geekxws.autosss.domain.ClassRoom;
import com.geekxws.autosss.domain.Seat;
import com.geekxws.autosss.service.ClassRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by geek720 on 2017/4/5.
 */

@RestController
@RequestMapping("/api/user")
public class userApi {

    @Autowired
    private ClassRoomService classRoomService;

    @GetMapping("/getstudyroomlist")
    public ResponseEntity<?> getStudyRoomList() {
        List<ClassRoom>  crlist = classRoomService.getClassRooms();
        return new ResponseEntity<Object>(new ApiCommonResult(true, 1, "自习室列表", crlist), HttpStatus.OK);
    }

    @PutMapping("/{roomid}/{date}/{row}/{col}/bookSeat")
    public ResponseEntity<?> bookStudyRoom(@PathVariable String roomid, @PathVariable String date, @PathVariable String row, @PathVariable String col) {
        ClassRoom cr = classRoomService.findClassRoomById(roomid);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date bookDate = null;
        try {
            bookDate = sdf.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        if (cr == null) {
            return new ResponseEntity<Object>(new ApiCommonResult(false, 1, "没有找到该自习室"), HttpStatus.OK);
        }
        List<Seat> seats = classRoomService.bookSeat(cr, Integer.parseInt(row), Integer.parseInt(col), bookDate);
        return new ResponseEntity<Object>(new ApiCommonResult(true, 2, "座位预定成功", seats), HttpStatus.OK);
    }
    @GetMapping("/{roomid}/getclassroom")
    public ResponseEntity<?>getClassRoom(@PathVariable String roomid) {
        ClassRoom cr = classRoomService.findClassRoomByName(roomid);
        return new ResponseEntity<Object>(new ApiCommonResult(true, 1, "ok",  cr), HttpStatus.OK);
    }
}
