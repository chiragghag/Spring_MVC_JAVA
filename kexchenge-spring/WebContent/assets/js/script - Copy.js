    
    $(document).ready(function(){  
        //extra valus in add property
        

        addHiddenSubmitButtonsSoICanHitEnter();

        
          $.fn.valList = function(){
                  return $.map( this, function (elem) {
                        return elem.value || "";
                  }).join( " " );
            };    
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
                
                  var $ref=$(this).attr('title');
                  //alert($ref);
                 
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
          //properties
          $("#properties").click(function(){
            
            alert('sd');
          });
            // hide popup when user clicks on close button
            $('.close-btn01').click(function(){
                $('#blanket1').css("display","none");
                $('.error-show').html('');
                $('#blanket1').removeAttr('height');
                $('#popUpDiv1').fadeOut(); // hide the overlay
            });

              $('#signin').click(function(){
                $('#blanket').css("display","block");
                var height = $('.container_1').height();
                $('#blanket').css("height",height);
                $('#popUpDiv').fadeIn(); // hide the overlay
            });

               $('#close_signin').click(function(){
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
               $('#signin2').click(function(){
                $('#blanket').css("display","block");
                var height = $('.container_1').height();
                $('#blanket').css("height",height);
                $('#popUpDiv').fadeIn(); // hide the overlay
            });
                $('#edit_profile').click(function(){
                $('#blanket4').css("display","block");
                var height = $('.container_1').height();
                $('#blanket4').css("height",height);
                $('#popUpDiv4').fadeIn(); // hide the overlay
            });
               $('#close_button_property').click(function(){
                  $('#blanket2').css("display","none");
                  $('#blanket2').removeAttr('height');
                   $('.error-show').html('');
                  $('#popUpDiv2').fadeOut(); // hide the overlay
              });

             
                $('#register').click(function(){
                  $('#blanket1').css("display","block");
                  var height = $('.container_1').height();
                  $('#blanket1').css("height",height);
                  $('#popUpDiv1').fadeIn(); // hide the overlay
            });
                 $('#register_from_login').click(function(){
                    $('#blanket').css("display","none");
                  $('#blanket').removeAttr('height');
                  $('#popUpDiv').fadeOut(); // hide the overlay
                  $('#blanket1').css("display","block");
                  var height = $('.container_1').height();
                  $('#blanket1').css("height",height);
                  $('#popUpDiv1').fadeIn(); // hide the overlay
            });
                  $('#forgot_from_login').click(function(){
                    $('#blanket').css("display","none");
                  $('#blanket').removeAttr('height');
                  $('#popUpDiv').fadeOut(); // hide the overlay
                  $('#blanket3').css("display","block");
                  var height = $('.container_1').height();
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
              if($area==0)
              {
                $("#user_city").fadeIn();
              }else{
                 $("#user_city").fadeOut(); 
              }             

           });
           $("#location_town").change(function(){
              $area=$(this).val();
              if($area==0)
              {
                $("#user_town").fadeIn();
              }else{
                 $("#user_town").fadeOut(); 
              }              

           });

            $("#location_location").change(function(){
              $area=$(this).val();
              if($area==0)
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
           if($email!=''){       
           $.ajax({
                  type:'POST',
                  data:"email="+$email,
                  url:"index.php?action=email_exist",
                  dataType:"json",
                  success:function(msg){     
                      if(msg.status == 'success'){
                          $msgBox.html("<font color='red'>Email Id Already Exist!</font>"); 
                          $("#email_ajax_response").html("<input type='hidden' id='email_idc' value='succ'/>");                            
                      }else{
                        $msgBox.html("<font color='green'>Email Id Confirm!</font>");                            
                        $("#email_ajax_response").html("<input type='hidden' id='email_idc' value='unsucc'/>");  
                      }
                  }
              });
            }else
            {
              $msgBox.html("<font color='red'>Enter Email Id!</font>");                            
            }             
          });
           //check email id by ajax
           //check email address form confirmation

          $("#mobile_num").change(function(){
            var $msgBox = $('.error-show');
           $num=$(this).val();
           if($num!=''){       
           $.ajax({
                  type:'POST',
                  data:"number="+$num,
                  url:"index.php?action=mobile_exist",
                  dataType:"json",
                  success:function(msg){     
                      if(msg.status == 'success'){
                          $msgBox.html("<font color='red'>Mobile Number Already Exist!</font>"); 
                          $("#mobile_num").focus();                     
                      }else{
                        $msgBox.html("<font color='green'>Mobile Number Confirm!</font>");                            
                        return true;
                      }
                  }
              });
            }else
            {
              $msgBox.html("<font color='red'>Enter Mobile Number Id!</font>");                            
            }             
          });
           //check email id by ajax
            $(".mobile_num_exists").change(function(){
            var $msgBox = $('.error-show3');
           $num=$(this).val();
           if($num!=''){       
           $.ajax({
                  type:'POST',
                  data:"number="+$num,
                  url:"index.php?action=mobile_exist",
                  dataType:"json",
                  success:function(msg){     
                      if(msg.status == 'success'){
                          $msgBox.html("<font color='red'>Mobile Number Already Exist!</font>"); 
                          $("#mobile_num").focus();                     
                      }else{
                        $msgBox.html("<font color='green'>Mobile Number Confirm!</font>");                            
                        return true;
                      }
                  }
              });
            }else
            {
              $msgBox.html("<font color='red'>Enter Mobile Number Id!</font>");                            
            }             
          });
           //check email id by ajax
           //select property type 

          $("#property_type_base").change(function(){
           $type=$(this).val();    
                $.post("index.php?action=property_type_by_ajax",{type:$type},function(data,status){
                      $("#add_pro_property_type").html(data);

                });
                   
          });
           //property type end
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
           //select city based town for add property

          $("#add_pro_location_city").change(function(){
            var $msgBox = $('.error-show');
           $city=$(this).val();
           if($city!=0){ $("#add_pro_city").fadeOut();
           if($city!='no'){  $("#add_pro_city").fadeOut();     
                $.post("index.php?action=town_by_ajax",{city:$city},function(data,status){
                      $("#add_pro_location_town").html(data);

                });
            }else
            {
              $msgBox.html("<font color='red'>Select City </font>");                            
            }}else{
                $("#add_pro_city").fadeIn();
            }             
          });
           //select city based town

          $("#add_pro_location_town").change(function(){
            var $msgBox = $('.error-show');
           $town=$(this).val();
           if($town!=0){  $("#add_pro_town").fadeOut();
           if($town!='no'){  $("#add_pro_town").fadeOut();     
                $.post("index.php?action=location_by_ajax",{town:$town},function(data,status){
                      $("#add_pro_location_location").html(data);

                });
            }else
            {
              $msgBox.html("<font color='red'>Select Town </font>");                            
            } 
            }else{
                $("#add_pro_town").fadeIn();
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
           $("#add_pro_location_location").change(function(){
            var $msgBox = $('.error-show');
           $town=$(this).val();
           if($town!=0){$("#add_pro_location").fadeOut();
                if($town=='no')
                {
                   $msgBox.html("<font color='red'>Select Location </font>");        
                }
            }else{
                $("#add_pro_location").fadeIn();
            }         
          });
            $("#add_pro_property_type").change(function(){
            var $msgBox = $('.error-show');
           $town=$(this).val();
           if($town!=0){$("#add_pro_type").fadeOut();
                if($town=='no')
                {
                   $msgBox.html("<font color='red'>Select Property Type </font>");        
                }
            }else{
                $("#add_pro_type").fadeIn();
            }         
          });
            $("#add_pro_floor").change(function(){
            var $msgBox = $('.error-show');
           $town=$(this).val();
           if($town!=0){$("#add_pro_floor_other").fadeOut();
                if($town=='no')
                {
                   $msgBox.html("<font color='red'>Select Floor </font>");        
                }
            }else{
                $("#add_pro_floor_other").fadeIn();
            }         
          });
             
           //check email id by ajax
           //submit edit profile form using ajax
          $("#edit_form_submit").click(function(){
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
          //submit signup form using ajax
          $("#signup").click(function(){
            var $agent_type = $("input[type='radio'][name='agent_type']:checked").val();;//$("#agent_type").val();
            var $business_name = '';
            var $agent_name ='';
            var $mobile_num = $("#mobile_num").val();//alert($mobile_num.length);
            var $email_id = $('#email_id').val();
            var $password = $("#password").val();
            var $city = $("#location_city").val();
            var $town = $("#location_town").val();
            var $fcity = 'in';
            var $ftown = 'in';
             if($city==0){
              $fcity='o';
              $city =$('#city').val();
            }
             if($town==0){
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
          // alert(allData);
            var $msgBox = $('.error-show');
            if($business_name != '' || $agent_type=='o'){
              if($agent_name != ''){
                if($city != 'no'){
                  if($town != 'no'){
                 if($mobile_num != ''){
                  if(phonenumber($mobile_num)){
                  if($mobile_num.length == 10){
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
                                    document.getElementById("registrationForm").reset();
                                    $msgBox.html('<font color="#468847">'+msg.message+'</font>');
                                }else{
                                      $('#registrationForm').fadeIn('fast');
                                     $('#loading1').css('display','none');
                                     $msgBox.html('<font color="#F5871">'+msg.message+'</font>'); 
                                }
                            }
                }); 
              }else{
              $msgBox.html('<font color="#F5871">Please Enter Password</font>');  
              }}else{
                $msgBox.html('<font color="#F5871D">Please Enter Valid Email Id</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D">Please Enter Email Id</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D">Please Enter 10 digit Mobile Number</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D">Please Enter Valid Mobile Number</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D">Please Enter Mobile Number</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D">Please Enter Town</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D">Please Enter City</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D">Please Enter Agent Name</font>');  
            }}else{
                $msgBox.html('<font color="#F5871D">Please Enter Business Name</font>');  
            }
          }); 
         
          //end edit profile form
          $("#propertyForm input[type='checkbox'][name='opv']").click(function(){
              $val=$(this).val();
              if(this.checked){
              $('#optional_info').append("<span id="+$val+">"+$val+"</span>");
            }else{
              $('#optional_info span#'+$val).remove();
            }
          });

          //sell info
          $("#sell_info").click(function(){
             $("#add_rent_depo").hide();
            $("#add_cost_rate").show();

          });
          $("#rent_info").click(function(){
            $("#add_cost_rate").hide();
            $("#add_rent_depo").show();
          });
          //submit form using ajax
          $("#property-btn").click(function(){
          

            var $sellrent = $("#propertyForm input[type='radio'][name='sellrent']:checked").val();
            var $rc = $("#property_type_base").val();
            var $city = $('#add_pro_location_city').val();
            var $town = $("#add_pro_location_town").val();
            var $location = $("#add_pro_location_location").val();
            var $address = $("#add_pro_address").val();
            var $ptype = $("#add_pro_property_type").val();
            var $area = $("#add_pro_area").val();
            var $sbc = $("#add_pro_sbc").val();
            var $floor = $("#add_pro_floor").val();
            var $cost = '';
            var $rate = '';
            var $rent = '';
            var $depo = '';
            var $directorsidefield = $("#add_pro_slidebyslide").val();
            var $opv = $("#propertyForm input[type='checkbox'][name='opv']:checked").valList();           
            if($sellrent=='Sell')
            {
                $cost = $("#add_pro_cost").val();
                $rate = $("#add_pro_rate").val();
            }
             if($sellrent=='Rent')
            {
                 $rate = $("#add_pro_rate").val();
                 $rent = $("#add_pro_rent").val();
            }
            var $fcity = 'in';
            var $ftown = 'in';
            var $flocation = 'in';
            var $fptype = 'in';
            var $ffloor = 'in';

             if($city==0){
              $fcity='o';
              $city =$('#add_pro_city').val();
            }
             if($location==0){
              $flocation='o';
              $location =$('#add_pro_location').val();
            }
            if($town==0){
              $ftown='o';
              $town =$('#add_pro_town').val();
            }
             if($ptype==0){
              $fptype='o';
              $ptype =$('#add_pro_type').val();
            }
             if($floor==0){
              $ffloor='o';
              $floor =$('#add_pro_floor_other').val();
            }
           
            //alert($otherarea);
            var allData="fcity="+$fcity+"&opv="+$opv+"&ftown="+$ftown+"&flocation="+$flocation+"&fptype="+$fptype+"&ffloor="+$ffloor+"&sellrent="+$sellrent+"&sbc="+$sbc+"&rc="+$rc+"&city="+$city+"&town="+$town+"&location="+$location+"&address="+$address+"&ptype="
            +$ptype+"&area="+$area+"&floor="+$floor+"&cost="+$cost+"&rate="+$rate+"&direct="+$directorsidefield;
            //alert(allData);
            var $msgBox = $('.property-error-show');
           if(validatePropertyData()){          

                $msgBox.html('<span class="high">Processing....</span>');
                $.ajax({
                  type:'POST',
                  data:allData,
                  url:"index.php?action=property_post&submit=submit",
                  dataType:"json",
                      success:function(msg){
                          if(msg.status == 'success'){//alert(msg.status);
                              document.getElementById("propertyForm").reset();
                                $("#rent_depo_into_wording1").text('');
                                $("#cost_rate_into_wording1").text('');
                                $("#cost_rate_into_wording2").text('');
                                $("#rent_depo_into_wording2").text('');
                                $('#optional_info').html('');

                              $('#popUpDiv2').fadeOut();
                               new Messi(msg.message, {title: 'successfull', titleClass: 'success', buttons: [{id: 0, label: 'Close', val: 'X'}]});              
                              //$("#registrationForm").reset(); 
                          }else{
                               new Messi(msg.message, {title: 'Error', titleClass: 'enim error', buttons: [{id: 0, label: 'Close', val: 'X'}]});
                          }
                      }
                }); 
              }
                                
          }); 
          
          //end submit form
          $("#property-btn-edit-button img").click(function(){
              $('#blanket02').css("display","block");
              var height = $('.container_1').height();
              $('#blanket02').css("height",height);
              $('#popUpDiv02').fadeIn(); 

              var $id=$(this).attr('title');
              alert($id);
              $.post("index.php?action=edit_property_box_by_ajax",{id:$id},function(data,status){
                $("#edit_property_box_by_ajax").html(data);
                alert(data);
              });

          });

          //end submit form
          $("#add_property_box_by_ajax").click(function(){
              $('#blanket2').css("display","block");
              var height = $('.container_1').height();
              $('#blanket2').css("height",height);
              $('#popUpDiv2').fadeIn(); // hide the overlay          
           
              $.get("index.php?action=edit_property_box_by_ajax",function(data,status){

                $("#add_property_box").html(data);
            
              });

          });

           $('#close_button_property_edit').click(function(){
                $('#blanket02').css("display","none");
                  $('#blanket02').removeAttr('height');
                  $('.error-show').html('');
                  $('#popUpDiv02').fadeOut(); // hide the overlay
            });
          //edit form using ajax
          $("#property-btn-edit").click(function(){
            


            var $sellrent = $("#propertyForm input[type='radio'][name='sellrent']:checked").val();
            var $rc = $("#property_type_base").val();
            var $city = $('#add_pro_location_city').val();
            var $town = $("#add_pro_location_town").val();
            var $location = $("#add_pro_location_location").val();
            var $address = $("#add_pro_address").val();
            var $ptype = $("#add_pro_property_type").val();
            var $area = $("#add_pro_area").val();
            var $sbc = $("#add_pro_sbc").val();
            var $floor = $("#add_pro_floor").val();
            var $cost = '';
            var $rate = '';
            var $rent = '';
            var $depo = '';
            var $directorsidefield = $("#add_pro_slidebyslide").val();
            var $opv = $("#propertyForm input[type='checkbox'][name='opv']:checked").valList();           
            if($sellrent=='Sell')
            {
                $cost = $("#add_pro_cost").val();
                $rate = $("#add_pro_rate").val();
            }
             if($sellrent=='Rent')
            {
                 $rate = $("#add_pro_rate").val();
                 $rent = $("#add_pro_rent").val();
            }
            var $fcity = 'in';
            var $ftown = 'in';
            var $flocation = 'in';
            var $fptype = 'in';
            var $ffloor = 'in';

             if($city==0){
              $fcity='o';
              $city =$('#add_pro_city').val();
            }
             if($location==0){
              $flocation='o';
              $location =$('#add_pro_location').val();
            }
            if($town==0){
              $ftown='o';
              $town =$('#add_pro_town').val();
            }
             if($ptype==0){
              $fptype='o';
              $ptype =$('#add_pro_type').val();
            }
             if($floor==0){
              $ffloor='o';
              $floor =$('#add_pro_floor_other').val();
            }
           
            //alert($otherarea);
            var allData="fcity="+$fcity+"&opv="+$opv+"&ftown="+$ftown+"&flocation="+$flocation+"&fptype="+$fptype+"&ffloor="+$ffloor+"&sellrent="+$sellrent+"&sbc="+$sbc+"&rc="+$rc+"&city="+$city+"&town="+$town+"&location="+$location+"&address="+$address+"&ptype="
            +$ptype+"&area="+$area+"&floor="+$floor+"&cost="+$cost+"&rate="+$rate+"&direct="+$directorsidefield;
            //alert(allData);
            var $msgBox = $('.property-error-show');
           if(validatePropertyData()){
                $msgBox.html('<span class="high">Processing....</span>');
                $.ajax({
                  type:'POST',
                  data:allData,
                  url:"index.php?action=property_post&submit=submit",
                  dataType:"json",
                      success:function(msg){
                          if(msg.status == 'success'){//alert(msg.status);
                              document.getElementById("propertyForm").reset();
                              $('#popUpDiv2').fadeOut();
                               new Messi(msg.message, {title: 'successfull', titleClass: 'success', buttons: [{id: 0, label: 'Close', val: 'X'}]});              
                              //$("#registrationForm").reset(); 
                          }else{
                               new Messi(msg.message, {title: 'Error', titleClass: 'enim error', buttons: [{id: 0, label: 'Close', val: 'X'}]});
                          }
                      }
                }); 
              }
                                
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
            $("#agent_owner_name").html("<input type='text' id='owner_name' placeholder='Name' class='sp_text1'/>");
          });
          $("#broker").click(function(){
            $("#owner_name").css("display","none");
            $("#agent_broker_name").html("<input type='text' id='business_name' placeholder='Business Name' class='sp_text1' />");
            $("#agent_owner_name").html("<input type='text' id='agent_name' placeholder='Agent Name' class='sp_text1'/>");
          });
           $("#builder").click(function(){
            $("#owner_name").css("display","none");
            $("#agent_broker_name").html("<input type='text' id='business_name' placeholder='Business Name' class='sp_text1' />");
            $("#agent_owner_name").html("<input type='text' id='agent_name' placeholder='Agent Name' class='sp_text1'/>");
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

function validateTextWithLimitById(txt) {

    var filter =  /^[A-Za-z]+$/; 
    if (!filter.test(txt)) {
        return true;
    }
    else {
        return false;
    }
}

function validateNumberWithLimitById(txt) {

    var filter =  /^[0-9]+$/; 
    if(txt.length>1){
    if (!filter.test(txt)) {
        return true;
    }
    else {
        return false;
    }
  }else{
    false;
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
 //property post  validation
              function validatePropertyData()
              {
                var $city = $('#add_pro_location_city').val();
                var $town = $("#add_pro_location_town").val();
                var $location = $("#add_pro_location_location").val();
                var $fcity = $('#add_pro_city').val();
                var $ftown = $("#add_pro_town").val();
                var $flocation = $("#add_pro_location").val();
                var $address = $("#add_pro_address").val();
                var $ptype = $("#add_pro_property_type").val();
                 var $fptype = $("#add_pro_type").val();
                var $area = $("#add_pro_area").val();
                var $sbc = $("#add_pro_sbc").val();
                var $floor = $("#add_pro_floor").val();
                 var $ffloor = $("#add_pro_floor_other").val();
                var $cost = $("#add_pro_cost").val();
                var $rate = $("#add_pro_rate").val();
                var $rent = $("#add_pro_rent").val();
                var $depo = $("#add_pro_depo").val();

                 var $sellrent = $("#propertyForm input[type='radio'][name='sellrent']:checked").val();
                 

                 $msg=$('#propertyForm .property-error-show')
                 if($city=='no'){
                    $("#add_pro_location_city").focus();
                    $msg.html("<font color='red'>Select city!</font>");
                    return false;
                  }else if((validateTextWithLimitById($fcity))&&($city==0)){
                      $("#add_pro_city").focus();
                        $msg.html("<font color='red'>Enter valid city name!</font>");
                        return false;
                  }else if(($fcity.length >12)&&($city==0)){
                      $("#add_pro_city").focus();
                        $msg.html("<font color='red'>Enter between 1-12 characters in city name!</font>");
                        return false;
                  }else if($town=='no'){
                    $("#add_pro_location_town").focus();
                    $msg.html("<font color='red'>Select town!</font>");
                    return false;
                  }else if(validateTextWithLimitById($ftown)&&($town==0)){
                      $("#add_pro_town").focus();
                        $msg.html("<font color='red'>Enter valid town name!</font>");
                        return false;
                  }else if(($ftown.length >12)&&($town==0)){
                      $("#add_pro_town").focus();
                        $msg.html("<font color='red'>Enter between 1-12 characters in town name!</font>");
                        return false;
                  }else if($location=='no'){
                    $("#add_pro_location_location").focus();
                    $msg.html("<font color='red'>Select location!</font>");
                    return false;
                  }else if(validateTextWithLimitById($flocation)&&($location==0)){
                      $("#add_pro_location").focus();
                        $msg.html("<font color='red'>Enter valid location name!</font>");
                        return false;
                  }else if(($flocation.length >12)&&($location==0)){
                      $("#add_pro_location").focus();
                        $msg.html("<font color='red'>Enter between 1-12 characters in location name!</font>");
                        return false;
                  }else if($address.length ==0){
                      $("#add_pro_address").focus();
                        $msg.html("<font color='red'>Enter address!</font>");
                        return false;
                  }else if($address.length >50){
                      $("#add_pro_address").focus();
                        $msg.html("<font color='red'>Enter between 1-50 characters in address!</font>");
                        return false;
                  }else if($area.length ==0){
                      $("#add_pro_area").focus();
                        $msg.html("<font color='red'>Enter area!</font>");
                        return false;
                  }else if($area.length >5){
                      $("#add_pro_area").focus();
                        $msg.html("<font color='red'>Enter between 1-5 digit in area!</font>");
                        return false;
                  }else if(validateNumberWithLimitById($area)){
                      $("#add_pro_area").focus();
                        $msg.html("<font color='red'>Enter only numbers in area!</font>");
                        return false;
                  }else if($ptype=='no'){
                    $("#add_pro_property_type").focus();
                    $msg.html("<font color='red'>Select property type!</font>");
                    return false;
                  }else if(($fptype.length <1)&&($ptype==0)){
                      $("#add_pro_type").focus();
                        $msg.html("<font color='red'>Enter property type name!</font>");
                        return false;
                  }else if(($fptype.length >10)&&($ptype==0)){
                      $("#add_pro_type").focus();
                        $msg.html("<font color='red'>Enter between 1-10 characters in property type name!</font>");
                        return false;
                  }else if($floor=='no'){
                    $("#add_pro_floor").focus();
                    $msg.html("<font color='red'>Select floor type!</font>");
                    return false;
                  }else if(($ffloor.length ==0)&&($floor==0)){
                      $("#add_pro_floor_other").focus();
                        $msg.html("<font color='red'>Enter floor name!</font>");
                        return false;
                  }else if(($ffloor.length >10)&&($floor==0)){
                      $("#add_pro_floor_other").focus();
                        $msg.html("<font color='red'>Enter between 1-10 characters in floor name!</font>");
                        return false;
                  }

                   if($sellrent=='Sell')
                  {
                      
                      if($cost.length >9){
                          $("#add_pro_cost").focus();
                            $msg.html("<font color='red'>Enter between 1-9 digit in cost!</font>");
                            return false;
                      }else if(validateNumberWithLimitById($cost)){
                          $("#add_pro_cost").focus();
                            $msg.html("<font color='red'>Enter only numbers in cost!</font>");
                            return false;
                      }else if($rate.length >7){
                          $("#add_pro_rate").focus();
                            $msg.html("<font color='red'>Enter between 1-7 digit in rate!</font>");
                            return false;
                      }else if(validateNumberWithLimitById($rate)){
                          $("#add_pro_rate").focus();
                            $msg.html("<font color='red'>Enter only numbers in rate!</font>");
                            return false;
                      }else if(($cost.length ==0)&&($rate.length ==0)){
                          $("#add_pro_rate").focus();
                            $msg.html("<font color='red'>Enter at least one value of cost and rate!</font>");
                            return false;
                      }
                  }
                   if($sellrent=='Rent')
                  {
                          if($rent.length ==0){
                          $("#add_pro_rent").focus();
                            $msg.html("<font color='red'>Enter  rent!</font>");
                            return false;
                      }else if($rent.length >7){
                          $("#add_pro_rent").focus();
                            $msg.html("<font color='red'>Enter between 1-7 digit in rent!</font>");
                            return false;
                      }else if(validateNumberWithLimitById($rent)){
                          $("#add_pro_rent").focus();
                            $msg.html("<font color='red'>Enter only numbers in rent!</font>");
                            return false;
                      }else if($depo.length ==0){
                          $("#add_pro_depo").focus();
                            $msg.html("<font color='red'>Enter depo!</font>");
                            return false;
                      }else if($depo.length >7){
                          $("#add_pro_depo").focus();
                            $msg.html("<font color='red'>Enter between 1-7 digit in depo!</font>");
                            return false;
                      }else if(validateNumberWithLimitById($depo)){
                          $("#add_pro_depo").focus();
                            $msg.html("<font color='red'>Enter only numbers in depo!</font>");
                            return false;
                      }
                  }

                  return true; 

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