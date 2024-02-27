package com.thbs.service;

import java.util.List;

import com.thbs.exception.ProductException;
import com.thbs.modal.Review;
import com.thbs.modal.User;
import com.thbs.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
