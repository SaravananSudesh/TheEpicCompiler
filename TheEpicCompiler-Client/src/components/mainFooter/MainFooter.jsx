import './MainFooter.css'

function MainFooter({ applyOutputVisible }) {

    return (
        <div className="footer">
            <span className="relative z-0 inline-flex p-2">
                <button type="button" className="footer-button" onClick={() => applyOutputVisible(true)}>
                    Output
                </button>
                <button type="button" className="footer-button">
                    Run
                </button>
                <span className="ms-auto p-2 text-light-c-1 dark:text-dark-c-1">
                    Ready
                </span>
            </span>
        </div>
    )

}

export default MainFooter