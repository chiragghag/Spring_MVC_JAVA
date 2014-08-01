package com.beingjavaguys.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
		Users Users = userService.authenticate(name);
		String error="";
		if(Users == null)
		{
			error="invalid user name";
			model.put("error", error);
			return new ModelAndView("index", model);
		}
		else if  (!Users.getPassword().equals(paasword)) 			
			{
				error="Wrong Password";
				model.put("error",error);
				return new ModelAndView("index", model);
			}
		//successfull login case
		else{
			HttpSession ses = hsr.getSession();
			ses.setAttribute("user", Users);
			
			return new ModelAndView("redirect:/propertyList.html", model);			
		}
		//map.put("count", count+"");
	//	model.put("Property", userService.getUser(map));
		

	}
	
	@RequestMapping(value = "/GuestLogin" , method = RequestMethod.POST)
	public ModelAndView guestlogin(Locale locale,HttpServletRequest hsr) {
		Map<String, Object> model = new HashMap<String, Object>();
		Map<String, String> map=new HashMap<String, String>();
		Users Users=new Users();
		
		Users.setEmail("guest@guest.com");
		HttpSession ses = hsr.getSession();
		ses.setAttribute("user", Users);
		
		return new ModelAndView("redirect:/propertyList.html", model);	
	}

}
