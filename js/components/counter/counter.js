class counter {
    constructor(counterData) {
        this.counterData = counterData;
        this.counterDOM = document.querySelector('.counter .row');
        this.counterHeight = this.counterDOM.offsetHeight;
        this.counterTop = this.counterDOM.offsetTop;
        this.isLoaded = false;
        this.addListener();
    }

    addListener() {
        document.addEventListener('scroll', () => {
            if (scrollY + window.outerHeight >= this.counterTop + this.counterHeight && !this.isLoaded) {
                this.loadNumbers()
                this.isLoaded = true;
            }
        })
    }

    loadNumbers() {
        let HTML = '';
        let i = 0;
        for (i = 0; i < this.counterData.data.length; i++) {
            HTML = `<div class="col-12 col-sm-12 col-md-6  col-lg-3">
                <h1 class="countNum" id="countNum${i}"></h1>
                <p class="countText">${this.counterData.data[i].text}</p>
            </div>`;
            this.counterDOM.insertAdjacentHTML('afterbegin', HTML);

            let countNumIdDOM = document.querySelector('#countNum' + i);
            this.animate(countNumIdDOM, 0, this.counterData.data[i].count, 1000);
        }

    }

    animate(obj, initVal, lastVal, duration) {

        let startTime = null;

        //get the current timestamp and assign it to the currentTime variable
        let currentTime = Date.now();

        //pass the current timestamp to the step function
        const step = (currentTime) => {

            //if the start time is null, assign the current time to startTime
            if (!startTime) {
                startTime = currentTime;
            }

            //calculate the value to be used in calculating the number to be displayed
            const progress = Math.min((currentTime - startTime) / duration, 1);

            //calculate what to be displayed using the value gotten above
            obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

            //checking to make sure the counter does not exceed the last value (lastVal)
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
            else {
                window.cancelAnimationFrame(window.requestAnimationFrame(step));
            }
        };

        //start animating
        window.requestAnimationFrame(step);
    }



}

export { counter }