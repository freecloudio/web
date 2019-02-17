import { NotificationType } from '../store/notificationStore';

export interface Action {
	type: 'SEND_NOTIFICATION';
	text: string;
	notificationType: NotificationType;
} 

export function sendNotification(text: string, type?: NotificationType): Action {
	return {
		type: 'SEND_NOTIFICATION',
		text,
		notificationType: type || 'default',
	};
}
