//auto importing .env
import "https://deno.land/x/dotenv/load.ts"

let oldName:string = 'This_Repo_has_3_issues_0_watchers'

const getRepoData = async ({response}:{response:any})=>{

    const authKey:any = await Deno.env.get('AUTH_KEY');

    let requestHeaders: any = {
        'Authorization':`token ${authKey}`,
    }

    const url:string = `https://api.github.com/repos/avinashbharti97/${oldName}`;

    let issues:any = 0;
    let watchers:any = 0;

    await fetch(url, {
        headers: requestHeaders,
    }).then(res => res.json()).then(data => {
        issues = data["open_issues"];
        watchers = data["watchers"];
        console.log(issues)
    })
    
    let postHeaders: any = {
        'Authorization':`token ${authKey}`,
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
    
    let postBody:any = {
        "name": `This_Repo_has_${issues}_issues_${watchers}_watchers`
        // "name": "TEst"
    }

    await fetch(url, {
        method:'POST',
        headers: postHeaders,
        body: JSON.stringify(postBody)
    })
    .then(oldName = postBody["name"]);
     
    response.body = {"status":"success"}
}

export {getRepoData}