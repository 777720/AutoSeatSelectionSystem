package com.geekxws.autosss.domain;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * Created by geek720 on 2017/5/15.
 */
public interface NoticeRepository extends MongoRepository<Notice, String> {

    @Query("{id: ?0}")
    public Notice findById(String id);

}
