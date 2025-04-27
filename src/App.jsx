import React, { useState, useEffect } from "react";
import Lottie from "lottie-react"; // Para animações de partículas
import particlesAnimation from "../src/animations/particles.json"; // Animação de partículas
import "./App.css"; // Importa o arquivo de estilos

const RomanticApp = () => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [audio] = useState(new Audio("/music/music.mp3")); // Cria o objeto de áudio

    const messages = [
        "Você é a luz que ilumina meus dias. ❤️",
        "Desculpa por não demonstrar tanto, mas você é tudo para mim. 🌹",
        "Eu te amo mais do que palavras podem expressar. 💕",
        "Prometo valorizar mais cada momento ao seu lado. 🌟",
        "Você merece todas as flores do mundo, e muito mais. 🌸",
        "Você é minha inspiração e minha felicidade. 💖",
        "Eu quero passar o resto da minha vida ao seu lado. 💍",
        "Você é o motivo do meu sorriso todos os dias. 😊",
        "Eu te amo mais do que qualquer coisa neste mundo. 🌎",
        "Você é minha alma gêmea, meu destino. 💕",
        "Eu quero construir um futuro lindo com você. 🏡",
        "Você é tudo para mim, e sempre será. ❤️",
        "Cada momento ao seu lado é um presente. 🎁",
        "Você é a razão pela qual acredito no amor verdadeiro. 💓",
        "Meu coração é seu, hoje e sempre. 💞",
        "Você é a melodia que dá ritmo à minha vida. 🎶",
        "Eu te amo mais a cada dia que passa. ⏳",
        "Você é o meu porto seguro, meu lar. 🏠",
        "Com você, tudo é mais bonito. 🌈",
        "Você é o meu sonho que se tornou realidade. ✨",
        "Eu sou grato por cada segundo ao seu lado. 🙏",
        "Você é a estrela que guia meu caminho. ⭐",
        "Eu faria tudo de novo só para te encontrar. 🔄",
        "Você é o meu para sempre. ♾️",
        "Eu te amo mais do que as palavras podem dizer. 📝",
        "Você é o meu sol em dias nublados. ☀️",
        "Eu sou a pessoa mais sortuda por ter você. 🍀",
        "Você é o meu mundo inteiro. 🌍",
        "Eu quero envelhecer ao seu lado. 👵👴",
        "Você é o meu maior tesouro. 💎",
        "Eu te amo mais do que o infinito. ♾️",
        "Você é a razão do meu sorriso. 😊",
        "Eu nunca imaginei que poderia amar alguém assim. 💕",
        "Você é o meu melhor amigo e meu amor. 👫",
        "Eu te amo mais do que as estrelas no céu. 🌌",
        "Você é o meu tudo. 🥰",
        "Eu sou completo com você ao meu lado. 🧩",
        "Você é a poesia da minha vida. 📖",
        "Eu te amo mais do que o universo. 🌠",
        "Você é o meu maior presente. 🎁",
        "Eu quero passar cada momento ao seu lado. ⏰",
        "Você é o meu amor eterno. 💓",
        "Eu sou grato por cada sorriso que você me dá. 😊",
        "Você é a razão pela qual eu acredito no amor. 💖",
        "Eu te amo mais do que qualquer coisa neste mundo. 🌎",
        "Você é o meu destino. 💕",
        "Eu quero construir um futuro lindo com você. 🏡",
        "Você é tudo para mim, e sempre será. ❤️",
        "Você é a minha felicidade. 🌟",
        "Eu te amo mais do que o céu e o mar juntos. 🌊",
        "Você é o meu arco-íris depois da tempestade. 🌈",
        "Eu sou a pessoa mais feliz do mundo por ter você. 🥰",
        "Você é o meu amor, minha vida, meu tudo. 💕",
        "Eu te amo mais do que qualquer coisa que eu possa imaginar. 💭",
        "Você é o meu conto de fadas. 🏰",
        "Eu quero passar cada segundo da minha vida ao seu lado. ⏳",
        "Você é o meu amor verdadeiro. 💓",
        "Eu sou grato por cada momento que passamos juntos. 🙏",
        "Você é a luz que ilumina meu caminho. 🌟",
        "Eu faria qualquer coisa para te ver feliz. 😊",
        "Você é o meu amor eterno. ♾️",
        "Eu te amo mais do que as palavras podem expressar. 📝",
        "Você é o meu tudo, hoje e sempre. ❤️",
    ];

    const images = Array.from({ length: 63 }, (_, i) => `/assets/${i + 1}.jpeg`);

    const playMusic = () => {
        audio.loop = true; // Configura o loop
        audio.play(); // Reproduz o áudio
        setIsMusicPlaying(true); // Atualiza o estado
    };

    useEffect(() => {
        const messageInterval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % messages.length);
        }, 4000);

        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(messageInterval);
            clearInterval(imageInterval);
        };
    }, []);

    return (
        <div className="container">
            {/* Fundo com partículas */}
            <Lottie animationData={particlesAnimation} loop className="particles" />

            {/* Botão para iniciar a música */}
            {!isMusicPlaying && (
                <button className="play-music-button" onClick={playMusic}>
                    🎵 Começar Música
                </button>
            )}

            {/* Carrossel de imagens */}
            <div className="image-carousel">
                <img src={images[currentImageIndex]} alt="Romantic" className="background-image" />
            </div>

            {/* Mensagens animadas */}
            <div className="message-carousel">
                <p className="message">{messages[currentMessage]}</p>
            </div>
        </div>
    );
};

export default RomanticApp;