import articleRegestry from "../articles/regestry";

export default function RegestryList() {
    return (
        <>
            {articleRegestry.map(
                (Article)=>{<Article.banner></Article.banner>}
            )}
        </>
    )
}