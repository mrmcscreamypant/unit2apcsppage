import DNSArticle from "./DNS";
import HTTPArticle from "./HTTP";
import TCPUDPArticle from "./TCPUDP";

const articleRegestry = [
    new HTTPArticle(),
    new DNSArticle(),
    new TCPUDPArticle(),
]

export default articleRegestry;