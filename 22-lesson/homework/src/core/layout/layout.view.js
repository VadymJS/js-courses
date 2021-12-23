import $ from "jquery";
export default class LayoutView {
  constructor() {
  }
  renderLayout($contrainer) {
    const $layout = this.createLayout();
    $contrainer.append($layout);
    this.initListeners();
  }
  initListeners() {
    // $('.layout-container').on('click', '.btn-chat', this.onChatClick);
  }
  onChatlick = () => {
    // this.options.login();
    console.log('123');
  };
  createLayout() {
    return $(`
    <div class="layout-container">
      <div class="header"></div>
      <div class="wrapper">
        <div id="main-container"></div>
      </div>
    </div>
    `);
  }
}
