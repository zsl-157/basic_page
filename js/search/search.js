function includeScript(file) {
  document.write('<script type="text/javascript" src="'+file+'"></script>');
}

includeScript("../js/storage/storage.js");


function searchHistory(){
	let courseInputList = $('#courseSearchInp').children();
	let cousrseTextInput = courseInputList[0];
	let courseSubmitInput = courseInputList[1];
	let searchEntryList = [];
	console.log(cousrseTextInput);
	//搜索记录的次数
	let showSearchHistory = false;
	let textValue = cousrseTextInput.value;
	if(textValue != ''){

		
	}
	console.log(`textValue is ${textValue}`);
	searchEntryList.push(textValue);
	setStorage("history",searchEntryList);
	let stor = getStorage("history");
	console.log('stor is '+ typeof stor);
}


function clickTextInput(){
	$(".text_input").focus(function(){
		let courseInputList = $('#courseSearchInp').children()[0];
		let hist_storage = getStorage("name");
		let histTitle = $('.hist_title')[0];
		if(hist_storage){
			histTitle.style.display = 'block';
		}
		console.log(histTitle);
	});
	$('.text_input').blur(function(){
		let d = getStorage("name");
		let histTitle = $('.hist_title')[0];
		if(!d){
			histTitle.style.display = 'none';
		}
		console.log(histTitle)
	});
	
}
clickTextInput();
