document.getElementById('tri-btn').addEventListener('click', function () {
    var inputvalue1 = document.getElementById('tri-in-1').value;
    var inputvalue2 = document.getElementById("tri-in-2").value;

    var total = 0.5 * inputvalue1 * inputvalue2;
    if (isNaN(total)) {
        alert("type a num")

    }

    else {
        console.log(total)
    }
    creatare('triangle', total)
}
)


document.getElementById('rec-btn').addEventListener('click', function () {
    var inputvalue1 = document.getElementById('rec-in-1').value;
    var inputvalue2 = document.getElementById("rec-in-2").value;
    var total = inputvalue1 * inputvalue2
    console.log(total)
    if (isNaN(total)) {
        alert("type a num")

    }

    else {
        console.log(total)
    }
    creatare('rectangle', total)
}
)


document.getElementById('par-btn').addEventListener('click', function () {
    var inputvalue1 = document.getElementById('par-in-1').value;
    var inputvalue2 = document.getElementById("par-in-2").value;
    var total = inputvalue1 * inputvalue2
    console.log(total)
    if (isNaN(total)) {
        alert("type a num")

    }

    else {
        console.log(total)
    }
    creatare('par', total)
}
)


document.getElementById('pen-btn').addEventListener('click', function () {
    var inputvalue1 = document.getElementById('pen-in-1').value;
    var inputvalue2 = document.getElementById("pen-in-2").value;
    var total = 0.5 * inputvalue1 * inputvalue2
    console.log(total)
    if (isNaN(total)) {
        alert("type a num")

    }

    else {
        console.log(total)
    }
    creatare('pen', total)
}
)




document.getElementById('rho-btn').addEventListener('click', function () {
    var inputvalue1 = document.getElementById('rho-in-1').value;
    var inputvalue2 = document.getElementById("rho-in-2").value;
    var total = 0.5 * inputvalue1 * inputvalue2
    console.log(total)
    if (isNaN(total)) {
        alert("type a num")

    }

    else {
        console.log(total)
    }
    creatare('rho', total)
}
)



document.getElementById('ell-btn').addEventListener('click', function () {
    var inputvalue1 = document.getElementById('ell-in-1').value;
    var inputvalue2 = document.getElementById("ell-in-2").value;
    var total = 3.1416 * inputvalue1 * inputvalue2
    console.log(total)
    if (isNaN(total)) {
        alert("type a num")

    }

    else {
        console.log(total)
    }
    creatare('ell', total)
}
)



function creatare(input, input2) {
    var a = document.getElementById('ollist');
    var b = document.createElement('li')
    b.classList.add('ml-10')
    a.appendChild(b)

    var c = document.createElement('p');
    c.textContent = input;
    c.classList.add('inline', 'mr-5')
    b.appendChild(c)



    var d = document.createElement('span')
    d.classList.add('mr-5')
    d.textContent = input2;


    b.appendChild(d)

    var e = document.createElement('button')
    e.classList.add('btn-tag', 'bg-sky-200', 'px-2', 'rounded')
    e.textContent = 'convert to m2'
    b.appendChild(e)
    e.onclick = function () {
        d.textContent = input2 / 10000
    }
}


function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }