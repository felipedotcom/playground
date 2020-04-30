import React from 'react'

const Button = () =>  {
	const handleClick = (e) => { 
		e.preventDefault()
		alert('U just shared a book')
	}

	return (
		<button onClick={handleClick}>
			Share
		</button>
	)

}


export default Button


