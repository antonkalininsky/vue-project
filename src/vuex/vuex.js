import { createStore } from "vuex";
import * as plantsData from "@/data/plantsData.json";
import * as prodData from '@/data/prodData.json'
import { plantsSettings } from "@/vuex/plantsSettings";
import { plantsNames } from "./plantsNames";
import { stateNames } from "./stateNames";
import { prodStateNames } from "./prodStateNames";
import { resSettings } from "./resSettings";

export const store = createStore({
    state() {
        return {
            plantsNames,
            stateNames,
            plantsSettings,
            prodStateNames,
            resSettings,

            plantsData,
            prodData,
            currentMode: 0,
            currentRoute: '/',
            time: 0,
            timeLimit: 8630,
            timeStepSize: 1000
        }
    },
    mutations: {
        setMode(state, num) {
            state.currentMode = num;
        },
        setRoute(state, route) {
            state.currentRoute = route;
        },
        setTime(state, time) {
            state.time = time;
        },
        setTimeStepSize(state, size) {
            state.timeStepSize = size;
        },
        incrementTime(state, val) {
            state.time = state.time + parseInt(val);
            if (state.time >= state.timeLimit) {
                state.time = 0;
            } else if (state.time < 0) {
                state.time = state.timeLimit - 1;
            }
        }
    },
    getters: {
        getCurrentMode(state) {
            return state.currentMode
        },
        getCurrentRoute(state) {
            return state.currentRoute
        },
        getTime(state) {
            return state.time
        },
        getTimeLimit(state) {
            return state.timeLimit
        },
        getCurrentData(state) {
            return Array.from(state.plantsData).filter(x => x.time <= state.time).at(-1).data
        },
        getCurrentProd(state) {
            return Array.from(state.prodData).filter(x => x.creationMoment <= state.time)
        },
        getProdHeaders(state) {
            return state.prodData.headers
        },
        getPlantsNames(state) {
            return state.plantsNames
        },
        getStateNames(state) {
            return state.stateNames
        },
        getPlantsSetting(state) {
            return state.plantsSettings
        },
        getProdStateNames(state) {
            return state.prodStateNames
        },
        getPlantsData(state) {
            return state.plantsData
        },
        getResMap(state) {
            return state.resSettings
        },
        getProdData(state) {
            return state.prodData
        }
    },
    actions: {
        timeRunner({ commit }) {
            setInterval(() => {
                if (this.state.currentMode === 0) {
                    commit('incrementTime', 1)
                }
            }, this.state.timeStepSize)
        }
    }
})