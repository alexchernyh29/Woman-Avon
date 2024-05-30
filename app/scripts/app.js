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

	$('.test__item').on('click', function(){
		$('.test__item.active-hover').removeClass('active-hover');
		$(this).addClass('active-hover');
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
				$(".test__info").fadeOut();
				$(".test__result").show();
				$('.test__result__next').on('click', function(){
						const userName = $("#name").val();
						const userAge = $("#age").val();
						const data = {
						name: userName,
						age: userAge,
						};
						console.log(data);
						// Отправка данных на сервер
						$.ajax({
						url: '/save_result/',
						method: 'POST',
						contentType: 'application/json',
						data: JSON.stringify(data),
						success: function(response) {
							// Редирект по полученной ссылке
							window.location.href = response.redirectUrl;
						},
						error: function(err) {
							console.error('Error:', err);
						}
						});
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
