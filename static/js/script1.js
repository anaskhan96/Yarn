var nlp = nlp_compromise;
var lex = new RiLexicon();

var col = [190,100,80];

var passwords = ["a","able","about","above","abst","accordance","chapter","according","accordingly","across","act","actually","added","adj","affected","affecting","affects","after","afterwards","again","against","ah","all","almost","alone","along","already","also","although","always","am","among","amongst","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","apparently","approximately","are","aren","arent","arise","around","as","aside","ask","asking","at","auth","available","away","awfully","b","back","be","became","because","become","becomes","becoming","been","before","beforehand","begin","beginning","beginnings","begins","behind","being","believe","below","beside","besides","between","beyond","biol","both","brief","briefly","but","by","c","ca","came","can","cannot","can't","cause","causes","certain","certainly","co","com","come","comes","contain","containing","contains","could","couldnt","d","date","did","didn't","different","do","does","doesn't","doing","done","don't","down","downwards","due","during","e","each","ed","edu","effect","eg","eight","eighty","either","else","elsewhere","end","ending","enough","especially","et","et","al","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","except","f","far","few","ff","fifth","first","five","fix","followed","following","follows","for","former","formerly","forth","found","four","from","further","furthermore","g","gave","get","gets","getting","give","given","gives","giving","go","goes","gone","got","gotten","h","had","happens","hardly","has","hasn't","have","haven't","having","he","hed","hence","her","here","hereafter","hereby","herein","heres","hereupon","hers","herself","hes","hi","hid","him","himself","his","hither","home","how","howbeit","however","hundred","i","id","ie","if","i'll","im","immediate","immediately","importance","important","in","inc","indeed","index","information","instead","into","invention","inward","is","isn't","it","itd","it'll","its","itself","i've","j","just","k","keep","keeps","kept","kg","km","know","known","knows","l","largely","last","lately","later","latter","latterly","least","less","lest","let","lets","like","liked","likely","line","little","'ll","look","looking","looks","ltd","m","made","mainly","make","makes","many","may","maybe","me","mean","means","meantime","meanwhile","merely","mg","might","million","miss","ml","more","moreover","most","mostly","mr","mrs","much","mug","must","my","myself","n","na","name","namely","nay","nd","near","nearly","necessarily","necessary","need","needs","neither","never","nevertheless","new","next","nine","ninety","no","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","now","nowhere","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","omitted","on","once","one","ones","only","onto","or","ord","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","owing","own","p","page","pages","part","particular","particularly","past","per","perhaps","placed","please","plus","poorly","possible","possibly","potentially","pp","predominantly","present","previously","primarily","probably","promptly","proud","provides","put","q","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","respectively","resulted","resulting","results","right","run","s","said","same","saw","say","saying","says","sec","section","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sent","seven","several","shall","she","shed","she'll","shes","should","shouldn't","show","showed","shown","showns","shows","significant","significantly","similar","similarly","since","six","slightly","so","some","somebody","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","still","stop","strongly","sub","substantially","successfully","such","sufficiently","suggest","sup","sure","t","take","taken","taking","tell","tends","th","than","thank","thanks","thanx","that","that'll","thats","that've","the","their","theirs","them","themselves","then","thence","there","thereafter","thereby","thered","therefore","therein","there'll","thereof","therere","theres","thereto","thereupon","there've","these","they","theyd","they'll","theyre","they've","think","this","those","thou","though","thoughh","thousand","throug","through","throughout","thru","thus","til","tip","to","together","too","took","toward","towards","tried","tries","truly","try","trying","ts","twice","two","u","un","under","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","us","use","used","useful","usefully","usefulness","uses","using","usually","v","value","various","'ve","very","via","viz","vol","vols","vs","w","want","wants","was","wasnt","way","we","wed","welcome","we'll","went","were","werent","we've","what","whatever","what'll","whats","when","whence","whenever","where","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","while","whim","whither","who","whod","whoever","whole","who'll","whom","whomever","whos","whose","why","widely","willing","wish","with","within","without","wont","words","world","would","wouldnt","www","x","y","yes","yet","you","youd","you'll","your","youre","yours","yourself","yourselves","you've","z","zero","i","me","my","myself","we","our","ours","ourselves","you","your","yours","yourself","yourselves","he","him","his","himself","she","her","hers","herself","it","its","itself","they","them","their","theirs","themselves","what","which","who","whom","this","that","these","those","am","is","are","was","were","be","been","being","have","has","had","having","do","does","did","doing","a","an","the","and","but","if","or","because","as","until","while","of","at","by","for","with","about","against","between","into","through","during","before","after","above","below","to","from","up","down","in","out","on","off","over","under","again","further","then","once","here","there","when","where","why","how","all","any","both","each","few","more","most","other","some","such","no","nor","not","only","own","same","so","than","too","very","s","t","can","will","just","don","should","now","d","ll","m","o","re","ve","y","ain","aren","couldn","didn","doesn","hadn","hasn","haven","isn","ma","mightn","mustn","needn","shan","shouldn","wasn","weren","won","wouldn"];

