import * as React from 'react';
import Button, { ButtonStyle } from './Button';

import './Dialog.scss';
import { Log } from 'src/Log';
import * as classNames from 'classnames';

export interface DialogAction {
	// The name of the action, will be passed in the onActionTrigger callback
	name: string;
	// The text to show on the action's button
	text: string;
	// Of which type the action is. This changes the button color. Will fallback to default.
	type?: ButtonStyle;
}

interface Props {
	open: boolean;
	actions: DialogAction[];
	onActionTriggered: (actionName: string) => void;
}

const log = new Log('Dialog');

const Dialog: React.FunctionComponent<Props> = ({ children, actions, onActionTriggered, open }) => {
	function actionTriggered(actionName: string) {
		return (_: React.MouseEvent<HTMLButtonElement>) => {
			log.debug('Action triggered', actionName);
			onActionTriggered(actionName);
		};
	}

	return (
		<div className={classNames('dialog-container', {open})}>
			<div className="dialog-shade" />
			<div className="dialog">
				<div className="dialog-content">
					{children}
				</div>
				<div className="dialog-footer">
					{actions.map((action) => (
						<Button 
							onClick={actionTriggered(action.name)} 
							style={action.type || 'dark'}
							className="dialog-button"
							key={action.name}
						>{action.text}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dialog;
