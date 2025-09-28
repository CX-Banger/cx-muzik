document.addEventListener('DOMContentLoaded', () => {
    const albumGrid = document.querySelector('.album-grid');
    const albumArtPlayer = document.querySelector('.audio-player .album-art');
    const songTitlePlayer = document.querySelector('.audio-player .song-title');
    const songArtistPlayer = document.querySelector('.audio-player .song-artist');
    const playPauseButton = document.querySelector('.audio-player .controls .fa-play');

    const albums = [
        {
            title: 'Freestyle Pour Dieu',
            artist: 'Synaï B.',
            image: 'https://via.placeholder.com/180x180/6a0dad/ffffff?text',
            audio: 'https://hrzmagjjobctkfxayokt.supabase.co/storage/v1/object/public/sons/artiste%202/son2.mp3' // Placeholder audio
        },
        {
            title: 'Obsédé',
            artist: 'NAN(Rap-Gospel)',
            image: 'https://via.placeholder.com/180x180/6a0dad/ffffff?text',
            audio: 'https://hrzmagjjobctkfxayokt.supabase.co/storage/v1/object/public/sons/artiste%201/son2.mp3' // Placeholder audio
        },
        {
            title: 'In God',
            artist: 'Elihem',
            image: 'https://via.placeholder.com/180x180/6a0dad/ffffff?text',
            audio: 'https://hrzmagjjobctkfxayokt.supabase.co/storage/v1/object/public/sons/artiste%203/son1.mp3' // Placeholder audio
        },
        {
            title: 'Sara 1',
            artist: 'Sara',
            image: 'https://via.placeholder.com/180x180/6a0dad/ffffff?text',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' // Placeholder audio
        },
        {
            title: 'Cendrillon',
            artist: 'Kalynn',
            image: 'https://via.placeholder.com/180x180/6a0dad/ffffff?text',
            audio: 'https://hrzmagjjobctkfxayokt.supabase.co/storage/v1/object/public/sons/artiste%205/son1.mp3' // Placeholder audio
        },
        {
            title: 'Melohim (Remix)',
            artist: 'Melohim',
            image: 'https://via.placeholder.com/180x180/6a0dad/ffffff?text',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' // Placeholder audio
        },
        {
            title: 'Tiim 1',
            artist: 'Tiim',
            image: 'https://via.placeholder.com/180x180/6a0dad/ffffff?text',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' // Placeholder audio
        },
        {
            title: 'Math 1',
            artist: 'Math',
            image: 'https://via.placeholder.com/180x180/6a0dad/ffffff?text',
            audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' // Placeholder audio
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
