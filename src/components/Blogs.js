import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import blogsService from '../services/blogs'

const Blogs = () => {
    const [blogs, setBlogs] = useState(null)

    const blogsList = () => {
        return blogs.map(blog => {
            return (
                <Blog key={blog.id} blog={blog} />
            )
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const blogs = await blogsService.getAll()
            setBlogs(blogs)
            console.log(blogs)
        }
        fetchData()
      }, [])

    return <div>{blogs && blogsList()}</div>
}

export default Blogs