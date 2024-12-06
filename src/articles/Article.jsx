import "./Article.css"

import Header from '../componenets/Header'
import Nav from "../componenets/Nav"

function Banner({title,path,children}) {
    return (
        <Nav to={path} className="banner-a nav-a">
            <div class="banner-title-div">
                {title}
            </div>
            {children}
        </Nav>
    )
}

function Content({children}) {
    return (
        <div class="article-content-div content-div">
            {children}
        </div>
    )
}

function Description({children}) {
    return (
        <div class="article-desc-div content-div">
            {children}
        </div>
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

    FullPage({self}) {
        return (
            <>
                <Header>{self.title}</Header>
                <Description>{self.desc}</Description>
                <Content>{self.content}</Content>
            </>
        )
    }
}