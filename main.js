
const form = document.getElementById('numberForm');
const inputA = document.getElementById('campoA');
const inputB = document.getElementById('campoB');
const messageDiv = document.createElement('div'); 
form.appendChild(messageDiv); 


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const valueA = parseFloat(inputA.value);
    const valueB = parseFloat(inputB.value);


    if (valueB > valueA) {
        messageDiv.textContent = 'O número B é maior que o número A.'; 
        messageDiv.className = 'message'; 
    } else {
        messageDiv.textContent = 'O número B deve ser maior que o número A.'; 
        messageDiv.className = 'message error'; 
    }
});
