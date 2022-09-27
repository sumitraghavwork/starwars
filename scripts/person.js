let person = JSON.parse(localStorage.getItem('character')) || []

window.addEventListener('load',function(){
    addData(person)
})
function addData(arr){
    console.log(arr)
    let div1 = document.getElementById('div1')
    let div2 = document.getElementById('div2')
    div1.innerHTML=null
    div2.innerHTML=null
    let name = document.getElementById('name')
    name.innerText = arr[0].name
    arr.forEach(function(ele,i){
        const tag = document.createElement('h2');
        tag.innerText = 'Personal Info'
        const gender = document.createElement('p');
        gender.innerText = `Gender: ${ele.gender}`
        const birth = document.createElement('p');
        birth.innerText = `Birth Year: ${ele.birth_year}`
        const height = document.createElement('p');
        height.innerText = `Height: ${ele.height}`
        div1.append(tag,birth,gender,height)

        const tag1 = document.createElement('h2');
        tag1.innerText = 'Anatomy'
        const eye = document.createElement('p');
        eye.innerText = `Eye Color: ${ele.eye_color}`
        const mass = document.createElement('p');
        mass.innerText = `Mass: ${ele.mass}`
        const hair = document.createElement('p');
        hair.innerText = `Hair Color: ${ele.hair_color}`
        div2.append(tag1,eye,mass,hair)
    })    
}