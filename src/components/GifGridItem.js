import React from 'react';

export const GifGridItem = ({id, title, url}) => {
	return (
		<>
			<div className="card animate__animated animate__fadeInUp">
				<img src={ url } alt={ title } />
				<div className="title">
					<p className="title-card" > { title } </p>
				</div>
			</div>
		</>
	);
};
