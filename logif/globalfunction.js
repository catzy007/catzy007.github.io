//fungsi ini berguna untuk mendapatkan 'P' pada 'premis input' yang dipisahkan oleh 'key'
function globalGetP(premis, key){
	var mark=0; var startStr=0; var endStr=premis.length;

	for(var i=0; i<premis.length; i++){
		for(var j=0; j<key.length; j++){
			if(premis.charAt(i+j) == key.charAt(j)){
				//console.log(premis.charAt(i+j) + ' ' + key.charAt(j) + ' ' + mark + ' ' + key.length);
				mark++;
			}else{
				mark=0;
				break;
			}
			if(mark == key.length){
				endStr = i;
			}
		}
	}
	return premis.slice(startStr, endStr);
}

//fungsi ini berguna untuk mendapatkan 'Q' pada 'premis input' yang dipisahkan oleh 'key'
function globalGetQ(premis, key){
	var mark=0; var startStr=0; var endStr=premis.length;

	for(var i=0; i<premis.length; i++){
		for(var j=0; j<key.length; j++){
			if(premis.charAt(i+j) == key.charAt(j)){
				//console.log(premis.charAt(i+j) + ' ' + key.charAt(j) + ' ' + mark + ' ' + key.length);
				mark++;
			}else{
				mark=0;
				break;
			}
			if(mark == key.length){
				startStr = i + key.length;
			}
		}
	}
	return premis.slice(startStr, endStr);
}

//fungsi ini berguna untuk menentukan apakah 'key' ada dalam 'premis input'
//jika ada maka 'return true' jika tidak ada maka 'return false'
function globalValidator(premis, key){
	var mark=0;
	
	for(var i=0; i<premis.length; i++){
		for(var j=0; j<key.length; j++){
			if(premis.charAt(i+j) == key.charAt(j)){
				mark++;
			}else{
				mark=0;
				break;
			}
			if(mark == key.length){
				return true;
			}
		}
	}
	return false;
}

//fungsi ini berguna untuk menghapus 'key' pada 'premis input'
function globalRemover(premis, key){
	var mark=0; var startStr=0; var endStr=premis.length;
	var result;
	
	for(var i=0; i<premis.length; i++){
		for(var j=0; j<key.length; j++){
			if(premis.charAt(i+j) == key.charAt(j)){
				//console.log(strQ.charAt(i+j) + ' ' + key1.charAt(j) + ' ' + mark + ' ' + key1.length);
				mark++;
			}else{
				mark=0;
				break;
			}
			if(mark == key.length){
				endStr=i;
			}
		}
	}
	result = premis.slice(0, endStr);
	return result + premis.slice(endStr + key.length, premis.length);
}
