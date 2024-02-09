// Main page

var submit = document.getElementById('submitBtn');
submit.disabled = true;
submit.classList.toggle('disabled');

var callbuttonSubmit = false;

function enableSubmit() {
    if (!callbuttonSubmit) {
        submit.disabled = false;
        submit.classList.toggle('active');
        callbuttonSubmit = true;
    } 
}
var buttons = document.querySelectorAll('.clickB');

function thanks(buttonSelected) {
    window.location.href = `thanks.html?${buttonSelected}`

  };


buttons.forEach(function(button) {
button.addEventListener('click', enableSubmit);
button.addEventListener('click', function() {
console.log(button.textContent);

document.getElementById('submitBtn').addEventListener('click', function(){
   thanks(button.textContent);
 
})

});
});

buttons.forEach(function(button) {
  button.addEventListener('click', function() {

    buttons.forEach(function(b) {
      b.classList.remove('selected');
    });
    button.classList.add('selected');
  });
});





  



