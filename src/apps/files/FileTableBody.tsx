import * as React from 'react';
import FileTableRow from './FileTableRow';
import { Route } from 'react-router-dom';
import { FileInfo } from 'src/api';

interface Props {
	base: string;
	files: FileInfo[];
}

class FileTableBody extends React.Component<Props, object> {
	public render() {
		return (
			<tbody>
				{this.props.files.map((f, i) =>
					<Route
						key={f.name}
						render={
							/* tslint:disable-next-line */
							(props) => <FileTableRow file={f} base={this.props.base} {...props} />
						}
					/>,
				)}
			</tbody>
		);
	}
}

export default FileTableBody;
