import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div className="mt6 center">
			<div className="white f3">
				<span className="b">{name}</span>, your current entry count is...
			</div>
			<div className="white f1">
				{entries}
			</div>
		</div>
	);
}

export default Rank;