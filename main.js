import { sendInTlg } from './functions.js';

function print_CV() {
    window.print();
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
buttonPrint.onclick = print_CV ;