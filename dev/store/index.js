const state = {
    phone: "695449091",
}

const getters = {
    phone: state => state.phone
}

const mutations = {
    UPDATE_PHONE(state, payload) {
        state.phone = payload
    }
}

const actions = {
    update_phone({
        commit
    }, data) {
        commit("UPDATE_PHONE", data)
    }
}

const phoneModule = {
    state,
    mutations,
    actions,
    getters
}

export default phoneModule;