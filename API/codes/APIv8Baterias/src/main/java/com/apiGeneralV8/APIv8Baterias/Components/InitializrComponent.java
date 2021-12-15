package com.apiGeneralV8.APIv8Baterias.Components;


import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.apiGeneralV8.APIv8Baterias.config.entities.RoleConfigEntity;
import com.apiGeneralV8.APIv8Baterias.config.entities.UserConfigEntity;
import com.apiGeneralV8.APIv8Baterias.config.repository.RoleConfigRepository;
import com.apiGeneralV8.APIv8Baterias.config.repository.UserConfigRepository;
import com.apiGeneralV8.APIv8Baterias.enums.RolesConfig;

@Component
public class InitializrComponent implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    UserConfigRepository userRepository;

    @Autowired
    RoleConfigRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent arg0) {

        List<UserConfigEntity> users = userRepository.findAll();

        if (users.isEmpty()) {
            createUser("Claudia", "claudia@v8Baterias.com", passwordEncoder.encode("v8claudia"), RolesConfig.ROLE_ADMIN);
            createUser("Cliente", "cliente", passwordEncoder.encode("123456"), RolesConfig.ROLE_CLIENT);
        }

    }

    public void createUser(String name, String email, String password, String roleName) {

        RoleConfigEntity role = new RoleConfigEntity(roleName);

        this.roleRepository.save(role);
        UserConfigEntity user = new UserConfigEntity(name, email, password, Arrays.asList(role));
        userRepository.save(user);
    }

}