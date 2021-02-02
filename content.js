const interval = setInterval(() =>{
  const header = document.querySelector("._2O84H")
  if(header){
    console.log(header)
    clearInterval(interval)

    const button2x = document.createElement("button")
    button2x.innerHTML = "2x"
    button2x.classList.add("fastButton")

    button2x.addEventListener("click",()=>{
      console.log("Botao pressionado")
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio)=>{
        console.log("Audio ajustado 2x")
        audio.playbackRate = 2;
      })
    })

    const button15x = document.createElement("button")
    button15x.innerHTML = "1.5x"
    button15x.classList.add("fastButton")

    button15x.addEventListener("click",()=>{
      console.log("Botao pressionado")
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio)=>{
        console.log("Audio ajustado 1.5x")
        audio.playbackRate = 1.5;
      })
    })

    const button125x = document.createElement("button")
    button125x.innerHTML = "1.25x"
    button125x.classList.add("fastButton")

    button125x.addEventListener("click",()=>{
      console.log("Botao pressionado")
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio)=>{
        console.log("Audio ajustado 1.25x")
        audio.playbackRate = 1.25;
      })
    })

    header.appendChild(button2x)
    header.appendChild(button15x)
    header.appendChild(button125x)

  }
}, 1000)
