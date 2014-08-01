package com.beingjavaguys.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.beingjavaguys.domain.Users;
import com.beingjavaguys.service.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/Login" , method = RequestMethod.POST)
	public ModelAndView login(Locale locale,HttpServletRequest hsr) {
		Map<String, Object> model = new HashMap<String, Object>();
		Map<String, String> map=new HashMap<String, String>();
		String name = hsr.getParameter("login_username");
		
		
		String paasword = hsr.getParameter("login_password");
		System.out.println("controler value---------"+name+"-----------"+paasword);
		Users ur = userService.authenticate(name);
		
		if(ur == null)
		{
			model.put("error", "invalid user name");
			return new ModelAndView("index", model);
		}
		else if  (!ur.getPassword().equals(paasword)) 			
			{
				model.put("error", "wrong password");
				return new ModelAndView("index", model);
			}
		else{
			return new ModelAndView("redirect:/propertyList.html", model);
			
		}
		//map.put("count", count+"");
	//	model.put("Property", userService.getUser(map));
		

	}

}
