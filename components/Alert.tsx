'use client';
import React from 'react';

type AlertProps = {
	message: string;
	text: string;
	[key: string]: any;
};

const Alert: React.FC<AlertProps> = ({ message, text, ...rest }) => {
	const handleAlert = () => {
		alert(message);
	};
	return (
		<button onClick={handleAlert} {...rest}>
			{text}
		</button>
	);
};

export default Alert;
