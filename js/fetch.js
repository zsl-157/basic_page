/*
 * 数据请求模块
 * auther:张石磊
 * time：2022-01-07
 */

function fetch(url,data,method="get"){
	return new Promise({
		const baseUrl = "127.0.0.1";
		if(data !== ""){
			let paramStr;
			Object.key(data).forEach((key)=>{
			paramStr += key + "=" + data[key] + "&";
			})
			if(paramStr){
				baseUrl += paramStr;
			}
		}
	})
	
	
}
