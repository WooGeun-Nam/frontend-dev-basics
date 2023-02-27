var TabBox = {
	onTabClicked: function() {
		$('.tab-box li.selected').removeClass('selected');
		$(this).addClass("selected");
	},
	_init: function() {
		$('.tab-box li').click(TabBox.onTabClicked);
	},
	init: function() {
		$(TabBox._init);
	}
}