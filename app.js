
const script = ["Dark wizard(the one on the right) Wishful thinking, especially for a weak wizard like you.",
"Good Wizard: Frimpong bing bong.",
"Dark Wizard: Then take this!",
"The Dark Wizard Uses Clone",
"Good wizard:How Did you do that?",
"Dark Wizard: A simple clone spell took you down. That was just a basic spell.",
"Good Wizard: I did not lose yet", 
"Both the wizards collide with powerful attacks",
"Dark Wizard: You are no competition for my magic", 
"Good wizard: How are you doing this... noooooooo",
"Dark Wizard: That was easier than I thought it would be.",
"Now I rule this kingdom!"





]
conditionOne = 1
function fight1Animation(){
    c1.clearRect(0,0,canvas1.width,canvas1.height)
    if(sceneNumber <5){
        playAnimation('Dark Idle',7, canvas1.width-280,canvas1.height/2)
        playAnimation('Light Idle', 5, 30,canvas1.height/2)
    }
    if(sceneNumber === 5){
        staggerFrames = 15
        playAnimation('Dark attack 2',8,-100,canvas1.height/2)
        conditionOne += 1/staggerFrames
        c1.drawImage(lightWizard2Death,lightWizard2DeathFrame * 231,0,231,231,30,canvas1.height/2,231,231)
        if(conditionOne > 8){
            console.log(LWFIRIdle)
            staggerFrames = 11
            playAnimation('Light Death',6,30,canvas1.height/2)
            playAnimation('Dark Idle',3,canvas1.width-280,canvas1.height/2)
        }

    }
    if(sceneNumber === 6 || sceneNumber === 7){
        staggerFrames = 9
        c1.drawImage(lightWizard2Death,6 * 231,0,231,231,30,canvas1.height/2,231,231)
        playAnimation('Dark Idle',3,canvas1.width-280,canvas1.height/2)
    }
    if(sceneNumber === 8 || sceneNumber === 9){
        
        playAnimation('Light Idle', 5, 30,canvas1.height/2)
        playAnimation('Dark Idle',7, canvas1.width-280,canvas1.height/2)
    }
    if(sceneNumber === 10){
        playAnimation('Light Idle', 5, canvas1.width/2,canvas1.height/2)
        playAnimation("Dark Idle",7,canvas1.width-280,canvas1.height/2)
        playAnimation("Dark Idle",7,          Math.floor(Math.random() * canvas1.width) + 1         ,        Math.floor(Math.random() * canvas1.height) + 1)

    }
    if(sceneNumber === 11){
        staggerFrames = 30
        playAnimation('Light Death',6,canvas1.width/2,canvas1.height/2)
        playAnimation("Dark Idle",7,canvas1.width-280,canvas1.height/2)
        playAnimation("Dark Idle",7,          Math.floor(Math.random() * canvas1.width) + 1         ,        Math.floor(Math.random() * canvas1.height) + 1)
    }
    if(sceneNumber === 12){
        finalAnimation()
    }


    frameSlow++
    animationId = requestAnimationFrame(fight1Animation)
}
fight1Animation()
addEventListener('click',() => {
    if(sceneNumber === 0){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 1){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 2){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 3){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 4){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 5){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 6){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 7){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 8){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 9){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 10){
        sceneNumber++
        subtitles.innerHTML = script[sceneNumber - 1]
    }else if(sceneNumber === 11){
        subtitles.innerHTML = script[sceneNumber - 1]
        sceneNumber++
    }else if(sceneNumber === 12){
        subtitles.innerHTML = script[sceneNumber - 1]
    }

})