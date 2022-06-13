package com.alicia.finances.resource;

import java.util.List;

import com.alicia.finances.model.Finances;
import com.alicia.finances.model.Report;
import com.alicia.finances.model.User;
import com.alicia.finances.service.FinancesService;
import com.alicia.finances.service.ReportService;
import com.alicia.finances.service.UserService;
import com.alicia.finances.vo.CostVO;
import com.alicia.finances.vo.IncomeVo;
import com.alicia.finances.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/finances/{year}/{month}")
    public List<CostVO> getFinances(@PathVariable("year") int year, @PathVariable("month") int month) {
        return financesService.findByYearAndMonthAndCostTrue(year, month);
    }
    @GetMapping("/income/{year}/{month}")
    public IncomeVo getIncomeFinances(@PathVariable("year") int year, @PathVariable("month") int month) {
        return financesService.findByYearAndMonthAndCostFalse(year, month);
    }
    @PostMapping("/addCost")
    public void addCost(@RequestBody CostVO costVO) {
        financesService.addCost(costVO);
    }
    @DeleteMapping("/deleteCost/{id}")
    public void deleteCost(@PathVariable("id") String id) {
        financesService.deleteCost(id);
    }
    @PutMapping("/editCost")
    public void editCost(@RequestBody CostVO costVO) {
        financesService.editCost(costVO);
    }
    @PutMapping("/editIncome")
    public void editIncome(@RequestBody IncomeVo incomeVO) {
        financesService.editIncome(incomeVO);
    }
    @PostMapping("/addUser")
    public void addUser(@RequestBody UserVo userVO) {
        userService.addUser(userVO);
    }
}
