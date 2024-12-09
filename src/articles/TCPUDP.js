import Article from "./Article";

const content = (
<>
It's literally in the name (yet again):
<ul>
    <li>(T)ransmission</li>
    <li>(C)ontrol</li>
    <li>(P)rotocol</li>
</ul>

The same for UDP:
<ul>
    <li>(U)ser</li>
    <li>(D)atagram</li>
    <li>(P)rotocol</li>
</ul>

I lumped these two together as they are on somewhat parallel layers.
One or the other is often used, but rarely both at the same time (I'm not sure 
whether to be curious or terrified of such a creation).
<br></br><br></br>
TCP:<br></br>
Commonly used in most communication applications (HTTP included). It uses a system of
packet queuing and indexing, and if a packet were to fail, it would retransmit. No encryption
is involved, as that should be handled in an upper layer (thats what "secure" means in
the context of HTTPS). It can be compared to the postal service, a slow but redundant system.
<br></br><br></br>
UDP:<br></br>
If TCP is the postal service, UDP is a fleet of poorly-trained carrier pigeons. You throw 
packets at the recipient and hope that most of them make it. Compared to TCP, however, it is <i>fast</i>. 
Often used in situations where loss of data does not matter, such as video or audio where the 
thing that processes it is a human, which can (mostly) understand damaged information.
</>
)

export default class TCPUDPArticle extends Article {
    constructor() {
        super(
            "TCP/UDP",
            <>There's three ways to do things; the right way, the wrong way, and the Max Power way.</>,
            content,
            "tcpudp-article"
        )
    }
}