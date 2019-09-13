"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getModuleOverrides(defaults, overrides = {}) {
    return {
        namespaced: true,
        state: defaults.state,
        getters: Object.assign({}, defaults.getters, overrides.getters),
        mutations: Object.assign({}, defaults.mutations, overrides.mutations),
        actions: Object.assign({}, defaults.actions, overrides.actions),
    };
}
function assertOverride(defaultValue, override, message) {
    const defaultKeys = Object.keys(defaultValue);
    if (override &&
        Object.keys(override).every((m) => { return defaultKeys.indexOf(m) !== -1; }) === false) {
        throw new Error(`${message} Valid options: ${defaultKeys.join(', ')}`);
    }
}
/**
 * Overrides a store instance's individual properties
 * In contrast to real hotUpdate() this can replace parts of modules
 * cf. https://vuex.vuejs.org/guide/hot-reload.html
 */
function hotUpdateDeep(store, overrides) {
    const storeModules = store._modules.root._children;
    assertOverride(storeModules, overrides.modules, 'You are trying to override parts of a module that does not exist.');
    const storeOptions = {
        ...getModuleOverrides(store._modules.root._rawModule, overrides),
        modules: {},
    };
    Object.entries(storeModules).forEach(([moduleName, module]) => {
        storeOptions.modules[moduleName] = getModuleOverrides(module._rawModule, overrides.modules ? overrides.modules[moduleName] : undefined);
    });
    store.hotUpdate(storeOptions);
    return store;
}
exports.default = hotUpdateDeep;
