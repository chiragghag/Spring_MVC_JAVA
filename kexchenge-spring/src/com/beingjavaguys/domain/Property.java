package com.beingjavaguys.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_properties")
public class Property {

	@Id
	@GeneratedValue
	@Column(name = "pid")
	private int pid;

	@Column(name = "sellrent")
	private String sellrent;

	@Column(name = "rescom")
	private String rescom;

	@Column(name = "city")
	private String city;

	@Column(name = "town")
	private String town;
	
	@Column(name = "locality")
	private String locality;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "optionalinfo")
	private String optionalinfo;
	
	@Column(name = "area")
	private int area;
	
	@Column(name = "type")
	private String type;
	
	@Column(name = "floor")
	private String floor;
	
	@Column(name = "cost")
	private int cost;
	
	@Column(name = "rent")
	private int rent;
	
	@Column(name = "deposit")
	private int deposit;
	
	@Column(name = "directside")
	private String directside;
	
	@Column(name = "lastupdate")
	private String lastupdate;
	
	@Column(name = "uid")
	private String uid;

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getSellrent() {
		return sellrent;
	}

	public void setSellrent(String sellrent) {
		this.sellrent = sellrent;
	}

	public String getRescom() {
		return rescom;
	}

	public void setRescom(String rescom) {
		this.rescom = rescom;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getTown() {
		return town;
	}

	public void setTown(String town) {
		this.town = town;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getOptionalinfo() {
		return optionalinfo;
	}

	public void setOptionalinfo(String optionalinfo) {
		this.optionalinfo = optionalinfo;
	}

	public int getArea() {
		return area;
	}

	public void setArea(int area) {
		this.area = area;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFloor() {
		return floor;
	}

	public void setFloor(String floor) {
		this.floor = floor;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public int getRent() {
		return rent;
	}

	public void setRent(int rent) {
		this.rent = rent;
	}

	public int getDeposit() {
		return deposit;
	}

	public void setDeposit(int deposit) {
		this.deposit = deposit;
	}

	public String getDirectside() {
		return directside;
	}

	public void setDirectside(String directside) {
		this.directside = directside;
	}

	public String getLastupdate() {
		return lastupdate;
	}

	public void setLastupdate(String lastupdate) {
		this.lastupdate = lastupdate;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}
	
	


}
