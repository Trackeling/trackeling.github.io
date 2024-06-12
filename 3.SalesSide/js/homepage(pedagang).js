document.addEventListener('DOMContentLoaded', function() {
    const modeSwitch = document.getElementById('modeSwitch');
    const onDiv = document.getElementById('on');
    const offDiv = document.getElementById('off');

    const onDiv2 = document.getElementById('on2');
    const offDiv2 = document.getElementById('off2');

    const no_panggilan = document.getElementById('gak-ada-panggilan')
    const ad_panggilan = document.getElementById('ada-panggilan')

    modeSwitch.addEventListener('change', function() {
        if (this.checked) {
            onDiv.style.display = 'flex';
            offDiv.style.display = 'none';

            onDiv2.style.display = 'block';
            offDiv2.style.display = 'none';

            no_panggilan.style.display = 'none';
            ad_panggilan.style.display = 'flex'
        } else {
            onDiv.style.display = 'none';
            offDiv.style.display = 'flex';

            onDiv2.style.display = 'none';
            offDiv2.style.display = 'block';

            no_panggilan.style.display = 'flex';
            ad_panggilan.style.display = 'none'
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const modeSwitch = document.getElementById('modeSwitch');
    const profilBtn = document.getElementById('profilbtn');

    function updateProfileBtnLink() {
        if (modeSwitch.checked) {
            profilBtn.setAttribute('onclick', "location.href = 'profilePedagang.html'");
        } else {
            profilBtn.setAttribute('onclick', "location.href = 'profilePedagangTutup.html'");
        }
    }

    updateProfileBtnLink();
    modeSwitch.addEventListener('change', updateProfileBtnLink);
});


const allDiv = document.body.children;
const childNum = allDiv.length
const waitingNotif = document.querySelector('.waitingDIV');
    

const notifTimeout = setTimeout(() => {
    waitingNotif.style.display = 'flex';
    for(let i = 0; i < childNum - 2; i++){
        allDiv[i].classList.add('blur')
    }
}, 5000);

const closeNotif = setTimeout(() => {
    waitingNotif.style.display = 'none';
    for(let i = 0; i < childNum - 2; i++){
        allDiv[i].classList.remove('blur')
    }
}, 10000);

waitingNotif.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        waitingNotif.style.display = 'none';
        for(let i = 0; i < childNum - 2; i++){
            allDiv[i].classList.remove('blur')
        }
        clearInterval(notifTimeout);
        clearInterval(closeNotif);
    });
})