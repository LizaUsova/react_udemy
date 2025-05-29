
function Button({onClick}) {
    return (
        <button type="button"
                className="btn btn-primary"
                onClick={onClick}
                >
            Click me!
        </button>
    )
}

export default Button