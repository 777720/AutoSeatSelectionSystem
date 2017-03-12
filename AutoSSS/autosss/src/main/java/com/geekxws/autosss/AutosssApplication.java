package com.geekxws.autosss;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class AutosssApplication {

	@RequestMapping("/")
	public String index() {
		return "tmd 咩事啊";
	}
	public static void main(String[] args) {
		SpringApplication.run(AutosssApplication.class, args);
	}
}
