$(function () {
	var validate = function (arr) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] !== i) {
				return false;
			}
		}
		return true;
	}

	var group = $('.sortable').sortable(
		{
			group: 'sortable',
			nested: false,
			vertical: false,
			onDrop: function (item, container, _super) {
				if(validate(container.el.sortable("serialize").get())) {
					container.el.next('.js-activity-validate').show();
				} else {
					container.el.next('.js-activity-validate').hide();
				}
				_super(item, container);
			},
			serialize: function (parent, children, isContainer) {
				return isContainer ? children : parseInt(parent.attr('data-value'))
			}
		});

	var mcquestions = $('.js-activity-multiple-choice').each(function (questionNumber, question) {
		$(question).children("button").click(function () {
			if($(this).attr('data-value') === "right") {
				$(question).next(".js-activity-validate").show();
			} else {
				$(question).next(".js-activity-validate").hide();
			}
		});
	});
});