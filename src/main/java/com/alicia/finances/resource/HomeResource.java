package com.alicia.finances.resource;

import java.util.List;

import com.alicia.finances.model.Finances;
import com.alicia.finances.model.Report;
import com.alicia.finances.model.User;
import com.alicia.finances.service.FinancesService;
import com.alicia.finances.service.ReportService;
import com.alicia.finances.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeResource {
	private UserService userService;
    private ReportService reportService;
    private FinancesService financesService;
    @Autowired
    public HomeResource(UserService userService, ReportService reportService, FinancesService financesService) {
        this.userService = userService;
        this.reportService = reportService;
        this.financesService = financesService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll();
    }

    @GetMapping("/report")
    public List<Report> getUserReport() {
        return reportService.findAll();
    }

    @GetMapping("/finances")
    public List<Finances> getUserFinances() {
        return financesService.findAllCostTrue();
    }
}
