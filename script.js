document.addEventListener('DOMContentLoaded', () => {
    const albumGrid = document.querySelector('.album-grid');
    const albumArtPlayer = document.querySelector('.audio-player .album-art');
    const songTitlePlayer = document.querySelector('.audio-player .song-title');
    const songArtistPlayer = document.querySelector('.audio-player .song-artist');
    const playPauseButton = document.querySelector('.audio-player .controls .fa-play');

    const albums = [
        {
            title: 'Dandelions',
            artist: 'Ruth B.',
            image: 'https://via.placeholder.com/180x180/6a0dad/ffffff?text=Dandelions',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' // Placeholder audio
        },
        {
            title: 'Señorita',
            artist: 'Shawn Mendes',
            image: 'https://via.placeholder.com/180x180/8a2be2/ffffff?text=Senorita',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' // Placeholder audio
        },
        {
            title: 'Heat Waves',
            artist: 'Glass Animals',
            image: 'https://via.placeholder.com/180x180/4b0082/ffffff?text=Heat+Waves',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' // Placeholder audio
        },
        {
            title: 'Mood',
            artist: '24kgoldn',
            image: 'https://via.placeholder.com/180x180/9932cc/ffffff?text=Mood',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' // Placeholder audio
        },
        {
            title: 'Sweater Weather',
            artist: 'The Neighbourhood',
            image: 'https://via.placeholder.com/180x180/da70d6/ffffff?text=Sweater+Weather',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' // Placeholder audio
        },
        {
            title: 'Dancin (Krono Remix)',
            artist: 'Aaron Smith',
            image: 'https://via.placeholder.com/180x180/ba55d3/ffffff?text=Dancin',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' // Placeholder audio
        },
        {
            title: 'No Lie',
            artist: 'Sean Paul',
            image: 'https://via.placeholder.com/180x180/9370db/ffffff?text=No+Lie',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' // Placeholder audio
        },
        {
            title: 'Stereo Hearts (feat. Adam Levine)',
            artist: 'Gym Class Heroes',
            image: 'https://via.placeholder.com/180x180/8a2be2/ffffff?text=Stereo+Hearts',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' // Placeholder audio
        },
        {
            title: 'Eenie Meenie',
            artist: 'Sean Kingston, Justin Bieber',
            image: 'https://via.placeholder.com/180x180/6a0dad/ffffff?text=Eenie+Meenie',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' // Placeholder audio
        },
        {
            title: 'Into Your Arms',
            artist: 'Witt Lowry',
            image: 'https://via.placeholder.com/180x180/8a2be2/ffffff?text=Into+Your+Arms',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' // Placeholder audio
        },
        {
            title: 'Savage Love',
            artist: 'Jason Derulo, Jawsh 685',
            image: 'https://via.placeholder.com/180x180/4b0082/ffffff?text=Savage+Love',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3' // Placeholder audio
        },
        {
            title: 'One Direction',
            artist: 'One Direction',
            image: 'https://via.placeholder.com/180x180/9932cc/ffffff?text=One+Direction',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' // Placeholder audio
        },
        {
            title: 'Blinding Lights',
            artist: 'The Weeknd',
            image: 'https://via.placeholder.com/180x180/da70d6/ffffff?text=Blinding+Lights',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3' // Placeholder audio
        },
        {
            title: 'Starboy',
            artist: 'The Weeknd ft. Daft Punk',
            image: 'https://via.placeholder.com/180x180/ba55d3/ffffff?text=Starboy',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3' // Placeholder audio
        }
    ];

    let currentAudio = new Audio();
    let isPlaying = false;

    function loadAlbumGrid() {
        albumGrid.innerHTML = '';
        albums.forEach(album => {
            const albumItem = document.createElement('div');
            albumItem.classList.add('album-item');
            albumItem.innerHTML = `
                <img src="${album.image}" alt="${album.title}">
                <div class="play-button"><i class="fas fa-play-circle"></i></div>
                <div class="title">${album.title}</div>
                <div class="artist">${album.artist}</div>
                <div class="options"><i class="fas fa-ellipsis-v"></i></div>
            `;
            albumItem.addEventListener('click', () => playSong(album));
            albumGrid.appendChild(albumItem);
        });
    }

    function playSong(album) {
        currentAudio.src = album.audio;
        albumArtPlayer.src = album.image;
        songTitlePlayer.textContent = album.title;
        songArtistPlayer.textContent = album.artist;
        currentAudio.play();
        isPlaying = true;
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');
    }

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            currentAudio.pause();
            isPlaying = false;
            playPauseButton.classList.remove('fa-pause');
            playPauseButton.classList.add('fa-play');
        } else {
            currentAudio.play();
            isPlaying = true;
            playPauseButton.classList.remove('fa-play');
            playPauseButton.classList.add('fa-pause');
        }
    });

    loadAlbumGrid();
});

