const key='rate';
let values=[];
if(document.title!="Thank You!"){
    document.querySelectorAll(".rates").forEach(rate=>{
        rate.addEventListener("click",()=>{

            if(values.length){
                values[0].style.backgroundColor=rate.style.backgroundColor;
                values[0].style.color=rate.style.color;
                values.shift();
            }
            values.push(rate);
            values[0].style.backgroundColor="white";
            values[0].style.color="black";

        })
    });
    
    document.querySelector("button").addEventListener("click",()=>{
        if(values.length){
        localStorage.setItem(key,values[0].textContent);
        window.location.href="thankyoupage.html";
        }
        else{
            alert("Please select a rating first");
        }
        
    });}

else{
        console.log(document.title);
        const rating=document.querySelector(".rating");
        console.log(rating);
        const message=document.createElement("p");
        message.textContent=`You selected ${localStorage.getItem(key)} out of 5`;
        console.log(message);
        rating.appendChild(message);
    }




