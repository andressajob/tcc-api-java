package br.edu.ifrs.canoas.lds.webapp.service;

import br.edu.ifrs.canoas.lds.webapp.domain.Finances;
import br.edu.ifrs.canoas.lds.webapp.domain.Role;
import br.edu.ifrs.canoas.lds.webapp.repository.FinancesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FinancesService {

    private final FinancesRepository financesRepository;

    public FinancesService(FinancesRepository financesRepository) {
        this.financesRepository = financesRepository;
    }

    public List<Finances> findAll() {
        return financesRepository.findAll();
    }

}
