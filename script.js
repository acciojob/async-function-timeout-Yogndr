//your JS code here. If required.
let text=document.querySelector("#text").value;
let delay=parseInt(document.querySelector("#delay").value);
let button=document.querySelector("#button");
let output=document.querySelector("#output");


button.addEventListener("click",async()=>{
	
	  output.textContent="";
	await new Promise((resolve)=>{

		setTimeout(()=>{
			resolve();
		},delay)
		
	})

	output.textContent=text;
  
})
  