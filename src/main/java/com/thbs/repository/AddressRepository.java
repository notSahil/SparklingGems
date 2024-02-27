package com.thbs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thbs.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
