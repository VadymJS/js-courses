import $ from "jquery";
export default class LoginView {
  constructor(options) {
    console.log("constructor", options);
    this.options = options;
  }

  renderLoginForm($contrainer) {
    console.log("view", $contrainer);
    const $form = this.createForm();
    $contrainer.append($form);
    this.initListeners();
  }
  initListeners() {
    $(".btn-login").on("click", this.onClick);
  }

  onClick = () => {
    this.options.login();
  };
  createForm() {
    return $(
      `<div class="login wrapper">
        <h1>Login</h1>
        <input type="text" placeholder="Enter login" class="form-control" />
        <input type="password" placeholder="Enter password" class="form-control" />
        <button class="btn btn-login">Login</button>
      </div>`
    );
  }
}
