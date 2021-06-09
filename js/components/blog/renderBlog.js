function renderBlog(selector) {

    const DOM = document.querySelector(selector);

    const HTML = `<div class="row sectionRow">
            <div class="col-12 col-md-6 ml-md-3 col-lg-8 ml-lg-2">
                <h1 class="section-title">Latest Posts From Our Blog</h1>
                <p class="section-description">You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business</p>
            </div>
        </div>
        <div class="row blogRow">
            <div class="col-12 col-md-4 col-lg-4 ">
                <div class="imgZoom">
                    <img src="./img/blog1.jpg" class="zImg container-fluid " alt="bigImg">
                </div>
                <div class="imgDes">
                    <div class="author">
                        <img src="./img/author.jpg" alt="smallImg">
                        <p>Mark WIENS</p>
                    </div>
                    <div class="coments">13Th Dec <i class="fa fa-heart-o"></i>13 <i class="fa fa-comment-o"></i> 04</div>
                </div>
                <a href="#" class="blogLink">BREAK THROUGH SELF DOUBT AND FEAR</a>
                <p class="blogUnder">Dream interpretation has many forms; it can be done be done for the sake of fun, hobby or can be taken up as a serious career.</p>

            </div>
            <div class="col-12 col-md-4 col-lg-4  blogPost">
                <div class="imgZoom">
                    <img src="./img/blog2.jpg" class="zImg container-fluid " alt="bigImg">
                </div>
                <div class="imgDes">
                    <div class="author">
                        <img src="./img/author.jpg" alt="smallImg">
                        <p>Mark WIENS</p>
                    </div>
                    <div class="coments">13Th Dec <i class="fa fa-heart-o"></i>13 <i class="fa fa-comment-o"></i> 04</div>
                </div>
                <a href="#" class="blogLink">PORTABLE FASHION FOR YOUNG WOMEN</a>
                <p class="blogUnder">You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving.</p>

            </div>
            <div class="col-12 col-md-4 col-lg-4 class=" blogPost">
                <div class="imgZoom">
                    <img src="./img/blog 3.jpg" class="zImg container-fluid " alt="bigImg">
                </div>
                <div class="imgDes">
                    <div class="author">
                        <img src="./img/author.jpg" alt="smallImg">
                        <p>Mark WIENS</p>
                    </div>
                    <div class="coments">13Th Dec <i class="fa fa-heart-o"></i>13 <i class="fa fa-comment-o"></i> 04</div>
                </div>
                <a href="#" class="blogLink">DO DREAMS SERVE AS A PREMONITION</a>
                <p class="blogUnder">So many of us are demotivated to achieve anything. Such people are not enthusiastic about anything. They don’t want to work involved.</p>

            </div>
        </div>`;

    DOM.innerHTML = HTML;


}

export { renderBlog }