window.I18n.load({
	namespace: 'WS',
	code: 'rus',
	nplurals: 3,
	initialize: function () {
		if (window.dc && window.dc.inflector) {
			window.dc.inflector.possessivize = function (string) {
				return string;
			};
		}
	},
	pluralizer: function (n) {
		return (n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	},
	strings: {
		"TRUE": "TRUE",
		"access": "Доступ",
		"access_level": "Уровень доступа",
		"access_level_edit_closing": "Изменение уровня доступа займет некоторое время. До завершения операции документ будет закрыт.",
		"account": "Аккаунт",
		"account_add_failure": "Не удалось добавить аккаунт",
		"account_is_disabled": "Аккаунт %s был отключен",
		"accounts": "Аккаунты",
		"add": "Добавить",
		"add_a_collaborator": "Добавить в проект участника",
		"add_html_for_documents": "Вставьте этот HTML код на свой сайт, чтобы встроить в него эти документы.",
		"add_html_for_note": "Добавьте этот HTML код на страницу, в которую хотите встроить заметку.",
		"add_html_for_viewer": "Добавьте этот HTML код на страницу, в которую хотите встроить окно просмотра документов.",
		"add_note_instructions": "Выделите часть документа или щелкните на пространстве между страницами, чтобы создать заметку",
		"add_private_note": "Добавить приватную заметку",
		"add_private_note_warn": "Ваши приватные заметки видны только вам и никому кроме вас.",
		"add_public_note": "Добавить публичную заметку",
		"add_public_note_warn": "Публичные заметки будут видны всем, кто увидит этот документ",
		"add_reviewer": "Добавить рецензента",
		"added_project": "добавлены в этот проект",
		"added_to_x_documents": ["Документ добавлен в %s", "%d документа добавлено в %s", "%d документов добавлено в %s"],
		"adding_accounts": "Добавление аккаунтов",
		"administrator": "Администратор",
		"all_documents": "Все документы",
		"allow_readers_to_search": "Разрешить поиск по этим документам",
		"already_has_account": "У %s уже есть аккаунт.",
		"analyze": "Анализировать",
		"analyze_project_in_overview": "Проанализировать этот проект в Overview",
		"analyze_x_docs_in_overview": ["Анализировать документ в Overview", "Анализировать документы в Overview"],
		"annotated": "С_заметками",
		"annotated_by": "Автор заметки: %s",
		"annotated_documents": "Документы с заметками",
		"annotation": "инструментов по работе с заметками",
		"annotation_help": "С помощью ссылок справа, добавьте к документу заметки. Имейте ввиду, что как сами заметки так и черновики, если они публичны, будут видны всем пользователям. Приватные заметки только для вас, они не будут видны даже %s.",
		"apply_all_files": "применить ко всем файлам",
		"apply_fields_all_files": "применить это описание, источник и уровень доступа ко всем файлам",
		"back": "Назад",
		"bad_data_key": "%s нельзя использовать в качестве значения",
		"before_continue": "Перед тем, как продолжить, вы можете %s",
		"black": "черный",
		"broken_document": "Ошибка обработки",
		"by_date": "по дате",
		"by_length": "по длине",
		"by_relevance": "по релевантности",
		"by_source": "по источнику",
		"by_title": "по имени",
		"calais_credit": "Объекты определены с помощью OpenCalais",
		"cancel": "Отмена",
		"cannot_remove_all": "Нельзя удалить из документа все страницы.",
		"change_page_arrows": "Перелистывать страницы можно стрелками в панели справа",
		"change_password": "Изменить пароль",
		"choose_location_to_insert_pages": "Выберите, куда вставить страницы.",
		"choose_note": "Выбрать заметку",
		"city": "Город",
		"close": "Закрыть",
		"close_while_redacting": "В документ вносятся изменения. Пока этот процесс идет, он будет закрыт.",
		"close_while_text_reprocess": "Текст распознается. Пожалуйста, закройте документ.",
		"collaboration": "Совместная работа участников",
		"collaborators": "Участник",
		"confirm_remove_all_data": "Вы уверены, что хотите удалить все данные из %s?",
		"contact_documentcloud": "Связаться с DocumentCloud",
		"contact_reviewer": "Если вам нужна помощь, свяжитесь с %s - %s. Больше информации о DocumentCloud также есть на %s.",
		"contact_us": "Контакты",
		"contributed_by": "Добавлено",
		"contributor": "Пользователь",
		"country": "Страны",
		"create_new_project": "Создать новый проект",
		"date": "Даты",
		"date_uploaded": "дате загрузки",
		"default_document_language": "Язык документа по умолчанию",
		"delete": "Удалить",
		"delete_documents": ["Удалить документ", "Удалить документы"],
		"deleting_documents": "Удаление...",
		"demo_embed_error": "Пользователи пробных аккаунтов не имеют возможности встраивать документы в сайты. %sСвяжитесь с нами%s если вам нужен полноценный аккаунт. Пример встроенного кода есть %sтут%s.",
		"demo_no_viewer": "Пользователи демо аккаунтов не могут скачивать страницы с окном просмотра. %s если вам нужен полноценный аккаунт.",
		"description": "Описание",
		"disable": "Отключить",
		"disabled": "Отключен",
		"document": "Документ",
		"document_access_updated": ["Уровень доступа к документу обновлен", "Уровень доступа к %d документам обновлен"],
		"document_already_public": "Этот документ уже доступен публично.",
		"document_error_message": "Система не смогла обработать этот документ. Информация о проблеме была автоматически отправлена нам, переодически мы исправляем ошибки такого рода. Вы можете поискать ответ в наших %sсоветах по устранению неполадок%s или %sсвязаться с нами%s чтобы получить поддержку сразу.",
		"document_has_no_public_notes": "С этим документом не связано публично доступных заметок.",
		"document_modification": "Модификация документов",
		"document_processing_count": ["Обрабатывается один документ", "Обрабатывается %d документа", "Обрабатывается %d документов"],
		"document_public_on": "Документ станет публично доступным %s",
		"document_publish_embed_test": "Если вы хотите протестировать встраиваемый код перед его публикацией, в самом коде укажите все адреса URL в формате HTTPS. Смените адреса обратно на HTTP перед тем, как сделать документ публичным.",
		"document_publish_private_help": "Этот документ приватный. Пока вы не сделаете его общедоступным, найти и посмотреть его сможете только вы. Вы можете прямо сейчас сменить %sуровень доступа%s или %s время публикации.",
		"document_publish_public_help": "Этот документ доступен публично. Сейчас он доступен пользователям через поиск в каталоге DocumentCloud, он также будет находится в открытом доступе, если вы встроите его в сайт. Изменить %sуровень доступа%s.",
		"document_tools": "Инструменты",
		"document_viewer_size": "Размер окна просмотра документов",
		"documents": "Документы",
		"documents_are_ready": "Ваши документы готовы",
		"documents_per_page": "Документов на странице",
		"double_check_disable": "Вы уверены, что хотите отключить аккаунт %s?",
		"download_pdf": "Скачать оригинал в PDF",
		"download_text": "Скачать полный текст",
		"download_viewer": "Скачать страницу с окном просмотра документов",
		"downloading_progress": ["Готовим \"%2$s\" для загрузки...", "Готовим %d документа для загрузки", "Готовим %d документов для загрузки"],
		"draft": "Черновик",
		"draft_note_visible": "Этот черновик доступен только вам и пользователям, которых вы авторизовали",
		"edit": "Редактировать",
		"edit_access": "Изменить уровень доступа",
		"edit_data": "Редактировать",
		"edit_data_for": "Дополнительные параметры %s",
		"edit_description": "Редактировать описание",
		"edit_details": "редактировать подробности",
		"edit_document_data": "Дополнительные параметры документа",
		"edit_document_info": "Редактировать информацию о документе",
		"edit_document_information": "Редактировать информацию о документе",
		"edit_document_pairs": ["Добавить/Редактировать дополнительные параметры документа", "Добавить/Редактировать дополнительные параметры документов"],
		"edit_page_text": "Редакрировать текст страницы",
		"edit_page_text_done": "Если вы закончили работу с текстом, щелкните по кнопке \"Сохранить текст\".",
		"edit_page_text_instructions": "Чтобы внести изменения в текст любой страницы: пролистайте до нужной страинцы с помощью кнопок вверху. Любые внесенные изменения не затронут оригинальный PDF.",
		"edit_published_url": "Редактировать URL публикации",
		"edit_related_url": "Редактировать URL связанной статьи",
		"edit_sections": "Редактировать секции",
		"edit_source": "Изменить источник",
		"edit_text_any_page": "Редактировать текст любой страницы.",
		"edit_title": "Изменить название",
		"edit_x": "Редактировать %s",
		"editing_notes_sections": "Редактирование заметок и секций",
		"email": "Email",
		"email_for_assistance": "Если вам нужна помощь, напишите нам на support@documentcloud.org.",
		"email_when_complete": "Я хочу получить email когда закончится %sобработка документов%s.",
		"embed_a_note": "Встроить заметку",
		"embed_document": "Добавить документ на сайт",
		"embed_document_list": "Встроить список документов",
		"embed_document_viewer": "Встроить окно просмотра документов в страницу",
		"embed_hide_text_tab_help": "Если качество текста документа плохое, снимите эту галочку чтобы скрыть вкладку \"текст\".",
		"embed_note": "Добавить заметку на сайт",
		"embed_note_demo_error": "Собственники демо-аккаунтов не могут встраивать заметки. %sСвяжитесь с нами%s, если вам нужен полноценный аккаунт. Пример кода для вставки есть %sтут%s.",
		"embed_note_step_one": "Шаг первый: Выберите заметку, которую хотите встроить",
		"embed_note_step_two": "Шаг второй: Скопируйте и вставьте код",
		"embed_search_demo_error": "Собственники демо-аккаунтов не могут загружать сеты документов. %sСвяжитесь с нами%s если вам нужен полноценный аккаунт. Пример кода для втавки есть %sтут%s. ",
		"embed_search_step_one": "Шаг первый: Уточнить параметры документов",
		"embed_search_step_two": "Шаг второй: Скопировать и вставить код",
		"embed_show_sidebar": "Показать боковую панель",
		"embed_show_sidebar_help": "Если разрешение вашего экрана слишком мало по горизонтали, снимите галочку чтобы спрятать боковую панель.",
		"embed_show_text_tab": "Показать вкладку \"текст\"",
		"embed_step_one_title": "Шаг первый: Настроить \"%s\"",
		"embed_step_three_title": "Шаг третий: Скопировать и вставить HTML код",
		"embed_step_two_title": "Шаг второй: Настроить окно просмотра документов",
		"embed_tools": "Встроить документ",
		"embed_url_of_document": "В большенстве случаев это поле можно не заполнять. URL страницы на вашем сайте, в которую встроен документ",
		"embed_viewer_opens_to": "Открыть окно просмотра на",
		"embed_viewer_opens_to_help": "Указать страницу или заметку, с которой откроется окно просмотра документов.",
		"enter_email_address": "Введите email",
		"enter_new_password": "Введите новый пароль",
		"enter_title_and_page": "Пожалуйста, укажите название и номер страницы для каждого раздела.",
		"enter_url_for_embed": ["Укажите URL страницы, в которую встроен этот документ", "Укажите URL страницы, в которую встроены эти документы"],
		"enter_url_that_references": ["Введите URL статьи, которая ссылается на этот документ", "Введите URL статьи, которая ссылается на эти документы"],
		"entities_explained": "Указанные ниже объекты находятся в документах, которые подпадают под критерии поиска. Ищите по имени объекта чтобы получить более точные результаты поиска.",
		"entities_unavailable": "Ключевые слова временно недоступны.",
		"error": "Ошибка",
		"explain_disable_account": "%1$s не сможет войти в DocumentCloud. Публичные документы и заметки, сделанные пользователем %1$s останутся общедоступными. %2$sСвяжитесь со службой поддержки %3$s чтобы польностью удалить аккаунт %1$s.",
		"export": "Экспорт",
		"export_to_overview_explain": "Вы собираетесь экспортировать проект в Overview. Не забудьте, что для этого у вас должен быть аккаунт Overview. Также вы должны предоставить Overview имя пользователя и пароль, которые используете для входа в DocumentCloud.",
		"featured_examples_list": "Множество примеров встроеных документов вы можете найти в нашем %sсписке примеров%s.",
		"featured_reporting_list": "Вы можете найти примеры встраиваемого поиска в нашем списке %sпримеров использования%s.\n",
		"filter": "Фильтр",
		"finish": "Готово",
		"first_name": "Имя",
		"first_page": "Первой странице",
		"fixed_size": "Задать размер",
		"for_example_data": "Например: \u0026ldquo;день рождения : 1935-01-08\u0026ldquo;, или \u0026ldquo;статус: выпущен\u0026ldquo;",
		"force_ocr": "Распознать текст, игнорируя ошибки",
		"form_contact_instructions": "Чтобы связаться с нами, используйте эту форму (или отправьте email на %s). Если вам срочно нужно с кем-то поговорить, можете нам позвонить: +1 (202) 505-1010. Подробнее о том, как с нами связаться, тут - %s.",
		"freelancer": "Фрилансер",
		"full_page": "На всю страницу",
		"future_documents_w_appear": "Все документы, %s также появятся на вашем сайте.",
		"group": "Группа",
		"guided_tour": "Обзор возможностей",
		"guides_howtos": "Инструкции",
		"has_no_entities": "В %s нет ключевых слов",
		"height": "Высота",
		"help": "Помощь",
		"help_pages": "страницах помощи",
		"home": "Главная",
		"in_project": "в этом проекте",
		"include_optional_msg": "Опционно: Добавить личное сообщение",
		"insert_between_pages": "Вставить между страницами %d и %d",
		"insert_first_page": "Вставить перед первой страницей",
		"insert_last_page": "Вставить после последней страницы",
		"insert_pages_instructions": "Чтобы вставить страницы в определенном месте в документе, щелкните мышкой на пространстве между страницами. Если вы хотите заменить страницу, просто щелкните по ней.",
		"insert_pages_message": "Во время принятия изменений документ будет закрыт. На обработку длинных документов может уйти много времени.",
		"insert_pages_shift_key": "Чтобы сразу заменить несколько страниц, выберете их, зажав клавишу \"Shift\". Когда будете готовы, щелкнитепо кнопке \"Загрузить страницы\"",
		"insert_replace_pages": "Вставить/Заменить страницы",
		"introduction": "Введение",
		"language": "Язык",
		"language_defaults": "Язык по умолчанию",
		"last_name": "Фамилия",
		"length": "длине",
		"link_to_pdf": "Ссылка на оригинал в PDF",
		"link_to_pdf_help": "Снимите галочку, чтобы убрать из окна просмотра документа ссылку на PDF.",
		"log_in": "Войти",
		"log_out": "Выйти",
		"logged_in_as": "Вы вошли как %s",
		"make_document_public": "Сделать документ публично доступным",
		"make_documents_public": ["Сделать документ публичным.", "Сделать %d документа публичными.", "Сделать %d документов публичными."],
		"make_public_on": "Сделать публично доступным",
		"manage": "Настроить",
		"manage_account": "Управление аккаунтом",
		"manage_organization": "Управление организацией %s",
		"matching_search": ["который вы только что выбрали,", "которые вы только что выбрали,"],
		"max_upload_size_warn": "Загружать можно только документы, которые меньше 200MB. Пожалуйста, %sоптимизируйте документ%s перед тем, как продолжить.",
		"mentioned_in_x_documents": ["Упоминается в документе", "Упоминается в %d документах"],
		"mentioning_query": "в которых упоминается \u0026ldquo;%s\u0026rdquo;",
		"message": "Сообщение",
		"modification": "инструментов модификации",
		"modify_original_document": "Модифицировать документ",
		"must_have_doc_title": ["Пожалуйста, укажите название документа", "Пожалуйста, укажите названия для всех документов"],
		"must_have_title": "Пожалуйста, введите название.",
		"must_upload_something": "Нужно загрузить хотя бы один документ.",
		"new_account": "Новый аккаунт",
		"new_documents": "Новые документы",
		"new_project": "Новый проект",
		"next": "Далее",
		"no_appear_until_publish": ["не появится в списке, пока вы его не опубликуете.", "не появятся в списке, пока вы их не опубликуете."],
		"no_dates_for_timeline": ["В %2$s не найдено дат, которые можно было бы проанализировать.", "В %d документах не было найдено дат"],
		"no_duplicate_section": "Секцию-дубликат создать нельзя",
		"no_embed_permission": "У вас недостаточно полномочий для того, чтобы встроить этот документ.",
		"no_entities_found": "Поиск не дал результатов",
		"no_past_publication": "Документ может быть опубликован задним числом.",
		"no_permission_to_edit_x": "У вас недостаточно полномочий для того, чтобы отредактировать \"%s\".",
		"no_project_doc_selected": "Не выбрано ни одного проекта или документа",
		"no_projects_help": "В этом аккаунте пока нет проектов. Чтобы начать проект, нажмите на кнопке \"Добавить проект\".",
		"no_results_for": "В %s ничего не найдено",
		"no_reviewer_on_document": ["Этот документ не на рецензии", "Эти документы не на рецензии"],
		"no_section_outside_doc": "Создать секцию вне документа нельзя",
		"not_found_account": "В этом аккаунте нет документов.",
		"not_found_all": "Нет документов",
		"not_found_annotated": "Нет документов с заметками.",
		"not_found_group": "У этой организации нет документов.",
		"not_found_project": "В этом проекте нет документов.",
		"not_found_published": "У этой организации нет документов.",
		"not_found_search": "Поиск не дал результатов",
		"note": ["Заметка", "Заметки"],
		"note_ellipsis": "Заметке...",
		"note_embed_private": "Это приватный документ: заметки в этом документе не будут никому видны, пока документ не сделан публичным. Сменить %sуровень доступа%s сейчас или",
		"notes_hidden_while_redacting": "При редактировании документа существующие заметки будут временно скрыты",
		"of": "из",
		"ok": "OK",
		"open": "Открыть",
		"open_in_viewer": "Открыть в окне просмотра документов все страницы",
		"open_published": "Открыть опубликованную версию",
		"open_published_version": "Открыть опубликованную версию",
		"optional": "Опционно",
		"or": "или",
		"or_remove_all_data": "или %sудалить все данные%s.",
		"order_documents_by": "Упорядочить документы",
		"organization": ["Организацию", "Организации"],
		"organizations_documents": "Документы %s",
		"over_x_mentions": "Более %d упоминаний",
		"page": ["страница", "страницы"],
		"page_ellipsis": "Странице...",
		"page_tools": "Работа со страницами",
		"pages_are_being_removed": "Идет удаление страниц. Пожалуйста, закройте документ.",
		"paragraph_description_of_document": "Описание документа в несколько предложений",
		"password_no_blank": "Поле нельзя оставить пустым",
		"password_reset": "Восстановление пароля DocumentCloud",
		"password_updated": "Пароль изменен",
		"pending": "Не активирован",
		"person": "Люди",
		"pg": "с.",
		"phone": "Телефон",
		"place": "Места",
		"please_enter_email": "Введите email",
		"please_enter_valid_email": "Введите работающий email",
		"popular": "Популярный",
		"popular_documents": "Популярные документы",
		"preview_email": "посмотреть сообщение",
		"preview_search_embed_help": "Перед тем как продолжить, пожалуйста, %sпроверьте список документов.%s Опубликованные документы откроются по тому URL, по которому их изначально опубликовали, в то время как остальные публичные документы откроются в DocumentCloud.",
		"preview_viewer": "Перед тем, как продолжить, %sпроверьте, правильно ли выглядит окно просмотра документа%s.",
		"print_notes": "Напечатать заметки",
		"print_notes_missing_error": "В %s нет заметок, которые можно было бы напечатать.",
		"privacy": "Политика конфиденциальности",
		"private": "Приватный",
		"private_access": "Приватный доступ",
		"private_access_help": "Доступ имеют только пользователи с более широкими правами (участники).",
		"private_documents_visible_instructions": ["Это приватный документ. Перед тем, как он станет доступен на вашем сайте или через поиск в каталоге DocumentCloud, его нужно сделать публичным. Вы можете задать время и дату публикации или %2$sсделать документ публичным сейчас%3$s.", "Эти документы приватны. Перед тем, как они станут доступны на вашем сайте или через поиск в каталоге DocumentCloud, их нужно сделать публичными. Вы можете задать время и дату публикации или %2$sвнести изменения сейчас%3$s."],
		"private_note": "Приватная заметка",
		"private_note_visible": "Эта приватная заметка видна только вам",
		"private_to": "Приватно доступен %s",
		"private_to_organization_help": "Только пользователи из вашей организации имеют доступ (не фрилансеры).",
		"project": "Проект",
		"project_exists": "Проект с именем %s уже существует",
		"project_id": "ID проекта:",
		"project_owner": "Собственник проекта",
		"projectid": "Id_проекта",
		"projects": "Проекты",
		"public": "Публичный",
		"public_access": "Общий доступ",
		"public_access_help": "Кто угодно в интернете может искать и видеть документ.",
		"public_documents_help": "Выберите организацию из списка выше, чтобы открыть список публичных документов этой организации.",
		"public_on": "Станет публично доступен",
		"publication_date": "дата публикации",
		"publish": "Опубликовать",
		"publish_choose_display": "Примеры: документ %sна всю страницу%s, в блоке с %sфиксированой шириной%s.",
		"published": "Опубликованный",
		"published_documents": "Опубликованные документы",
		"published_url": "URL публикации",
		"publishing_embedding": "Публикация и встраивание кода в сайты",
		"reader_workspace_language": "Язык ридера и рабочей области",
		"really_delete_x_docs": ["Вы точно хотите удалить документ?\n", "Вы точно хотите удалить %d документа?\n", "Вы точно хотите удалить %d документов?"],
		"red": "красный",
		"redact_document": "Скрыть часть текста",
		"redact_instructions": "Курсором мыши нарисуйте %s четырехугольник над каждым словом или частью документа, которые хотели бы скрыть. Текст, связанный со скрытой частью, будет удален.",
		"redaction_close_while_processing": ["Вы скрыли абзац. Во время принятия изменений документ будет закрыт. Вы уверены, что хотите продолжить?", "Вы скрыли %d абзаца. Во время принятия изменений документ будет закрыт. Вы уверены, что хотите продолжить?", "Вы скрыли %d абзацев. Во время принятия изменений документ будет закрыт. Вы уверены, что хотите продолжить?"],
		"reenable": "Восстаносить",
		"related_article_url": "URL связанной статьи",
		"related_article_url_help": "Если вы укажите URL статьи, которая ссылается на этот документ, внизу в окне просмотра документов появится ссылка \"Связанная статья\". Многие посетители попадают на страницы с встроенными документами через поисковики \u0026mdash; ссылка направит их на страницу-источник.",
		"related_url_of_document": "URL страницы в интернете, которая ссылается на этот документ",
		"relevance": "релевантности",
		"remove": "Удалить",
		"remove_all": "Удалить все",
		"remove_entity": "убрать из поиска",
		"remove_file": "Удалить файл",
		"remove_from_project": "Удалить из проекта",
		"remove_line_breaks": "убрать переносы",
		"remove_page_warning_message": ["Одна страница будет удалена из документа. Во время принятия изменений документ будет закрыт. Вы уверены, что хотите продолжить?", "%d страницы будут удалены из документа. Во время принятия изменений документ будет закрыт. Вы уверены, что хотите продолжить?", "%d страниц будет удалено из документа. Во время принятия изменений документ будет закрыт. Вы уверены, что хотите продолжить?"],
		"remove_pages": "Удалить страницы",
		"remove_pages_click": "Щелкните по тем страницам, которые хотите удалить из документа.",
		"remove_pages_done": "Когда выберете все страницы, которые нужно удалить, щелкните по кнопке \"Удалить страинцы\"",
		"remove_pages_input": ["Удалить страницу", "Удалить %d страницы", "Удалить %d страниц"],
		"removed_from_x_documents": ["Документ из %s удален", "%d документа из %s удалено", "%d документов из %s удалено"],
		"removing": "Удаляю...",
		"reorder_hint": "Перетаскивте страницы, чтобі изменить их порядок.",
		"reorder_pages": "Изменить порядок страниц",
		"reorder_pages_done": "Если расположение страниц вас устраивает, щелкните по кнопке \"Сохранить порядок страниц\". ",
		"reorder_pages_instructions": "Поменять порядок страниц можно перетаскивая их и меняя местами.",
		"replace_multiple_pages": "Заменить страницы между %d и %d",
		"replace_page_x": "Заменить страницу %d",
		"reprocess": "Распознать заново",
		"reprocess_text": "Распознать текст заново",
		"resend_instructions": "Отправить инструкции заново",
		"resend_welcome_email": "Отослать приглашение еще раз",
		"restricted": "Ограниченный",
		"review_x_documents": ["Рецензировать \"%2$s\" с помощью DocumentCloud", "Рецензировать %d документа с помощью DocumentCloud", "Рецензировать %d документов с помощью DocumentCloud"],
		"reviewer": "Рецензент",
		"reviewer_add_permission_denied": "Вы не можете отправлять документы на рецензию",
		"reviewer_email_instructions": ["Отправить инструкции %2$s", "Отправить инструкции %d рецензентам"],
		"reviewer_email_message": "DocumentCloud отправит инструкции рецензентам, если хотите, можете добавить что-то от себя\nDocumentCloud",
		"reviewer_enter_email": "Введите email первого рецензента",
		"reviewer_name": "Укажите имя рецензента",
		"reviewer_remove_error": "При удалении рецензента возникла проблема",
		"reviewer_remove_permission_denied": "Вы не можете удалять рецензентов",
		"reviewing_instructions_multiple_sent_to": "Инструкции по рецензированию %s документов отправлены %s",
		"reviewing_instructions_send_failure": "Инструкции нее были отправлены. Свяжитесь, пожалуйста, со службой поддержки.",
		"reviewing_instructions_single_sent_to": "Инструкции по рецензированию %s отправлены %s",
		"revoke": "Отменить",
		"role_administrator_for_x": "Вы администратор %s",
		"role_contributor_for_x": "Вы пользователь %s",
		"role_freelancer_for_x": "Вы фрилансер для %s",
		"role_reviewer_for_x": "Вы рецензент для %s",
		"save": "Сохранить",
		"save_as_draft": "Сохранить черновик",
		"save_page_order": "Сохранить порядок страниц",
		"save_redactions": "Сохранить правки",
		"save_text": "Сохранить текст",
		"saved": "Сохранено",
		"search": "Поиск",
		"search_bar": "Поле поиска",
		"searching_dd": "Поиск документов и данных",
		"select_pages_remove": "Выберете страницы, которые хотели бы удалить.",
		"select_single_to_embed": "Чтобы создать код для вставки, пожалуйста, выберите документ.",
		"select_single_to_open": "Пожалуйста, выберите документ",
		"select_with_public_note": "Пожалуйста, выберите документ в котором есть хотя бы одна публичная заметка.",
		"send": "Отправить",
		"sending": "Отправляю...",
		"set_access": "Установить уровень доступа",
		"set_publication_date": "Установить дату публикации",
		"set_publication_date_for": "Задать время публикации %s",
		"set_the": "установить",
		"set_will_appear": "появятся в готовом списке.",
		"share_documents": "Поделиться документами",
		"share_project": "Поделиться проектом",
		"share_x_documents": "Отправить на рецензию",
		"shared_with_you_by": "Этим с вами поделился %s",
		"sharing_x_of_x_documents": "Отправляем документы на рецензию: %d из %d",
		"show_all": "Показать все",
		"show_all_x_pages": ["Показать одну страницу", "Показать все %d страницы", "Показать все %d страниц"],
		"show_less": "Показать меньше",
		"show_more": "Показать еще",
		"show_pages": "показать страницы",
		"signup_sent_to": "Информация для входа в систему отправлена %s",
		"sort": "Сортировать",
		"sort_by_date_uploaded": "Упорядочить по дате загрузки",
		"sort_by_length": "Упорядочить по длине",
		"sort_by_relevance": "Упорядочить по релевантности",
		"sort_by_source": "Упорядочить по источнику",
		"sort_by_title": "Упорядочить по имени",
		"sort_documents_by": "Упорядочить",
		"source": "Источник",
		"source_of_document": "Происхождение документа, источник",
		"state": "Штаты",
		"step_x_of_x": "Шаг %d из %d",
		"term": "Условия",
		"terms": "Условия предоставления услуг",
		"text": "Текст",
		"text_reprocess_help": "Вы можете нажать \"Распознать заново\" чтобы попробовать улучшить качество распознанного текста. Нажмите \"Распознать текст, игнорируя ошибки\" чтобы избавиться от некоторых ошибок и провести распознание с помощью Tessaract. Во время проведения операции документ будет закрыт. Вы уверены, что хотите продолжить?",
		"text_tools": "Работа с текстом",
		"the_api": " API системы DocumentCloud",
		"timeline_for_doc": "Временная шкала для \"%s\"",
		"timeline_for_x_docs": "Временная шкала для %d документов",
		"timeline_max_documents": "Временную шкалу можно посмотреть только для не более чем 10 документов.",
		"timeline_must_select": "Чтобы построить временную шкалу, пожалуйста, выберите документы.",
		"timeline_zoom_in": "Выберите диапазон дат, чтобы рассмотреть их ближе",
		"title": "Название",
		"title_of_document": "Название документа",
		"tools_help": "На наших %s  вы можете найти советы по использованию %s и %s.",
		"troubleshooting_uploads": "Решение проблем с документами, которые не удалось загрузить",
		"unpublished": "Не_опубликованный",
		"update_applied_all": "Все файлы будут обновлены.",
		"upload": "Загрузить",
		"upload_document": "Загрузить документ",
		"upload_pages": "Загрузить страницы",
		"uploaded_x_document_has": ["обработка загруженного документа", "обработка %d загруженых документов"],
		"uploaded_x_documents": ["Загружен один документ", "Загружено %d документа", "Загружено %d документов"],
		"uploading": "Идет загрузка",
		"uploading_documents": "Загрузка документов",
		"uservoice_discuss": "Форум DocumentCloud",
		"view_entities": "Показать ключевые слова",
		"view_pages": "Показать страницы",
		"view_timeline": "Показать временную шкалу",
		"welcome_message_sent_to": "Сообщение было отправлено %s.",
		"welcome_to_document_cloud": "Добро пожаловать в DocumentCloud!",
		"width": "Ширина",
		"workspace": "Интерфейс",
		"x_accounts": ["%d аккаунт", "%d аккаунта", "%d аккаунтов"],
		"x_collaborators": ["Один авторизованный пользователь", "%d Авторизованных пользователей"],
		"x_documents": ["%d документ", "%d документа", "%d документов"],
		"x_has_documents": "Документы %s",
		"x_invited_to_review_x": "%s пригласил вас рецензировать %s",
		"x_is_no_longer_a_reviewer_on_x": ["%2$s больше не рецензент этого документа", "%2$s больше не рецензент этих документов"],
		"x_is_not_published": "\"%s\" не опубликован",
		"x_mentions": ["Одно упоминание", "Упоминанется %d раза", "Упоминанется %d раз"],
		"x_notes": ["%d заметка", "%d заметки", "%d заметок"],
		"x_pages": ["%d страница", "%d страницы", "%d страниц"],
		"x_private_documents": ["%d приватный документ", "%d приватных документа", "%d приватных документов"],
		"x_public_documents": ["%d публичный документ,", "%d публичных документа,", "%d публичных документов,"],
		"x_results": "Найдено %d",
		"x_still_processing": "\"%s\" обрабатывается. Подождите.",
		"your_documents": "Ваши Документы",
		"your_organization": "Ваша организация",
		"your_published_documents": "Ваши опубликованные документы",
		"youve_been_added_to_x": "Вы теперь член организации: %s",
		"zoom_out": "Уменьшить"
	}

});