const question = document.querySelector('#question');

const yesButton = document.querySelector('#yes')
const noButton = document.querySelector('#no')

updateQuestion = (newQuestion) => {
    question.innerText = newQuestion;
}



yesButton.addEventListener('click', () => {
    updateQuestion('Is the scene safe?');
    noButton.innerText = 'NO';

    yesButton.addEventListener('click', () => {
        updateQuestion('Is the person responsive?');

        yesButton.addEventListener('click', () => {
            updateQuestion('What is the Major Complaint?');

            const responses = document.querySelector('#responses');
            responses.replaceChildren();

            const chestPain = document.createElement(`a`);
            chestPain.innerText = "Chest Pain";
            chestPain.href = "emergencyInfo.html";

            chestPain.style.backgroundColor = "#E84855";
            chestPain.style.color = "#480C4C";
            chestPain.style.height = "100px";
            // chestPain.style.width = "40%";
            // chestPain.style.display = "inline";
            chestPain.style.fontSize = "30px";
            chestPain.style.margin = "auto";
            chestPain.style.marginBottom = "15px";
            chestPain.style.paddingTop = "30px";


            const droopyFace = document.createElement(`button`);
            droopyFace.innerText = "Droopy Face";
            droopyFace.style.backgroundColor = "#F8D555";
            droopyFace.style.color = "#480C4C";
            droopyFace.style.height = "100px";
            // droopyFace.style.width = "40%";
            // droopyFace.style.display = "inline";
            droopyFace.style.fontSize = "30px";
            droopyFace.style.margin = "auto";
            droopyFace.style.marginBottom = "15px";


            const headache = document.createElement(`button`);
            headache.innerText = "Headache";
            headache.style.backgroundColor = "#439a86";
            headache.style.color = "#480C4C";
            headache.style.height = "100px";
            // headache.style.width = "40%";
            // headache.style.display = "inline";
            headache.style.fontSize = "30px";
            headache.style.margin = "auto";
            headache.style.marginBottom = "15px";


            const shortOfBreath = document.createElement(`button`);
            shortOfBreath.innerText = "Shortness of Breath";
            shortOfBreath.style.backgroundColor = "#007991";
            shortOfBreath.style.color = "#480C4C";
            shortOfBreath.style.height = "100px";
            // shortOfBreath.style.width = "40%";
            // shortOfBreath.style.display = "inline";
            shortOfBreath.style.fontSize = "30px";
            shortOfBreath.style.margin = "auto";
            shortOfBreath.style.marginBottom = "15px";


            const idk = document.createElement(`button`);
            idk.innerText = "I Don't Know";
            idk.style.backgroundColor = "#E84855";
            idk.style.color = "#480C4C";
            idk.style.height = "100px";
            // idk.style.width = "25%";
            // idk.style.display = "inline";
            idk.style.fontSize = "30px";
            idk.style.margin = "auto";
            

            responses.append(chestPain, droopyFace, headache, shortOfBreath, idk);
        })
    })

    noButton.addEventListener('click', () => {
        updateQuestion
    })

})

noButton.addEventListener('click', () => {
    updateQuestion('Get to safety and call 9-1-1');

    yesButton.remove();
    noButton.remove();
})