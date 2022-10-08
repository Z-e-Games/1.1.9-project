const canvas1 = document.getElementById('canvas1')
const c1 = canvas1.getContext("2d")
const nextBtn = document.getElementById('attack')
const subtitles = document.getElementById('subtitles')
let newX = canvas1.width-280
//Sprites Go Here
const darkWizard2Attack1 = new Image()
const darkWizard2Attack2 = new Image()
const darkWizard2Death = new Image()
const darkWizard2Idle = new Image()
const darkWizard2Run = new Image()
const lightWizard2Attack1 = new Image()
const lightWizard2Attack2 = new Image()
const lightWizard2Death = new Image()
const lightWizard2Idle = new Image()
const lightWizard2Run = new Image()
darkWizard2Attack1.src =  'Sprites/Attack1.png'
darkWizard2Attack2.src = 'Sprites/Attack2.png'
darkWizard2Death.src = 'Sprites/Death.png'
darkWizard2Idle.src = 'Sprites/Idle.png'
darkWizard2Run.src = 'Sprites/Run.png'
lightWizard2Attack1.src =  'Wizard Pack/Attack1.png'
lightWizard2Attack2.src = 'Wizard Pack/Attack2.png'
lightWizard2Death.src = 'Wizard Pack/Death.png'
lightWizard2Idle.src = 'Wizard Pack/Idle.png'
lightWizard2Run.src = 'Wizard Pack/Run.png'
//Sprites End Here

canvas1.width = window.innerWidth
canvas1.height = window.innerHeight

let sceneNumber = 1
DX = 0
DY = 0
LX = 0
LY = 0
let darkWizard2Attack1Frame = 0
let darkWizard2Attack2Frame = 0
let darkWizard2DeathFrame = 0
let darkWizard2IdleFrame = 0
let darkWizard2RunFrame = 0
let lightWizard2Attack1Frame = 0
let lightWizard2Attack2Frame = 0
let lightWizard2DeathFrame = 0
let lightWizard2IdleFrame = 0
let lightWizard2RunFrame = 0
let frameSlow = 0
let staggerFrames = 9;
let DWFIR1 = true
let DWFIR2 = true
let DWFIRDeath = true
let DWFIRIdle = true
let DWFIRRUN = true
let LWFIR1 = true
let LWFIR2 = true
let LWFIRDeath = true
let LWFIRIdle = true
let LWFIRRUN = true
let runningPosition = 0
//Dark Wizard Attack 1

function playAnimation(animationPlayerId, numberOfFramesPlayed,x,y,speed){
    if(animationPlayerId === "Dark Attack 1"){
        DW2A1(numberOfFramesPlayed)
    }else if(animationPlayerId === "Dark attack 2"){
        DW2A2(numberOfFramesPlayed,x,y)
    }else if(animationPlayerId === "Dark Death"){
        DW2D(numberOfFramesPlayed)
    }else if(animationPlayerId === "Dark Idle"){
        DW2I(numberOfFramesPlayed,x,y)
    }else if(animationPlayerId === "Dark Run"){
        DW2R(numberOfFramesPlayed,x,y,speed)
    }else if(animationPlayerId === "Light Attack 1"){
        LW2A1(numberOfFramesPlayed)
    }else if(animationPlayerId === "Light attack 2"){
        LW2A2(numberOfFramesPlayed)
    }else if(animationPlayerId === "Light Death"){
        LW2D(numberOfFramesPlayed,x,y)
    }else if(animationPlayerId === "Light Idle"){
        LW2I(numberOfFramesPlayed,x,y)
    }else if(animationPlayerId === "Light Run"){
        LW2R(numberOfFramesPlayed,speed)
    }

}

