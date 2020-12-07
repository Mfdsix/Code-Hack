function orderBy(datas, field, dir = "ASC"){

	if(dir == "ASC"){
		datas.sort((a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
	}else{
		datas.sort((a,b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0));
	}

	return datas;
}

function isEqual(datas, field, value){
	var newDatas = [];

	datas.forEach((v,i) => {
		if(v[field] == value){
			newDatas.push(v);
		}
	});

	return newDatas;
}

function isNotEqual(datas, field, value){
	var newDatas = [];

	datas.forEach((v,i) => {
		if(v[field] != value){
			newDatas.push(v);
		}
	});

	return newDatas;
}