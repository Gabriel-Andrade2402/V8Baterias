package com.apiGeneralV8.APIv8Baterias.config.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "tb_user_config")
@EqualsAndHashCode
@NoArgsConstructor
@ToString
public class UserConfigEntity {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_config_id")
    @Getter @Setter private Long id;
	@Getter @Setter private String name;
    @Column(unique = true,name="str_email")
    @Getter @Setter private String email;
    @JsonIgnore
    @Column(name="str_password")
    @Getter @Setter private String password;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="user_role",
            joinColumns=@JoinColumn(name="user_config_id"),
            inverseJoinColumns=@JoinColumn(name="role_config_id")
    )
    @Getter @Setter private List<RoleConfigEntity> roles;
    
    public UserConfigEntity(String name, String email) {
        super();
        this.name = name;
        this.email = email;
    }
    public UserConfigEntity(UserConfigEntity user) {
        super();
        this.name = user.getName();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.roles = user.getRoles();
        this.id = user.getId();
    }
    public UserConfigEntity(String name, String email, String password, List<RoleConfigEntity> roles) {
        super();
        this.name = name;
        this.email = email;
        this.roles = roles;
        this.password = password;
    }
    public UserConfigEntity(Long id,String name, String email, String password, List<RoleConfigEntity> roles) {
        super();
        this.name = name;
        this.email = email;
        this.roles = roles;
        this.password = password;
    }
	public UserConfigEntity updateAllData(UserConfigEntity newEntity) {
		return new UserConfigEntity(id,newEntity.getName(),newEntity.getEmail(),
				newEntity.getPassword(),newEntity.getRoles());
	}
}
