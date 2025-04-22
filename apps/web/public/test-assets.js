// Simple script to test image loading paths
document.addEventListener('DOMContentLoaded', function() {
  const resultsDiv = document.createElement('div');
  resultsDiv.style.padding = '20px';
  resultsDiv.style.fontFamily = 'monospace';
  document.body.appendChild(resultsDiv);

  // Test image paths
  const imagePaths = [
    '/assets/hero.png',
    '/hero.png',
    '/assets/ventriloquist-logo.svg',
    '/ventriloquist-logo.svg',
    '/logo-white.svg'
  ];

  imagePaths.forEach(path => {
    const img = new Image();
    img.onload = function() {
      resultsDiv.innerHTML += `<div style="color: green">✓ Successfully loaded: ${path} (${this.naturalWidth}x${this.naturalHeight})</div>`;
    };
    img.onerror = function() {
      resultsDiv.innerHTML += `<div style="color: red">✗ Failed to load: ${path}</div>`;
    };
    img.src = path;
  });
}); 