async function name(){
    document.getElementById("rad").innerHTML="";
    let sec=document.getElementById("inputGroupSelect04").value;
    let response=await fetch('https://api.nytimes.com/svc/topstories/v2/'+sec+'.json?api-key=oCzrAsgeTlMViu4NpCQHvv7Ja56AvNBa');
    let jdata= await response.json();
    console.log(jdata);

    for(let i=0;i<jdata.results.length;i+=3)
    {
        let j=i+1;
        let k=i+2
        let str=`  <div class="row mb-2">
        <div class="col-lg-3">
        <div class="card" style="width: 18rem;">
        <img src="${jdata.results[i].multimedia[4].url}" class="card-img-top" alt="..." width="200" height="200">
        <div class="card-body">
          <h5 class="card-title">${jdata.results[i].title}</h5>
          <p class="card-text">${jdata.results[i].abstract}</p>
          <a href="${jdata.results[i].short_url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
      <div class="col-lg-3">
        <div class="card" style="width: 18rem;">
        <img src="${jdata.results[j].multimedia[4].url}" class="card-img-top" alt="..."width="200" height="200">
        <div class="card-body">
          <h5 class="card-title">${jdata.results[j].title}</h5>
          <p class="card-text">${jdata.results[j].abstract}</p>
          <a href="${jdata.results[j].short_url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
      <div class="col-lg-3">
        <div class="card" style="width: 18rem;">
        <img src="${jdata.results[k].multimedia[4].url}" class="card-img-top" alt="..."width="200" height="200">
        <div class="card-body">
          <h5 class="card-title">${jdata.results[k].title}</h5>
          <p class="card-text">${jdata.results[k].abstract}</p>
          <a href="${jdata.results[k].short_url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
      </div>`;
      document.getElementById("rad").innerHTML+=str;
    }
}
function name1(){
    name();
}

// name()