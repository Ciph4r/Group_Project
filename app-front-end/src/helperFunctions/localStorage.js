module.exports = {
    pushHistory : (id) => {
        let history =  JSON.parse(localStorage.getItem("history"))

        if (history === null){
            history = []
            history.push(id)
            localStorage.setItem('history', JSON.stringify(history))
        }else{
            let newHistory = [...history]
            if(newHistory.length >= 6) {
                newHistory = newHistory.slice(0, 5)
            }
            newHistory.unshift(id)
            localStorage.setItem('history', JSON.stringify(newHistory))
        }
}


