package com.beingjavaguys.dao;

import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.beingjavaguys.domain.Property;
import com.beingjavaguys.domain.UserDetails;
import com.beingjavaguys.domain.Users;




@Repository("userDao")
public class UserDaoImpl implements UserDao {
	
	


	@Autowired
	private SessionFactory sessionfactory;

	@Override
	public void saveUser(Property Property) {
		sessionfactory.getCurrentSession().saveOrUpdate(Property);
	}

	@Override
	public List<Property> getUser(Map<String, String> map) {
		@SuppressWarnings("unchecked")
		
		Criteria criteria = sessionfactory.getCurrentSession()
				.createCriteria(Property.class);
		
		Integer count=Integer.parseInt(map.get("count"));
		criteria.setFirstResult((count-1)*20);
		criteria.setMaxResults(20);
		List<Property> userlist = criteria.list();
		
		if ((count-1)==0)
		{
			Criteria cr=criteria.setProjection(Projections.rowCount());
			//Integer totalResult=Integer.parseInt(Long.toString((Long) cr.uniqueResult()));
			Integer totalResult= (Integer) cr.uniqueResult();
			//setTotal_results(totalResult);
			System.out.println("totalResult----------"+totalResult);
		}
		
		//List<Property> userlist = criteria.list();
		
		return userlist;
	}

	@Override
	public Users authenticate(String name) {
		// TODO Auto-generated method stub
		
		Criteria criteria = sessionfactory.getCurrentSession()
				.createCriteria(Users.class);
		
		criteria.add(Restrictions.eq("email", name));
		
		List<Users> list=criteria.list();
		
		if(list.size() !=0)
		{
			return list.get(0);
		}
		
		else
		return null;
	}

	@Override
	public UserDetails getuserdetails(int uid) {
		// TODO Auto-generated method stub
		
		Criteria criteria = sessionfactory.getCurrentSession()
				.createCriteria(UserDetails.class);
		
		criteria.add(Restrictions.eq("uid", uid));
		List<UserDetails> list=criteria.list();
		
		if(list.size() !=0)
		{
			return list.get(0);
		}
		
		else
		return null;
	}





}
