async function tryRequest(){

	const response = await fetch(URL, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: value,
		}),
	});
	const reader = response.body
	.pipeThrough(new TextDecoderStream())
	.getReader();

	while (true) {
		const { value, done } = await reader.read();

		try{
			console.log(value);
		}catch(e){
			console.log(e);
		}
		if (done) break;
	}
}