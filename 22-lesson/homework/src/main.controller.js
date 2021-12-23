import login from "./features/login/login.controller";
import layout from "./core/layout/layout.controller";
import header from "./core/header/header.controller";
import chat from "./core/chat/chat.controller";
import user from "./features/user/user.controller";
import $ from "jquery";

export default class MainController {
  constructor($el) {
    this.$root = $el;
    this.loginController = new login(this.$root, {
      onLogin: () => this.userLogon(),
    });
    this.layoutController = new layout(this.$root);
    this.useLogin();
  }

  useLogin() {
    this.clearRoot();
    this.loginController.init();
  }
  userLogon() {
    this.clearRoot();
    this.layoutController.init();
    this.headerController = new header($('.header'), {
      logout: () => this.useLogin(),
    });
    this.renderHeader();
    this.userController = new user($('#main-container'));
    this.renderUser();
    this.chatController = new chat($('#main-container'));
    this.renderChat();
  }

  renderUser() {
    this.userController.init();
  }

  renderChat() {
    this.chatController.init();
  }

  renderHeader() {
    this.headerController.init();
  }

  clearRoot() {
    this.$root.empty();
  }
  useLayout() {}
}
