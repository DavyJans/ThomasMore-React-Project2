import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import {getArticles} from "./ArticlesSlice"
import Article from "./Article";

// import MongoApi from "../../api/mongoApi";
// let mongoApi = new MongoApi();

const ArticlesList = () => {

    const dispatch = useDispatch()

    useEffect (() => {       
        
         dispatch(getArticles())
        
    },[dispatch]);
        

    let savedArticles = useSelector(state => state.articles)

    console.log(savedArticles)

    //pagination variables:
    const totalArticles = savedArticles.length;
    const [currentPage, setCurrentPage] = useState(1);
    const maxArticles = 10;
    const sliceFrom = maxArticles * (currentPage-1);
    const sliceTo = maxArticles * (currentPage)

    //Sorteren op datum en dan 10 artikels max nemen
    const articlesToSort = [...savedArticles] //sort on a copy because sort changes the array
    const orderedArticles = articlesToSort.sort((a,b) => new Date(b.articleDates.publicationDate) - new Date(a.articleDates.publicationDate))
    const slicedArticles = orderedArticles.slice(sliceFrom, sliceTo);
    

    const listArticles = slicedArticles.map(article => (
       
            <Article key={article.id} article={article} details={true} showAll={false}/>
          
    ))

    return (
        <>
            <h1>Het laatste nieuws...</h1>

            {listArticles}

            <div >
                    <Pagination 
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalArticles={totalArticles}
                        maxArticles={maxArticles}
                    />
            </div>
        </>
    )
}

export default ArticlesList;