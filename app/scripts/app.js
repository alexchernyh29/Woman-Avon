import $ from "jquery";
import DATA from "./data";

let activeIndex = 0;
let correctAnswers = 0;
let selectedRedirectUrl = null;
const { questions, results } = DATA;


$(() => {
	function showQuestion() {
		$(".test").attr("data-id", activeIndex);
		$(".test__item").each((id, item) => {
			$(item).attr("data-id", id);
			$(item)
				.find(".test__text")
				.html(questions[activeIndex].answers[id].text);
    	});
		$(".test__counter span").html(activeIndex + 1);
		$(".test__title").html(questions[activeIndex].title);
		$(".test__topic").html(questions[activeIndex].topic);
		$(".test__picture").html(
			`<img src="${questions[activeIndex].image}" />`
		);
		$(".test__popup__img").html(
			`<img src="${questions[activeIndex].image_popup}" />`
		); 
		$(".test__popup__img-mobile").html(
			`<img src="${questions[activeIndex].image_popup}" />`
		);
	}

	$('.test__item').on('click', function(){
		$('.test__item.active-hover').removeClass('active-hover');
		$(this).addClass('active-hover');
	});
	
	$('.test__next').on('click', function(){
		$(".test__popup").fadeOut();
	});

	$('.test__age-option').on('click', function(){
		
	});

	
	$(".test").on("click", ".test__item", function (e) {
		$(".test__popup").fadeIn();
		$(".test__item").removeClass("pink");
		$(".test__item").removeClass('active-hover');
		const id = $(e.target).closest(".test__item").data("id");
		const Answer = questions[activeIndex].answers[id].Answer;
		if (Answer) {
			correctAnswers++;
		}
		$(".test__popup__text").text(questions[activeIndex].answers[id].advice);
		activeIndex += 1;

		if (activeIndex >= questions.length) {
			$(".test__info").fadeOut();
			$(".test__result").show();
			$('.test__age-option').click(function() {
                $('.test__age-option.active').removeClass('active');
				$(this).addClass('active');
                selectedRedirectUrl = $(this).data('redirect-url');
            });

            $('.test__result__next').click(function() {
                if (selectedRedirectUrl) {
                    window.location.href = selectedRedirectUrl;
                }
            });
		} else {
			showQuestion();
		}
	});
	showQuestion();
});
