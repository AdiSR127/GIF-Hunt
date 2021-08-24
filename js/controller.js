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
                display(json['data']);
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
        if(gify['featured_gif']!=null){
        outputDiv.innerHTML+= "<div class='figure m-4 p-3 rounded border border-info'><img alt='GIF' src="+gify['featured_gif']['images']['downsized_medium']['url']+"><figcaption class='bg-warning rounded m-1'>"+gify['display_name']+"</figcaption></div>";
        }
        
    })
}