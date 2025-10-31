## 🌐 Онлайн демо

**Проект доступен по адресу:** [https://egor17358project.ru/](https://egor17358project.ru/)

---

## Запуск проекта

```
yarn add - устанавливаем зависимости
yarn start:dev или yarn start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

---

## Скрипты

- `yarn start` - Запуск frontend проекта на webpack dev server
- `yarn start:vite` - Запуск frontend проекта на vite
- `yarn start:dev` - Запуск frontend проекта на webpack dev server + backend
- `yarn start:dev:vite` - Запуск frontend проекта на vite + backend
- `yarn start:dev:server` - Запуск backend сервера
- `yarn build:prod` - Сборка в prod режиме
- `yarn build:dev` - Сборка в dev режиме (не минимизирован)
- `yarn lint:ts` - Проверка ts файлов линтером
- `yarn lint:ts:fix` - Исправление ts файлов линтером
- `yarn lint:scss` - Проверка scss файлов style линтером
- `yarn lint:scss:fix` - Исправление scss файлов style линтером
- `yarn test:unit` - Запуск unit тестов с jest
- `yarn test:ui` - Запуск screenshot тестов с loki
- `yarn test:ui:ok` - Подтверждение новых скриншотов
- `yarn test:ui:ci` - Запуск screenshot тестов в CI
- `yarn test:ui:report` - Генерация полного отчета для screenshot тестов
- `yarn test:ui:json` - Генерация json отчета для screenshot тестов
- `yarn test:ui:html` - Генерация HTML отчета для screenshot тестов
- `yarn storybook` - запуск storybook
- `yarn storybook:build` - Сборка storybook build
- `yarn prepare` - pre commit hooks
- `yarn generate:slice` - Скрипт для генерации FSD slice

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `yarn test:unit`
2. Тесты на компоненты с React testing library -`yarn test:unit`
3. Screenshot тестирование с loki `yarn test:ui`
4. e2e тестирование с Cypress `yarn test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

---

## Linting

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-my-plugin-test-for-me_,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entities)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

- `yarn lint:ts` - Проверка ts файлов линтером
- `yarn lint:ts:fix` - Исправление ts файлов линтером
- `yarn lint:scss` - Проверка scss файлов style линтером
- `yarn lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются stories.
Запросы на сервер мокаются с помощью msw-storybook-addon.

Файл со stories создает рядом с компонентом с расширением .stories.tsx

Запустить storybook можно командой:

- `yarn storybook`

Подробнее о [Storybook](/docs/storybook.md)

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для refactoring/упрощения написания кода/генерации отчетов и тд.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и storybook, linting.

В pre commit хуках проверяем проект линтерами, конфигурация находится в /.husky

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения reducers (чтобы не тянуть их в общий bundle) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

### Работа с feature-flags

Разрешено использование feature flags только с помощью хелпера toggleFeatures

в него передается объект с опциями

{
name: название фича-флага,
on: функция, которая отработает после Включения фичи
off: функция, которая отработает после ВЫключения фичи
}

Для автоматического удаления фичи использовать скрипт remove-feature.ts,
который принимает 2 аргумента

1. Название удаляемого фича-флага
2. Состояние (on\off)

---

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
