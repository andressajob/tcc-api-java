package com.alicia.finances.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Id;


@Entity
@Table(name = "finances")
public class Finances {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private double value;
    private String description;
    private int month;
    private int year;
    private boolean cost;
    @ManyToOne
    private User user;
    @ManyToOne
    private Report report;

    public Finances() {
    }

    public Finances(String name, double value, String description, int month, int year, boolean cost, com.alicia.finances.model.User user, com.alicia.finances.model.Report report) {
        this.name = name;
        this.value = value;
        this.description = description;
        this.month = month;
        this.year = year;
        this.cost = cost;
        this.user = user;
        this.report = report;
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

    public boolean isCost() {
        return cost;
    }

    public void setCost(boolean cost) {
        this.cost = cost;
    }

    public com.alicia.finances.model.User getUser() {
        return user;
    }

    public void setUser(com.alicia.finances.model.User user) {
        this.user = user;
    }

    public com.alicia.finances.model.Report getReport() {
        return report;
    }

    public void setReport(com.alicia.finances.model.Report report) {
        this.report = report;
    }
}
