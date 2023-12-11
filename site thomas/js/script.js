const imageNames = [
    "1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg"
];

const titles = [
    "Jeune femme à l'aiguière", "Le Christ dans la maison de Marthe et Marie", "L’Entremetteuse",
    "Une jeune fille assoupie", "Le Soldat et jeune fille riant", "La Liseuse à la fenêtre",
    "La Jeune Fille au verre de vin", "La Laitière", "La Ruelle", "La Leçon de musique",
    "Le Concert", "Une femme buvant avec deux hommes", "La Femme au luth",
    "La Femme en bleu lisant une lettre", "La Femme à la balance", "La Dame au collier de perles",
    "Jeune femme écrivant une lettre", "La Jeune Fille à la perle"
];

function getImageElement(imageName, title) {
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const descriptionContainer = document.createElement('div');

    image.src = 'img/' + imageName;
    image.alt = 'changer-images';
    image.title = title; // Utiliser le titre comme attribut 'title' pour que quand on survole l'image on voit le titre
    image.className = 'randomImage';

    descriptionContainer.className = 'descriptionContainer';
    const description = getDescriptionForTitle(title);
    descriptionContainer.innerHTML = `<p>${description}</p>`;

    imageContainer.appendChild(image);
    imageContainer.appendChild(descriptionContainer);

    return imageContainer;
}

function getDescriptionForTitle(title) {
    switch (title) {
        case "Jeune femme à l'aiguière":
            return "Jeune femme à l'aiguière, parfois appelée aussi Femme à l'aiguière, est un tableau de Johannes Vermeer peint vers 1662-1665, et exposé au Metropolitan Museum of Art de New York.";
        case "Le Christ dans la maison de Marthe et Marie":
            return "Le Christ dans la maison de Marthe et Marie est l'un des premiers tableaux de Johannes Vermeer peint vers 1655, exposé à la National Gallery of Scotland d'Édimbourg.";
        case "L’Entremetteuse":
            return "L’Entremetteuse est une huile sur toile de Johannes Vermeer. Signée en bas à droite du cadre et datée de 1656, elle mesure 143 cm de haut et 130 cm de large. Elle est conservée à la Gemäldegalerie Alte Meister de Dresde.";
        case "Une jeune fille assoupie":
            return "Une jeune fille assoupie est un tableau de Johannes Vermeer peint vers 1657, exposé au Metropolitan Museum of Art de New York.";
        case "Le Soldat et jeune fille riant":
            return "Le Soldat et jeune fille riant, appelé aussi l'Officier et la jeune fille riant, est une huile sur toile de Johannes Vermeer peinte vers 1657. Mesurant 50,5 cm de haut et 46 cm de large, le tableau est actuellement exposé à la Frick Collection de New York.";
        case "La Liseuse à la fenêtre":
            return "La Liseuse à la fenêtre est un tableau de Johannes Vermeer. Peint vers 1657, il est signé sur le mur, entre la robe de la jeune femme et le rideau « JMeer ». Il est actuellement exposé à la Gemäldegalerie Alte Meister de Dresde.";
        case "La Jeune Fille au verre de vin":
            return "La Jeune Fille au verre de vin est un tableau de Johannes Vermeer peint entre 1659 et 1660, exposé au Herzog Anton Ulrich-Museum de Brunswick en Basse-Saxe, une huile sur toile de 78 × 67 cm.";
        case "La Laitière":
            return "La Laitière est une peinture à l'huile sur toile de 45,5 × 41 cm, réalisée vers 1658 par Johannes Vermeer, dit « Vermeer de Delft », et exposée depuis 1908 au Rijksmuseum d'Amsterdam.";
        case "La Ruelle":
            return "La Ruelle est une peinture à l'huile sur toile de Johannes Vermeer de 54,3 × 44 cm, peinte vers 1658, et exposée au Rijksmuseum d'Amsterdam.";
        case "La Leçon de musique":
            return "La Leçon de musique est un tableau de Johannes Vermeer peint vers 1662-1665. Il est conservé dans la Royal Collection et peut être exposé au Palais de Buckingham ou au Palais St. James de Londres.";
        case "Le Concert":
            return "Le Concert est un tableau de Johannes Vermeer, peint entre 1663 et 1666. Il était exposé au musée Isabella-Stewart-Gardner de Boston, avant d'être volé en 1990. C'est peut-être l'une des œuvres volées les plus chères, son estimation est d'environ 250 000 000 $.";
        case "Une femme buvant avec deux hommes":
            return "Une femme buvant avec deux hommes est une peinture de 1658 de Pieter de Hooch, un exemple de la peinture hollandaise de l'âge d'or et fait partie de la collection de la National Gallery de Londres. La peinture a été documentée par Hofstede de Groot en 1908.";
        case "La Femme au luth":
            return "La Femme au luth est un tableau de Johannes Vermeer peint vers 1662-1663, et exposé au Metropolitan Museum of Art de New York.";
        case "La Femme en bleu lisant une lettre":
            return "La Femme en bleu lisant une lettre est un tableau de Johannes Vermeer réalisé vers 1662-1665. Cette huile sur toile de 46,5 cm par 39 cm est aujourd'hui conservée au Rijksmuseum, à Amsterdam.";
        case "La Femme à la balance":
            return "La Femme à la balance, autrefois également La Peseuse de perles, ou encore La Peseuse d'or, est une huile sur toile du peintre néerlandais du Siècle d'or Johannes Vermeer, exécutée entre 1662 et 1665, et actuellement conservée à la National Gallery of Art de Washington DC.";
        case "La Dame au collier de perles":
            return "La Dame au collier de perles est un tableau de Johannes Vermeer peint en 1664, exposé au Staatliche Museen Preussischer Kulturbesitz, dans la Gemäldegalerie de Berlin.";
        case "Jeune femme écrivant une lettre":
            return "Jeune femme écrivant une lettre est un tableau de Johannes Vermeer peint vers 1665 et exposé à la National Gallery of Art de Washington.";
        case "La Jeune Fille à la perle":
            return "La Jeune Fille à la perle est une peinture à l'huile sur toile réalisée par le peintre néerlandais Johannes Vermeer vers 1665. Ce tableau de moyenne dimension est un portrait en buste d'une jeune femme anonyme — peut-être l'une des filles de Vermeer — portant une perle à l'oreille ainsi qu'un turban sur la tête.";
        default:
            return "Description par défaut";
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function changeAllImages() {
    const container = document.getElementById('imageContainer');
    container.innerHTML = ''; // Supprimer les images existantes pour faire un nettoyage

    shuffleArray(imageNames); // Mélanger les noms d'images et les titres simultanément
    shuffleArray(titles);

    // Ajouter 12 images aléatoires avec les nouveaux noms d'images et titres
    for (let i = 0; i < 12; i++) {
        const randomImageName = imageNames[i];
        const randomTitle = titles[i];
        const imageElement = getImageElement(randomImageName, randomTitle);
        container.appendChild(imageElement);
    }
}

document.addEventListener('DOMContentLoaded', changeAllImages);

// Ajouter un gestionnaire d'événements pour le bouton
document.getElementById('changer-images').addEventListener('click', changeAllImages);
