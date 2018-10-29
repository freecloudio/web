import "./Notifications.scss";

import * as React from "react";
import { notificationStore, NotificationType } from "src/store/NotificationStore";
import { observer } from "mobx-react";

@observer
class Notifications extends React.Component {

	public render() {
		return (
			<div className="notification-container">
				{notificationStore.notifications.map((ntfn) =>
					<div key={ntfn.id} className={`notification ${NotificationType[ntfn.type].toLowerCase()}`}>
						<span className="notification-text">{ntfn.message}</span>
					</div>,
				)}
			</div>
		);
	}

}

export default Notifications;
