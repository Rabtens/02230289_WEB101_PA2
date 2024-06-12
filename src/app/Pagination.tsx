import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPaginationRange = () => {
    const totalNumbers = 5; // Total number of pagination numbers to display
    const halfTotalNumbers = Math.floor(totalNumbers / 2);
    let start = Math.max(1, currentPage - halfTotalNumbers);
    let end = Math.min(totalPages, currentPage + halfTotalNumbers);

    if (currentPage - halfTotalNumbers < 1) {
      end = Math.min(totalPages, end + (halfTotalNumbers - currentPage + 1));
    }
    if (currentPage + halfTotalNumbers > totalPages) {
      start = Math.max(1, start - (currentPage + halfTotalNumbers - totalPages));
    }

    return [...Array((end - start) + 1).keys()].map(i => i + start);
  };

  const paginationRange = getPaginationRange();

  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {paginationRange.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
