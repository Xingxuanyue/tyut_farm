package com.qst.crop.model;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;


@Data
public class MyPurchase {
    private Integer purchaseId;

    private String ownName;

    private Integer purchaseType;

    private BigDecimal totalPrice;

    private String address;

    private Integer purchaseStatus;

    private Date createTime;

    private Date updateTime;
    private String picture;
}
