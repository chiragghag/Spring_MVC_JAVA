package com.beingjavaguys.dao;

import java.util.List;
import java.util.Map;

import com.beingjavaguys.domain.Property;


public interface HomeDao {
public void saveUser ( Property user );
public List<Property> getProperty(Map<String, String> map);
public Integer getTotal_results();
}
