package com.geekxws.autosss.api;

import com.geekxws.autosss.domain.Admin;
import com.geekxws.autosss.domain.ClassRoom;
import com.geekxws.autosss.domain.Notice;
import com.geekxws.autosss.domain.Seat;
import com.geekxws.autosss.service.AdminService;
import com.geekxws.autosss.service.ClassRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * Created by geek720 on 2017/4/5.
 */
@RestController
@RequestMapping("/api/admin")
public class adminApi {
    @Autowired
    private AdminService adminService;
    @Autowired
    private ClassRoomService classRoomService;


    @PostMapping("/adminlogin")
    public ResponseEntity<?> login(String adminName, String password) {

        Admin admin = adminService.findAdminByAdminName(adminName);
        System.out.println(admin);
        if (admin == null) {
            return new ResponseEntity<Object>(new ApiCommonResult(1,"没有该管理员用户"), HttpStatus.OK);
        }
        if (!password.equals(admin.getAdminPassword())) {
            return new ResponseEntity<Object>(new ApiCommonResult(2,"用户名密码错误"), HttpStatus.OK);
        }
        return new ResponseEntity<Object>(new ApiCommonResult(true,3, "管理员登陆成功"), HttpStatus.OK);

    }
    @PostMapping("/createclassroom")
    public ResponseEntity<?> createClassroom(@RequestBody ClassRoom classRoom) {
        adminService.CreateClassRoom(classRoom);
        return new ResponseEntity<Object>(new ApiCommonResult(true, 1, "ok"), HttpStatus.OK);
    }
    @PostMapping("/createnotice")
    public ResponseEntity<?> createNotice(@RequestBody String text, @RequestBody String title) {
        System.out.println(text);
        System.out.println(title);
        Date date = new Date();
        if (text == null && title == null) {
            return new ResponseEntity<Object>(new ApiCommonResult(false, 2, "内容和标题不能为空"), HttpStatus.OK);
        }
        Notice notice = new Notice();
        notice.setPushDate(date);
        notice.setText(text);
        notice.setTitle(title);
        adminService.CreateNotice(notice);
        return new ResponseEntity<Object>(new ApiCommonResult(true, 1, "公告发布成功"), HttpStatus.OK);
    }
    @PostMapping("/{id}/updateclassroom")
    public ResponseEntity<?> updateClassRoom(@RequestBody ClassRoom classRoom, @PathVariable String id ) {

        ClassRoom cs = classRoomService.findClassRoomById(id);
        if (cs == null){
            return  new ResponseEntity<Object>(new ApiCommonResult(false, 2, "自习室不存在！"), HttpStatus.OK);
        }
        System.out.println(classRoom.isOpen());
        cs.setSeat(classRoom.getSeat());
        cs.setOpen(classRoom.isOpen());
       // System.out.println(isOpen);
       //  cs.setOpen(isOpen);
        classRoomService.updateClassroom(cs);
        return new ResponseEntity<Object>(new ApiCommonResult(true, 1, "自习室修改成功"), HttpStatus.OK);
    }

}
