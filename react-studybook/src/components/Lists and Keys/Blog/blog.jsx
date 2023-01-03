import React from 'react';

function Blog(props) {
    if (!props.render) {
        return null;
    }

    const posts = [
        {id: 1, title: 'Привіт, світе', content: 'Ласкаво просимо до вивчення React!'},
        {id: 2, title: 'Установка', content: 'React можна встановити через npm.'}
    ];

    const sidebar = (
        <ul>
            {posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const content = posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

export default Blog;