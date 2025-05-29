function Person(props) {
    const {firstName, lastName, email, img} = props;

    return (
    <div className="card mb-3" style={{ width: '540px' }}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="img"></img>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{firstName} {lastName}</h3>
                    <p className="card-text">{email}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Person