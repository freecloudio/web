import { observable, computed } from "mobx";
import { Log } from "src/Log";

export enum NotificationType {
	DEFAULT,
	POSITIVE,
	NEGATIVE,
}

// IDs for the notifications will get sourced from this variable.
let nextNotificationID = 0;

export interface Notification {
	id: number;
	type: NotificationType;
	message: string;
}

// Timeout in Milliseconds
const NOTIFICATION_TIMEOUT = 3000;

/**
 * A NotificationStore manages notifications to show to the user.
 */
class NotificationStore {
	private readonly log = new Log("NotificationStore");
	// this is where notifications get stored. Made accessible by the accompanying 
	// get function
	@observable private internalNotifications: Notification[] = [];

	/**
	 * Returns an observable Notification array. This can be used to provide a
	 * notification UI.
	 */
	@computed public get notifications(): Notification[] {
		return this.internalNotifications;
	}

	/**
	 * Sends a new notification. It will be automatically removed after the timeout
	 * specified in NOTIFICATION_TIMEOUT.
	 * @param message text message of the notification
	 * @param type optional type of the notification, see NotificationType. Defaults to DEFAULT
	 */
	public sendNotification(message: string, type: NotificationType = NotificationType.DEFAULT): number {
		nextNotificationID++;
		this.log.debug(`New (${NotificationType[type]}): ${message}`);
		this.internalNotifications.push({ id: nextNotificationID, type, message });
		window.setTimeout(() => {
			this.internalNotifications.splice(0, 1);
			this.log.debug(`Removing oldest notification, ${this.internalNotifications.length} notifications remaining`);
		}, NOTIFICATION_TIMEOUT);
		return nextNotificationID;
	}

}

export const notificationStore = new NotificationStore();
