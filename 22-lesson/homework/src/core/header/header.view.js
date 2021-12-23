import $ from "jquery";
export default class HeaderView {
  constructor(options) {
    this.options = options;
  }
  renderHeader($contrainer) {
    const $header = this.createHeader();
    $contrainer.append($header);
    this.initListeners();
  }
  initListeners() {
    $('.header').on('click', '.btn-chat', this.openChat);
    $('.header').on('click', '.btn-create-user', this.openUser);
    $('.header').on('click', '.btn-logout', this.logout);
  }
  openChat = () => {
    console.log('chat');
  };
  openUser = () => {
    console.log($('.user'))
    $('.user').toggleClass('is-active');
  };
  logout = () => {
    this.options.logout();
  };
  createHeader() {
    return $(`
        <button class="btn btn-chat">Chat</button>
        <button class="btn btn-create-user">Create user</button>
        <button class="btn btn-logout">Logout</button>
    `);
  }
}


