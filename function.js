document.getElementById('tri-btn').addEventListener('click', function () {
    var firstInput = document.getElementById('tri-input').value;
    var secoundInput = document.getElementById('tri-input2').value;
    var calculate = .5 * firstInput * secoundInput;
    createistu('tringle', calculate)

    console.log(calculate)
})


document.getElementById('ell-btn').addEventListener('click', function () {
    var firstInput = document.getElementById('ell-input').value;
    var secoundInput = document.getElementById('ell-input2').value;
    var calculate = 3.1416 * firstInput * secoundInput;
    createistu("ellipse", calculate)
    console.log(calculate)
})


document.getElementById('par-btn').addEventListener('click', function () {
    var firstInput = document.getElementById('par-input').value;
    var secoundInput = document.getElementById('par-input2').value;
    var calculate = firstInput * secoundInput;
    createistu('par', calculate)
    console.log(calculate)
})

document.getElementById('pen-btn').addEventListener('click', function () {
    var firstInput = document.getElementById('pen-input').value;
    var secoundInput = document.getElementById('pen-input2').value;
    var calculate = .5 * firstInput * secoundInput;
    createistu('pen', calculate)
    console.log(calculate)
})

document.getElementById('rec-btn').addEventListener('click', function () {
    var firstInput = document.getElementById('rec-input').value;
    var secoundInput = document.getElementById('rec-input2').value;
    var calculate = .5 * firstInput * secoundInput;
    createistu('rec', calculate)
    console.log(calculate)
})

document.getElementById('rho-btn').addEventListener('click', function () {
    var firstInput = document.getElementById('rho-input').value;
    var secoundInput = document.getElementById('rho-input2').value;
    var calculate = .5 * firstInput * secoundInput;
    createistu('rho', calculate)

    console.log(calculate)
})






function createistu(input, input2) {
    var a = document.getElementById('olList');
    var b = document.createElement('li')
    b.classList.add('liST')
    a.appendChild(b)

    var c = document.createElement('p');
    c.textContent = input;
    c.classList.add('p-tag')
    b.appendChild(c)



    var d = document.createElement('span')
    d.textContent = input2;


    b.appendChild(d)

    var e = document.createElement('button')
    e.classList.add('btn-tag')
    e.textContent = 'convert to m2'
    b.appendChild(e)
    e.onclick = function () {
        d.textContent = input2 / 10000
    }
}