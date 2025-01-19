package com.manoj.E_commercebackend.Repository;

import com.manoj.E_commercebackend.Model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Cartrepositary extends JpaRepository<Cart,Integer> {
}
