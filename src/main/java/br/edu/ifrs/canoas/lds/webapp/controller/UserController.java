package br.edu.ifrs.canoas.lds.webapp.controller;

import javax.validation.Valid;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.edu.ifrs.canoas.lds.webapp.config.auth.UserImpl;
import br.edu.ifrs.canoas.lds.webapp.domain.User;
import br.edu.ifrs.canoas.lds.webapp.service.RoleService;
import br.edu.ifrs.canoas.lds.webapp.service.UserService;

@Controller
@RequestMapping("/user/")
public class UserController {

	private final UserService userService;
	private final RoleService roleService;
	private boolean error = false;
	private boolean invalid = false;

	public UserController(UserService userService, RoleService roleService) {
		this.userService = userService;
		this.roleService = roleService;
	}

	@PostMapping("save")
	public String save(@Valid User user, @AuthenticationPrincipal UserImpl activeUser) {
		User userValidate = new User();
		String mav = "";
		if (user.getUsername().isEmpty() || user.getPassword().isEmpty() || user.getEmail().isEmpty() || user.getName().isEmpty()) {
			error = true;
			if (user.getId() != null) {
				mav = ("redirect:/user/edit/" + user.getId());
			}
		} else {
			userValidate = userService.save(user);
			if (userValidate != null) {
				mav = ("redirect:/user/profile");
			} else {
				invalid = true;
				if (user.getId() != null) {
					mav = ("redirect:/user/edit/" + user.getId());
				} else {
					mav = ("redirect:/user/create");
				}
			}
		}
		return mav;
	}
}
