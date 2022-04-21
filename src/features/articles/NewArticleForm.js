import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ArticleForm from "./ArticleForm";
import { articleAdded } from "./ArticlesSlice";
import { useHistory } from "react-router-dom";
import genericImage from '../../news-generic.jpg' // relative path to image 
import AzureBlobApi from '../../api/Azure'

const baseurl = `https://rgreactarticleimages.blob.core.windows.net/images/`
const azureBlobApi = new AzureBlobApi()

const NewArticleForm = () => {

    const [article, setArticle] = useState({});
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(genericImage)

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChanged = e => setTitle(e.target.value)
    const onSubtitleChanged = e => setSubtitle(e.target.value)
    const onContentChanged = (e) => {setContent(e.target.value)}
    const onImageChanged = (e) => {setImage(e.target.files[0])}


    const onSaveArticleClicked = () => {
        if (title && subtitle && content) {
            

            azureBlobApi.uploadFileToBlob(image).then((res) =>{
                
                let imageUrl = baseurl + image.name
                let newImageUrls = [];
                newImageUrls.push(imageUrl)
           

                dispatch(articleAdded(title, subtitle, content, newImageUrls))
                history.push('/')
            })

          
        }
    }

    return (
        <>
            <h3>Voeg een artikel toe</h3>
            <ArticleForm key={article.id}  title={title} subtitle={subtitle} content={content} onTitleChanged={onTitleChanged} onImageChanged={onImageChanged} onSubtitleChanged={onSubtitleChanged} onContentChanged={onContentChanged} onSaveArticleClicked={onSaveArticleClicked}/>
           
        </>
    )
}

export default NewArticleForm