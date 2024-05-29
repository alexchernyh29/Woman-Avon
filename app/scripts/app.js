import $ from "jquery";
import DATA from "./data";

let activeIndex = 0;
let correctAnswers = 0;

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

	// $('.test__item').on('click', function(){
	// 	$('.test__item.pink').removeClass('pink');
	// 	$(this).addClass('pink');
	// });
	$('.test__item').hover(function() {
		$(this).addClass('active-hover');
	  }, function() {
		$(this).removeClass('active-hover');
	  });
	
	$('.test__close').on('click', function(){
		$(".test__popup").fadeOut();
	});

	$(".test").on("click", ".test__item", function (e) {
		$(".test__next").off("click");
		$(".test__next").on("click", function () {
			$(".test__popup").fadeIn();
			$(".test__next").off("click");
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
				$(".result").addClass("is-active");
				$(".result__text").text("Вы правильно ответили на " + correctAnswers + " из " + questions.length + " вопросов");
				if (correctAnswers <= 4){
					$(".result__title").html(results[0].info);
					$(".result__img").html(`<img src="${results[0].image}" />`);
				} else {
					$(".result__title").html(results[1].info);
					$(".result__img").html(`<img src="${results[1].image}" />`);
				}
				$(".result__button").on("click", function () {
					$(".result").removeClass("is-active");
					resetQuiz();
				});
			} else {
				showQuestion();
			}
		});
	});

	function resetQuiz() {
		activeIndex = 0;
		correctAnswers = 0;
		showQuestion();
		$(".test__popup").hide();
	}

	showQuestion();
});
