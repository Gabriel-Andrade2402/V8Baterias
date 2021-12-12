--CÓDIGOS GERADOS PELO HIBERNATE E MOSTRADOS NO CONSOLE
create table tb_address (
       id_adress bigint generated by default as identity,
        num_residence integer,
        str_cep varchar(255),
        str_observation varchar(255),
        str_reference_point varchar(255),
        str_road varchar(255),
        primary key (id_adress)
    )
create table tb_address_list_client (
       address_entity_id_adress bigint not null,
        list_client_id_client bigint not null
    )
create table tb_admin (
       id_admin bigint generated by default as identity,
        str_cpf varchar(255),
        str_mail varchar(255),
        str_name varchar(255),
        str_password varchar(255),
        office_id bigint not null,
        primary key (id_admin)
    )
create table tb_client (
       id_client bigint generated by default as identity,
        str_cpf varchar(255),
        str_mail varchar(255),
        str_name varchar(255),
        str_password varchar(255),
        str_telephone varchar(255),
        config_id bigint not null,
        primary key (id_client)
    )
create table tb_client_list_address (
       client_entity_id_client bigint not null,
        list_address_id_adress bigint not null
    )
create table tb_config (
       id_config bigint generated by default as identity,
        bol_receive_promotions boolean,
        str_receive_updating_price boolean,
        dt_created date,
        str_updated date,
        primary key (id_config)
    )
create table tb_office (
       id_office bigint generated by default as identity,
        str_name_office varchar(255),
        primary key (id_office)
    )
create table tb_product (
       id_product bigint generated by default as identity,
        bol_product_operating boolean,
        num_price double,
        num_quantity integer,
        str_code_product varchar(255),
        str_image_base clob,
        str_informations varchar(255),
        str_name_product varchar(255),
        primary key (id_product)
    )
create table tb_request (
       id_request bigint generated by default as identity,
        bol_payment_aproved boolean,
        dt_canceled date,
        dt_request date,
        str_code_request varchar(255),
        str_reason_cancel varchar(255),
        str_situation varchar(255),
        address_id bigint not null,
        client_id bigint not null,
        product_id bigint not null,
        service_id bigint not null,
        primary key (id_request)
    )
create table tb_service (
       id_service bigint generated by default as identity,
        bol_product_operating boolean,
        num_price double,
        str_code_service varchar(255),
        str_informations varchar(255),
        str_name_service varchar(255),
        primary key (id_service)
    )
create table tb_storys (
       id_storys bigint generated by default as identity,
        str_description varchar(255),
        str_image_base clob,
        str_title varchar(255),
        primary key (id_storys)
    )
alter table tb_admin 
    add constraint UK_grdvns5xqaw76dgeemvqa9dqk unique (str_mail)

alter table tb_client 
    add constraint UK_p3yv0hq8xblfmy2nj5xkisk2u unique (str_mail)

alter table tb_address_list_client 
    add constraint FKcx9dnb8ku8s3e6ctfrtvq2ji7 
    foreign key (list_client_id_client) 
    references tb_client

alter table tb_address_list_client 
    add constraint FKs0f3uhj7g23fb6imq32563ajc 
    foreign key (address_entity_id_adress) 
    references tb_address

alter table tb_admin 
    add constraint FKksj6t4f6s07wcyjdaas3d43kg 
    foreign key (office_id) 
    references tb_office

alter table tb_client 
    add constraint FKayngy4ch1ihuadu139qjunevr 
    foreign key (config_id) 
    references tb_config

alter table tb_client_list_address 
    add constraint FK1qaiwsmgmdhuypx5dpreeidfc 
    foreign key (list_address_id_adress) 
    references tb_address

alter table tb_client_list_address 
    add constraint FKr75vlwy6rnyjtcrupag67akmd 
    foreign key (client_entity_id_client) 
    references tb_client

alter table tb_request 
    add constraint FKjssluc30egwq3d4bxvie9mfcb 
    foreign key (address_id) 
    references tb_address

alter table tb_request 
    add constraint FKql8osgkd5dfbgeb595iwhtb63 
    foreign key (client_id) 
    references tb_client

alter table tb_request 
    add constraint FKpu8apuuuy3tprkdfje97q9gu6 
    foreign key (product_id) 
    references tb_product

alter table tb_request 
    add constraint FKboemld4abrc9wx5ahtjdgtmyr 
    foreign key (service_id) 
    references tb_service