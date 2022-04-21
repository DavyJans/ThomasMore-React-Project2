import  React  from "react";

const Pagination = ( { currentPage, setCurrentPage, totalArticles, maxArticles }) => {

    const numPages = Math.ceil(totalArticles / maxArticles);
    
    let pages = [];

    for (let p = 1; p <= numPages; p++) {
        pages.push(p);
    }

    return (
        <>
            <ul className="pagination">
                <li className={currentPage === 1 ? `disabled` :  `waves-effect`} onClick={() => currentPage === 1 ? false : setCurrentPage(currentPage - 1)}><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            
                {pages.map((page) => (
                    <li key={page} className={page === currentPage ? `active` :  `waves-effect` } onClick={() => setCurrentPage(page)}>
                        <a href="#!">{page}</a>
                    </li>
                ))}
                
                <li className={currentPage === numPages ? `disabled` :  `waves-effect`} onClick={() => currentPage === numPages ? false : setCurrentPage(currentPage + 1)}><a href="#!"><i className="material-icons">chevron_right</i></a></li>

            </ul>
        </>
        
    )
}

export default Pagination