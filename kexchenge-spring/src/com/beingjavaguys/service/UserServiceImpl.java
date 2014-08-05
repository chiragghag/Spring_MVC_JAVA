package com.beingjavaguys.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.beingjavaguys.dao.UserDao;
import com.beingjavaguys.dao.HomeDao;
import com.beingjavaguys.domain.Property;
import com.beingjavaguys.domain.UserDetails;
import com.beingjavaguys.domain.Users;


@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class UserServiceImpl implements UserService {
	
	private Integer total_results;

	public Integer getTotal_results() {
		return total_results;
	}

	public void setTotal_results(Integer total_results) {
		this.total_results = total_results;
	}

	@Autowired
	UserDao userDao;
	
	@Autowired
	HomeDao HomeDao;
	

	@Override
	public void addUser(Property Property) {
		//userDao.saveUser(Property);
	}

	@Override
	public List<Property> getUser(Map<String, String> map) {
		List<Property> list = HomeDao.getProperty(map);
		System.out.println("service layer----"+ HomeDao.getTotal_results());
		setTotal_results(HomeDao.getTotal_results());
		
		
		return list ;
		
	}

	@Override
	public Users authenticate(String name) {
		// TODO Auto-generated method stub
		Users ur = userDao.authenticate(name);
		return ur;
	}

	@Override
	public UserDetails getuserdetails(int uid) {
		// TODO Auto-generated method stub
		return userDao.getuserdetails(uid);
	}

}
