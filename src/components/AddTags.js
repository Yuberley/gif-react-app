import React from 'react';

export const AddTags = ({ category }) => {
	return (
		<>
			<span className="badge rounded-pill bg-success text-capitalize">{category}</span>
            <span> </span>   
		</>
	);
};
