import React from 'react';
import styles from '../styles/pagination.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage = 1, totalPages = 0, pageChangeCallback = ()=>{} }) => {

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className={styles.pagination}>
            <button
                className={styles.paginationBtn}
                disabled={currentPage === 1}
                onClick={() => pageChangeCallback(currentPage - 1)}
            >
                <FaChevronLeft size={20} />
            </button>
            <div className='mx-1'></div>
            <span className={styles.paginationInfo}>
                {currentPage} / {totalPages} trang
            </span>
            
            <div className='mx-1'></div>
            <button
                className={styles.paginationBtn}
                disabled={currentPage === totalPages}
                onClick={() => pageChangeCallback(currentPage + 1)}
            >
                
                <FaChevronRight size={20} />
            </button>
        </div>
    );
};

export default Pagination;