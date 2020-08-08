let huawei = document.querySelector('#huawei')
let alerta = document.querySelector('#error');
huawei.addEventListener('click', error);
alerta.addEventListener('click', error);



function error(){
  Swal.fire({
    icon: 'error',
    title: 'Ups',
    text: 'Sección no habilitada'
  })
}