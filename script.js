

var frameTestCounter = 0
var running = true
var calibrateTimer

// sons
{
    var amigoTalk = new Audio()
    amigoTalk.src = "sounds/amigoTalk.mp3"

    var finalBossMusic = new Audio()
    finalBossMusic.src = "sounds/finalBossMusic.mp3"
    finalBossMusic.loop = true

    var mainMenuMusic = new Audio()
    mainMenuMusic.src = "sounds/mainMenuMusic.mp3"
    mainMenuMusic.loop = true

    var platformerDark = new Audio()
    platformerDark.src = "sounds/platformerDark.mp3"
    platformerDark.loop = true

    var platformerTutorial = new Audio()
    platformerTutorial.src = "sounds/platformerTutorial.mp3"
    platformerTutorial.loop = true

    var pressMenuButton = new Audio()
    pressMenuButton.src = "sounds/pressMenuButton.mp3"

    var respawnScreenMusic = new Audio()
    respawnScreenMusic.src = "sounds/respawnScreenMusic.mp3"

    var jumpSFX = new Audio()
    jumpSFX.src = "sounds/jump.mp3"

    var dyingSFX = new Audio()
    dyingSFX.src = "sounds/dying.mp3"

    var javaliSFX = new Audio()
    javaliSFX.src = "sounds/javali.mp3"
    javaliSFX.loop = true

    var clickSFX = new Audio()
    clickSFX.src = "sounds/click.mp3"
}

// variaveis platformer
{
    var nSprite = 8
    var racioImg = 5624/(650/2)
    var duracaoCiclo = 60 //frames
    var javaliOnScreen;
    var dialogueTimeout;
    var platformGameIsRunning = true;
    var object = {
        position: {y: 200, x: 200},
        velocity: {x:10, y: 0}
    };
    for (let i=1; i<10; i++) {
        window["background"+i] = {
            position: {x: 0},
            velocity: {x:0, y: 0}
        }
    }
    for (let i=1; i<=5; i++) {window['amigo'+i] = false}
    var jumpVelocity = innerHeight/80 //100
    var currentLevel
    var direita = false;
    var esquerda = false;
    var isOnGround = true
    var gravidade = 9.81;
    var firstJump;
    var isOnWall;
    var hasWallJumped;
    var contadorSprite = 0
    var orientacao;
    var isOnMid;
    var playerSpeed = 0.35
    var direitaBG = false
    var playerAndBGSpeed = 60 // mexer nisto para custumizar o quao rapido a primeira camada se mexe e o bixo
    var playerWidth = 173
    var playerHeight = 80
    var isOnTopOfObject
    var hasDied
    var numParedes
    var numBolotas
    var numEspinho
    var numJavali
    var numAmigo;
    var numDica;
    var numMobilia
    var bolotasApanhadas
    var imgsrc
    var primeiro
    var numElemento
    var numCheckpoint
    var currentCheckpoint
    var ultimaParede = 1, primeiraParede = 1, ultimaParedeEncontrada;
    var ultimaBolota = 1, primeiraBolota = 1, ultimaBolotaEncontrada;
    var ultimoEspinho = 1, primeiroEspinho = 1, ultimoEspinhoEncontrado;
    var ultimoJavali = 1, primeiroJavali = 1, ultimoJavaliEncontrado;
    var ultimoAmigo = 1, primeiroAmigo = 1, ultimoAmigoEncontrado;
    var ultimoCheckpoint = 1, primeiroCheckpoint = 1, ultimoCheckpointEncontrado;
    var primeiraParedeJavali, ultimaParedeJavali
    window['dialogoAmigo'+0] = "John: What is this? Can you feel it...?"
    window['dialogoAmigo'+1] = "Emily: Sid! Are you ok? Our nature… is being destroyed. Maybe we should do something, I feel it. I can dodge a bullet. I can help you! Think about it…"
    window['dialogoAmigo'+2] = "Arwen: Aren’t you tired of running? Always trying to find a safe place? Fight for your freedom… our freedom. I’m with you. I’ll treat your wounds, I’ll help you thrive."
    window['dialogoAmigo'+3] = "Maurice: I’ve heard about what happened. The animal got your back. With my oak nuts and the beauty of friendship, we can neutralize any human. E-a-s-y. Let’s rebel! Don’t be afraid."
    window['dialogoAmigo'+4] = "Louis: Everyday I wish I could poison those humans and save our land. They don’t know the damage they’re doing - and you can’t live like this! You should be able to settle! We must stop it, together!"
    window['dialogoAmigo'+5] = "Solomon: I see it in you - no more running, right? Let’s finally face it then! No more lost homes. No more deaths. And well, count me in! I’m sure my presence will increase our strength! Let’s go, Sid. The time is now!"



}

// variaveis finalBoss
{
    var currentDisplay = 0
    var opacityEGS
    var loadingTime = 6000
    var frameRate = 60
    var alturaCharacter = 80
    var charSelecionado = "images/blank.png";
    var nPaths = 5;
    var bixoNumero = 0;
    var bixoInimigoNumero = 0;
    var gameIsRunning = false
    var saldoBolota = 50
    var hpJogador = 5000
    var hpJogadorInimigo = 5000
    var numerodebixos = 13;
    var bullet = 1
    var spawnTimer
    var durac, dmg, hp, atackspeed, numberCharacter, tipoDeBixo, width, height, inimigoEscolhido, inimigoEscolhidosrc, row, combat, sourceBulltet, limit, nSprites, cicleDuration, imgRatio;
    var bolotasExtra = 0
    var spriteNum
    var evadeChanceMultiplier = 1
    var damageBoostMultiplier = 1
    var healthPointsExtra = 0
    var poisonDamage = 0
    var bulletType
    var damageType
    var bulletWidth
    var bulletHeight
    var hpbar = {
        height: 8,
        width: 40
    }
    var hpbarPlayers = {
        height: ((innerHeight * 6)/100)/1.7,
        width: innerWidth/3
    }
    window['valoresBixoInimigo'+0] = {
        status: "player",
        hp: hpJogador,
        width: 0
    }
    window['valoresBixo'+0] = {
        status: "player",
        hp: hpJogadorInimigo,
        width: ((window.innerWidth*77)/100)*0.005
    }
    for (let i=1; i<=5; i++) {
        window['rangedRowOccupied'+i] = false
        window['rangedEnemyRowOccupied'+i] = false
    }
    for (let i=1; i<=5; i++) {
        window['limiteNum'+i] = 1
    }

    window['price'+1] = 12
    window['price'+2] = 16
    window['price'+3] = 55
    window['price'+4] = 15
    window['price'+5] = 13
    window['price'+6] = 10
    window['price'+7] = 7
    window['price'+8] = 5
    window['price'+9] = 9
    window['price'+10] = 7
    window['price'+11] = 6
    window['price'+12] = 6




    function declareCharacterSpecs (abil, combat, type) {
        window['characterSpecs'+contadorSpecs] = {
            num: contadorSpecs,
            campo1: abil,
            campo2: combat,
            campo3: type
        }
        contadorSpecs++
    }

    var contadorSpecs = 1

    declareCharacterSpecs("Evade","Ranged","Aerial")
    declareCharacterSpecs("Heal","Ranged","Aerial")
    declareCharacterSpecs("Currency", "Ranged", "Ground")
    declareCharacterSpecs("Global Poison", "Ranged","Ground")
    declareCharacterSpecs("Damage Boost", "Ranged", "Ground")
    declareCharacterSpecs("None", "Ranged","Ground")
    declareCharacterSpecs("Pierce", "Ranged", "Ground")
    declareCharacterSpecs("None", "Melee", "Aerial")
    declareCharacterSpecs("Pierce", "Ranged", "Aerial")
    declareCharacterSpecs("One Shot", "Melee", "Ground")
    declareCharacterSpecs("One Shot", "Melee", "Aerial")
    declareCharacterSpecs("Tank", "Melee", "Ground")



}

