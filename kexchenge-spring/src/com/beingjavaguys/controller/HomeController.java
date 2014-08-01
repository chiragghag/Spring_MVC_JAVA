package com.beingjavaguys.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.omg.CORBA.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.beingjavaguys.domain.Property;
import com.beingjavaguys.service.UserService;
import com.sun.mail.iap.Response;

@Controller
public class HomeController {

	@Autowired
	private UserService userService;

	@RequestMapping("/register")
	public ModelAndView getRegisterForm(@ModelAttribute("Property") Property Property,
			BindingResult result) {
		ArrayList<String> gender = new ArrayList<String>();
		gender.add("Male");
		gender.add("Female");
		ArrayList<String> city = new ArrayList<String>();
		city.add("Delhi");
		city.add("Kolkata");
		city.add("Chennai");
		city.add("Bangalore");
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("gender", gender);
		model.put("city", city);
		System.out.println("Register Form");
		return new ModelAndView("Register", "model", model);
	}

	@RequestMapping("/saveUser")
	public ModelAndView saveUserData(@ModelAttribute("Property") Property Property,
			BindingResult result) {
		userService.addUser(Property);
		System.out.println("Save User Data");
		return new ModelAndView("redirect:/userList.html");
	}
	


	Integer count=1;
	Integer totalresult=1;
	
	@RequestMapping("/propertyList")
	public ModelAndView getUserList() {
		Map<String, Object> model = new HashMap<String, Object>();
		Map<String, String> map=new HashMap<String, String>();
		map.put("count", count+"");
		model.put("Property", userService.getUser(map));
		
		totalresult=userService.getTotal_results();
		
		return new ModelAndView("kexchange", model);

	}
	
	  
	
	@RequestMapping(value = "/propertyListajax" , method = RequestMethod.GET)
	   @ResponseBody
	public String getUserListajax() {
		Map<String, Object> model = new HashMap<String, Object>();
		Map<String, String> map=new HashMap<String, String>();
		
		String response="";
		
		count =count+1;
		System.out.println("totalresult----------"+totalresult+"count---------"+count);
		if ((count-1)*20<=totalresult)
		{
		map.put("count", count+"");
		//model.put("Property", userService.getUser(map));
		List <Property> Property=userService.getUser(map);
		
		
		System.out.println("inside ajax call");
		
		
		
		for (Property p: Property)
		{
			//System.out.println("list values ------------"+p.getCost());
		
		response=response + "<ul> 	<li>   <p> <font color=\"blue\"><b>RS-"+p.getCost()+"</b></font><br>	"+p.getType()+" | "+p.getLocality()+" | "+p.getArea()+" | "+p.getFloor()+" | "+p.getTown()+"</p>  </li>	</ul>";
		}
		//totalresult=userService.getTotal_results();
		// request.setAttribute("listGood",listg);
		return response;
		}
		else
			return response;
	}
}
