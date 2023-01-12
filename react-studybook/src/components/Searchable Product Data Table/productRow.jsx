import React from 'react';
import styles from './styles/productRow.module.css';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Checkbox
        const isInStoreCheckValue = this.props.isInStoreCheckValue;
        const productIsInStore = this.props.isProductInStore;
        const checkRequestResult = () => {
            if (isInStoreCheckValue) return isInStoreCheckValue === productIsInStore;
        };
        const rowClass = checkRequestResult() ? styles.productRowActive : styles.productRow;

        // Search
        const searchValue = this.props.searchValue
        const name = this.props.name
        const searchInclude = name.includes(searchValue)

        // render
        if (searchInclude) return (
            <li key={this.props.name} className={rowClass}>
                <span className={styles.rowName}>{name}</span>
                <span>{this.props.price}</span>
            </li>
        );
    }
}
 
export default ProductRow;