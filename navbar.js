// navbar.js
// export function loadNavbar() {
//     const navbarHTML = `
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div class="container-fluid">
//             <a class="navbar-brand" href="index.html">
//                 <img src="/logoMalskyAtelierDigital-cropped.svg" alt="Logo" height="40">
//                 Malsky Atelier Digital
//             </a>
//             <!-- Bouton burger -->
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//             <!-- Contenu du menu -->
//             <div class="collapse navbar-collapse" id="navbarNav">
//                 <ul class="navbar-nav ms-auto">
//                     <li class="nav-item"><a class="nav-link" href="index.html">Accueil</a></li>
//                     <li class="nav-item"><a class="nav-link" href="cours.html">Cours</a></li>
//                     <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
//                     <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
//     `;
//     document.querySelector('#navbar').innerHTML = navbarHTML;
// }

export function loadNavbar() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="/logoMalskyAtelierDigital-cropped.svg" alt="Logo" height="40">
                Malsky Atelier Digital
            </a>
            <!-- Bouton burger -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Contenu du menu -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    document.querySelector('#navbar').innerHTML = navbarHTML;
}
