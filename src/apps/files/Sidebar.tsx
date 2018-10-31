import * as React from "react";

import "./Sidebar.scss";
import Icon, { IconStyle } from "../../core/Icon";
import { NavLink, match } from "react-router-dom";
import { Location } from "history";
import { Log } from "../../Log";
import Button, { ButtonStyle } from "../../core/Button";
import Dropdown from "../../core/Dropdown";
import { observable } from "mobx";
import { observer } from "mobx-react";
import DropdownContainer from "../../core/DropdownContainer";

interface Props {
	// base path of the files app. This is used to generate sub-links like for shared files and trash.
	base: string;
}

@observer
class Sidebar extends React.Component<Props, object> {
	private readonly log = new Log("Sidebar");
	@observable private addDropdownVisible = false;

	public render() {
		const { base } = this.props;
		return (
			<aside className="files-sidebar">
				<h1>Files</h1>
				<nav>
					<ul>
						<li>
							<DropdownContainer
								dropdown={
									<Dropdown visible={this.addDropdownVisible} onClick={this.onAddButtonClicked} anchor="below">
										<ul>
											<li>
												Test1
										</li>
											<li>
												Test2
										</li>
										</ul>
									</Dropdown>
								}
							>
								<Button className="add-button" onClick={this.onAddButtonClicked} style={ButtonStyle.PrimaryInverted}>
									<Icon name="plus" size={1.5} />New
							</Button>

							</DropdownContainer>
						</li>
						<li>
							<NavLink to={{ pathname: base }} isActive={this.homeLinkIsActive}>
								<Icon name="homeOutline" size={1.5} color={IconStyle.Dark} />Your files
							</NavLink>
						</li>
						<li>
							<NavLink to={{ pathname: base + "/shared" }}>
								<Icon name="shareVariant" size={1.5} color={IconStyle.Dark} />Shared
							</NavLink>
						</li>
						<li>
							<NavLink to={{ pathname: base + "/starred" }}>
								<Icon name="starOutline" size={1.5} color={IconStyle.Dark} />Starred
							</NavLink>
						</li>
						<li>
							<NavLink to={{ pathname: base + "/trash" }}>
								<Icon name="deleteOutline" size={1.5} color={IconStyle.Dark} />Trash
							</NavLink>
						</li>
					</ul>
				</nav>
			</aside>
		);
	}

	private homeLinkIsActive = (m: match, location: Location): boolean => {
		this.log.debug(m.url, this.props.base, m);
		return (m.url === this.props.base || m.url.includes(this.props.base + "/d"));
	}

	private onAddButtonClicked = () => {
		this.log.debug("Add button clicked");
		this.addDropdownVisible = !this.addDropdownVisible;
	}
}

export default Sidebar;
