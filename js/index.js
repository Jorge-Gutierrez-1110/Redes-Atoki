const apiUrl = 'https://decapi.me/youtube/latest_video?id=UCOax8ucPa34i6-Vs87VKykw';

fetch(apiUrl)
    .then(response => response.text())
    .then(data => {
        console.log("Datos recibidos de StreamElements:", data);

        const match = data.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);

        if (match && match[1]) {
            const videoId = match[1];

            const iframe = document.getElementById('youtube-frame');
            iframe.src = `https://www.youtube.com/embed/${videoId}`;

            document.getElementById('loading-text').style.display = 'none';
        } else {
            console.error("No se pudo encontrar el ID del video en la respuesta.");
        }
    })
    .catch(error => {
        console.error('Error al obtener el video:', error);
        document.getElementById('loading-text').innerText = "No se pudo cargar el video.";
    });

const twitchUser = 'atoki_1110';
const twitchApiUrl = `https://decapi.me/twitch/uptime/${twitchUser}`;

        fetch(twitchApiUrl)
            .then(response => response.text())
            .then(data => {
                console.log("Estado Twitch:", data);

                if (!data.includes("offline")) {
                    const twitchBtn = document.querySelector('.twitch');
                    
                    if (twitchBtn) {
                        twitchBtn.innerHTML = '<i class="fab fa-twitch"></i> 🔴 ¡ESTOY EN VIVO!';
                        
                        twitchBtn.classList.add('live-mode');
                        
                        const linksContainer = document.querySelector('.links');
                        linksContainer.prepend(twitchBtn);
                    }
                }
            })
            .catch(err => console.error('Error Twitch:', err));