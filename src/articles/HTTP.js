import Article from "./Article";

const content = (
<>
HTTP content!
</>
)

export default class HTTPArticle extends Article {
    constructor() {
        super(
            "HTTP(S)",
            <>HTTP is just a file transfer protocol.</>,
            content,
            "http-article"
        )
    }
}