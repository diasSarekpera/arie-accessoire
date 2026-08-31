// Domaine de production : source unique de vérité.
// À changer ici seulement si le site déménage (au lieu de 9 endroits dans le HTML).
const SITE_BASE_URL = "https://ariesaccessoire.onrender.com";
const WHATSAPP_PHONE = "22954959597";

document.querySelectorAll('.product-whatsapp').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // empêche le lien #

        const card = button.closest('.product-card');

        const name = card.dataset.name;
        const price = card.dataset.price;
        // data-image est un chemin relatif dans le HTML ; on le transforme ici
        // en URL absolue cliquable pour le message WhatsApp.
        const relativeImage = card.dataset.image || "";
        const image = relativeImage
            ? `${SITE_BASE_URL}/${relativeImage.replace(/^\.\//, "")}`
            : "";

        const message = `Bonjour Arie's accessoire
Je suis intéressé par le produit :
${name}
Prix : ${price}
Image : ${image}`;

        const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    });
});
