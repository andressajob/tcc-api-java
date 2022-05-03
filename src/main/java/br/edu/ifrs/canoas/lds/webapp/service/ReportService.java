package br.edu.ifrs.canoas.lds.webapp.service;

import br.edu.ifrs.canoas.lds.webapp.domain.Finances;
import br.edu.ifrs.canoas.lds.webapp.domain.Report;
import br.edu.ifrs.canoas.lds.webapp.repository.FinancesRepository;
import br.edu.ifrs.canoas.lds.webapp.repository.ReportRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {

    private final ReportRepository reportRepository;

    public ReportService(ReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }

    public List<Report> findAll() {
        return reportRepository.findAll();
    }

}
