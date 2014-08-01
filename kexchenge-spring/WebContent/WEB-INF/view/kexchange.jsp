<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <title>K-Exchange Real estateAfford Or Not</title>
  	<link href="assets/css/style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" media="all" href="assets/css/reset.css" />
    <link rel="stylesheet" type="text/css" media="all" href="assets/css/text.css" />
    <link rel="stylesheet" type="text/css" media="all" href="assets/css/960_1_10_10.css" />
    <script type="text/javascript" src="assets/js/jquery.js" ></script>
    <!--action messages script-->

    <link rel="stylesheet" href="assets/css/templatemo_style.css" />
    <link rel="stylesheet" href="assets/css/validationEngine.jquery.css" />
    <link rel="stylesheet" href="assets/css/messi.css" />
    <script src="assets/js/messi.js"></script>
    <!-- <script src="" type="text/javascript"></script> -->
    <!-- <script src="" type="text/javascript"></script> -->
    <script src="assets/js/jquery.validationEngine.js" type="text/javascript"></script>
    <script src="assets/js/jquery.validationEngine-en.js" type="text/javascript"></script>
    <script src="assets/js/script.js" type="text/javascript"></script>

<script type="text/javascript" src="assets/js/jquery-1.4.4.js"></script>
<script type="text/javascript">


 
 window.onload = codeAddress;
 
 </script>

	<script type="text/javascript">
	
		$(window).scroll(function(){
		
		    
		    if($(window).scrollTop() == $(document).height() - $(window).height()){
		    	processing = true;
		    	$('div#loadmoreajaxloader').show();
				$.ajax({
					url: 'propertyListajax.html',
					success: function(html){
						if(html){
							$("#postswrapper").append(html);
							$('div#loadmoreajaxloader').hide();
							processing = false;
						}else{
							$('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
							processing = false;
						}
					}
				});
		    }
		});
	</script>

    <script type="text/javascript">
        $(document).ready(function(){
            $("#editProfileForm").validationEngine();
            $("#registrationForm").validationEngine();
            $("#resetForm").validationEngine();

            //Message error,success,warning
            //anim warning

        });



    </script>

    <style>

    </style>

<head>

<body>


<div id="blanket" style="display:none;"></div>
<div id="popUpDiv" style="display:none;">
    <img src="assets/images/close.png" class="close_box" id="close_signin" />
    <div class="add_p_p">
        <div class="sp_header">
            <h3>SIGN IN</h3>
        </div>
        <div class="sp_container">

            <div class="sp_icon">
                <img src="assets/images/login_icon.png" />
            </div>
            <div id="loading" style="display:none;"></div>
            <form action="Login.html" method="post" id="loginForm" >
                <div class="error-show1">&nbsp;</div>
                <div class="sp_text">
                    <input type="text" id="login_username" name="login_username" title="Enter email/mobile no" placeholder="E-mail / Mobile No" class="sp_text1" />
                </div>
                <div class="sp_text">
                    <input type="password" id="login_password" name="login_password" title="Enter password"  placeholder="Password" class="sp_text1" />
                </div>
                <div class="sp_text">
                    <input type="checkbox" class="sp_text2" /> Remember Password
                </div>
                <div class="sp_text">
                    <label id="register_from_login"><a href="#">Register Now</a></label> | <label id="forgot_from_login"><a href="#">Forget your password?</a></label>
                </div>
                <div class="sp_text">
                    <input type="submit" id="submit-link" value="LOGIN" class="sp_button" />
                </div>
                 
            </form>

        </div>
    </div>

</div>

<!--signup -->
<!--forgot -->

<div id="blanket3" style="display:none;"></div>
<div id="popUpDiv3" style="display:none;">
    <img src="assets/images/close.png" class="close_box" id="close_forgot"/>
    <div class="add_p_p">
        <div class="sp_header">
            <h3>Reset Password</h3>
        </div>
        <div class="sp_container">

            <form action="/index.php?action=forgot" method="post" id="forgotForm">
                <div class="error-show1">&nbsp;</div>
                <div class="sp_text">
                    <input type="text" id="email_forgot" title="Enter email id" name="email_forgot" placeholder="E-mail Id" class="sp_text1" />
                </div>
                <div class="sp_text">
                    <input type="hidden" value="d3dea5" id="captcha2" />
                    <input type="text" id="forgot_captcha" title="Enter captcha" name="forgot_captcha" placeholder="Recaptcha Code" class="sp_text1" />
                </div>
                <div class="sp_text">
                    <span class="captcha_font"><font color='fusia' face='Algerian' size='+3'>d3dea5</font></span>
                </div>

                <div class="sp_text">
                    <input type="submit" value="RESET PASSWORD" name="submit_reset" class="sp_button" />
                </div>

            </form>

        </div>
    </div>

</div>

<!--signup -->
<div id="blanket1" style="display:none;"></div>
<div id="popUpDiv1" style="display:none;">
    <img src="assets/images/close.png" class="close_box close-btn01" />
    <div class="add_p_p">
        <div class="sp_header">
            <h3>CREATE YOUR ACCOUNT</h3>
        </div>
        <div class="sp_container">
            <p class="error-show">&nbsp;</p>
            <div id="loading1" style="display:none;"></div>

            <form action="/index.php?action=signup" name="register_form" method="post" id="registrationForm">
                <div class="sp_text">
                  <span>
                    <input type="radio" name="agent_type" checked="checked" value="bu" id="broker"/><label>Broker</label>
                    <input type="radio" name="agent_type" class="sp_radio" value="b"  id="builder"/><label>Builder</label>
                    <input type="radio" name="agent_type" class="sp_radio" value="o"  id="owner"/><label>Owner</label>
                  </span>
                </div>
                <div class="sp_text" id="agent_broker_name">
                    <input type="text" title="Enter business name" maxlength="20" class="sp_text1 validate[required,custom[onlyLetterSp],maxSize[20]]"  placeholder="Business Name" name="business_name" id="business_name" />

                </div>
                <div class="sp_text" id="agent_owner_name">
                    <input type="text" title="Enter Agent name" maxlength="20" class="sp_text1 validate[required,custom[onlyLetterSp],maxSize[20]]" placeholder="Agent Name" name="agent_name" id="agent_name"  />
                </div>
                <div class="sp_text">
                    <select class="sp_sl validate[required]" id="location_city" title="Select city" name="city">
                        <option value="no">City</option>
                        <option  value="22">test2</option> <option  value="21">Amer</option> <option  value="20">Amer</option> <option  value="19">Jaipur</option> <option  value="18">Mumbai</option> <option  value="17">dfgdfgfdgd</option> <option  value="16">test</option> <option  value="15">sdf</option> <option  value="14">qeqwe</option> <option  value="13">Jaipur</option> <option  value="12">deb</option> <option  value="11">deb</option> <option  value="10">sdfsdfsd</option> <option  value="9">sdfsdfsd</option>                       <option value="o">Other</option>
                    </select>
                </div>
                <div class="sp_text" id="user_city"  style="display:none;">
                    <input type="text" title="Enter city" maxlength="15" placeholder="City" name="fcity" id="city" class="sp_text1 validate[required,custom[onlyLetterSp],maxSize[15]]"/>
                </div>
                <div class="sp_text">
                    <select class="sp_sl validate[required]" id="location_town" title="Select town" name="town">
                        <option value="no">Town</option>
                        <option value="2">Mumbai</option>
                        <option value="o">Other</option>
                    </select>
                </div>
                <div class="sp_text" id="user_town"  style="display:none;">
                    <input type="text" title="Enter town" maxlength="15" class="sp_text1 validate[required,custom[onlyLetterSp],maxSize[15]]" placeholder="Town" name="ftown" id="town" />
                </div>
                <div class="sp_text" id="mobile_box">
                    <img class="load" src="assets/images/ajax-loader.gif" style="display:none;"/>
                    <input type="text" title="Enter mobile number" class="sp_text1 validate[required,custom[onlyNumberSp],minSize[10],maxSize[10]]" maxlength="10"  placeholder="Mobile Number" name="mobile_num" id="mobile_num"  />
                    <img class="check" src="assets/images/1398260668_tick.png" style="display:none;"/>
                </div>
                <div class="sp_text" id="email_box">
                    <img class="load" src="assets/images/ajax-loader.gif" style="display:none;"/>
                    <input type="text" title="Enter email address" placeholder="E-mail Address" id="email_id" name="email_id" class="sp_text1 validate[required,custom[email]]"   />
                    <img class="check" src="assets/images/1398260668_tick.png" style="display:none;"/>
                </div>
                <div class="sp_text" id="email_ajax_response">

                </div>
                <div class="sp_text" id="mobile_ajax_response">

                </div>
                <div class="sp_text">
                    <input type="password" title="Enter password" placeholder="Password"  id="password" class="sp_text1 validate[required]" name="password" />
                </div>
                <div class="sp_text">
                    <label>By clicking Sign up ,you agree to our <br/><a href="/index.php?action=terms">Terms  Conditions</a></label>
                </div>
                <div class="sp_text">
                    <input type="submit" value="Sign up" title="Submit registration form" class="sp_button" name="submit_signup" id="signup" />
                </div>

            </form>

        </div>
    </div>

</div>


<div class="grid_1">
    <div class="header">
        <div class="container_1">
            <div class="header_logo">
                <a href="/index.php"><img src="assets/images/logo.png" /></a>
            </div>
            <div class="header_mid">
                <select class="select1">
                    <option>Select Location</option>
                    <option  value="22">test2</option> <option  value="21">Amer</option> <option  value="20">Amer</option> <option  value="19">Jaipur</option> <option  value="18">Mumbai</option> <option  value="17">dfgdfgfdgd</option> <option  value="16">test</option> <option  value="15">sdf</option> <option  value="14">qeqwe</option> <option  value="13">Jaipur</option> <option  value="12">deb</option> <option  value="11">deb</option> <option  value="10">sdfsdfsd</option> <option  value="9">sdfsdfsd</option>           </select>
                <input type="text" class="select2" placeholder="Search For City,Town or Agent" ></input>
                <input type="submit" value="GO" class="sub" ></input>
            </div>
            <div class="header_right">
                <div class="top">
			<c:if test="${!empty user}">
			<ul>
			<li>Welcome, ${user.email}</li></ul>
			<c:if test = "${user.email == 'guest@guest.com'}">
                    <ul>
                        <li><a href="#"  id="register">Register</a></li>
                        <li>|</li>
                        <li><a href="#" id="signin">Sign in</a></li>
                    </ul>
                    </c:if>
                    </c:if>
                </div>
                <div class="bottom">
                    <input type="button" id="signin2" value="ADD PROPERTY"></input>
                </div>
            </div>
            <div class="header_bottom">
                <div class="logo">K-EXCAHNGE</div>
                <div class="right"></div>

            </div>
        </div>
    </div><!--header close -->

</div>
<!-- end .grid_1 -->
<div class="clear">&nbsp;</div>
<div class="container_1">
<!--end banner-->

<div class="grid_1 suffix_0">
<div class="mid">
<!-- mid left close -->
<div class="mid_left">
    <div class="m_l_top">
        <ul>
            <li ><a href="/index.php?action=myhome"><img src="assets/images/1.png"></img>Dashboard</a></li>
            <li ><a href="/index.php?action=properties"><img src="assets/images/2.png"></img>Properties</a></li>
            <li><a href="#"><img src="assets/images/3.png"></img>Notification</a></li>
            <li><a href="#"><img src="assets/images/4.png"></img>Agent Directory</a></li>
        </ul>
    </div>
    <div class="m_l_bottom">
        <h1>Select City / Town</h1>
        <label class="lbl">Residential / Commercial</label>
        <div class="m_l_b_row">
            <label>Type</label>
                    <span>
                        <select>
                            <option>Sale</option>
                        </select>
                    </span>
        </div>
        <div class="m_l_b_row">
            <div class="m_l_scale">
                <label class="m1">Min</label>
                <label class="m2">Max</label>
            </div>
            <div class="m_l_scale">
                <img src="assets/images/scale.png" width="100%"></img>
            </div>
            <div class="m_l_scale">
                <label class="m1"><img src="assets/images/mini.png"></img></label>
                <label class="m2"><img src="assets/images/max.png"></img></label>
            </div>

        </div>
        <div class="m_l_b_row">
            <label>Locality</label>
                    <span>
                        <select>
                            <option>Mumbai</option>
                        </select>
                    </span>
        </div>
        <div class="m_l_b_row">
            <div class="m_l_b">
                &nbsp;&nbsp;Broker / Owner / Builder <br/>
                100% Direct / side by side
            </div>
        </div>
    </div>
    <div class="ml_agent">
        <div class="title">
            <img src="assets/images/folder_icon.png"></img> Agent Directory
        </div>
        <div class="directory">
            <table width="100%">
                <tr>
                    <td>Mumbai</td>
                    <td>(300)</td>
                </tr>
                <tr>
                    <td>Thane</td>
                    <td>(200)</td>
                </tr>
                <tr>
                    <td>Nasik</td>
                    <td>(100)</td>
                </tr>
                <tr>
                    <td>Pune</td>
                    <td>(100)</td>
                </tr>
                <tr>
                    <td>Mumbai</td>
                    <td>(300)</td>
                </tr>
                <tr>
                    <td>Thane</td>
                    <td>(200)</td>
                </tr>
                <tr>
                    <td>Nasik</td>
                    <td>(100)</td>
                </tr>
                <tr>
                    <td>Pune</td>
                    <td>(100)</td>
                </tr>
                <tr>
                    <td>Mumbai</td>
                    <td>(300)</td>
                </tr>
                <tr>
                    <td>Thane</td>
                    <td>(200)</td>
                </tr>
                <tr>
                    <td>Nasik</td>
                    <td>(100)</td>
                </tr>
                <tr>
                    <td>Pune</td>
                    <td>(100)</td>
                </tr>
            </table>
        </div>
    </div>
</div>        <!-- mid left close -->
<div class="mid_right">
    <div class="mid_row">
       
       
       <div class="mid_row_notes">
           <div class="title">
                What's New
            </div>
            <div class="directory">
                <div class="li"><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </span><br/><a href="#">Read more..</a></div>
                </div>
                </div>
   
    </div><!-- mid row close -->
    <div class="mid_row">
    

<div class="mid_row_notes">
<div class="title">
<h1>Property List</h1>
</div>
 <div class="directory">
<c:if test="${!empty Property}">
	<div class="inbar">
	<div id="postswrapper">
	<ul>
	
	<c:forEach items="${Property}" var="Property">
	
	<li>
	<p> <font color="blue"><b>RS-<c:out value="${Property.cost}"/></b></font><br>
	<c:out value="${Property.type}"/> | <c:out value="${Property.locality}"/> <c:out value="${Property.area}"/> | <c:out value="${Property.floor}"/> | <c:out value="${Property.town}"/></p>
	</li>

	
	</c:forEach>
		
	</ul>
	</div>
	<div id="loadmoreajaxloader" style="display:none;"><center><img src="assets/images/ajax-listloader.gif" /></center></div>
	
	
	<div style="clear:both"></div>
	</div>
	
</c:if>
</div>
</div>


        </div><!-- mid row clase -->
        <a href="register.html" >Click Here to add new Property</a>
    
</div><!-- midright close-->
</div><!-- mid part close -->
</div>
<!-- end .grid_1.suffix_0 -->
<div class="clear">&nbsp;</div></div>
<div class="clear">&nbsp;</div>
<div class="grid_1">
    <div class="footer">
        &copy; Copyright 2014 K-Exchange All Rights Reserved.
    </div>
</div>
<!-- end .grid_1 -->
<div class="clear">&nbsp;</div>

<!-- end .container_1 -->


</body>

</html>