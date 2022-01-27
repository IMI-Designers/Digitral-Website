//Input Number Max Length
$(document).ready(function() {
    $('input[type=number][max]:not([max=""])').on('input', function(ev) {
      var $this = $(this);
      var maxlength = $this.attr('max').length;
      var value = $this.val();
      if (value && value.length >= maxlength) {
        $this.val(value.substr(0, maxlength));
      }
    });
  });

  
  $("#mobileValid").validate({
    rules: {
      phonenumber: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      phonenumber: {
        required: "Please enter a Mobile Number",
        minlength: "Your Mobile number must consist of at least 10 digits"
      },
    }
  });
  $("#firstname").validate({
    rules: {
      phonenumber: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      phonenumber: {
        required: "Please enter a Mobile Number",
        minlength: "Your Mobile number must consist of at least 10 digits"
      },
    }
  });

  //mobile
$("#mobileValid").validate({
  rules: {
    phonenumber: {
      required: true,
      minlength: 10
    }
  },
  messages: {
    phonenumber: {
      required: "Please enter a Mobile Number",
      minlength: "Your Mobile number must consist of at least 10 digits"
    },
  }
});

//Name Validation
try {
  $("#profileValid").validate({
    rules: {
      username: {
        required: true,
        minlength: 5
      },
      date: {
        required: true,
        minlength: 2
      },
      month: {
        required: true,
        minlength: 2
      },
      year: {
        required: true,
        minlength: 4
      }
    },
    messages: {
      username: {
        required: "Please enter your name",
        minlength: "Your Name must consist of at least 5 Characters"
      },
    }
  });
  }catch(e){}


  //last name
function checkLength(){
  var lastname = document.getElementById("#lastname");
      if(lastname.value.length <= 10 && lastname.value.length >= 5){
          alert("success");
      }
      else{
          alert("make sure the input is between 5-10 characters long")
      }
  }


  //email
  function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  }
  function validate() {
    let result = $("#result");
    let email = $("#businessMail").val();
    result.text("");
    if(validateEmail(email)) {
      result.text(email + " is valid");
      result.css("color", "blue");
    } else {
      result.text(email + " is not valid");
      result.css("color", "red");
    }
    return false;
  }
  $("#validate").on("click", validate);

  

  //popup demo form get in touch

  function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }