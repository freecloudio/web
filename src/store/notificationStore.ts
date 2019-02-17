export type NotificationType = 'default' | 'positive' | 'negative';

export interface Notification {
	text: string;
	type: NotificationType;
}

export interface NotificationState {
	notifications: Notification[];
}
