package com.alicia.finances.service;


import com.alicia.finances.model.Finances;
import com.alicia.finances.repository.FinancesRepository;
import com.alicia.finances.vo.CostVO;
import com.alicia.finances.vo.IncomeVo;
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
    public IncomeVo findByYearAndMonthAndCostFalse(int year, int month) {
        Finances finances = financesRepository.findByYearAndMonthAndCostFalse(year, month);
        return new IncomeVo(finances.getId(),finances.getValue(),
                finances.getDescription(),finances.getMonth(),
                finances.getYear());
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
    public void editIncome(IncomeVo incomeVO) {
        Finances finances = financesRepository.getOne(incomeVO.getId());
        finances.setCost(false);
        finances.setDescription(incomeVO.getDescription());
        finances.setValue(incomeVO.getValue());
        finances.setMonth(incomeVO.getMonth());
        finances.setYear(incomeVO.getYear());
        financesRepository.save(finances);
    }
}
