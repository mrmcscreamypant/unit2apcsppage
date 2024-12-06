import { Route } from "react-router";
import articleRegestry from "../articles/regestry";

function RouteRegestry() {
    return articleRegestry.map(
        (Item) => {
            return (<Route path={Item.id} element={<Item.FullPage self={Item} />} />)
        }
    )
}

export default RouteRegestry