const e = require("express");

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt()
    window.deferredPrompt = null;
    butInstall.classList
});


window.addEventListener('appinstalled', (event) => {
    console.log('ATE was installed.', event);
    window.deferredPrompt = null;
});
