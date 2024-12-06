import Article from "./Article";
import Nav from "../componenets/Nav";

function CitationNeeded() {
    return (
        <sup><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed">
            [citation needed]
        </a></sup>
    )
}

const content = (
<>
This is getting old now:
<ul>
    <li>(I)nternet</li>
    <li>(P)rotocol</li>
</ul>
This is what the <Nav to="/dns-article">DNS</Nav> system returns. It is simply a
"unique" identifier that can be matched to "a" (if this were true, ARP spoofing 
would not exist) device.

IPv4 is currently<CitationNeeded /> the most widely used IP, but IPv6 is catching 
up<CitationNeeded />. This is a good thing, as we have run out of IPv4 addresses<CitationNeeded />
<br></br>
<br></br>
IPv4 is commonly in the format of:<br></br>
xxx.xxx.xxx.xxx<br></br>
where x is a base-10 digit. This allow for roughly 4.3 billion 
addresses.<br></br>
<br></br>
IPv6 looks something like this:<br></br>
xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx<br></br>
where x is a hexadecimal digit. This allows for roughly 
2<sup>128</sup> ~3.4*10<sup>38</sup>) digits.<br></br>
<br></br>
We won't run out of IPv6 anytime soon.
</>
)

export default class IPArticle extends Article {
    constructor() {
        super(
            "IP",
            <>v4, v6, etc.</>,
            content,
            "ip-article"
        )
    }
}