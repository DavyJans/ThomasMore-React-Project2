import React from "react";
import { useSelector } from "react-redux";
import Article from "./Article";

const ArticleDetail = ({match}) => {

    const { articleId } = match.params

    const article = useSelector(state =>
        state.articles.find(article => article.id === articleId)
    )

    if(!article) {
        return (<h2>Oops.. artikel niet gevonden!</h2>)
    }

    return (
        <>
              <Article key={article.id} article={article} details={false} showAll={true}/>

            
        </>
    )
}

export default ArticleDetail