// funções platformer
{

    // esta função serve o proposito geral de aplicar elementos (com os quais pode ou nao haver colisao dependo do parametros tipo) á div "gameObjects"
    function placeGameElement(tipo, height, width, left, top, genero = "") {
        switch (tipo) {
            case "mobilia":
                imgsrc = genero
                numElemento = numMobilia
                break
            case "parede":
                if (genero === "") {imgsrc = "daboaparede" + currentLevel}
                else if (genero === "chao") {imgsrc = "chao" + currentLevel}
                numElemento = numParedes
                break
            case "bolota":
                imgsrc = "bolota"
                numElemento = numBolotas
                break
            case "espinho":
                imgsrc = "espinho"
                numElemento = numEspinho
                break
            case "javali":
                imgsrc = "javali"
                numElemento = numJavali
                window["javali" + numJavali] = {
                    position: {x: left},
                    velocity: {x: 0},
                    direction: "esquerda",
                    firstWall: 0,
                    lastWall: 0,
                    numSprites: 8,
                    spriteCounter: 1,
                    cicleDuration: 0.5*frameRate,
                    imgRatio: 8459/579,
                    height: height,
                    speed: Math.floor(Math.random() * (90 - 50 + 1) ) + 50
                }
                break
            case "checkpointBack":
                imgsrc = "checkpointback"
                numElemento = numCheckpoint
                break
            case "checkpointFront":
                imgsrc = "checkpointfront"
                numElemento = numCheckpoint
                break
            case "amigo":
                if (currentLevel === 0) {imgsrc = "amigo0"}
                else {imgsrc = "amigo" + numAmigo}
                numElemento = numAmigo
                break
            case "dica":
                imgsrc = "dica" + numDica
                numElemento = numDica
                break
        }

        if (tipo ==="amigo" && currentLevel === 1) {
            document.getElementById("gameObjects").innerHTML += "<img id='" + tipo + numElemento + "' src='images/amigos/" + imgsrc + ".gif' style='z-index: 16'>"
            document.getElementById(tipo + numElemento).style.height = height + "px"
            document.getElementById(tipo + numElemento).style.width = width + "px"
            document.getElementById(tipo + numElemento).style.left = left + "px"
            document.getElementById(tipo + numElemento).style.top = top + "px"
        }
        else if (tipo === "javali") {
            document.getElementById("gameObjects").innerHTML += "<div id='" + tipo + numElemento + "' style='z-index: 16'></div>"
            document.getElementById(tipo + numElemento).style.height = height + "px"
            document.getElementById(tipo + numElemento).style.width = (height*window['javali'+numJavali].imgRatio)/window['javali'+numJavali].numSprites + "px"
            document.getElementById(tipo + numElemento).style.backgroundImage = "url('images/javali.png')"
            document.getElementById(tipo + numElemento).style.backgroundSize = (window['javali'+numJavali].numSprites*100) + "% " + 200 + "%"
            document.getElementById(tipo + numElemento).style.backgroundPositionX = 0+"px"
            document.getElementById(tipo + numElemento).style.backgroundPositionY = 0+"%"
            document.getElementById(tipo + numElemento).style.position = "absolute"
            document.getElementById(tipo + numElemento).style.left = left + "px"
            document.getElementById(tipo + numElemento).style.top = top + "px"

        }
        else {
            document.getElementById("gameObjects").innerHTML += "<img id='" + tipo + numElemento + "' src='images/" + imgsrc + ".png' style='z-index: 16'>"
            document.getElementById(tipo + numElemento).style.height = height + "px"
            document.getElementById(tipo + numElemento).style.width = width + "px"
            document.getElementById(tipo + numElemento).style.left = left + "px"
            document.getElementById(tipo + numElemento).style.top = top + "px"
        }

        if (genero === "chao") {
            document.getElementById("gameObjects").innerHTML += "<img id='relva"+numElemento+"' src='images/relva"+currentLevel+".png'>"
            document.getElementById("relva"+numElemento).style.height = 30+ "px"
            document.getElementById("relva"+numElemento).style.width = width + "px"
            document.getElementById("relva"+numElemento).style.left = left + "px"
            document.getElementById("relva"+numElemento).style.top = top - 10 +"px"
            document.getElementById("relva"+numElemento).style.zIndex = 21
        }


        switch (tipo) {
            case "parede":
                numParedes++
                if (genero === "chao") {
                    document.getElementById(tipo + numElemento).style.zIndex = 20
                    document.getElementById(tipo + numElemento).alt = "chao"
                }
                break
            case "bolota":
                numBolotas++
                document.getElementById(tipo + numElemento).alt = "active"
                break
            case "espinho":
                document.getElementById(tipo + numElemento).style.zIndex = 22
                numEspinho++
                break
            case "javali":
                // tem que se por os javalis no final senao eles nao reconhecem as paredes que forem posicionadas depois de eles serem
                for (let i = 1; i < numParedes; i++) {
                    if (parseInt(document.getElementById("parede" + i).style.left) < parseInt(document.getElementById("javali" + numJavali).style.left) && document.getElementById("parede" + i).alt !== "chao") {
                        primeiraParedeJavali = i
                    } else if (parseInt(document.getElementById("parede" + i).style.left) > parseInt(document.getElementById("javali" + numJavali).style.left) && document.getElementById("parede" + i).alt !== "chao") {
                        ultimaParedeJavali = i
                        break
                    }
                }
                window["javali" + numJavali].firstWall = primeiraParedeJavali
                window["javali" + numJavali].lastWall = ultimaParedeJavali
                document.getElementById(tipo + numElemento).style.zIndex = 22
                numJavali++
                break
            case "checkpointBack":
                document.getElementById(tipo + numElemento).style.zIndex = 24
                break
            case "checkpointFront":
                numCheckpoint++
                document.getElementById(tipo + numElemento).style.zIndex = 30
                break
            case "amigo":
                numAmigo++
                document.getElementById(tipo + numElemento).style.zIndex = 22
                break
            case "dica":
                document.getElementById(tipo + numElemento).style.zIndex = 22
                numDica++
                break
            case "mobilia":
                document.getElementById(tipo + numElemento).style.zIndex = 13
                numMobilia++
                break
        }
    }

    // esta função da load aos baackgrounds
    function loadBackgrounds() {
        //divs de bg
        for (let i = 1; i < 10; i++) {
            document.getElementById("backgroundlayer").innerHTML += "<div id='layer" + i + "' style=' z-index:" + (i) + "; position: absolute; width: 100%; height: 100%; background-size: cover'></div>"
            document.getElementById("layer" + i).style.backgroundImage = "url(images/layr" + i + ".png)"
            document.getElementById("layer" + i).style.backgroundPositionX = "0px"
        }
    }

    // esta função dá reset a todos os elementos necessários para que apos esta ser chamada ou a loadLevel0 ou loadLevel! sejam chamadas e que comecem a colocar elementos atravas do placegameelement e que este atribua aos elementos adicionados ids que começam por 1 IE: parede1, bolota1
    function resetLevel() {
        document.getElementById("gameObjects").innerHTML = ""
        document.getElementById("respawnScreen").style.visibility = "hidden"
        for (let i=1; i<=5; i++) {window['amigo'+i] = false}
        hasDied = false
        numAmigo = 1
        numDica = 1
        numMobilia = 1
        bolotasApanhadas = 0
        numParedes = 1
        numBolotas = 1
        numEspinho = 1
        numJavali = 1
        numCheckpoint = 1
        currentCheckpoint = 0
        window["background" + 9].position.x = 0
        document.getElementById("layer9").style.backgroundPositionX = 0 + "px"
        document.getElementById("gameObjects").style.left = 0 + "px"
        document.getElementById("player").alt = "alive"
    }

    // Esta função serve primariamente o proposito de adicionar os elementos que vao estar na div gameObjects,
    function loadLevel0() {
        //tutorial
        resetLevel()
        currentLevel = 0

        document.getElementById("layer9").style.backgroundImage = "url(images/layer9.png)"


        placeGameElement("parede", 500, 500, 0, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 500, innerHeight - 100, "chao")

        for (let i=1; i<=5; i++) {
            placeGameElement("parede", 250, 50, 700+(i*50), innerHeight - 200)
        }


        placeGameElement("parede", 500, 500, 1250, innerHeight - 100, "chao")

        for (let i=1; i<=5; i++) {
            placeGameElement("parede", 250, 50, 1200+(i*50), innerHeight - 200)
        }


        placeGameElement("parede", 500, 500, 1750, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 2250, innerHeight - 100, "chao")

        for (let i=1; i<=6; i++) {
            placeGameElement("parede", 500, 50, 2350+(i*50), innerHeight - innerHeight*0.5)
        }



        placeGameElement("parede", 500, 500, 2750, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 3250, innerHeight - 100, "chao")

        placeGameElement("parede", 500, 250, 4750, innerHeight - 100, "chao")

        placeGameElement("parede", 500, 500, 5000, innerHeight - 100, "chao")
        placeGameElement("parede", innerHeight*0.68, 50, 5450, 0)
        placeGameElement("parede", 500, 500, 5500, innerHeight - 100, "chao")

        placeGameElement("parede", 800, 50, 5850, innerHeight - innerHeight*0.7)

        placeGameElement("parede", 500, 500, 6000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 6500, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 7000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 7500, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 8000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 8500, innerHeight - 100, "chao")

        for (let i=1; i<=10; i++) {
            placeGameElement("parede", innerHeight, 50, 8450+(i*50), 0)
        }
        placeGameElement("parede", 500, 500, 9000, innerHeight - 100, "chao")

        for (let i=1; i<=10; i++) {
            placeGameElement("parede", innerHeight, 50, 8950+(i*50), 0)
        }

        placeGameElement("amigo",80,180, 7700, innerHeight - 100 - 80)

        placeGameElement("dica",400,284,50,innerHeight - 100 - 400)
        placeGameElement("dica",400,284,725,innerHeight - 100 - 400 - 100)
        placeGameElement("dica",400,284,2400-284-50,innerHeight - 100 - 400)
        placeGameElement("dica",400,284,5000,innerHeight - 100 - 400)

        placeGameElement("mobilia",400,600,275,innerHeight - 400 - 100, "comoda")
        placeGameElement("mobilia", 400,600,3000, innerHeight - 400 - 100, "tv")
        placeGameElement("mobilia", 600,1000,6500, innerHeight - 600 - 100, "sala")

    }

    function loadLevel1 () {
        resetLevel()
        currentLevel = 1

        document.getElementById("layer9").style.backgroundImage = "url(images/layr9.png)"


        placeGameElement("parede", 500, 500, 0, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 500, innerHeight - 100, "chao")



        for (let i=1;i<=5;i++) {
            placeGameElement("parede", 250, 50, 700 + i*50, innerHeight - innerHeight*0.25)
        }


        placeGameElement("parede", 500, 500, 1000, innerHeight - 100, "chao")


        for (let i=1;i<=5;i++) {
            placeGameElement("parede", 600, 50, 1200+i*50, innerHeight - innerHeight*0.6)
        }

        placeGameElement("parede", 500, 500, 1500, innerHeight - 100, "chao")
        for (let i=1;i<=5;i++) {
            placeGameElement("parede", 250, 50, 1450+i*50, innerHeight - innerHeight*0.25)
        }




        placeGameElement("parede", 500, 500, 2000, innerHeight - 100, "chao")



        placeGameElement("parede", 500, 500, 2500, innerHeight - 100, "chao")
        for (let i=1;i<=5;i++) {
            placeGameElement("parede", 250, 50, 2650+i*50, innerHeight - innerHeight*0.25)
        }

        placeGameElement("parede", 500, 500, 4000, innerHeight - 100, "chao")
        for (let i=1;i<=3;i++) {
            placeGameElement("parede", 250, 50, 4150+i*50, innerHeight - innerHeight*0.25)
        }


        placeGameElement("parede", 500, 500, 4500, innerHeight - 100, "chao")
        for (let i=1;i<=6;i++) {
            placeGameElement("parede", 900, 50, 4650+i*50, innerHeight - innerHeight*0.7)
        }




        placeGameElement("parede", 500, 500, 5000, innerHeight - 100, "chao")
        for (let i=1;i<=2;i++) {
            placeGameElement("parede", 900, 50, 4950+i*50, innerHeight - innerHeight*0.7)
        }
        for (let i=1; i<=6; i++) {
            placeGameElement("parede", 300, 50, 5050+i*50, innerHeight - innerHeight*0.7)
            placeGameElement("parede", 300, 50, 5050+i*50, innerHeight - innerHeight*0.18)
        }





        placeGameElement("parede", 500, 500, 5500, innerHeight - 100, "chao")

        placeGameElement("amigo",160,200,1550,innerHeight - innerHeight*0.25 - 200)
        placeGameElement("amigo", 210, 140, 5200 , innerHeight - innerHeight*0.18 - 210)


        placeGameElement("parede", 500, 500, 6000, innerHeight - 100, "chao")



        placeGameElement("parede", 500, 500, 6500, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 7000, innerHeight - 100, "chao")

        for (let i=1; i<=5;i++) {
            placeGameElement("parede", 250, 50, 6950+i*50, innerHeight - innerHeight*0.3)
        }

        placeGameElement("parede", 500, 500, 7500, innerHeight - 100, "chao")
        for (let i=1; i<=4; i++) {
            placeGameElement("parede", 600, 50, 7750+i*50, innerHeight - innerHeight*0.55)
        }


        placeGameElement("parede", 500, 500, 8000, innerHeight - 100, "chao")
        for (let i=1; i<=4; i++) {
            placeGameElement("parede", 600, 50, 7950+i*50, innerHeight - innerHeight*0.55)
        }

        placeGameElement("parede", 500, 500, 8500, innerHeight - 100, "chao")


        placeGameElement("parede", 500, 500, 9000, innerHeight - 100, "chao")




        placeGameElement("parede", 500, 500, 9500, innerHeight - 100, "chao")
        for (let i=1; i<=6; i++) {
            placeGameElement("parede", 600, 50, 9550+i*50, innerHeight - innerHeight*0.55)
        }


        placeGameElement("parede", 500, 500, 10000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 20, 11000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 20, 12250, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 10, 13500, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 14000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 14500, innerHeight - 100, "chao")

        for (let i=1; i<=3; i++) {
            placeGameElement("parede", innerHeight*0.4, 50, 14500+i*50, innerHeight - innerHeight*0.8)
        }
        for (let i=1; i<=2; i++) {
            placeGameElement("parede", 900, 50, 14950+i*50, innerHeight - innerHeight*0.8)
        }

        placeGameElement("parede", 500, 500, 15000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 15500, innerHeight - 100, "chao")
//p1

//p2
        placeGameElement("parede", 500, 500, 16000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 16500, innerHeight - 100, "chao")
        placeGameElement("parede", 300, 20, 16500, 0)

        placeGameElement("parede", innerHeight, 70, 16800, innerHeight - innerHeight*0.74)

        placeGameElement("parede", 500, 500, 17000, innerHeight - 100, "chao")
        placeGameElement("parede", 25, 25, 17150, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 25, 25, 17175, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 25, 25, 17200, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 25, 25, 17225, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 25, 25, 17250, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 25, 25, 17275, innerHeight - innerHeight*0.2)

        placeGameElement("parede", 300, 20, 17450, 0)
        placeGameElement("parede", 500, 500, 17500, innerHeight - 100, "chao")
        placeGameElement("parede", innerHeight, 70, 17750, innerHeight - innerHeight*0.74)

        placeGameElement("parede", 500, 500, 18000, innerHeight - 100, "chao")
        placeGameElement("parede", 25, 25, 18100, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 25, 25, 18125, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 25, 25, 18150, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 25, 25, 18175, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 25, 25, 18200, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 25, 25, 18225, innerHeight - innerHeight*0.2)
        placeGameElement("parede", 300, 20, 18400, 0)
        placeGameElement("parede", 500, 500, 18500, innerHeight - 100, "chao")
        placeGameElement("parede", innerHeight, 70, 18700, innerHeight - innerHeight*0.74)

        placeGameElement("parede", 500, 500, 19000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 19500, innerHeight - 100, "chao")

        placeGameElement("parede", 500, 500, 20000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 20500, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 21000, innerHeight - 100, "chao")
        for (let i=1; i<=3; i++) {
            placeGameElement("parede", 550, 50, 21250+i*50, innerHeight - innerHeight*0.34)
        }
        placeGameElement("parede", 500, 500, 21500, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 22000, innerHeight - 100, "chao")
        placeGameElement("parede", 500, 500, 22500, innerHeight - 100, "chao")
        for (let i=1; i<=10; i++) {
            placeGameElement("parede", innerHeight, 50, 22450+i*50, innerHeight - innerHeight*0.74)
        }

        placeGameElement("parede", 500, 500, 23000, innerHeight - 100, "chao")
        for (let i=1; i<=3; i++) {
            placeGameElement("parede", innerHeight, 50, 22950+i*50, innerHeight - innerHeight*0.74)
        }

        placeGameElement("parede", 500, 500, 23500, innerHeight - 100, "chao")
        for (let i=1; i<=10; i++) {
            placeGameElement("parede", 250, 50, 23450+i*50, innerHeight - innerHeight*0.74)
            placeGameElement("parede", 500, 50, 23450+i*50, innerHeight - innerHeight*0.35)
        }

        placeGameElement("amigo", 100, 100, 23670, innerHeight - innerHeight*0.35 - 100)



        placeGameElement("parede", 500, 500, 24500, innerHeight - 100, "chao")
        for (let i=1; i<=3; i++) {
            placeGameElement("parede", innerHeight, 50, 24450+i*50,  - 100 - 100 - 30)
        }

        placeGameElement("parede", 500, 500, 25000, innerHeight - 100, "chao")

        placeGameElement("parede", 30, 30, 25900, innerHeight - innerHeight*0.25)
        placeGameElement("parede", 100, 100, 25900, innerHeight - innerHeight*0.74)
        placeGameElement("parede", 400, 10, 26300, innerHeight - innerHeight*0.74)
        placeGameElement("parede", 100, 100, 26200, innerHeight - innerHeight*0.74)
        placeGameElement("parede", 20, 20, 26700, innerHeight - innerHeight*0.5)
        placeGameElement("parede", 30, 30, 27400,  innerHeight - innerHeight*0.75)
        placeGameElement("parede", 500, 500, 27400, innerHeight - 100, "chao")

        placeGameElement("parede", 300, 50, 27400,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 27450,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 27500,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 27550,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 27600,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 27650,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 27700,  innerHeight - innerHeight*0.35)
        placeGameElement("amigo",100, 120, 27550, innerHeight - 100 - 70)
        placeGameElement("parede", 500, 500, 27900, innerHeight - 100, "chao")

        placeGameElement("parede", 50, 50, 27950,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28000,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28050,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28100,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28150,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28200,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28250,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 200, 20, 28300,  innerHeight - innerHeight*0.7)
        placeGameElement("parede", 50, 50, 28300,  innerHeight - innerHeight*0.35)

        placeGameElement("parede", 50, 50, 28350,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28400,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 500, 500, 28400, innerHeight - 100, "chao")
        placeGameElement("parede", 50, 50, 28450,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28500,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28550,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28600,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28650,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28700,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28750,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28800,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28850,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 50, 50, 28900,  innerHeight - innerHeight*0.35)
        placeGameElement("parede", 500, 500, 28900, innerHeight - 100, "chao")


        placeGameElement("parede", 500, 500, 29000, innerHeight - 100, "chao")
        placeGameElement("checkpointBack",180,520, 29000, innerHeight - 180-95)
        placeGameElement("checkpointFront",180,520, 29000, innerHeight - 180-95)


        placeGameElement("parede", 500, 500, 29500, innerHeight - 100, "chao")

        placeGameElement("parede", 500, 500, 30300, innerHeight - 100, "chao")

        placeGameElement("parede", 500, 500, 31100, innerHeight - 100, "chao")



        placeGameElement("parede", 500, 500, 32000, innerHeight - 100, "chao")
        placeGameElement("amigo", 160, 200, 32160, innerHeight - 100-160)
//p2




//p1hit
        placeGameElement("bolota", 80, 80, 1300, innerHeight - innerHeight*0.75)



        placeGameElement("javali", 100, 200, 1900, innerHeight - 100-100)
        placeGameElement("bolota", 80, 80, 2100, innerHeight - innerHeight*0.30)
        placeGameElement("espinho", 70, 70, 5500 , innerHeight - 170)
        placeGameElement("espinho", 70, 70, 5600 , innerHeight - 170)
        placeGameElement("bolota", 80, 80, 5601, innerHeight - innerHeight*0.3)
        placeGameElement("espinho", 70, 70, 5700 , innerHeight - 170)
        placeGameElement("espinho", 70, 70, 5800 , innerHeight - 170)
        placeGameElement("espinho", 70, 70, 5900 , innerHeight - 170)
        placeGameElement("espinho", 70, 70, 6000 , innerHeight - 170)
        placeGameElement("espinho", 70, 70, 6100 , innerHeight - 170)
        placeGameElement("espinho", 70, 70, 6200 , innerHeight - 170)
        placeGameElement("bolota", 80, 80, 8750, innerHeight - innerHeight*0.35)

        placeGameElement("javali", 100, 200, 8800, innerHeight - 100 - 100)


        placeGameElement("bolota", 80, 80, 12650, innerHeight - innerHeight*0.1)

        placeGameElement("checkpointBack",180,520, 15500, innerHeight - 180 - 95)
        placeGameElement("checkpointFront",180,520, 15500, innerHeight - 180 - 95)
//p1hit


//p2hit

        placeGameElement("javali", 100, 200, 18800, innerHeight - 100 -100)

        placeGameElement("bolota", 80, 80, 20000, innerHeight - innerHeight*0.2)

        placeGameElement("javali", 100, 200, 21100, innerHeight - 100-100)

        placeGameElement("espinho", 30, 30, 16804 , innerHeight - innerHeight*0.768)
        placeGameElement("espinho", 30, 30, 16832 , innerHeight - innerHeight*0.768)

        for(let i=16856; i<=17750;i+=50 ){
            placeGameElement("espinho", 50, 50, i , innerHeight -150)
        }




        placeGameElement("espinho", 30, 30, 17754 , innerHeight - innerHeight*0.768)
        placeGameElement("espinho", 30, 30, 17782 , innerHeight - innerHeight*0.768)

        for(let i=17806; i<=18700;i+=50 ){
            placeGameElement("espinho", 50, 50, i , innerHeight -150)

        }
        placeGameElement("espinho", 30, 30, 18704 , innerHeight - innerHeight*0.768)
        placeGameElement("espinho", 30, 30, 18732 , innerHeight - innerHeight*0.768)

        placeGameElement("espinho", 50, 50, 23150 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 23200 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 23250 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 23300 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 23350 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 23400 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 23450 , innerHeight - 150)




        placeGameElement("bolota", 80, 80, 24700, innerHeight - innerHeight*0.8)

        placeGameElement("bolota", 80, 80, 27300, innerHeight - innerHeight*0.2)



        placeGameElement("espinho", 50, 50, 27400 , innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 27450,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 27500,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 27550,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 27600,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 27650,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 27700,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 27950,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28000,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28050,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28100,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28150,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28200,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28250,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28300,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28350,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28400,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28450,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28500,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28550,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28600,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28650,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28700,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28750,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28800,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28850,  innerHeight - innerHeight*0.3965)
        placeGameElement("espinho", 50, 50, 28900,  innerHeight - innerHeight*0.3965)


        placeGameElement("espinho", 50, 50, 29900 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 29950 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 30300 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 30350 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 30400 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 30650 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 30700 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 30750 , innerHeight - 150)

        placeGameElement("espinho", 50, 50, 31100 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 31150 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 31200 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 31450 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 31500 , innerHeight - 150)
        placeGameElement("espinho", 50, 50, 31550 , innerHeight - 150)



        placeGameElement("bolota", 80, 80, 37300, innerHeight - innerHeight*0.2)

        placeGameElement("checkpointBack",180,520, 40000, innerHeight - 180 - 95)
        placeGameElement("checkpointFront",180,520, 40000, innerHeight - 180 - 95)
    }


    // Esta versão de escolha de sprites é uma variação da versão usada e desenvolvida pelo grupo para o ilusao de movimento usada nas sprites do finalBoss
    function spritesJavali (numJavali) {

        if (window['javali'+numJavali].direction === "direita" && document.getElementById("javali" + numJavali).style.backgroundPositionY !==  "100%" ) {
            document.getElementById("javali" + numJavali).style.backgroundPositionY = 100 + "%"

        }
        else if (window['javali'+numJavali].direction === "esquerda" && document.getElementById("javali" + numJavali).style.backgroundPositionY !==  "0%"){
            document.getElementById("javali" + numJavali).style.backgroundPositionY = 0 + "%"
        }
        for (let i=0; i < window['javali'+numJavali].numSprites; i++) {
            if (window['javali'+numJavali].spriteCounter >= i*(window['javali'+numJavali].cicleDuration/window['javali'+numJavali].numSprites) && window['javali'+numJavali].spriteCounter < (i+1)*(window['javali'+numJavali].cicleDuration/window['javali'+numJavali].numSprites)) {
                spriteNum = i
                break
            }
            else if (window['javali'+numJavali].spriteCounter >= window['javali'+numJavali].numSprites*(window['javali'+numJavali].cicleDuration/window['javali'+numJavali].numSprites)) {
                window['javali'+numJavali].spriteCounter = 0;
                spriteNum = 0
            }
        }
        document.getElementById("javali"+numJavali).style.backgroundPositionX = - (spriteNum * ((window['javali'+numJavali].height * window['javali'+numJavali].imgRatio)/window['javali'+numJavali].numSprites)) +"px"
        window['javali'+numJavali].spriteCounter++
    }

    // esta função nasceu da necessidade de limitar o numero de operações realizada por segundo, e visto que todos os javalis de cada mapa se movimentavam a todas as alturas decidiu-se apenas permitir este movimento quando os javalis se encontrassem perto do jogador, sento que esta função serve de um verficador de posição que se retornada verdadeira, aliada a uma outra função, toca o som de "javalis" a correr e permite aos javalis proximos do jogador movimentar-se
    function detetaJavaliEcra (i) {
        if (document.body.contains(document.getElementById("javali"+i))) {
            if (parseInt(document.getElementById("javali"+i).style.left) + parseInt(document.getElementById("gameObjects").style.left) < innerWidth * 1.5 && parseInt(document.getElementById("javali"+i).style.left) + parseInt(document.getElementById("gameObjects").style.left) > -500 ) {
                return true
            }
        }
    }


    function operacoesJavalis () {
        javaliOnScreen = false
        for (let i = 1; i < numJavali; i++) {
            if (detetaJavaliEcra(i)) {
                // se o javali tiver a x distancia do jogador ele corre as sprites e o movimento, senao ele nao corre o movimento nem as sprites e o javali fica quieto ate entrar na visao do jogador
                equacoesJavali(i)
                spritesJavali(i)
                javaliOnScreen = true
            }
        }
        if (javaliOnScreen && javaliSFX.paused === true) {
            javaliSFX.play()
        }
        else {
            javaliSFX.pause()
        }
    }

    // estta é a função mãe do platformer pois é chamada a cada frame a pedir updates de varios valores para determinar as ações que serão possiveis, nomeadamente saltos, walljumps, localização. velocidade etc
    function loop() {
        checkGround()
        setDirections()
        detectBounds()
        spritePlayer()
        equacoesPlayer()
        operacoesJavalis()
        decisionPlayermovBGmov()
        playerPosition()
        if (platformGameIsRunning === true) {
            requestAnimationFrame(function () {
                loop()
            })
        }
    }

    // esta função nasceu de uma inspiração num outro projeto que se encontra no relatório em que se usou equações fisicas para simular ao maximo gravidade, aceleração e atrito.
    // apesar das equações nao serem da nossa autoria, (dificilmente o poderiam ser no sec XVI) foram manipuladas e entendidas pelos elementos do grupo de forma a conseguir compreender e reaplica-las num contexto diferente do qual foram primeiramente encontradas (
    function equacoesPlayer() {
        var Fx = -0.5 * 0.47 * 0.07 * 1.22 * object.velocity.x * object.velocity.x * object.velocity.x / Math.abs(object.velocity.x);
        var Fy = -0.5 * 0.47 * 0.07 * 1.22 * object.velocity.y * object.velocity.y * object.velocity.y / Math.abs(object.velocity.y);
        if (isNaN(Fx)) {Fx = 0}
        if (isNaN(Fy)) {Fy = 0}
        var ax = Fx / 0.1; //******************************
        var ay = gravidade + (Fy / 0.1);
        object.velocity.x += ax * (1 / frameRate);
        object.velocity.x = object.velocity.x / 1.03
        object.velocity.y += ay * (1 / frameRate);
        object.position.x += object.velocity.x * (1 / frameRate) * playerAndBGSpeed;
        object.position.y += object.velocity.y * (1 / frameRate) * 100;
    }

    // uma versão similar da equação anterior sem o elemento do eixo dos y, pois como o javali nao salta nem está sujeito a quedas pelo que apenas serviriam para causar latencia adicional
    function equacoesJavali(i) {
        var Fx = -0.5 * 0.47 * 0.07 * 1.22 * window["javali" + i].velocity.x * window["javali" + i].velocity.x * window["javali" + i].velocity.x / Math.abs(window["javali" + i].velocity.x);
        if (isNaN(Fx)) {Fx = 0}
        var ax = Fx / 0.1;
        window["javali" + i].velocity.x += ax * (1 / frameRate);
        window["javali" + i].velocity.x = window["javali" + i].velocity.x / 1.03
        window["javali" + i].position.x += window["javali" + i].velocity.x * (1 / frameRate) * window["javali" + i].speed;
        document.getElementById("javali" + i).style.left = window["javali" + i].position.x + "px"

        if (window["javali" + i].position.x < parseInt(document.getElementById("parede" + window["javali" + i].firstWall).style.left) + parseInt(document.getElementById("parede" + window["javali" + i].firstWall).style.width)) {
            window["javali" + i].direction = "direita"
        } else if (window["javali" + i].position.x + parseInt(document.getElementById("javali" + i).style.width) > parseInt(document.getElementById("parede" + window["javali" + i].lastWall).style.left)) {
            window["javali" + i].direction = "esquerda"
        }

        if ((window["javali" + i].direction === "esquerda" && window["javali" + i].velocity.x > 0) || (window["javali" + i].direction === "direita" && window["javali" + i].velocity.x < 0)) {
            window["javali" + i].velocity.x = 0
        }


        if (window["javali" + i].direction === "esquerda") {
            window["javali" + i].velocity.x += -0.30
        } else if (window["javali" + i].direction === "direita") {
            window["javali" + i].velocity.x += 0.30
        }
    }

    // esta função tambem se apresenta de maneira similar e permite movimentar os background com velocidades diferentes o que nos permite atingir o efeito de paralax planeado e pretendido
    function decisionPlayermovBGmov() {
        if (isOnMid && (orientacao === "direita" && window["background" + 2].velocity.x > 0) && !isOnWall && document.getElementById("player").alt !== "ded") {

            var Fx = -0.5 * 0.47 * 0.07 * 1.22 * window["background" + 2].velocity.x * window["background" + 2].velocity.x * window["background" + 2].velocity.x / Math.abs(window["background" + 2].velocity.x);
            if (isNaN(Fx)) {Fx = 0}
            var ax = Fx / 0.1;
            window["background" + 2].velocity.x += ax * (1 / frameRate);
            window["background" + 2].velocity.x = window["background" + 2].velocity.x / 1.03

            for (let i=2; i<9; i++) {
                window["background" + i].position.x += -window["background" + 2].velocity.x * (1 / frameRate) * (i * i)/1.7;
                document.getElementById("layer" + i).style.backgroundPositionX = window["background" + i].position.x + "px"
            }
            window["background" + 9].position.x += -window["background" + 2].velocity.x * (1 / frameRate) * playerAndBGSpeed;
            document.getElementById("layer" + 9).style.backgroundPositionX = window["background" + 9].position.x + "px"
            document.getElementById("gameObjects").style.left = window["background" + 9].position.x + "px"

        }
    }

    // esta função serve para atualizar a posição do jogador com base na propriedade posição do objeto no qual as equações são feitas na equação equacoesPlayer ()
    function playerPosition () {
        document.getElementById("player").style.left = object.position.x + "px"
        document.getElementById("player").style.top = object.position.y + "px"
    }

    // esta função redefine o IsonGround com base no toque com elementos parede no bottom do player
    function checkGround() {
        if (isOnTopOfObject) {
            isOnGround = true
        } else {
            isOnGround = false
        }
    }

    // esta função determina a incrementação de velocidade no jogador com base se ele está a pressionar o A ou a ArrowLeft ou o D ou ArrowRight, adicionalmentese o jogador se encontrar no meio do ecra e nao se encontrar em contacto com uma parede deverá nao incrementar a velodidade do jogador, fazendo com que este fique no local onde se encontra, e incremente a velocidade do background 1 e 2 para que as condições no decisionPlayermovBGmov() se encontrem verdadeiras e todos os background se desloquem
    function setDirections() {
        if (esquerda) {
            object.velocity.x += -playerSpeed
        }
        else if (direitaBG && isOnMid && !isOnWall) {
            for (let i = 1; i < 3; i++) {
                window["background" + i].velocity.x += playerSpeed
            }
        }
        else if (direita) {
            object.velocity.x += playerSpeed
        }
    }

    // esta função impede o jogador de avançar alem do meio do ecra e determina atraves da variavel isOnMid se este se encontra no meio ou nao para que na função anterior possa ser executada sem problemas
    function boundMovimento() {
        if (parseInt(document.getElementById("player").style.left) + playerWidth > innerWidth / 2) {
            object.position.x = innerWidth / 2 - playerWidth
            document.getElementById("player").style.left = object.position.x + "px"
            object.velocity.x = 0
        }
        if (parseInt(document.getElementById("player").style.left) + playerWidth + 4 > innerWidth / 2) {
            isOnMid = true
        }
        else isOnMid = false
    }

    // Esta função verifica se o jogador se cruza verticalmente com uma parede e se o bot do jogar se encontra a pelo menos 10 centimetros do top de uma parede, se sim a variavel isontopofobject é dada como verdadeira sendo posteriormente dado como se o jogador tivesse no chao (isonGround) o que permite fazer coisas como dar reset ao numero de saltos ja dados
    function isOnTopFunction(i) {
        if (parseInt(document.getElementById("player").style.top) + playerHeight > parseInt(document.getElementById("parede" + i).style.top) - 10 && parseInt(document.getElementById("player").style.left) + playerWidth > parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) && parseInt(document.getElementById("player").style.left) < parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) + document.getElementById("parede" + i).width && parseInt(document.getElementById("player").style.top) + playerHeight < parseInt(document.getElementById("parede" + i).style.top) + document.getElementById("parede" + i).height) {
            if (parseInt(document.getElementById("player").style.top) + playerHeight < parseInt(document.getElementById("parede" + i).style.top) + 10) {
                isOnTopOfObject = true
            } else isOnTopOfObject = false
        } else {
            isOnTopOfObject = false
        }
    }


    function hasWallJumpedFunction() {
        if (!isOnWall) {
            hasWallJumped = false
        }
    }

    function isOnWallfunction(i) {
        if (parseInt(document.getElementById("player").style.left) + playerWidth + 2 > parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) && parseInt(document.getElementById("player").style.left) < parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) + document.getElementById("parede" + i).width + 2 && parseInt(document.getElementById("parede" + i).style.top) + document.getElementById("parede" + i).height > parseInt(document.getElementById("player").style.top) + 10 && parseInt(document.getElementById("player").style.top) + parseInt(document.getElementById("player").style.height) - 10 > parseInt(document.getElementById("parede" + i).style.top)) {
            if (parseInt(document.getElementById("player").style.left) < parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) && orientacao === "direita") {
                isOnWall = true
            } else if (parseInt(document.getElementById("player").style.left) > parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) && orientacao === "esquerda") {
                isOnWall = true
            } else {
                isOnWall = false
            }
        } else {
            isOnWall = false
        }
    }



    // esta função foi uma maneira de se conseguir verificar que elementos se encontram no ecra sendo possivel chama-la de maneira simples e usa-la para varios propositos sendo apenas necessário indicar o numero de elemento e o tipo do elemento por exemplo "parede" + "1",dizendo respeito ao elemento "parede1"
    function objectsOnScreen(i, id) {
        if (document.body.contains(document.getElementById(id + i))) {
            if (parseInt(document.getElementById(id + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) < innerWidth && parseInt(document.getElementById(id + i).style.left) + parseInt(document.getElementById(id + i).style.width) + parseInt(document.getElementById("gameObjects").style.left) > 0) {
                if (!primeiro) {
                    switch (id) {
                        case "parede":
                            primeiraParede = i
                            break
                        case "bolota":
                            primeiraBolota = i
                            break
                        case "espinho":
                            primeiroEspinho = i
                            break
                        case "javali":
                            primeiroJavali = i
                            break
                        case "amigo":
                            primeiroAmigo = i
                            break
                        case "checkpointFront":
                            primeiroCheckpoint = i
                            break
                    }
                    primeiro = true
                } else if (primeiro) {
                    switch (id) {
                        case "parede":
                            ultimaParede = i
                            break
                        case "bolota":
                            ultimaBolota = i
                            break
                        case "espinho":
                            ultimoEspinho = i
                            break
                        case "javali":
                            ultimoJavali = i
                            break
                        case "amigo":
                            ultimoAmigo = i
                            break
                        case "checkpointFront":
                            ultimoCheckpoint = i
                            break
                    }
                }
            } else if (i > ultimaParede && id === "parede") {
                if (ultimaParede < primeiraParede) {
                    ultimaParede = primeiraParede
                }
                ultimaParedeEncontrada = true
            } else if (i > ultimaBolota && id === "bolota") {
                if (ultimaBolota < primeiraBolota) {
                    ultimaBolota = primeiraBolota
                }
                ultimaBolotaEncontrada = true
            } else if (i > ultimoEspinho && id === "espinho") {
                if (ultimoEspinho < primeiroEspinho) {
                    ultimoEspinho = primeiroEspinho
                }
                ultimoEspinhoEncontrado = true
            } else if (i > ultimoJavali && id === "javali") {
                if (ultimoJavali < primeiroJavali) {
                    ultimoJavali = primeiroJavali
                }
                ultimoJavaliEncontrado = true
            } else if (i > ultimoAmigo && id === "amigo") {
                if (ultimoAmigo < primeiroAmigo) {
                    ultimoAmigo = primeiroAmigo
                }
                ultimoAmigoEncontrado = true
            } else if (i > ultimoCheckpoint && id === "checkpointFront") {
                if (ultimoCheckpoint < primeiroCheckpoint) {
                    ultimoCheckpoint = primeiroCheckpoint
                }
                ultimoCheckpointEncontrado = true
            }
        }
    }

    function resetObjectNums(id) {
        primeiro = false
        switch (id) {
            case "parede":
                ultimaParedeEncontrada = false
                break
            case "bolota":
                ultimaBolotaEncontrada = false
                break
            case "espinho":
                ultimoEspinhoEncontrado = false
                break
            case "javali":
                ultimoJavaliEncontrado = false
                break
            case "amigo":
                ultimoAmigoEncontrado = false
                break
            case "checkpointFront":
                ultimoCheckpointEncontrado = false
                break
        }
    }

    // muito similar á anterior pode ser usada para qualquer tipo de objetos que siga o "modelo" usado na função placeGameElement, retornando verdadeiro se houver qualquer tipo de colisao entre o jogador e qualquer ponto do elemento que está a ser verificado.

    function checkColisaoObjeto(tipo, id) {
        if (parseInt(document.getElementById("player").style.left) < parseInt(document.getElementById("gameObjects").style.left) + parseInt(document.getElementById(tipo + id).style.left) + parseInt(document.getElementById(tipo + id).style.width) && parseInt(document.getElementById(tipo + id).style.left) + parseInt(document.getElementById("gameObjects").style.left) < parseInt(document.getElementById("player").style.left) + playerWidth) {
            if (parseInt(document.getElementById("player").style.top) + playerHeight > parseInt(document.getElementById(tipo + id).style.top) && parseInt(document.getElementById("player").style.top) < parseInt(document.getElementById(tipo + id).style.top) + parseInt(document.getElementById(tipo + id).style.height)) {
                return true
            }
        }
    }




    // esta função é um dos exemplos que faz uso da função checkColisaoObjeto, em que se tal se verifica , faz as ações desejadas assim como algumas das funções que se seguem
    function colisaoBolotas(i) {
        if (document.body.contains(document.getElementById("bolota" + i))) {
            if (document.getElementById("bolota" + i).alt === "active") {
                if (checkColisaoObjeto("bolota", i)) {
                    document.getElementById("bolota" + i).alt = "unactivatededed"
                    bolotasApanhadas += 10
                    document.getElementById("nBolotasSlot").innerHTML = parseInt(bolotasApanhadas)
                    setTimeout(function () {
                        document.getElementById("bolota" + i).remove()
                    }, 500)
                }
            }
        }
    }

    function colisaoEspinhos(i) {
        if (document.body.contains(document.getElementById("espinho" + i))) {
            if (checkColisaoObjeto("espinho", i)) {
                killPlayer()
            }
        }
    }

    function colisaoJavalis(i) {
        if (document.body.contains(document.getElementById("javali" + i))) {
            if (checkColisaoObjeto("javali", i)) {
                killPlayer()
            }
        }
    }

    function colisaoAmigo(i) {
        if (document.body.contains(document.getElementById("amigo" + i))) {
            if (checkColisaoObjeto("amigo", i)) {
                if (i === numAmigo - 1 && !window['amigo'+i]) {
                    setTimeout(function () {
                        if (currentLevel===0) {
                            playVideo()
                            stopAllBGMusicAndReset()
                        }
                        else if (currentLevel===1) {
                            hideElementsExcept("active","finalBoss")
                            defineMouseEventsFinalBoss()
                            platformGameIsRunning = false
                            resetFinalBoss()
                            setTimeout(function (){
                                startGame()
                            },loadingTime)
                        }
                    }, 10000)
                }
                if (window['amigo'+i] === false) {amigoTalk.play()}

                // para o amigo 5 fazer o codigo que da trigger ao dialogo e depois que inicia o final Boss
                window['amigo'+i] = true
                document.getElementById("dialogue").style.opacity = 1
                clearTimeout(dialogueTimeout)
                dialogueTimeout = setTimeout(function () {document.getElementById("dialogue").style.opacity = 0},2000)

                if (currentLevel ===0) {
                    if (document.getElementById("retratoDialogo").src !== "images/caraAmigo0.png") {
                        document.getElementById("retratoDialogo").src = "images/caraAmigo0.png"
                    }
                    document.getElementById("textDialogue").innerHTML = window['dialogoAmigo0']
                }
                else {
                    if (document.getElementById("retratoDialogo").src !== "images/caraAmigo"+i+".png") {
                        document.getElementById("retratoDialogo").src = "images/caraAmigo"+i+".png"
                    }
                    document.getElementById("textDialogue").innerHTML = window['dialogoAmigo'+i]
                }
            }
        }
    }

    function colisaoCheckpoint(i) {
        if (document.body.contains(document.getElementById("checkpointFront" + i))) {
            if (checkColisaoObjeto("checkpointFront", i)) {
                currentCheckpoint = i
            }
        }
    }


    // esta função permite que o jogador morra e restringe os seus movimentos, assim como impede futuras colisoes que dessem trigger á "morte" do jogador sendo que esta só possivel de ser executada enquanto o jogador se encontra vivo (!hasDied)
    // esta função serve tambem para laquando do momento da sua morte adicionar uma força ascendente ao jogador para que tenha um efeito de gameover muito semelhante ao do super mario
    // apos a morte do jogador é-lhe eliminado 10% do numero total de bolotas que estava na sua posso aquando do momento da morte
    function killPlayer() {
        if (!hasDied) {
            document.getElementById("player").alt = "ded"
            direita = false
            esquerda = false
            object.velocity.x = 0
            object.velocity.y = -15
            hasDied = true
            document.getElementById("bolotaTotal").innerHTML = " " + parseInt(bolotasApanhadas) + " "
            document.getElementById("bolotapercent").innerHTML = " " + parseInt((bolotasApanhadas - parseInt(bolotasApanhadas*0.9))) + " "
            setTimeout(function () {
                document.getElementById("respawnScreen").style.visibility = "visible"
                document.getElementById("respawnScreen").style.backgroundColor = "rgba(23,23,23,1)";
            }, 2000)
            dyingSFX.play()

            backgroundMusic("respawn")
        }
    }


    // esta função serve de reset inicial ao jogador e ás verificações que são corridas para as colisoes de cada elemento, serve tambe par acolocar o jogador na etapa pretendida, seja inicio do nivel ou checkpoints
    function respawnPlayer() {
        primeiraParede = 1
        primeiroCheckpoint = 1
        primeiroAmigo = 1
        primeiroJavali = 1
        primeiroEspinho = 1
        primeiraBolota = 1
        object.position.y = 200
        object.position.x = 200
        object.velocity.y = 0
        object.velocity.x = 10
        document.getElementById("player").style.top = object.position.y + "px"
        document.getElementById("player").style.left = object.position.x + "px"
        document.getElementById("respawnScreen").style.visibility = "hidden"
        document.getElementById("respawnScreen").style.backgroundColor = "rgba(23,23,23,0)";
        document.getElementById("player").alt = "alive"
        hasDied = false
        if (currentCheckpoint === 0) {window["background" + 9].position.x = 0}
        else {window["background" + 9].position.x = -parseInt(document.getElementById("checkpointBack" + currentCheckpoint).style.left)}
        document.getElementById("layer9").style.backgroundPositionX = window["background" + 9].position.x + "px"
        document.getElementById("gameObjects").style.left = window["background" + 9].position.x + "px"
        for (let i=1; i<=9; i++) {window["background" + i].velocity.x = 0}
        bolotasApanhadas = bolotasApanhadas*0.9
        document.getElementById("nBolotasSlot").innerHTML = parseInt(bolotasApanhadas)
        backgroundMusic(currentLevel)
    }


    // esta função é talvez a função, não mais complexa, mas que deu mais trabalho a ser idealizada. Os calculos aqui feitos medem a distancia que certas borders do jogador e do elemento com o qual se esta a verificar, tendo sempre que haver colisao para o resto da função correr.
    // esta função permite-nos entao averiguar de que lado o jogador se aproximou de um dado objeto e parar o seu movimento mantendo-o no lado por onde ele se aproximou. é de notar que apesar de estar-mos orgulhosos desta nossa função ela nao se apresenta sem as suas falhar, pois começa a dar erros quando a largura da pararede é maior que a sua altura pelo que optamos por manter a equação intata e adaptarmos a maneira como construimos o nivel
    function boundWallDir(i) {
        if (checkColisaoObjeto("parede", i)) {
            if ((((parseInt(document.getElementById("player").style.left) + playerWidth)) - (parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left))) > (parseInt(document.getElementById("parede" + i).style.top) + document.getElementById("parede" + i).height - parseInt(document.getElementById("player").style.top)) && ((parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left)) + document.getElementById("parede" + i).width) - (parseInt(document.getElementById("player").style.left)) > (parseInt(document.getElementById("parede" + i).style.top) + document.getElementById("parede" + i).height - parseInt(document.getElementById("player").style.top))) {
                object.velocity.y = 0
                object.position.y = parseInt(document.getElementById("parede" + i).style.top) + document.getElementById("parede" + i).height
                document.getElementById("parede" + i).style.top = object.position.y
            }
            else if (parseInt(document.getElementById("player").style.top) + playerHeight - parseInt(document.getElementById("parede" + i).style.top) < (parseInt(document.getElementById("player").style.left) + playerWidth) - (parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left)) && parseInt(document.getElementById("player").style.top) + playerHeight - parseInt(document.getElementById("parede" + i).style.top) < (parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) + parseInt(document.getElementById("parede" + i).width)) - parseInt(document.getElementById("player").style.left)) {
                gravidade = 0
                object.velocity.y = 0
                object.position.y = parseInt(document.getElementById("parede" + i).style.top) - playerHeight
                document.getElementById("parede" + i).style.top = object.position.y
            }
            else if (parseInt(document.getElementById("player").style.left) < parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) + (document.getElementById("parede" + i).width) / 2) {
                object.velocity.x = 0
                object.position.x = parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) - playerWidth
                document.getElementById("player").style.left = object.position.x + "px"
            }
            else if (parseInt(document.getElementById("player").style.left) > parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) + (document.getElementById("parede" + i).width) / 2) {
                object.velocity.x = 0
                object.position.x = parseInt(document.getElementById("parede" + i).style.left) + parseInt(document.getElementById("gameObjects").style.left) + document.getElementById("parede" + i).width
                document.getElementById("player").style.left = object.position.x + "px"
            }
        }
    }

    function boundEsq() {
        if (parseInt(document.getElementById("player").style.left) < 0) {
            object.position.x = 0
            object.velocity.x = 0
            esquerda = false
        }
    }


    function boundBot() {
        if (object.position.y >= innerHeight) {killPlayer()}
    }

    function boundTop() {
        if (object.position.y < 0) {
            object.position.y = 0
            object.velocity.y = 0
        }
    }

    function detectBounds() {
        //paredes que estão no ecra
        resetObjectNums("parede")
        for (let i = primeiraParede; i < numParedes; i++) {
            objectsOnScreen(i, "parede")
            if (ultimaParedeEncontrada) {
                break
            }
        }

        // controlo de gravidade em função se está no topo do objeto
        for (let i = primeiraParede; i <= ultimaParede; i++) {
            isOnTopFunction(i)
            if (isOnTopOfObject) {
                gravidade = 0
                break
            }
        }
        if (!isOnTopOfObject) {
            gravidade = 9.8
        }
        // manter track se esta na wall
        for (let i = primeiraParede; i <= ultimaParede; i++) {
            isOnWallfunction(i)
            if (isOnWall) {
                break
            }
        }
        //colisoes paredes
        for (let i = primeiraParede; i <= ultimaParede; i++) {
            boundWallDir(i)
        }


        resetObjectNums("bolota")
        for (let i = primeiraBolota; i < numBolotas; i++) {
            objectsOnScreen(i, "bolota")
            if (ultimaBolotaEncontrada) {
                break
            }
        }
        for (let i = primeiraBolota; i <= ultimaBolota; i++) {
            colisaoBolotas(i)
        }


        resetObjectNums("espinho")
        for (let i = primeiroEspinho; i < numEspinho; i++) {
            objectsOnScreen(i, "espinho")
            if (ultimoEspinhoEncontrado) {
                break
            }
        }
        for (let i = primeiroEspinho; i <= ultimoEspinho; i++) {
            colisaoEspinhos(i)
        }


        resetObjectNums("javali")
        for (let i = primeiroJavali; i < numJavali; i++) {
            objectsOnScreen(i, "javali")
            if (ultimoJavaliEncontrado) {
                break
            }
        }
        for (let i = primeiroJavali; i <= ultimoJavali; i++) {
            if (detetaJavaliEcra(i)) {
                colisaoJavalis(i)
            }
        }


        resetObjectNums("amigo")
        for (let i = primeiroAmigo; i < numAmigo; i++) {
            objectsOnScreen(i, "amigo")
            if (ultimoAmigoEncontrado) {
                break
            }
        }
        if (ultimoAmigo < primeiroAmigo) {
            ultimoAmigo = primeiroAmigo
        }
        for (let i = primeiroAmigo; i <= ultimoAmigo; i++) {
            colisaoAmigo(i)
        }


        resetObjectNums("checkpointFront")
        for (let i = primeiroCheckpoint; i < numCheckpoint; i++) {
            objectsOnScreen(i, "checkpointFront")
            if (ultimoCheckpointEncontrado) {
                break
            }
        }
        if (ultimoCheckpoint < primeiroCheckpoint) {
            ultimoCheckpoint = primeiroCheckpoint
        }
        for (let i = 1; i < numCheckpoint; i++) {
            colisaoCheckpoint(i)
        }

        hasWallJumpedFunction()
        boundEsq()
        boundBot()
        boundTop()
        boundMovimento()
    }

    function resetAndPlayJump () {
        jumpSFX.currentTime = 0
        jumpSFX.play()
    }

    function processa_tecladown(event) {
        // uma função muito simples que determina em que ecrãs e situações em que as diferentes teclas pressionadas têm certos efeitos
        if (document.getElementById("player").alt !== "ded") {
            switch (event.key) {
                case "ArrowUp":
                case " ":
                    if (isOnGround) {
                        object.position.y = object.position.y - 6
                        object.velocity.y = - jumpVelocity
                        firstJump = true
                        resetAndPlayJump ()
                    }
                    else if (isOnWall && !hasWallJumped && !isOnGround) {
                        object.position.y = object.position.y - 6
                        object.velocity.y = - jumpVelocity
                        hasWallJumped = true
                        if (orientacao === "direita") {
                            orientacao = "esquerda"
                            object.position.x = object.position.x - 10
                            object.velocity.x = -15
                        }
                        else if (orientacao === "esquerda") {
                            orientacao = "direita"
                            object.position.x = object.position.x + 10
                            object.velocity.x = 15
                        }
                        resetAndPlayJump ()
                    }
                    else if (firstJump) {
                        object.position.y = object.position.y - 6
                        object.velocity.y = - jumpVelocity
                        firstJump = false
                        resetAndPlayJump ()
                    }
                    break
                case "ArrowLeft":
                case "A":
                case "a":
                    if (parseInt(document.getElementById("player").style.left) > 0) {
                        esquerda = true
                        direita = false
                        orientacao = "esquerda"
                    } else {
                        esquerda = false
                        direita = false
                    }
                    break
                case "ArrowRight":
                case "D":
                case "d":
                    if (parseInt(document.getElementById("player").style.left) + playerWidth < innerWidth / 2) {
                        direita = true
                        orientacao = "direita"
                        direitaBG = true
                        esquerda = false
                    } else if (parseInt(document.getElementById("player").style.left) + playerWidth <= innerWidth / 2) {
                        direita = false
                        direitaBG = true
                        orientacao = "direita"
                        esquerda = false
                    } else {
                        direita = false
                        esquerda = false
                    }
                    break
            }
        }
        // tirar isto depois e substituir por carregar no botao de respawn ou entao deixar sei la
        if (document.getElementById("respawnScreen").style.visibility === "visible") {
            if (event.key === " ") {
                respawnPlayer()
            }
        }
        else if (document.getElementById("videoPage").style.visibility === "visible") {
            switch (event.key) {
                case " ":
                    playPause();
                    break
                case "Escape":
                    if (document.getElementById("videoPlayer").paused) {
                        afterVideoScene()
                    }
                    break
            }
        }
    }

    function processa_teclaup(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "A":
            case "a":
                esquerda = false
                break
            case "ArrowRight":
            case "D":
            case "d":
                direita = false
                direitaBG = false
                break
        }
    }

    // esta função tambem foi de elevada complexidade permitindo-nos atribui-la dinamicamente funcionando sempre, para qualquer imagem, de qualquer resolução com qualquer numero de sprites
    // esta função é tambem uma variação da função de sprites usadas no final boss
    function spritePlayer() {
        if (direita) {orientacao = "direita"}
        if (esquerda) {orientacao = "esquerda"}
        if (orientacao === "esquerda" && document.getElementById("player").style.backgroundPositionY !==  "100%" ) {document.getElementById("player").style.backgroundPositionY = 100 + "%"}
        else if (orientacao === "direita" && document.getElementById("player").style.backgroundPositionY !==  "0%" ){document.getElementById("player").style.backgroundPositionY = 0 + "%"}
        if (object.velocity.x > 1 || object.velocity.x < -1 || (window["background" + 2].velocity.x > 1 && isOnMid)) {
            if (document.getElementById("player").alt === "alive") {
                for (let i=0; i < nSprite; i++) {
                    if (contadorSprite >= i*(duracaoCiclo/nSprite) && contadorSprite < (i+1)*(duracaoCiclo/nSprite)) {
                        spriteNum = i
                        break
                    }
                    else if (contadorSprite >= nSprite*(duracaoCiclo/nSprite)) {
                        contadorSprite = 0;
                        spriteNum = 0
                    }
                }
                document.getElementById("player").style.backgroundPositionX = - (spriteNum * ((playerHeight * racioImg)/nSprite)) +"px"
                contadorSprite++
            }
        }
    }

    // esta função age como um switch que "apaga" a visibilidade de todos os elementos principais cuja visibilidade é manipulada, e de seguida revela os elementos escolhidos, podendo escolher se queremos que o loading screen seja revelado durante este processo ou nao, muitas vezes sendo usado como buffer para quando as funções loadLevel0 ou loadLevel1 estão a correr
    function hideElementsExcept(loadingScreen = "", id = "", id2 = "",id3 ="") {
        document.getElementById("respawnScreen").style.visibility = "hidden"
        document.getElementById("gameObjects").style.visibility = "hidden"
        document.getElementById("game").style.visibility = "hidden"
        document.getElementById("mainMenu").style.visibility = "hidden"
        document.getElementById("levelsPage").style.visibility = "hidden"
        document.getElementById("finalBoss").style.visibility = "hidden"
        document.getElementById("videoPage").style.visibility = "hidden"
        document.getElementById("messageBG").style.visibility = "hidden"
        document.getElementById("backgroundlayer").style.visibility = "hidden"
        document.getElementById("aboutPage").style.visibility = "hidden"

        if (loadingScreen === "active") {
            document.getElementById("loadingScreen").style.visibility = "visible"
            setTimeout(function () {
                if (id !== "") {
                    document.getElementById(id).style.visibility = "visible"
                }
                if (id2 !== "") {
                    document.getElementById(id2).style.visibility = "visible"
                }
                if (id3 !== "") {
                    document.getElementById(id3).style.visibility = "visible"
                }
                document.getElementById("loadingScreen").style.visibility = "hidden"
            }, loadingTime)
        }
        else {
            if (id !== "") {
                document.getElementById(id).style.visibility = "visible"
            }
            if (id2 !== "") {
                document.getElementById(id2).style.visibility = "visible"
            }
            if (id3 !== "") {
                document.getElementById(id3).style.visibility = "visible"
            }
            document.getElementById("loadingScreen").style.visibility = "hidden"
        }

    }

}

