import  React  from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import _ from "lodash"; 
import { Row, Col, Card, Icon, CardTitle  } from 'react-materialize';
import genericImage from '../../news-generic.jpg' // relative path to image 

const Article = ({ article, details }) => {
    let link = ''
    if(details){
        link =  <Link key={article.id} to={`/articles/${article.id}`}>Meer...</Link>
    }else{
        link =  <Link key={article.id} to={`/`}>Terug...</Link>
    }

     return (
        <>
              <Row key={article.id} >
                    
                    <Col s={8}>
                        <Card key={article.id}
                            actions={[
                                link
                                
                            ]}
                            header={<CardTitle image={article.imageUrls === undefined  ? genericImage : article.imageUrls[article.imageUrls.length - 1] }>{article.title}</CardTitle>}
                            >
                                <p>
                                <Moment format="DD/MM/YYYY hh:mm">
                                        {article.articleDates.publicationDate}
                                </Moment>
                                </p>
                                <br></br>
                                <h6>{article.subtitle}</h6>
                                <br></br>
                                <p>
                                    { _.truncate(article.content, {'length': 200, 'separator': / /, 'omission': ' ...'} )}
                                </p>
                                <br></br>
                                        <Link key={article.id} className="btn-floating halfway-fab waves-effect waves-light red" to={`/edit/${article.id}`}>
                                            <Icon>create</Icon>
                                        </Link>
                          
                        </Card>
                    </Col>
                 </Row>
        </>
        
    )
}

export default Article