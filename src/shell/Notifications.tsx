import './Notifications.scss';

import * as React from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import * as classNames from 'classnames';
import { connect } from 'react-redux';
import { Store } from 'src/store';
import { Notification } from '../store/notificationStore';

interface Props {
	notifications: Notification[];
}

const Notifications: React.FunctionComponent<Props> = ({notifications}) => {
	return (
		<div className="notification-container">
			<TransitionGroup>
				{notifications.map((ntfn) =>
					<CSSTransition
						key={ntfn.text}
						classNames="notification-anim"
						timeout={{ enter: 200, exit: 200 }}
					>
						<div className={classNames('notification', ntfn.type)}>
							<span className="notification-text">{ntfn.text}</span>
						</div>
					</CSSTransition>,
				)}
			</TransitionGroup>
		</div>
	);
};

function mapStateToProps(state: Store) {
	return {
		notifications: state.notifications.notifications,
	};
}

export default connect(mapStateToProps)(Notifications);
