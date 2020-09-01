

let huawei = document.querySelector('#huawei')
let alerta = document.querySelector('#error');
alerta.addEventListener('click', error);
huawei.addEventListener('click', error);



function error(){
  Swal.fire({
    icon: 'error',
    title: 'Ups',
    text: 'Todavía no tienes acceso a esta sección'
  })
};







