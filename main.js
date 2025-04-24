let word="";
let wordLength;
async function getWord()
{
    let winCounts = 0;
    let counts = 5;
    let data = await fetch('https://random-word-api.herokuapp.com/word?number=1')
     result = await data.json();
     word = result.toString();
     wordLength = word.length;
     console.log(word);
     firstReload();
    document.body.addEventListener('keypress',(e)=>{
        if(word.includes(e.key.toLocaleLowerCase()))
        {
            let index = word.indexOf(e.key);
            console.log(index);
            document.getElementById(`${index}`).innerHTML = `${word.charAt(index)}`;
            word = word.replace(e.key,'_');
            winCounts++;
            console.log(winCounts)
            if(winCounts == wordLength)
                {
                    console.log("won")
                    document.getElementById('counts').style.display ='none';
                    document.getElementById('winCounts').style.display ='block';
                    setTimeout(()=>{
                        location.reload();
                    },2000);
                }
              
        }
        else
        {
            if(counts==1)
                {
                    console.log("won")
                    document.getElementById('counts').style.display ='none';
                    document.getElementById('lossCounts').style.display ='block';
                    setTimeout(()=>{
                        location.reload();
                    },2000); 
                }
            counts--;
            document.getElementById('counts').innerHTML = `Number of turns : ${counts}`;
        }
    })
    
    document.getElementById('btn').addEventListener('click',()=>{
        location.reload();
    })
}
getWord();
function firstReload(){
    let container =``;
    for(let i=0 ; i< wordLength; i++)
    {
        container += `<div class="letter">
                <span id="${i}"></span>
                <div class="line"></div>
            </div>`;
    }
    document.getElementById('generatedWord').innerHTML=container;
}

