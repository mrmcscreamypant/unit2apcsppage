import Article from "./Article";

const content = (
<>
DNS content!
</>
)

export default class DNSArticle extends Article {
    constructor() {
        super(
            "DNS",
            <>The worst possible way to solve a problem... except for all the other ways</>,
            content,
            "dns-article"
        )
    }
}