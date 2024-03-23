import { useCallback, useEffect, useState } from "react";

const getPages=(totalPages,maxVisblePageCount,activePage)=>
//logic goes here
{
    const maxResultSize=totalPages>maxVisblePageCount ? maxVisblePageCount :totalPages;
    const startingPage=activePage+maxVisblePageCount >totalPages ? totalPages - maxResultSize+1: activePage
    return [...Array(maxResultSize)].map((_,idx)=>{
        return startingPage+idx;
    })
}

const Pagination=({onPageChange})=>
{

    const totalPages=15;
    const maxVisblePageCount=10;
    // const startingPage=1;

const [pages,setPages]=useState([]);
const [activePage,setActivepage]=useState(1)

    const changePage=useCallback((e)=>
    {
        let selectedPageNo=0;

        if(e.target.dataset.id==="PREVIOUS")
        {
selectedPageNo=activePage-1
        }
        else if(e.target.dataset.id==="NEXT")
        {
            selectedPageNo=activePage+1

        }
        else{
selectedPageNo=Number(e.target.dataset.id)
        }
        setActivepage(selectedPageNo)
        onPageChange(selectedPageNo)
    },[activePage]);

    useEffect(()=>
    {
        const newPages=getPages(totalPages,maxVisblePageCount,activePage)
          setPages(newPages)
    },[activePage])


    return(
        <div className="pagination">
 <button className="page-button" disabled={activePage===1} data-id={"PREVIOUS"} onClick={changePage}>Prev</button>
            {
pages.map((page)=>
(
    
        <button className={`page-button  ${activePage===page? 'active':'' }`} data-id={page} onClick={changePage}>{page}</button>
   
))
}
<button className="page-button" disabled={activePage===totalPages}data-id={"NEXT"} onClick={changePage}>next</button>

         


        </div>
    )

}

export default Pagination;