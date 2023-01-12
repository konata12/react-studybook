import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.searchChange = this.searchChange.bind(this)
        this.checkChange = this.checkChange.bind(this)
    }

    searchChange(e) {
        this.props.searchFunc(e.target.value)
    }

    checkChange(e) {
        this.props.checkboxFunc(e.target.value)
    }

    render() { 
        return (
            <div className='searchBar'>
                <input
                    type="text"
                    placeholder='Search...'
                    onChange={this.searchChange}
                />
                <input
                    type="checkbox"
                    name="onlyShowProductsInStore"
                    id="productsInStoreCheckbox"
                    onChange={this.checkChange}
                />
                <label htmlFor="productsInStoreCheckbox">Only show products in store</label>
            </div>
        );
    }
}
 
export default SearchBar;