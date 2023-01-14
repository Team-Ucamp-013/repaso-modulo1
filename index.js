const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit',guardar)

function guardar(e){
e.preventDefault()

 let texto = document.getElementById('textotext').value 

let inputValue = ({
    "texto": texto
})

let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []
console.log(inputValue)
datos.push(inputValue)
console.log(JSON.stringify(datos))
localStorage.setItem('valores', JSON.stringify(datos))

document.getElementById('textotext').value = ''

render()
}

function render(){
    console.log(localStorage.getItem('valores'))

    let lista = document.getElementById('lista')
    lista.innerHTML = `
    <table>
    <thead>
    <th> Lo haremos hoy (: </th>
    </thead>
    </table>
    `

    let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []

    datos.forEach((element,index) => {
        lista.innerHTML += `
        <td>${element.texto}  </td>
        <td>  <button onclick="editar(${index})" class="btn btn-warning"> Editar  </button> </td>
        <td>  <button onclick="borrar(${index})" class="btn btn-danger"> Borrar  </button> </td>
        `
    });

}

function borrar(position){
    let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []
    console.log(datos.splice(position,1))
    console.log(JSON.stringify(datos))
    localStorage.setItem('valores', JSON.stringify(datos))
    render()
}

function editar(ps){
    let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []
    for(let i = 0; i <= datos.length ; i++){
        if(i == ps){
            document.getElementById('textotext').value = datos[i].texto

            let nombre = datos[i].texto

            lista.innerHTML = `
            <td> ${nombre}  </td>
            <td><button onclick="reguardar(${i})" class="btn btn-primary"> Guardar </button> </td>
            <td><button onclick="salir(this)" class="btn btn-danger"> Salir</button></td>
            `
        }
    }

}

function reguardar(i){
    let datos = JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : []
     
    let reinput = ({
        "texto": document.getElementById('textotext').value
    })

    datos[i] = reinput
    console.log(datos[i])
    localStorage.setItem('valores', JSON.stringify(datos))

    document.getElementById('textotext').value = ''

    render()
}


function salir(e){
 e.parentElement.remove()
 render()
}



render()