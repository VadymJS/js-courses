const users = [
    {
      id: 1,
      name: 'Bob',
    },
    {
      id: 2,
      name: 'Djoe',
    },
    {
      id: 3,
      name: 'Iren',
    },
    {
      id: 4,
      name: 'Tom',
    },
    {
      id: 5,
      name: 'Helen',
    },
    {
      id: 6,
      name: 'Nike',
    },
    {
      id: 7,
      name: 'Matias',
    },
];
const messages = [];

const $chat = $('.chat');
const $chatUsers = $('.chat-users');
const $chatMessages = $('.chat-main-messages');
const $chatInput = $('.chat-input');
const $chatBtnSend = $('.btn-chat-send');
let i = 1;

function renderUsers () {
    users.forEach((user) => {
        $chatUsers.append(`<div class='user'>
                                <span>${user.name} </span><span>id: ${user.id}</span>
                            </div>`);
    });
}

function renderMessages () {
    messages.forEach((mes) => {
        $chatMessages.append(`<div class='message'>
                                <span>${mes.text}</span>
                                <div>
                                  <span>${mes.sendDate}</span>
                                  <span>${mes.userName}</span>
                                </div>
                                </div>`);
    });
}

function clearMessages () {
    $chatMessages.empty();
}

function clearInput () {
  $chatInput[0].value = '';
}

function handleEvents () {
    $chat.on('click', '.btn-chat-send', sendMessage);
}

function sendMessage () {
  if($chatInput[0].value.trim() !== '') {
    let message = {
      id: null,
      userName: null,
      userId: null,
      sendDate: null,
      text: null
  }
  message.id = i++;
  message.userName = users[0].name;
  message.userId = users[0].id;
  message.sendDate = '11.11.11';
  message.text = $chatInput[0].value;
  if (message.userId === users[0].id) {
      // $('.message').classList.add('is-yours');
  }
  messages.push(message);
  clearInput();
  clearMessages();
  renderMessages();
  } 
}

function init () {
    renderUsers();
    renderMessages();
    handleEvents();
}

init();






  
  