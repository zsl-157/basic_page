function getAttr(){
	
}

function setAttr(attrName){
	
}
/**
 * 
 * 
 * @param element 待生成的元素名称
 * @param number 生成的元素数量
 * @parame parent 生成的元素待插入的父元素节点
 */ 
function createEle(element,number,parent){
	let elementArr = [];
	if(element != ''){
		if(number <= 1){
			let ele = document.createElement(element);
			parent.appendChild(ele);
		}
		else{
			for(let i=0;i<number;i++){
				let ele = document.createElement(element);
				if(parent != ''){
					parent.appendChild(ele);
				}
				else{
					elementArr.push(ele);
					return elementArr;
				}
			}
		}
		
	}
}
