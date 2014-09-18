package com.beingjavaguys.service;

import java.util.List;
import java.util.Map;

import com.beingjavaguys.domain.Property;
import com.beingjavaguys.domain.Users;


public interface UserService {
	public void addUser(Property Property);

	public List<Property> getUser(Map<String, String> map);

	public Integer getTotal_results();

	public Users authenticate(String name);

	public com.beingjavaguys.domain.UserDetails getuserdetails(int uid);

	public List<String> getcitylist();
}
