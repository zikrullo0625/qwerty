<template>
    <div v-show="this.page === 1">
    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
               <img src="../../logo.png">
            </a>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" class="nav-link px-2 link-dark">Главная</a></li>
                <li><a href="#1" class="nav-link px-2 link-dark">О нас</a></li>
                <li><a href="#2" class="nav-link px-2 link-dark">Вопросы</a></li>
                <li><a href="#4" class="nav-link px-2 link-dark">Контакты</a></li>
            </ul>

            <div class="col-md-3 text-end">
                <button type="button" class="btn btn-primary" @click="openModal">Оставить заявку</button>
            </div>
        </header>
    </div>

    <div class="container content">
        <div class="row align-items-center">
            <div class="col-md-8">
                <h1 class="mb-0" style="background-color: #0B5ED7; color: white; display: inline-block;">Создание веб-сайтов</h1>
                <h1 class="mt-0">на Laravel и Vue.js</h1>
                <p>Разработка сайтов любой сложности под ключ на Laravel и Vue.js</p>
            </div>
            <div class="logo col-md-4 d-flex justify-content-end"><img src="../../working1.png"></div>
        </div>
    </div>
    <div class="content2" id="1">
        <div class="container content">
            <div class="row justify-content-center text-center py-5">
                <div class="col-md-4">
                    <h2 style="color: #0B5ED7;">Удобство</h2>
                    <p>Создаём сайты с простым и удобным интерфейсом, чтобы ваши клиенты могли легко находить нужную информацию и совершать действия.</p>
                </div>
                <div class="col-md-4">
                    <h2 style="color: #0B5ED7;">Скорость</h2>
                    <p>Оптимизируем сайты для максимальной скорости загрузки, обеспечивая мгновенный доступ к вашему контенту и улучшая пользовательский опыт.</p>
                </div>
                <div class="col-md-4">
                    <h2 style="color: #0B5ED7;">Безопасность</h2>
                    <p>Гарантируем высокую безопасность сайтов с использованием передовых технологий, чтобы защитить ваши данные и данные ваших клиентов.</p>
                </div>
            </div>
            <div class="row justify-content-center text-center py-5">
                <div class="col-md-4">
                    <h2 style="color: #0B5ED7;">Гибкость</h2>
                    <p>Предлагаем адаптивные решения, которые отлично работают на любых устройствах, от смартфонов до настольных компьютеров.</p>
                </div>
                <div class="col-md-4">
                    <h2 style="color: #0B5ED7;">Поддержка</h2>
                    <p>Оказываем полную техническую поддержку на всех этапах разработки и после запуска сайта, чтобы ваш бизнес всегда оставался онлайн.</p>
                </div>
                <div class="col-md-4">
                    <h2 style="color: #0B5ED7;">Оптимизация</h2>
                    <p>Создаём сайты, которые легко продвигаются в поисковых системах, обеспечивая увеличение посещаемости и привлечение новых клиентов.</p>
                </div>
            </div>
        </div>
    </div>
        <div class="content3">
            <div class="container content my-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card d-flex align-items-center justify-content-center text-center" style="border-radius: 15px; border: 2px solid #0B5ED7;">
                            <div class="card-body">
                                <h3 class="card-title" style="color: #0B5ED7;">Платформа, Сервис, Система</h3>
                                <p class="card-text">Вариант для сайтов с необычным функционалом и крупных проектов. То, что вы хотите воплотить в реальность, но ни одна из наших услуг вам не подходит — тогда это именно ваш пакет.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content4" id="2">
        <div class="container content my-5">
            <div class="row">
                <div class="col-md-7">
                    <h2>Создание веб-сайтов любой сложности</h2>
                    <p>Faridun Company предоставляет услуги по созданию и продвижению динамичных веб-сайтов. Сотрудничать с нами выгодно и просто. Развивайте свой бизнес с помощью продающих веб-сайтов от Faridun Company.</p>
                </div>
                <div class="col-md-5">
                    <div>
                        <div v-for="(item, index) in faqItems" :key="index" class="card mb-3">
                            <div class="card-header">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" @click="toggle(index)">
                                        {{ item.question }}
                                    </button>
                                </h5>
                            </div>
                            <div v-if="openIndex === index" class="collapse show">
                                <div class="card-body">
                                    {{ item.answer }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content5">
    <div class="content6" id="3" style="margin-top: 30px">
        <div class="container content my-5">
            <div class="row align-items-center">
                <!-- Левая часть с фотографией -->
                <div class="col-md-6">
                    <img src="../../working2.png">
                </div>

                <!-- Правая часть с заголовком и формой -->
                <div class="col-md-6">
                    <h1 class="mb-4">Есть вопросы?</h1>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input v-model="email" type="email" class="form-control" id="email" placeholder="Введите ваш email" required>
                        </div>
                        <div class="form-group mt-3">
                            <label for="phone">Номер телефона</label>
                            <input v-model="phone" type="tel" class="form-control" id="phone" placeholder="Введите ваш номер телефона" required>
                        </div>
                        <button @click="submitForm()" class="btn btn-primary mt-4">Отправить</button>
                </div>
            </div>
        </div>

    </div>
    </div>
        <div class="container text-center mt-5" id="4">
            <!-- Заголовок -->
            <h1 class="mb-4">Наши контакты</h1>

            <!-- Карточка с реквизитами -->
            <div class="card mx-auto" style="max-width: 600px; margin-bottom: 50px">
                <div class="card-body">

                    <ul class="list-unstyled">
                        <li class="contact-item">
                            <i class="bi bi-telephone-fill contact-icon"></i>
                            <strong>Телефон:</strong> +123 456 7890
                        </li>
                        <li class="contact-item">
                            <i class="bi bi-envelope-fill contact-icon"></i>
                            <strong>Email:</strong> info@fariduncompany.com
                        </li>
                        <li class="contact-item">
                            <i class="bi bi-telegram contact-icon"></i>
                            <strong>Telegram:</strong> @fariduncompany
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    <footer class="bg-dark text-white p-3 footer">
        <div class="container text-center ft">
            <p>&copy; 2024 Faridun Company. Все права защищены.</p>
        </div>
    </footer>
    <div v-if="showModal" class="modal fade show d-block" tabindex="-1" aria-labelledby="requestModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="requestModalLabel">Оставить заявку</h5>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" v-model="email" placeholder="Введите ваш email" required>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Номер телефона</label>
                            <input type="tel" class="form-control" id="phone" v-model="phone" placeholder="Введите ваш номер телефона" required>
                        </div>
                        <button @click="submitForm()" class="btn btn-primary w-100">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Затемнение экрана -->
        <div class="modal-backdrop fade show"></div>

    </div>
    <div v-show="this.page === 2" class="p2">
        <button @click="this.page = 1" class="btn btn-primary arrow-btn">
            <i class="bi bi-arrow-left"></i>
        </button>
        <div class="d-flex justify-content-center align-items-center vh-100 text-center dff">
            <div>
                <!-- Логотип -->
                <div class="logo2 mx-auto mb-4"></div>

                <!-- Заголовок -->
                <h1 class="mb-3">Заявка отправлена</h1>

                <!-- Описание -->
                <p class="lead">Мы свяжемся с вами в кратчайшие сроки.</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            page: 1,
            showModal: false,
            email: '',
            phone: '',
            openIndex: null,
            faqItems: [
                {
                    question: "Какого рода сайты мы делаем?",
                    answer: "Faridun Company создает сайты любой сложности, от одностраничных сайтов до коммерческих сайтов с уникальным дизайном, успешно продвигающих ваш бизнес."
                },
                {
                    question: "Какие технологии мы используем?",
                    answer: "Мы используем современные технологии, такие как Laravel, Vue.js и другие, чтобы обеспечить высочайшее качество и функциональность ваших проектов."
                },
                {
                    question: "Как долго длится разработка?",
                    answer: "Время разработки зависит от сложности проекта, но мы всегда стремимся выполнить работу в кратчайшие сроки, обеспечивая при этом высокое качество."
                }
            ]
        };
    },
    methods: {
        toggle(index) {
            this.openIndex = this.openIndex === index ? null : index;
        },
        openModal() {
            this.showModal = true;
            document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы
        },
        closeModal() {
            this.showModal = false;
            document.body.style.overflow = ''; // Восстанавливает прокрутку страницы
        },
        submitForm() {
            const bot_token = '7379049727:AAGFGmZC7C83SAvqytFdPbd4Iz8ieLfwGE8';
            const chat_id = '-4588092437';
            const message_text = `Email: ${this.email}, Phone: ${this.phone}`;

            axios.post(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
                chat_id: chat_id,
                text: message_text
            })
                .then(response => {
                    console.log('Message sent:', response.data);

                })
                .catch(error => {
                    console.error('Error sending message:', error);
                });
            this.page = 2;
        }
    }
};
</script>

