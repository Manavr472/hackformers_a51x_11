class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Exam Saviour</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="forums.html">Forums</a>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Notes
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="videos.html">Videos</a>
                  </li>
                  <li><a class="dropdown-item" href="pdf.html">Pdfs</a></li>
                </ul>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `
    }
}

customElements.define('my-header', MyHeader)