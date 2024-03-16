var imgArr= [{

  dp:"https://images.unsplash.com/photo-1567591370504-80142b28f1c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3Jpc2huYXxlbnwwfHwwfHx8MA%3D%3D", story:""},
  
  {dp:"https://images.unsplash.com/photo-1590228947699-5f1fa1d86458?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a3Jpc2huYXxlbnwwfHwwfHx8MA%3D%3D" , story:"https://images.unsplash.com/photo-1631689644455-b570154363e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D" }, 
  
  {dp:"https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D" ,story:"https://images.unsplash.com/photo-1567878673942-be055fed5d30?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D"}, 
  
  {dp:"https://plus.unsplash.com/premium_photo-1678597956152-4d92c3f4fc8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D" , story: "https://images.unsplash.com/photo-1634698813343-e2b78707c06b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D"},
  

  
  {dp:"https://images.unsplash.com/photo-1608229772443-c538c890248b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D" , story: "https://images.unsplash.com/photo-1566890910598-c5768889e83e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D"},

  
  {dp:"https://plus.unsplash.com/premium_photo-1678597956152-4d92c3f4fc8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D" , story: "https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D"},

  
  {dp:"https://plus.unsplash.com/premium_photo-1674898513939-10e6334cac31?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFkaGElMjBhbmQlMjBrcmlzaG5hfGVufDB8fDB8fHww" , story:"https://images.unsplash.com/photo-1624030275207-77bac1c83be3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFkaGElMjBhbmQlMjBrcmlzaG5hfGVufDB8fDB8fHww" }, 


  
  {dp:"https://media.istockphoto.com/id/1054775834/photo/lord-krishna-with-radha.webp?b=1&s=170667a&w=0&k=20&c=Hp4W1tjF6pr3J8owZ4SoTRgtsOCHHnqSO2vjnEru1mg=" , story:"https://plus.unsplash.com/premium_photo-1674898513939-10e6334cac31?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFkaGElMjBhbmQlMjBrcmlzaG5hfGVufDB8fDB8fHww" }, 


]


var clutter= ""
imgArr.forEach(function(elem,idx){
  clutter += `<div class="story">
  <img id="${idx}"src="${elem.dp}" alt="">
</div>`

})

var imgselecter= document.querySelector("#stories");
imgselecter.innerHTML=clutter;
imgselecter.addEventListener("click",function(dets){
  var fullScreen= document.querySelector("#full_screenStory").style.display= "block";
  document.querySelector("#full_screenStory").style.backgroundImage = `url(${imgArr[dets.target.id].story})`
  var plusIcon= document.querySelector("#main").style.display="none"

  setTimeout(function(){
document.querySelector("#full_screenStory").style.display="none";
var plusIcon= document.querySelector("#main").style.display="block"
imgselecter.addEventListener("click",function(){
 imgArr[dets.id].story[0].plusIcon.display="block";
})


  },2000)
})