<style>
.modal {
    z-index: 1050; /* Высокий z-index для модального окна */
}

.modal-dialog {
    z-index: 1060; /* Ещё выше для диалога */
}

.modal-content {
    z-index: 1070; /* Самое высокое значение для содержимого */
}
.logo2 {
    width: 250px;
    height: 250px;
    background-image: url('../../send.png');
    background-size: cover;
    background-position: center;
}
.arrow-btn {
    font-size: 24px; /* Размер стрелки */
    padding: 10px 15px;
    border-radius: 50%;
    border: none;
    color: white;
}

.arrow-btn:hover {
    background-color: #094aad; /* Цвет кнопки при наведении */
}
/* Стиль для затемнения экрана */
.modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1040; /* Ниже, чем модальное окно */
}

.ft{
    margin-top: 20px;
}
.content6{
    margin-top: -100px;
}
/* Основные стили */
h1 {
    font-size: 48px; /* Увеличенный размер заголовка */
    color: #0B5ED7; /* Цвет заголовка */
    margin-bottom: 40px;
}

.card {
    border: none; /* Убираем границу */
    border-radius: 15px; /* Закругленные углы */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Увеличенная тень */
    padding: 20px;
    background-color: #f8f9fa; /* Светлый фон карточки */
}

.card-title {
    font-size: 32px; /* Увеличенный размер заголовка карточки */
    color: #0B5ED7; /* Цвет заголовка карточки */
}

.list-unstyled {
    padding-left: 0;
}

.contact-item {
    font-size: 20px; /* Увеличенный размер шрифта для списка */
    margin-bottom: 15px;
}

.contact-icon {
    font-size: 30px; /* Размер иконок */
    margin-right: 15px; /* Отступ между иконкой и текстом */
    color: #0B5ED7; /* Цвет иконок */
}
.content4{
    margin-top: 100px;
}
.content h1{
    font-size: 50px;
}
.content p{
    font-size: 20px;
}
.p2{
    overflow: hidden;
}
footer {
    background-color: #f8f9fa;
}
</style>
