let input=document.querySelector('input');
					let button=document.querySelector('button');
					let ul=document.querySelector('ul');
					let butn1=document.getElementById('butn1');
					let i;
					let mas=[];
					button.addEventListener('click',function(){
					if (input.value!='') {
			
					let div=document.createElement('div');
					ul.appendChild(div);

					let inp= document.createElement("input");
					inp.type = "checkbox";
					div.appendChild(inp);


					let li=document.createElement('Li');
					li.innerHTML=input.value
					li.style.display='inline-block'
					div.appendChild(li);
					li.addEventListener('click',function(){
						if (li.style.textDecoration==="") {
							li.style.textDecoration="line-through";
						}else{
							li.style.textDecoration=""
						}
						
					});
					butn1.addEventListener('click',function(){
						if (inp.checked) {li.remove()
							inp.remove();
					}	
					});	
		
				
					mas.push(input.value);
					for (i in mas){
						i++;
					
					}
					
					input.value=''				
					
					
					localStorage.setItem('task',mas);
					
					
					

					}
					

					});

					let newmas=localStorage.getItem('task').split(',');		
					
					for(var newi=0;newi!=newmas.length;newi++){
					let newdiv=document.createElement('div');
					ul.appendChild(newdiv);
					let newinp= document.createElement("input");
					
					newinp.type = "checkbox";
					newdiv.appendChild(newinp);
					let newli=document.createElement('Li');
	
					newli.innerHTML=newmas[newi];
					newli.style.display='inline-block'
					newdiv.appendChild(newli);
						newli.addEventListener('click',function(){
							if (newli.style.textDecoration==="") {
								newli.style.textDecoration="line-through";
							}else{
								newli.style.textDecoration="";
							}
						
					});

					
					butn1.addEventListener('click',function(){
						if (newinp.checked) {newli.remove()
							newinp.remove();
							
					}	
					});	

					}
