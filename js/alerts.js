
 let alerta =   document.querySelector('service');

 alerta.addEventListener('click', mantenimiento);

 function mantenimiento(){
    Swal.fire({
        icon: 'error',
        title: 'Ups',
        text: 'No te asustes si algo no anda. Estamos haciendo cambios en nuestra web'
      })

 };

