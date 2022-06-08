package com.alicia.finances.service;

import com.alicia.finances.model.Finances;
import com.alicia.finances.model.User;
import com.alicia.finances.repository.UserRepository;
import com.alicia.finances.vo.CostVO;
import com.alicia.finances.vo.UserVo;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    public User addUser(UserVo userVo) {

        User user = new User();
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        String hashedPassword = passwordEncoder.encode(user.getPassword()); //encript password
        user.setPassword(hashedPassword);

        user.setName(userVo.getName());
        user.setUsername(userVo.getUsername());
        user.setEmail(userVo.getEmail());
        user.setPassword(userVo.getPassword());
        user.setEnabled(true);
        return userRepository.save(user);
    }
}
