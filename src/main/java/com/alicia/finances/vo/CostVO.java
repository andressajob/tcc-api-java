package com.alicia.finances.vo;

public class CostVO {

    private Long id;
    private String name;
    private double value;
    private String description;
    private int month;
    private int year;

    public CostVO() {
    }

    public CostVO(Long id, String name, double value, String description, int month, int year) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.description = description;
        this.month = month;
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
