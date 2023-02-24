import { sendInTlg } from './functions.js';

function print_CV() {
    let img = document.createElement('img');
    img.src = "./Print_CV.png";
    img.width = 0;
    document.body.append(img);
    const win = window.open();
    win.document.write('<img src="./Print_CV.png" />');
    setTimeout(() => {
        win.print();
        img.remove();
        win.close();
    },10);
}
        
const sendMessage = (e) => {
    if (e.target.tagName != 'BUTTON') return;
    sendInTlg(e.currentTarget.nameUser.value + '/' + e.currentTarget.contact.value + '/' + e.currentTarget.content.value + '/');
    e.currentTarget.nameUser.value = '';
    e.currentTarget.contact.value = '';
    e.currentTarget.content.value = '';
}
const buttonSend = document.querySelector(".feedback_formFeedback");
buttonSend.onclick = sendMessage;
const buttonPrint = document.querySelector('.print');
buttonPrint.onclick= print_CV ;