const placeholder={};
myform.addEventListener("submit", (event)=>{
    myform.noValidate="true";
    event.preventDefault();
    console.dir(myform);
    document.querySelectorAll("input").forEach((input)=>{
    
      let Id=input.id;
      if(!input.value.trim()){
        
        document.getElementById(Id.charAt(0).toUpperCase()+Id.slice(1)).innerText=`${placeholder[input.id]} can't be empty`;
        
        input.removeAttribute("placeholder");
        input.style.width="80%";
        input.parentElement.style.border="2px solid hsl(0, 100%, 74%)";
        input.parentElement.querySelector(".error-icon").style.display="block";
      }
    })
  });

        document.querySelectorAll("input").forEach((input)=>{
        placeholder[input.id]=input.placeholder
        input.addEventListener("focus", (event)=>{
            event.target.placeholder=placeholder[event.target.id];
            if (document.querySelector(".error-icon").style.display=="block"){
            document.querySelectorAll(".error-icon").forEach(el=>{
                el.style.display="none";
            });}

            document.getElementById(input.id.charAt(0).toUpperCase()+input.id.slice(1)).innerText="";
            input.style.width="100%";
            input.parentElement.style.border="1px solid hsl(246, 25%, 77%)";
        });
        
  });
  
  email.addEventListener("blur",()=>{
        if (email.value.trim() && !email.value.match(email.pattern)){
            myform.noValidate="true";
            console.dir(email)
            email.parentElement.querySelector(".error-icon").style.display="block";
            email.style.color="hsl(0, 100%, 74%)";
            document.getElementById(email.id.charAt(0).toUpperCase()+email.id.slice(1)).innerText="Looks like this is not an email";
            email.parentElement.style.border="2px solid hsl(0, 100%, 74%)";
      }});