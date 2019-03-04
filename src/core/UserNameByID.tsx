import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'src/store';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'src/actions';

import * as userActions from '../actions/userActions';
import { User } from 'src/api';

interface Props {
	id: number;
	users: { [userID: number]: User & { isLoading: boolean }};
	getUserById: typeof userActions.getUserByID;
}

const UserNameByID: React.FunctionComponent<Props> = ({id, users, getUserById}) => {
	if (!users[id]) {
		getUserById(id);
		return (
			<span />
		);
	}
	return (
		<span>
			{users[id].isLoading ? '...' : `${users[id].firstName} ${users[id].lastName}`}
		</span>
	);
};

function mapStateToProps(state: Store) {
	return {
		users: state.users.users,
	};
}

function mapDispatchToProps(dispatch: ThunkDispatch<Store, null, Action>) {
	return {
		getUserById: (id: number) => dispatch(userActions.getUserByID(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNameByID);
