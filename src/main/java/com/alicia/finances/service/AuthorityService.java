package com.alicia.finances.service;

import com.alicia.finances.model.Authority;
import com.alicia.finances.repository.AuthorityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorityService {
    private final AuthorityRepository authorityRepository;

    public AuthorityService(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    public List<Authority> findAll() {
        return authorityRepository.findAll();
    }

    public Authority getOne(Long id) {
        if (id != null && authorityRepository.existsById(id))
            return authorityRepository.getOne(id);
        return null;
    }

    public boolean existsById(Long id) {
        if (id != null)
            return authorityRepository.existsById(id);
        return false;
    }

}
