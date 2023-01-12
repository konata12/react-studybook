import React from 'react';
import ProductRow from './productRow';
import ProductCategoryRow from './productCategoryRow';
import styles from './styles/productTable.module.css';

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const products = this.props.products
        const isInStore = this.props.isInStore
        const searchValue = this.props.searchInStore

        const sportGoods = products.filter((prod) => {
            return prod.category === 'Sporting Goods'
        });
        const electronics = products.filter((prod) => {
            return prod.category === 'Electronics'
        });

        function makingCategoryList(prod) {
            const title = [<ProductCategoryRow category={prod[0].category}/>];
            const products = prod.map((product) => {
                return <ProductRow
                    isInStoreCheckValue={isInStore}
                    searchValue={searchValue}
                    name={product.name}
                    price={product.price}
                    isProductInStore={product.stocked}
                />
            })
            const productsList = <ul className={styles.productList}>
                {products.map((product) => {
                    return product
                })}
            </ul>
            return title.concat(productsList)
        }

        return (
            <div className={styles.productTable}>
                <p className={styles.productTableTitle}>
                    <span className={styles.productTableName}>
                        Name
                    </span>
                    <span className={styles.productTablePrice}>
                        Price
                    </span>
                </p>
                {makingCategoryList(sportGoods)}
                {makingCategoryList(electronics)}
            </div>
        );
    }
}
 
export default ProductTable;