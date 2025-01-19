package com.manoj.E_commercebackend.Controller;

import com.manoj.E_commercebackend.Model.Productdetails;
import com.manoj.E_commercebackend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
public class AddproductController {
    @Autowired
    ProductService productService;

    @PostMapping("/addproduct")
    public void getproduct(@RequestPart Productdetails product,
                         @RequestPart MultipartFile imageFile)
                        throws IOException {

        System.out.println(product);
        productService.addproduct(product,imageFile);
    }

    @GetMapping("/")
    public List<Productdetails> getallproduct(){
        return productService.getall();
    }

    @GetMapping("/product/{id}")
    public Productdetails getproductbyid(@PathVariable int id){

        return productService.getproductbyid(id);
    }

    @GetMapping("/product/image/{id}")
    public ResponseEntity<byte[]> getimage(@PathVariable int id){
        Productdetails prod=productService.getproductbyid(id);
        byte[] image=prod.getImage();
        return ResponseEntity.ok()
                .contentType(MediaType.valueOf(prod.getFiletype()))
                .body(image);
    }

    @GetMapping("/products/search")
    public ResponseEntity<List<Productdetails>> searchitem(@RequestParam String keyword){
        List<Productdetails> products=productService.getsearchbykeyword(keyword);
        System.out.println("searching with " + keyword);
        return new ResponseEntity<>(products,HttpStatus.OK);
    }

    @PutMapping("/product/updateproduct")
    public void updateproduct(@RequestPart Productdetails product, @RequestPart MultipartFile imageFile) throws IOException {
        productService.updatetheproduct(product,imageFile);
    }

    @DeleteMapping("/product/delete/{id}")
    public void deleteproduct(@PathVariable int id){
        productService.deleteproduct(id);
    }
}
