const Pagination = ({data_length, current_page, items_per_page}) =>{
    
    let nextPage = current_page + 9;
    let prevPage = current_page - 1;
    let pages = [];
    
    // if(data_length > items_per_page && )
    for (let i = 0; i < data_length; i++) {
        pages.push(i)   
    }

    return(
        <div className="cta paging d-inline pull-right">
            <div className="d-block mr-1">
            Showing Page {current_page} of {pages.length}
                (<span className="text-muted font-italic small">{items_per_page}/Page</span>)
            </div>
            {current_page}
            <PageLinks pages={pages} current_page={current_page} items_per_page={items_per_page} />
        </div>
    );
}

const PageLinks = ({pages, current_page, items_per_page}) => {
    return (
        <ul className="pagination pagination-sm">
            {pages && pages.map((page)=>{
                return(
                    <li className={`pagination-item ${page === current_page ? 'active' : ''}`}  key={page}>
                        <a className='page-link' href={`?page=${page}&items_per_page=${items_per_page}`}>{page}</a>
                    </li>
                );
            })}
        </ul>
    );
}
export default Pagination;