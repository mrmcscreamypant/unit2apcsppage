import Article from "./Article";

const content = (
<>
HTML content!
</>
)

export default class HTMLArticle extends Article {
    constructor() {
        super(
            "HTML",
            <>HTML is <i>not</i> a programming language.</>,
            content,
            "html-article"
        )
    }
}