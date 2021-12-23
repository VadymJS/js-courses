import UserView from "./user.view";
import("./user.css");
export default class UserController {
  constructor($el) {
    this.$container = $el;
    this.view = new UserView();
  }

  init() {
    this.view.renderUser(this.$container);
  }
}


