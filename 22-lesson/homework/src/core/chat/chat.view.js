import $ from "jquery";
export default class ChatView {
  constructor() {
  }
  renderChat($contrainer) {
    const $chat = this.createChat();
    $contrainer.append($chat);
  }
  createChat() {
    return $(`
        <div class="chat">
          <span>Chat</span>
        </div>
    `);
  }
}


