package br.edu.ifrs.canoas.lds.webapp.service;

import br.edu.ifrs.canoas.lds.webapp.domain.Role;
import br.edu.ifrs.canoas.lds.webapp.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    public Role getOne(Long id) {
        if (id != null && roleRepository.existsById(id))
            return roleRepository.getOne(id);
        return null;
    }

    public boolean existsById(Long id) {
        if (id != null)
            return roleRepository.existsById(id);
        return false;
    }

}
