let players = [];

function updateRanking(userName, timeScore) {

    let rankingHTML = '';
    
    // Push in to the array
    players.push({userName: userName, timeScore: timeScore});


    // Shuffle the array
    let shuffledPlayers = players.sort((a, b) =>  {
        
        let arrayA = a.timeScore.split(':')
        let arrayB = b.timeScore.split(':')

        let minutesA = parseInt(arrayA[0]) * 60
        let secondsA = parseInt(arrayA[1])
        let totalTimeA = minutesA + secondsA;

        let minutesB = parseInt(arrayB[0]) * 60
        let secondsB = parseInt(arrayB[1])
        let totalTimeB = minutesB + secondsB;
        
        // Descending order 
        if (totalTimeA < totalTimeB) {
            return -1
        }

    });

    // Limit array to 5 players
    if (shuffledPlayers.length > 5) shuffledPlayers.pop(); 
    

    shuffledPlayers.forEach(elm => {
        rankingHTML += `
        <li class="ranking-elements">
            <span class="user-ranking">${elm.userName}</span>
            <span class="score-ranking">${elm.timeScore}</span>
        </li>
        `;
    });


    document.querySelector('#ranking').innerHTML = rankingHTML;
}

export {
    players,
    updateRanking
}