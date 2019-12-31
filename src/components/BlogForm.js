import React, { useState } from 'react'
import InputField from './InputField'
import Submit from './Submit'
import blogsService from '../services/blogs'

const BlogForm = ({ logger }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const blog = await blogsService.create({
                title, author, url,
            })
            setTitle('')
            setAuthor('')
            setUrl('')
            logger('success', `Blog ${blog.title} posted succesfully.`)
        } catch (exception) {
            logger('danger', 'An error occured during blog posting. Please try again.')
        }
    }

    const onTitleChange = (value) => setTitle(value)
    const onAuthorChange = (value) => setAuthor(value)
    const onUrlChange = (value) => setUrl(value)

    return (
        <form onSubmit={onSubmitHandler}>
            <InputField label='Title' type='text' text={title} handleNewValue={onTitleChange}/>
            <InputField label='Author' type='text' text={author} handleNewValue={onAuthorChange}/>
            <InputField label='URL' type='text' text={url} handleNewValue={onUrlChange}/>
            <Submit text='Submit' />
        </form>
    )
}

export default BlogForm