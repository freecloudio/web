import "./Notifications.scss";

import * as React from "react";
import { notificationStore, NotificationType } from "src/store/NotificationStore";
import { observer } from "mobx-react";

import { TransitionGroup, CSSTransition } from "react-transition-group";

@observer
class Notifications extends React.Component {
	public render() {
		return (
			<div className="notification-container">
				<TransitionGroup>
					{notificationStore.notifications.map((ntfn) =>
						<CSSTransition
							key={ntfn.id}
							classNames="notification-anim"
							timeout={{ enter: 200, exit: 200 }}
						>
							<div className={`notification ${NotificationType[ntfn.type].toLowerCase()}`}>
								<span className="notification-text">{ntfn.message}</span>
							</div>
						</CSSTransition>,
					)}
				</TransitionGroup>
			</div>
		);
	}

}

export default Notifications;
