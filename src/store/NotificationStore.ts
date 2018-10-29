import { observable, computed } from "mobx";
import { Log } from "src/Log";

export enum NotificationType {
	DEFAULT,
	POSITIVE,
	NEGATIVE,
}

let nextNotificationID = 0;

export interface Notification {
	id: number;
	type: NotificationType;
	message: string;
}

// Timeout in Milliseconds
const NOTIFICATION_TIMEOUT = 3000;

class NotificationStore {
	private readonly log = new Log("NotificationStore");
	@observable private internalNotifications: Notification[] = [];

	@computed public get notifications(): Notification[] {
		return this.internalNotifications;
	}

	public sendNotification(message: string, type: NotificationType = NotificationType.DEFAULT): number {
		nextNotificationID++;
		this.log.info(`New (${NotificationType[type]}): ${message}`);
		this.internalNotifications.push({ id: nextNotificationID, type, message });
		window.setTimeout(() => {
			this.internalNotifications.splice(0, 1);
			this.log.debug(`Removing oldest notification, ${this.internalNotifications.length} notifications remaining`);
		}, NOTIFICATION_TIMEOUT);
		return nextNotificationID;
	}

}

export const notificationStore = new NotificationStore();
