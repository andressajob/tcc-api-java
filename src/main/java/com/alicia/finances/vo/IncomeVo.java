package com.alicia.finances.vo;

public class IncomeVo {

    private Long id;
    private double value;
    private String description;
    private int month;
    private int year;

    public IncomeVo() {
    }

    public IncomeVo(Long id, double value, String description, int month, int year) {
        this.id = id;
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

    @Override
    public String toString() {
        return "IncomeVo{" +
                "id=" + id +
                ", value=" + value +
                ", description='" + description + '\'' +
                ", month=" + month +
                ", year=" + year +
                '}';
    }
}
