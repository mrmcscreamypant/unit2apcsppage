import './Title.css'

const motds = [
    <>This looks like it was made in the 90's (yet uses modern web tech)</>,
    <>(A)ll (A)bout (N)etworking</>,
    <>Screw you, npm</>,
    <>first commit</>,
    "f'{motd}'",
    <>You do <i>not</i> want to know what is hosting this</>
]

function choice(l) {
    return l[Math.floor(Math.random()*l.length)]
}

export default function Title() {
    const motd = choice(motds)
    return (
        <a href="/" class="nav-a">
        <div class="title-div">AAN</div>
        <div class="subtitle-div">{motd}</div>
        </a>
    )
}