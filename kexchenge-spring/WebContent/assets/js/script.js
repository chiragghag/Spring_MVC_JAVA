    
    $(document).ready(function(){  

         $(".numberOnly").keydown(function(event) {
                // Allow special chars + arrows 
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 
                    || event.keyCode == 27 || event.keyCode == 13 
                    || (event.keyCode == 65 && event.ctrlKey === true) 
                    || (event.keyCode >= 35 && event.keyCode <= 39)){
                        return;
                      }else {
                          if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                              event.preventDefault(); 
                          }   
                      }
          });
        //extra valus in add property
        $('#right_container').fadeIn(500);

        addHiddenSubmitButtonsSoICanHitEnter();

            $("#property_unique_ids_box tr td").mouseenter(function(){

            });
        


          
              $.fn.valPropertyList = function(){
                  return $.map( this, function (elem) {
                        return elem.value || "";
                  }).join( "," );
            };        //overlay for location

            //tooltip for message of form
             // select all desired input fields and attach tooltips to them
                $("#registrationForm :input[type='text']").focus(function(){
                  var val = $(this).attr('title');
                  $(this).after('<label class="tooltip">'+val+'</label>');
          
                }).focusout(function(){
                  $("#registrationForm label.tooltip").hide();
                });
                 $("#registrationForm :input[type='password']").focus(function(){
                  var val = $(this).attr('title');
                  $(this).after('<label class="tooltip">'+val+'</label>');
          
                }).focusout(function(){
                  $("#registrationForm label.tooltip").hide();
                });
                 $("#registrationForm select").focus(function(){
                  var val = $(this).attr('title');
                  $(this).after('<label class="tooltip">'+val+'</label>');
          
                }).focusout(function(){
                  $("#registrationForm label.tooltip").hide();
                });

                $("#loginForm :input[type='text']").focus(function(){
                  var val = $(this).attr('title');
                  $(this).after('<label class="tooltip">'+val+'</label>');
          
                }).focusout(function(){
                  $("#loginForm label").hide();
                });
                 $("#loginForm :input[type='password']").focus(function(){
                  var val = $(this).attr('title');
                  $(this).after('<label class="tooltip">'+val+'</label>');
          
                }).focusout(function(){
                  $("#loginForm label.tooltip").hide();
                });



            $("#forgotForm :input[type='text']").focus(function(){
                  var val = $(this).attr('title');
                  $(this).after('<label class="tooltip">'+val+'</label>');
          
                }).focusout(function(){
                  $("#forgotForm label.tooltip").hide();
                });
                 $("#forgotForm :input[type='password']").focus(function(){
                  var val = $(this).attr('title');
                  $(this).after('<label class="tooltip">'+val+'</label>');
          
                }).focusout(function(){
                  $("#forgotForm label.tooltip").hide();
                });
            //delete properties
            $("#delete_properties").click(function(){
             
                  var $list = $("#property_unique_ids_box input[type='checkbox'][name='property_unique_ids']:checked").valPropertyList(); 
                  var $ref=$(this).attr('title');
                  //alert($ref);
                  if($list!=''){
                  $.post("index.php?action=delete_properties",{data:$list},function(data,status){
                    if($ref=='rent_properties_box')
                    {
                       $.get("index.php?action=rent_type_properties_by_ajax",function(data,status){
                          $("#property_unique_ids_box").html(data);
                        });
                     }else{
                         $.get("index.php?action=sell_type_properties_by_ajax",function(data,status){
                            $("#property_unique_ids_box").html(data);
                          });
                     }
                     new Messi('Properties successfully deleted', {title: 'successfull', titleClass: 'success', buttons: [{id: 0, label: 'Close', val: 'X'}]});              
                    //window.location.href="index.php?action=properties";

                  });
                }else{
                   new Messi('Select at least one properties', {title: 'Alert', titleClass: 'enim error', buttons: [{id: 0, label: 'Close', val: 'X'}]});
                }

            });
            //end delete properties
             //delete properties
            $("#refresh_properties").click(function(){            
                
                 var $list = $("#property_unique_ids_box input[type='checkbox'][name='property_unique_ids']:checked").valPropertyList(); 
                  var $ref=$(this).attr('title');
                  //alert($ref);
                 
                  

                  if($list!=''){
                  $.post("index.php?action=refresh_properties",{data:$list},function(data,status){
                    if($ref=='rent_properties_box')
                    {
                       $.get("index.php?action=rent_type_properties_by_ajax",function(data,status){
                          $("#property_unique_ids_box").html(data);
                        });
                     }else{
                         $.get("index.php?action=sell_type_properties_by_ajax",function(data,status){
                            $("#property_unique_ids_box").html(data);
                          });
                     }
                     new Messi('Properties successfully refreshed', {title: 'successfull', titleClass: 'success', buttons: [{id: 0, label: 'Close', val: 'X'}]});              
                    //window.location.href="index.php?action=properties";

                  });
                }else{
                   new Messi('Select at least one properties', {title: 'Alert', titleClass: 'enim error', buttons: [{id: 0, label: 'Close', val: 'X'}]});
                }                
                

            });
            //end delete properties
            //sell properties
            $("#sell_properties_box").click(function(){                
                  //alert($list);
                  $("#rent_properties_box").removeClass('active_rentsell');
                  $(this).addClass('active_rentsell');
                   $("#delete_properties").attr('title','sell_properties_box');
                     $("#refresh_properties").attr('title','sell_properties_box');
                  $.get("index.php?action=sell_type_properties_by_ajax",function(data,status){
                    $("#property_unique_ids_box").html(data);
                  });

            });
            //end sell properties
             //sell properties
            $("#rent_properties_box").click(function(){                
                  //alert($list);
                  $("#sell_properties_box").removeClass('active_rentsell');
                  $(this).addClass('active_rentsell');
                   $("#delete_properties").attr('title','rent_properties_box');
                     $("#refresh_properties").attr('title','rent_properties_box');
                  $.get("index.php?action=rent_type_properties_by_ajax",function(data,status){
                    $("#property_unique_ids_box").html(data);
                  });

            });
            //end sell properties
         
            // hide popup when user clicks on close button
            $('.close-btn01').click(function(){
               document.getElementById("registrationForm").reset();
                $('#blanket1').css("display","none");
                $('.error-show').html('');
                $('#blanket1').removeAttr('height');
                 $('#registrationForm img').remove();
                $('#popUpDiv1').fadeOut(); // hide the overlay
            });

              $('#signin').click(function(){
                $('#blanket').css("display","block");
                var height = $('body').height();
                $('#blanket').css("height",height);
                $('#popUpDiv').fadeIn(); // hide the overlay
            });

               $('#close_signin').click(function(){
                    document.getElementById("loginForm").reset();
                  $('#blanket').css("display","none");
                  $('#blanket').removeAttr('height');
                  $('.error-show').html('');
                  $('#popUpDiv').fadeOut(); // hide the overlay
              });
                $('.close-btn04').click(function(){
                  $('#blanket4').css("display","none");
                  $('#blanket4').removeAttr('height');
                  $('.error-show').html('');
                  $('#popUpDiv4').fadeOut(); // hide the overlay
              });
               $('#sig').click(function(){
                $('#blanketadd').css("display","block");
                var height = $('body').height();
                $('#blanketadd').css("height",height);
                $('#popUpDivadd').fadeIn(); // hide the overlay
            });
                $('#edit_profile').click(function(){
                $('#blanket4').css("display","block");
                var height = $('body').height();
                $('#blanket4').css("height",height);
                $('#popUpDiv4').fadeIn(); // hide the overlay
            });
               $('#close_button_property').click(function(){
 $('#blanket2').removeAttr('height');
                   $('.error-show').html('');
                    $("#add_property_box").html('');                  
$('#blanket2').css("display","none");
                 
                  $('#popUpDiv2').fadeOut(); // hide the overlay
              });

             
                $('#register').click(function(){
                  $('#blanket1').css("display","block");
                  var height = $('body').height();
                  $('#blanket1').css("height",height);
                  $('#popUpDiv1').fadeIn(); // hide the overlay
            });
                 $('#register_from_login').click(function(){
                    $('#blanket').css("display","none");
                  $('#blanket').removeAttr('height');
                  $('#popUpDiv').fadeOut(); // hide the overlay
                  $('#blanket1').css("display","block");
                  var height = $('body').height();
                  $('#blanket1').css("height",height);
                  $('#popUpDiv1').fadeIn(); // hide the overlay
            });
                  $('#forgot_from_login').click(function(){
                    $('#blanket').css("display","none");
                  $('#blanket').removeAttr('height');
                  $('#popUpDiv').fadeOut(); // hide the overlay
                  $('#blanket3').css("display","block");
                  var height = $('body').height();
                  $('#blanket3').css("height",height);
                  $('#popUpDiv3').fadeIn(); // hide the overlay
            });
              $('#close_forgot').click(function(){
                $('#blanket3').css("display","none");
                  $('#blanket3').removeAttr('height');
                  $('.error-show').html('');
                  $('#popUpDiv3').fadeOut(); // hide the overlay
            });
              $('.close-btn02').click(function(){
                
                  $('.overlay-bg02').fadeOut(); // hide the overlay
            });
             
            // hides the popup if user clicks anywhere outside the container
             $(".numberOnly").keydown(function(event) {
                // Allow special chars + arrows 
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 
                    || event.keyCode == 27 || event.keyCode == 13 
                    || (event.keyCode == 65 && event.ctrlKey === true) 
                    || (event.keyCode >= 35 && event.keyCode <= 39)){
                        return;
                }else {
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                          event.preventDefault(); 
                      }   
                  }
          });
           /* $('.overlay-bg').click(function(){
                $('.overlay-bg').hide();
            })*/
         
            // prevents the overlay from closing if user clicks inside the popup overlay
            $('.overlay-content').click(function(){
                return false;
            });
          //end overlay of location
          //local area by city using ajax
           $("#cityid").change(function(){
              $city=$(this).val();
              $.post("index.php?action=areas",{city:$city},function(data,status){
                $("#localid").html(data);
              });

           });
          //local area by city using ajax
        //local area other
           $("#location_city").change(function(){
              $area=$(this).val();
              if($area=='o')
              {
                $("#user_city").fadeIn();
              }else{
                 $("#user_city").fadeOut(); 
              }             

           });
           $("#location_town").change(function(){
              $area=$(this).val();
              if($area=='o')
              {
                $("#user_town").fadeIn();
              }else{
                 $("#user_town").fadeOut(); 
              }              

           });

            $("#location_location").change(function(){
              $area=$(this).val();
              if($area=='o')
              {
                $("#location_other").fadeIn();
              }else{
                 $("#location_other").fadeOut(); 
              }              

           });
            

          //local area other
         
        
          //check email address form confirmation

          $("#email_id").change(function(){
            var $msgBox = $('.error-show');
           $email=$(this).val();
           if(($email!='')&&(!validateEmail($email))){   
             $("#email_box img.load").show();  
             $("#email_box img.load").css('margin-left','-20px');            
           $.ajax({
                  type:'POST',
                  data:"email="+$email,
                  url:"index.php?action=email_exist",
                  dataType:"json",
                  success:function(msg){     
                      if(msg.status == 'success'){
                          $msgBox.html("<font color='red'>Email Id Already Exist!</font>"); 
                           $("#email_box img").hide();
                          $("#email_ajax_response").html("<input type='hidden' id='email_idc' value='succ'/>");                            
                      }else{
                          $("#email_box img").hide();
                         $msgBox.html("");
                         $("#email_box img.check").show();  
                          $("#email_box img.check").css('margin-right','-20px');                  
                        $("#email_ajax_response").html("<input type='hidden' id='email_idc' value='unsucc'/>");  
                      }
                  }
              });
            }            
          });
           //check email id by ajax
           //check email address form confirmation

      
     //check email id by ajax
            $("#mobile_num").change(function(){
            var $msgBox = $('.error-show');
           $num=$(this).val();
           if($num.length==10){
             $("#mobile_box img.load").show();  
             $("#mobile_box img.load").css('margin-left','-20px');    
           $.ajax({
                  type:'POST',
                  data:"number="+$num,
                  url:"index.php?action=mobile_exist",
                  dataType:"json",
                  success:function(msg){     
                      if(msg.status == 'success'){
                          $msgBox.html("<font color='red'>Mobile Number Already Exist!</font>"); 
                          $("#mobile_box img").hide();

                            $("#mobile_ajax_response").html("<input type='hidden' id='mob_noc' value='succ'/>");      
                          $("#mobile_num").focus();                     
                      }else{
                       
                           $("#mobile_box img").hide();
                         $msgBox.html("");
                         $("#mobile_box img.check").show();  
                          $("#mobile_box img.check").css('margin-right','-20px');   
                          $("#mobile_ajax_response").html("<input type='hidden' id='mob_noc' value='unsucc'/>");                               
                        return true;
                      }
                  }
              }); 
              }           
          });
           //check email id by ajax
            $(".mobile_num_exists").change(function(){
            var $msgBox = $('.error-show3');
           $num=$(this).val();
            if($num.length==10){
            $("#mobile_box img.load").show();  
             $("#mobile_box img.load").css('margin-left','-20px');    
           $.ajax({
                  type:'POST',
                  data:"number="+$num,
                  url:"index.php?action=mobile_exist",
                  dataType:"json",
                  success:function(msg){     
                      if(msg.status == 'success'){
                          $msgBox.html("<font color='red'>Mobile Number Already Exist!</font>"); 
                          $("#mobile_box img").hide();

                            $("#mobile_ajax_response").html("<input type='hidden' id='mob_noc' value='succ'/>");      
                          $("#mobile_num").focus();                     
                      }else{
                       
                           $("#mobile_box img").hide();
                         $msgBox.html("");
                         $("#mobile_box img.check").show();  
                          $("#mobile_box img.check").css('margin-right','-20px');   
                        $msgBox.html("<font color='green'>Mobile Number Confirm!</font>");   
                          $("#mobile_ajax_response").html("<input type='hidden' id='mob_noc' value='unsucc'/>");                               
                        return true;
                      }
                  }
              });  
              }         
          });
           //check email id by ajax
          
            //select city based town

          $("#location_city").change(function(){
            var $msgBox = $('.error-show');
           $city=$(this).val();
           if($city!='no'){       
                $.post("index.php?action=town_by_ajax",{city:$city},function(data,status){
                      $("#location_town").html(data);

                });
            }else
            {
              $msgBox.html("<font color='red'>Select City </font>");                            
            }             
          });
           

            $("#location_town").change(function(){
            var $msgBox = $('.error-show');
           $town=$(this).val();
           if($town!=0){  $("#location").fadeOut();
           if($town!='no'){  $("#location").fadeOut();     
                $.post("index.php?action=location_by_ajax",{town:$town},function(data,status){
                      $("#location_location").html(data);

                });
            }else
            {
              $msgBox.html("<font color='red'>Select Town </font>");                            
            } 
            }else{
                $("#location").fadeIn();
            }         
          });
           
           //check email id by ajax
           //submit edit profile form using ajax
          $("#edit_form_submitdd").click(function(){
            var $agent_type = $("input[type='radio'][name='agent_type']:checked").val();;//$("#agent_type").val();
            var $business_name = $('#business_name').val();
            var $agent_name =$('#agent_name').val();
            var $mobile_num = $("#mobile_num").val();//alert($mobile_num.length);
            var $email_id = $('#email_id').val();
           // var $password = $("#password").val();
            var $address = $("#address").val();
            var $pincode = $("#pincode").val();
            var $contact2 = $("#contact2").val();
            var $website = $("#website").val();
            var $city = $("#location_city").val();
            var $town = $("#location_town").val();
            var $location = $("#location_location").val();
            var $fcity = 'in';
            var $ftown = 'in';
            var $flocation = 'in';
             if($city==0){
              $fcity='o';
              $city =$('#city').val();
            }
             if($town==0){
              $ftown='o';
              $town =$('#town').val();
            }
             if($location==0){
              $flocation='o';
              $location =$('#location_other').val();
            }
            

            if($agent_type=='o'){
              $business_name = '';
              $agent_name =$('#owner_name').val();
            }
            if($agent_type!='o'){
               $business_name = $('#business_name').val();
               $agent_name =$('#agent_name').val();
            }


            var allData="address="+$address+"&pincode="+$pincode+"&contact2="+$contact2+"&town="+$town+"&website="+$website+"&flocation="+$flocation+"&location="+$location+"&fcity="+$fcity+"&ftown="+$ftown+"&city="+$city+"&town="+$town+"&agent_type="+$agent_type+"&business_name="+$business_name+"&agent_name="+$agent_name+"&mobile_num="+$mobile_num+"&email_id="+$email_id;
           //alert(allData);
         
            var $msgBox = $('.error-show3');
           $msgBox.html('<span class="high">Processing....</span>');
                      //$('.registrationProcess').html('<span class="high">Processing....</span>');
                      $.ajax({
                        type:'POST',
                        data:allData,
                        url:"index.php?action=editprofile&submit=submit",
                        dataType:"json",
                            success:function(msg){
                                if(msg.status == 'success'){                                  
                                    window.location.href="index.php?action=myhome";
                                }else{
                                     $msgBox.html('<font color="#F5871">'+msg.message+'</font>'); 
                                }
                            }
                }); 
            
          }); 
         
          //end submit form

          //signup validation
         /* $("#business_name").keyup(function(){
             var $msgBox = $('.error-show');
               $business_name = $('#business_name').val();
              if($business_name == '')
              {
                $msgBox.html('<font color="#F5871D">Enter business name</font>');  
                $('#business_name').focus();
                return false;
              }else if(!textOnly($business_name)){
                $msgBox.html('<font color="#F5871D">Enter only char  in business name</font>');  
                 $('#business_name').focus();
                 return false;
              }else if($business_name.length>=20){
                $msgBox.html('<font color="#F5871D">Enter business name (Max 20 ch)</font>');  
                 $('#business_name').focus();
                 return false;
              }else{
                $('#business_name').focus();$msgBox.html('');  

                 return true;
              }
          });

          $("#agent_name").keyup(function(){
             var $msgBox = $('.error-show');
               $agent_name = $('#agent_name').val();
              if($business_name == '')
              {
                $msgBox.html('<font color="#F5871D">Enter agent name</font>');  
                $('#agent_name').focus();
                return false;
              }else if(!textOnly($agent_name)){
                $msgBox.html('<font color="#F5871D">Enter only char in agent name</font>');  
                 $('#agent_name').focus();
                 return false;
              }else if($agent_name.length>=20){
                $msgBox.html('<font color="#F5871D">Enter agent name (Max 20 ch)</font>');  
                 $('#agent_name').focus();
                 return false;
              }else{
                $('#agent_name').focus();$msgBox.html('');  

                 return true;
              }
          });
           $("#city").keyup(function(){
             var $msgBox = $('.error-show');
               $city = $('#city').val();
              if($city == '')
              {
                $msgBox.html('<font color="#F5871D">Enter city name</font>');  
                $('#city').focus();
                return false;
              }else if(!textOnly($city)){
                $msgBox.html('<font color="#F5871D">Enter only char in city name</font>');  
                 $('#city').focus();
                 return false;
              }else if($city.length>=20){
                $msgBox.html('<font color="#F5871D">Enter city name (Max 20 ch)</font>');  
                 $('#city').focus();
                 return false;
              }else{
                $('#city').focus();$msgBox.html('');  

                 return true;
              }
          });
            $("#town").keyup(function(){
             var $msgBox = $('.error-show');
               $town = $('#town').val();
              if($town == '')
              {
                $msgBox.html('<font color="#F5871D">Enter town name</font>');  
                $('#town').focus();
                return false;
              }else if(!textOnly($town)){
                $msgBox.html('<font color="#F5871D">Enter only char in town name</font>');  
                 $('#town').focus();
                 return false;
              }else if($town.length>=20){
                $msgBox.html('<font color="#F5871D">Enter town name (Max 20 ch)</font>');  
                 $('#town').focus();
                 return false;
              }else{
                $('#town').focus();$msgBox.html('');  

                 return true;
              }
          });*/
         
          //submit signup form using ajax
          $("#signupff").click(function(){
            var $agent_type = $("input[type='radio'][name='agent_type']:checked").val();;//$("#agent_type").val();
            var $business_name = '';
            var $agent_name ='';
            var $mobile_num = $("#mobile_num").val();//alert($mobile_num.length);
            var $email_id = $('#email_id').val();
            var $password = $("#password").val();
            var $city = $("#location_city").val();
            var $town = $("#location_town").val();
              var $emailc = $("#email_idc").val();
                var $mobc = $("#mob_noc").val();
            var $fcity = 'in';
            var $ftown = 'in';
             if($city=='0'){
              $fcity='o';
              $city =$('#city').val();
            }
             if($town=='o'){
              $ftown='o';
              $town =$('#town').val();
            }


            if($agent_type=='o'){
              $business_name = '';
              $agent_name =$('#owner_name').val();
            }
            if($agent_type!='o'){
               $business_name = $('#business_name').val();
               $agent_name =$('#agent_name').val();
            }

            //alert($otherarea);
            var allData="fcity="+$fcity+"&ftown="+$ftown+"&city="+$city+"&town="+$town+"&business_name="+$business_name+"&agent_type="+$agent_type+"&agent_name="+$agent_name+"&mobile_num="+$mobile_num+"&email_id="+$email_id+"&password="+$password;
           
            var $msgBox = $('.error-show');
            if($emailc!='succ' ){
              if($mobc!='succ'){
            if($business_name != ''  && $business_name.length<=20){
              if($agent_name != '' && $agent_name.length<=20){
                if($city != 'no' && $city.length<=20){
                  if($town != 'no'&& $town.length<=20){
                 if($mobile_num != ''){
                  if(phonenumber($mobile_num)){
                  if(!($mobile_num.length < 10)){
                   if($email_id != ''){
                    if(!validateEmail($email_id)){                    
                     if($password != ''){
                      $msgBox.html('');
                      $('#registrationForm').hide();
                      $('#loading1').css('display','block');
                      $.ajax({
                        type:'POST',
                        data:allData,
                        url:"index.php?action=signup&submit=submit",
                        dataType:"json",
                            success:function(msg){//alert(msg.status);
                                if(msg.status == 'success'){
                                  // alert(msg.message);
                                   $('#loading1').css('display','none');
                                    document.getElementById("registrationForm").reset();
                                  window.location.href="index.php?action=myhome";
                                    //$msgBox.html('<font color="#468847">'+msg.message+'</font>');
                                }else{
                                      $('#registrationForm').fadeIn('fast');
                                     $('#loading1').css('display','none');
                                     $msgBox.html('<font color="#F5871">'+msg.message+'</font>'); 
                                }
                            }
                }); 
              }else{
              $msgBox.html('<font color="#F5871"> Enter Password</font>');  
              }}else{
                $msgBox.html('<font color="#F5871D"> Enter Valid Email Id</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D"> Enter Email Id</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D"> Enter Mobile Number</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D"> Enter Mobile Number with 10 digit !</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D"> Enter Mobile Number</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D"> Enter Town</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D"> Enter City</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D"> Enter Agent Name</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D"> Enter Business Name</font>');  
            }
          }else{
             $msgBox.html('<font color="#F5871D"> Enter valid mobile number! This number already exist.</font>');
          }}else{
             $msgBox.html('<font color="#F5871D"> Enter valid email id! This email id already exist.</font>');
          }
          }); 
         
          //end edit profile form
         
          
          //end submit form
        

          //end submit form
          $("#add_property_box_by_ajax").click(function(){
              var height = $('body').height();

             $('#blanket2').css("display","block");
$('.loading3').css("display","block");
                $('#blanket2').css("height",height);
             
              
              $('#popUpDiv2').fadeIn();
           
              $.post("index.php?action=add_property_box_by_ajax",{},function(data,status){
//alert(data);   
                $("#add_property_box").html(data); 
              
               
            
              });

          });

           $('#close_button_property_edit').click(function(){
                $('#blanket02').css("display","none");
                  $('#blanket02').removeAttr('height');
                  $('.error-show').html('');
                  $('#popUpDiv02').fadeOut(); // hide the overlay
            });
          
         
          //end submit form
          //submit location using ajax
          $("#location-btn").click(function(){
          /*  var $country = $("#country").val();
            var $state = $('#state').val();
            var $city = $("#city").val();*/
            var $location = $("#location").val();
            var $user_unique_id = $("#user_unique_id").val();
            //alert($user_unique_id);
            //var allData="country="+$country+"&state="+$state+"&city="+$city+"&location="+$location+"&user_id="+$user_unique_id;
            var allData="location="+$location+"&user_id="+$user_unique_id;
            var $msgBox = $('.location-error-show');
              if($location != ''){
                $msgBox.html('');
                $('.location-error-show').html('<span class="high">Processing....</span>');
                $.ajax({
                  type:'POST',
                  data:allData,
                  url:"index.php?action=location&submit=submit",
                  dataType:"json",
                      success:function(msg){//alert(msg.status);
                          if(msg.status == 'success'){
                              //$msgBox.html('<font color="#11AB24">'+msg.message+'</font>');
                              $('.overlay-content01 .message_of_account').html('<font color="#11AB24">'+msg.message+'</font>');
                             $('.overlay-bg').hide();
                             $('.overlay-bg01').show();
                              //$("#registrationForm").reset(); 
                          }else{
                               $msgBox.html('<font color="#F5871">'+msg.message+'</font>'); 
                          }
                      }
                }); 
              }else{
                 $msgBox.html('<font color="#F5871">Please Enter Location</font>');  
              } 
           
          }); 
         
          //end location form
          //login user
          $("#submit-link").click(function(){
              var $username = $("#login_username").val();
              var $password = $('#login_password').val();
              var $role = "user";
              var $msgBox = $('#loginForm .error-show1');
              if($username != ''){
                if($password != ''){
                  $msgBox.html('');
                  $('#loginForm').hide();
                  $('#loading').css('display','block');
                  $.ajax({
                    type:'POST',
                    data:"username="+$username+"&password="+$password+"&role="+$role+"&submit=submit",
                    url:"index.php?page=login&action=login",
                    dataType:"json",
                      success:function(msg){
                          
                          if(msg.status == 'success'){
                              $('#loading').html('Welcome')
                              $msgBox.html(msg.message); 
                              window.location.href="index.php?action=myhome";
                          }else{
                              $('#loginForm').fadeIn('fast');
                             $('#loading').css('display','none');
                              $msgBox.html('<font color="#F5871D">'+msg.message+'</font>');  
                          }
                      }
                  }); 
                }else{
                  $msgBox.html('<font color="#F5871D">Please Enter Password</font>');  
                } 
              }else{
                $msgBox.html('<font color="#F5871D">Please Enter Email Id</font>');  
              }
            }); 
          //login user end
          ///select owner
          $("#owner").click(function(){
            $("#business_name").css("display","none");
            $("#agent_name").css("display","none");
            $("#agent_owner_name").html("<input type='text' onblur='tooltipMsgHide()' onfocus='tooltipMsgShow(this.id,this.title);' title='Enter Owner name' class='sp_text1 validate[required,custom[onlyLetterSp],maxSize[20]]' placeholder='Name' class='sp_text1'/>");
          });
          $("#broker").click(function(){
            $("#owner_name").css("display","none");
            $("#agent_broker_name").html("<input type='text' onblur='tooltipMsgHide()' onfocus='tooltipMsgShow(this.id,this.title);' title='Enter Business name' id='business_name' placeholder='Business Name' class='sp_text1 validate[required,custom[onlyLetterSp],maxSize[20]]' />");
            $("#agent_owner_name").html("<input type='text' onblur='tooltipMsgHide()' onfocus='tooltipMsgShow(this.id,this.title);' title='Enter Agent name' id='agent_name' placeholder='Agent Name' class='sp_text1 validate[required,custom[onlyLetterSp],maxSize[20]]'/>");
          });
           $("#builder").click(function(){
            $("#owner_name").css("display","none");
            $("#agent_broker_name").html("<input type='text' onblur='tooltipMsgHide()' onfocus='tooltipMsgShow(this.id,this.title);' title='Enter Business name' id='business_name' placeholder='Business Name' class='sp_text1 validate[required,custom[onlyLetterSp],maxSize[20]]' />");
            $("#agent_owner_name").html("<input type='text' onblur='tooltipMsgHide()' onfocus='tooltipMsgShow(this.id,this.title);' title='Enter Agent name' id='agent_name' placeholder='Agent Name' class='sp_text1 validate[required,custom[onlyLetterSp],maxSize[20]]'/>");
          });
          //selected owner
       
        });
       //Jquery
 function signup()
  {
   $email=$('#email_idc').val();
   if($email_ajax_response!='unsucc'){
      $("#email_id").focus();
      $(".error-show").html("<font color='red'>Enter valid email id!</font>");
      return false;
    }
    return true; 
 }
       //email
function validateEmail(email)
{
   var emailID = email;
   atpos = parseInt(emailID.indexOf("@"));
   dotpos = parseInt(emailID.lastIndexOf("."));
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {      
       return true;
   }else{
      return false;
   }
}
//email


 function checkRequiredFields(obj)
      {
            alert("Please fill required fields !!");
            $("#"+obj).find('.requiredInput').each(function(index) {
                var inputVal = $("#"+this.id).val();
               
                if(inputVal.trim()=="" || inputVal.trim()==0)
                {
                      $("#"+this.id).addClass("textboxError");
                }
              });
            $("#"+obj).find('.requiredTextAreaInput').each(function(index) {
                var inputVal = $("#"+this.id).val();
               
                if(inputVal.trim()=="" || inputVal.trim()==0)
                {
                      $("#"+this.id).addClass("textAreaError");
                }
            });
      }


function validateEmailById(sEmail) {

    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        alert('Please Enter valid email Id');
        return false;
    }
}



function validate()
{alert('sdfsdf');
   $name=$("#business_name").val();
   $email=$("#email_id").val();
   if($name=='' || $email=='')
   {
      var obj="register_form";
      checkRequiredFields(obj);
      return false;
   }else if(validateEmailById($email))
   {
         return true;
   }
   else{
     return false;}
}


    function phonenumber(inputtxt)  
    {  
      var phoneno = /^(([1-9]*)|(([1-9]*).([0-9]*)))$/;  
      if(inputtxt.match(phoneno))  
            {  
          return true;  
            }  
          else  
            {  
           
            return false;  
            }  
    }  
 function textOnly(inputtxt)  
    {  
      var phoneno = /^[a-zA-Z_]/;  
      if(inputtxt.match(phoneno))  
            {  
          return true;  alert('tr');
            }  
          else  
            {  
           
            return false;   alert('fl');
            }  
    }  
      //forgot password
             function validateCaptcha()
              {
                 $captcha=$('#captcha2').val();
                 $captcha1=$('#forgot_captcha').val();
                 $email=$('#email_forgot').val();
                 if($email==''){
                    $("#email_forgot").focus();
                    $(".error-show1").html("<font color='red'>Enter Email!</font>");
                    return false;
                  }else if(validateEmail($email)){
                    $("#email_forgot").focus();
                    $(".error-show1").html("<font color='red'>Enter Valid Email Id!</font>");
                    return false;
                  }else if($captcha1==''){
                    $("#forgot_captcha").focus();
                    $(".error-show1").html("<font color='red'>Enter captcha!</font>");
                    return false;
                  }else if($captcha1!=$captcha){
                    $("#forgot_captcha").focus();
                    $(".error-show1").html("<font color='red'>Captcha not matched!</font>");
                    return false;
                  }
                  return true; 

              }

              function validateReset()
              {
                 $pass1=$('#reset_password').val();
                 $pass2=$('#reset_passwordc').val();
                 if($pass1==''){
                    $("#reset_password").focus();
                    $(".error-show1").html("<font color='red'>Enter Password!</font>");
                    return false;
                  }else if($pass2==''){
                    $("#reset_passwordc").focus();
                    $(".error-show1").html("<font color='red'>Enter Confirm Password!</font>");
                    return false;
                  }else if($pass1!=$pass2){
                    $("#reset_passwordc").focus();
                    $(".error-show1").html("<font color='red'>Password not matched!</font>");
                    return false;
                  }
                  return true; 

              }
              //email
           //forgot password

           //number to wording 
           var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
              var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

              function inWords (num) {
                  if ((num = num.toString()).length > 9) return 'overflow';
                  n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
                  if (!n) return; var str = '';
                  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
                  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
                  str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
                  str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
                  str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
                  return str;
              }


              function wordCost(obj)
              {
                var val=obj.value;
                if(validateNumberWithLimitById(val)){ $("#cost_rate_into_wording1").text('');}else{
                var word_val ='('+inWords(val)+')';
                $("#cost_rate_into_wording1").text(word_val);
              }

              }
              function wordRate(obj)
              {
                var val=obj.value;
               if(validateNumberWithLimitById(val)){ $("#cost_rate_into_wording2").text('');}else{
                var word_val ='('+inWords(val)+')';
                $("#cost_rate_into_wording2").text(word_val);
              }

              }
               function wordRent(obj)
              {
                var val=obj.value;
               if(validateNumberWithLimitById(val)){ $("#rent_depo_into_wording1").text('');}else{
                var word_val ='('+inWords(val)+')';
                $("#rent_depo_into_wording1").text(word_val);
              }

              }
              function wordDepo(obj)
              {
                var val=obj.value;
               if(validateNumberWithLimitById(val)){ $("#rent_depo_into_wording2").text('');}else{
                var word_val ='('+inWords(val)+')';
                $("#rent_depo_into_wording2").text(word_val);
              }

              }


              function addHiddenSubmitButtonsSoICanHitEnter(){
                  var hiddenSubmit = "<input type='submit' style='position: absolute; left: -9999px; width: 1px; height: 1px;' tabindex='-1'/>";
                  $("#loginForm").each(function(i,el){
                      if($(this).find(":submit").length==0)
                          $(this).append(hiddenSubmit);
                  });
              }

               function editPropertyFun(val){
                  $('#blanket02').css("display","block");
                    var height = $('body').height();
                    $('#blanket02').css("height",height);
                    $('#popUpDiv02').fadeIn(); 

                    var $id=$(val).attr('title');
                   // alert($id);
                    $.post("index.php?action=edit_property_box_by_ajax",{id:$id},function(data,status){
                      $("#edit_property_box_by_ajax").html(data);
                      //alert(data);
                    });
            }        //overlay for location


function tooltipMsgShow(id,title)
{
  $("#"+id).after('<label class="tooltip">'+title+'</label>');
}

function tooltipMsgHide(id,title)
{
 $("#registrationForm label.tooltip").hide();
}