var beginChecks = function(){
	setInterval(getKeys, 2000);
	setInterval(getPeople, 2000);
	setInterval(getWordCount, 100);
	setInterval(randSent, 4000);
}


var getPeople = function(){
	var tex = document.getElementById("ustory").innerHTML;
	var arr = nlp.text(tex).people();
	var nameArr = []
	for(i = 0; i<arr.length; i+=1){
		var wrd = RiTa.trimPunctuation(RiTa.stripPunctuation(arr[i]["normal"]));
		if (!lex.containsWord(wrd)){
			nameArr.push(wrd);
		}
	}
	function unique(arr) {
	    var u = {}, a = [];
		    for(var i = 0, l = arr.length; i < l; ++i){
		        if(!u.hasOwnProperty(arr[i])) {
		            a.push(arr[i]);
		            u[arr[i]] = 1;
		        }
		    }
	    return a;
	}
	nameArr = unique(nameArr);
	var peep = document.getElementById("peeps");
	peep.innerHTML = "";
	for(var i = 0;i < nameArr.length; i+=1){
		//console.log(nameArr[i]);
		peep.innerHTML +=  nameArr[i] + ", " ;
	}
	//return(nameArr);
}

var getKeys = function(){
	var tex = RiTa.stripPunctuation(document.getElementById("ustory").textContent);
	var wds = RiTa.tokenize(tex);
	var keyArr = [];
	for (var i=0;i<wds.length;i+=1){
		if(lex.containsWord(wds[i])){
			if(lex.isNoun(wds[i])){
				var flag = true;
				for( var j=0;j<passwords.length;j+=1){
					if (wds[i].toUpperCase() == passwords[j].toUpperCase()){
						flag = false;
					}
				}
				if (flag){
					keyArr.push(wds[i]);
				}
			}
		}
	}
	for(var i=0;i<keyArr.length;i+=1){
		keyArr[i] = [keyArr[i], matchAll(tex.toString().toUpperCase(tex), keyArr[i].toUpperCase()).length];
	}
	keyArr = keyArr.sort(function(a, b){
			return (b[1]-a[1])
	});
	
	function unique(arr) {
    var u = {}, a = [];
	    for(var i = 0, l = arr.length; i < l; ++i){
	        if(!u.hasOwnProperty(arr[i])) {
	            a.push(arr[i]);
	            u[arr[i]] = 1;
	        }
	    }
	    return a;
	}

	keyDist = unique(keyArr);
	// console.log(keyDist);
	document.getElementById("keyws").innerHTML = "";

	for(var i=0;i<5;i+=1){
		if(i < keyDist.length){
			// var wbut = document.createElement("div");
			// wbut.setAttribute("class","wbut");
			// wbut.innerHTML = keyDist[i][0]
			// document.getElementById("keyws").appendChild(wbut);
			document.getElementById("keyws").innerHTML += keyDist[i][0] + ", ";
		}
		// console.log(keyArr[i][0]);
		// console.log(keyArr[i][1]);
	}

	// console.log(keyArr);
}

