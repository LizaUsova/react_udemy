
function ResetButton({resetCount}) {
    return (<div className="pt-2 d-flex flex-wrap justify-content-center">
        <button type="button"
                className="btn btn-success fs-5"
                onClick={resetCount}
        >Reset</button>
    </div>)
}

export default ResetButton