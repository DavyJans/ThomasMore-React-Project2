import React, { useState, useEffect } from "react";
import _ from "lodash"; 
import { Row, Col, Icon, TextInput, Textarea, Button } from 'react-materialize';
import genericImage from '../../news-generic.jpg' // relative path to image 

const ArticleForm = ({ imageUrl, title, subtitle, content, onTitleChanged, onSubtitleChanged, onContentChanged, onSaveArticleClicked, onImageChanged }) => {

    const [previewImg, setPreviewImg] = useState(imageUrl === undefined  ? genericImage : imageUrl)

    useEffect (() => {       
        if(imageUrl === undefined)
            setPreviewImg(genericImage)
       
    },[]);

    const onImagePreview = e => {
        setPreviewImg(URL.createObjectURL(e.target.files[0]))
      }

     return (
        <>
               <Row>
                <Col s={12}>
                        <form>
                        <Row>
                            <Col s={12}>
                                <TextInput
                                    s={12}
                                    id="title"
                                    label="Title"
                                    value={title}
                                    onChange={onTitleChanged}
                                    required/>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <TextInput
                                    s={12}
                                    id="sub-title"
                                    label="Ondertitel"
                                    value={subtitle}
                                    onChange={onSubtitleChanged}
                                    required/>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <Textarea
                                    s={12}
                                    id="content"
                                    label="Artikel"
                                    data-length={2500}
                                    value={content}
                                    onChange={onContentChanged}
                                    required/>
                            </Col>
                        </Row>      
                        <Row>
                            <Col s={12}>
                            <TextInput
                                    s={12}
                                    id="Afbeelding"
                                    label="Afbeelding"
                                    type="file"
                                    onChange={e => {onImageChanged(e); onImagePreview(e)}}
                                    />
                            </Col>

                        </Row> 
                        <Row>
                            <Col s={12}>
                                <img src={previewImg} width="700px" alt="img"/>
                            </Col>
                        </Row>
                        <Row>
                                <Button
                                    node="button"
                                    type="submit"
                                    waves="light"
                                    onClick={onSaveArticleClicked}
                                    >
                                    Opslaan
                                    <Icon right>
                                    save
                                    </Icon>
                            </Button>
                        </Row>               
                        
                        </form>
                    </Col>
                </Row>
        </>
        
    )
}

export default ArticleForm