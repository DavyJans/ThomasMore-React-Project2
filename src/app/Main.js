import React from "react";
import { Switch, Route } from 'react-router-dom'

import ArticlesList from "../features/articles/ArticlesList";
import NewArticleForm from "../features/articles/NewArticleForm";
import Info from "../features/articles/AppInfo";
import ArticleDetail from "../features/articles/ArticleDetail";
import EditArticleForm from "../features/articles/EditArticleForm";

const Main = () => {
    return (
        <>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ArticlesList} />
                    <Route exact path="/add" component={NewArticleForm} />
                    <Route exact path="/articles/:articleId" component={ArticleDetail} />
                    <Route exact path="/edit/:articleId" component={EditArticleForm} />
                    <Route exact path="/info" component={Info} />
                </Switch>
            </div>
        </>
    )
}

export default Main