import React from 'react';
import styles from './styles/productCategoryRow.module.css';

class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <p key={this.props.category} className={styles.categoryTitle}>
                {this.props.category}
            </p>
        );
    }
}
 
export default ProductCategoryRow;