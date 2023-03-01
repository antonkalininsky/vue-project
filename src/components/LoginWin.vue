<template>
    <div class="intro">
        <header>
            <h1 class="intro__header">Добро пожаловать в КОД ЦД</h1>
        </header>

        <div class="login-box">
            <div class="login__container">
                <h2 class="login__header">Войдите в систему</h2>
                <form class="form" action="">
                    <label class="form__item label" for="">Логин</label>
                    <input class="form__item input" type="text" /><br />
                    <label class="form__item label" for="">Пароль</label>
                    <input class="form__item input" type="password" /><br />
                    <input
                        class="form__item input input--btn"
                        type="button"
                        value="Войти"
                        @click="changeRoute('/user')"
                    />
                </form>
                <a class="pass-help" href="#">Забыли пароль?</a>
            </div>
            <!--/login__container-->
        </div>
        <!--/login-box-->
    </div>
    <!--/intro-->
</template>
<script>
export default {
    name: "LoginWin",
    methods: {
        changeRoute(link) {
            this.$store.commit("setRoute", link);
            this.$router.push(link);
        },
    },
};
</script>
<style scoped>
h1,
h2,
h3,
h4,
h5 {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}

/* intro */
.intro {
    display: block;
    width: 420px;
    margin: 100px auto 0px auto;
}

.login__container {
    width: 370px;
    margin: 0 auto;
    padding-top: 40px;
}

.intro__header {
    margin-bottom: 30px;
    text-align: center;
    color: #000;
    font-size: 28px;
}

.login-box {
    position: relative;
    width: inherit;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 5px #000;
}

.login__header {
    color: rgb(52, 140, 255);
    font-size: 16px;
    margin-bottom: 25px;
    text-transform: uppercase;
}

.label {
    display: block;
    color: #666;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    margin-bottom: 5px;
}

.input {
    background-color: #ddd;
    outline: none;
    border: none;
    box-shadow: none;
    font-size: 20px;
    width: 100%;
    margin-bottom: 10px;
    height: 30px;
    border-radius: 3px;
}

.input--btn {
    margin: 30px 0;
    background-color: rgb(52, 140, 255);
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 14px;
    cursor: pointer;
}

.input--btn:hover {
    background-color: rgb(39, 112, 207);
}

.input--btn:active {
    border-top: 3px solid rgb(0, 60, 139);
}

.pass-help {
    position: absolute;
    left: 25px;
    bottom: 70px;
    text-decoration: none;
    color: rgb(20, 94, 192);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
}

.pass-help:hover {
    text-decoration: underline;
}
</style>
