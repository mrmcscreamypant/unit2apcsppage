import Article from "./Article";

const content = (
<>
<a href="https://xkcd.com/1481/">
    <img src="https://imgs.xkcd.com/comics/api.png" alt="ACCESS LIMITS: Clients may maintain connections to the server for no more than 86,400 seconds per day. If you need additional time, you may contact IERS to file a request for up to one additional second." />
</a>
<hr></hr>
It's literally in the name:
<ul>
    <li>(H)yper</li>
    <li>(T)ext</li>
    <li>(T)ransfer</li>
    <li>(P)rotocol</li>
</ul>

And <a href="https://xkcd.com/2634/"> unless you are using a site from 2010</a>,
there is generally a "S" taked on the end for "Secure".
<br></br><br></br>
Https can transfer other things than just HTML (the hyper text in question),
including images, audio, video, JSON, and raw files. It basically just sends files.
HTTP<i>S</i>, on the other hand, does all that, but with some extra steps involving 
talking to a authority (just a server) to determine that the site they are connecting to 
is indeed the site it says it is.
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