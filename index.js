console.log('Happy developing ✨')
function tap() {
}
function delRecent(){
}
function clearCalc(){

}
const stored=sessionStorage.getItem('');
if(stored){
    equations= JSON.parse(stored);
}
else{
    equations= [];
    sessionStorage.setItem('stored', JSON.stringify(equations));
}