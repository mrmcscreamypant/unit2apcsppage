import "./Article.css"

import Header from '../componenets/Header'

function Banner({title,path,children}) {
    return (
        <a href={path} class="banner-a">
            <div class="banner-title-div">
                {title}
            </div>
            {children}
        </a>
    )
}

export default class Article {
    constructor(title,desc,content,slug) {
        this.title = title
        this.desc = desc
        this.content = content
        this.id = slug
    }

    Banner({self}) {
        return (
            <Banner title={self.title} path={self.id}>
                {self.desc}
            </Banner>
        )
    }

    FullPage() {
        return (
            <>
                <Header>{this.title}</Header>
                {this.content}
            </>
        )
    }
}