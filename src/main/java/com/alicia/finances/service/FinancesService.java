package com.alicia.finances.service;


import com.alicia.finances.model.Finances;
import com.alicia.finances.repository.FinancesRepository;
import com.alicia.finances.vo.CostVO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public List<CostVO> findByYearAndMonthAndCostTrue(int year, int month) {
        List<CostVO> costVOS = new ArrayList<>();
        for (Finances finances: financesRepository.findByYearAndMonthAndCostTrue(year, month)) {
            costVOS.add(new CostVO(finances.getId(),
                    finances.getName(), finances.getValue(),
                    finances.getDescription(),finances.getMonth(),
                    finances.getYear()));
        }
        return costVOS;
    }
    public List<Finances> findAllCostFalse() {
        return financesRepository.findByCostFalse();
    }
    public Finances addCost(CostVO costVO) {
        Finances finances = new Finances();
        finances.setCost(true);
        finances.setDescription(costVO.getDescription());
        finances.setName(costVO.getName());
        finances.setValue(costVO.getValue());
        finances.setMonth(costVO.getMonth());
        finances.setYear(costVO.getYear());
        return financesRepository.save(finances);
    }

    public void deleteCost(String id) {
        financesRepository.deleteById(Long.parseLong(id));
    }

    public void editCost(CostVO costVO) {
        Finances finances = financesRepository.getOne(costVO.getId());
        finances.setCost(true);
        finances.setDescription(costVO.getDescription());
        finances.setName(costVO.getName());
        finances.setValue(costVO.getValue());
        finances.setMonth(costVO.getMonth());
        finances.setYear(costVO.getYear());
        financesRepository.save(finances);
    }
}
