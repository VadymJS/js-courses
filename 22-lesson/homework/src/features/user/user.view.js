import $ from "jquery";
export default class UserView {
  constructor() {
  }
  renderUser($contrainer) {
    const $user = this.createUser();
    $contrainer.append($user);
  }
  createUser() {
    return $(`
        <div class="user">
          <span>User</span>
        </div>
    `);
  }
}


