document.getElementById('unblockButton').addEventListener('click', () => {
    const url = document.getElementById('urlInput').value;
    fetch(`/api/proxy?url=${encodeURIComponent(url)}`)
        .then(response => response.text())
        .then(data => {
            const iframe = document.getElementById('displayFrame');
            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write(data);
            iframe.contentWindow.document.close();
        })
        .catch(error => console.error('Error:', error));
});

