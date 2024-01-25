// METHOD 1:
function populateDiv(){
    const element = document.getElementById("final-sum");
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    element.innerHTML = parseInt(num1.value)+ parseInt(num2.value);
}

// METHOD 2: HITTING THE BACKEND
// async function populateDiv(){
//     const num1 = document.getElementById("num1");
//     const num2 = document.getElementById("num2");
//     const response = await fetch(`https://sum-server.100xdevs.com/sum?a=${num1}&b=${num2}`);
//     const ans = await response.text();
//     document.getElementById("final-sum").innerHTML = ans;
// }

// DEBOUNCING populateDiv():
let timeout = null;
function debouncePopulateDiv(){
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        populateDiv()
    }, 1000);
}