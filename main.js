var idea = []
idea[0] = "Välkommen";
idea[1] = "Welkommen";
idea[2] = "Bem vindo";
idea[2] = "Bien venido";
function Idea() {
    var randomIdea = Math.floor(Math.random()*(idea.length));
    document.getElementById('welcome').innerHTML = idea[randomIdea];
}