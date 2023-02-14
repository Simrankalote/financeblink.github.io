const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<title>FINANCE BLINK </title>
<link rel="shortcut icon" type="x-icon"
href="images/iteration.png">

<link rel="stylesheet" type="text/css" href="sty.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
   
<div>
    <div class="header">
    <section id="navigation">
        <div class="sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 border-bottom ">
                <div class="container-fluid">
                    <a class="navbar-brand fs-3" href="index.html"><span class="logohead">FINANCE BLINK</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 text-end">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page"
                                    href="aboutus.html">About
                                    us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"
                                    href="contactus.html">Contact
                                    US</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    LOANS
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Personal Loans</a></li>
                                    <li><a class="dropdown-item"
                                            href="vehicleloan.html">Vehicle
                                            Loan</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">Loan Against Property</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Tools
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item"
                                            href="loancalci.html">Loan
                                            Calculator</a></li>
                                    <li><a class="dropdown-item"
                                            href="loancalci.html">Blog</a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#rev">Client Reviews</a></li>
                                </ul>
                            </li>

                        </ul>

                        <a href="signup.html">
                            <button class="wxyz btn-outline-success" type="submit">SIGN UP</button>
                        </a>

                    </div>
                </div>
            </nav>
        </div>
    </section>
    </div>
</div>
`




class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);