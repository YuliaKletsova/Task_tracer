# task_tracer

## Используемые технологии
* Vue
* Vuex
* Vue Router
* Materialize.css
* LocalStorage

## Создание задачи


Присутствует валидация:
* поле Title обязательное к заполнению
* поле Description позволяет написать 2048 симбволов максимум
* поле Datepicker позволяет выставить дедлайн для задачи
* Данные сохраняются между сессиями

![](create_validation.PNG)

## Список задач
![](list.PNG)

Для списка задач присутствует тривиальная фильтрация по статусу, а также для каждой задачи присутствует динамически создаваемая страница для редактирования.
![](filtered_list.PNG)
![](editing page.PNG)

## Настройка проекта
```
npm install
```

### Запуск для разработки
```
npm run serve
```

### Запуск на продакшен
```
npm run build
```
