export function newPictureElement(imageScr, alt, className) {
    const profilePicture = document.createElement('img');

    profilePicture.setAttribute('src', imageScr);
    profilePicture.setAttribute('alt', alt);

    profilePicture.classList.add(className);

    return profilePicture;
}

export function textElement(nameElement, text, classes) {
    const textElement = document.createElement(nameElement);

    textElement.textContent = text;

    classes.forEach((className) => textElement.classList.add(className));

    return textElement;
}

export function createSection(classes) {
    const newSection = document.createElement('section');
    classes.forEach((className) => newSection.classList.add(className));
    return newSection;
}
