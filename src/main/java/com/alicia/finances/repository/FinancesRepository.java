package com.alicia.finances.repository;

import com.alicia.finances.model.Finances;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinancesRepository extends JpaRepository<Finances, Long> {

}
