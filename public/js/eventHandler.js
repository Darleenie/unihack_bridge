'use strict';
// var data;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// $('#add').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
	var count = 0;
	$("#webcam-record-button img").click(checkClick);

	// $("#upload #check").click(finishRecord);
	$(".box").click(addFilter);

	$("#voicerecorder .voiceRecorderBtn").click(checkRecorderClick);
	$("#check1").click(addVoice);

	$(".delete-icon").click(opendeleteAlert);
	$(".download-icon").click(downloadDiary);


	$("#logout").click(openlogoutAlert);


}

function  openlogoutAlert(){
	document.getElementById("overlay-alert").style.display = "block";
	$("#cancel-button").click(off);
	$("#yes-button").click(logout);

}

function logout(){
	window.location.href = "/"

}




/*manage page delete icons  - delete diary*/

function opendeleteAlert(){
	document.getElementById("overlay-alert").style.display = "block";
	$("#cancel-button").click(off);
	$("#yes-button").click(deleteDiary);
	

}

function off() {
	document.getElementById("overlay-alert").style.display = "none";
}

function deleteDiary(){
	document.getElementById("overlay-alert").style.display = "none";
	var diaryID = $(this).closest(".each-diary").attr("id");
	console.log("id is " + diaryID);
	console.log(this);
	// var diaryToD = document.getElementById("diaryID");
	// console.log("delete" + diaryToD);
	$("#" + diaryID).remove();
	console.log("now id is" + diaryID);

}


/*click download button - download diary */


function downloadDiary(){

	
	var diaryID = $(this).closest(".each-diary").attr("id");
	console.log("id is " + diaryID);
	$("div #" + diaryID).append("<img src='/images/downloading.gif'>")

	$("div #" + diaryID + " .download-icon").attr("src", "");
	//document.getElementsByClassName("div #" + diaryID + " .download-icon").attr
	
}





/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

/* open filter */
function openFilter() {
	document.getElementById("myFilter").style.width = "400px";
	document.getElementById("myFilter").style.height = "150x";
}

/* close filter */
function closeFilter() {
	document.getElementById("myFilter").style.width = "0px";
}

/* apply filter */
function applyFilter(type) {
	var videoColor = jQuery('#videoFilter').css("background-color");
	var audioColor = jQuery('#audioFilter').css("background-color");
	
	if (type == "video") {
		if (videoColor == "rgb(243, 240, 231)") {
			document.getElementById("videoFilter").style.backgroundColor = "";
			document.getElementById("videoFilter-text").style.color = "#F3F0E7";
			var index = data.type.find(type => type === "video");
			if (index !=-1){
				data.type.splice(index,1);
			}
		}else{
			document.getElementById("videoFilter").style.backgroundColor = "#F3F0E7";
			document.getElementById("videoFilter-text").style.color = "#554E3B";
			var index = data.type.find(type => type === "video");
			if (index ==-1){
				data.type.splice(0,1,"video");
			}
		}
	} else {
		if (audioColor == "rgb(243, 240, 231)") {
			document.getElementById("audioFilter").style.backgroundColor = "";
			document.getElementById("audioFilter-text").style.color = "#F3F0E7";
			var index = data.type.find(type => type === "audio");
			if (index !=-1){
				data.type.splice(index,1);
			}
		}else{
			document.getElementById("audioFilter").style.backgroundColor = "#F3F0E7";
			document.getElementById("audioFilter-text").style.color = "#554E3B";
			var index = data.type.find(type => type === "audio");
			if (index ==-1){
				data.type.splice(0,1,"audio");
			}
		}
	}
}

/* check for webcam */ 
function checkClick(){

	var imgID = $(this).attr('id') //
	console.log("now is " + imgID);

	if (imgID == "record1") {
		$(this).attr("src", "/images/r2.png");
		$(this).attr("id", "record2");
		document.getElementById("check").style.opacity = "0";
	}
	else {
		document.getElementById("check").style.opacity = "1";
		$(this).attr("src", "/images/r1.png");
		$(this).attr("id", "record1");
	}
}

/* webcam - click to open filter sections(finish recording)*/

// function finishRecord() {
// 	document.getElementById("overlay").style.display = "block";
// 	$("#webcam-record-button img").attr("src", "/images/play.png");
// 	document.getElementById("check").style.opacity = "0"
// }

