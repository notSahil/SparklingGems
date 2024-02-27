package com.thbs.service;

import java.util.Optional;

import java.util.List;

import org.springframework.stereotype.Service;

import com.thbs.config.JwtTokenProvider;
import com.thbs.exception.UserException;
import com.thbs.modal.User;
import com.thbs.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService {
	
	 private UserRepository userRepository;
	    private JwtTokenProvider jwtTokenProvider;
	    
	    public UserServiceImplementation(UserRepository userRepository, JwtTokenProvider jwtTokenProvider) {
	        this.userRepository = userRepository;
	        this.jwtTokenProvider = jwtTokenProvider;
	    }

	    @Override
	    public User findUserById(Long userId) throws UserException {
	        Optional<User> user = userRepository.findById(userId);
	        
	        if (user.isPresent()) {
	            return user.get();
	        }
	        throw new UserException("User not found with id " + userId);
	    }

	    @Override
	    public User findUserProfileByJwt(String jwt) throws UserException {
	        System.out.println("user service");
	        String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
	        
	        System.out.println("email " + email);
	        
	        User user = userRepository.findByEmail(email);
	        
	        if (user == null) {
	            throw new UserException("User does not exist with email " + email);
	        }
	        System.out.println("email user " + user.getEmail());
	        return user;
	    }

	    @Override
	    public List<User> getAllUsers() {
	        return userRepository.findAll();
	    }
}
