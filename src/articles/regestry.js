import DNSArticle from "./DNS";
import HTTPArticle from "./HTTP";
import IPArticle from "./IP";
import PNArticle from "./PN";
import TCPUDPArticle from "./TCPUDP";

const articleRegestry = [
    new HTTPArticle(),
    new DNSArticle(),
    new TCPUDPArticle(),
    new IPArticle(),
    new PNArticle()
]

export default articleRegestry;