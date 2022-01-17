"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
function newMockStore({ commit, dispatch, state, getters, rootState, rootGetters }) {
    return {
        commit: commit || jest.fn(),
        dispatch: dispatch || jest.fn(() => Promise.resolve()),
        state: state || {},
        getters: getters || {},
        rootState: rootState || {},
        rootGetters: rootGetters || {},
    };
}
exports.default = newMockStore;
