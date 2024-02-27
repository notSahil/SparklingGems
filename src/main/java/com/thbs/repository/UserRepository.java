package com.thbs.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.thbs.modal.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);
	 List<User> findAll();
	

}
