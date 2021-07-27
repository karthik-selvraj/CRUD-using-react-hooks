import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Bookname</label>
			<input type="text" name="username" value={user.bookname} onChange={handleInputChange} />
            <label>Author</label>
			<input type="text" name="authorname" value={user.authorname} onChange={handleInputChange} />
			<button>Add new Books</button>
		</form>
	)
}

export default AddUserForm