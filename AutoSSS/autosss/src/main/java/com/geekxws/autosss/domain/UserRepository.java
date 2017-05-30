package com.geekxws.autosss.domain;

import com.mongodb.Mongo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by geek720 on 2017/5/23.
 */
public interface UserRepository extends MongoRepository<User, String> {

}
