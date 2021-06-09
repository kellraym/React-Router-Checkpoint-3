import { useContext } from "react"
import AppContext from "../AppContext";

function Home() {
    const {data} = useContext(AppContext)

    const output = data.newsArticles.map(article => {
      return (
      <div>
        <h1>{article.title}</h1>
        <p>{article.article}</p>
      </div>
      )
    })

    return output
}

export default Home;
