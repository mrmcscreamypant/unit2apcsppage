import articleRegestry from "../articles/regestry";

export default function RegestryList() {
    return articleRegestry.map(
        (Item) => {
            return (<Item.Banner self={Item}></Item.Banner>)
        }
    )
}