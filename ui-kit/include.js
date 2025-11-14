/**
 * HTML Include Utility
 *
 * Loads external HTML files into the current page.
 * Usage: includeHTML('container-id', 'path/to/file.html')
 */

function includeHTML(elementId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const element = document.getElementById(elementId);
            if (element) {
                element.outerHTML = html;
            } else {
                console.error(`Element with id "${elementId}" not found`);
            }
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}
