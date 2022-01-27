$('#success_msg').hide();
$('#success_msg1').hide();
function contactData() {
                var field1 = $("#firstname").val();
                var field2 = $("#lastname").val();
                var field3 = $("#businessMail").val();
                var field4 = $("#jobTitle").val();
                var field5 = $("#phoneNumber").val();
                var field6 = $("#companyName").val();
                var field7 = $("#industry option:selected").text();
                var field8 = $("#message").val();		
                if(field1 == ""){
                    alert('Please Fill Your Name');
                    document.getElementById("#name").focus();
                    return false;
                }
                if(field2 == ""){
                    alert('Please Fill Your Email');
                    document.getElementById("#email").focus();
                    return false;
                }
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSdqpsbiHZItwwLDmn5lCxpg1BjV0olBEonFHA0h2nOJl8suQg/formResponse?",
                    data: {"entry.1604198616": field1, "entry.1533934701": field2, "entry.837907081": field3, "entry.540807328": field4, "entry.2127169349": field5, "entry.91825914": field6, "entry.652041139": field7, "entry.612373527": field8},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
                    {

                    },
                    error: function(x, y, z)
                        {
                            // alert('Your message is sent to the form');
                            // $('#contact-form').hide();
                            $('#success_msg').show();
                            $("#success_msg").delay(3000).fadeOut(500);   
                            $("#contact_form")[0].reset();  
                        }
                });
                return false;
}


function enquiryData() {
                var field1 = $("#name").val();
                var field2 = $("#businessMail1").val();
                var field3 = $("#phoneNumber1").val();
                var field4 = $("#demo1").val();
                
                $.ajax({
                    url: "https://docs.google.com/forms/u/1/d/1T7zedJc6Sh-shvOpJOQQ48D_0DzRAvs6ztGS16DtBsE/formResponse?",
                    data: {"entry.1083826942": field1, "entry.2011046118": field2, "entry.1777185929": field3, "entry.690583498": field4},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
                    {

                    },
                    error: function(x, y, z)
                        {
                            // alert('Your message is sent to the form');
                            // $('#contact-form').hide();
                            $('#success_msg1').show();
                            $("#success_msg1").delay(3000).fadeOut(500);   
                            $("#enquiry_form")[0].reset();  
                        }
                });
                return false;
}