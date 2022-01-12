


document.querySelector("#grandparent").addEventListener('click',
  () => {
    console.log("grandparent click")
    // e.stopImmediatePropagation()
  }, false)//  useCapture parameter is true so it will act as a event capturing


document.querySelector("#parent").addEventListener('click',
  (e) => {
    e.stopImmediatePropagation()
    console.log("Parent click")

  }, false)//  useCapture parameter is true so it will act as a event capturing
document.querySelector("#child").addEventListener('click',
  () => {
    console.log("Click click")

  }, false)//  useCapture parameter is false so it will act as a event bubbling