	function doGet() {
		  return HtmlService.createHtmlOutputFromFile('index');
	  }
  
var tagCode = []
var translated = []
    function translateForMe(text, array){          
      for (var i = 0; i < array.length; i++) {   
       tagCode.push(array[i][0])
        translated.push(LanguageApp.translate(text, 'en', array[i][1]))           
       }  
  return [tagCode , translated];
    }
  