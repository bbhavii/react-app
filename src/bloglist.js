const BlogList = ({blogs, title, handleDelete}) => {

    

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((eachblog) => (
                <div className="blog-preview" key={eachblog.id}>
                    <h2>{eachblog.title}</h2>
                    <p>Written by {eachblog.author}</p>
                    <button onClick={() => handleDelete(eachblog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;