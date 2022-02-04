const PageTemplate = require("../lib/Page");

class PageBlog extends PageTemplate {
    constructor(){
        super();
        this.pageCSSfileName = 'blog';
    }

    mainHTML(){
        return `<section class="container blog-list">
        <h1 class="row title">My blog</h1>
        <div class="row empty-list">Seems like the blog is empty. Come back later, please! 💖</div>
        <div class="row list">
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
            <article class="post">
                <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                <h2 class="post-title">Blog post title</h2>
                <p class="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, deleniti...</p>
                <a href="./good-morning/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
            </article>
        </div>
        <div class="row">
            BLOG PAGINATION
        </div>
    </section>`
    }

}

module.exports = PageBlog;