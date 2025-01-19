package com.manoj.E_commercebackend.Service;

import com.manoj.E_commercebackend.Model.Productdetails;
import com.manoj.E_commercebackend.Repository.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public void addproduct(Productdetails productdetails, MultipartFile imagefile) throws IOException {
        productdetails.setFilename(imagefile.getOriginalFilename());
        productdetails.setFiletype(imagefile.getContentType());
        productdetails.setImage(imagefile.getBytes());
        productRepository.save(productdetails);
    }


    public List<Productdetails> getall() {
        return productRepository.findAll();
    }

    public Productdetails getproductbyid(int id) {
        return productRepository.findById(id).orElse(null);
    }

    @Transactional
    public List<Productdetails> getsearchbykeyword(String keyword) {
        return productRepository.searchProducts(keyword);
    }

    public void updatetheproduct(Productdetails product, MultipartFile imageFile) throws IOException {
        product.setFilename(imageFile.getOriginalFilename());
        product.setFiletype(imageFile.getContentType());
        product.setImage(imageFile.getBytes());
        productRepository.save(product);
    }

    public void deleteproduct(int id) {
        productRepository.deleteById(id);
    }
}
