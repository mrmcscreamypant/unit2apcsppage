import "./Article.css"

import { Link } from "react-router"

import Header from '../componenets/Header'

function Banner({title,path,children}) {
    return (
        <Link to={path} class="banner-a nav-a">
            <div class="banner-title-div">
                {title}
            </div>
            {children}
        </Link>
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