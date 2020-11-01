import React, { Fragment } from 'react'
import styles from './ListingItem.module.scss'
import IArticle from '../../../../model/IArticle'

interface Props {
    items: IArticle[]
}

const ListingItem = ({items}: Props) => {

    return(
        <Fragment> 
            {items.map((item:IArticle) => (
                <div key={item._id} className={`${styles.article__item} ${styles.style1}`}>
                    <div className={styles.article__content}>
                        <h5><strong>{item.category}</strong></h5>
                        <h4><a rel="noopener noreferrer" target="_blank" href={item.link}><strong>{item.name}</strong></a></h4>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default ListingItem