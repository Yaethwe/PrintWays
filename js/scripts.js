var links = {
	a604:"https://docs.google.com/spreadsheets/d/1xpKDKnEA4Zkodv9Pb22y_A82qW58qQRr0PM0WR_t3jw/edit?usp=sharing",
	a606:"https://docs.google.com/spreadsheets/d/1fwZTiIy5xzx2yhax19rd_yWfbobAUYhoPHz3hFmahWw/edit?usp=sharing",
	a607:"https://docs.google.com/spreadsheets/d/19ayAEMnHgwZc2VZeiD0-in-x3aR8hjVKdxLqVjjEm3A/edit?usp=sharing",
	a611:"https://docs.google.com/spreadsheets/d/1GYOiwUQLZAum9kvxiCUqPLTl4SMqVzeROK1OWDczIRE/edit?usp=sharing",
	o605:"https://docs.google.com/spreadsheets/d/11aOFDU6INzOqrnNZYDaUFgoNAiEAQ6jPzW1YU0yZ21Q/edit?usp=sharing",
	o606:"https://docs.google.com/spreadsheets/d/1Rc3o_x0NgA02rZLVmUWl6VmtzuG-NRrH_jH1T75PV1Y/edit?usp=sharing_eip_se_dm&ts=6231a726",
	primaryOutreach:"https://dms.ooredoo.com.mm/primaryOutReach/Logout",
	mainSheet:"https://docs.google.com/spreadsheets/d/1WnKeR44aeavaatplzVm-GBp8N4kRhOc2iC7OjW0IQoc/edit?usp=sharing",
};

function cp(text){
	navigator.clipboard.writeText(links[text]).then(function() {
	  alert("Copied!");
	}, function(err) {
	  alert('ERROR: Could not copy text: '+ err);
	});
}

function op(l){
	open(links[l]);
}