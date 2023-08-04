const charval=document.getElementById('textarea')
let totalcount= document.getElementById('total-counter')
let remainingcount= document.getElementById('remaining-counter')

let userchar=0
const updatecounter=()=>{
 userchar=charval.value.length
totalcount.innerText=userchar
remainingcount.innerText=150-userchar
}
charval.addEventListener('keyup',()=>updatecounter())

const copyText=()=>{
    charval.select()
    charval.setSelectionRange(0,9999)
    navigator.clipboard.writeText(charval.value)
}