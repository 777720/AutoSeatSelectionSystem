package com.geekxws.autosss.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

/**
 * Created by geek720 on 2017/4/5.
 */
@Document(collection = "notice")
public class Notice implements Serializable {
    private static final long serialVersionUID = 1063421925923440317L;
    @Id
    private String Id;

}
