package com.beingjavaguys.domain;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "tbl_users")
public class Users {

	@Id
	@GeneratedValue
	@Column(name = "uid")
	private int uid;

	@Column(name = "email")
	private String email;

	@Column(name = "phoneno")
	private Long phoneno;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "type")
	private String type;
	
	@Column(name = "loginsallowed")
	private int loginsallowed;
	
	@Column(name = "devices")
	private String devices;
	
	@Column(name = "paidstartdate")
	private Date paidstartdate;
	
	@Column(name = "paidenddate")
	private Date paidenddate;
	
	@Column(name = "lastchange")
	private Timestamp lastchange;

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(Long phoneno) {
		this.phoneno = phoneno;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getLoginsallowed() {
		return loginsallowed;
	}

	public void setLoginsallowed(int loginsallowed) {
		this.loginsallowed = loginsallowed;
	}

	public String getDevices() {
		return devices;
	}

	public void setDevices(String devices) {
		this.devices = devices;
	}

	public Date getPaidstartdate() {
		return paidstartdate;
	}

	public void setPaidstartdate(Date paidstartdate) {
		this.paidstartdate = paidstartdate;
	}

	public Date getPaidenddate() {
		return paidenddate;
	}

	public void setPaidenddate(Date paidenddate) {
		this.paidenddate = paidenddate;
	}

	public Timestamp getLastchange() {
		return lastchange;
	}

	public void setLastchange(Timestamp lastchange) {
		this.lastchange = lastchange;
	}
	
	
}
