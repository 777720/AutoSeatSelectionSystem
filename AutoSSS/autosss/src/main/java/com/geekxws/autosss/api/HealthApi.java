package com.geekxws.autosss.api;

import com.geekxws.autosss.domain.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by geek720 on 2017/3/25.
 */
@RestController
public class HealthApi {
    @GetMapping("/health")
    public ResponseEntity<?> health() {
        return new ResponseEntity<Object>(new ApiCommonResult(true, 1, "healthApi"), HttpStatus.OK);
    }



}
