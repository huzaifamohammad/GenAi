import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {/* Add your logo image here */}
                        <img src="/images/F3png.png" alt="Logo" width="100" height="50" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container-fluid mt-5">
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <h1 className="header">Hi there, John</h1>
                        <h2 className="subheader">What would you like to know?</h2>
                    </div>
                </div>
              
                <div className="row justify-content-center">
                    <div className="col-6 col-md-3">
                        <button className="btn btn-light btn-block prompt">Write a to-do list</button>
                    </div>
                    <div className="col-6 col-md-3">
                        <button className="btn btn-light btn-block prompt">Generate an email</button>
                    </div>
                    <div className="col-6 col-md-3">
                        <button className="btn btn-light btn-block prompt">Summarize this article</button>
                    </div>
                    <div className="col-6 col-md-3">
                        <button className="btn btn-light btn-block prompt">How does AI work?</button>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-8">
                        <div className="input-area">
                            <input type="text" className="form-control mb-2" placeholder="Ask whatever you want..." />
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-primary me-2">Add Attachment</button>
                                <button className="btn btn-primary">Use Image</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
