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
		model.put("City",userService.getcitylist());
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
		
		
	
		for(int i=0; i<Property.size();i=i+2)
		{
			//System.out.println("list values ------------"+p.getCost());
		
		response=response + 	
		
							"<tr>"+
                               " <td align=\"center\"><input type=\"checkbox\"></td>"+
                              "  <td>"+ "code" +"</td>"+
                              "  <td>"+ Property.get(i).getCost() +"</td>"+
                              "  <td><button class=\"bt2\">"+ Property.get(i).getRescom()+"</button></td>"+
                              "  <td>"+ Property.get(i).getAddress()+"</td>"+
                              "  <td>contact</td>"+
                            "</tr>";
		if((i+1)<Property.size()){
			
			response=response +
					"<tr  class=\"split\">"+
                    " <td align=\"center\"><input type=\"checkbox\"></td>"+
                   "  <td>"+ "code" +"</td>"+
                   "  <td>"+ Property.get(i+1).getCost() +"</td>"+
                   "  <td><button class=\"bt2\">"+ Property.get(i+1).getRescom()+"</button></td>"+
                   "  <td>"+ Property.get(i+1).getAddress()+"</td>"+
                   "  <td>contact</td>"+
                 "</tr>";
		}
		
		}
		//totalresult=userService.getTotal_results();
		// request.setAttribute("listGood",listg);
		return response;
		}
		else
			return response;
	}
	
	@RequestMapping(value = "/citychange" , method = RequestMethod.GET)
	   @ResponseBody
	public String gettownlist(String value) {
		System.out.println("inside city ajax"+value);
		
		List<String> Town= userService.getTown(value);
		String townlist="<option>SELECT</option>";
		
		for(String town:Town)
		{
			townlist=townlist+"<option>"+town+"</option>";
		}
		return townlist;
	}
	
	
	@RequestMapping(value = "/townchange" , method = RequestMethod.GET)
	   @ResponseBody
	public String getlocalitylist(String value) {
		System.out.println("inside town ajax"+value);
		
		List<String> Town= userService.getLocality(value);
		String localitylist="<option>SELECT</option>";
		
		for(String locality:Town)
		{
			localitylist=localitylist+"<option>"+locality+"</option>";
		}
		return localitylist;
	}
	
}
