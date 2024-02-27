package com.thbs.service;

import java.util.List;

import com.thbs.exception.ProductException;
import com.thbs.modal.Rating;
import com.thbs.modal.User;
import com.thbs.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
