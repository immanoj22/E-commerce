package com.manoj.E_commercebackend.Model;

import jakarta.persistence.*;

@Entity
@Table(name="Cartforproduct")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int productid;

    public Cart() {
    }

    

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProductid() {
        return productid;
    }

    public void setProductid(int productid) {
        this.productid = productid;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", productid=" + productid +
                '}';
    }
}
