package com.alicia.finances.repository;

import com.alicia.finances.model.Finances;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FinancesRepository extends JpaRepository<Finances, Long> {
    List<Finances> findByCostTrue();

    List<Finances> findByCostFalse();

    List<Finances> findByYearAndMonthAndCostTrue(int year, int month);

    Finances findByYearAndMonthAndCostFalse(int year, int month);
}
