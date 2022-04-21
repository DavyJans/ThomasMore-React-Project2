import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { articleModified } from "./ArticlesSlice";
import ArticleForm from "./ArticleForm";
import genericImage from '../../news-generic.jpg' // relative path to image 
import AzureBlobApi from '../../api/Azure'

const baseurl = `https://rgreactarticleimages.blob.core.windows.net/images/`
const azureBlobApi = new AzureBlobApi()

const EditArticleForm = ({ match }) => {

    const { articleId } = match.params
    
    const article = useSelector(state => state.articles.find(article => article.id === articleId))

    const dispatch = useDispatch()
    const history = useHistory()     
    
    const [title, setTitle] = useState(article.title)
    const [subtitle, setSubtitle] = useState(article.subtitle)
    const [content, setContent] = useState(article.content)

    const onTitleChanged = e => {setTitle(e.target.value)}
    const onSubtitleChanged = e => setSubtitle(e.target.value)
    const onContentChanged = (e) => {setContent(e.target.value)}
    const onImageChanged = (e) => {setImage(e.target.files[0])}

    const [image, setImage] = useState(article.imageUrls === undefined  ? genericImage : article.imageUrls[article.imageUrls.length - 1])

    const onSaveArticleClicked = async() => {


       if (title && subtitle && content && image) {
           
            azureBlobApi.uploadFileToBlob(image).then((res) =>{
                
             
                let imageUrl = baseurl + image.name
                let newImageUrls = [...article.imageUrls, imageUrl]

                dispatch(articleModified({ id: articleId, title, subtitle, content, newImageUrls }))
                history.push(`/articles/${articleId}`)

            })
        }  
    }

    return (
        <>
        <h3>Artikel aanpassen</h3>
        
            <ArticleForm key={article.id} imageUrl={image} title={title} subtitle={subtitle} content={content} onTitleChanged={onTitleChanged} onImageChanged={onImageChanged} onSubtitleChanged={onSubtitleChanged} onContentChanged={onContentChanged} onSaveArticleClicked={onSaveArticleClicked}/>
               
        </>
    )
}

export default EditArticleForm