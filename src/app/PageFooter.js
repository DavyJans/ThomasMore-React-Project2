import React from "react";
import { Footer } from 'react-materialize';

const PageFooter = () => {
    return (
        <>
        <Footer className="footer" copyrights=" © 2022 Copyright Davy Jans"  moreLinks={<a className="grey-text text-lighten-4 right" href="https://smartbyte.odoo.com">Smartbyte</a>}></Footer>
      
        </>
    )
}

export default PageFooter