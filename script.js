//your JS code here. If required.

let button=document.querySelector("#button");
let output=document.querySelector("#output");


button.addEventListener("click",async()=>{

	let text=document.querySelector("#text").value;
let delay=parseInt(document.querySelector("#delay").value);
	  output.textContent="";
	await new Promise((resolve)=>{

		setTimeout(()=>{
			resolve();
		},delay)
		
	})

	output.textContent=text;
  
})
  