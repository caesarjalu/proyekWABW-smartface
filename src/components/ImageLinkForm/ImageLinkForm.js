import React from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showFileChooser: false
		};
	}

	onClickShowFileChooser = (event) => {
		this.setState({ showFileChooser: true });
	}

	onClickShowUrl = (event) => {
		this.setState({ showFileChooser: false });
	}

	render() {
		const { onInputChange, onButtonSubmit, disableFind, onInputClear } = this.props;
		return (
			<div className="ma4 mt0">
				<p className="f3">
					Type an image link or upload your own photo and we will detect a face. Give it a try!
				</p>
				<div className="center-content">
					<div className="form pa3 br3 shadow-5">
						<div className="center pv2 br3">
							<input className="f4 pa2 w-70 center mb2 center" type="text" id="linkform"
								onChange={onInputChange}
								onCut={onInputChange}
								onPaste={onInputChange}
								onInput={onInputChange} 
								placeholder="Type an image link here (http://...)" />
							<div id="uploadComputer" className="w-30 f4 link dib white">
								<input type="file" name="file" id="file" class="inputfile" accept="image/*" onChange={onInputChange} />
								<label for="file">or Upload an image</label>
							</div>
						</div>
						<div>
							<button className="white b pv2 ph3 bn br2 mr1 grow w-40" onClick={onButtonSubmit} disabled={disableFind}>Detect</button>
							<button className="white b pv2 ph3 bn br2 bg-gray ml1 grow w-40" onClick={onInputClear} disabled={disableFind}>Clear</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ImageLinkForm;