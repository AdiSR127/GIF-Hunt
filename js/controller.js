window.addEventListener('load',start);

function start(){
    document.querySelector('#gif').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            document.getElementById("checkbtn").click();
        }
    });
    var check = document.getElementById('checkbtn');
    check.addEventListener('click',gifcheck);
}

function gifcheck(){

    var gif = document.getElementById('gif').value;
    if(gif && gif.length>0){
            document.getElementById('loading').className = 'text-center crop';
            document.getElementById('show').innerHTML='';
        var result = getgif(gif);
        result.then(response=>{
            response.json().then(json=>{
                document.getElementById('loading').className = 'hide';
                display(json['results']);
            }

            ).catch(err=>{
                console.log(err);
            }

            ).catch(err=>{
                console.log(err);
            }
                )
        }

        )
    }
}

function display(gifshow){
    var outputDiv = document.getElementById('show');
    gifshow.forEach(gify=>{
        outputDiv.innerHTML+= "<div class='figure m-4'><a target='_blank' href='"+gify['itemurl']+"'><img alt='GIF' class='search rounded' src="+gify['media'][0]['gif']['url']+"></a></div>";
        
        
    })
}