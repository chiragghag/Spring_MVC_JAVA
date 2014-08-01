package com.beingjavaguys.dao;

import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.beingjavaguys.domain.Property;



@Repository("HomeDao")
public class HomeDaoImpl implements HomeDao {
	
	private Integer total_results;
	
	private void setTotal_results(Integer totalResult) {
		// TODO Auto-generated method stub
		this.total_results = totalResult;
		
	}

	public Integer getTotal_results() {
		return total_results;
	}


	@Autowired
	private SessionFactory sessionfactory;

	@Override
	public void saveUser(Property Property) {
		sessionfactory.getCurrentSession().saveOrUpdate(Property);
	}

	@Override
	public List<Property> getProperty(Map<String, String> map) {
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
			setTotal_results(totalResult);
			System.out.println("totalResult----------"+totalResult);
		}
		
		//List<Property> userlist = criteria.list();
		
		return userlist;
	}





}
