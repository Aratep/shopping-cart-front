import { connect } from 'react-redux';

import UserAccount from '../components/user-account/UserAccount';
// import {currentUser} from "../actions";

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
});

const UserAccountContainer = connect(
    mapStateToProps
)(UserAccount);

export default UserAccountContainer