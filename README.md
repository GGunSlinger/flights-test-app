для запуска приложения
yarn install или npm install
yarn start или npm start

ответы на вопросы прилогающиеся к тз

1) "==" производит сравнение по значению, но не по типу, строгое сравнение "===" производит сравнение по значению и типу.
2) scope это внутренее свойство функции, оно содержит ссылку на область видимости, в которой функция была объявлена.
3) let используется когда нужно изменить значение переменой, const используется когда переменную не нужно изменять.
4) Прототип это хранилище свойств и методов объекта. При чтении свойства из объекта, если его в нём нет, оно ищется в __proto__.
5) Значение this вычесляется во время выполнения кода и зависит от контекста. "this" внутри функции является ссылкой на объект, который указан "перед точкой".
6) При обычном присваивание объекта переменой мы получим только ссылку на объект, для неглубокого клонирования можно использовать Object.assign({}, obj), {...obj) .
 Для глубокого клонирования можно написать свою функцию, воспльзоваться библиотеками jquery,lodash или JSON.parse/stringify последний метод самый простой в написании, но он копирует только определенные типы данных и медленнее всех остальных вариантов.
7) XMLHttpRequest – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы. У которого есть методы (GET, POST, PUT, DELETE), существуют синхронные и асинхронные запросы, так же можно слушать события.
8) cookie это данные например refresh token для авторизации, настройки пользователя и другие данные, которые хранятся в браузере, cookie менее уязвимы к XSS атакам нежели localStorage из нативного JS, т.к можно сделать флаг для cookie httOnly и он запретит доступ через JS
9) padding это внутренний отступ внутри контейнера, а margin внешний.
10) Сессия это состояние пользователя которое сохраняется после авторизации, для дальнейшего взаимодействия с сайтом/приложением.
11) Сначало осуществляется TCP/IP-соединение до сервера, после чего отправиться HTTP запрос например с URI есть и другие протоколы прикладного уровня. URI вклюающий в себя URL адрес ресурса и URN имя ресурса, делая запрос с методом GET мы получаем ответ в котором есть версия протокола, код состояния если подключение успешное то это будет код 200, пояснение к коду состояния для читабильности его человеком, также нам вернётся HTML документ.
