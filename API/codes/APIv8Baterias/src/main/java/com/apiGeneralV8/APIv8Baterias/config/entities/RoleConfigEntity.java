package com.apiGeneralV8.APIv8Baterias.config.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "tb_role_config")
@EqualsAndHashCode
@NoArgsConstructor
@ToString
public class RoleConfigEntity implements GrantedAuthority {

	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "role_config_id")
    @Getter @Setter private Long id;
	@Column(name="str_name")
	@Getter @Setter private String name;
    
	public RoleConfigEntity(String name) {
        this.name = name;
    }
	public RoleConfigEntity(Long id,String name) {
        this.name = name;
        this.id = id;
    }
	@Override
	public String getAuthority() {
		return  this.name.toString();
	}
	public RoleConfigEntity updateAllData(RoleConfigEntity newEntity) {
		return new RoleConfigEntity(id,newEntity.getName());
	}
}
