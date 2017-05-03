package com.geekxws.autosss.domain;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by geek720 on 2017/5/2.
 */
public interface ClassRoomRepository extends MongoRepository<ClassRoom, String> {
    public ClassRoom findByName(String name);
}