//funções final Boss
{


    function sprite (bixoNum) {
        for (let i=0; i < window['valoresBixo'+bixoNum].numSprites; i++) {
            if (window['valoresBixo'+bixoNum].spriteCounter >= i*(window['valoresBixo'+bixoNum].cicleDuration/window['valoresBixo'+bixoNum].numSprites) && window['valoresBixo'+bixoNum].spriteCounter < (i+1)*(window['valoresBixo'+bixoNum].cicleDuration/window['valoresBixo'+bixoNum].numSprites)) {
                spriteNum = i
                break
            }
            else if (window['valoresBixo'+bixoNum].spriteCounter >= window['valoresBixo'+bixoNum].numSprites*(window['valoresBixo'+bixoNum].cicleDuration/window['valoresBixo'+bixoNum].numSprites)) {
                window['valoresBixo'+bixoNum].spriteCounter = 0;
                spriteNum = 0
            }
        }

        document.getElementById("spawnNum"+bixoNum).style.backgroundPositionX = - (spriteNum * ((window['valoresBixo'+bixoNum].height * window['valoresBixo'+bixoNum].imgRatio)/window['valoresBixo'+bixoNum].numSprites)) +"px"

        window['valoresBixo'+bixoNum].spriteCounter++

        if (window['valoresBixo'+bixoNum].status === "alive") {
            requestAnimationFrame(function (){
                sprite(bixoNum)
            })
        }
    }

    // esta função permite identificar um id e atribuir-lhe um comporatmento de mousover e mouseout com muita facilidade e praticalidade
    function defineOnmouseColors (id) {
        document.getElementById(id).onmouseover = function () {
            document.getElementById(id).style.color = "#631414"
        }
        document.getElementById(id).onmouseout = function () {
            document.getElementById(id).style.color = "white"
        }
    }


    // todas as funções usadas neste trabalho que começam por "defineMouseEvents" nasceram da necessidade da reaplicação de mouse events pois quando um elemento é escondido com style.visibility os elementos contidos nesse elemento perdem essas suas propriedades pelo que é necessário reaplica-las
    function defineMouseEventsFinalBoss () {

        document.getElementById("endGameScreen").onmouseover = function () {
            document.getElementById("tooltip1").style.visibility = "visible"
        }
        document.getElementById("endGameScreen").onmouseout = function () {
            document.getElementById("tooltip1").style.visibility = "hidden"
        }
        document.getElementById("tooltip1").onmouseover = function () {
            document.getElementById("tooltip1").style.visibility = "visible"
        }
        document.getElementById("tooltip1").onmouseout = function () {
            document.getElementById("tooltip1").style.visibility = "hidden"
        }


        // cenas para os characters que se vao escolher
        for (let i = 1; i < numerodebixos; i++) {

            document.getElementById("characterBox" + i).onclick = function () {
                if (document.getElementById("characterBox" + i).style.border !== "2px solid red") {
                    document.getElementById("characterBox" + i).style.border = "2px solid red"
                    charSelecionado = "images/characters/character" + i + ".png"
                    for (let a = 1; a < numerodebixos; a++) {
                        if (a === i) continue;
                        document.getElementById("characterBox" + a).style.border = "2px solid transparent"
                    }
                } else {
                    document.getElementById("characterBox" + i).style.border = "2px solid transparent"
                    charSelecionado = "images/blank.png"
                }
            }
            // o que acontece a cada div quando se poe o rato em cima deles
            document.getElementById("characterBox" + i).onmouseover = function () {
                if (document.getElementById("characterBox" + i).style.border !== "2px solid red") {
                    document.getElementById("characterBox" + i).style.border = "2px solid gold"
                    document.getElementById("tooltip2").style.visibility = "visible"
                    document.getElementById("tooltip2").style.left = parseInt(document.getElementById("botBarMenu").style.left) + (i-1) * document.getElementById("characterBox1").offsetWidth + "px"
                    if (i !== currentDisplay) {
                        currentDisplay = i
                        document.getElementById("field1").innerHTML = window['characterSpecs'+i].campo1
                        document.getElementById("field2").innerHTML = window['characterSpecs'+i].campo2
                        document.getElementById("field3").innerHTML = window['characterSpecs'+i].campo3
                    }
                }
            }

            // o que acontece a cada div quando se tira o rato de cima deles
            document.getElementById("characterBox" + i).onmouseout = function () {
                if (document.getElementById("characterBox" + i).style.border !== "2px solid red") {
                    document.getElementById("characterBox" + i).style.border = "2px solid transparent"
                    document.getElementById("tooltip2").style.visibility = "hidden"
                }
            }
        }

        //cenas para as dropzones aliadas e dados e invocação de bixo aliados
        for (let i = 1; i < nPaths + 1; i++) {
            document.getElementById("drop_" + i).style.border = "8px solid transparent"
            document.getElementById("drop_" + i).style.transition = "border 0.4s, opacity 0.4s"
            document.getElementById("drop_" + i).style.opacity = "0";

            document.getElementById("drop_" + i).onmouseover = function () {
                document.getElementById("drop_" + i + "_img").src = charSelecionado
                document.getElementById("drop_" + i).style.opacity = "1";
                document.getElementById("drop_" + i).style.border = "2px solid gold"
            }

            document.getElementById("drop_" + i).onmouseout = function () {
                document.getElementById("drop_" + i + "_img").src = "images/blank.png"
                document.getElementById("drop_" + i).style.border = "8px solid transparent"
            }

            // meter ainda o resto para iniciar os contadores e o jogo
            document.getElementById("drop_" + i).onclick = function () {
                if (charSelecionado !== "images/blank.png") {
                    document.getElementById("drop_" + i).style.border = "2px solid green"
                    switch (charSelecionado) {
                        case "images/characters/character1.png":
                            caracteristicasBixos(5000, 200, 10, 1, 1, "air", 90, 50, i, "ranged", window["limiteNum" + 1], "libelinha", "", "", 30, 15,12, 1*frameRate,12096/788)
                            break
                        case "images/characters/character2.png":
                            caracteristicasBixos(6000, 500, 10, 0.5, 2, "air", 90, 50, i, "ranged", window["limiteNum" + 2], "joaninha", "", "", 20, 20,15, 2*frameRate, 4335/472)
                            break
                        case "images/characters/character3.png":
                            caracteristicasBixos(6000, 500, 10, 1, 3, "ground", 90, 50, i, "ranged", window["limiteNum" + 3], "esquilo", "", "", 25, 25,4,1*frameRate, 1898/461)
                            break
                        case "images/characters/character4.png":
                            caracteristicasBixos(4000, 300, 10, 0.5, 4, "ground", 60, 100, i, "ranged", window["limiteNum" + 4], "sapo", "", "", 30, 30,18,2*frameRate, 9667/435)
                            break
                        case "images/characters/character5.png":
                            caracteristicasBixos(3000, 400, 2, 1, 5, "ground", 60, 60, i, "ranged", window["limiteNum" + 5], "escorpiao", "pierce", "", 15, 15, 12, 1*frameRate, 11952/782)
                            break
                        case "images/characters/character6.png":
                            caracteristicasBixos(4000, 500, 10, 0.5, 6, "ground", 70, 70, i, "ranged", "unlimited", "escaravelho", "", "",60,60,17, 2*frameRate, 15594/434)
                            break
                        case "images/characters/character7.png":
                            caracteristicasBixos(5000, 700, 3, 2, 7, "ground", 40, 75, i, "ranged", "unlimited", "bicho_pau","pierce","", 30,30,7,1*frameRate, 9529/448)
                            break
                        case "images/characters/character8.png":
                            caracteristicasBixos(6000, 500, 10, 2, 8, "air", 80, 80, i, "melee", "unlimited","","","","","",13,1*frameRate, 4490/395)
                            break
                        case "images/characters/character9.png":
                            caracteristicasBixos(6000, 500, 3, 2, 9, "air", 70, 50, i, "ranged", "unlimited", "borboleta","pierce", "", 30, 30, 19,1*frameRate, 13243/644)
                            break
                        case "images/characters/character10.png":
                            caracteristicasBixos(6000, 60, 300, 2, 10, "ground", 50, 50, i, "melee", "unlimited", "","", "oneShot", "","", 10, 1*frameRate, 6880/411 )
                            break
                        case "images/characters/character11.png":
                            caracteristicasBixos(6000, 70, 300, 2, 11, "air", 50, 50, i, "melee", "unlimited", "","", "oneShot", "","", 16, 1*frameRate, 6544/484 )
                            break
                        case "images/characters/character12.png":
                            caracteristicasBixos(8000, 700, 5, 2, 12, "ground", 50, 50, i, "melee", "unlimited", "","", "", "","", 5, 1*frameRate, 3161/373 )
                            break
                    }

                    // incrementação tem que ser antes senao as colisoes bugam e depos spawnar os bichos e dar update ao preço depois de spawnar
                    bixoNumero++
                    spwanBixarocoLane(i, bixoNumero, durac, hp, dmg, atackspeed, numberCharacter, tipoDeBixo, height, width, combat, limit, sourceBulltet, bulletType, damageType, bulletWidth, bulletHeight, nSprites, cicleDuration, imgRatio)
                    //document.getElementById("price").innerHTML = saldoBolota
                    //ligar o que esta em baixo se quiser que a seleção de bixo a spawnar de reset apos por um bixo
                    //charSelecionado = "images/blank.png"
                    for (let i = 1; i < numerodebixos; i++) {
                        //document.getElementById("characterBox" + i).style.border = "2px solid transparent"
                    }
                }
            }
        }
    }

    function defineMouseEventsMainMenu () {

        document.getElementById("play").onclick = function () {
            hideElementsExcept("active","gameObjects","game", "backgroundlayer")
            platformGameIsRunning = true;
            loadLevel0()
            respawnPlayer()
            requestAnimationFrame(function (){loop()})
            pressMenuButton.play()
        }

        document.getElementById("levels").onclick = function () {
            hideElementsExcept("","levelsPage")
            defineMouseEventsLevelsPage()
            pressMenuButton.play()
        }

        document.getElementById("calibrate").onclick = function () {
            clearTimeout(calibrateTimer)
            if ( !isNaN(parseInt(document.getElementById("fpsCounter").innerHTML))) {frameRate = parseInt(document.getElementById("fpsCounter").innerHTML)}
            document.getElementById("fpsDiv").style.display = "flex"
            document.getElementById("fpsValue").innerHTML = frameRate
            calibrateTimer = setTimeout(function () {document.getElementById("fpsDiv").style.display = "none"},1500)
            pressMenuButton.play()
        }

        document.getElementById("about").onclick = function () {
            hideElementsExcept("","aboutPage")
            defineMouseEventsAboutPage()
            for (let i=1; i<=3; i++) {
                window["quandranteOpacity"+i] = 0
                document.getElementById("quadrante"+i).style.opacity = 0
                window["timerAbout"+i] = setTimeout(function () {opacityChanger (i)},i*1000)
            }
            pressMenuButton.play()
        }

        defineOnmouseColors("play")
        defineOnmouseColors("levels")
        defineOnmouseColors("calibrate")
        defineOnmouseColors("about")
    }

    function opacityChanger (i) {
        window["quandranteOpacity"+i] = window["quandranteOpacity"+i] + 1/frameRate
        document.getElementById("quadrante"+i).style.opacity = window["quandranteOpacity"+i]
        if (window["quandranteOpacity"+i] < 1) {
            requestAnimationFrame(function () {
                opacityChanger(i)
            })
        }
    }

    function defineMouseEventsAboutPage () {
        document.getElementById("backbtn2").onclick = function () {
            hideElementsExcept("", "mainMenu")
            defineMouseEventsMainMenu()
            for (let i=1; i<=3; i++) {
                clearTimeout(window["timerAbout"+i])
            }
            pressMenuButton.play()
        }
        defineOnmouseColors("backbtn2")
    }

    function defineMouseEventsLevelsPage () {
        document.getElementById("backbtn").onclick = function () {
            hideElementsExcept("", "mainMenu")
            defineMouseEventsMainMenu()
            pressMenuButton.play()
        }
        document.getElementById("botaoTutorial").onclick = function () {

            hideElementsExcept("active","gameObjects","game", "backgroundlayer")
            platformGameIsRunning = true;
            loadLevel0()
            respawnPlayer()
            requestAnimationFrame(function (){loop()})
            pressMenuButton.play()

        }
        document.getElementById("botaoNivel1").onclick = function () {

            hideElementsExcept("active","gameObjects","game", "backgroundlayer")
            platformGameIsRunning = true;
            loadLevel1()

            respawnPlayer()
            requestAnimationFrame(function (){loop()})
            pressMenuButton.play()
        }
        document.getElementById("botaoFinalBoss").onclick = function () {
            for (let i=1; i<=5;i++) {
                window["amigo"+i] = true
            }
            bolotasApanhadas = 40
            hideElementsExcept("active","finalBoss")
            defineMouseEventsFinalBoss()
            resetFinalBoss()
            setTimeout(function (){
                startGame()
            },loadingTime)

            pressMenuButton.play()
        }

        defineOnmouseColors("backbtn")
        defineOnmouseColors("botaoTutorial")
        defineOnmouseColors("botaoNivel1")
        defineOnmouseColors("botaoFinalBoss")
    }

    // nesta função encontram-se o posicionamento de elementos após o load da pagina ser efetuado
    function posicionarOnLoad () {

        {
            posicionarElemento("finalBoss", 0, 0, 85, 100)
            posicionarElemento("topBar", 0, 0, 2, 100) // - 6 height
            posicionarElemento("leftSideBar", 2, 0, 77, 8)
            posicionarElemento("rightSideBar", 2, 92, 77, 8)
            posicionarElemento("barrasHp", 79, 0, 6, 100)
            posicionarElemento("botBar", 85, 0, 15, 100)
            posicionarElemento("finalBossScreen", 2, 8, 77, 84)
            posicionarElemento("botBarSide1", 0, 0, 15, 8)
            posicionarElemento("botBarMenu", 0, 15, 15, 77)
            posicionarElemento("currency", 0, 8, 15, 7)
            posicionarElemento("botBarSide2", 0, 92, 15, 8)
            posicionarRow("spawnNumInimigo0", 0, 99.5, 100, 0.5)
            posicionarRow("spawnNum0", 0, 0, 100, 0.5)
            for (let i = 1; i < nPaths + 1; i++) {
                document.getElementById("finalBossScreen").innerHTML += "<div id='finalBossRow" + i + "'></div>"
                posicionarRow("finalBossRow" + i, (i - 1) * (100 / nPaths), 0, 100 / nPaths, 100)
            }
            // images fundo dos elementos
            //imagemFundo("finalBossScreen", "fundo.png")
        }



        document.getElementById("tooltip1").style.top = innerHeight*0.79 - document.getElementById("tooltip1").offsetHeight - 10 + "px"
        document.getElementById("tooltip1").style.left = innerWidth - document.getElementById("tooltip1").offsetWidth - 10 + "px"


        document.getElementById("sid1").style.left = (innerWidth/2) - (document.getElementById("titleMainMenu").offsetWidth/2) + 4 + "px"
        document.getElementById("sid1").style.top = document.getElementById("titleMainMenu").offsetTop - 25 + "px"

        document.getElementById("sid2").style.left = (innerWidth/2) - (document.getElementById("titleMainMenu2").offsetWidth/2) + 4 + "px"
        document.getElementById("sid2").style.top = document.getElementById("titleMainMenu2").offsetTop - 25 + "px"

        document.getElementById("textDialogue").style.left = 200 + "px"

        document.getElementById("player").style.height = playerHeight + "px"
        document.getElementById("player").style.width = (playerHeight * racioImg)/nSprite + "px"
        document.getElementById("player").style.backgroundSize = (nSprite*100) + "% " + 200 + "%"
        document.getElementById("player").style.backgroundPositionX = 0+"px"
        document.getElementById("player").style.backgroundPositionY = 0+"%"

        document.getElementById("fpsDiv").style.display = "none"

        document.getElementById("dialogue").style.width = innerWidth - 100 + "px"

        document.getElementById("gifSid").style.position = "absolute"
        document.getElementById("gifSid").style.top = innerHeight/2 - document.getElementById("gifSid").height + "px"



        // elementos e images do dropsite
        for (let i = 1; i < nPaths + 1; i++) {
            document.getElementById("leftSideBar").innerHTML += "<div id='drop_" + i + "'></div>"
            document.getElementById("drop_" + i).innerHTML = '<img id="drop_' + i + '_img" src="images/blank.png" class="maximg">'
            document.getElementById("drop_" + i + "_img").style.top = "50%" //((1/nPaths) * parseInt(document.getElementById("leftSideBar").style.height) - parseInt(document.getElementById("leftSideBar").style.width))/2 + "px"
            document.getElementById("drop_" + i + "_img").style.left = "50%"
            document.getElementById("drop_" + i + "_img").style.transform = "translate(-50%, -50%)"
        }

        //  estilização de cada quadrante da left side bar
        for (let i = 1; i < nPaths + 1; i++) {
            document.getElementById("drop_" + i).style.height = (1 / nPaths) * parseInt(document.getElementById("leftSideBar").style.height) + "px"
            document.getElementById("drop_" + i).style.width = parseInt(document.getElementById("leftSideBar").style.width) + "px"
            document.getElementById("drop_" + i).style.top = (i - 1) / nPaths * parseInt(document.getElementById("leftSideBar").style.height) + "px"
        }

        // estilos dos charaacters a escolher
        for (let i = 1; i < numerodebixos; i++) {
            document.getElementById("botBarMenu").innerHTML += "<div id='characterBox" + i + "'></div>"
            document.getElementById("characterBox" + i).innerHTML += '<img src="images/characters/character' + i + '.png" id="character' + i + '" height="' + alturaCharacter + '">'
            document.getElementById("character" + i).style.top = (parseInt(document.getElementById("botBarMenu").style.height) - 10 - alturaCharacter) / 5 + "px"
        }

        document.getElementById("tooltip2").style.top = document.getElementById("botBar").offsetTop - document.getElementById("characterBox1").offsetHeight - 20 + "px"

        // formatação das boxes com os bixos que se pode invocar
        for (let i = 1; i < numerodebixos; i++) {
            document.getElementById("characterBox" + i).innerHTML += "<div id='divPriceBox" + i + "'><span id='priceChar" + i + "'>4</span><img id='bolotaPrice" + i + "' src='images/bolota.png' height='30' width='30'></div>"
            document.getElementById("divPriceBox" + i).style.display = "inline-block"
            document.getElementById("divPriceBox" + i).style.textAlign = "center"
            document.getElementById("priceChar" + i).style.position = "relative"
            document.getElementById("priceChar" + i).style.fontSize = "25px"
            document.getElementById("bolotaPrice" + i).style.verticalAlign = "middle"
            document.getElementById("priceChar" + i).style.verticalAlign = "middle"
            document.getElementById("bolotaPrice" + i).style.margin = "0px"
            document.getElementById("priceChar" + i).style.margin = "0px 4px 0px 0px"
            document.getElementById("divPriceBox" + i).style.left = "50%"
            document.getElementById("divPriceBox" + i).style.transform = "translateX(-50%)"
            document.getElementById("divPriceBox" + i).style.top = "18px"
            document.getElementById("priceChar" + i).innerHTML = window['price' + i]
        }
        document.getElementById("price").innerHTML = saldoBolota

    }

    function posicionarElemento (elem, top, left, height, width) {
        document.getElementById(elem).style.top = (top/100) * innerHeight + "px"
        document.getElementById(elem).style.left = (left/100) * innerWidth + "px"
        document.getElementById(elem).style.height =(height/100) * innerHeight + "px"
        document.getElementById(elem).style.width =(width/100) * innerWidth + "px"
    }

    function posicionarRow (elem, top, left, height, width) {
        document.getElementById(elem).style.top = (top/100) * innerHeight * (parseInt(document.getElementById("finalBossScreen").style.height)/innerHeight) + "px"
        document.getElementById(elem).style.left = (left/100) * innerWidth * (parseInt(document.getElementById("finalBossScreen").style.width)/innerWidth) + "px"
        document.getElementById(elem).style.height =(height/100) * innerHeight * (parseInt(document.getElementById("finalBossScreen").style.height)/innerHeight) + "px"
        document.getElementById(elem).style.width =(width/100) * innerWidth * (parseInt(document.getElementById("finalBossScreen").style.width)/innerWidth) + "px"
    }

    function imagemFundo (elem, imagem) {
        document.getElementById(elem).innerHTML += "<img src='images/" + imagem + "' height='100%' width='100%' style='z-index: 0'>"
    }

    function caracteristicasBixos (Duracao, HealthPoints, Damage, AtackSpeed, NumberCharacter, TipoDeBixo, Height, Width, Row, Combat, Limit, SourceBullet="", BulletType = "", DamageType, BulletWidth, BulletHeight, NumSprites, CicleDuration, ImgRatio) {
        durac = Duracao
        hp = HealthPoints
        dmg = Damage
        atackspeed = AtackSpeed
        numberCharacter = NumberCharacter
        tipoDeBixo = TipoDeBixo
        height = Height
        width = Width
        row = Row
        combat = Combat
        limit = Limit
        sourceBulltet = SourceBullet
        bulletType = BulletType
        damageType = DamageType
        bulletWidth = BulletWidth
        bulletHeight = BulletHeight
        nSprites = NumSprites
        cicleDuration = CicleDuration
        imgRatio = ImgRatio
    }

    // esta função verifica a colisao de animais aliados com robots inimigos e conforme os parametros apresentados age de maneira diferente
    function checkColisaoAliada (i, dmgColision="none", DamageType) { // aqui faço a colisao entre o elemento que ta a mexer e aquele contra que choca
        if (gameIsRunning) {
            for (let a=0; a<=bixoInimigoNumero; a++) {
                if (window['valoresBixoInimigo'+a] !== undefined && window['valoresBixo'+i] !== undefined) {
                    // check de row e de status e se o elemento ainda existe no DOM
                    if (document.body.contains(document.getElementById("spawnNumInimigo"+a)) && document.body.contains(document.getElementById("spawnNum"+i))) {
                        if (window['valoresBixo'+i].row === window['valoresBixoInimigo'+a].row && window['valoresBixoInimigo'+a].status === "alive" || window['valoresBixoInimigo'+a].status === "player") {
                            if (window['valoresBixo'+i].type === window['valoresBixoInimigo'+a].type || window['valoresBixoInimigo'+a].status === "player" ) {
                                //check horizontalmente
                                if (parseInt(document.getElementById("spawnNum"+i).style.left) + window['valoresBixo'+i].width + 5 > parseInt(document.getElementById("spawnNumInimigo"+a).style.left)) {
                                    // check vertical
                                    if (parseInt(document.getElementById("spawnNum"+i).style.top) < parseInt(document.getElementById("spawnNumInimigo"+a).style.top) + window['valoresBixoInimigo'+a].height && parseInt(document.getElementById("spawnNum"+i).style.top) + window['valoresBixo'+i].height > parseInt(document.getElementById("spawnNumInimigo"+a).style.top) || window['valoresBixoInimigo'+a].status === "player") {
                                        if (dmgColision==="none") {
                                            return (true)
                                        }
                                        else if (dmgColision!=="none") {// faz isto aqueles com os quais o bixo esta em colisao x segundos depois de chocar pela primeira vez
                                            if (DamageType === "oneShot") {
                                                if (a!==0) {
                                                    window['valoresBixoInimigo'+a].hp = 0
                                                    document.getElementById("barraCorInimigo"+a).style.width = (window['valoresBixoInimigo'+a].hp * 100)/hp + "%"
                                                }
                                                else if (a===0) {
                                                    window['valoresBixoInimigo'+a].hp = window['valoresBixoInimigo'+a].hp - (window['valoresBixo'+i].dmg * damageBoostMultiplier)
                                                }
                                                window['valoresBixo'+i].hp = 0
                                            }
                                            else {
                                                window['valoresBixoInimigo'+a].hp = window['valoresBixoInimigo'+a].hp - (window['valoresBixo'+i].dmg * damageBoostMultiplier)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function checkColisaoInimiga (i, dmgColision="none") { // aqui faço a colisao entre o elemento que ta a mexer e aquele contra que choca
        if (gameIsRunning) {
            for (let a=0; a<=bixoNumero; a++) {
                // condição para quando o valoresbixo ainda nao esta definido e faz com que a função crash
                if (window['valoresBixo'+a] !== undefined && window['valoresBixo'+i] !== undefined) {
                    if (document.body.contains(document.getElementById("spawnNum"+a)) && document.body.contains(document.getElementById("spawnNum"+i))) {
                        if (window['valoresBixo'+a].type === window['valoresBixo'+i].type || window['valoresBixo'+a].status === "player") {
                            // check de row e de status
                            if (window['valoresBixo'+a].row === window['valoresBixo'+i].row && window['valoresBixo'+a].status === "alive" || window['valoresBixo'+a].status === "player") {
                                //check horizontalmente
                                //console.log(parseInt(document.getElementById("spawnNum"+0).style.left) + window['valoresBixo'+0].width  > parseInt(document.getElementById("spawnNum"+1).style.left))
                                if (parseInt(document.getElementById("spawnNum"+a).style.left) + window['valoresBixo'+a].width +5 > parseInt(document.getElementById("spawnNum"+i).style.left) ) {
                                    // check vertical
                                    if (parseInt(document.getElementById("spawnNum"+a).style.top) < parseInt(document.getElementById("spawnNum"+i).style.top) + window['valoresBixo'+i].height && parseInt(document.getElementById("spawnNum"+a).style.top) + window['valoresBixo'+a].height > parseInt(document.getElementById("spawnNum"+i).style.top) || window['valoresBixo'+a].status === "player") {
                                        if (dmgColision==="none") {
                                            return (true)
                                        }
                                        else if (dmgColision!=="none") {// faz isto aqueles com os quais o bixo esta em colisao x segundos depois de chocar pela primeira vez
                                            if (Math.random()<evadeChanceMultiplier) {
                                                window['valoresBixo' + a].hp = window['valoresBixo' + a].hp - window['valoresBixo' + i].dmg
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // esta a função que poe os inimigos em campo e é chamada uma vez a cada dois segundos
    function spawnEnemies () {
        if (gameIsRunning) {
            let row = parseInt(Math.random()*5+1)
            inimigoEscolhido =  parseInt(Math.random()*5+1)
            switch (inimigoEscolhido) {
                case 1:
                    caracteristicasBixos(7000,300,6,1,1,"ground",80,50, row, "melee","","","","","","",10,1*frameRate,5390/813)
                    break
                case 2:
                    caracteristicasBixos(7000,500,5,1,2,"ground",80,50, row, "melee","","","","","","",10,1*frameRate,5390/813)
                    break
                case 3:
                    caracteristicasBixos(8000,300,7,1,3,"air",80,50, row, "melee","","","","","","",6,1*frameRate,2070/855)
                    break
                case 4:
                    caracteristicasBixos(9000,150,10,1,4,"air",80,60, row, "ranged","unlimited","balaRobot","","",20,20,6,1*frameRate,3234/855)
                    break
                case 5:
                    caracteristicasBixos(6000,100,10,1,5,"ground",80,50, row, "ranged","unlimited","balaRobot","","",20,20,5,1*frameRate,2695/814)
                    break
            }
            inimigoEscolhidosrc = "images/enemies/enemy" + inimigoEscolhido + ".png"
            bixoInimigoNumero++
            spwanBixarocoInimigoLane(row,"Inimigo" + bixoInimigoNumero, durac, hp, dmg, atackspeed, numberCharacter, tipoDeBixo, height, width, combat, sourceBulltet, bulletType, bulletWidth, bulletHeight, nSprites, cicleDuration, imgRatio)
        }
    }

    function spawnHpBar (numRow, bixoNum, Tipo, Altura, Team) {
        if (numRow>0) {
            document.getElementById("finalBossRow"+numRow).innerHTML += "<div style='width: " + hpbar.width + "px; height: " + hpbar.height + "px; z-index: 1; background-color: white  ; border: 1px solid black; border-radius: 10px' id='hp"+bixoNum+"'></div>"
            document.getElementById("hp"+bixoNum).style.opacity = 1
        }
        else {
            document.getElementById("barrasHp").innerHTML += "<div style='width: " + hpbarPlayers.width + "px; height: " + hpbarPlayers.height + "px; z-index: 1; background-color: white  ; border: 1px solid black; border-radius: 10px' id='hp"+bixoNum+"'></div>"
        }
        document.getElementById("hp"+bixoNum).innerHTML += "<div id='barraCor" + bixoNum + "' style='height: 100%; width: 100%; background-color: green;  border-radius: 9px 9px 9px 9px'></div>"

        switch (Team) {
            case "aliado":
                document.getElementById("hp"+bixoNum).style.left = "5px"
                break
            case "inimigo":
                document.getElementById("hp"+bixoNum).style.left = parseInt(document.getElementById("finalBossRow1").style.width) - hpbar.width + "px"
                break
            case "playerAliado":
                document.getElementById("hp"+bixoNum).style.left = 10 + "px"
                break
            case "playerInimigo":
                document.getElementById("hp"+bixoNum).style.left = innerWidth - hpbarPlayers.width - 10 + "px"
                break
        }

        switch (Tipo){
            case "ground":
                document.getElementById("hp"+bixoNum).style.top = parseInt(document.getElementById("finalBossRow" + numRow).style.height) - Altura - hpbar.height - 2 + "px"
                break
            case "air":
                document.getElementById("hp" + bixoNum).style.top = 0 - hpbar.height - 2 + "px"
                break
            case "player":
                document.getElementById("hp" + bixoNum).style.top =  parseInt(document.getElementById("barrasHp").style.height)/2 - hpbarPlayers.height/2 + 5 + "px"
                break
        }

    }

    function opacityReveal () {
        if (opacityEGS<1) {
            opacityEGS += 1/frameRate
            document.getElementById("endGameScreen").style.opacity = opacityEGS
            requestAnimationFrame(opacityReveal)
        }
    }

    // função responsavel pelas ações apos o término do finalboss
    function endOfGame (loser) {
        opacityEGS = 0
        if (loser===0){
            backgroundMusic("respawn")

            // mudar src e tornar visivel
            document.getElementById("imgEGS").src = "images/defeat.png"
            opacityReveal()
            setTimeout(function (){
                //console.log("derrota")
                hideElementsExcept("active", "mainMenu")
                defineMouseEventsMainMenu()
                stopAllBGMusicAndReset()
            },3000)
        }
        if (loser === "Inimigo0") {
            // mudar src e tornar visivel
            document.getElementById("imgEGS").src = "images/victory.png"
            opacityReveal()
            setTimeout(function (){
                // vitoria
                stopAllBGMusicAndReset()
                playVideo()
            },3000)
        }
        gameIsRunning = false
    }

    // esta função é responsavel por fazer update ás barras de hp dos jogadores, do Sid e dos humanos, e é responsavel por acionar o fim do jogo quando os pontos de vida de um dos dois chegar ao 0
    function updatePlayerBars (numIDBixo, hp){

        if ((window['valoresBixo'+numIDBixo].hp * 100)/hp >= 70) {
            document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "green"
        }
        else if ((window['valoresBixo'+numIDBixo].hp * 100)/hp < 70 && (window['valoresBixo'+numIDBixo].hp * 100)/hp >= 30 ){
            document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "yellow"
        }
        else if ((window['valoresBixo'+numIDBixo].hp * 100)/hp < 30){
            document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "red"
        }
        if (window['valoresBixo'+numIDBixo].hp <= 0) {
            document.getElementById("barraCor"+numIDBixo).style.width = 0 + "%"

        }
        else {
            document.getElementById("barraCor"+numIDBixo).style.width = (window['valoresBixo'+numIDBixo].hp * 100)/hp + "%"
        }

        if (window['valoresBixo'+numIDBixo].hp > 0) {
            requestAnimationFrame(function (){
                updatePlayerBars(numIDBixo, hp)
            })
        }
        else if (window['valoresBixo'+numIDBixo].hp <= 0) {
            endOfGame(numIDBixo)
        }
    }

    // esta função funciona de maneira similar á anterior mas é responsavel por fazeer update ás barras de hp, registar se ja se encontra um elemento ranged na row , e aquando da morte do elemento ranged, abrir o seu slot e remover o elemento que morreu
    function updateBar (numIDBixo, hp, numRow, team ="") {

        if (document.body.contains(document.getElementById("barraCor"+numIDBixo))) {

            if (window['valoresBixo'+numIDBixo].hp>= hp) {
                document.getElementById("barraCor"+numIDBixo).style.width = "100%"
                window['valoresBixo'+numIDBixo].hp = hp
            }
            else {
                document.getElementById("barraCor"+numIDBixo).style.width = (window['valoresBixo'+numIDBixo].hp * 100)/hp + "%"
            }

            document.getElementById("hp"+numIDBixo).style.left = parseInt(document.getElementById("spawnNum"+numIDBixo).style.left) + ((window['valoresBixo'+numIDBixo].width - hpbar.width)/2) +"px"
            if ((window['valoresBixo'+numIDBixo].hp * 100)/hp >= 70) {
                document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "green"
            }
            else if ((window['valoresBixo'+numIDBixo].hp * 100)/hp < 70 && (window['valoresBixo'+numIDBixo].hp * 100)/hp >= 30 ){
                document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "yellow"
            }
            else if ((window['valoresBixo'+numIDBixo].hp * 100)/hp < 30){
                document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "red"
            }

            if (window['valoresBixo'+numIDBixo].hp <= 0) {
                document.getElementById("barraCor"+numIDBixo).style.width = 0 + "%"
                clearInterval( window['timerBixo'+numIDBixo])
                if (team==="") {
                    window['rangedRowOccupied'+numRow] = false
                    //console
                }
                /*else if (team==="inimigo"){
                    window['rangedEnemyRowOccupied'+i] = false
                }

                 */
                window['valoresBixo'+numIDBixo].status = "dead"
                removeWhenDead(numIDBixo)
            }

            if (window['valoresBixo'+numIDBixo].hp > 0) {
                requestAnimationFrame(function (){
                    updateBar(numIDBixo, hp, numRow, team)
                })
            }
        }
    }

    // função responsavel por agregar as caracteristicas definidas e criar um elemento que entra no campo de jogo
    function spwanBixarocoInimigoLane (numRow, bixoNum, durac, healthPoints, Damage, AtackSpeed, numChar, Tipo, Altura, Largura, CombatType, SourceBullet, bulletType, BulletWidth, BulletHeight, NumSprites, CicleDuration, ImgRatio) {
        //document.getElementById("finalBossRow" + numRow).innerHTML += "<img id='spawnNum" + bixoNum + "' src='" + inimigoEscolhidosrc + "' height='" + Altura + "px' width='" + Largura + "px' style='z-index: 1'>" // por aqui a largura
        document.getElementById("finalBossRow" + numRow).innerHTML += "<div id='spawnNum" + bixoNum + "' style='z-index: 1'></div>"
        document.getElementById("spawnNum"+bixoNum).style.height = Altura + "px"
        document.getElementById("spawnNum"+bixoNum).style.width = (Altura*ImgRatio)/NumSprites + "px"
        document.getElementById("spawnNum"+bixoNum).style.backgroundImage = "url("+inimigoEscolhidosrc+")"
        document.getElementById("spawnNum"+bixoNum).style.backgroundSize = "cover"
        document.getElementById("spawnNum"+bixoNum).style.backgroundPositionX = 0+"px"

        if (Tipo === "ground") {
            document.getElementById("spawnNum" + bixoNum).style.top = parseInt(document.getElementById("finalBossRow" + numRow).style.height) - Altura + "px"
        }
        else {
            document.getElementById("spawnNum" + bixoNum).style.top = 0 + "px"
        }
        document.getElementById("spawnNum" + bixoNum).style.opacity = 1
        requestAnimationFrame(function(timestamp){
            window['starttime'+bixoNum] = timestamp
            window['valoresBixo'+bixoNum] ={
                hp: healthPoints,
                dmg: Damage,
                as: AtackSpeed,
                height: Altura,
                width: Largura,
                row: numRow,
                opacity: 1,
                status: "alive",
                numSprites: NumSprites,
                cicleDuration: CicleDuration,
                imgRatio: ImgRatio,
                spriteCounter: 1,
                type: Tipo
            }
            sprite(bixoNum)
            if (CombatType==="melee"){
                moveitenemy(timestamp,parseInt(document.getElementById("finalBossScreen").style.width) - Largura, durac, bixoNum, healthPoints,  Damage, AtackSpeed)
            }
            else if (CombatType==="ranged"){
                document.getElementById("spawnNum"+bixoNum).style.left = parseInt(document.getElementById("finalBossScreen").style.width) - Largura + "px"
                window['rangedEnemyRowOccupied'+numRow] = true
                updateBar(bixoNum, healthPoints, numRow, "inimigo")
                setTimeout(function (){shootEnemyProjectiles(numRow, durac, bixoNum, Damage, SourceBullet, bulletType, BulletWidth, BulletHeight)},0)
                window['timerBixo'+bixoNum] = setInterval(function (){shootEnemyProjectiles(numRow, durac, bixoNum, Damage, SourceBullet, bulletType, BulletWidth, BulletHeight)},1000/AtackSpeed)// isto vai ser um timer tenho que arranjar um spot para o matar, talvez no updateBar ya e isso
            }

        })
        spawnHpBar(numRow, bixoNum, Tipo, Altura, "inimigo")

    }

    function spwanBixarocoLane (numRow, bixoNum, durac, healthPoints, Damage, AtackSpeed, numChar, Tipo, Altura, Largura, CombatType, Limit, SourceBullet, bulletType, DamageType, BulletWidth, BulletHeight, NumSprites, CicleDuration, ImgRatio) {
        if (gameIsRunning) {
            if (charSelecionado !== "images/blank.png" && window['price'+numChar] <= saldoBolota && (!window['rangedRowOccupied'+numRow] && CombatType==="ranged" && window["amigo"+numChar]!== false || CombatType==="melee") && ( Limit===1 || Limit ==="unlimited")) {

                clickSFX.play()

                if (Limit===1) {
                    window["limiteNum"+numChar] = 0
                }

                if (numChar>=1 && numChar<=5) {
                    window["amigoNum"+numChar] = bixoNum
                }

                document.getElementById("finalBossRow" + numRow).innerHTML += "<div id='spawnNum" + bixoNum + "' style='z-index: 1'></div>"
                document.getElementById("spawnNum"+bixoNum).style.height = Altura + "px"
                document.getElementById("spawnNum"+bixoNum).style.width = (Altura*ImgRatio)/NumSprites + "px"
                document.getElementById("spawnNum"+bixoNum).style.backgroundImage = "url(images/spritesAlies/"+numChar+".png)"
                document.getElementById("spawnNum"+bixoNum).style.backgroundSize = "cover"
                document.getElementById("spawnNum"+bixoNum).style.backgroundPositionX = 0+"px"

                saldoBolota = saldoBolota - window['price'+numChar]
                //document.getElementById("finalBossRow" + numRow).innerHTML += "<img id='spawnNum" + bixoNum + "' src='" + charSelecionado + "' height='" + Altura + "px' width='" + Largura + "px' style='z-index: 1'>" // por aqui a largura
                if (Tipo === "ground") {
                    document.getElementById("spawnNum" + bixoNum).style.top = parseInt(document.getElementById("finalBossRow" + numRow).style.height) - Altura + "px"
                }
                else {
                    document.getElementById("spawnNum" + bixoNum).style.top = 0 + "px"
                }
                document.getElementById("spawnNum" + bixoNum).style.left = 0 + "px"
                document.getElementById("spawnNum" + bixoNum).style.opacity = 1

                requestAnimationFrame(function(timestamp){
                    window['starttime'+bixoNum] = timestamp
                    window['valoresBixo'+bixoNum] ={
                        hp: healthPoints,
                        dmg: Damage,
                        as: AtackSpeed,
                        height: Altura,
                        width: (Altura*ImgRatio)/NumSprites,
                        row: numRow,
                        opacity: 1,
                        status: "alive",
                        numSprites: NumSprites,
                        cicleDuration: CicleDuration,
                        imgRatio: ImgRatio,
                        spriteCounter: 1,
                        type: Tipo
                    }
                    sprite(bixoNum)
                    if (CombatType==="melee"){
                        moveit(timestamp,parseInt(document.getElementById("finalBossScreen").style.width) - Largura, durac, bixoNum, healthPoints,  Damage, AtackSpeed, DamageType)
                    }
                    else if (CombatType==="ranged") {
                        window['rangedRowOccupied'+numRow] = true
                        updateBar(bixoNum, healthPoints, numRow)
                        setTimeout(function (){shootProjectiles(numRow, durac, bixoNum, Damage, SourceBullet, bulletType, BulletWidth, BulletHeight)},0)
                        window['timerBixo'+bixoNum] = setInterval(function (){shootProjectiles(numRow, durac, bixoNum, Damage, SourceBullet, bulletType, BulletWidth, BulletHeight)},1000/AtackSpeed)// isto vai ser um timer tenho que arranjar um spot para o matar, talvez no updateBar ya e isso
                    }
                })
                spawnHpBar(numRow, bixoNum, Tipo, Altura, "aliado")
            }
        }
    }

    function shootProjectiles (Row, durac, bixoNum, Damage, SourceBullet, bulletType, BulletWidth, BulletHeight) { // meter aqui parametros para a largura dos projeteis e altura e da src tb
        if (gameIsRunning) {
            if (document.body.contains(document.getElementById("spawnNum"+bixoNum))) {
                requestAnimationFrame(function (timestamp){
                    document.getElementById("finalBossRow"+Row).innerHTML += "<img id='bala" + bullet + "' src='images/projectiles/"+ SourceBullet +".png' height='"+BulletHeight+"px' width='"+BulletWidth+"px' style='z-index: 1'>"
                    document.getElementById("bala"+bullet).style.left = window['valoresBixo'+bixoNum].width + "px"
                    document.getElementById("bala"+bullet).style.top = parseInt(document.getElementById("spawnNum"+bixoNum).style.top) + window['valoresBixo'+bixoNum].height/2 - document.getElementById("bala"+bullet).offsetHeight/2 + "px"
                    window['starttimebullet'+bullet] = timestamp
                    window['valoresBala'+bullet] ={
                        dmg: Damage,
                        row: Row,
                        width: BulletWidth,
                        height: BulletHeight
                    }
                    moveProjectiles(timestamp, bullet, durac, parseInt(document.getElementById("finalBossRow"+1).style.width), 10, bulletType, bixoNum)
                    bullet++
                })
            }
        }
    }

    function shootEnemyProjectiles (Row, durac, bixoNum, Damage, SourceBullet, bulletType, BulletWidth, BulletHeight) { // meter aqui parametros para a largura dos projeteis e altura e da src tb
        if (gameIsRunning) {
            if (document.body.contains(document.getElementById("spawnNum"+bixoNum))) {
                requestAnimationFrame(function (timestamp){
                    document.getElementById("finalBossRow"+Row).innerHTML += "<img id='bala" + bullet + "' src='images/projectiles/"+ SourceBullet +".png' height='"+BulletHeight+"px' width='"+BulletWidth+"px' style='z-index: 1'>"
                    document.getElementById("bala"+bullet).style.left = parseInt(document.getElementById("spawnNum"+bixoNum).style.left)  + "px"
                    document.getElementById("bala"+bullet).style.top = parseInt(document.getElementById("spawnNum"+bixoNum).style.top) + window['valoresBixo'+bixoNum].height/2 - document.getElementById("bala"+bullet).style.height/2 + "px"
                    window['starttimebullet'+bullet] = timestamp
                    window['valoresBala'+bullet] ={
                        dmg: Damage,
                        row: Row,
                        width: BulletWidth,
                        height: BulletHeight
                    }
                    moveEnemyProjectiles(timestamp, bullet, durac, parseInt(document.getElementById("finalBossRow"+1).style.width) - BulletWidth, 10, bulletType)
                    bullet++
                })
            }
        }
    }

    function moveProjectiles (timestamp, bulletNum, duration, dist, dmg, bulletType, bixoNum) {
        if (gameIsRunning) {
            if (document.body.contains(document.getElementById("bala"+bulletNum))) {
                var runtime = timestamp - window['starttimebullet'+bulletNum]
                var progress = runtime / duration
                progress = Math.min(progress, 1)
                document.getElementById("bala"+bulletNum).style.left =  window['valoresBixo'+bixoNum].width + (dist * progress) + 'px'
                colisionBullet(bulletNum, bulletType)
            }

            if (progress === 1) {
                document.getElementById("bala"+bulletNum).remove()
            }
            else if (progress<1) {
                requestAnimationFrame(function (timestamp){
                    moveProjectiles(timestamp, bulletNum, duration, dist, dmg, bulletType, bixoNum)
                })
            }

        }
    }

    function moveEnemyProjectiles (timestamp, bulletNum, duration, dist, dmg, bulletType ) {
        if (gameIsRunning) {
            if (document.body.contains(document.getElementById("bala"+bulletNum))) {
                var runtime = timestamp - window['starttimebullet'+bulletNum]
                var progress = runtime / duration
                progress = Math.min(progress, 1)
                document.getElementById("bala"+bulletNum).style.left = dist - (dist * progress) + 'px'
                colisionEnemyBullet(bulletNum, bulletType)
            }

            if (progress === 1) {
                if (document.body.contains(document.getElementById("bala"+bulletNum))) {
                    document.getElementById("bala"+bulletNum).remove()
                }
            }
            else if (progress<1) {
                requestAnimationFrame(function (timestamp){
                    moveEnemyProjectiles(timestamp, bulletNum, duration, dist, dmg, bulletType)
                })
            }

        }
    }

    function colisionBullet (i, bulletType = "") {
        for (let a=0; a<=bixoInimigoNumero; a++) {
            if (window['valoresBixoInimigo'+a] !== undefined) {
                // check de row e de status e se o elemento ainda existe no DOM
                if (document.body.contains(document.getElementById("spawnNumInimigo"+a))) {
                    if (document.body.contains(document.getElementById("bala"+i))) {
                        if (window['valoresBala'+i].row === window['valoresBixoInimigo'+a].row && window['valoresBixoInimigo'+a].status === "alive" || window['valoresBixoInimigo'+a].status === "player") {
                            //check horizontalmente
                            if (parseInt(document.getElementById("bala"+i).style.left) + window['valoresBala'+i].width > parseInt(document.getElementById("spawnNumInimigo"+a).style.left) && parseInt(document.getElementById("bala"+i).style.left) < parseInt(document.getElementById("spawnNumInimigo"+a).style.left) + window['valoresBixoInimigo'+a].width) {
                                // check vertical
                                if (parseInt(document.getElementById("bala"+i).style.top) < parseInt(document.getElementById("spawnNumInimigo"+a).style.top) + window['valoresBixoInimigo'+a].height && parseInt(document.getElementById("bala"+i).style.top) + window['valoresBala'+i].height > parseInt(document.getElementById("spawnNumInimigo"+a).style.top) || window['valoresBixoInimigo'+a].status === "player") {

                                    window['valoresBixoInimigo'+a].hp = window['valoresBixoInimigo'+a].hp - (window['valoresBala'+i].dmg * damageBoostMultiplier)
                                    if (bulletType === "") {
                                        document.getElementById("bala"+i).remove()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function colisionEnemyBullet (i, bulletType = "") {
        for (let a=0; a<=bixoNumero; a++) {
            if (window['valoresBixo'+a] !== undefined) {
                // check de row e de status e se o elemento ainda existe no DOM
                if (document.body.contains(document.getElementById("spawnNum"+a))) {
                    if (document.body.contains(document.getElementById("bala"+i))) {
                        if (window['valoresBala'+i].row === window['valoresBixo'+a].row && window['valoresBixo'+a].status === "alive" || window['valoresBixo'+a].status === "player") {
                            //check horizontalmente
                            if (parseInt(document.getElementById("bala"+i).style.left) + window['valoresBala'+i].width > parseInt(document.getElementById("spawnNum"+a).style.left) && parseInt(document.getElementById("bala"+i).style.left) < parseInt(document.getElementById("spawnNum"+a).style.left) + window['valoresBixo'+a].width) {
                                // check vertical
                                if (parseInt(document.getElementById("bala"+i).style.top) < parseInt(document.getElementById("spawnNum"+a).style.top) + window['valoresBixo'+a].height && parseInt(document.getElementById("bala"+i).style.top) + window['valoresBala'+i].height > parseInt(document.getElementById("spawnNum"+a).style.top) || window['valoresBixo'+a].status === "player") {
                                    window['valoresBixo'+a].hp = window['valoresBixo'+a].hp - window['valoresBala'+i].dmg
                                    if (bulletType === "") {
                                        document.getElementById("bala"+i).remove()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function moveitenemy(timestamp, dist, duration, numIDBixo, hp, dmg, atkspd){
        if (gameIsRunning) {
            var runtime = timestamp - window['starttime'+numIDBixo]
            var progress = runtime / duration
            progress = Math.min(progress, 1)

            if (document.body.contains(document.getElementById("barraCor"+numIDBixo))) {
                document.getElementById("barraCor"+numIDBixo).style.width = (window['valoresBixo'+numIDBixo].hp * 100)/hp + "%"
                document.getElementById("hp"+numIDBixo).style.left = parseInt(document.getElementById("spawnNum"+numIDBixo).style.left) + ((window['valoresBixo'+numIDBixo].width - hpbar.width)/2) +"px"
                if ((window['valoresBixo'+numIDBixo].hp * 100)/hp >= 70) {
                    document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "green"
                }
                else if ((window['valoresBixo'+numIDBixo].hp * 100)/hp < 70 && (window['valoresBixo'+numIDBixo].hp * 100)/hp >= 30 ){
                    document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "yellow"
                }
                else if ((window['valoresBixo'+numIDBixo].hp * 100)/hp < 30){
                    document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "red"
                }

                if (window['valoresBixo'+numIDBixo].hp <= 0) {
                    document.getElementById("barraCor"+numIDBixo).style.width = 0 + "%"
                    window['valoresBixo'+numIDBixo].status = "dead"
                    removeWhenDead(numIDBixo)
                }

                else if (checkColisaoInimiga(numIDBixo)) {
                    window['starttime'+numIDBixo] = window['starttime'+numIDBixo] + 1000/atkspd
                    setTimeout(function (){
                        requestAnimationFrame(function(timestamp) {
                            checkColisaoInimiga(numIDBixo, "active")
                            moveitenemy(timestamp, dist, duration, numIDBixo, hp, dmg, atkspd)
                        })
                    },1000/atkspd)
                }

                else if (gameIsRunning === true){
                    document.getElementById("spawnNum"+numIDBixo).style.left = dist - (dist * progress) + 'px'
                    requestAnimationFrame(function(timestamp) {moveitenemy(timestamp, dist, duration, numIDBixo, hp, dmg, atkspd)} )
                }
            }

        }
    }

    function removeWhenDead (numIDBixo) {
        if (document.body.contains(document.getElementById("spawnNum" + numIDBixo))) {
            if (window['valoresBixo'+numIDBixo].opacity <= 1 && window['valoresBixo'+numIDBixo].opacity > 0) {
                window['valoresBixo'+numIDBixo].opacity -= (0.5/frameRate)
                document.getElementById("spawnNum" + numIDBixo).style.opacity = window['valoresBixo'+numIDBixo].opacity
                document.getElementById("hp" + numIDBixo).style.opacity = window['valoresBixo'+numIDBixo].opacity
                requestAnimationFrame(function () {
                    removeWhenDead(numIDBixo)
                })
            }
            else if (window['valoresBixo'+numIDBixo].opacity <= 0) {
                document.getElementById("spawnNum" + numIDBixo).style.opacity = 0
                document.getElementById("hp" + numIDBixo).style.opacity = 0
                document.getElementById("spawnNum" + numIDBixo).remove()
                document.getElementById("hp"+numIDBixo).remove()
            }
        }
    }

    function moveit(timestamp, dist, duration, numIDBixo, hp, dmg, atkspd, DamageType){
        var runtime = timestamp - window['starttime'+numIDBixo]
        var progress = runtime / duration
        progress = Math.min(progress, 1)

        if (document.body.contains(document.getElementById("barraCor"+numIDBixo))) {
            if (window['valoresBixo'+numIDBixo].hp>= hp) {
                document.getElementById("barraCor"+numIDBixo).style.width = "100%"
                window['valoresBixo'+numIDBixo].hp = hp
            }
            else {
                document.getElementById("barraCor"+numIDBixo).style.width = (window['valoresBixo'+numIDBixo].hp * 100)/hp + "%"
            }

            document.getElementById("hp"+numIDBixo).style.left = parseInt(document.getElementById("spawnNum"+numIDBixo).style.left) + ((window['valoresBixo'+numIDBixo].width - hpbar.width)/2) +"px"
            if ((window['valoresBixo'+numIDBixo].hp * 100)/hp >= 70) {
                document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "green"
            }
            else if ((window['valoresBixo'+numIDBixo].hp * 100)/hp < 70 && (window['valoresBixo'+numIDBixo].hp * 100)/hp >= 30 ){
                document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "yellow"
            }
            else if ((window['valoresBixo'+numIDBixo].hp * 100)/hp < 30){
                document.getElementById("barraCor"+numIDBixo).style.backgroundColor = "red"
            }


            if (window['valoresBixo'+numIDBixo].hp <= 0) {
                document.getElementById("barraCor"+numIDBixo).style.width = 0 + "%"
                window['valoresBixo'+numIDBixo].status = "dead"

                removeWhenDead(numIDBixo)
            }

            else if (checkColisaoAliada(numIDBixo)) {
                window['starttime'+numIDBixo] = window['starttime'+numIDBixo] + 1000/atkspd
                setTimeout(function (){
                    requestAnimationFrame(function(timestamp) {
                        checkColisaoAliada(numIDBixo, "active", DamageType)
                        moveit(timestamp, dist, duration, numIDBixo, hp, dmg, atkspd, DamageType)
                    })
                },1000/atkspd)
            }

            else if (gameIsRunning === true){
                document.getElementById("spawnNum"+numIDBixo).style.left = 0 + (dist * progress) + 'px'
                requestAnimationFrame(function(timestamp) {moveit(timestamp, dist, duration, numIDBixo, hp, dmg, atkspd, DamageType)} )
            }
        }
    }

    // esta função é responsavel pela indicação de cor nas iamgens que indicam se o bicho que selecionaram se encontra passivel de ser jogado, e ha algumas razoes para nao o poder ser: nao o ter apanhado durante o platformer, ja o ter jogado uma vez
    function updateSourcesAvailability () {

        for (let i=1; i<numerodebixos; i++) {
            if ((window['price'+i] <= saldoBolota && (window["limiteNum"+i] === 1 && window['amigo'+i] || window["limiteNum"+i] === "unlimited" || window["limiteNum"+i] === undefined )) && document.getElementById("character"+i).src !== "images/characters/character"+i+".png" ) {
                document.getElementById("character"+i).src = "images/characters/character"+i+".png"
            }
            else {
                document.getElementById("character"+i).src = "images/characters/unavcharacter"+i+".png"
            }
        }
        requestAnimationFrame(updateSourcesAvailability)
    }

    // as proximas funções sao responsaveis por saber se os amigos com passivos se encontram em campo e por atribuir os bonus que estes apresentam por estar em campo
    function amigosPassivos () {
        for (let i=1; i<=5; i++) {
            if (document.body.contains(document.getElementById("spawnNum"+window["amigoNum"+i])) && window['valoresBixo'+window["amigoNum"+i]] !== undefined) {
                if (window['amigo'+i] && window["limiteNum"+i] === 0 && window['valoresBixo'+window["amigoNum"+i]].status === "alive") {
                    habilidadePassiva(i)
                }
                else {
                    resetHabilidadePassiva(i)
                }
            }
        }
        requestAnimationFrame(amigosPassivos)
    }

    function habilidadePassiva (i) {
        switch (i) {
            case 1:
                evadeChanceMultiplier = 0.7
                break
            case 2:
                healthPointsExtra = 5
                break
            case 3:
                bolotasExtra = 3
                break
            case 4:
                poisonDamage = 10
                break
            case 5:
                damageBoostMultiplier = 1.5
                break
        }
    }

    function resetHabilidadePassiva (i) {
        switch (i) {
            case 1:
                evadeChanceMultiplier = 1
                break
            case 2:
                healthPointsExtra = 0
                break
            case 3:
                bolotasExtra = 0
                break
            case 4:
                poisonDamage = 0
                break
            case 5:
                damageBoostMultiplier = 1
                break
        }
    }

    function healSegundo () {
        if (gameIsRunning) {
            if (healthPointsExtra > 0) {
                for (let i=1; i<=bixoNumero; i++) {
                    if (window['valoresBixo'+i] !== undefined) {
                        window['valoresBixo'+i].hp += healthPointsExtra/frameRate
                    }
                }
            }
            requestAnimationFrame(healSegundo)
        }
    }

    function bolotaSegundo () {
        if (gameIsRunning) {
            saldoBolota += (1+bolotasExtra)/frameRate
            document.getElementById("price").innerHTML = parseInt(saldoBolota)
            requestAnimationFrame(bolotaSegundo)
        }
    }

    function poisonSegundo () {
        if (gameIsRunning) {
            if (poisonDamage > 0) {
                for (let i=1; i<=bixoInimigoNumero; i++) {
                    if (window['valoresBixoInimigo'+i] !== undefined) {
                        window['valoresBixoInimigo'+i].hp -= (poisonDamage/frameRate)*damageBoostMultiplier
                    }
                }
            }
            requestAnimationFrame(poisonSegundo)
        }
    }

    function resetFinalBoss () {
        gameIsRunning = false
        // reset os valores de hp
        window['valoresBixoInimigo'+0].hp = hpJogadorInimigo
        window['valoresBixo'+0].hp = hpJogador
        // resewt das barras de hp
        document.getElementById("barrasHp").innerHTML = ""
        spawnHpBar(0,0,"player","","playerAliado")
        spawnHpBar(0,"Inimigo0","player","","playerInimigo")
        // reset gameObjects
        for (let i=1; i<=nPaths; i++) {
            document.getElementById("finalBossRow"+i).innerHTML = ""
        }

        //bullet = 1
        saldoBolota = bolotasApanhadas
        document.getElementById("price").innerHTML = saldoBolota
        for (let i=1; i<=5; i++) {
            window['limiteNum'+i] = 1
        }
        for (let i=1; i<=nPaths; i++) {
            window['rangedRowOccupied'+i] = false
        }
        for (let i=1; i<=bixoNumero; i++) {
            window["valoresBixo"+1] = undefined
            clearInterval(window['timerBixo'+i])
            clearTimeout(window["timerRemove"+i])
        }

        currentDisplay = 0
        for (let i=1; i<=bixoInimigoNumero; i++) {
            window["valoresBixoInimigo"+i] = undefined
            //clearInterval(window['timerBixoInimigo'+i]) //for ranged mas ainda nao ha
            clearTimeout(window["timerRemoveBixoInimigo"+i])
        }

        for (let i=1; i<=5; i++) {
            resetHabilidadePassiva(i)
        }

        clearInterval(spawnTimer)
    }

     function startGame () {
        setTimeout(function () {
            document.getElementById("endGameScreen").style.opacity = 0
            backgroundMusic("finalBoss")
            currentLevel = 2
            gameIsRunning = true
            updatePlayerBars(0, window['valoresBixo'+0].hp)
            updatePlayerBars("Inimigo0", window['valoresBixoInimigo'+0].hp)
            updateSourcesAvailability()
            spawnTimer = setInterval(spawnEnemies, 2000)
            amigosPassivos()
            healSegundo()
            bolotaSegundo()
            poisonSegundo()
        }, 50)
    }

}

// funções video
{
    function playVideo () {
        changeVideoSrc(currentLevel)
        platformGameIsRunning = false;
        hideElementsExcept("active","videoPage","messageBG")
        videoCheck()
    }

    function dimensionsVideoPlayer () {
        document.getElementById("videoPlayer").width = innerWidth
        document.getElementById("videoPlayer").style.top = (innerHeight-(9*document.getElementById("videoPlayer").width/(16)))/2 + "px"
    }

    function changeVideoSrc (i) {
        document.getElementById("videoPlayer").src = "videos/video"+i+".mp4"
    }

    function videoCheck() {

        if (document.getElementById("videoPlayer").ended) {
            // por aqui a função de troca de paginas
            document.getElementById("videoPage").style.visibility = "hidden"
            // play next level ou a cena
            afterVideoScene()
        }
        else {
            requestAnimationFrame(function (){
                videoCheck()
            })
        }
    }

    function afterVideoScene () {
        if (currentLevel === 0) {

            hideElementsExcept("active","gameObjects","game", "backgroundlayer")
            platformGameIsRunning = true;
            loadLevel1()
            respawnPlayer()
            requestAnimationFrame(function (){loop()})
            // load level 1
            document.getElementById("videoPlayer").currentTime = 0
        }
        else if (currentLevel === 2) {

            hideElementsExcept("active", "mainMenu")
            defineMouseEventsMainMenu()
            document.getElementById("videoPlayer").currentTime = 0
            // load mainMenu
        }
    }

    function playPause () {
        if (document.getElementById("videoPlayer").paused) {
            document.getElementById("videoPlayer").play()
            document.getElementById("messageBG").style.visibility = "hidden"
        }
        else {
            document.getElementById("videoPlayer").pause()
            document.getElementById("messageBG").style.visibility = "visible"
        }
    }
}

function updateConsola () {


    requestAnimationFrame(updateConsola)
}

function consoleFPSCounter () {
    FPStest()
    setInterval(function () {
        requestAnimationFrame(function (){
            document.getElementById("fpsCounter").innerHTML = frameTestCounter/(1/2)
            frameTestCounter = 0
        })

    },1000/2)
}

function FPStest () {
    frameTestCounter++
    if (running) {
        requestAnimationFrame(function (){
            FPStest()
        })
    }
}

function stopAllBGMusicAndReset () {
    if (finalBossMusic.paused === false) {finalBossMusic.pause()}
    if (mainMenuMusic.paused === false) {mainMenuMusic.pause()}
    if (platformerDark.paused === false) {platformerDark.pause()}
    if (platformerTutorial.paused === false) {platformerTutorial.pause()}
    if (respawnScreenMusic.paused === false) {respawnScreenMusic.pause()}

    finalBossMusic.currentTime = 0
    mainMenuMusic.currentTime = 0
    platformerDark.currentTime = 0
    platformerTutorial.currentTime = 0
    respawnScreenMusic.currentTime = 0
}

function backgroundMusic (i) {
    stopAllBGMusicAndReset()
    switch (i) {
        case "mainMenu":
            mainMenuMusic.play()
            break
        case 0:
            platformerTutorial.play()
            break
        case "finalBoss":
            finalBossMusic.play()
            break
        case 1:
            platformerDark.play()
            break
        case "respawn":
            respawnScreenMusic.play()
            break
    }
}


window.onload = function () {

    consoleFPSCounter()
    updateConsola()
    loadBackgrounds()
    posicionarOnLoad()
    dimensionsVideoPlayer()
    hideElementsExcept("","mainMenu")
    defineMouseEventsMainMenu()

    window.onkeydown = function (event) {
        processa_tecladown(event)
    };

    window.onkeyup = function (event) {
        processa_teclaup(event)
    };
}