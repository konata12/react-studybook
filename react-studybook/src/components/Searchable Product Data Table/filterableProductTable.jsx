import React from 'react';
import ProductTable from './productTable';
import SearchBar from './searchBar';
import styles from './styles/filterableProductTable.module.css';

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.checkboxHandler = this.checkboxHandler.bind(this)
        this.searchHandler = this.searchHandler.bind(this)
        this.state = {
            isInStore: false,
            searchInStore: ''
        }
    }

    checkboxHandler(e) {
        this.setState({
            isInStore: !this.state.isInStore
        });
    }

    searchHandler(value) {
        console.dir(value)
        this.setState({
            searchInStore: value
        });
    }

    render() {
        return (
            <div className={styles.productTable}>
                <SearchBar
                    checkboxFunc={this.checkboxHandler}
                    searchFunc={this.searchHandler}
                />
                <ProductTable
                    products={PRODUCTS}
                    isInStore={this.state.isInStore}
                    searchInStore={this.state.searchInStore}
                />
            </div>
        );
    }
}

export default FilterableProductTable;