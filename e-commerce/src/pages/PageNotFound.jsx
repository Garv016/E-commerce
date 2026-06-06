import './PageNotFound.css'
import { Header } from '../component/Header';

export function PageNotFound(){

    return(
        <>
            <title>Page Not Found</title>
            <Header/>
            <div className='page-error'>
                <h1 className='f404'>404</h1>
                <h3>Page Not Found...</h3>
            </div>
        </>
    );
}