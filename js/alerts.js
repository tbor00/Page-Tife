

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
}








    Swal.fire({
        icon: 'warning',
        title: 'Ey!',
        text: 'No te asustes si algo anda mal, estamos haciendo cambios en nuestra web'
      })







