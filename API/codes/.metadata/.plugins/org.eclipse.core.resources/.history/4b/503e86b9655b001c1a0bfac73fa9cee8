package com.apiGeneralV8.APIv8Baterias.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "tb_product")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class ProductEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Getter @Setter private Long idProduct;
	@Column(name="str_name_product")
	@Getter @Setter private String strNameProduct;
	@Lob
	@Column(name="str_image_base")
	@Getter @Setter private String strImageBase;
	@Column(name="bol_product_operating")
	@Getter @Setter private Boolean bolProductOperating;
	@Column(name="num_price")
	@Getter @Setter private Double numPrice;
	@Column(name="str_code_product")
	@Getter @Setter private String strCodeProduct;
	@Column(name="str_informations")
	@Getter @Setter private String strInformations;
	@Column(name="num_quantity")
	@Getter @Setter private Integer numQuantity;
	@OneToMany(mappedBy="product_id")
	@Getter @Setter private List<RequestEntity> listRequests=new ArrayList<>();
	
	public ProductEntity updateAllData(ProductEntity newEntity) {
		return new ProductEntity(newEntity.getIdProduct(),newEntity.getStrNameProduct(),
				newEntity.getStrImageBase(), newEntity.getBolProductOperating(),
				newEntity.getNumPrice(), newEntity.getStrCodeProduct(), newEntity.getStrInformations(),
				newEntity.getNumQuantity(), newEntity.getListRequests());
	}
	
}
