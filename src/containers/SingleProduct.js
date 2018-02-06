import { connect } from 'react-redux';

import SingleProduct from '../components/single-product/SingleProduct';

const mapStateToProps = (state) => ({
    product: state.product,
});

const SingleProductContainer = connect(
    mapStateToProps
)(SingleProduct)

export default SingleProductContainer