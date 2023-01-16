const botaoCamera = document.querySelector("[data-video-botao");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviar = document.querySelector("[data-enviar]");


let imagemURL = '';

botaoCamera.addEventListener("click", async function (){
    console.log(navigator.mediaDevices.getUserMedia)
    const iniciaVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
    botaoCamera.style.display = "none";
    campoCamera.style.display= "block"

    video.srcObject = iniciaVideo;
})


botaoFoto.addEventListener("click", () =>{
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL("imagem/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block"
})

botaoEnviar.addEventListener("click", () =>{
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converterRetorno = JSON.parse(receberDadosExistentes);

    converterRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converterRetorno));

    window.location.href = "./abrir-conta-form-3.html";
})