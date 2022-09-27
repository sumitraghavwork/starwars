var id;
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func()
    },delay)
}
async function main(){
    let icon = document.getElementById('search_icon')
    icon.src = "./media/empire.png"
    icon.parentNode.style.backgroundColor = 'gray'
    let query = document.getElementById('search').value
    let data = await getData(query)
    console.log(data)
    appendData(data)
    icon.src = "./media/search.svg"
    icon.parentNode.style.backgroundColor = 'yellow'
}
async function getData(query){
    let url = `https://swapi.dev/api/people/?search=${query}`
    try{
        let res = await fetch(url)
        let data = await res.json()
        return data.results
    }catch{
        console.log('Error on Get Data')
    }
}
function appendData(arr){
    // console.log(arr)
    let query = document.getElementById('query')
    if(arr==undefined){
        query.innerHTML = null
        return
    }
    query.innerHTML = null
    arr.forEach(function(ele,i){
        const card = document.createElement('div');
        const avatar = document.createElement('div');
        const name = document.createElement('p');
        name.innerText = ele.name
        const gen = document.createElement('p');
        gen.innerText = ele.gender
        const year = document.createElement('p');
        year.innerText = ele.birth_year
        avatar.append(name,year)
        card.setAttribute('class','queries')
        card.append(avatar,gen)
        card.addEventListener('click',function(){
            fetchCharacter(ele.name)
        })
        query.appendChild(card)
    })
}
async function fetchCharacter(name){
    let url = `https://swapi.dev/api/people/?search=${name}`
    try{
        let res = await fetch(url)
        let data = await res.json()
        console.log(data.results)
        localStorage.setItem('character',JSON.stringify(data.results))
        window.location.href="person.html"
    }catch{
        console.log('Error on Get Data')
    }
}