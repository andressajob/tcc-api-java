package com.alicia.finances.service;

import com.alicia.finances.model.User;
import com.alicia.finances.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final AuthorityService authorityService;

	public UserService(UserRepository userRepository, AuthorityService authorityService) {
        this.userRepository = userRepository;
        this.authorityService = authorityService;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User getOne(Long id) {
        if (id != null && userRepository.existsById(id))
            return userRepository.getOne(id);
        return null;
    }

    public boolean existsById(Long id) {
        if (id != null)
            return userRepository.existsById(id);
        return false;
    }
}
