const username = "garciakim";
const apiUrl = `https://api.github.com/users/${username}/repos?&sort=created`;
const projList = document.querySelector('.projects');
const errMesjj = "You know how they say 'curiosity killed the cat'? Well, apparently, it also killed my GitHub account. I was just trying to show it some love and teach it some new tricks, but it decided to turn on me like a rabid dog! The code went rogue and started doing things that even my wildest dreams couldn't have conjured up. <br><br> Sigh, why do I always end up angering the tech gods?";
 
(async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Unable to fetch file");
    }
    const json = await response.json();
    for (let i = 0; i < 3; i++) {
      const [id, node_id, name, full_name, owner, private, html_url, description, fork, url, created_at, updated_at, pushed_at, git_url, ssh_url, clone_url, svn_url, homepage, stargazers_count, watchers_count, language, has_issues, has_projects, has_downloads, has_wiki, has_pages, forks_count, mirror_url, archived, disabled, open_issues_count, license, forks, open_issues, watchers, default_branch, temp_clone_token, network_count, subscribers_count] = Object.values(json[i]);
      const nwdate = new Date(json[i].pushed_at).toLocaleString("default", { month: "long" });
      const html = `<div class="fb-33"><h5><a href="${html_url}"><i class="fa-solid fa-minus"></i> ${name}</a></h5><h6>${nwdate}&nbsp;Project</h6><br/><p>${description}</p></div>`;
      projList.insertAdjacentHTML("beforeend", html);
    }
    console.log("List applied!");
  } catch (error) {
    const projsubList = document.querySelectorAll(".projects .fb-33");
    projsubList.forEach((box) => {
      box.remove();
    });
    const html = `<div class="fb-100"><h5><i class="fa-solid fa-minus"></i> OH NO... Anyway~ </h5><p>${errMesjj}</p></div>`;
    projList.insertAdjacentHTML("beforeend", html);
    console.error("100% sure it's not private?");
  }
})();
// async function getRepos(){
// 	try {
// 		const username = "garciakim";
// 		const response = await fetch (`https://api.github.com/users/${username}/repos?&sort=created`);
// 		if(!response.ok){
// 			throw new Error ("Unable to fetch file")
// 		}
// 		const json = await response.json();
// 		return json;
// 	}
// 	catch(error) {
// 		console.error("Are you sure it's not private?");
// 	}
// }
// const RepoList = getRepos();
// RepoList
// .then(
// 	(json) => {
// 		console.log(json)
// 		const projList = document.querySelector('.projects');
// 		var arr = [];
// 		var _html = "";

// 		for (var i = 0; i < 3; i++){
// 			arr.push(Object.values(json[i]));
// 			// console.log(arr)
// 			const gtName = arr[i][2],
// 				  gtURL = arr[i][6],
// 				  gtDesc = arr[i][7], 
// 				  gtDate = arr[i][46];
				
// 				nwdate = new Date(gtDate).toLocaleString('default', { month: 'long' });
// 				_html = `<div class="fb-33"><h5><a href="${gtURL}"><i class="fa-solid fa-minus"></i> ${gtName}</a></h5><h6>${nwdate}&nbsp;Project</h6><br/><p>${gtDesc}</p></div>`;
// 				projList.insertAdjacentHTML('beforeend', _html);
// 		}
// 		console.log("List applied!");
// 	}
// )
// .catch( 
// 	(error) => { 
// 		const projList = document.querySelector('.projects'),
// 			  projsubList = document.querySelectorAll('.projects .fb-33');
			
// 			projsubList.forEach(box => {box.remove()});
// 			_html = '<div class="fb-100"><h5><i class="fa-solid fa-minus"></i> OH NO... Anyway~ </h5><p>That wasn`t supposed to happen but it did and looks like I accidentally done something to my Github account, the API code, tried experimenting with the function again and it affected the code in a weird way, or Github on maintenance.</p><br/><p>I`ll try to figure something out... once I`m done playing - I can`t pause an online game! (´Д｀). </p></div>';
// 		projList.insertAdjacentHTML('beforeend', _html);

// 		console.error("100% sure it's not private?");
// 	} 
// )