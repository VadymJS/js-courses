import ChatView from "./chat.view";
import("./chat.css");
export default class ChatController {
  constructor($el) {
    this.$container = $el;
    this.view = new ChatView();
  }

  init() {
    this.view.renderChat(this.$container);
  }
}