var getRelated = function(wd){
	var url = "http://api.wordnik.com:80/v4/word.json/" + wd + "/relatedWords?useCanonical=true&relationshipTypes=same-context&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
	loadJSON(url, addSuggest);
}

var addSuggest = function(x){
	// Add x to top bar(suggestion bar)
}

var getSyn = function(wd){
	document.getElementById("syntitle").innerHTML = wd;
	var url = "http://api.wordnik.com:80/v4/word.json/" + wd + "/relatedWords?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
	loadJSON(url, showSyno);
}

var showSyno = function(x){
	var synlist = (x[0]["words"]);
	document.getElementById("syno").innerHTML = synlist.join(", ");
}

var randSent = function(){
	if(parseInt(document.getElementById("wc").innerHTML) > 20){
		var rm = new RiMarkov(2);
		rm.loadText(document.getElementById("ustory").textContent);
		var newsent = rm.generateSentences(1)//.join(" ");
		document.getElementById("randSent").innerHTML = newsent;
		console.log(newsent);
	}
}


var getWordCount = function(){
	var tex = document.getElementById("ustory").textContent;
	tex = RiTa.stripPunctuation(tex);
	tex = RiTa.tokenize(tex);
	document.getElementById("wc").innerHTML = "" + tex.length;

}


var addDef = function(x){
	x.preventDefault();
	document.getElementById("syno").innerHTML = "";
	var sel = window.getSelection().toString();
	if(sel){
		getSyn(sel);
	}
}



var rot = 0;
var xoff = 0;
function setup(){
	createCanvas(windowWidth, 300);
	background(255);
	// frameRate(1);
}
function draw(){
	colorMode(RGB);
	var otheroff = document.getElementById("ustory").innerHTML.length;
	xoff2 = xoff;
	fill(0,255,255);
	colorMode(HSB);
	rect(0,0,width,height);
	fill(50,100,125);
	
	translate(width/2,height/1.4);
	rotate(rot);
	ellipse(100,0,70,70);
	rotate(-rot);
	translate(-width/2,-height/1.4)
	rot+=0.01;
	fill(0,0);
	stroke(0);
	noStroke();
	// rect(0,0,width,height);	
	beginShape();
	fill(col);
	vertex(0,height);
	for(var x = 0;x < width;x+=5 ){
		var y = 100*noise(otheroff/12 + (x/130));
		vertex(x,y+200);
		xoff+=0.05;
	}
	vertex(width, height);
	endShape();
	xoff = xoff2 + 0.01;
}


var bolo = function(){
	var tex = document.getElementById("ustory").textContent;
	responsiveVoice.speak(tex, "UK English Male");
}

var glob = 4;

var changeCol = function(){
	if(! (glob == 1 || glob == 5)){
		col = [255/glob,100,125];
		switch(glob){
			case 1:document.body.style.backgroundColor = "rgb(50,100,100)";break;
			case 2:document.body.style.backgroundColor = "rgb(50,100,100)";break;
			case 3:document.body.style.backgroundColor = "rgb(50,200,100)";break;
			case 4:document.body.style.backgroundColor = "rgb(200,200,90)";break;
			case 5:document.body.style.backgroundColor = "rgb(50,100,100)";break;
		}
	}
	if (glob == 5){
		col = [0,100,125];
		document.body.style.backgroundColor = "rgb(200,30,30)";
	}
	if (glob == 2){
		col = [280,100,125];
		document.body.style.backgroundColor = "rgb(170,30,170)";
	}
	if (glob == 1){
		col = [190,100,80];
		document.body.style.backgroundColor = "#08b";
	}
}

var saveAsTXT = function () {
	var data = document.getElementById("ustory").value;
    var type = "text/plain";
    var filename = "yarn.txt";
    var a = document.createElement("a"),
        file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

var copyToClip = function(){
	var dv=document.getElementById("ustory").textContent;
	ta=document.createElement("textarea");
	ta.innerHTML=dv;
	ta.select();
	console.log(ta.innerHTML);
	// var cpd = document.getElementById("ustory");
	// cpd.select();
	document.execCommand('copy');
	window.location.href = "https://www.wattpad.com/?nexturl=/myworks";
}