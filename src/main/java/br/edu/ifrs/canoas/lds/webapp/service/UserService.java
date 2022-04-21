package br.edu.ifrs.canoas.lds.webapp.service;

import java.util.HashSet;
import java.util.List;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.edu.ifrs.canoas.lds.webapp.domain.Role;
import br.edu.ifrs.canoas.lds.webapp.domain.User;
import br.edu.ifrs.canoas.lds.webapp.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleService roleService;

	public UserService(UserRepository userRepository, RoleService roleService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
    }

    public User save(User user) {
        if (user != null) {
            if (userRepository.existsByUsername(user.getUsername().toLowerCase()) && user.getId() == null) {
                return null;
            } else {
                HashSet<Role> roles = new HashSet<>();
                PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
                if (user.getRoles().isEmpty()) {
                    roles.add(roleService.getOne(1L));
                    user.setRoles(roles);
                }
                String hashedPassword = passwordEncoder.encode(user.getPassword()); //encript password
                user.setPassword(hashedPassword);
                user.setUsername(user.getUsername().toLowerCase());
                return userRepository.save(user);
            }
        }
        return null;
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
