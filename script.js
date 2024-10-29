async function loadTEI(file, elementId) {
    const response = await fetch(file);
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    const bodyContent = xmlDoc.getElementsByTagName("body")[0];
    document.getElementById(elementId).innerHTML = bodyContent.innerHTML;
}

window.onload = () => {
    loadTEI('tei_files/document1.xml', 'text1');
    loadTEI('tei_files/document2.xml', 'text2');
};
