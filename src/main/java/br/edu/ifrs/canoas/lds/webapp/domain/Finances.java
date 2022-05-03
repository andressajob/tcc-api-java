package br.edu.ifrs.canoas.lds.webapp.domain;

import javax.persistence.*;

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
    private boolean isCost;
    @ManyToOne
    private User user;
    @ManyToOne
    private Report report;

    public Finances(Long id, String name, double value, String description, int month, int year, boolean isCost, User user, Report report) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.description = description;
        this.month = month;
        this.year = year;
        this.isCost = isCost;
        this.user = user;
        this.report = report;
    }

    public Finances() {
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
        return isCost;
    }

    public void setCost(boolean cost) {
        isCost = cost;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Report getReport() {
        return report;
    }

    public void setReport(Report report) {
        this.report = report;
    }
}
