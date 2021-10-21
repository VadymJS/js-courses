class Tabs {
    static CLASSES = {
        TITLE: 'tabs-title',
        BODY: 'tabs-body',
        TITLE_ITEM: 'tabs-title-item',
        BODY_ITEM: 'tabs-body-item',
        IS_ACTIVE: 'is-active'
    }
    index = 0;
    constructor (el) {
        this.el = el;
        this.init();
    }

    setClass(item, classes) {
        item.classList.add(classes);
    }

    removeClass(item, classes) {
        item.classList.remove(classes);
    }

    setClasses() {
        const [title, body] = this.el.children;
        this.setClass(title, Tabs.CLASSES.TITLE);
        this.setClass(body, Tabs.CLASSES.BODY);

        Array.prototype.forEach.call(title.children, (e) => {
            this.setClass(e, Tabs.CLASSES.TITLE_ITEM);
            this.setClass(e, `tab${this.index}`);
            this.index++;
        });

        Array.prototype.forEach.call(body.children, (e) => {
            this.setClass(e, Tabs.CLASSES.BODY_ITEM);
        });
    }

    setHandler(e) {
        e.addEventListener('click', () => this.allClicks(event));
    }

    allClicks(event) {
        const tabTitleEl = document.querySelectorAll('.tabs-title-item');
        const tabBodyEl = document.querySelectorAll('.tabs-body-item');

        if (event.target.classList.contains('tabs-title-item')) {

            for (let i = 0; i < tabTitleEl.length; i++) {
                this.removeClass(tabTitleEl[i], Tabs.CLASSES.IS_ACTIVE);
                this.setClass(event.target, Tabs.CLASSES.IS_ACTIVE);

                for (let g = 0; g < tabBodyEl.length; g++) {
                    this.removeClass(tabBodyEl[g], Tabs.CLASSES.IS_ACTIVE);

                    if (g === parseFloat(event.target.className.match(/\d+/))) {
                        this.setClass(tabBodyEl[g], Tabs.CLASSES.IS_ACTIVE);
                    }
                }
            }
        }
    }

    init() {
        this.setClasses();
        this.setHandler(this.el);
    }
}