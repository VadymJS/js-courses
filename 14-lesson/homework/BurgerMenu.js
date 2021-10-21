class BurgerMenu {
    static CLASSES = {
        MENU_ITEM: 'menu-item',
        BURGER: 'burger-btn',
        BURGER_CONTEINER: 'burger-container',
        IS_ACTIVE: 'is-active',
    }
    constructor(el) {
        this.el = el;
        this.init();
    }

    setClass(item, classes) {
        item.classList.add(classes);
    }

    toggleClass(item, classes) {
        item.classList.toggle(classes);
    }

    removeClass(item, classes) {
        item.classList.remove(classes);
    }

    setHandler() {
        this.el.addEventListener('click', () => this.allClicks(event));
    }

    setClasses() {
        Array.prototype.forEach.call(this.el.children, (e) => {
            this.setClass(e, BurgerMenu.CLASSES.MENU_ITEM);
        });
    }

    createBurger() {
        const burgerEl = document.createElement('div');
        const burgerContainerEl = document.createElement('div');

        this.setClass(burgerEl, BurgerMenu.CLASSES.BURGER);
        this.setClass(burgerContainerEl, BurgerMenu.CLASSES.BURGER_CONTEINER);

        this.el.append(burgerContainerEl);
        burgerContainerEl.append(burgerEl);
    }

    allClicks(e) {
        if(e.target.className === 'burger-container' || e.target.className === 'burger-btn') {
            this.toggleClass(this.el, BurgerMenu.CLASSES.IS_ACTIVE);
        } else if (e.target.className === 'menu-item') {
            this.removeClass(this.el, BurgerMenu.CLASSES.IS_ACTIVE);
        }
    }

    init() {
        this.setClasses();
        this.createBurger();
        this.setHandler();
    }
}
