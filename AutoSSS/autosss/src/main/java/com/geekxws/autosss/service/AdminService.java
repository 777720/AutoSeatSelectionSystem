package com.geekxws.autosss.service;

import com.geekxws.autosss.domain.Admin;

/**
 * Created by geek720 on 2017/4/8.
 */
public interface AdminService {
    Admin findAdminByAdminName(String adminName);
}
