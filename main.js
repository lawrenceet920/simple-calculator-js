// Ethan Lawrence
// April 19 2024
// JS simple calculator
document.getElementById('btn').addEventListener('click', start);

function start() {
    // Imput
    const fullName = 'Ethan Lawrence';
    const date = 'April 19 2024';
    const project = 'JS simple calculator';

    const num1 = prompt('Enter Number 1');
    const num2 = prompt('Enter Number 2');
    // Process 
    // Using parse int prevents it from thinking it is a string, or from not entering a number
    const sol1 = parseInt(num1) + parseInt(num2);
    const sol2 = parseInt(num1) - parseInt(num2);
    const sol3 = parseInt(num1) * parseInt(num2);
    const sol4 = parseInt(num1) / parseInt(num2);

    // Output

    console.log (fullName);
    console.log (date);
    console.log (project);

    console.log (`Output`);
    console.log (`${num1} + ${num2} = ${sol1}`);
    console.log (`${num1} - ${num2} = ${sol2}`);
    console.log (`${num1} * ${num2} = ${sol3}`);
    console.log (`${num1} / ${num2} = ${sol4}`);

    // Creates output box
    document.getElementById('output1').innerHTML = `${num1} + ${num2} = ${sol1}`;
    document.getElementById('output2').innerHTML = `${num1} - ${num2} = ${sol2}`;
    document.getElementById('output3').innerHTML = `${num1} * ${num2} = ${sol3}`;
    document.getElementById('output4').innerHTML = `${num1} / ${num2} = ${sol4}`;

    console.log ('**End Of Script**');
}