document.onreadystatechange = function(){
	if(document.readyState === 'complete'){
		vkl1 = document.querySelector(".bint1"), vkl2 = document.querySelector(".bint2"), dot1 = document.querySelector(".dot1"), dot2 = document.querySelector(".dot2"), setnas = document.querySelector("#setnas");
		
		chrome.storage.sync.get(['setnag'], function(items){
			if(items == undefined){
				console.log('Настройки пустые');
			}else{
				var maner = items.setnag;
				console.log(maner);
				for(index = 0; index < maner.length; ++index){
					gangis = maner[index];
					var urlx = document.querySelector('input[id="par'+index+'"]');
					if(gangis == 1){
						urlx.checked = true;
					}else{
						urlx.checked = false;
					}
				}
			}
		});
		setnas.addEventListener("click", function(){
			//colo = '';
			chrome.storage.sync.clear();//Прежде очищаем хранилище
			var koss = [];
			pund = document.querySelectorAll('input[type="checkbox"]');
			for (var i =0, pedos=pund.length; i< pedos; i++){
				koki = pund[i];
				if(koki.checked){
					koss.push('1');
				}else{
					koss.push('0');
				}
			}
			chrome.storage.sync.set({'setnag':koss});//Записываем в хранилище
			//console.log(koss);
			chrome.tabs.reload();
		});
		vkl1.addEventListener("click", function(){
			vkl1.classList.add('active');
			vkl2.classList.remove('active');
			dot1.classList.add('active');
			dot1.classList.remove('deactive');
			dot2.classList.add('deactive');
			dot2.classList.remove('active');
		});
		vkl2.addEventListener("click", function(){
			vkl2.classList.add('active');
			vkl1.classList.remove('active');
			dot1.classList.add('deactive');
			dot1.classList.remove('active');
			dot2.classList.add('active');
			dot2.classList.remove('deactive');
		});
	}
}