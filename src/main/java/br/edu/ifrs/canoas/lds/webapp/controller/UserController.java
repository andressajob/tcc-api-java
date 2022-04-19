package br.edu.ifrs.canoas.lds.webapp.controller;

import java.util.Set;

import javax.validation.Valid;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import br.edu.ifrs.canoas.lds.webapp.config.auth.UserImpl;
import br.edu.ifrs.canoas.lds.webapp.domain.Role;
import br.edu.ifrs.canoas.lds.webapp.domain.User;
import br.edu.ifrs.canoas.lds.webapp.service.UserService;

@Controller
@RequestMapping("/user/")
public class UserController {

    private final UserService userService;
    private boolean error = false;
    private boolean invalid = false;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    
    @GetMapping("create")
    public ModelAndView createUser(Model model) {
        ModelAndView mav = new ModelAndView("/user/form");
        mav.addObject("user", new User());
        model.addAttribute("error", error);
        model.addAttribute("invalid", invalid);
        model.addAttribute("action", "new");
        model.addAttribute("permission", false);
        error = false;
        invalid = false;
        return mav;
    }

    @PostMapping("save")
    public String save(@Valid User user, @AuthenticationPrincipal UserImpl activeUser) {
        User userValidate = new User();
        String mav = "";
        String roleString = getRoles(activeUser);
        if (user.getUsername().isEmpty() || user.getPassword().isEmpty() || user.getEmail().isEmpty() ||
                user.getName().isEmpty()) {
            error = true;
            if (user.getId() != null) {
                mav = ("redirect:/user/edit/" + user.getId());
            } else {
                if (roleString.equals("ROLE_ADMIN")) {
                    mav = ("redirect:/user/form");
                } else {
                    mav = ("redirect:/user/create");
                }
            }
        } else {
            userValidate = userService.save(user);
            if (userValidate != null) {
                if (roleString.equals("ROLE_ADMIN")) {
                    mav = ("redirect:/user/list");
                } else {
                    mav = ("redirect:/user/profile");
                }
            } else {
                invalid = true;
                if (user.getId() != null) {
                    mav = ("redirect:/user/edit/" + user.getId());
                } else {
                    if (roleString.equals("ROLE_ADMIN")) {
                        mav = ("redirect:/user/form");
                    } else {
                        mav = ("redirect:/user/create");
                    }
                }
            }
        }
        return mav;
    }

    public static String getRoles (UserImpl activeUser){
        String roleString = "";
        if (activeUser != null) {
            Set<Role> roles = activeUser.getUser().getRoles();
            for (Role role : roles) {
                roleString = role.getRole();
            }
        }
        return roleString;
    }
}
