import Header from '../componenets/Header'

function Banner({title,children}) {
    return (
        <div class="banner-div">
            <div class="banner-title-div">
                {title}
            </div>
            {children}
        </div>
    )
}

export default class Article {
    constructor(title,content) {
        this.title = title
        this.content = content
    }

    banner() {
        return (
            <Banner title={this.title}>
                {this.content}
            </Banner>
        )
    }

    full_page() {
        return (
            <>
                <Header>{this.title}</Header>
                {this.content}
            </>
        )
    }
}