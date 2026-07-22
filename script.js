const webList = {
	id: 1,
	url: "https://hello.com",
	user: "bob"
};

const weblist = JSON.stringify(webList);

document.getElementById("jsonText").innerHTML = weblist;

const normalText = JSON.parse(weblist);

document.getElementById("normalid").innerHTML = "<h1>"+normalText.id+"</h1>";
document.getElementById("normalurl").innerHTML = "<h1>"+normalText.url+"</h1>";
document.getElementById("normaluser").innerHTML = "<h1>"+normalText.user+"</h1>";