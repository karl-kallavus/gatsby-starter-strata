import React from 'react'

const Descriptions = [
  <>
    <h2>Занятие 1: Краткое введение в Wordpress</h2>
    <ul key="1">
      <li>Краткое введение</li>
      <li>Что такое WordPress?</li>
      <li>Альтернативы WordPress в 2020</li>
      <li>Почему WordPress это самый популярный инструмент для веба в мире?</li>
      <li>WordPress тур и разные версии</li>
      <li>WordPress.org или WordPress.com? </li>
      <li>Как установить WordPress за 5 минут </li>
      <li>Другие методы установки </li>
      <li>Домашнее задание 1: Найти вдохновение</li>
    </ul>
  </>,
  <>
    <h2>Занятие 2: Погружаемся в технические моменты</h2>
    <ul key="2">
      <li>Требования к хостингу</li>
      <li>Что такое PHP?</li>
      <li>MySQL или MariaDB?</li>
      <li>Подробный список официальных требований?</li>
      <li>Доступ по FTP и FTP клиент?</li>
      <li>Редактор, Notepad, VSCode или Sublime text?</li>
      <li>Выбор браузера. В чем разница между ними?</li>
      <li>Загрузка WordPress на сервер используя FTP</li>
      <li>Создаем MySQL базу данных и пользователя user</li>
      <li>Настраиваем WordPress на работу с базой данных</li>
      <li>Завершаем установку и настройку нового сайта </li>
      <li>Домашнее задание 2: Установка WordPress</li>
    </ul>
  </>,
  <>
    <h2>Занятие 3: Посты и Страницы</h2>
    <ul key="3">
      <li>Обзор WordPress Dashboard</li>
      <li>Посты и Страницы</li>
      <li>Создаем модульную сетку страницы</li>
      <li>Делаем пост в блог</li>
      <li>Создаем продвинутую сетку</li>
      <li>Используем колонки</li>
      <li>Переиспользование блоков</li>
      <li>Значимые блоки</li>
      <li>Редактируем сайт через Gutenberg</li>
      <li>Контент нашего сайта</li>
      <li>Находим нужную тему</li>
      <li>Почему премиум темы?</li>
      <li>Делаем домашнюю страницу</li>
      <li>Как включить автоматическую проверку перед публикацией</li>
      <li>Домашнее задание 3: Делаем собственный сайт</li>
    </ul>
  </>,
  <>
    <h2>Занятие 4: Настраиваем и редактируем страницы нашего сайта</h2>
    <ul key="4">
      <li>Новый пост в WordPress</li>
      <li>Текст и заголовки</li>
      <li>Меняем текст и цвет фона</li>
      <li>Добавление фото</li>
      <li>Ссылки</li>
      <li>Быстрое добавление ссылок</li>
      <li>Создаем кнопки</li>
      <li>PDF файлы и другие типы файлов</li>
      <li>Кнопка скачать для файлов</li>
      <li>Видео блок</li>
      <li>Аудио блок</li>
      <li>Настраиваем размер и внешний вид видео и аудио файлов</li>
      <li>Немедленная публикация постов и страниц на сайт</li>
      <li>Закрытые или защищенные паролем страницы и посты</li>
      <li>Добавляем обсуждения и комментарии на страницы</li>
      <li>
        Используем All Pages для редактирования или удаления всех страниц, что
        создали
      </li>
      <li>Домашнее задание 4: Создаем свой контент</li>
    </ul>
  </>,
  <>
    <h2>Занятие 5: Виджеты и темы</h2>
    <ul key="5">
      <li>Навигация по сайту и почему это важно</li>
      <li>Добавляем страницы, посты и категории в меню</li>
      <li>Ссылки на соц сети</li>
      <li>Что такое виджеты в WordPress</li>
      <li>Добавляем виджеты</li>
      <li>Перемещаем посты из блога на отдельные страницы</li>
      <li>Новые темы</li>
      <li>Логотип и иконка сайта</li>
      <li>Цвета, используемые на сайте</li>
      <li>Свой CSS чтобы редактировать цвета, сетку или типографию</li>
      <li>Превью изменения для десктопа, планшета или мобильного устройства</li>
      <li>Совместные доступ к изменениям в дизайне перед обновлением сайта</li>
      <li>
        Автоматическое обновление дизайна к конкретной дате и времени в будущем
      </li>
      <li>Новый темы</li>
      <li>Как поменять темы</li>
      <li>Как узнать как будет выглядеть сайт с новой темой</li>
      <li>Как загрузить купленную тему</li>
      <li>Домашнее задание 5: Настраиваем сайт</li>
    </ul>
  </>,
  <>
    <ul key="6">
      <li>Контент сайта</li>
      <li>Углубление: как подобрать тему</li>
      <li>Углубление: делаем домашнюю страницу</li>
      <li>Страница “О нас”</li>
      <li>Портфолио</li>
      <li>Страница “Контакты”</li>
      <li>Блог</li>
      <li>Боковое меню</li>
      <li>Настраиваем форму “Обратная связь”</li>
      <li>Добавляем Google карты</li>
      <li>Домашнее задание 6: Доводим форму обратной связи до блеска</li>
    </ul>
  </>,
  <>
    <ul key="7">
      <li>Что такое WordPress плагины и что они делают</li>
      <li>Как найти и установить новый плагин</li>
      <li>Полезные плагины для каждого сайта</li>
      <li>Устанавливаем популярные плагины</li>
      <li>Введение в WooCommerce</li>
      <li>Установка WooCommerce</li>
      <li>Настраиваем платежи</li>
      <li>Создание простого продукты</li>
      <li>Создание более сложного продукта</li>
      <li>Создание продукты, который можно скачать</li>
      <li>Запускаем магазин</li>
      <li>Заказы и отчеты</li>
      <li>Дальнейшие шаги по WooCommerce</li>
      <li>Домашнее задание 7: Настраиваем плагины</li>
    </ul>
  </>,
  <>
    <ul key="8">
      <li>Делаем формы через плагин</li>
      <li>Что такое “отправка формы”</li>
      <li>Отправление email по запросу</li>
      <li>Добавляем форму</li>
      <li>Глубокая настройка, сетка в несколько колонок и стилизация форм</li>
      <li>Формы из нескольких частей</li>
      <li>
        Условия и логика интерактивных форм на основе действий пользователя
      </li>
      <li>Загрузка файлов</li>
      <li>
        Используем Zapier с Ninja Forms чтобы соединить формы со сторонними
        сервисами
      </li>
      <li>Платежи через PayPal Expres или Stripe в Ninja Forms</li>
      <li>Регистрация и рассылка email через MailChimp</li>
      <li>subscription</li>
      <li>Домашнее задание 8: Формы</li>
    </ul>
  </>,
  <>
    <ul key="9">
      <li>Что такое SEО?</li>
      <li>Ключевые слова</li>
      <li>Аналитика страницы</li>
      <li>“Читабельность”</li>
      <li>Заголовки и настройка мета информации</li>
      <li>Настройки social</li>
      <li>XML карта сайта</li>
      <li>“Хлебные крошки”</li>
      <li>Настройки ссылок</li>
      <li>Настройки RSS</li>
      <li>Управляем редиректами</li>
      <li>Инструменты Google Webmaster</li>
      <li>Домашнее задание 9: SEO</li>
    </ul>
  </>,
  <>
    <ul key="10">
      <li>Обновления ядра WordPress</li>
      <li>Обновления плагинов и тем</li>
      <li>Управляем несколькими сайтами</li>
      <li>Хостинг и обновления безопасности для сторонних сервисов</li>
      <li>Плагины безопасности и мониторинга</li>
      <li>Бэкапы и резервное восстановление </li>
      <li>Используем https:// и SSL сертификаты</li>
      <li>Плагины безопасности</li>
      <li>Домашнее задание 10: Настраиваем безопасность</li>
    </ul>
  </>,
  <>
    <ul key="11">
      <li>Продвинутые сетки с Beaver</li>
      <li>Как измерить скорость сайта</li>
      <li>Как внешний контент замедляем сайт</li>
      <li>Делаем свои темы</li>
      <li>Google Аналитика</li>
      <li>Домашнее задание 11: Продвинутый функционал</li>
    </ul>
  </>,
  <>
    <ul key="12">
      <li>Вопросы и ответы</li>
      <li>Дизайн и UI ревью</li>
      <li>Индивидуальная обратная связь</li>
      <li>Дальнейшие шаги и улучшения</li>
    </ul>
  </>,
]

const DayDescriptions = ({ index }) => {
  return Descriptions[index]
}

export default DayDescriptions
