import HeaderView from "./header.view";
import("./header.css");
export default class HeaderController {
  constructor($el, options) {
    this.options = options;
    this.$container = $el;
    this.view = new HeaderView({ logout: () => this.logout() });
  }

  init() {
    this.view.renderHeader(this.$container);
  }

  logout() {
    this.options.logout();
  }
}


