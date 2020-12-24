/**
 * This file is entry file for your library
 */

export function render(): void {
    const root = document.querySelector('app-root');
    if (root) {
        root.innerHTML = '<div>Hello World</div>';
    }
}