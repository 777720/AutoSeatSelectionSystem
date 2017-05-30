package com.geekxws.autosss.service.impl;

import com.geekxws.autosss.domain.User;
import com.geekxws.autosss.domain.UserRepository;
import com.geekxws.autosss.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by geek720 on 2017/5/23.
 */
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void userSignUp(User user) {

    }
}
