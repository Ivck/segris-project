let input=document.querySelector('input');
					let button=document.querySelector('button');
					let ul=document.querySelector('ul');
					let butn1=document.getElementById('butn1');
					
					var mas=[];
					if (localStorage.getItem('task')!=undefined) {
					mas=JSON.parse(localStorage.getItem('task'));
						
				
					for(var i=0;i!=mas.length;i++){
					let div1=document.createElement('div');
					document.body.appendChild(div1);
					div1.className +='location'
					let div=document.createElement('div');
					ul.appendChild(div);
					let inp= document.createElement("input");
					
					inp.type = "checkbox";
					div.appendChild(inp);
					let li=document.createElement('Li');
	
					li.innerHTML=mas[i];
					li.style.display='inline-block'
					div.appendChild(li);
					butn1.addEventListener('click',function(){
						if (inp.checked) {
							div1.appendChild(inp);
							div1.appendChild(li);
							inp.disabled=true;

					}	
					});
				
					}
				}
					button.addEventListener('click',function (){
					if (input.value!="") {mas.push(input.value);
					
					
				
					let div=document.createElement('div');
					ul.appendChild(div);

					let div1=document.createElement('div');
					document.body.appendChild(div1);
					div1.className +='location'
					
					let inp= document.createElement("input");
					inp.type = "checkbox";
					div.appendChild(inp);


					let li=document.createElement('Li');
					li.innerHTML=input.value
					li.style.display='inline-block'
					div.appendChild(li);

					butn1.addEventListener('click',function(){
					if (inp.checked) {
					div1.appendChild(inp);
					div1.appendChild(li);
					inp.disabled=true;

					}	
					});

					localStorage.setItem('task',JSON.stringify(mas));
					
					input.value=""
					}
					
					});	
							
					
				
