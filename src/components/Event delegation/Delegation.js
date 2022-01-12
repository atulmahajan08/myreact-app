// document.querySelector("#category").addEventListener('click',
//   (e) => {
//     // console.log("category parent clicked");
//     console.log(e.target.id);
//     if(e.target.tagName == 'LI')
//     window.location.href= '/'+e.target.id
//     })

// // document.querySelector("#parent").addEventL e so it will act as a event bubbling

document.querySelector("#form").addEventListener('click',(e) => {
  console.log(e); 
  // due to uppercase we can set a functionality input must have uppercase
  if(e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
})
