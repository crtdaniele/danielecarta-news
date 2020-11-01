import React from 'react'
import styles from './Listing.module.scss'
import useListing from '../../../hooks/useListing'
import ListingItem from './listingItem/ListingItem'

const Listing = () => {
    
    const data = useListing();

    return(
        <div>
          <div className={styles.Article}>
            {data && <ListingItem items={data}></ListingItem>}
          </div>
        </div>
    )
}

export default Listing