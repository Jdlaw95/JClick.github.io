document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.getElementById('terminal');
    const messages = [
        "Initializing breach...",
        "Bypassing firewall... [OK]",
        "Accessing mainframe... [OK]",
        "Downloading sensitive data... 100%",
        "Downloading sensitive data... 100%",
        "Download complete!",
        "Installing malware... [OK]",
        "LOCATION TRACKING ACTIVATED",
        "WEBCAM ACCESS GRANTED",
        "ALL PASSWORDS COMPROMISED",
        "Sending data to server...",
        "> $ rm -rf / --no-preserve-root",
        "Gallery forwarded successfully!",
        "Contact list downloaded",
        "Hidden folder copied"
        "Mobile Banking software compromised"
        "Tranfer from SAVINGS/TRANSACTIONAL Account pending"
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < messages.length) {
            terminal.innerHTML += messages[i] + '\n';
            terminal.scrollTop = terminal.scrollHeight;
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000);

    // Create random "hacking" numbers in background
    setInterval(() => {
        const randomChars = Array(100).fill(0).map(() => 
            Math.random() > 0.5 ? '0' : '1').join('');
        document.body.style.backgroundImage = 
            `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), 
             url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><text x="10" y="10" font-family="monospace" font-size="10" fill="lime">${randomChars}</text></svg>')`;
    }, 100);
});
