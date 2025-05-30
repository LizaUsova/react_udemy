
function Post(props) {
    const { userId, title, body } = props;

    return (
    <div className="card w-100 mb-3">
        <div className="card-body">
            <h5 className="card-title">{userId}</h5>
            <h3 className="card-text">{title}</h3>
            <p className="card-text">{body}</p>
        </div>
    </div>
    )
}

export default Post