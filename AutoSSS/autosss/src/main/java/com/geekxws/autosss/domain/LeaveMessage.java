package com.geekxws.autosss.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

/**
 * Created by geek720 on 2017/4/5.
 */
@Document(collection = "leavemessage")
public class LeaveMessage implements Serializable {
    private static final long serialVersionUID = 3255672851495694089L;
    @Id
    private String id;

}
