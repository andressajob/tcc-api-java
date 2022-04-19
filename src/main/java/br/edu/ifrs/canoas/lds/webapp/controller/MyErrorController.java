package br.edu.ifrs.canoas.lds.webapp.controller;

import org.springframework.boot.autoconfigure.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@Controller
public class MyErrorController implements ErrorController {

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request, Model model) {
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        if (status != null) {
            Integer statusCode = Integer.valueOf(status.toString());
            model.addAttribute("status", statusCode);
            if (statusCode == HttpStatus.FORBIDDEN.value()) {
                model.addAttribute("error", "FORBIDDEN - Acesso negado.");
            } else if (statusCode == HttpStatus.NOT_FOUND.value()) {
                model.addAttribute("error", "NOT FOUND - Esta página não foi encontrada.");
            } else if (statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {
                model.addAttribute("error", "INTERNAL SERVER ERROR - " +
                        "Aconteceu algo inesperado. Estamos verificando.");
            }
        }
        return "/error";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}