class offeredServices {
    constructor(data) {
        this.data = data;
        this.selector = document.querySelector('.offered-services')
        this.render();
    }

    render() {
        let i = 0;
        let counter = this.data.list.length < this.data.maxItems ? this.data.list.length : this.data.maxItems;
        for (i = 0; i < counter; i++) {
            let link = this.data.list[i].link;
            let icon = this.data.list[i].icon;
            let text = this.data.list[i].text;


            this.selector.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
            <div id="icons"><i class="${icon}">
            </i>
            </div>
            <a href="#">${link}
            </a>
            <p>${text}</p>
            </div>`;
        }
    }
}


export { offeredServices }
