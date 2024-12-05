import './Title.css'

const motds = [
    "This looks like it was made in the 90's (yet uses modern web tech)",
    "(A)ll (A)bout (N)etworking",
    "Screw you, npm",
    "first commit",
    "f'{motd}'"
]

function choice(l) {
    return l[Math.floor(Math.random()*l.length)]
}

export default function Title() {
    const motd = choice(motds)
    return (
        <>
        <div class="title-div">AAN</div>
        <div class="subtitle-div">{motd}</div>
        </>
    )
}