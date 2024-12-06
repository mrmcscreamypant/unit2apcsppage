import Article from "./Article";

const content = (
<>
Once again, it's in the name:
<ul>
    <li>(D)omain</li>
    <li>(N)ame</li>
    <li>(S)ervice</li>
</ul>

//TODO
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