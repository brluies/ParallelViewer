async function loadTEI(file, elementId) {
    const response = await fetch(file);
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    const bodyContent = xmlDoc.getElementsByTagName("body")[0];
    document.getElementById(elementId).innerHTML = bodyContent.innerHTML;
}
    window.onload = () => {
    loadTEI('/parallel-viewer/tei_files/CaxtonGoldenLegend1483.xml', 'text1');
    loadTEI('/parallel-viewer/tei_files/SienaGoldenLegende.xml', 'text2');
};
};
