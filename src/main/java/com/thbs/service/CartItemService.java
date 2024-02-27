package com.thbs.service;

import com.thbs.exception.CartItemException;
import com.thbs.exception.UserException;
import com.thbs.modal.Cart;
import com.thbs.modal.CartItem;
import com.thbs.modal.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart,Product product,String size, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
	//delete cartitem
   //	void deleteCartItem(CartItem cartItem);

	
}
