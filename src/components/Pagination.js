import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({pages, handlePageClick}) => {
  return (
      <>
      <ReactPaginate 
          previousLabel={'prev'}
          nextLabel={'next'}
          pageCount={pages}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </>
  );
};

export default Pagination;
