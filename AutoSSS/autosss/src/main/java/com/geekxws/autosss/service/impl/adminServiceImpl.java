package com.geekxws.autosss.service.impl;

import com.geekxws.autosss.domain.Admin;
import com.geekxws.autosss.domain.AdminRepository;
import com.geekxws.autosss.domain.ClassRoom;
import com.geekxws.autosss.domain.ClassRoomRepository;
import com.geekxws.autosss.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by geek720 on 2017/4/8.
 */
@Service("adminService")
public class adminServiceImpl implements AdminService{
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private ClassRoomRepository classRoomRepository;

    @Override
    public Admin findAdminByAdminName(String adminName) {
        return adminRepository.findByAdminName(adminName);
    }

    @Override
    public void CreateClassRoom(ClassRoom classRoom) {
        classRoomRepository.save(classRoom);
    }
}
