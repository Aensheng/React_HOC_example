import withData from '../../with-data'
import React from 'react'

const UserProfile = ({ data, name, email }) => (
    <div className='container'>
        <h1> {name} </h1>
        <h2> {email} </h2>
        Posts:
        {
            data.map(post => (
                <div className='post' key={post.id}>
                    <h1> {post.title} </h1>
                    <h2> {post.body} </h2>
                </div>
            ))
        }
    </div>
)

export default withData(UserProfile)