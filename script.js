//your JS code here. If required.
let text=document.querySelector("#text");
let delay=document.querySelector("#delay");
let button=document.querySelector("#button");
let output=document.querySelector("#output");


button.addEventListener("click",()=>{
	async function sol(()=>{

	   await setTimeout(()=>{
		  output.textContent=text.value;
	  },delay.value)
	  
  })
})
  