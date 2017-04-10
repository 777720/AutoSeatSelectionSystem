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

    @GetMapping(value = "/{adminName}/{passWord}/login")
    public ResponseEntity<?> login(@PathVariable String adminName, @PathVariable String passWord) {
        Admin admin = adminService.findAdminByAdminName(adminName);
        if (admin == null) {
            return new ResponseEntity<Object>(new ApiCommonResult(1,"没有该管理员用户"), HttpStatus.OK);
        }
        if (!passWord.equals(admin.getAdminPassword())) {
            return new ResponseEntity<Object>(new ApiCommonResult(2,"用户名密码错误"), HttpStatus.OK);
        }
        return new ResponseEntity<Object>(new ApiCommonResult(3, "管理员登陆成功"),HttpStatus.OK);
    }

}
