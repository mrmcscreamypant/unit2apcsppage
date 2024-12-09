import Article from "./Article";

const content = (
<>
Last one (I hope you are reading these in order):
<ul>
    <li>(P)hysical</li>
    <li>(N)etwork</li>
</ul>
The physical network is what everything runs on. Originally, 
this was just phone lines (when the ARPANET existed). Now things are 
a lot more complicated.<br></br>
<br></br>
It can be made up of anything from fiber optic cables to foot-thick copper 
wires to lasers from satellites to radio waves (to those who argue that 
computers do not use radio, ever used a phone lately?). It is just pulses sent 
through the medium.<br></br>
<br></br>
Fun fact: I was planning to host this on a Raspberry Pi through a reverse proxy 
service. I switched to Github Pages for a couple reasons, but the "Physical Medium" 
can even be simulated by computers (thats what a VPN (a fancy name for a proxy) is).
</>
)

export default class PNArticle extends Article {
    constructor() {
        super(
            "PN",
            <>Not my area of expertise</>,
            content,
            "pn-article"
        )
    }
}