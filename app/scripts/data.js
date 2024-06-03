const DATA = {
	questions: [
		{
			title: "Чтобы сохранить молодость и красоту кожи, ее нужно регулярно увлажнять. Что вы используете для этого?",
			topic:"Увлажнение",
			image: "/images/test-img-1.png",
			image_popup: "/images/popup-img-1.png",
			answers: [
				{
					Answer: false,
					text: "Пользуюсь насыщенным, питательным кремом.",
					advice: "«Увлажнение и питание кожи — разные вещи. Конечно, питательный крем, обволакивая кожу, задерживает воду в клетках. Но чтобы поддержать оптимальный баланс влаги, нужно увлажняющее средство — такое как обновляющий крем для лица “Энергия протинола” от Avon».",
				},
				{
					Answer: false,
					text: "Мой выбор — концентрированная сыворотка.",
					advice: "«Одной сыворотки для полноценного увлажнения кожи недостаточно. Если не нанести после нее крем, например обновляющий крем для лица “Энергия протинола” от Avon, то влага, доставленная в клетки, легко испарится».",
				},
				{
					Answer: true,
					text: "Давно превратила увлажнение в ритуал. Вначале мягко очищаю кожу, затем протираю тоником, после в ход идет сыворотка, а на финише — увлажняющий крем.",
					advice: "«Вы всё делаете правильно. Советую также обратить внимание на обновляющий крем для лица «Энергия протинола» от Avon , который помимо увлажнения обеспечивает 7 признаков молодой кожи за 7 дней*»<br><br><span>* На основании исследования потребительского восприятия № 23-004 при участии 129 женщин.</span>",
				},
				{
					Answer: false,
					text: " Делаю увлажняющие процедуры в салоне красоты.",
					advice: "«Профессиональный уход — это прекрасно! Но без увлажняющего домашнего ухода результаты самых эффективных процедур будут сведены к нулю. Включите в свой ритуал обновляющий крем для лица “Энергия протинола” от Avon».",
				},
				{
					Answer: false,
					text: "У меня жирная кожа, которая блестит от кремов. Увлажняющие средства не использую.",
					advice: "«Обладательницы жирной кожи часто сторонятся увлажняющих кремов. При этом активно используют вяжущие и подсушивающие средства, которые помимо жира поглощают еще и влагу. Результат — обезвоживание. Пользуйтесь увлажняющими кремами, такими как обновляющий крем для лица “Энергия протинола” от Avon, который также обеспечивает 7 признаков молодой кожи за 7 дней*».<br><br><span>* На основании исследования потребительского восприятия № 23-004 при участии 129 женщин.</span>",
				},
			],
		},
		{
			title: "Плохая экология, стресс, редкие прогулки, некачественное питание и вредные привычки — вот далеко не полный перечень факторов, из-за которых кожа становится тусклой и малопривлекательной. Что вы делаете, чтобы вернуть лицу сияние?",
			topic:"Сияние",
			image: "/images/test-img-1.png",
			image_popup: "/images/popup-img-2.png",
			answers: [
				{
					Answer: false,
					text: "Регулярно пользуюсь скрабами.",
					advice: "«Конечно, отшелушивание улучшает цвет лица. Но пилинг надо делать не чаще двух раз в неделю, чтобы не ослабить защиту кожи и не вызвать раздражения. А чтобы она постоянно словно светилась изнутри, используйте обновляющий крем для лица “Энергия протинола” от Avon , который придает сияние и борется со старением».",
				},
				{
					Answer: false,
					text: "Ежедневно пользуюсь тональным кремом.",
					advice: "«Макияж и уход — две разные вещи. Тональные средства не могут удовлетворить всех потребностей кожи. Перед их нанесением используйте обновляющий крем для лица “Энергия протинола” от Avon, который обеспечивает 7 признаков молодой кожи за 7 дней*».<br><br><span>* На основании исследования потребительского восприятия № 23-004 при участии 129 женщин.</span>",
				},
				{
					Answer: false,
					text: "Если мне нужно «засиять», я иду в салон красоты.",
					advice: "«А почему нужен особый повод для красивого цвета лица? Приятно же ежедневно поражать всех своей сияющей кожей. Введите в ритуал обновляющий крем для лица “Энергия протинола” от Avon, который придает коже сияние и обеспечивает 7 признаков молодой кожи за 7 дней*»<br><br><span>* На основании исследования потребительского восприятия № 23-004 при участии 129 женщин.</span>",
				},
				{
					Answer: true,
					text: "Утром и вечером аккуратно очищаю кожу, пользуюсь увлажняющей сывороткой и кремом, раз в неделю делаю пилинг.",
					advice: "«Отличный ритуал, но чтобы он дал максимальный эффект, введите в него обновляющий крем для лица “Энергия протинола” от Avon, который не только придает сияние, но и борется с семью признаками старения кожи».",
				},
				{
					Answer: false,
					text: " Я очень люблю средства с фруктовыми кислотами.",
					advice: "«Фруктовые кислоты — эффективные, но достаточно агрессивные ингредиенты, которые могут повысить чувствительность и склонность к пигментации. Намного безопаснее и эффективнее станет использование обновляющего крема для лица “Энергия протинола” от Avon, который и придает сияние, и борется со старением».",
				},
			],
		},
		{
			title: "Эти тонкие линии появляются у кого-то раньше, у кого-то позже, но в любом случае радости не доставляют. А как боретесь с морщинами вы?",
			topic:"Морщины",
			image: "/images/test-img-1.png",
			image_popup: "/images/popup-img-3.png",
			answers: [
				{
					Answer: false,
					text: "Регулярно делаю инъекции ботокса, и морщин на своем лице не вижу.",
					advice: "«Чрезмерное увлечение инъекциями часто приводит к ухудшению мимики, опущению бровей и угрюмому виду. Кроме того, даже самая гладкая кожа без должного ухода будет выглядеть некрасиво. Обязательно пользуйтесь обновляющим кремом для лица “Энергия протинола” от Avon, чтобы продлить молодость кожи».",
				},
				{
					Answer: false,
					text: "Постоянно делаю самомассаж.",
					advice: "«Без знания строения кожи, связок и мышц лица самомассаж выполнять опасно. В любом случае, он не заменит полноценного ухода за кожей. Так, обновляющий крем для лица “Энергия протинола” от Avon не только разглаживает морщины, но и обеспечивает 7 признаков молодой кожи за 7 дней*».<br><br><span>* На основании исследования потребительского восприятия № 23-004 при участии 129 женщин.</span>",
				},
				{
					Answer: true,
					text: "Я пользуюсь anti-age-средствами утром и вечером. По возможности хожу к косметологу и не забываю контролировать мимику.",
					advice: "«Ваш ритуал будет полностью идеальным, если в него войдет обновляющий крем для лица “Энергия протинола” от Avon , который борется сразу с семью признаками старения».",
				},
				{
					Answer: false,
					text: "У меня жирная кожа, поэтому морщины мне не страшны.",
					advice: "«Это заблуждение. Действительно, признаки старения на жирной коже появляются позже, но из-за того что она плотнее и толще нормальной, морщины будут резче и глубже. Поэтому с 25 лет пользуйтесь обновляющим кремом для лица “Энергия протинола” от Avon».",
				},
				{
					Answer: false,
					text: "Морщин я не боюсь! Главное в женщине — это ум и обаяние.",
					advice: "«Девиз “Полюбите меня черненькой, беленькой меня каждый полюбит” — устарел. Признаками успешной женщины являются не только интеллект, но и ухоженная внешность. Тот, кто не следит за собственным лицом, подсознательно ассоциируется с ненадежным человеком. Ежедневно наносите обновляющий крем для лица “Энергия протинола” от Avon, и кожа будет выглядеть идеально».",
				},
			],
		},
		{
			title: "Из-за ухудшения качества коллагеновых волокон кожа становится тонкой и дряблой, овал лица теряет четкость, а уголки рта и глаз опускаются. Как вы боретесь с этими изменениями?",
			topic:"Упругость",
			image: "/images/test-img-1.png",
			image_popup: "/images/popup-img-4.png",
			answers: [
				{
					Answer: false,
					text: "Мои фавориты — филлеры и мезотерапия с пептидами, плазмой и т. д.",
					advice: "«Это полезные процедуры. Но для того чтобы коллаген имел правильную структуру, ему необходима влага. Пользуйтесь увлажняющими средствами, особенно теми, которые стимулируют выработку этого белка — обновляющим кремом для лица “Энергия протинола” от Avon».",
				},
				{
					Answer: false,
					text: "Я принимаю пищевые добавки с коллагеном.",
					advice: "«Их составляющие идут в первую очередь на восстановление связок и мышц. И в последнюю очередь достигают кожи. И чтобы она использовала их по максимуму, применяйте средство, которое активизирует выработку коллагена, — обновляющий крем для лица “Энергия протинола” от Avon».",
				},
				{
					Answer: false,
					text: "Я люблю аппаратные методики — лазер, ультразвук и т. д.",
					advice: "«Любое аппаратное воздействие повреждает коллаген, чтобы клетки начали вырабатывать новый. Но если им для этого не будет хватать питательных веществ и влаги, молодые волокна будут неполноценными. Поэтому после процедуры регулярно наносите обновляющий крем для лица “Энергия протинола” от Avon. А также пейте больше жидкости и налегайте на белковые продукты».",
				},
				{
					Answer: true,
					text: "Использую средства, стимулирующие выработку коллагена, слежу за балансом белка в рационе и стараюсь регулярно делать аппаратные и мезопроцедуры в центрах красоты.",
					advice: "«Чтобы не только стимулировать выработку коллагена, но и комплексно омолаживать кожу, разглаживать морщины, увлажнять и придавать сияние, используйте обновляющий крем для лица “Энергия протинола” от Avon».",
				},
				{
					Answer: false,
					text: "Я пока не замечаю потери упругости кожи, поэтому только увлажняю и защищаю ее.",
					advice: "«После 25 лет синтез коллагена ежегодно снижается на 2%. И тонус кожи неуклонно начинает падать. В ваших интересах затормозить этот процесс с помощью обновляющего крема для лица “Энергия протинола” от Avon, который активизирует выработку коллагена и замедляет старение кожи».",
				},
			],
		},
		{
			title: "Расширенные поры и нарушение микрорельефа кожи пусть не явный, но частый признак старения. Из-за этого ухудшается цвет лица, морщинки кажутся резче, а макияж ложится неровно. Что вы делаете для сужения пор ежедневно?",
			topic:"Сужение пор",
			image: "/images/test-img-1.png",
			image_popup: "/images/popup-img-5.png",
			answers: [
				{
					Answer: false,
					text: "Протираю лицо спиртосодержащим лосьоном и наношу локальное средство для сужения пор.",
					advice: "«Спирт действительно мгновенно сужает поры. Но при этом вытягивает воду из кожи. В ответ она выделяет больше себума, чтобы под его пленкой задержать влагу. И поры еще сильнее расширяются. А средство для сужения пор без предварительного увлажнения даст лишь временный эффект. Обратите внимание на обновляющий крем для лица “Энергия протинола” от Avon. Он устраняет семь признаков старения кожи, в числе которых и расширенные поры».",
				},
				{
					Answer: false,
					text: "Стараюсь чаще припудриваться и пользуюсь праймерами.",
					advice: "«Частицы пудры, смешавшись с кожным салом, еще сильнее забьют и расширят поры. Праймер же дает лишь видимый эффект, не решая саму проблему. Необходимо ввести в уход anti-age-средство с функцией сужения пор — такое как обновляющий крем для лица “Энергия протинола” от Avon».",
				},
				{
					Answer: true,
					text: "Слежу за тем, чтобы среди функций моего средства для ухода обязательно было бы обещание сузить поры. Также тщательно очищаю лицо, раз в неделю делаю пилинг и наношу очищающие маски.",
					advice: "«Идеальным средством для ухода за вашей кожей станет обновляющий крем для лица “Энергия протинола” от Avon, который повышает упругость, разглаживает морщинки, увлажняет, а также сужает поры».",
				},
				{
					Answer: false,
					text: "Пользуюсь подсушивающими масками с глиной.",
					advice: "«Маска — лишь дополнительное средство. Поддержать ее эффект поможет увлажняющее и омолаживающее средство с эффектом сужения пор — обновляющий крем для лица “Энергия протинола” от Avon».",
				},
				{
					Answer: false,
					text: "Постоянно делаю чистку лица.",
					advice: "«Самостоятельно лучше ее не выполнять: если вы травмируете кожу, то на лице останутся следы, которые ухудшат микрорельеф. Допустима лишь вакуумная чистка в салоне. А дома пользуйтесь увлажняющими продуктами с функцией сужения пор — обновляющим кремом для лица “Энергия протинола” от Avon».",
				},
			],
		},
	],
	results: [
		{
			id: "1",
			image: "/images/result-img-1.png",
			imageMobile: "/images/result-mobile-img-1.png",
		},
		{
			id: "2",
			image: "/images/result-img-2.png",
			imageMobile: "/images/result-mobile-img-2.png",
		},
	],
};

export default DATA;
