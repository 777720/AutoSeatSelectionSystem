package com.geekxws.autosss.api;

import com.geekxws.autosss.domain.Admin;
import com.geekxws.autosss.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by geek720 on 2017/4/5.
 */
@RestController
@RequestMapping("/api/admin")
public class adminApi {
    @Autowired
    private AdminService adminService;


    @PostMapping("/adminlogin")
    public ResponseEntity<?> login(String adminName, String password) {
        System.out.print(adminName);
        System.out.print(password);
        Admin admin = adminService.findAdminByAdminName(adminName);
        if (admin == null) {
            return new ResponseEntity<Object>(new ApiCommonResult(1,"没有该管理员用户"), HttpStatus.OK);
        }
        if (!password.equals(admin.getAdminPassword())) {
            return new ResponseEntity<Object>(new ApiCommonResult(2,"用户名密码错误"), HttpStatus.OK);
        }
        return new ResponseEntity<Object>(new ApiCommonResult(true,3, "管理员登陆成功"),HttpStatus.OK);

    }

}
