package com.geekxws.autosss.domain;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by geek720 on 2017/4/5.
 */
public interface AdminRepository extends MongoRepository<Admin, String> {
    public Admin findByAdminName(String adminName);
}
