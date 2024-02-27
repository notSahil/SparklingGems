package com.thbs.service;

import com.thbs.exception.ProductException;
import com.thbs.modal.Cart;
import com.thbs.modal.CartItem;
import com.thbs.modal.User;
import com.thbs.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);
	
	//for removing the item
//	public void removeCartItem(Long userId, Long cartItemId);
//	public void deleteCartItem(CartItem cartItem);

}
