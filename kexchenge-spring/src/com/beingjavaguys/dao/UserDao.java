package com.beingjavaguys.dao;

import java.util.List;
import java.util.Map;

import com.beingjavaguys.domain.Property;
import com.beingjavaguys.domain.Users;


public interface UserDao {
public void saveUser ( Property user );
public List<Property> getUser(Map<String, String> map);
public Users authenticate(String name);

}
