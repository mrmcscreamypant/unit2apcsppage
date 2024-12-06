import { Link } from "react-router";

export default function Nav({to,css_class,children}) {
    return (
        <Link to={to} class={css_class} viewTransition>
            {children}
        </Link>
    )
}