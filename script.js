
document.getElementById("button").addEventListener("click",function() {
    $(window).scrollTop(0);  
    if( formcontrolval() && radiobuttonval() ) {
        checkboxval();
        
    } else {
        alert("Enter all fields")
    }
    
    
    });
    
    
    function checkboxval()
        {
            var checkboxs=document.getElementsByClassName("form-check-input");
            var count = 0;
            for(var i=0,l=checkboxs.length;i<l;i++) {
                if(checkboxs[i].checked) {
                 count++
                }
            }
            if(count >= 2) {
               createtr();
            } else {
                alert("Please select atleast two food cuisine");
            } 
        }  
    
     
    
        function createtr() {
            let tr = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")
            let td4 = document.createElement("td")
            let td5 = document.createElement("td")
            let td6 = document.createElement("td")
            let td7 = document.createElement("td")
            let td8 = document.createElement("td")
            td1.innerText = document.getElementById("FirstName").value
            td2.innerText = document.getElementById("LastName").value
            td3.innerText = document.getElementById("Address").value
            td4.innerText = document.getElementById("Pincode").value
            td5.innerText = radiovalue()
            td6.innerText = document.getElementById("State").value
            td7.innerText = document.getElementById("Country").value
            td8.innerText = foodcuisineval();
            tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
            tbody.appendChild(tr);
               
          }  
          
          function formcontrolval() {
              count = 0;
              for(let i = 0;i<=5;i++) {
                if( document.querySelectorAll(".form-control")[i].value.length > 0 ) {
                    count ++;
                }
              };
    
              if(count == 6) {
                  return true;
              } else {
                  return false;
              }
                          
             
          }
    
          function radiobuttonval() {
              let count = 0;
              for(let i = 0;i<=1;i++) {
                if(document.querySelectorAll(".form-check-input-radio")[i].checked) {
                count++
                }
              }
    
              if(count == 1) {
                  return true;
              } else {
                  return false;
              }
          }
    
          function radiovalue() {
              if(document.getElementById("Male").checked) {
                  return document.getElementById("Male").value;
              } else {
                  return document.getElementById("Female").value;
              }
          
            }
    
         function foodcuisineval() {
             let array = document.querySelectorAll(".form-check-input:checked");
             let output = [];
             array.forEach((v,i) => {
               output.push(array[i].id.replace(/_/g, ' '));
             })
             return output;
         }