package com.manoj.E_commercebackend.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Date;

@Entity
public class Productdetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String brand;
    private String category;
    private long price;
    private long quantity;

    private String releasedate;

    @Column(columnDefinition = "TEXT")
    private String description;

    private Boolean isporoductavilable;

    private String filetype;
    private String filename;
    @Lob
    private byte[] image;


    public Boolean getIsproductavilable() {
        return isporoductavilable;
    }

    public void setIsproductavilable(Boolean isproductavilable) {
        this.isporoductavilable = isproductavilable;
    }

    public String getFiletype() {
        return filetype;
    }

    public void setFiletype(String filetype) {
        this.filetype = filetype;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Productdetails(int id, String name, String brand, String category, long price, long quantity, String releasedate, String description, String filetype, String filename, byte[] image, Boolean isproductavilable) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.releasedate = releasedate;
        this.description = description;
        this.filetype = filetype;
        this.filename = filename;
        this.image = image;
        this.isporoductavilable = isproductavilable;
    }

    public int getId() {
        return id;
    }

    public Productdetails() {
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public String getReleasedate() {
        return releasedate;
    }

    public void setReleasedate(String releasedate) {
        this.releasedate = releasedate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getIsporoductavilable() {
        return isporoductavilable;
    }

    public void setIsporoductavilable(Boolean isporoductavilable) {
        this.isporoductavilable = isporoductavilable;
    }

    @Override
    public String toString() {
        return "Productdetails{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", brand='" + brand + '\'' +
                ", category='" + category + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                ", releasedate='" + releasedate + '\'' +
                ", description='" + description + '\'' +
                ", isproductavilable=" + isporoductavilable +
                ", filetype='" + filetype + '\'' +
                ", filename='" + filename + '\'' +
                ", image=" + Arrays.toString(image) +
                '}';
    }
}
