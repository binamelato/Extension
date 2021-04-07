document.onreadystatechange = function(){
if(document.readyState === 'complete'){
	var urlt = document.location.href, cult = urlt.substring(0,54), bult = urlt.substring(0,51), dult = urlt.substring(0,41), lult = urlt.substring(0,23), flt = urlt.substring(0,69), piolt = urlt.substring(0,63), wiol = urlt.substring(0,78);
	
	if(lult == 'https://my2.bookvoed.ru'){// Добавление ссылок на реестры в шапку
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[0];
			if(par == 1){
			var punkt = document.querySelector("#navigator");
			if(punkt){
				fikl = punkt.firstChild;
				fikl.insertAdjacentHTML("beforeEnd", "<a id='bilsd' style='display:inline-block;line-height:2;padding:0 .5em;margin:0 1px 1px 0;font-weight:600;' href='https://my2.bookvoed.ru/shop/delivery/registries/sendings?status=4871'>Реестры Отгрузки</a><a id='bilsk' style='display:inline-block;line-height:2;padding:0 .5em;margin:0 1px 1px 0;font-weight:600;' href='https://my2.bookvoed.ru/shop/delivery/registries/sendings?status=4871&is_ems=1'>Реестры EMS</a>");
			}
			}
		}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/sheet/print?sheet='){/* Печать накладных для сборщиков */
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[1];
			if(par == 1){
		var poza = document.querySelectorAll('h3'), telt = [];
			for (var i =0, otch3=poza.length; i< otch3; i++){
				nomb = poza[i];
				gray = nomb.innerText;
				telt.push(gray);
				itog = telt.join('.');
			}
		var ordersList = itog;
		buttin = document.querySelectorAll('button');
		for (var i =0, otch03=buttin.length; i< otch03; i++){
				brbut = buttin[i];
				brbut.setAttribute('style', 'padding:5px 10px;border:#777777 solid 1px;border-radius:3px;background-color:#ffffff;cursor:pointer;box-sizing:border-box;');
			}
		document.body.innerHTML = document.body.innerHTML.replace('Вернуться</button>', '<span>Вернуться</span></button><a href="https://my2.bookvoed.ru/shop/logist/packing/prepare/print?orders='+ordersList+'&backlink=https%3A%2F%2Fmy2.bookvoed.ru%2Fshop%2Flogist%2Fsheets" style="margin-left:10px;"><button style="color:#ffffff;padding:5px 10px;border:#754a4a solid 1px;border-radius:3px;background-color:#754a4a;cursor:pointer;box-sizing:border-box;">Сборочник</button></a>');
			}
		}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/sheet?delivery=440'){// Таймер автообновления для сборки
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[2];
			if(par == 1){
		boer = document.querySelector('#content');//body
			boer.insertAdjacentHTML("afterbegin", "<div id='ngeer'><div style='width:200px;height:70px;'><select id='pitik' style='padding:.3em .5em;font-size:14px;font-stretch:expanded;width:200px;color:#929292;border:1px solid #929292;'><option value='5' selected=''>5 сек.</option><option value='10'>10 сек.</option><option value='30'>30 сек.</option><option value='45'>45 сек.</option><option value='60'>1 мин.</option></select><input id='sufil' type='button' value='Запустить / Остановить таймер' style='width: 200px;color:#ffffff;padding:10px 5px;display:block;margin:3px 0px;border:#7609d0 solid 1px;border-radius:3px;background-color:#7609d0;cursor:pointer;box-sizing:border-box;margin-right:0px;position: absolute;text-align:center;'></div></div>");
			buner = document.querySelector('#sufil'), cleart = document.querySelector('.cleart'), pomag = document.querySelector('#pomag'), vakol = document.querySelector('#vakol'), mikk = document.querySelector('#pitik'), binf = 0, tikk = 0;
			mikk.addEventListener("change", function(){
				tikk = this.value*1000;
			});
			buner.addEventListener("click", function(){
				console.log(tikk);
				if(binf == 0){
					binf = binf + 1;
					timdu = setInterval(() => elemUpdate('div#form-table'), tikk);
					console.log('timer vkl');
					console.log(tikk);
				}else{
					binf = binf - 1;
					clearInterval(timdu);
					console.log('timer vikl');
				}
			});
		}
		}
	});		
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/return?type=reject'){/* Чистка полок [Отказы] */
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[3];
			if(par == 1){
		tData();
		var ftl = document.body.innerHTML;
		document.body.innerHTML = document.body.innerHTML.replace('<h2>Возвраты <a href="javascript:print()">распечатать</a></h2>', '<h2>Возвраты <a href="javascript:print()">распечатать</a></h2><input type="submit" class="killkiller" value="Заполнить" style="width:100px;color: #ffffff;padding: 10px 5px;display: block;margin:7px 0px;border:#484848 solid 1px;border-radius:3px;background-color: #000000;cursor:pointer;box-sizing:border-box;text-;margin-right: 20px;position: absolute;right: 20px;"><a id="statz" style="width:90px;color:#ffffff;padding:10px 5px;display:block;margin:7px 0px;border:#7609d0 solid 1px;border-radius:3px;background-color:#7609d0;cursor:pointer;box-sizing:border-box;margin-right:0px;position: absolute;right:150px;text-align:center;">Save Stats</a>');
		vkla = document.querySelector(".killkiller");
		vkla.addEventListener("click", function(){
			bish = document.querySelectorAll('input[id^="form-table-table_amount_"]');
			for (var i =0, otch4=bish.length; i< otch4; i++){
				gog = bish[i];
				gog.value = 1;
			}
		});
		var sgik = 0, stll = document.querySelector("#statz");
		stll.addEventListener("click", function(){
			bishd = document.querySelectorAll('input[id^="form-table-table_amount_"]');
			for (var i =0, otcp=bishd.length; i< otcp; i++){
				sos = bishd[i];
				var bisk = Number(sos.value);
				if(bisk >= 1){
					sgik = sgik+bisk;
				}
			}
			var kkj = sgik;
			mydata = 'data:application/txt;charset=utf-8,'+encodeURIComponent(kkj);
			this.href = mydata;
			this.download = foday+'.txt';
			sgik = 0;
		})
		}
		}
	});
	}
	if(dult == 'https://my2.bookvoed.ru/shop/search/diffs'){/* Создание Актов ИМ - СРХ */
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[4];
			if(par == 1){
		var gogo = document.querySelector('#form-from-input'), gege = document.querySelector('#form-to-input'), sklad = document.querySelector('#form-shop-input'), cheak = document.querySelector('#form-excel'), bodyt = document.querySelector('body');
			bodyt.insertAdjacentHTML("afterbegin", "<div id='ngen' style='display:none;position:fixed;width:100%;height:100%;z-index:99;'><div style='position:fixed;background-color:#fff;opacity:0.79;width:100%;height:100%;'></div><div style='position:relative;margin:auto;width:900px;height:550px;background-color:#fff;border:2px solid #b1b1b1;margin-top:70px;border-radius:10px;'><div><a style='width:20px;height:20px;font-size:20px;color:#a2a2a2;border: 3px solid #b1b1b1;right:-16px;position:absolute;top:-16px;background:#fff;border-radius:15px;padding:3px;text-align:center;font-family:sans-serif;' href=''>X</a></div><div style='height:480px;width:880px;margin:20px 10px 10px 10px;overflow-y:auto;' id='dracon'></div><div style='right:25px;position:absolute;bottom:5px'><input type='button' class='dedel' value='Подготовить' style='background:#ce466c;border:1px solid #ce466c;padding:5px;color:#ffffff;margin-right:3px;'><input type='button' class='sedel' value='Сохранить' style='background:#47b1b1;border:1px solid #47b1b1;padding:5px;color:#ffffff;'></div></div></div>");
		tData();
		gogo.value = today, gege.value = today, sklad.value = 83;
		binv = document.querySelector('#form-submit-input');
		niuy = binv.parentElement;
		niuy.insertAdjacentHTML("beforeEnd", "<input type='button' class='viex2' value='Ускорение' >");
		bunni = document.querySelector('.viex2');
		bunni.addEventListener("click", function(){
			forts = document.querySelector('#ngen');
			forts.style.display = 'block';
			tabe = document.querySelector('table').innerHTML;
			document.querySelector('#dracon').insertAdjacentHTML("beforeEnd", "<table style='font-size:9px;' border='1'>"+tabe+"</table>");
			stoka = document.querySelectorAll('tr');
			for (var i =0, pedos=stoka.length; i< pedos; i++){
				koki = stoka[i];
				koki.classList.add('str'+i);
				stolt = koki.querySelectorAll('tr.str'+i+' th');
					for (var k =0, letos=stolt.length; k< letos; k++){
						loti = stolt[k];
						loti.classList.add(i+'stb'+k);
					}
				stolb = koki.querySelectorAll('tr.str'+i+' td');
					for (var j =0, ledos=stolb.length; j< ledos; j++){
						loki = stolb[j];
						loki.classList.add(i+'stb'+j);
					}
			}
		});
		todel = document.querySelector('.dedel');
		todel.addEventListener("click", function(){
			daron = document.querySelector('#dracon');
			stoka = daron.querySelectorAll('tr');
			for (var i =0, pedos=stoka.length; i< pedos; i++){
				koki = stoka[i];
				stolt = koki.querySelectorAll('tr.str'+i+' th');
					for (var k =0, letos=stolt.length; k< letos; k++){
						loti = stolt[k];
						lotas = loti.getAttribute('class');
						if(lotas == i+'stb0'){loti.remove();
						}if(lotas == i+'stb1'){loti.remove();
						}if(lotas == i+'stb4'){loti.remove();
						}if(lotas == i+'stb5'){loti.remove();
						}if(lotas == i+'stb10'){loti.remove();
						}if(lotas == i+'stb11'){loti.remove();
						}if(lotas == i+'stb2'){bsz = loti.innerHTML;loti.remove();
						}if(lotas == i+'stb8'){loti.insertAdjacentHTML("afterEnd", '<th>'+bsz+'</th>');
						}if(lotas == i+'stb9'){
							bju = loti.innerText;
							if(bju != '1'){
								if(bju != 'Кол-во брак'){
								loti.parentElement.remove();
								}
							}
						}
					}
				stolb = koki.querySelectorAll('tr.str'+i+' td');
					for (var j =0, ledos=stolb.length; j< ledos; j++){
						loki = stolb[j];
						locas = loki.getAttribute('class');
						if(locas == i+'stb0'){loki.remove();
						}if(locas == i+'stb1'){loki.remove();
						}if(locas == i+'stb4'){loki.remove();
						}if(locas == i+'stb5'){loki.remove();
						}if(locas == i+'stb10'){loki.remove();
						}if(locas == i+'stb11'){loki.remove();
						}if(locas == i+'stb2'){bsx = loki.innerHTML;loki.remove();
						}if(locas == i+'stb8'){loki.insertAdjacentHTML("afterEnd", '<td>'+bsx+'</td>');
						}if(locas == i+'stb9'){
							bju = loki.innerText;
							if(bju == '0'){
								loki.parentElement.remove();
							}
						}
					}
			}
			table = daron.querySelector('table');
			sortedRows = Array.from(table.rows).slice(1).sort((rowA,rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
			table.tBodies[0].append(...sortedRows);
		});
		tosav = document.querySelector('.sedel');
		tosav.addEventListener("click", function(){
			var ttx = document.querySelector('#dracon').innerHTML;
			download(ttx, goday+'.xls');
		});
		}
		}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/receive/pod?sendin'){// Приемка POD
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[5];
			if(par == 1){
		sipa = document.querySelector('#form-employee-input');
		sipa.value = 13553;
		sbutton = document.querySelectorAll("button");
		chrome.storage.sync.get(['miniv'], function(items){
			kaker=items.miniv;
			if(Array.isArray(kaker)){
				console.log('Массив существует');
			maner=kaker;
			Array.from(sbutton, el => el.addEventListener('click', e => {
			banch = e.target;
			voxv = banch.parentElement.parentElement.parentElement.parentElement;
			voxl = voxv.querySelector('td:nth-child(9)').innerHTML;
			if(voxl == 'К упаковке<br>самовывоз'){
				gogo = voxv.querySelector('td:nth-child(3)').innerText;
				maner.push(gogo);
			}
			//console.log(maner);
			bjkil = maner.filter((val, i, ar) => ar.indexOf(val) === i);
			chrome.storage.sync.set({'miniv':bjkil});
			}));
			}else{
				console.log('Массив не существует');
			kaker = [];
			maner=kaker;//.split(' ');
			Array.from(sbutton, el => el.addEventListener('click', e => {
			banch = e.target;
			voxv = banch.parentElement.parentElement.parentElement.parentElement;
			voxl = voxv.querySelector('td:nth-child(9)').innerHTML;
			if(voxl == 'К упаковке<br>самовывоз'){
				gogo = voxv.querySelector('td:nth-child(3)').innerText;
				maner.push(gogo);
			}
			//console.log(maner);
			bjkil = maner.filter((val, i, ar) => ar.indexOf(val) === i);
			chrome.storage.sync.set({'miniv':bjkil});
			}));
			}
		});
		}
		}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/confirmAndPack?del'){// Быстрое закрытие единичек POD
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[5];
			if(par == 1){
		vafa = document.querySelector('h2');
		vafa.insertAdjacentHTML("beforeEnd", "<a id='clele' style='cursor:pointer;'>Очистить Хранилище</a>");
		var koss = [];
		chrome.storage.sync.get(['miniv'], function(items){
			if(items == undefined){
				console.log('в сторадже ничего не сохранено');
			}else{
				var maner = items.miniv;
				//console.log(maner);
				for(index = 0; index < maner.length; ++index){
					var urlx = document.querySelectorAll('a[href="https://www.bookvoed.ru/book?axid='+maner[index]+'"]');
					for(var i = 0; i < urlx.length; i++){
						var tr_str = urlx[i].parentElement.parentElement;
						var chi_str = tr_str.querySelector('td:nth-child(2)').innerText;
						jiuy = tr_str.querySelector('input[name="table_checkbox_'+chi_str+'"]');
						jiuy.checked = true;
						if(jiuy.checked){
							koss.push(chi_str);
						}
					}
				}
				boss = koss.filter((val, i, ar) => ar.indexOf(val) === i);
				late = boss.join('.');
				gigs = document.querySelector('input[name="queue_ids"]');
				if(gigs){
					gigs.value = late;
				}else{
					//console.log('Oshibok net');
				}
			}
		});
		vkla = document.querySelector("#clele");
		vkla.addEventListener("click", function(){
		colo = '';
		chrome.storage.sync.set({'miniv':colo});
			alert('Вы очистили хранилище данных.');
		});
		}
		}
	});
	}
	if(flt == 'https://my2.bookvoed.ru/shop/logist/send/orders/selfdelivery?type=spb'){//Подсчет для отгрузки Магазы
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[6];
			if(par == 1){
	moki = [];
		voxl = document.querySelectorAll('tr > td:last-child');
		for (var i =0, pedos=voxl.length; i< pedos; i++){
			koki = voxl[i];
			moki.push(koki.innerText);
		}
		Array.from(document.querySelectorAll('tr > td:last-child'))
		.filter((n, i, a) => n.innerText !== a[i - 1]?.innerText)
		.forEach(n => n.innerHTML = `<a class="bon4" style="cursor:pointer;font-weight:bold;">${n.innerText}</a>`);
		var stll = document.querySelectorAll(".bon4");
		for (var i =0, pedos=stll.length; i< pedos; i++){
			koki = stll[i];
			koki.addEventListener("click", function(){
				var result = moki.reduce(function(acc, el){acc[el] = (acc[el] || 0) + 1;return acc;}, []);
				alert(result[this.innerText]);
			});
		}
		}
		}
	});
	}
	if(flt == 'https://my2.bookvoed.ru/shop/logist/send/orders/selfdelivery?type=reg'){//Подсчет для отгрузки Регионы
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[6];
			if(par == 1){
		moki = [];
		voxl = document.querySelectorAll('tr > td:last-child');
		for (var i =0, pedos=voxl.length; i< pedos; i++){
			koki = voxl[i];
			moki.push(koki.innerText);
		}
		Array.from(document.querySelectorAll('tr > td:last-child'))
		.filter((n, i, a) => n.innerText !== a[i - 1]?.innerText)
		.forEach(n => n.innerHTML = `<a class="bon4" style="cursor:pointer;font-weight:bold;">${n.innerText}</a>`);
		var stll = document.querySelectorAll(".bon4");
		for (var i =0, pedos=stll.length; i< pedos; i++){
			koki = stll[i];
			koki.addEventListener("click", function(){
				var result = moki.reduce(function(acc, el){acc[el] = (acc[el] || 0) + 1;return acc;}, []);
				alert(result[this.innerText]);
			});
		}
		}
		}
	});
	}
	if(wiol == 'https://my2.bookvoed.ru/shop/delivery/orders/sendings?delivery=440&status=4869'){// Отгрузка Реестры EMS
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[7];
			if(par == 1){
		boer = document.querySelector('body'), contik = document.querySelector('#content a:nth-child(6)');
		boer.insertAdjacentHTML("afterbegin", "<div id='ngeer' style='display:none;position:fixed;width:100%;height:100%;z-index:99;'><div style='position:fixed;background-color:#fff;opacity:0.79;width:100%;height:100%;'></div><div style='position:relative;margin:auto;width:400px;min-height:200px;max-height:480px;background-color:#fff;border:2px solid #b1b1b1;margin-top:100px;border-radius:10px;'><div style='max-height:420px;width:380px;margin:20px 10px 10px 10px;font-family:cursive;overflow-y:auto;'><div>Отмеченные магазины:</div><div id='emsya'></div></div><div style='right:25px;position:absolute;bottom:5px'><input type='button' class='daems' value='На печать' style='background:#47b1b1;border:1px solid #47b1b1;padding:5px;color:#ffffff;margin-right:5px;outline:none;'><input type='button' class='neems' value='Добавить / Изменить' style='background:#ce466c;border:1px solid #ce466c;padding:5px;color:#ffffff;margin-right:3px;outline:none;'></div></div></div>");
		contik.insertAdjacentHTML("afterEnd", "<a id='totax' style='margin:10px;font-weight:bold;cursor:pointer;color:#ff0909;font-size:12pt;'>EMS Now!</a>");
		tData();
		drad = [
		['0'],
		['РМ КК 169 Калининград','РМ КМ 147 Котлас','РМ КМ 148 Сыктывкар','РМ КМ 151 Коряжма','РМ КМ 164 Калининград','РМ КМ 167 Северодвинск','РМ КМ 170 Калининград','РМ КМ 171 Северодвинск, Архангельское шоссе 120','РМ КМ 172 Псков, Труда 50','РМ КМ 178 Архангельск Советская 25','РМ КМ 179 Архангельск Розинга 10','РМ КМ 180 Луга Урицкого 77','РМ КМ 35 Псков, Рижский пр., 16','РМ КМ 36 Кингисепп, ул.Октябрьская, 9','РМ КМ 54Великие Луки','РМ КМ 73 Североморск, ул. Флотских Строителей, 1А','РМ КМ 81 Северодвинск','РМ КМ 82 Архангельск, Тимме, д.4,к.3','РМ КС 130 Псков, ул.Кузбасской Дивизии, 19','РМ КС 138 Сосновый Бор','РМ КС 141 Архангельск, Ленинградский, 38','РМ КС 149 Архангельск, Воскресенская, 20','РМ КС 31 Архангельск, ул. Поморская 9'],
		['РМ КК 169 Калининград','РМ КМ 128 Вологда, Советский, 12','РМ КМ 132 Череповец, пр.Октябрьский, 57','РМ КМ 133 Вологда, ул Горького 122   ТЦ Макси','РМ КМ 147 Котлас','РМ КМ 148 Сыктывкар','РМ КМ 151 Коряжма','РМ КМ 162 Череповец, Победы','РМ КМ 164 Калининград','РМ КМ 167 Северодвинск','РМ КМ 170 Калининград','РМ КМ 171 Северодвинск, Архангельское шоссе 120','РМ КМ 172 Псков, Труда 50','РМ КМ 178 Архангельск Советская 25','РМ КМ 179 Архангельск Розинга 10','РМ КМ 35 Псков, Рижский пр., 16','РМ КМ 36 Кингисепп, ул.Октябрьская, 9','РМ КМ 37 Череповец, Ленинградская','РМ КМ 43 Вологда, Ленинградская,100','РМ КМ 44 Череповец, Ленина 90','РМ КМ 54Великие Луки','РМ КМ 73 Североморск, ул. Флотских Строителей, 1А','РМ КМ 74 Вологда, Пошехонское','РМ КМ 81 Северодвинск','РМ КМ 82 Архангельск, Тимме, д.4,к.3','РМ КС 129 Череповец, пр.Победы, 200','РМ КС 130 Псков, ул.Кузбасской Дивизии, 19','РМ КС 138 Сосновый Бор','РМ КС 141 Архангельск, Ленинградский, 38','РМ КС 149 Архангельск, Воскресенская, 20','РМ КС 31 Архангельск, ул. Поморская 9','РМ КС 42 Вологда, Мира, 78'],
		['РМ КК 169 Калининград','РМ КМ 128 Вологда, Советский, 12','РМ КМ 132 Череповец, пр.Октябрьский, 57','РМ КМ 133 Вологда, ул Горького 122   ТЦ Макси','РМ КМ 162 Череповец, Победы','РМ КМ 164 Калининград','РМ КМ 170 Калининград','РМ КМ 37 Череповец, Ленинградская','РМ КМ 43 Вологда, Ленинградская,100','РМ КМ 44 Череповец, Ленина 90','РМ КМ 54Великие Луки','РМ КМ 74 Вологда, Пошехонское','РМ КС 129 Череповец, пр.Победы, 200','РМ КС 42 Вологда, Мира, 78'],
		['РМ КК 169 Калининград','РМ КМ 128 Вологда, Советский, 12','РМ КМ 132 Череповец, пр.Октябрьский, 57','РМ КМ 133 Вологда, ул Горького 122   ТЦ Макси','РМ КМ 162 Череповец, Победы','РМ КМ 164 Калининград','РМ КМ 170 Калининград','РМ КМ 37 Череповец, Ленинградская','РМ КМ 43 Вологда, Ленинградская,100','РМ КМ 44 Череповец, Ленина 90','РМ КМ 54Великие Луки','РМ КМ 74 Вологда, Пошехонское','РМ КС 129 Череповец, пр.Победы, 200','РМ КС 42 Вологда, Мира, 78'],
		['РМ КК 169 Калининград','РМ КМ 128 Вологда, Советский, 12','РМ КМ 132 Череповец, пр.Октябрьский, 57','РМ КМ 133 Вологда, ул Горького 122   ТЦ Макси','РМ КМ 162 Череповец, Победы','РМ КМ 164 Калининград','РМ КМ 167 Северодвинск','РМ КМ 170 Калининград','РМ КМ 171 Северодвинск, Архангельское шоссе 120','РМ КМ 178 Архангельск Советская 25','РМ КМ 179 Архангельск Розинга 10','РМ КМ 37 Череповец, Ленинградская','РМ КМ 43 Вологда, Ленинградская,100','РМ КМ 44 Череповец, Ленина 90','РМ КМ 54Великие Луки','РМ КМ 74 Вологда, Пошехонское','РМ КМ 81 Северодвинск','РМ КМ 82 Архангельск, Тимме, д.4,к.3','РМ КС 129 Череповец, пр.Победы, 200','РМ КС 141 Архангельск, Ленинградский, 38','РМ КС 149 Архангельск, Воскресенская, 20','РМ КС 31 Архангельск, ул. Поморская 9','РМ КС 42 Вологда, Мира, 78'],
		['0'],
		['0']
		];
		nms = document.querySelector('.neems'), dms = document.querySelector('.daems'), skat = document.querySelectorAll('td:nth-child(5)'), ettos = document.querySelector('#totax');
		ettos.addEventListener("click", function(){
		emsm = [];
		for (var i =0, mure=skat.length; i< mure; i++){
			doty = skat[i];
			mak = doty.innerText;
			kj = gaday;
			king = drad[kj];
			ott = king.indexOf(mak) > -1;
			if(ott == true){
				binart = doty.parentElement.firstChild;
				gai = binart.querySelector('input');
				gai.checked = true;
				emsm.push(mak);
			}
		}
		if(emsm == null){
			var emsm = ['Что сюда долбишься, тут ничего нет! Или уже все отгружено'];
			dms.style.display = 'none';
		}
		gesm = [...new Set(emsm)];
		htmn = '<ul>';
		gesm.forEach(function(item, i, arr){htmn += '<li>'+item+'</li>';});
		htmn += '</ul>';
		koki = document.querySelector('#ngeer');
		document.querySelector('#emsya').innerHTML = htmn;
		koki.style.display = 'block';
		});
		nms.addEventListener("click", function(){
			koki.style.display = 'none';
		});
		dms.addEventListener("click", function(){
			emsb = document.querySelector('#form-submit_ems-input');
			emsb.click();
		});
		}
		}
	});
	}
	if(piolt == 'https://my2.bookvoed.ru/shop/logist/send/orders/print?sending=5'){// Ссылки на заказы при печати накладной маршрута 
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[8];
			if(par == 1){
		voxl = document.querySelectorAll('tr > td:nth-child(2)');
		for (var i =0, pedos=voxl.length; i< pedos; i++){
			koki = voxl[i];
			koag = koki.innerText;
			koki.innerHTML = koki.innerHTML.replace(koag, '<a href="https://my2.bookvoed.ru/shop/order?id='+koag+'">'+koag+'</a>');
		}
		}
		}
	});
	}
	if(cult == 'https://my2.bookvoed.ru/shop/logist/packing/outpost?or'){//Быстрый переход после подтверждения логист заказа
	chrome.storage.sync.get(['setnag'], function(items){
		var maner = items.setnag;
			if(maner == undefined){
				console.log('Настройки пустые');
			}else{
			par = maner[9];
			if(par == 1){
		document.body.innerHTML = document.body.innerHTML.replace('<button onclick="history.back()">Вернуться назад</button>', '<a href="https://my2.bookvoed.ru/shop/logist/orders/confirmAndWeight?delivery=3160"><button>IML LOGISTIC</button></a>');
		}
		}
	});
	}
	
	function download(data, filename, type){
		var file = new Blob([data], {type:type});
		var a = document.createElement("a");
		url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
	}
	
	function tData(){
		data = new Date();
		var dd = data.getDate()-1, mm = data.getMonth()+1, yy = data.getFullYear(), fdd = data.getDate(), did = data.getDay();
		var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
		if(dd<1){
			mm = mm-1;
			m4et = [2,4,6,9,11,], mne4et = [1,3,5,7,8,10,12], mday = [31,28,31,30,31,30,31,31,30,31,30,31];
			dds = mday[mm];
			console.log('Error!');
		}else{
			if(dd<10){dd='0'+dd;}
			if(fdd<10){fdd='0'+fdd;}
		}
		if(mm<10){mm='0'+mm;}
		today = dd+'.'+mm+'.'+yy;
		foday = fdd+'.'+mm+'.'+yy;
		goday = yy+'.'+mm+'.'+fdd;
		gaday = did;
	}
	async function elemUpdate(selector){
		try{
			var html = await(await fetch(location.href)).text();
			var newdoc = new DOMParser().parseFromString(html, 'text/html');
			document.querySelector(selector).outerHTML = newdoc.querySelector(selector).outerHTML;
			console.log('Element'+selector+'updated successful');
			return true;
		}catch(err){
			console.log('Element'+selector+'NOT updated successful');
			console.log(err);
			return false;
		}
	}
}
}


