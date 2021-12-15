package com.apiGeneralV8.APIv8Baterias.config;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.apiGeneralV8.APIv8Baterias.config.entities.UserConfigEntity;
import com.apiGeneralV8.APIv8Baterias.config.repository.UserConfigRepository;

@Service
public class UserDetailsServiceV8 implements UserDetailsService{
	private final UserConfigRepository userRepository;

    @Autowired
    public UserDetailsServiceV8(UserConfigRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserConfigEntity user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("Usuário não existe!", username));
        }
        return new UserRepositoryUserDetails(user);
    }

    private final static class UserRepositoryUserDetails extends UserConfigEntity implements UserDetails {

        private static final long serialVersionUID = 1L;

        private UserRepositoryUserDetails(UserConfigEntity user) {
            super(user);
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return getRoles();
        }

        @Override
        public String getUsername() {
            return this.getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }

        @Override
        public String getPassword() {
            return  super.getPassword();
        }

    }
}
