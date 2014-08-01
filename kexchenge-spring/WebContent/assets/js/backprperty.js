    
$(document).ready(function(){  
        //extra valus in add property
          $.fn.valList = function(){
                  return $.map( this, function (elem) {
                        return elem.value || "";
                  }).join( " " );
            };  

         $('#ter_add_val').click(function(){
                $('#ter_val').slideDown();
           });
          $('#ter_val').blur(function(){
              var $val=$(this).val();
               $msg=$('#propertyForm .property-error-show')
              if(validateNumberWithLimitById($val)){
                $("#ter_val").focus();
                  $msg.html("<font color='red'>Enter only numbers in Ter-Terrace_SF!</font>");
                  return false;
                }else {
                $val='Ter'+$(this).val()+'SF';
                  $msg.html("");
                   $('#Ter').text($val);
                   $('#ter_add_val').val($val);
                   return true;
                 }
           });



           $('#add_av_val').click(function(){
                $('#av_val').slideDown();
           });
           
          $('#av_val').blur(function(){
              var $val=$(this).val();
               $msg=$('#propertyForm .property-error-show')
              if(validateNumberWithLimitById($val)){
                $("#av_val").focus();
                  $msg.html("<font color='red'>Enter only numbers in AV-Agreement Value !</font>");
                  return false;
                }else {
                $val='AV'+$(this).val();
                  $msg.html("");
                   $('#AV').text($val);
                   $('#add_av_val').val($val);
                   return true;
                 }
           });

           //select property type 

          $("#property_type_base").change(function(){
           $type=$(this).val();    
                $.post("index.php?action=property_type_by_ajax",{type:$type},function(data,status){
                      $("#add_pro_property_type").html(data);

                });
                   
          });
           //property type end
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
                 $cost = $("#add_pro_rent").val();
                 $rate = $("#add_pro_depo").val();
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
                              $('#blanket2').css("display","none");
                               new Messi(msg.message, {title: 'successfull', titleClass: 'success', buttons: [{id: 0, label: 'Close', val: 'X'}]});              
                              //$("#registrationForm").reset(); 
                          }else{
                               new Messi(msg.message, {title: 'Error', titleClass: 'enim error', buttons: [{id: 0, label: 'Close', val: 'X'}]});
                          }
                      }
                }); 
              }
                                
          }); 

          //edit form using ajax
          $("#property-btn-edit").click(function(){
            
              //alert('sdf');

            var $sellrent = $("#propertyForm input[type='radio'][name='sellrent']:checked").val();
            var $rc = $("#property_type_base").val();
            var $p_id = $("#property_id").val();
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
            var allData="p_id="+$p_id+"&fcity="+$fcity+"&opv="+$opv+"&ftown="+$ftown+"&flocation="+$flocation+"&fptype="+$fptype+"&ffloor="+$ffloor+"&sellrent="+$sellrent+"&sbc="+$sbc+"&rc="+$rc+"&city="+$city+"&town="+$town+"&location="+$location+"&address="+$address+"&ptype="
            +$ptype+"&area="+$area+"&floor="+$floor+"&cost="+$cost+"&rate="+$rate+"&direct="+$directorsidefield;
            //alert(allData);
            var $msgBox = $('.property-error-show');
           if(validatePropertyData()){
                $msgBox.html('<span class="high">Processing....</span>');
                $.ajax({
                  type:'POST',
                  data:allData,
                  url:"index.php?action=property_edit&submit=submit",
                  dataType:"json",
                      success:function(msg){
                          if(msg.status == 'success'){//alert(msg.status);
                             $msgBox.html('');
                                 $('#blanket02').css("display","none");
                                  $('#blanket02').removeAttr('height');
                                   $('.property-error-show').html('');
                                  $('#popUpDiv02').fadeOut(); // hide the overlay
                                     $('#blanket02').css("display","none");
                               new Messi(msg.message, {title: 'successfull', titleClass: 'success', buttons: [{id: 0, label: 'Close', val: 'X'}]});              
                              //$("#registrationForm").reset(); 
                          }else{
                               new Messi(msg.message, {title: 'Error', titleClass: 'enim error', buttons: [{id: 0, label: 'Close', val: 'X'}]});
                          }
                      }
                }); 
              }
                                
          }); 



        
});

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



function validateTextWithLimitById(txt) {

    var filter =  /^[A-Za-z]+$/; 
    if (!filter.test(txt)) {
        return true;
    }
    else {
        return false;
    }
}
