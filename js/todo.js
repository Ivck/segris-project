let input=document.querySelector('input');
					let button=document.querySelector('button');
					let ul=document.querySelector('ul');
					let butn1=document.getElementById('butn1');
					let i;
					let mas=[];
					
					
					button.addEventListener('click',function(){
				
					mas.push(input.value);
					localStorage.setItem('task',mas);
					
					
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
					input.value=""
					
					});	
					let newmas=localStorage.getItem('task').split(',');
					for(var newi=0;newi!=newmas.length;newi++){
					let div1=document.createElement('div');
					document.body.appendChild(div1);
					div1.className +='location'
					let newdiv=document.createElement('div');
					ul.appendChild(newdiv);
					let newinp= document.createElement("input");
					
					newinp.type = "checkbox";
					newdiv.appendChild(newinp);
					let newli=document.createElement('Li');
	
					newli.innerHTML=newmas[newi];
					newli.style.display='inline-block'
					newdiv.appendChild(newli);
						

					butn1.addEventListener('click',function(){
						if (newinp.checked) {
							div1.appendChild(newinp);
							div1.appendChild(newli);
							newinp.disabled=true;

					}	
					});

				
					}
				
