package com.geekxws.autosss.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

/**
 * Created by geek720 on 2017/4/5.
 */
@Document(collection = "user")
public class User implements Serializable {
    private static final long serialVersionUID = 7143329594865227395L;
    @Id
    private String Id;
}
