package com.thbs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thbs.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
