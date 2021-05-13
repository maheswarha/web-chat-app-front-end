import React from 'react';

import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
	<form className="form">
		<input
			className="input"
			type="text"
			placeholder="Type a message..."
			value={message}
			onChange={(event) => setMessage(event.target.value)}
			onKeyPress={(event) => event.key === 'Enter' ? () => {
				sendMessage(event);
				setMessage('');
			} : null}
		/>
		<button className="sendButton" onClick={(event) => {
			sendMessage(event);
			setMessage('');
		}}>Send</button>
	</form>
);

export default Input;
