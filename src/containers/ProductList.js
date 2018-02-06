import { connect } from 'react-redux';

import ProductList from '../components/products/ProductList';

const mapStateToProps = (state) => ({
    products: state.products,
    count: state.count
});

const ProductListContainer = connect(
    mapStateToProps
)(ProductList)

export default ProductListContainer