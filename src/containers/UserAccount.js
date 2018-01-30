import { connect } from 'react-redux';

import UserAccount from '../components/user-account/UserAccount';

const mapStateToProps = (state) => ({
    userProd: state.products
});

const UserAccountContainer = connect(
    mapStateToProps
)(UserAccount)

export default UserAccountContainer