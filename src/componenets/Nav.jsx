import { Link } from "react-router";

export default function Nav({to,className,children}) {
    return (
        <Link to={to} className={className} viewTransition>
            {children}
        </Link>
    )
}