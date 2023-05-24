const text = document.querySelectorAll('.text')



let content = `So let's start.`
let rgx = new RegExp(/./, 'g')
let contentArray = content.match(rgx)
let counter = 0

let audio = new Audio()
audio.src = 'sound/click.mp3'
audio.loop = true

// ok noew let's add sound effects
// Perfect

function animate(htmlElement, array, delay) {
    if (array != null) {
        setInterval(() => {
            if (counter >= array.length) {
                let inputText = htmlElement.innerText
                if (counter > array.length + delay) {
                    if (inputText.length <= 0) {
                        audio.pause()
                        if(counter > (array.length * 2.5) + delay){
                            counter = -1
                        }
                    }
                    else {
                        audio.play()
                        inputText = inputText.substr(0, inputText.length - 1)
                        console.log(inputText)
                        htmlElement.innerHTML = inputText
                    }

                }
                else {
                    audio.pause()
                }
            }
            else {
                audio.play()
                htmlElement.innerHTML += array[counter]
                console.log(htmlElement.innerText)
            }

            counter++
        }, 100)
    }
}




text.forEach((item) => {
    animate(item, contentArray, 20)
})