function DW2A1(howManyFrames){
    c1.drawImage(darkWizard2Attack1,darkWizard2Attack1Frame * 250,0,250,250,0,0,250,250)
    
    if(frameSlow % staggerFrames === 0 && DWFIR1 === true){
        if(darkWizard2Attack1Frame < howManyFrames){
            darkWizard2Attack1Frame++
        }else {
            darkWizard2Attack1Frame = howManyFrames - 1
            DWFIR1 = false
        }
    }
}
//Dark Wizard Attack 2 
function DW2A2(howManyFrames,x,y){
    c1.drawImage(darkWizard2Attack2,darkWizard2Attack2Frame * 250,0,250,250,x,y,250,250)   
    
    
    if(frameSlow % staggerFrames === 0 && DWFIR2 === true){
        if(darkWizard2Attack2Frame < howManyFrames){
            darkWizard2Attack2Frame++
            
        }else {
            darkWizard2Attack2Frame = howManyFrames - 1
            DWFIR2 = false
        }
    }   
}
//Dark Wizard Die
function DW2D(){
    c1.drawImage(darkWizard2Death,darkWizard2DeathFrame * 250,0,250,250,500,0,250,250)
    if(frameSlow % staggerFrames === 0 && DWFIRDeath === true){
        
        if(darkWizard2DeathFrame < 7){
            darkWizard2DeathFrame++
        }else {
            darkWizard2DeathFrame = howManyFrames - 1
            DWFIRDeath = false
        }
    }
}
//Dark Wizard Idle 
function DW2I(howManyFrames,x,y){
    c1.drawImage(darkWizard2Idle,darkWizard2IdleFrame * 250,0,250,250,x,y,250,250)
    if(frameSlow % staggerFrames === 0 && DWFIRIdle === true){
        if(darkWizard2IdleFrame < howManyFrames){
            darkWizard2IdleFrame++
        }else {
            darkWizard2IdleFrame = 0
        }
    }
}
function finalAnimation(){
    c1.drawImage(darkWizard2Idle,darkWizard2IdleFrame * 250,0,250,250,100,100,1000,1000)
    if(frameSlow % staggerFrames === 0 && DWFIRIdle === true){
        if(darkWizard2IdleFrame < 7){
            darkWizard2IdleFrame++
        }else {
            darkWizard2IdleFrame = 0
        }
    }
}
//Dark Wizard Run 
// 20 pixels per frame
// 140 pixels per execution

let executions = 0
function DW2R(executionTimes,x,y,speed){
    c1.drawImage(darkWizard2Run,darkWizard2RunFrame * 250,0,250,250,x,y,250,250)
    if(frameSlow % staggerFrames === 0 && DWFIRRUN === true && executionTimes > executions){
        if(darkWizard2RunFrame < 7){
            darkWizard2RunFrame++
            x = x + speed
        }else{
            darkWizard2RunFrame = 0
        }
        executions++
    }
}

function LW2A1(howManyFrames){
    c1.drawImage(lightWizard2Attack1,lightWizard2Attack1Frame * 231,0,231,231,0,0,231,231)
    
    if(frameSlow % staggerFrames === 0 && LWFIR1 === true){
        if(lightWizard2Attack1Frame < howManyFrames){
            lightWizard2Attack1Frame++
        }else {
            lightWizard2Attack1Frame = howManyFrames - 1
            LWFIR1 = false
        }
    }
}
//Dark Wizard Attack 2 
function LW2A2(howManyFrames){
    c1.drawImage(darkWizard2Attack2,darkWizard2Attack2Frame * 231,0,231,231,231,0,231,231)   
    if(frameSlow % staggerFrames === 0 && LWFIR2 === true){
        if(darkWizard2Attack2Frame < howManyFrames){
            darkWizard2Attack2Frame++
        }else {
            darkWizard2Attack2Frame = howManyFrames - 1
            LWFIR2 = false
        }
    }   
}
//Dark Wizard Die
function LW2D(howManyFrames,x,y){
    c1.drawImage(lightWizard2Death,lightWizard2DeathFrame * 231,0,231,231,x,y,231,231)
    if(frameSlow % staggerFrames === 0 && LWFIRDeath === true){
        
        if(lightWizard2DeathFrame < howManyFrames){
            lightWizard2DeathFrame++
        }else {
            lightWizard2DeathFrame = howManyFrames - 1
            LWFIRDeath = false
        }
    }
}
//Dark Wizard Idle 
function LW2I(howManyFrames,x,y){
    c1.drawImage(lightWizard2Idle,lightWizard2IdleFrame * 231,0,231,231,x,y,231,231)
    if(frameSlow % staggerFrames === 0 && LWFIRIdle === true){
        if(lightWizard2IdleFrame < howManyFrames){
            lightWizard2IdleFrame++
        }else {
            lightWizard2IdleFrame = howManyFrames - 1
        }
    }
}
//Dark Wizard Run 
// 20 pixels per frame
// 140 pixels per execution
function LW2R(executionTimes,speed){
    let executions = 0
    c1.drawImage(darkWizard2Run,darkWizard2RunFrame * 231,0,231,231,x,y,231,231)
    if(frameSlow % staggerFrames === 0 && LWFIRRUN === true && executionTimes > executions){
        if(darkWizard2RunFrame < 7){
            darkWizard2RunFrame++
            runningPosition+=speed
        }else{
            darkWizard2RunFrame = 6
        }
        executions++
    }
}
