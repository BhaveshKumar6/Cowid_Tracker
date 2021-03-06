import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className = "navbar-brand" href = " " >COVID19 - Tracker</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className = "nav-link" href = "/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item"> 
                                <a className = "nav-link" href = "/country" >Country</a>
                            </li>
                            <li className="nav-item">
                                <a className = "nav-link" href = "/state" >State</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;
