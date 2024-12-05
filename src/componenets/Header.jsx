import "./Header.css"
import Title from "./Title"

export default function Header({children}) {
    return (
        <div class="header-div">
            <div class="header-title-div">
                <Title></Title>
            </div>
            <div class="header-children-div">
                {children}
            </div>
        </div>
    )
}