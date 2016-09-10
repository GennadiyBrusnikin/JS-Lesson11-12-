$(document).ready(function () {
    
    
    $('.container').myCarousel();

    
    var data = {
        name: 'Брусникин Геннадий Геннадиевич',
        photo: {
            src: 'img/2.jpg',
            alt: 'Моё фото'
        },
        job: 'Студеннт курса GoFrontend Online',
        why: 'Хочу учить фронтенд, потому что:',
        reasons: ['Хочу кардинально изменить свой вид деятельности',
                  'Делать то, что мне приносит удовольствие',
                  'Обеспечить свое счастливое будущее'],
        tel: 'Мой контактный телефон:',
        number: '+38-050-268-52 36',
        fb: 'Мой профиль в:',
        fb_link: 'https://https://www.facebook.com/profile.php?id=100002185978903',
        feedback: 'Мой фидбек:',
        feedback_text: 'Учиться никогда не поздно!'
    };
    
    var profile = $('#profile').html();
    var content = tmpl(profile, data);

    $('.template').append(content);
    
});

