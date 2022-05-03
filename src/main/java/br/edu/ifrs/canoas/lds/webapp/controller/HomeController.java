package br.edu.ifrs.canoas.lds.webapp.controller;

import java.util.List;

import br.edu.ifrs.canoas.lds.webapp.service.FinancesService;
import br.edu.ifrs.canoas.lds.webapp.service.ReportService;
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
public class HomeController {
	private UserService userService;
    private ReportService reportService;
    private FinancesService financesService;
    @Autowired
    public HomeController(UserService userService,ReportService reportService,FinancesService financesService) {
        this.userService = userService;
        this.reportService = reportService;
        this.financesService = financesService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll();
    }

    @GetMapping("/report")
    public void getUserReport() {
        reportService.findAll();
    }

    @GetMapping("/finances")
    public void getUserFinances(){
        financesService.findAll();
    }
}
