package com.manoj.E_commercebackend.Service;

import com.manoj.E_commercebackend.Model.Cart;
import com.manoj.E_commercebackend.Repository.Cartrepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Cartservice {
    @Autowired
    Cartrepositary cartrepositary;

    public ResponseEntity<?> addproductid(Cart cart) {
        try{
            cartrepositary.save(cart);
            return ResponseEntity.ok("Product added to cart !");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Eror try again later");
        }

    }

    public List<Cart> getallcart() {
        return  cartrepositary.findAll();
    }

    public ResponseEntity<?> deletecart(int id) {
        List<Cart> cart=cartrepositary.findAll();
        for(Cart Cart:cart){
            if(id==Cart.getProductid()){
                cartrepositary.deleteById(Cart.getId());
                return ResponseEntity.ok("deleted");
            }
        }return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("error");
    }
}