function addFilter() {
	document.getElementById("check").style.opacity = "1";
	// $("a#upload").attr('href', '/add');

	var filterID = $(this).closest("div").attr("id");
	document.getElementById(filterID).style.background = "#BB889F";
	if(filterID == "box1"){
		document.getElementById("box2").style.background = "gray";
		document.getElementById("box3").style.background = "gray";
		$("#video-img-editing").css({"filter": "none"
		});
	}
	if(filterID == "box2"){
		document.getElementById("box1").style.background = "gray";
		document.getElementById("box3").style.background = "gray";
		$("#video-img-editing").css({"filter": "contrast(150%)"
		});

	}
	if(filterID == "box3"){
		document.getElementById("box1").style.background = "gray";
		document.getElementById("box2").style.background = "gray";
		$("#video-img-editing").css({"filter": "saturate(2)"
		});
	}
}





/* voice recorder */

function checkRecorderClick() {

	var imgID = $(this).attr('id')
	console.log("now is " + imgID + ". It is recording voice now.");

	if (imgID == "recordvoice1") {
		$(this).attr("src", "/images/r2.png");
		$(this).attr("id", "recordvoice2");
		$("#waveform").attr("src", "/images/recordvoice_active.gif");
		document.getElementById("check1").style.opacity = "0";
	}
	else {
		document.getElementById("check1").style.opacity = "1";
		$(this).attr("src", "/images/r1.png");
		$(this).attr("id", "recordvoice1");
		$("#waveform").attr("src", "/images/recordvoice_default.png");
	}
}

function addVoice() {
	document.getElementById("check1").style.opacity = "1";
	$("a#uploadVoice").attr('href', '/addvoice');
}


	// $("div #" + diaryID).append("<img src='/images/downloading.png'>")


// function deleteVideo() {
// 	$("#delete").attr("href", "/deleteV");

// }



/* Login */

// $(      //?????????????????????
$("#ajaxForm").on("submit", function () {    //?????????????????????????????????
	$(this).ajaxSubmit(options);    //?????????????????????????????????optons ?????????????????????????????????????????????
	return false;   //  ????????????false??????????????????????????????
})
// )
//?????? options ??????
var options = {
	url: "/index",       //????????????????????????form???action,????????????,????????????
	type: "get",           //?????????form???method???get or post?????????????????????????????????
	success: successFun,    //????????????????????????????????????????????????????????????????????????
	dataType: "json",       //??????????????????????????????
	clearForm: true,        //????????????????????????????????????????????????
	resetForm: true,        //????????????????????????????????????????????????
	timeout: 3000           //?????????????????????????????????????????????????????????????????????(??????)
}
//????????????????????????????????????
function successFun(data, status) {
	$("index").html(data.msg);     //????????????????????????????????????????????????????????????????????????msg???
	// $("#showForm").html("????????????????????????????????????????????????")
}

/* World Track */
var map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: new google.maps.LatLng(33.359371, -117.549959),
		zoom: 7
	});
	const iconBase = "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
	var icons = {
		// parking: {
		// 	icon: "/images/map_pin/bts.png",
		// },
		// library: {
		//   icon: "/images/map_pin/mamamoo.png",
		// },
		// info: {
		// 	icon: iconBase + "info-i_maps.png",
		// },
		centerhall: {
			icon: "/images/map_pin/centerhall.png",
		},
		bts: {
			icon: "/images/map_pin/bts.png",
		},
		mamamoo: {
			icon: "/images/map_pin/mamamoo.png",
		},
		feb10: {
			icon: "/images/map_pin/feb10.png",
		},
		navy: {
			icon: "/images/map_pin/navy.png",
		},
		linefriends: {
			icon: "/images/map_pin/linefriends.png",
		}
	};

	const features = [
		{
			position: new google.maps.LatLng(32.878045, -117.237230),
			type: "centerhall",
		},
		{
			position: new google.maps.LatLng(33.684662, -117.818688),
			type: "bts",
		},
		{
			position: new google.maps.LatLng(34.026790, -118.394714),
			type: "mamamoo",
		},
		{
			position: new google.maps.LatLng(32.910866, -117.058875),
			type: "feb10",
		},
		{
			position: new google.maps.LatLng(32.672369, -117.161400),
			type: "navy",
		},
		{
			position: new google.maps.LatLng(34.101301, -118.331541),
			type: "linefriends",
		}
		
	];

	// Create markers.
	for (let i = 0; i < features.length; i++) {
		const marker = new google.maps.Marker({
			position: features[i].position,
			icon: icons[features[i].type].icon,
			map: map,
		});
	}
}

/* End World Track */