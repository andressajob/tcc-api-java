package com.alicia.finances.service;


import com.alicia.finances.model.Finances;
import com.alicia.finances.repository.FinancesRepository;
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
