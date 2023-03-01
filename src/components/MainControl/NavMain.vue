<template>
    <nav class="nav">
        <div
            class="nav__item"
            v-for="navItem in navItems"
            :key="navItem.id"
            :class="{ active: navItem.isActive }"
        >
            <div class="nav__inner" @click="changeRoute(navItem.routerLink)">
                <div class="nav__icon">
                    <span v-html="navItem.icon"></span>
                </div>
                <div
                    class="nav__text nav__text--center"
                    :class="{ nav__text__noicon: navItem.icon === '' }"
                >
                    {{ navItem.text }}
                </div>
                <div
                    class="nav__notification"
                    :class="{ active: navItem.isNotification }"
                >
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
            </div>
            <div class="subnav">
                <div
                    class="subnav__item"
                    v-for="subItem in navItem.subItems"
                    :key="subItem.id"
                    @click="changeRoute(subItem.routerLink)"
                >
                    {{ subItem.text }}
                </div>
            </div>
        </div>
    </nav>
    <!--/nav-->
</template>

<script>
import { navItems } from "./navProps";

export default {
    name: "NavMain",
    data() {
        return {
            navItems,
        };
    },
    computed: {
        navActive(isActive) {
            if (isActive) {
                return "active";
            } else {
                return "";
            }
        },
        currentRoute() {
            return this.$store.getters.getCurrentRoute;
        },
    },
    watch: {
        currentRoute(newCurrentRoute) {
            this.setActive(
                this.navItems.find((x) => x.routerLink === newCurrentRoute).id
            );
        },
    },
    methods: {
        setActive(num) {
            this.navItems.forEach((x) => (x.isActive = false));
            this.navItems[num].isActive = true;
        },
        changeRoute(link) {
            this.$store.commit("setRoute", link);
            this.$router.push(link);
        },
    },
    mounted() {
        this.navItems.forEach((x) => {
            if (window.location.href.includes(x.routerLink)) {
                this.setActive(x.id);
            }
        });
    },
};
</script>

<style scoped>
/* nav */
.nav {
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: row;
}

.nav__item {
    background-color: white;

    width: 100%;
    min-width: 150px;

    position: relative;

    border-top: 2px solid black;
    border-left: 2px solid black;

    transition: background-color 0.1s linear;

    color: #656569;
    text-decoration: none;
}

.nav__item:last-child {
    border-right: 2px solid black;
}

.nav__item:hover {
    background-color: #d7d9f4;
    user-select: none;
}

.nav__item:hover .subnav {
    transform: translate(0, -30px);
}

.nav__item.active {
    background-color: #d7d9f4;
}

.nav__inner {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.nav__text {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    text-decoration: none;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;

    padding-left: 40px;
}

.nav__text__noicon {
    padding-left: 10px;
}

.nav__text--center {
    padding-left: 0;
    width: 100%;
    text-align: center;
}

.nav__icon {
    color: rgb(93, 163, 255);

    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    margin-left: 10px;
    font-size: 20px;
}

.nav__notification {
    display: none;
    position: absolute;
    color: red;
    z-index: 100;
    bottom: 13px;
    right: 5px;
    font-size: 18px;
}

.nav__notification.active {
    display: block;
}

/* subnav */
.subnav {
    display: flex;
    flex-direction: row;

    position: absolute;
    top: 0px;
    left: -2px;

    z-index: -1;

    transition: transform 0.2s linear;
}

.subnav__item {
    padding: 5px 20px;
    text-align: center;
    text-decoration: none;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;

    border-top: 2px solid black;
    border-left: 2px solid black;
    border-bottom: 2px solid black;

    background-color: white;
}

.subnav__item:last-child {
    border-right: 2px solid black;
}

.subnav__item:hover {
    background-color: #d7d9f4;
}
</style>
