const callSeller = document.getElementById('callSeller');

callSeller.addEventListener('click', () => {
    const allDiv = document.body.children;
    const childNum = allDiv.length
    const waitingNotif = document.querySelector('.waitingDIV');
    const acceptNotif = document.querySelector('.acceptDIV');
    
    waitingNotif.style.display = 'flex';
    for(let i = 0; i < childNum - 4; i++){
        allDiv[i].classList.add('blur')
    }

    const notifTimeout = setTimeout(() => {
        waitingNotif.style.display = 'none';
        acceptNotif.style.display = 'flex';
    }, 5000);

    const closeNotif = setTimeout(() => {
        waitingNotif.style.display = 'none';
        acceptNotif.style.display = 'none';
        for(let i = 0; i < childNum - 3; i++){
            allDiv[i].classList.remove('blur')
        }
    }, 10000);

    waitingNotif.querySelector('button').addEventListener('click', () => {
        waitingNotif.style.display = 'none';
        acceptNotif.style.display = 'none';
        for(let i = 0; i < childNum - 3; i++){
            allDiv[i].classList.remove('blur')
        }
        clearInterval(notifTimeout);
        clearInterval(closeNotif);
    });
});