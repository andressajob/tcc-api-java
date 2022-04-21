package br.edu.ifrs.canoas.lds.webapp.controller;

import java.util.List;

import br.edu.ifrs.canoas.lds.webapp.service.RoleService;
import br.edu.ifrs.canoas.lds.webapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifrs.canoas.lds.webapp.domain.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@Controller
public class HomeController {
	private UserService userService;
    @Autowired
    public HomeController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll();
    }

    @GetMapping("/")
    public void getHome() {
    }
}
