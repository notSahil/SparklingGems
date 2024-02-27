package com.thbs.service;

import java.util.List;


import com.thbs.exception.UserException;
import com.thbs.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	// Method to get all users
    public List<User> getAllUsers();
    

}
