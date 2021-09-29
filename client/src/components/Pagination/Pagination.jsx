import styles from './Pagination.module.css'

export default function Pagination ({elementsPerPage, allElements, pagination}) {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(allElements / elementsPerPage); i++){
        pageNumbers.push(i);
    }
    
    return(
        <div className={styles.pagination}>
            {pageNumbers &&
                pageNumbers.map(number => (
                <button className={styles.number} onClick={() => pagination(number)}>{number}</button>        
                ))
            }     

        </div>
    )
}