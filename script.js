$(document).ready(function () {
    $('.dark').click(function () {
        $('footer').toggleClass('fond');

        $('body,nav').toggleClass('active');
        $('ion-icon').toggleClass('change');
        $('header,section,p,').toggleClass('blanc');
    });
});
// rot = document.getElementById('change');
    // rot.style.color = 'white';

// document.getElementById('change').addEventListener(
//     "click" ,()=>{
//         rot = document.getElementById('change');
//     rot.style.color = 'white';

//     }
// );