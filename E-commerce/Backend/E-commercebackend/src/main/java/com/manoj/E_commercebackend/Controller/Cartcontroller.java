package com.manoj.E_commercebackend.Controller;

import com.manoj.E_commercebackend.Model.Cart;
import com.manoj.E_commercebackend.Service.Cartservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class Cartcontroller {
    @Autowired
    Cartservice cartservice;

    @PostMapping("/cartprod")
    public ResponseEntity<?> addincart(@RequestBody Cart cart){
        System.out.println(cart.toString());
        return cartservice.addproductid(cart);
    }

    @GetMapping("/getcartproduct")
    public List<Cart> getallcart(){
        return cartservice.getallcart();
    }

    @DeleteMapping("/cartdelete/{id}")
    public ResponseEntity<?> deleteprod(@PathVariable int id){
        return cartservice.deletecart(id);
    }
}
