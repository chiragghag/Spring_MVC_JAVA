package com.beingjavaguys.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "tbl_userdetails")
public class UserDetails {
	
	@Id
	@GeneratedValue
	@Column(name = "uid")
	private int uid;

	@Column(name = "type")
	private String type;

	@Column(name = "bname")
	private String bname;
	
	@Column(name = "aname")
	private String aname;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "town")
	private String town;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "altno")
	private Long altno;
	
	@Column(name = "website")
	private String website;
	
	@Column(name = "logo" ,columnDefinition="mediumblob")
	private byte[] logo;



	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getBname() {
		return bname;
	}

	public void setBname(String bname) {
		this.bname = bname;
	}

	public String getAname() {
		return aname;
	}

	public void setAname(String aname) {
		this.aname = aname;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getAltno() {
		return altno;
	}

	public void setAltno(Long altno) {
		this.altno = altno;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public Object getLogo() {
		return logo;
	}

	public void setLogo(byte[] logo) {
		this.logo = logo;
	}

}
