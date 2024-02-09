package com.example.baby_shower_backend.Model;

// import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class FoodMenu {
@Id
private int foodmenuid;
private String foodmenuType;
private String foodmenuName;
private Long price;
public int getFoodmenuid() {
    return foodmenuid;
}
public void setFoodmenuid(int foodmenuid) {
    this.foodmenuid = foodmenuid;
}
public String getFoodmenuType() {
    return foodmenuType;
}
public void setFoodmenuType(String foodmenuType) {
    this.foodmenuType = foodmenuType;
}
public String getFoodmenuName() {
    return foodmenuName;
}
public void setFoodmenuName(String foodmenuName) {
    this.foodmenuName = foodmenuName;
}
public Long getPrice() {
    return price;
}
public void setPrice(Long price) {
    this.price = price;
}
@Override
public String toString() {
    return "FoodMenu [foodmenuid=" + foodmenuid + ", foodmenuType=" + foodmenuType + ", foodmenuName=" + foodmenuName
            + ", price=" + price + "]";
}

}
