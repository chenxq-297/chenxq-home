var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var require_index_001 = __commonJS({
  "assets/index-878ac162.js"(exports) {
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload")
              processPreload(node);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
          fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
          fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous")
          fetchOpts.credentials = "omit";
        else
          fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
      const handleEvent = (event2) => {
        const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event2);
        if (checkForDefaultPrevented === false || !shouldPrevent) {
          return oursHandler == null ? void 0 : oursHandler(event2);
        }
      };
      return handleEvent;
    };
    /**
    * @vue/shared v3.4.19
    * (c) 2018-present Yuxi (Evan) You and Vue contributors
    * @license MIT
    **/
    function makeMap(str, expectsLowerCase) {
      const set2 = new Set(str.split(","));
      return expectsLowerCase ? (val) => set2.has(val.toLowerCase()) : (val) => set2.has(val);
    }
    const EMPTY_OBJ = {};
    const EMPTY_ARR = [];
    const NOOP = () => {
    };
    const NO = () => false;
    const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
    const isModelListener = (key) => key.startsWith("onUpdate:");
    const extend$3 = Object.assign;
    const remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
        arr.splice(i, 1);
      }
    };
    const hasOwnProperty$5 = Object.prototype.hasOwnProperty;
    const hasOwn = (val, key) => hasOwnProperty$5.call(val, key);
    const isArray$2 = Array.isArray;
    const isMap = (val) => toTypeString(val) === "[object Map]";
    const isSet = (val) => toTypeString(val) === "[object Set]";
    const isDate = (val) => toTypeString(val) === "[object Date]";
    const isFunction$1 = (val) => typeof val === "function";
    const isString$1 = (val) => typeof val === "string";
    const isSymbol$1 = (val) => typeof val === "symbol";
    const isObject$5 = (val) => val !== null && typeof val === "object";
    const isPromise = (val) => {
      return (isObject$5(val) || isFunction$1(val)) && isFunction$1(val.then) && isFunction$1(val.catch);
    };
    const objectToString$1 = Object.prototype.toString;
    const toTypeString = (value) => objectToString$1.call(value);
    const toRawType = (value) => {
      return toTypeString(value).slice(8, -1);
    };
    const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
    const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
    const isReservedProp = /* @__PURE__ */ makeMap(
      // the leading comma is intentional so empty string "" is also included
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    );
    const cacheStringFunction = (fn2) => {
      const cache = /* @__PURE__ */ Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn2(str));
      };
    };
    const camelizeRE = /-(\w)/g;
    const camelize = cacheStringFunction((str) => {
      return str.replace(camelizeRE, (_, c2) => c2 ? c2.toUpperCase() : "");
    });
    const hyphenateRE = /\B([A-Z])/g;
    const hyphenate = cacheStringFunction(
      (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
    );
    const capitalize = cacheStringFunction((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    const toHandlerKey = cacheStringFunction((str) => {
      const s = str ? `on${capitalize(str)}` : ``;
      return s;
    });
    const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
    const invokeArrayFns = (fns, arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
      }
    };
    const def = (obj, key, value) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
      });
    };
    const looseToNumber = (val) => {
      const n = parseFloat(val);
      return isNaN(n) ? val : n;
    };
    const toNumber$1 = (val) => {
      const n = isString$1(val) ? Number(val) : NaN;
      return isNaN(n) ? val : n;
    };
    let _globalThis;
    const getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    };
    function normalizeStyle(value) {
      if (isArray$2(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
          const item = value[i];
          const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
          if (normalized) {
            for (const key in normalized) {
              res[key] = normalized[key];
            }
          }
        }
        return res;
      } else if (isString$1(value) || isObject$5(value)) {
        return value;
      }
    }
    const listDelimiterRE = /;(?![^(]*\))/g;
    const propertyDelimiterRE = /:([^]+)/;
    const styleCommentRE = /\/\*[^]*?\*\//g;
    function parseStringStyle(cssText) {
      const ret = {};
      cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
        if (item) {
          const tmp = item.split(propertyDelimiterRE);
          tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return ret;
    }
    function normalizeClass(value) {
      let res = "";
      if (isString$1(value)) {
        res = value;
      } else if (isArray$2(value)) {
        for (let i = 0; i < value.length; i++) {
          const normalized = normalizeClass(value[i]);
          if (normalized) {
            res += normalized + " ";
          }
        }
      } else if (isObject$5(value)) {
        for (const name2 in value) {
          if (value[name2]) {
            res += name2 + " ";
          }
        }
      }
      return res.trim();
    }
    const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
    const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
    function includeBooleanAttr(value) {
      return !!value || value === "";
    }
    function looseCompareArrays(a, b) {
      if (a.length !== b.length)
        return false;
      let equal = true;
      for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
      }
      return equal;
    }
    function looseEqual(a, b) {
      if (a === b)
        return true;
      let aValidType = isDate(a);
      let bValidType = isDate(b);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
      }
      aValidType = isSymbol$1(a);
      bValidType = isSymbol$1(b);
      if (aValidType || bValidType) {
        return a === b;
      }
      aValidType = isArray$2(a);
      bValidType = isArray$2(b);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
      }
      aValidType = isObject$5(a);
      bValidType = isObject$5(b);
      if (aValidType || bValidType) {
        if (!aValidType || !bValidType) {
          return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
          return false;
        }
        for (const key in a) {
          const aHasKey = a.hasOwnProperty(key);
          const bHasKey = b.hasOwnProperty(key);
          if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
            return false;
          }
        }
      }
      return String(a) === String(b);
    }
    const toDisplayString = (val) => {
      return isString$1(val) ? val : val == null ? "" : isArray$2(val) || isObject$5(val) && (val.toString === objectToString$1 || !isFunction$1(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
    };
    const replacer = (_key, val) => {
      if (val && val.__v_isRef) {
        return replacer(_key, val.value);
      } else if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce(
            (entries, [key, val2], i) => {
              entries[stringifySymbol(key, i) + " =>"] = val2;
              return entries;
            },
            {}
          )
        };
      } else if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
        };
      } else if (isSymbol$1(val)) {
        return stringifySymbol(val);
      } else if (isObject$5(val) && !isArray$2(val) && !isPlainObject$1(val)) {
        return String(val);
      }
      return val;
    };
    const stringifySymbol = (v, i = "") => {
      var _a2;
      return isSymbol$1(v) ? `Symbol(${(_a2 = v.description) != null ? _a2 : i})` : v;
    };
    /**
    * @vue/reactivity v3.4.19
    * (c) 2018-present Yuxi (Evan) You and Vue contributors
    * @license MIT
    **/
    let activeEffectScope;
    class EffectScope {
      constructor(detached = false) {
        this.detached = detached;
        this._active = true;
        this.effects = [];
        this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
          this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
            this
          ) - 1;
        }
      }
      get active() {
        return this._active;
      }
      run(fn2) {
        if (this._active) {
          const currentEffectScope = activeEffectScope;
          try {
            activeEffectScope = this;
            return fn2();
          } finally {
            activeEffectScope = currentEffectScope;
          }
        }
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      on() {
        activeEffectScope = this;
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      off() {
        activeEffectScope = this.parent;
      }
      stop(fromParent) {
        if (this._active) {
          let i, l;
          for (i = 0, l = this.effects.length; i < l; i++) {
            this.effects[i].stop();
          }
          for (i = 0, l = this.cleanups.length; i < l; i++) {
            this.cleanups[i]();
          }
          if (this.scopes) {
            for (i = 0, l = this.scopes.length; i < l; i++) {
              this.scopes[i].stop(true);
            }
          }
          if (!this.detached && this.parent && !fromParent) {
            const last = this.parent.scopes.pop();
            if (last && last !== this) {
              this.parent.scopes[this.index] = last;
              last.index = this.index;
            }
          }
          this.parent = void 0;
          this._active = false;
        }
      }
    }
    function effectScope(detached) {
      return new EffectScope(detached);
    }
    function recordEffectScope(effect, scope = activeEffectScope) {
      if (scope && scope.active) {
        scope.effects.push(effect);
      }
    }
    function getCurrentScope() {
      return activeEffectScope;
    }
    function onScopeDispose(fn2) {
      if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn2);
      }
    }
    let activeEffect;
    class ReactiveEffect {
      constructor(fn2, trigger2, scheduler, scope) {
        this.fn = fn2;
        this.trigger = trigger2;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this._dirtyLevel = 4;
        this._trackId = 0;
        this._runnings = 0;
        this._shouldSchedule = false;
        this._depsLength = 0;
        recordEffectScope(this, scope);
      }
      get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
          this._dirtyLevel = 1;
          pauseTracking();
          for (let i = 0; i < this._depsLength; i++) {
            const dep = this.deps[i];
            if (dep.computed) {
              triggerComputed(dep.computed);
              if (this._dirtyLevel >= 4) {
                break;
              }
            }
          }
          if (this._dirtyLevel === 1) {
            this._dirtyLevel = 0;
          }
          resetTracking();
        }
        return this._dirtyLevel >= 4;
      }
      set dirty(v) {
        this._dirtyLevel = v ? 4 : 0;
      }
      run() {
        this._dirtyLevel = 0;
        if (!this.active) {
          return this.fn();
        }
        let lastShouldTrack = shouldTrack;
        let lastEffect = activeEffect;
        try {
          shouldTrack = true;
          activeEffect = this;
          this._runnings++;
          preCleanupEffect(this);
          return this.fn();
        } finally {
          postCleanupEffect(this);
          this._runnings--;
          activeEffect = lastEffect;
          shouldTrack = lastShouldTrack;
        }
      }
      stop() {
        var _a2;
        if (this.active) {
          preCleanupEffect(this);
          postCleanupEffect(this);
          (_a2 = this.onStop) == null ? void 0 : _a2.call(this);
          this.active = false;
        }
      }
    }
    function triggerComputed(computed2) {
      return computed2.value;
    }
    function preCleanupEffect(effect2) {
      effect2._trackId++;
      effect2._depsLength = 0;
    }
    function postCleanupEffect(effect2) {
      if (effect2.deps.length > effect2._depsLength) {
        for (let i = effect2._depsLength; i < effect2.deps.length; i++) {
          cleanupDepEffect(effect2.deps[i], effect2);
        }
        effect2.deps.length = effect2._depsLength;
      }
    }
    function cleanupDepEffect(dep, effect2) {
      const trackId = dep.get(effect2);
      if (trackId !== void 0 && effect2._trackId !== trackId) {
        dep.delete(effect2);
        if (dep.size === 0) {
          dep.cleanup();
        }
      }
    }
    let shouldTrack = true;
    let pauseScheduleStack = 0;
    const trackStack = [];
    function pauseTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = false;
    }
    function resetTracking() {
      const last = trackStack.pop();
      shouldTrack = last === void 0 ? true : last;
    }
    function pauseScheduling() {
      pauseScheduleStack++;
    }
    function resetScheduling() {
      pauseScheduleStack--;
      while (!pauseScheduleStack && queueEffectSchedulers.length) {
        queueEffectSchedulers.shift()();
      }
    }
    function trackEffect(effect2, dep, debuggerEventExtraInfo) {
      if (dep.get(effect2) !== effect2._trackId) {
        dep.set(effect2, effect2._trackId);
        const oldDep = effect2.deps[effect2._depsLength];
        if (oldDep !== dep) {
          if (oldDep) {
            cleanupDepEffect(oldDep, effect2);
          }
          effect2.deps[effect2._depsLength++] = dep;
        } else {
          effect2._depsLength++;
        }
      }
    }
    const queueEffectSchedulers = [];
    function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
      pauseScheduling();
      for (const effect2 of dep.keys()) {
        let tracking;
        if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
          effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
          effect2._dirtyLevel = dirtyLevel;
        }
        if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
          effect2.trigger();
          if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
            effect2._shouldSchedule = false;
            if (effect2.scheduler) {
              queueEffectSchedulers.push(effect2.scheduler);
            }
          }
        }
      }
      resetScheduling();
    }
    const createDep = (cleanup, computed2) => {
      const dep = /* @__PURE__ */ new Map();
      dep.cleanup = cleanup;
      dep.computed = computed2;
      return dep;
    };
    const targetMap = /* @__PURE__ */ new WeakMap();
    const ITERATE_KEY = Symbol("");
    const MAP_KEY_ITERATE_KEY = Symbol("");
    function track(target, type2, key) {
      if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
          targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        }
        let dep = depsMap.get(key);
        if (!dep) {
          depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
        }
        trackEffect(
          activeEffect,
          dep
        );
      }
    }
    function trigger(target, type2, key, newValue, oldValue, oldTarget) {
      const depsMap = targetMap.get(target);
      if (!depsMap) {
        return;
      }
      let deps = [];
      if (type2 === "clear") {
        deps = [...depsMap.values()];
      } else if (key === "length" && isArray$2(target)) {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key2) => {
          if (key2 === "length" || !isSymbol$1(key2) && key2 >= newLength) {
            deps.push(dep);
          }
        });
      } else {
        if (key !== void 0) {
          deps.push(depsMap.get(key));
        }
        switch (type2) {
          case "add":
            if (!isArray$2(target)) {
              deps.push(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (isIntegerKey(key)) {
              deps.push(depsMap.get("length"));
            }
            break;
          case "delete":
            if (!isArray$2(target)) {
              deps.push(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }
            break;
          case "set":
            if (isMap(target)) {
              deps.push(depsMap.get(ITERATE_KEY));
            }
            break;
        }
      }
      pauseScheduling();
      for (const dep of deps) {
        if (dep) {
          triggerEffects(
            dep,
            4
          );
        }
      }
      resetScheduling();
    }
    function getDepFromReactive(object, key) {
      var _a2;
      return (_a2 = targetMap.get(object)) == null ? void 0 : _a2.get(key);
    }
    const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
    const builtInSymbols = new Set(
      /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$1)
    );
    const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
    function createArrayInstrumentations() {
      const instrumentations = {};
      ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
        instrumentations[key] = function(...args) {
          const arr = toRaw(this);
          for (let i = 0, l = this.length; i < l; i++) {
            track(arr, "get", i + "");
          }
          const res = arr[key](...args);
          if (res === -1 || res === false) {
            return arr[key](...args.map(toRaw));
          } else {
            return res;
          }
        };
      });
      ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
        instrumentations[key] = function(...args) {
          pauseTracking();
          pauseScheduling();
          const res = toRaw(this)[key].apply(this, args);
          resetScheduling();
          resetTracking();
          return res;
        };
      });
      return instrumentations;
    }
    function hasOwnProperty$4(key) {
      const obj = toRaw(this);
      track(obj, "has", key);
      return obj.hasOwnProperty(key);
    }
    class BaseReactiveHandler {
      constructor(_isReadonly = false, _shallow = false) {
        this._isReadonly = _isReadonly;
        this._shallow = _shallow;
      }
      get(target, key, receiver) {
        const isReadonly2 = this._isReadonly, shallow = this._shallow;
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_isShallow") {
          return shallow;
        } else if (key === "__v_raw") {
          if (receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
          // this means the reciever is a user proxy of the reactive proxy
          Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
            return target;
          }
          return;
        }
        const targetIsArray = isArray$2(target);
        if (!isReadonly2) {
          if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
          }
          if (key === "hasOwnProperty") {
            return hasOwnProperty$4;
          }
        }
        const res = Reflect.get(target, key, receiver);
        if (isSymbol$1(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
          return res;
        }
        if (!isReadonly2) {
          track(target, "get", key);
        }
        if (shallow) {
          return res;
        }
        if (isRef(res)) {
          return targetIsArray && isIntegerKey(key) ? res : res.value;
        }
        if (isObject$5(res)) {
          return isReadonly2 ? readonly(res) : reactive(res);
        }
        return res;
      }
    }
    class MutableReactiveHandler extends BaseReactiveHandler {
      constructor(shallow = false) {
        super(false, shallow);
      }
      set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._shallow) {
          const isOldValueReadonly = isReadonly(oldValue);
          if (!isShallow(value) && !isReadonly(value)) {
            oldValue = toRaw(oldValue);
            value = toRaw(value);
          }
          if (!isArray$2(target) && isRef(oldValue) && !isRef(value)) {
            if (isOldValueReadonly) {
              return false;
            } else {
              oldValue.value = value;
              return true;
            }
          }
        }
        const hadKey = isArray$2(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (hasChanged(value, oldValue)) {
            trigger(target, "set", key, value);
          }
        }
        return result;
      }
      deleteProperty(target, key) {
        const hadKey = hasOwn(target, key);
        target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) {
          trigger(target, "delete", key, void 0);
        }
        return result;
      }
      has(target, key) {
        const result = Reflect.has(target, key);
        if (!isSymbol$1(key) || !builtInSymbols.has(key)) {
          track(target, "has", key);
        }
        return result;
      }
      ownKeys(target) {
        track(
          target,
          "iterate",
          isArray$2(target) ? "length" : ITERATE_KEY
        );
        return Reflect.ownKeys(target);
      }
    }
    class ReadonlyReactiveHandler extends BaseReactiveHandler {
      constructor(shallow = false) {
        super(true, shallow);
      }
      set(target, key) {
        return true;
      }
      deleteProperty(target, key) {
        return true;
      }
    }
    const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
    const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
    const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(
      true
    );
    const toShallow = (value) => value;
    const getProto = (v) => Reflect.getPrototypeOf(v);
    function get$2(target, key, isReadonly2 = false, isShallow2 = false) {
      target = target["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!isReadonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has: has2 } = getProto(rawTarget);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      if (has2.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    }
    function has(key, isReadonly2 = false) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!isReadonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    }
    function size(target, isReadonly2 = false) {
      target = target["__v_raw"];
      !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    }
    function add(value) {
      value = toRaw(value);
      const target = toRaw(this);
      const proto = getProto(target);
      const hadKey = proto.has.call(target, value);
      if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
      }
      return this;
    }
    function set$1(key, value) {
      value = toRaw(value);
      const target = toRaw(this);
      const { has: has2, get: get2 } = getProto(target);
      let hadKey = has2.call(target, key);
      if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
      }
      const oldValue = get2.call(target, key);
      target.set(key, value);
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
      return this;
    }
    function deleteEntry(key) {
      const target = toRaw(this);
      const { has: has2, get: get2 } = getProto(target);
      let hadKey = has2.call(target, key);
      if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
      }
      get2 ? get2.call(target, key) : void 0;
      const result = target.delete(key);
      if (hadKey) {
        trigger(target, "delete", key, void 0);
      }
      return result;
    }
    function clear() {
      const target = toRaw(this);
      const hadItems = target.size !== 0;
      const result = target.clear();
      if (hadItems) {
        trigger(target, "clear", void 0, void 0);
      }
      return result;
    }
    function createForEach(isReadonly2, isShallow2) {
      return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key) => {
          return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
      };
    }
    function createIterableMethod(method, isReadonly2, isShallow2) {
      return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(
          rawTarget,
          "iterate",
          isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
        );
        return {
          // iterator protocol
          next() {
            const { value, done } = innerIterator.next();
            return done ? { value, done } : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done
            };
          },
          // iterable protocol
          [Symbol.iterator]() {
            return this;
          }
        };
      };
    }
    function createReadonlyMethod(type2) {
      return function(...args) {
        return type2 === "delete" ? false : type2 === "clear" ? void 0 : this;
      };
    }
    function createInstrumentations() {
      const mutableInstrumentations2 = {
        get(key) {
          return get$2(this, key);
        },
        get size() {
          return size(this);
        },
        has,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
      };
      const shallowInstrumentations2 = {
        get(key) {
          return get$2(this, key, false, true);
        },
        get size() {
          return size(this);
        },
        has,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
      };
      const readonlyInstrumentations2 = {
        get(key) {
          return get$2(this, key, true);
        },
        get size() {
          return size(this, true);
        },
        has(key) {
          return has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
      };
      const shallowReadonlyInstrumentations2 = {
        get(key) {
          return get$2(this, key, true, true);
        },
        get size() {
          return size(this, true);
        },
        has(key) {
          return has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
      };
      const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
      iteratorMethods.forEach((method) => {
        mutableInstrumentations2[method] = createIterableMethod(
          method,
          false,
          false
        );
        readonlyInstrumentations2[method] = createIterableMethod(
          method,
          true,
          false
        );
        shallowInstrumentations2[method] = createIterableMethod(
          method,
          false,
          true
        );
        shallowReadonlyInstrumentations2[method] = createIterableMethod(
          method,
          true,
          true
        );
      });
      return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
      ];
    }
    const [
      mutableInstrumentations,
      readonlyInstrumentations,
      shallowInstrumentations,
      shallowReadonlyInstrumentations
    ] = /* @__PURE__ */ createInstrumentations();
    function createInstrumentationGetter(isReadonly2, shallow) {
      const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
      return (target, key, receiver) => {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw") {
          return target;
        }
        return Reflect.get(
          hasOwn(instrumentations, key) && key in target ? instrumentations : target,
          key,
          receiver
        );
      };
    }
    const mutableCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, false)
    };
    const shallowCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, true)
    };
    const readonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, false)
    };
    const reactiveMap = /* @__PURE__ */ new WeakMap();
    const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
    const readonlyMap = /* @__PURE__ */ new WeakMap();
    const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
    function targetTypeMap(rawType) {
      switch (rawType) {
        case "Object":
        case "Array":
          return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;
        default:
          return 0;
      }
    }
    function getTargetType(value) {
      return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
    }
    function reactive(target) {
      if (isReadonly(target)) {
        return target;
      }
      return createReactiveObject(
        target,
        false,
        mutableHandlers,
        mutableCollectionHandlers,
        reactiveMap
      );
    }
    function shallowReactive(target) {
      return createReactiveObject(
        target,
        false,
        shallowReactiveHandlers,
        shallowCollectionHandlers,
        shallowReactiveMap
      );
    }
    function readonly(target) {
      return createReactiveObject(
        target,
        true,
        readonlyHandlers,
        readonlyCollectionHandlers,
        readonlyMap
      );
    }
    function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
      if (!isObject$5(target)) {
        return target;
      }
      if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
      }
      const targetType = getTargetType(target);
      if (targetType === 0) {
        return target;
      }
      const proxy = new Proxy(
        target,
        targetType === 2 ? collectionHandlers : baseHandlers
      );
      proxyMap.set(target, proxy);
      return proxy;
    }
    function isReactive(value) {
      if (isReadonly(value)) {
        return isReactive(value["__v_raw"]);
      }
      return !!(value && value["__v_isReactive"]);
    }
    function isReadonly(value) {
      return !!(value && value["__v_isReadonly"]);
    }
    function isShallow(value) {
      return !!(value && value["__v_isShallow"]);
    }
    function isProxy(value) {
      return isReactive(value) || isReadonly(value);
    }
    function toRaw(observed) {
      const raw = observed && observed["__v_raw"];
      return raw ? toRaw(raw) : observed;
    }
    function markRaw(value) {
      if (Object.isExtensible(value)) {
        def(value, "__v_skip", true);
      }
      return value;
    }
    const toReactive = (value) => isObject$5(value) ? reactive(value) : value;
    const toReadonly = (value) => isObject$5(value) ? readonly(value) : value;
    class ComputedRefImpl {
      constructor(getter, _setter, isReadonly2, isSSR) {
        this._setter = _setter;
        this.dep = void 0;
        this.__v_isRef = true;
        this["__v_isReadonly"] = false;
        this.effect = new ReactiveEffect(
          () => getter(this._value),
          () => triggerRefValue(
            this,
            this.effect._dirtyLevel === 2 ? 2 : 3
          )
        );
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly"] = isReadonly2;
      }
      get value() {
        const self2 = toRaw(this);
        if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
          triggerRefValue(self2, 4);
        }
        trackRefValue(self2);
        if (self2.effect._dirtyLevel >= 2) {
          triggerRefValue(self2, 2);
        }
        return self2._value;
      }
      set value(newValue) {
        this._setter(newValue);
      }
      // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
      get _dirty() {
        return this.effect.dirty;
      }
      set _dirty(v) {
        this.effect.dirty = v;
      }
      // #endregion
    }
    function computed$1(getterOrOptions, debugOptions, isSSR = false) {
      let getter;
      let setter;
      const onlyGetter = isFunction$1(getterOrOptions);
      if (onlyGetter) {
        getter = getterOrOptions;
        setter = NOOP;
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }
      const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
      return cRef;
    }
    function trackRefValue(ref2) {
      var _a2;
      if (shouldTrack && activeEffect) {
        ref2 = toRaw(ref2);
        trackEffect(
          activeEffect,
          (_a2 = ref2.dep) != null ? _a2 : ref2.dep = createDep(
            () => ref2.dep = void 0,
            ref2 instanceof ComputedRefImpl ? ref2 : void 0
          )
        );
      }
    }
    function triggerRefValue(ref2, dirtyLevel = 4, newVal) {
      ref2 = toRaw(ref2);
      const dep = ref2.dep;
      if (dep) {
        triggerEffects(
          dep,
          dirtyLevel
        );
      }
    }
    function isRef(r) {
      return !!(r && r.__v_isRef === true);
    }
    function ref(value) {
      return createRef(value, false);
    }
    function shallowRef(value) {
      return createRef(value, true);
    }
    function createRef(rawValue, shallow) {
      if (isRef(rawValue)) {
        return rawValue;
      }
      return new RefImpl(rawValue, shallow);
    }
    class RefImpl {
      constructor(value, __v_isShallow) {
        this.__v_isShallow = __v_isShallow;
        this.dep = void 0;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
      }
      get value() {
        trackRefValue(this);
        return this._value;
      }
      set value(newVal) {
        const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
        newVal = useDirectValue ? newVal : toRaw(newVal);
        if (hasChanged(newVal, this._rawValue)) {
          this._rawValue = newVal;
          this._value = useDirectValue ? newVal : toReactive(newVal);
          triggerRefValue(this, 4);
        }
      }
    }
    function unref(ref2) {
      return isRef(ref2) ? ref2.value : ref2;
    }
    const shallowUnwrapHandlers = {
      get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
      set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        } else {
          return Reflect.set(target, key, value, receiver);
        }
      }
    };
    function proxyRefs(objectWithRefs) {
      return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
    }
    function toRefs(object) {
      const ret = isArray$2(object) ? new Array(object.length) : {};
      for (const key in object) {
        ret[key] = propertyToRef(object, key);
      }
      return ret;
    }
    class ObjectRefImpl {
      constructor(_object, _key, _defaultValue) {
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
      }
      get value() {
        const val = this._object[this._key];
        return val === void 0 ? this._defaultValue : val;
      }
      set value(newVal) {
        this._object[this._key] = newVal;
      }
      get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
      }
    }
    class GetterRefImpl {
      constructor(_getter) {
        this._getter = _getter;
        this.__v_isRef = true;
        this.__v_isReadonly = true;
      }
      get value() {
        return this._getter();
      }
    }
    function toRef(source, key, defaultValue) {
      if (isRef(source)) {
        return source;
      } else if (isFunction$1(source)) {
        return new GetterRefImpl(source);
      } else if (isObject$5(source) && arguments.length > 1) {
        return propertyToRef(source, key, defaultValue);
      } else {
        return ref(source);
      }
    }
    function propertyToRef(source, key, defaultValue) {
      const val = source[key];
      return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
    }
    /**
    * @vue/runtime-core v3.4.19
    * (c) 2018-present Yuxi (Evan) You and Vue contributors
    * @license MIT
    **/
    const stack = [];
    function warn$1(msg, ...args) {
      pauseTracking();
      const instance = stack.length ? stack[stack.length - 1].component : null;
      const appWarnHandler = instance && instance.appContext.config.warnHandler;
      const trace = getComponentTrace();
      if (appWarnHandler) {
        callWithErrorHandling(
          appWarnHandler,
          instance,
          11,
          [
            msg + args.join(""),
            instance && instance.proxy,
            trace.map(
              ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
            ).join("\n"),
            trace
          ]
        );
      } else {
        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
        if (trace.length && // avoid spamming console during tests
        true) {
          warnArgs.push(`
`, ...formatTrace(trace));
        }
        console.warn(...warnArgs);
      }
      resetTracking();
    }
    function getComponentTrace() {
      let currentVNode = stack[stack.length - 1];
      if (!currentVNode) {
        return [];
      }
      const normalizedStack = [];
      while (currentVNode) {
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
          last.recurseCount++;
        } else {
          normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
          });
        }
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
      }
      return normalizedStack;
    }
    function formatTrace(trace) {
      const logs = [];
      trace.forEach((entry, i) => {
        logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
      });
      return logs;
    }
    function formatTraceEntry({ vnode, recurseCount }) {
      const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
      const isRoot = vnode.component ? vnode.component.parent == null : false;
      const open = ` at <${formatComponentName(
        vnode.component,
        vnode.type,
        isRoot
      )}`;
      const close = `>` + postfix;
      return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
    }
    function formatProps(props) {
      const res = [];
      const keys = Object.keys(props);
      keys.slice(0, 3).forEach((key) => {
        res.push(...formatProp(key, props[key]));
      });
      if (keys.length > 3) {
        res.push(` ...`);
      }
      return res;
    }
    function formatProp(key, value, raw) {
      if (isString$1(value)) {
        value = JSON.stringify(value);
        return raw ? value : [`${key}=${value}`];
      } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
        return raw ? value : [`${key}=${value}`];
      } else if (isRef(value)) {
        value = formatProp(key, toRaw(value.value), true);
        return raw ? value : [`${key}=Ref<`, value, `>`];
      } else if (isFunction$1(value)) {
        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
      } else {
        value = toRaw(value);
        return raw ? value : [`${key}=`, value];
      }
    }
    function callWithErrorHandling(fn2, instance, type2, args) {
      try {
        return args ? fn2(...args) : fn2();
      } catch (err) {
        handleError(err, instance, type2);
      }
    }
    function callWithAsyncErrorHandling(fn2, instance, type2, args) {
      if (isFunction$1(fn2)) {
        const res = callWithErrorHandling(fn2, instance, type2, args);
        if (res && isPromise(res)) {
          res.catch((err) => {
            handleError(err, instance, type2);
          });
        }
        return res;
      }
      const values = [];
      for (let i = 0; i < fn2.length; i++) {
        values.push(callWithAsyncErrorHandling(fn2[i], instance, type2, args));
      }
      return values;
    }
    function handleError(err, instance, type2, throwInDev = true) {
      const contextVNode = instance ? instance.vnode : null;
      if (instance) {
        let cur = instance.parent;
        const exposedInstance = instance.proxy;
        const errorInfo = `https://vuejs.org/error-reference/#runtime-${type2}`;
        while (cur) {
          const errorCapturedHooks = cur.ec;
          if (errorCapturedHooks) {
            for (let i = 0; i < errorCapturedHooks.length; i++) {
              if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                return;
              }
            }
          }
          cur = cur.parent;
        }
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
          callWithErrorHandling(
            appErrorHandler,
            null,
            10,
            [err, exposedInstance, errorInfo]
          );
          return;
        }
      }
      logError(err, type2, contextVNode, throwInDev);
    }
    function logError(err, type2, contextVNode, throwInDev = true) {
      {
        console.error(err);
      }
    }
    let isFlushing = false;
    let isFlushPending = false;
    const queue = [];
    let flushIndex = 0;
    const pendingPostFlushCbs = [];
    let activePostFlushCbs = null;
    let postFlushIndex = 0;
    const resolvedPromise = /* @__PURE__ */ Promise.resolve();
    let currentFlushPromise = null;
    function nextTick$1(fn2) {
      const p2 = currentFlushPromise || resolvedPromise;
      return fn2 ? p2.then(this ? fn2.bind(this) : fn2) : p2;
    }
    function findInsertionIndex(id) {
      let start = flushIndex + 1;
      let end2 = queue.length;
      while (start < end2) {
        const middle = start + end2 >>> 1;
        const middleJob = queue[middle];
        const middleJobId = getId(middleJob);
        if (middleJobId < id || middleJobId === id && middleJob.pre) {
          start = middle + 1;
        } else {
          end2 = middle;
        }
      }
      return start;
    }
    function queueJob(job) {
      if (!queue.length || !queue.includes(
        job,
        isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
      )) {
        if (job.id == null) {
          queue.push(job);
        } else {
          queue.splice(findInsertionIndex(job.id), 0, job);
        }
        queueFlush();
      }
    }
    function queueFlush() {
      if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
      }
    }
    function invalidateJob(job) {
      const i = queue.indexOf(job);
      if (i > flushIndex) {
        queue.splice(i, 1);
      }
    }
    function queuePostFlushCb(cb) {
      if (!isArray$2(cb)) {
        if (!activePostFlushCbs || !activePostFlushCbs.includes(
          cb,
          cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
        )) {
          pendingPostFlushCbs.push(cb);
        }
      } else {
        pendingPostFlushCbs.push(...cb);
      }
      queueFlush();
    }
    function flushPreFlushCbs(instance, seen, i = isFlushing ? flushIndex + 1 : 0) {
      for (; i < queue.length; i++) {
        const cb = queue[i];
        if (cb && cb.pre) {
          if (instance && cb.id !== instance.uid) {
            continue;
          }
          queue.splice(i, 1);
          i--;
          cb();
        }
      }
    }
    function flushPostFlushCbs(seen) {
      if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)].sort(
          (a, b) => getId(a) - getId(b)
        );
        pendingPostFlushCbs.length = 0;
        if (activePostFlushCbs) {
          activePostFlushCbs.push(...deduped);
          return;
        }
        activePostFlushCbs = deduped;
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
          activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
      }
    }
    const getId = (job) => job.id == null ? Infinity : job.id;
    const comparator = (a, b) => {
      const diff = getId(a) - getId(b);
      if (diff === 0) {
        if (a.pre && !b.pre)
          return -1;
        if (b.pre && !a.pre)
          return 1;
      }
      return diff;
    };
    function flushJobs(seen) {
      isFlushPending = false;
      isFlushing = true;
      queue.sort(comparator);
      const check = NOOP;
      try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
          const job = queue[flushIndex];
          if (job && job.active !== false) {
            if (false)
              ;
            callWithErrorHandling(job, null, 14);
          }
        }
      } finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs();
        isFlushing = false;
        currentFlushPromise = null;
        if (queue.length || pendingPostFlushCbs.length) {
          flushJobs();
        }
      }
    }
    function emit(instance, event2, ...rawArgs) {
      if (instance.isUnmounted)
        return;
      const props = instance.vnode.props || EMPTY_OBJ;
      let args = rawArgs;
      const isModelListener2 = event2.startsWith("update:");
      const modelArg = isModelListener2 && event2.slice(7);
      if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
        if (trim) {
          args = rawArgs.map((a) => isString$1(a) ? a.trim() : a);
        }
        if (number) {
          args = rawArgs.map(looseToNumber);
        }
      }
      let handlerName;
      let handler = props[handlerName = toHandlerKey(event2)] || // also try camelCase event handler (#2249)
      props[handlerName = toHandlerKey(camelize(event2))];
      if (!handler && isModelListener2) {
        handler = props[handlerName = toHandlerKey(hyphenate(event2))];
      }
      if (handler) {
        callWithAsyncErrorHandling(
          handler,
          instance,
          6,
          args
        );
      }
      const onceHandler = props[handlerName + `Once`];
      if (onceHandler) {
        if (!instance.emitted) {
          instance.emitted = {};
        } else if (instance.emitted[handlerName]) {
          return;
        }
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(
          onceHandler,
          instance,
          6,
          args
        );
      }
    }
    function normalizeEmitsOptions(comp, appContext, asMixin = false) {
      const cache = appContext.emitsCache;
      const cached = cache.get(comp);
      if (cached !== void 0) {
        return cached;
      }
      const raw = comp.emits;
      let normalized = {};
      let hasExtends = false;
      if (!isFunction$1(comp)) {
        const extendEmits = (raw2) => {
          const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
          if (normalizedFromExtend) {
            hasExtends = true;
            extend$3(normalized, normalizedFromExtend);
          }
        };
        if (!asMixin && appContext.mixins.length) {
          appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
          extendEmits(comp.extends);
        }
        if (comp.mixins) {
          comp.mixins.forEach(extendEmits);
        }
      }
      if (!raw && !hasExtends) {
        if (isObject$5(comp)) {
          cache.set(comp, null);
        }
        return null;
      }
      if (isArray$2(raw)) {
        raw.forEach((key) => normalized[key] = null);
      } else {
        extend$3(normalized, raw);
      }
      if (isObject$5(comp)) {
        cache.set(comp, normalized);
      }
      return normalized;
    }
    function isEmitListener(options, key) {
      if (!options || !isOn(key)) {
        return false;
      }
      key = key.slice(2).replace(/Once$/, "");
      return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
    }
    let currentRenderingInstance = null;
    let currentScopeId = null;
    function setCurrentRenderingInstance(instance) {
      const prev = currentRenderingInstance;
      currentRenderingInstance = instance;
      currentScopeId = instance && instance.type.__scopeId || null;
      return prev;
    }
    function pushScopeId(id) {
      currentScopeId = id;
    }
    function popScopeId() {
      currentScopeId = null;
    }
    function withCtx(fn2, ctx = currentRenderingInstance, isNonScopedSlot) {
      if (!ctx)
        return fn2;
      if (fn2._n) {
        return fn2;
      }
      const renderFnWithContext = (...args) => {
        if (renderFnWithContext._d) {
          setBlockTracking(-1);
        }
        const prevInstance = setCurrentRenderingInstance(ctx);
        let res;
        try {
          res = fn2(...args);
        } finally {
          setCurrentRenderingInstance(prevInstance);
          if (renderFnWithContext._d) {
            setBlockTracking(1);
          }
        }
        return res;
      };
      renderFnWithContext._n = true;
      renderFnWithContext._c = true;
      renderFnWithContext._d = true;
      return renderFnWithContext;
    }
    function markAttrsAccessed() {
    }
    function renderComponentRoot(instance) {
      const {
        type: Component,
        vnode,
        proxy,
        withProxy,
        props,
        propsOptions: [propsOptions],
        slots,
        attrs,
        emit: emit2,
        render: render2,
        renderCache,
        data,
        setupState,
        ctx,
        inheritAttrs
      } = instance;
      let result;
      let fallthroughAttrs;
      const prev = setCurrentRenderingInstance(instance);
      try {
        if (vnode.shapeFlag & 4) {
          const proxyToUse = withProxy || proxy;
          const thisProxy = false ? new Proxy(proxyToUse, {
            get(target, key, receiver) {
              warn$1(
                `Property '${String(
                  key
                )}' was accessed via 'this'. Avoid using 'this' in templates.`
              );
              return Reflect.get(target, key, receiver);
            }
          }) : proxyToUse;
          result = normalizeVNode(
            render2.call(
              thisProxy,
              proxyToUse,
              renderCache,
              props,
              setupState,
              data,
              ctx
            )
          );
          fallthroughAttrs = attrs;
        } else {
          const render22 = Component;
          if (false)
            ;
          result = normalizeVNode(
            render22.length > 1 ? render22(
              props,
              false ? {
                get attrs() {
                  markAttrsAccessed();
                  return attrs;
                },
                slots,
                emit: emit2
              } : { attrs, slots, emit: emit2 }
            ) : render22(
              props,
              null
              /* we know it doesn't need it */
            )
          );
          fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
      } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1);
        result = createVNode(Comment);
      }
      let root2 = result;
      if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root2;
        if (keys.length) {
          if (shapeFlag & (1 | 6)) {
            if (propsOptions && keys.some(isModelListener)) {
              fallthroughAttrs = filterModelListeners(
                fallthroughAttrs,
                propsOptions
              );
            }
            root2 = cloneVNode(root2, fallthroughAttrs);
          }
        }
      }
      if (vnode.dirs) {
        root2 = cloneVNode(root2);
        root2.dirs = root2.dirs ? root2.dirs.concat(vnode.dirs) : vnode.dirs;
      }
      if (vnode.transition) {
        root2.transition = vnode.transition;
      }
      {
        result = root2;
      }
      setCurrentRenderingInstance(prev);
      return result;
    }
    const getFunctionalFallthrough = (attrs) => {
      let res;
      for (const key in attrs) {
        if (key === "class" || key === "style" || isOn(key)) {
          (res || (res = {}))[key] = attrs[key];
        }
      }
      return res;
    };
    const filterModelListeners = (attrs, props) => {
      const res = {};
      for (const key in attrs) {
        if (!isModelListener(key) || !(key.slice(9) in props)) {
          res[key] = attrs[key];
        }
      }
      return res;
    };
    function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
      const { props: prevProps, children: prevChildren, component } = prevVNode;
      const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
      const emits = component.emitsOptions;
      if (nextVNode.dirs || nextVNode.transition) {
        return true;
      }
      if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024) {
          return true;
        }
        if (patchFlag & 16) {
          if (!prevProps) {
            return !!nextProps;
          }
          return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8) {
          const dynamicProps = nextVNode.dynamicProps;
          for (let i = 0; i < dynamicProps.length; i++) {
            const key = dynamicProps[i];
            if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
              return true;
            }
          }
        }
      } else {
        if (prevChildren || nextChildren) {
          if (!nextChildren || !nextChildren.$stable) {
            return true;
          }
        }
        if (prevProps === nextProps) {
          return false;
        }
        if (!prevProps) {
          return !!nextProps;
        }
        if (!nextProps) {
          return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      }
      return false;
    }
    function hasPropsChanged(prevProps, nextProps, emitsOptions) {
      const nextKeys = Object.keys(nextProps);
      if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
      }
      for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
          return true;
        }
      }
      return false;
    }
    function updateHOCHostEl({ vnode, parent }, el) {
      while (parent) {
        const root2 = parent.subTree;
        if (root2.suspense && root2.suspense.activeBranch === vnode) {
          root2.el = vnode.el;
        }
        if (root2 === vnode) {
          (vnode = parent.vnode).el = el;
          parent = parent.parent;
        } else {
          break;
        }
      }
    }
    const COMPONENTS = "components";
    function resolveComponent(name2, maybeSelfReference) {
      return resolveAsset(COMPONENTS, name2, true, maybeSelfReference) || name2;
    }
    const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
    function resolveDynamicComponent(component) {
      if (isString$1(component)) {
        return resolveAsset(COMPONENTS, component, false) || component;
      } else {
        return component || NULL_DYNAMIC_COMPONENT;
      }
    }
    function resolveAsset(type2, name2, warnMissing = true, maybeSelfReference = false) {
      const instance = currentRenderingInstance || currentInstance;
      if (instance) {
        const Component = instance.type;
        if (type2 === COMPONENTS) {
          const selfName = getComponentName(
            Component,
            false
          );
          if (selfName && (selfName === name2 || selfName === camelize(name2) || selfName === capitalize(camelize(name2)))) {
            return Component;
          }
        }
        const res = (
          // local registration
          // check instance[type] first which is resolved for options API
          resolve(instance[type2] || Component[type2], name2) || // global registration
          resolve(instance.appContext[type2], name2)
        );
        if (!res && maybeSelfReference) {
          return Component;
        }
        return res;
      }
    }
    function resolve(registry, name2) {
      return registry && (registry[name2] || registry[camelize(name2)] || registry[capitalize(camelize(name2))]);
    }
    const isSuspense = (type2) => type2.__isSuspense;
    function queueEffectWithSuspense(fn2, suspense) {
      if (suspense && suspense.pendingBranch) {
        if (isArray$2(fn2)) {
          suspense.effects.push(...fn2);
        } else {
          suspense.effects.push(fn2);
        }
      } else {
        queuePostFlushCb(fn2);
      }
    }
    const ssrContextKey = Symbol.for("v-scx");
    const useSSRContext = () => {
      {
        const ctx = inject(ssrContextKey);
        return ctx;
      }
    };
    function watchPostEffect(effect, options) {
      return doWatch(
        effect,
        null,
        { flush: "post" }
      );
    }
    const INITIAL_WATCHER_VALUE = {};
    function watch(source, cb, options) {
      return doWatch(source, cb, options);
    }
    function doWatch(source, cb, {
      immediate,
      deep,
      flush,
      once,
      onTrack,
      onTrigger
    } = EMPTY_OBJ) {
      if (cb && once) {
        const _cb = cb;
        cb = (...args) => {
          _cb(...args);
          unwatch();
        };
      }
      const instance = currentInstance;
      const reactiveGetter = (source2) => deep === true ? source2 : (
        // for deep: false, only traverse root-level properties
        traverse(source2, deep === false ? 1 : void 0)
      );
      let getter;
      let forceTrigger = false;
      let isMultiSource = false;
      if (isRef(source)) {
        getter = () => source.value;
        forceTrigger = isShallow(source);
      } else if (isReactive(source)) {
        getter = () => reactiveGetter(source);
        forceTrigger = true;
      } else if (isArray$2(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
        getter = () => source.map((s) => {
          if (isRef(s)) {
            return s.value;
          } else if (isReactive(s)) {
            return reactiveGetter(s);
          } else if (isFunction$1(s)) {
            return callWithErrorHandling(s, instance, 2);
          } else
            ;
        });
      } else if (isFunction$1(source)) {
        if (cb) {
          getter = () => callWithErrorHandling(source, instance, 2);
        } else {
          getter = () => {
            if (cleanup) {
              cleanup();
            }
            return callWithAsyncErrorHandling(
              source,
              instance,
              3,
              [onCleanup]
            );
          };
        }
      } else {
        getter = NOOP;
      }
      if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
      }
      let cleanup;
      let onCleanup = (fn2) => {
        cleanup = effect.onStop = () => {
          callWithErrorHandling(fn2, instance, 4);
          cleanup = effect.onStop = void 0;
        };
      };
      let ssrCleanup;
      if (isInSSRComponentSetup) {
        onCleanup = NOOP;
        if (!cb) {
          getter();
        } else if (immediate) {
          callWithAsyncErrorHandling(cb, instance, 3, [
            getter(),
            isMultiSource ? [] : void 0,
            onCleanup
          ]);
        }
        if (flush === "sync") {
          const ctx = useSSRContext();
          ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
        } else {
          return NOOP;
        }
      }
      let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
      const job = () => {
        if (!effect.active || !effect.dirty) {
          return;
        }
        if (cb) {
          const newValue = effect.run();
          if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
            if (cleanup) {
              cleanup();
            }
            callWithAsyncErrorHandling(cb, instance, 3, [
              newValue,
              // pass undefined as the old value when it's changed for the first time
              oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
              onCleanup
            ]);
            oldValue = newValue;
          }
        } else {
          effect.run();
        }
      };
      job.allowRecurse = !!cb;
      let scheduler;
      if (flush === "sync") {
        scheduler = job;
      } else if (flush === "post") {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
      } else {
        job.pre = true;
        if (instance)
          job.id = instance.uid;
        scheduler = () => queueJob(job);
      }
      const effect = new ReactiveEffect(getter, NOOP, scheduler);
      const scope = getCurrentScope();
      const unwatch = () => {
        effect.stop();
        if (scope) {
          remove(scope.effects, effect);
        }
      };
      if (cb) {
        if (immediate) {
          job();
        } else {
          oldValue = effect.run();
        }
      } else if (flush === "post") {
        queuePostRenderEffect(
          effect.run.bind(effect),
          instance && instance.suspense
        );
      } else {
        effect.run();
      }
      if (ssrCleanup)
        ssrCleanup.push(unwatch);
      return unwatch;
    }
    function instanceWatch(source, value, options) {
      const publicThis = this.proxy;
      const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
      let cb;
      if (isFunction$1(value)) {
        cb = value;
      } else {
        cb = value.handler;
        options = value;
      }
      const reset = setCurrentInstance(this);
      const res = doWatch(getter, cb.bind(publicThis), options);
      reset();
      return res;
    }
    function createPathGetter(ctx, path) {
      const segments = path.split(".");
      return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
          cur = cur[segments[i]];
        }
        return cur;
      };
    }
    function traverse(value, depth, currentDepth = 0, seen) {
      if (!isObject$5(value) || value["__v_skip"]) {
        return value;
      }
      if (depth && depth > 0) {
        if (currentDepth >= depth) {
          return value;
        }
        currentDepth++;
      }
      seen = seen || /* @__PURE__ */ new Set();
      if (seen.has(value)) {
        return value;
      }
      seen.add(value);
      if (isRef(value)) {
        traverse(value.value, depth, currentDepth, seen);
      } else if (isArray$2(value)) {
        for (let i = 0; i < value.length; i++) {
          traverse(value[i], depth, currentDepth, seen);
        }
      } else if (isSet(value) || isMap(value)) {
        value.forEach((v) => {
          traverse(v, depth, currentDepth, seen);
        });
      } else if (isPlainObject$1(value)) {
        for (const key in value) {
          traverse(value[key], depth, currentDepth, seen);
        }
      }
      return value;
    }
    function withDirectives(vnode, directives) {
      if (currentRenderingInstance === null) {
        return vnode;
      }
      const instance = getExposeProxy(currentRenderingInstance) || currentRenderingInstance.proxy;
      const bindings = vnode.dirs || (vnode.dirs = []);
      for (let i = 0; i < directives.length; i++) {
        let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
        if (dir) {
          if (isFunction$1(dir)) {
            dir = {
              mounted: dir,
              updated: dir
            };
          }
          if (dir.deep) {
            traverse(value);
          }
          bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
          });
        }
      }
      return vnode;
    }
    function invokeDirectiveHook(vnode, prevVNode, instance, name2) {
      const bindings = vnode.dirs;
      const oldBindings = prevVNode && prevVNode.dirs;
      for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
          binding.oldValue = oldBindings[i].value;
        }
        let hook = binding.dir[name2];
        if (hook) {
          pauseTracking();
          callWithAsyncErrorHandling(hook, instance, 8, [
            vnode.el,
            binding,
            vnode,
            prevVNode
          ]);
          resetTracking();
        }
      }
    }
    const leaveCbKey = Symbol("_leaveCb");
    const enterCbKey = Symbol("_enterCb");
    function useTransitionState() {
      const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: /* @__PURE__ */ new Map()
      };
      onMounted(() => {
        state.isMounted = true;
      });
      onBeforeUnmount(() => {
        state.isUnmounting = true;
      });
      return state;
    }
    const TransitionHookValidator = [Function, Array];
    const BaseTransitionPropsValidators = {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      // enter
      onBeforeEnter: TransitionHookValidator,
      onEnter: TransitionHookValidator,
      onAfterEnter: TransitionHookValidator,
      onEnterCancelled: TransitionHookValidator,
      // leave
      onBeforeLeave: TransitionHookValidator,
      onLeave: TransitionHookValidator,
      onAfterLeave: TransitionHookValidator,
      onLeaveCancelled: TransitionHookValidator,
      // appear
      onBeforeAppear: TransitionHookValidator,
      onAppear: TransitionHookValidator,
      onAfterAppear: TransitionHookValidator,
      onAppearCancelled: TransitionHookValidator
    };
    const BaseTransitionImpl = {
      name: `BaseTransition`,
      props: BaseTransitionPropsValidators,
      setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
          const children = slots.default && getTransitionRawChildren(slots.default(), true);
          if (!children || !children.length) {
            return;
          }
          let child = children[0];
          if (children.length > 1) {
            for (const c2 of children) {
              if (c2.type !== Comment) {
                child = c2;
                break;
              }
            }
          }
          const rawProps = toRaw(props);
          const { mode } = rawProps;
          if (state.isLeaving) {
            return emptyPlaceholder(child);
          }
          const innerChild = getKeepAliveChild(child);
          if (!innerChild) {
            return emptyPlaceholder(child);
          }
          const enterHooks = resolveTransitionHooks(
            innerChild,
            rawProps,
            state,
            instance
          );
          setTransitionHooks(innerChild, enterHooks);
          const oldChild = instance.subTree;
          const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
          let transitionKeyChanged = false;
          const { getTransitionKey } = innerChild.type;
          if (getTransitionKey) {
            const key = getTransitionKey();
            if (prevTransitionKey === void 0) {
              prevTransitionKey = key;
            } else if (key !== prevTransitionKey) {
              prevTransitionKey = key;
              transitionKeyChanged = true;
            }
          }
          if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
            const leavingHooks = resolveTransitionHooks(
              oldInnerChild,
              rawProps,
              state,
              instance
            );
            setTransitionHooks(oldInnerChild, leavingHooks);
            if (mode === "out-in") {
              state.isLeaving = true;
              leavingHooks.afterLeave = () => {
                state.isLeaving = false;
                if (instance.update.active !== false) {
                  instance.effect.dirty = true;
                  instance.update();
                }
              };
              return emptyPlaceholder(child);
            } else if (mode === "in-out" && innerChild.type !== Comment) {
              leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                const leavingVNodesCache = getLeavingNodesForType(
                  state,
                  oldInnerChild
                );
                leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                el[leaveCbKey] = () => {
                  earlyRemove();
                  el[leaveCbKey] = void 0;
                  delete enterHooks.delayedLeave;
                };
                enterHooks.delayedLeave = delayedLeave;
              };
            }
          }
          return child;
        };
      }
    };
    const BaseTransition = BaseTransitionImpl;
    function getLeavingNodesForType(state, vnode) {
      const { leavingVNodes } = state;
      let leavingVNodesCache = leavingVNodes.get(vnode.type);
      if (!leavingVNodesCache) {
        leavingVNodesCache = /* @__PURE__ */ Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
      }
      return leavingVNodesCache;
    }
    function resolveTransitionHooks(vnode, props, state, instance) {
      const {
        appear,
        mode,
        persisted = false,
        onBeforeEnter,
        onEnter,
        onAfterEnter,
        onEnterCancelled,
        onBeforeLeave,
        onLeave,
        onAfterLeave,
        onLeaveCancelled,
        onBeforeAppear,
        onAppear,
        onAfterAppear,
        onAppearCancelled
      } = props;
      const key = String(vnode.key);
      const leavingVNodesCache = getLeavingNodesForType(state, vnode);
      const callHook2 = (hook, args) => {
        hook && callWithAsyncErrorHandling(
          hook,
          instance,
          9,
          args
        );
      };
      const callAsyncHook = (hook, args) => {
        const done = args[1];
        callHook2(hook, args);
        if (isArray$2(hook)) {
          if (hook.every((hook2) => hook2.length <= 1))
            done();
        } else if (hook.length <= 1) {
          done();
        }
      };
      const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
          let hook = onBeforeEnter;
          if (!state.isMounted) {
            if (appear) {
              hook = onBeforeAppear || onBeforeEnter;
            } else {
              return;
            }
          }
          if (el[leaveCbKey]) {
            el[leaveCbKey](
              true
              /* cancelled */
            );
          }
          const leavingVNode = leavingVNodesCache[key];
          if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
            leavingVNode.el[leaveCbKey]();
          }
          callHook2(hook, [el]);
        },
        enter(el) {
          let hook = onEnter;
          let afterHook = onAfterEnter;
          let cancelHook = onEnterCancelled;
          if (!state.isMounted) {
            if (appear) {
              hook = onAppear || onEnter;
              afterHook = onAfterAppear || onAfterEnter;
              cancelHook = onAppearCancelled || onEnterCancelled;
            } else {
              return;
            }
          }
          let called = false;
          const done = el[enterCbKey] = (cancelled) => {
            if (called)
              return;
            called = true;
            if (cancelled) {
              callHook2(cancelHook, [el]);
            } else {
              callHook2(afterHook, [el]);
            }
            if (hooks.delayedLeave) {
              hooks.delayedLeave();
            }
            el[enterCbKey] = void 0;
          };
          if (hook) {
            callAsyncHook(hook, [el, done]);
          } else {
            done();
          }
        },
        leave(el, remove2) {
          const key2 = String(vnode.key);
          if (el[enterCbKey]) {
            el[enterCbKey](
              true
              /* cancelled */
            );
          }
          if (state.isUnmounting) {
            return remove2();
          }
          callHook2(onBeforeLeave, [el]);
          let called = false;
          const done = el[leaveCbKey] = (cancelled) => {
            if (called)
              return;
            called = true;
            remove2();
            if (cancelled) {
              callHook2(onLeaveCancelled, [el]);
            } else {
              callHook2(onAfterLeave, [el]);
            }
            el[leaveCbKey] = void 0;
            if (leavingVNodesCache[key2] === vnode) {
              delete leavingVNodesCache[key2];
            }
          };
          leavingVNodesCache[key2] = vnode;
          if (onLeave) {
            callAsyncHook(onLeave, [el, done]);
          } else {
            done();
          }
        },
        clone(vnode2) {
          return resolveTransitionHooks(vnode2, props, state, instance);
        }
      };
      return hooks;
    }
    function emptyPlaceholder(vnode) {
      if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
      }
    }
    function getKeepAliveChild(vnode) {
      return isKeepAlive(vnode) ? (
        // #7121 ensure get the child component subtree in case
        // it's been replaced during HMR
        vnode.children ? vnode.children[0] : void 0
      ) : vnode;
    }
    function setTransitionHooks(vnode, hooks) {
      if (vnode.shapeFlag & 6 && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
      } else if (vnode.shapeFlag & 128) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
      } else {
        vnode.transition = hooks;
      }
    }
    function getTransitionRawChildren(children, keepComment = false, parentKey) {
      let ret = [];
      let keyedFragmentCount = 0;
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
        if (child.type === Fragment) {
          if (child.patchFlag & 128)
            keyedFragmentCount++;
          ret = ret.concat(
            getTransitionRawChildren(child.children, keepComment, key)
          );
        } else if (keepComment || child.type !== Comment) {
          ret.push(key != null ? cloneVNode(child, { key }) : child);
        }
      }
      if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
          ret[i].patchFlag = -2;
        }
      }
      return ret;
    }
    /*! #__NO_SIDE_EFFECTS__ */
    // @__NO_SIDE_EFFECTS__
    function defineComponent(options, extraOptions) {
      return isFunction$1(options) ? (
        // #8326: extend call and options.name access are considered side-effects
        // by Rollup, so we have to wrap it in a pure-annotated IIFE.
        /* @__PURE__ */ (() => extend$3({ name: options.name }, extraOptions, { setup: options }))()
      ) : options;
    }
    const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
    const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
    function onActivated(hook, target) {
      registerKeepAliveHook(hook, "a", target);
    }
    function onDeactivated(hook, target) {
      registerKeepAliveHook(hook, "da", target);
    }
    function registerKeepAliveHook(hook, type2, target = currentInstance) {
      const wrappedHook = hook.__wdc || (hook.__wdc = () => {
        let current = target;
        while (current) {
          if (current.isDeactivated) {
            return;
          }
          current = current.parent;
        }
        return hook();
      });
      injectHook(type2, wrappedHook, target);
      if (target) {
        let current = target.parent;
        while (current && current.parent) {
          if (isKeepAlive(current.parent.vnode)) {
            injectToKeepAliveRoot(wrappedHook, type2, target, current);
          }
          current = current.parent;
        }
      }
    }
    function injectToKeepAliveRoot(hook, type2, target, keepAliveRoot) {
      const injected = injectHook(
        type2,
        hook,
        keepAliveRoot,
        true
        /* prepend */
      );
      onUnmounted(() => {
        remove(keepAliveRoot[type2], injected);
      }, target);
    }
    function injectHook(type2, hook, target = currentInstance, prepend = false) {
      if (target) {
        const hooks = target[type2] || (target[type2] = []);
        const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
          if (target.isUnmounted) {
            return;
          }
          pauseTracking();
          const reset = setCurrentInstance(target);
          const res = callWithAsyncErrorHandling(hook, target, type2, args);
          reset();
          resetTracking();
          return res;
        });
        if (prepend) {
          hooks.unshift(wrappedHook);
        } else {
          hooks.push(wrappedHook);
        }
        return wrappedHook;
      }
    }
    const createHook = (lifecycle) => (hook, target = currentInstance) => (
      // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
      (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
    );
    const onBeforeMount = createHook("bm");
    const onMounted = createHook("m");
    const onBeforeUpdate = createHook("bu");
    const onUpdated = createHook("u");
    const onBeforeUnmount = createHook("bum");
    const onUnmounted = createHook("um");
    const onServerPrefetch = createHook("sp");
    const onRenderTriggered = createHook(
      "rtg"
    );
    const onRenderTracked = createHook(
      "rtc"
    );
    function onErrorCaptured(hook, target = currentInstance) {
      injectHook("ec", hook, target);
    }
    function renderList(source, renderItem, cache, index) {
      let ret;
      const cached = cache && cache[index];
      if (isArray$2(source) || isString$1(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
          ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
        }
      } else if (typeof source === "number") {
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
          ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
        }
      } else if (isObject$5(source)) {
        if (source[Symbol.iterator]) {
          ret = Array.from(
            source,
            (item, i) => renderItem(item, i, void 0, cached && cached[i])
          );
        } else {
          const keys = Object.keys(source);
          ret = new Array(keys.length);
          for (let i = 0, l = keys.length; i < l; i++) {
            const key = keys[i];
            ret[i] = renderItem(source[key], key, i, cached && cached[i]);
          }
        }
      } else {
        ret = [];
      }
      if (cache) {
        cache[index] = ret;
      }
      return ret;
    }
    function renderSlot(slots, name2, props = {}, fallback, noSlotted) {
      if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
        if (name2 !== "default")
          props.name = name2;
        return createVNode("slot", props, fallback && fallback());
      }
      let slot = slots[name2];
      if (slot && slot._c) {
        slot._d = false;
      }
      openBlock();
      const validSlotContent = slot && ensureValidVNode(slot(props));
      const rendered = createBlock(
        Fragment,
        {
          key: props.key || // slot content array of a dynamic conditional slot may have a branch
          // key attached in the `createSlots` helper, respect that
          validSlotContent && validSlotContent.key || `_${name2}`
        },
        validSlotContent || (fallback ? fallback() : []),
        validSlotContent && slots._ === 1 ? 64 : -2
      );
      if (!noSlotted && rendered.scopeId) {
        rendered.slotScopeIds = [rendered.scopeId + "-s"];
      }
      if (slot && slot._c) {
        slot._d = true;
      }
      return rendered;
    }
    function ensureValidVNode(vnodes) {
      return vnodes.some((child) => {
        if (!isVNode(child))
          return true;
        if (child.type === Comment)
          return false;
        if (child.type === Fragment && !ensureValidVNode(child.children))
          return false;
        return true;
      }) ? vnodes : null;
    }
    function toHandlers(obj, preserveCaseIfNecessary) {
      const ret = {};
      for (const key in obj) {
        ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
      }
      return ret;
    }
    const getPublicInstance = (i) => {
      if (!i)
        return null;
      if (isStatefulComponent(i))
        return getExposeProxy(i) || i.proxy;
      return getPublicInstance(i.parent);
    };
    const publicPropertiesMap = (
      // Move PURE marker to new line to workaround compiler discarding it
      // due to type annotation
      /* @__PURE__ */ extend$3(/* @__PURE__ */ Object.create(null), {
        $: (i) => i,
        $el: (i) => i.vnode.el,
        $data: (i) => i.data,
        $props: (i) => i.props,
        $attrs: (i) => i.attrs,
        $slots: (i) => i.slots,
        $refs: (i) => i.refs,
        $parent: (i) => getPublicInstance(i.parent),
        $root: (i) => getPublicInstance(i.root),
        $emit: (i) => i.emit,
        $options: (i) => resolveMergedOptions(i),
        $forceUpdate: (i) => i.f || (i.f = () => {
          i.effect.dirty = true;
          queueJob(i.update);
        }),
        $nextTick: (i) => i.n || (i.n = nextTick$1.bind(i.proxy)),
        $watch: (i) => instanceWatch.bind(i)
      })
    );
    const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
    const PublicInstanceProxyHandlers = {
      get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type: type2, appContext } = instance;
        let normalizedProps;
        if (key[0] !== "$") {
          const n = accessCache[key];
          if (n !== void 0) {
            switch (n) {
              case 1:
                return setupState[key];
              case 2:
                return data[key];
              case 4:
                return ctx[key];
              case 3:
                return props[key];
            }
          } else if (hasSetupBinding(setupState, key)) {
            accessCache[key] = 1;
            return setupState[key];
          } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
            accessCache[key] = 2;
            return data[key];
          } else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
          ) {
            accessCache[key] = 3;
            return props[key];
          } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
            accessCache[key] = 4;
            return ctx[key];
          } else if (shouldCacheAccess) {
            accessCache[key] = 0;
          }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        if (publicGetter) {
          if (key === "$attrs") {
            track(instance, "get", key);
          }
          return publicGetter(instance);
        } else if (
          // css module (injected by vue-loader)
          (cssModule = type2.__cssModules) && (cssModule = cssModule[key])
        ) {
          return cssModule;
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 4;
          return ctx[key];
        } else if (
          // global properties
          globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
        ) {
          {
            return globalProperties[key];
          }
        } else
          ;
      },
      set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (hasSetupBinding(setupState, key)) {
          setupState[key] = value;
          return true;
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
          data[key] = value;
          return true;
        } else if (hasOwn(instance.props, key)) {
          return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) {
          return false;
        } else {
          {
            ctx[key] = value;
          }
        }
        return true;
      },
      has({
        _: { data, setupState, accessCache, ctx, appContext, propsOptions }
      }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
      },
      defineProperty(target, key, descriptor) {
        if (descriptor.get != null) {
          target._.accessCache[key] = 0;
        } else if (hasOwn(descriptor, "value")) {
          this.set(target, key, descriptor.value, null);
        }
        return Reflect.defineProperty(target, key, descriptor);
      }
    };
    function useSlots() {
      return getContext().slots;
    }
    function useAttrs$1() {
      return getContext().attrs;
    }
    function getContext() {
      const i = getCurrentInstance();
      return i.setupContext || (i.setupContext = createSetupContext(i));
    }
    function normalizePropsOrEmits(props) {
      return isArray$2(props) ? props.reduce(
        (normalized, p2) => (normalized[p2] = null, normalized),
        {}
      ) : props;
    }
    let shouldCacheAccess = true;
    function applyOptions(instance) {
      const options = resolveMergedOptions(instance);
      const publicThis = instance.proxy;
      const ctx = instance.ctx;
      shouldCacheAccess = false;
      if (options.beforeCreate) {
        callHook$1(options.beforeCreate, instance, "bc");
      }
      const {
        // state
        data: dataOptions,
        computed: computedOptions,
        methods,
        watch: watchOptions,
        provide: provideOptions,
        inject: injectOptions,
        // lifecycle
        created,
        beforeMount,
        mounted,
        beforeUpdate,
        updated,
        activated,
        deactivated,
        beforeDestroy,
        beforeUnmount,
        destroyed,
        unmounted,
        render: render2,
        renderTracked,
        renderTriggered,
        errorCaptured,
        serverPrefetch,
        // public API
        expose,
        inheritAttrs,
        // assets
        components,
        directives,
        filters
      } = options;
      const checkDuplicateProperties = null;
      if (injectOptions) {
        resolveInjections(injectOptions, ctx, checkDuplicateProperties);
      }
      if (methods) {
        for (const key in methods) {
          const methodHandler = methods[key];
          if (isFunction$1(methodHandler)) {
            {
              ctx[key] = methodHandler.bind(publicThis);
            }
          }
        }
      }
      if (dataOptions) {
        const data = dataOptions.call(publicThis, publicThis);
        if (!isObject$5(data))
          ;
        else {
          instance.data = reactive(data);
        }
      }
      shouldCacheAccess = true;
      if (computedOptions) {
        for (const key in computedOptions) {
          const opt = computedOptions[key];
          const get2 = isFunction$1(opt) ? opt.bind(publicThis, publicThis) : isFunction$1(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
          const set2 = !isFunction$1(opt) && isFunction$1(opt.set) ? opt.set.bind(publicThis) : NOOP;
          const c2 = computed({
            get: get2,
            set: set2
          });
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => c2.value,
            set: (v) => c2.value = v
          });
        }
      }
      if (watchOptions) {
        for (const key in watchOptions) {
          createWatcher(watchOptions[key], ctx, publicThis, key);
        }
      }
      if (provideOptions) {
        const provides = isFunction$1(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key) => {
          provide(key, provides[key]);
        });
      }
      if (created) {
        callHook$1(created, instance, "c");
      }
      function registerLifecycleHook(register, hook) {
        if (isArray$2(hook)) {
          hook.forEach((_hook) => register(_hook.bind(publicThis)));
        } else if (hook) {
          register(hook.bind(publicThis));
        }
      }
      registerLifecycleHook(onBeforeMount, beforeMount);
      registerLifecycleHook(onMounted, mounted);
      registerLifecycleHook(onBeforeUpdate, beforeUpdate);
      registerLifecycleHook(onUpdated, updated);
      registerLifecycleHook(onActivated, activated);
      registerLifecycleHook(onDeactivated, deactivated);
      registerLifecycleHook(onErrorCaptured, errorCaptured);
      registerLifecycleHook(onRenderTracked, renderTracked);
      registerLifecycleHook(onRenderTriggered, renderTriggered);
      registerLifecycleHook(onBeforeUnmount, beforeUnmount);
      registerLifecycleHook(onUnmounted, unmounted);
      registerLifecycleHook(onServerPrefetch, serverPrefetch);
      if (isArray$2(expose)) {
        if (expose.length) {
          const exposed = instance.exposed || (instance.exposed = {});
          expose.forEach((key) => {
            Object.defineProperty(exposed, key, {
              get: () => publicThis[key],
              set: (val) => publicThis[key] = val
            });
          });
        } else if (!instance.exposed) {
          instance.exposed = {};
        }
      }
      if (render2 && instance.render === NOOP) {
        instance.render = render2;
      }
      if (inheritAttrs != null) {
        instance.inheritAttrs = inheritAttrs;
      }
      if (components)
        instance.components = components;
      if (directives)
        instance.directives = directives;
    }
    function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
      if (isArray$2(injectOptions)) {
        injectOptions = normalizeInject(injectOptions);
      }
      for (const key in injectOptions) {
        const opt = injectOptions[key];
        let injected;
        if (isObject$5(opt)) {
          if ("default" in opt) {
            injected = inject(
              opt.from || key,
              opt.default,
              true
            );
          } else {
            injected = inject(opt.from || key);
          }
        } else {
          injected = inject(opt);
        }
        if (isRef(injected)) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => injected.value,
            set: (v) => injected.value = v
          });
        } else {
          ctx[key] = injected;
        }
      }
    }
    function callHook$1(hook, instance, type2) {
      callWithAsyncErrorHandling(
        isArray$2(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
        instance,
        type2
      );
    }
    function createWatcher(raw, ctx, publicThis, key) {
      const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
      if (isString$1(raw)) {
        const handler = ctx[raw];
        if (isFunction$1(handler)) {
          watch(getter, handler);
        }
      } else if (isFunction$1(raw)) {
        watch(getter, raw.bind(publicThis));
      } else if (isObject$5(raw)) {
        if (isArray$2(raw)) {
          raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
        } else {
          const handler = isFunction$1(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
          if (isFunction$1(handler)) {
            watch(getter, handler, raw);
          }
        }
      } else
        ;
    }
    function resolveMergedOptions(instance) {
      const base2 = instance.type;
      const { mixins, extends: extendsOptions } = base2;
      const {
        mixins: globalMixins,
        optionsCache: cache,
        config: { optionMergeStrategies }
      } = instance.appContext;
      const cached = cache.get(base2);
      let resolved;
      if (cached) {
        resolved = cached;
      } else if (!globalMixins.length && !mixins && !extendsOptions) {
        {
          resolved = base2;
        }
      } else {
        resolved = {};
        if (globalMixins.length) {
          globalMixins.forEach(
            (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
          );
        }
        mergeOptions(resolved, base2, optionMergeStrategies);
      }
      if (isObject$5(base2)) {
        cache.set(base2, resolved);
      }
      return resolved;
    }
    function mergeOptions(to, from, strats, asMixin = false) {
      const { mixins, extends: extendsOptions } = from;
      if (extendsOptions) {
        mergeOptions(to, extendsOptions, strats, true);
      }
      if (mixins) {
        mixins.forEach(
          (m) => mergeOptions(to, m, strats, true)
        );
      }
      for (const key in from) {
        if (asMixin && key === "expose")
          ;
        else {
          const strat = internalOptionMergeStrats[key] || strats && strats[key];
          to[key] = strat ? strat(to[key], from[key]) : from[key];
        }
      }
      return to;
    }
    const internalOptionMergeStrats = {
      data: mergeDataFn,
      props: mergeEmitsOrPropsOptions,
      emits: mergeEmitsOrPropsOptions,
      // objects
      methods: mergeObjectOptions,
      computed: mergeObjectOptions,
      // lifecycle
      beforeCreate: mergeAsArray,
      created: mergeAsArray,
      beforeMount: mergeAsArray,
      mounted: mergeAsArray,
      beforeUpdate: mergeAsArray,
      updated: mergeAsArray,
      beforeDestroy: mergeAsArray,
      beforeUnmount: mergeAsArray,
      destroyed: mergeAsArray,
      unmounted: mergeAsArray,
      activated: mergeAsArray,
      deactivated: mergeAsArray,
      errorCaptured: mergeAsArray,
      serverPrefetch: mergeAsArray,
      // assets
      components: mergeObjectOptions,
      directives: mergeObjectOptions,
      // watch
      watch: mergeWatchOptions,
      // provide / inject
      provide: mergeDataFn,
      inject: mergeInject
    };
    function mergeDataFn(to, from) {
      if (!from) {
        return to;
      }
      if (!to) {
        return from;
      }
      return function mergedDataFn() {
        return extend$3(
          isFunction$1(to) ? to.call(this, this) : to,
          isFunction$1(from) ? from.call(this, this) : from
        );
      };
    }
    function mergeInject(to, from) {
      return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
    }
    function normalizeInject(raw) {
      if (isArray$2(raw)) {
        const res = {};
        for (let i = 0; i < raw.length; i++) {
          res[raw[i]] = raw[i];
        }
        return res;
      }
      return raw;
    }
    function mergeAsArray(to, from) {
      return to ? [...new Set([].concat(to, from))] : from;
    }
    function mergeObjectOptions(to, from) {
      return to ? extend$3(/* @__PURE__ */ Object.create(null), to, from) : from;
    }
    function mergeEmitsOrPropsOptions(to, from) {
      if (to) {
        if (isArray$2(to) && isArray$2(from)) {
          return [.../* @__PURE__ */ new Set([...to, ...from])];
        }
        return extend$3(
          /* @__PURE__ */ Object.create(null),
          normalizePropsOrEmits(to),
          normalizePropsOrEmits(from != null ? from : {})
        );
      } else {
        return from;
      }
    }
    function mergeWatchOptions(to, from) {
      if (!to)
        return from;
      if (!from)
        return to;
      const merged = extend$3(/* @__PURE__ */ Object.create(null), to);
      for (const key in from) {
        merged[key] = mergeAsArray(to[key], from[key]);
      }
      return merged;
    }
    function createAppContext() {
      return {
        app: null,
        config: {
          isNativeTag: NO,
          performance: false,
          globalProperties: {},
          optionMergeStrategies: {},
          errorHandler: void 0,
          warnHandler: void 0,
          compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /* @__PURE__ */ Object.create(null),
        optionsCache: /* @__PURE__ */ new WeakMap(),
        propsCache: /* @__PURE__ */ new WeakMap(),
        emitsCache: /* @__PURE__ */ new WeakMap()
      };
    }
    let uid$1 = 0;
    function createAppAPI(render2, hydrate) {
      return function createApp2(rootComponent, rootProps = null) {
        if (!isFunction$1(rootComponent)) {
          rootComponent = extend$3({}, rootComponent);
        }
        if (rootProps != null && !isObject$5(rootProps)) {
          rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = /* @__PURE__ */ new WeakSet();
        let isMounted = false;
        const app2 = context.app = {
          _uid: uid$1++,
          _component: rootComponent,
          _props: rootProps,
          _container: null,
          _context: context,
          _instance: null,
          version: version$1,
          get config() {
            return context.config;
          },
          set config(v) {
          },
          use(plugin, ...options) {
            if (installedPlugins.has(plugin))
              ;
            else if (plugin && isFunction$1(plugin.install)) {
              installedPlugins.add(plugin);
              plugin.install(app2, ...options);
            } else if (isFunction$1(plugin)) {
              installedPlugins.add(plugin);
              plugin(app2, ...options);
            } else
              ;
            return app2;
          },
          mixin(mixin) {
            {
              if (!context.mixins.includes(mixin)) {
                context.mixins.push(mixin);
              }
            }
            return app2;
          },
          component(name2, component) {
            if (!component) {
              return context.components[name2];
            }
            context.components[name2] = component;
            return app2;
          },
          directive(name2, directive) {
            if (!directive) {
              return context.directives[name2];
            }
            context.directives[name2] = directive;
            return app2;
          },
          mount(rootContainer, isHydrate, namespace) {
            if (!isMounted) {
              const vnode = createVNode(rootComponent, rootProps);
              vnode.appContext = context;
              if (namespace === true) {
                namespace = "svg";
              } else if (namespace === false) {
                namespace = void 0;
              }
              if (isHydrate && hydrate) {
                hydrate(vnode, rootContainer);
              } else {
                render2(vnode, rootContainer, namespace);
              }
              isMounted = true;
              app2._container = rootContainer;
              rootContainer.__vue_app__ = app2;
              return getExposeProxy(vnode.component) || vnode.component.proxy;
            }
          },
          unmount() {
            if (isMounted) {
              render2(null, app2._container);
              delete app2._container.__vue_app__;
            }
          },
          provide(key, value) {
            context.provides[key] = value;
            return app2;
          },
          runWithContext(fn2) {
            const lastApp = currentApp;
            currentApp = app2;
            try {
              return fn2();
            } finally {
              currentApp = lastApp;
            }
          }
        };
        return app2;
      };
    }
    let currentApp = null;
    function provide(key, value) {
      if (!currentInstance)
        ;
      else {
        let provides = currentInstance.provides;
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
          provides = currentInstance.provides = Object.create(parentProvides);
        }
        provides[key] = value;
      }
    }
    function inject(key, defaultValue, treatDefaultAsFactory = false) {
      const instance = currentInstance || currentRenderingInstance;
      if (instance || currentApp) {
        const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
        if (provides && key in provides) {
          return provides[key];
        } else if (arguments.length > 1) {
          return treatDefaultAsFactory && isFunction$1(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
        } else
          ;
      }
    }
    function hasInjectionContext() {
      return !!(currentInstance || currentRenderingInstance || currentApp);
    }
    function initProps(instance, rawProps, isStateful, isSSR = false) {
      const props = {};
      const attrs = {};
      def(attrs, InternalObjectKey, 1);
      instance.propsDefaults = /* @__PURE__ */ Object.create(null);
      setFullProps(instance, rawProps, props, attrs);
      for (const key in instance.propsOptions[0]) {
        if (!(key in props)) {
          props[key] = void 0;
        }
      }
      if (isStateful) {
        instance.props = isSSR ? props : shallowReactive(props);
      } else {
        if (!instance.type.props) {
          instance.props = attrs;
        } else {
          instance.props = props;
        }
      }
      instance.attrs = attrs;
    }
    function updateProps(instance, rawProps, rawPrevProps, optimized) {
      const {
        props,
        attrs,
        vnode: { patchFlag }
      } = instance;
      const rawCurrentProps = toRaw(props);
      const [options] = instance.propsOptions;
      let hasAttrsChanged = false;
      if (
        // always force full diff in dev
        // - #1942 if hmr is enabled with sfc component
        // - vite#872 non-sfc component used by sfc component
        (optimized || patchFlag > 0) && !(patchFlag & 16)
      ) {
        if (patchFlag & 8) {
          const propsToUpdate = instance.vnode.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            let key = propsToUpdate[i];
            if (isEmitListener(instance.emitsOptions, key)) {
              continue;
            }
            const value = rawProps[key];
            if (options) {
              if (hasOwn(attrs, key)) {
                if (value !== attrs[key]) {
                  attrs[key] = value;
                  hasAttrsChanged = true;
                }
              } else {
                const camelizedKey = camelize(key);
                props[camelizedKey] = resolvePropValue(
                  options,
                  rawCurrentProps,
                  camelizedKey,
                  value,
                  instance,
                  false
                );
              }
            } else {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            }
          }
        }
      } else {
        if (setFullProps(instance, rawProps, props, attrs)) {
          hasAttrsChanged = true;
        }
        let kebabKey;
        for (const key in rawCurrentProps) {
          if (!rawProps || // for camelCase
          !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
          // and converted to camelCase (#955)
          ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
            if (options) {
              if (rawPrevProps && // for camelCase
              (rawPrevProps[key] !== void 0 || // for kebab-case
              rawPrevProps[kebabKey] !== void 0)) {
                props[key] = resolvePropValue(
                  options,
                  rawCurrentProps,
                  key,
                  void 0,
                  instance,
                  true
                );
              }
            } else {
              delete props[key];
            }
          }
        }
        if (attrs !== rawCurrentProps) {
          for (const key in attrs) {
            if (!rawProps || !hasOwn(rawProps, key) && true) {
              delete attrs[key];
              hasAttrsChanged = true;
            }
          }
        }
      }
      if (hasAttrsChanged) {
        trigger(instance, "set", "$attrs");
      }
    }
    function setFullProps(instance, rawProps, props, attrs) {
      const [options, needCastKeys] = instance.propsOptions;
      let hasAttrsChanged = false;
      let rawCastValues;
      if (rawProps) {
        for (let key in rawProps) {
          if (isReservedProp(key)) {
            continue;
          }
          const value = rawProps[key];
          let camelKey;
          if (options && hasOwn(options, camelKey = camelize(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) {
              props[camelKey] = value;
            } else {
              (rawCastValues || (rawCastValues = {}))[camelKey] = value;
            }
          } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
      if (needCastKeys) {
        const rawCurrentProps = toRaw(props);
        const castValues = rawCastValues || EMPTY_OBJ;
        for (let i = 0; i < needCastKeys.length; i++) {
          const key = needCastKeys[i];
          props[key] = resolvePropValue(
            options,
            rawCurrentProps,
            key,
            castValues[key],
            instance,
            !hasOwn(castValues, key)
          );
        }
      }
      return hasAttrsChanged;
    }
    function resolvePropValue(options, props, key, value, instance, isAbsent) {
      const opt = options[key];
      if (opt != null) {
        const hasDefault = hasOwn(opt, "default");
        if (hasDefault && value === void 0) {
          const defaultValue = opt.default;
          if (opt.type !== Function && !opt.skipFactory && isFunction$1(defaultValue)) {
            const { propsDefaults } = instance;
            if (key in propsDefaults) {
              value = propsDefaults[key];
            } else {
              const reset = setCurrentInstance(instance);
              value = propsDefaults[key] = defaultValue.call(
                null,
                props
              );
              reset();
            }
          } else {
            value = defaultValue;
          }
        }
        if (opt[
          0
          /* shouldCast */
        ]) {
          if (isAbsent && !hasDefault) {
            value = false;
          } else if (opt[
            1
            /* shouldCastTrue */
          ] && (value === "" || value === hyphenate(key))) {
            value = true;
          }
        }
      }
      return value;
    }
    function normalizePropsOptions(comp, appContext, asMixin = false) {
      const cache = appContext.propsCache;
      const cached = cache.get(comp);
      if (cached) {
        return cached;
      }
      const raw = comp.props;
      const normalized = {};
      const needCastKeys = [];
      let hasExtends = false;
      if (!isFunction$1(comp)) {
        const extendProps = (raw2) => {
          hasExtends = true;
          const [props, keys] = normalizePropsOptions(raw2, appContext, true);
          extend$3(normalized, props);
          if (keys)
            needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
          appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
          extendProps(comp.extends);
        }
        if (comp.mixins) {
          comp.mixins.forEach(extendProps);
        }
      }
      if (!raw && !hasExtends) {
        if (isObject$5(comp)) {
          cache.set(comp, EMPTY_ARR);
        }
        return EMPTY_ARR;
      }
      if (isArray$2(raw)) {
        for (let i = 0; i < raw.length; i++) {
          const normalizedKey = camelize(raw[i]);
          if (validatePropName(normalizedKey)) {
            normalized[normalizedKey] = EMPTY_OBJ;
          }
        }
      } else if (raw) {
        for (const key in raw) {
          const normalizedKey = camelize(key);
          if (validatePropName(normalizedKey)) {
            const opt = raw[key];
            const prop = normalized[normalizedKey] = isArray$2(opt) || isFunction$1(opt) ? { type: opt } : extend$3({}, opt);
            if (prop) {
              const booleanIndex = getTypeIndex(Boolean, prop.type);
              const stringIndex = getTypeIndex(String, prop.type);
              prop[
                0
                /* shouldCast */
              ] = booleanIndex > -1;
              prop[
                1
                /* shouldCastTrue */
              ] = stringIndex < 0 || booleanIndex < stringIndex;
              if (booleanIndex > -1 || hasOwn(prop, "default")) {
                needCastKeys.push(normalizedKey);
              }
            }
          }
        }
      }
      const res = [normalized, needCastKeys];
      if (isObject$5(comp)) {
        cache.set(comp, res);
      }
      return res;
    }
    function validatePropName(key) {
      if (key[0] !== "$" && !isReservedProp(key)) {
        return true;
      }
      return false;
    }
    function getType(ctor) {
      if (ctor === null) {
        return "null";
      }
      if (typeof ctor === "function") {
        return ctor.name || "";
      } else if (typeof ctor === "object") {
        const name2 = ctor.constructor && ctor.constructor.name;
        return name2 || "";
      }
      return "";
    }
    function isSameType(a, b) {
      return getType(a) === getType(b);
    }
    function getTypeIndex(type2, expectedTypes) {
      if (isArray$2(expectedTypes)) {
        return expectedTypes.findIndex((t) => isSameType(t, type2));
      } else if (isFunction$1(expectedTypes)) {
        return isSameType(expectedTypes, type2) ? 0 : -1;
      }
      return -1;
    }
    const isInternalKey = (key) => key[0] === "_" || key === "$stable";
    const normalizeSlotValue = (value) => isArray$2(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
    const normalizeSlot = (key, rawSlot, ctx) => {
      if (rawSlot._n) {
        return rawSlot;
      }
      const normalized = withCtx((...args) => {
        if (false)
          ;
        return normalizeSlotValue(rawSlot(...args));
      }, ctx);
      normalized._c = false;
      return normalized;
    };
    const normalizeObjectSlots = (rawSlots, slots, instance) => {
      const ctx = rawSlots._ctx;
      for (const key in rawSlots) {
        if (isInternalKey(key))
          continue;
        const value = rawSlots[key];
        if (isFunction$1(value)) {
          slots[key] = normalizeSlot(key, value, ctx);
        } else if (value != null) {
          const normalized = normalizeSlotValue(value);
          slots[key] = () => normalized;
        }
      }
    };
    const normalizeVNodeSlots = (instance, children) => {
      const normalized = normalizeSlotValue(children);
      instance.slots.default = () => normalized;
    };
    const initSlots = (instance, children) => {
      if (instance.vnode.shapeFlag & 32) {
        const type2 = children._;
        if (type2) {
          instance.slots = toRaw(children);
          def(children, "_", type2);
        } else {
          normalizeObjectSlots(
            children,
            instance.slots = {}
          );
        }
      } else {
        instance.slots = {};
        if (children) {
          normalizeVNodeSlots(instance, children);
        }
      }
      def(instance.slots, InternalObjectKey, 1);
    };
    const updateSlots = (instance, children, optimized) => {
      const { vnode, slots } = instance;
      let needDeletionCheck = true;
      let deletionComparisonTarget = EMPTY_OBJ;
      if (vnode.shapeFlag & 32) {
        const type2 = children._;
        if (type2) {
          if (optimized && type2 === 1) {
            needDeletionCheck = false;
          } else {
            extend$3(slots, children);
            if (!optimized && type2 === 1) {
              delete slots._;
            }
          }
        } else {
          needDeletionCheck = !children.$stable;
          normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
      } else if (children) {
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
      }
      if (needDeletionCheck) {
        for (const key in slots) {
          if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
            delete slots[key];
          }
        }
      }
    };
    function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
      if (isArray$2(rawRef)) {
        rawRef.forEach(
          (r, i) => setRef(
            r,
            oldRawRef && (isArray$2(oldRawRef) ? oldRawRef[i] : oldRawRef),
            parentSuspense,
            vnode,
            isUnmount
          )
        );
        return;
      }
      if (isAsyncWrapper(vnode) && !isUnmount) {
        return;
      }
      const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
      const value = isUnmount ? null : refValue;
      const { i: owner, r: ref2 } = rawRef;
      const oldRef = oldRawRef && oldRawRef.r;
      const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
      const setupState = owner.setupState;
      if (oldRef != null && oldRef !== ref2) {
        if (isString$1(oldRef)) {
          refs[oldRef] = null;
          if (hasOwn(setupState, oldRef)) {
            setupState[oldRef] = null;
          }
        } else if (isRef(oldRef)) {
          oldRef.value = null;
        }
      }
      if (isFunction$1(ref2)) {
        callWithErrorHandling(ref2, owner, 12, [value, refs]);
      } else {
        const _isString = isString$1(ref2);
        const _isRef = isRef(ref2);
        if (_isString || _isRef) {
          const doSet = () => {
            if (rawRef.f) {
              const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
              if (isUnmount) {
                isArray$2(existing) && remove(existing, refValue);
              } else {
                if (!isArray$2(existing)) {
                  if (_isString) {
                    refs[ref2] = [refValue];
                    if (hasOwn(setupState, ref2)) {
                      setupState[ref2] = refs[ref2];
                    }
                  } else {
                    ref2.value = [refValue];
                    if (rawRef.k)
                      refs[rawRef.k] = ref2.value;
                  }
                } else if (!existing.includes(refValue)) {
                  existing.push(refValue);
                }
              }
            } else if (_isString) {
              refs[ref2] = value;
              if (hasOwn(setupState, ref2)) {
                setupState[ref2] = value;
              }
            } else if (_isRef) {
              ref2.value = value;
              if (rawRef.k)
                refs[rawRef.k] = value;
            } else
              ;
          };
          if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
          } else {
            doSet();
          }
        }
      }
    }
    const queuePostRenderEffect = queueEffectWithSuspense;
    function createRenderer(options) {
      return baseCreateRenderer(options);
    }
    function baseCreateRenderer(options, createHydrationFns) {
      const target = getGlobalThis();
      target.__VUE__ = true;
      const {
        insert: hostInsert,
        remove: hostRemove,
        patchProp: hostPatchProp,
        createElement: hostCreateElement,
        createText: hostCreateText,
        createComment: hostCreateComment,
        setText: hostSetText,
        setElementText: hostSetElementText,
        parentNode: hostParentNode,
        nextSibling: hostNextSibling,
        setScopeId: hostSetScopeId = NOOP,
        insertStaticContent: hostInsertStaticContent
      } = options;
      const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
        if (n1 === n2) {
          return;
        }
        if (n1 && !isSameVNodeType(n1, n2)) {
          anchor = getNextHostNode(n1);
          unmount2(n1, parentComponent, parentSuspense, true);
          n1 = null;
        }
        if (n2.patchFlag === -2) {
          optimized = false;
          n2.dynamicChildren = null;
        }
        const { type: type2, ref: ref2, shapeFlag } = n2;
        switch (type2) {
          case Text:
            processText(n1, n2, container, anchor);
            break;
          case Comment:
            processCommentNode(n1, n2, container, anchor);
            break;
          case Static:
            if (n1 == null) {
              mountStaticNode(n2, container, anchor, namespace);
            }
            break;
          case Fragment:
            processFragment(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            break;
          default:
            if (shapeFlag & 1) {
              processElement(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                namespace,
                slotScopeIds,
                optimized
              );
            } else if (shapeFlag & 6) {
              processComponent(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                namespace,
                slotScopeIds,
                optimized
              );
            } else if (shapeFlag & 64) {
              type2.process(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                namespace,
                slotScopeIds,
                optimized,
                internals
              );
            } else if (shapeFlag & 128) {
              type2.process(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                namespace,
                slotScopeIds,
                optimized,
                internals
              );
            } else
              ;
        }
        if (ref2 != null && parentComponent) {
          setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
        }
      };
      const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
          hostInsert(
            n2.el = hostCreateText(n2.children),
            container,
            anchor
          );
        } else {
          const el = n2.el = n1.el;
          if (n2.children !== n1.children) {
            hostSetText(el, n2.children);
          }
        }
      };
      const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
          hostInsert(
            n2.el = hostCreateComment(n2.children || ""),
            container,
            anchor
          );
        } else {
          n2.el = n1.el;
        }
      };
      const mountStaticNode = (n2, container, anchor, namespace) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(
          n2.children,
          container,
          anchor,
          namespace,
          n2.el,
          n2.anchor
        );
      };
      const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
          next = hostNextSibling(el);
          hostInsert(el, container, nextSibling);
          el = next;
        }
        hostInsert(anchor, container, nextSibling);
      };
      const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
          next = hostNextSibling(el);
          hostRemove(el);
          el = next;
        }
        hostRemove(anchor);
      };
      const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
        if (n2.type === "svg") {
          namespace = "svg";
        } else if (n2.type === "math") {
          namespace = "mathml";
        }
        if (n1 == null) {
          mountElement(
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          patchElement(
            n1,
            n2,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      };
      const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
        let el;
        let vnodeHook;
        const { props, shapeFlag, transition: transition2, dirs } = vnode;
        el = vnode.el = hostCreateElement(
          vnode.type,
          namespace,
          props && props.is,
          props
        );
        if (shapeFlag & 8) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16) {
          mountChildren(
            vnode.children,
            el,
            null,
            parentComponent,
            parentSuspense,
            resolveChildrenNamespace(vnode, namespace),
            slotScopeIds,
            optimized
          );
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        if (props) {
          for (const key in props) {
            if (key !== "value" && !isReservedProp(key)) {
              hostPatchProp(
                el,
                key,
                null,
                props[key],
                namespace,
                vnode.children,
                parentComponent,
                parentSuspense,
                unmountChildren
              );
            }
          }
          if ("value" in props) {
            hostPatchProp(el, "value", null, props.value, namespace);
          }
          if (vnodeHook = props.onVnodeBeforeMount) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        }
        const needCallTransitionHooks = needTransition(parentSuspense, transition2);
        if (needCallTransitionHooks) {
          transition2.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
          queuePostRenderEffect(() => {
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition2.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
          }, parentSuspense);
        }
      };
      const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
        if (scopeId) {
          hostSetScopeId(el, scopeId);
        }
        if (slotScopeIds) {
          for (let i = 0; i < slotScopeIds.length; i++) {
            hostSetScopeId(el, slotScopeIds[i]);
          }
        }
        if (parentComponent) {
          let subTree = parentComponent.subTree;
          if (vnode === subTree) {
            const parentVNode = parentComponent.vnode;
            setScopeId(
              el,
              parentVNode,
              parentVNode.scopeId,
              parentVNode.slotScopeIds,
              parentComponent.parent
            );
          }
        }
      };
      const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
          const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
          patch(
            null,
            child,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      };
      const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
        const el = n2.el = n1.el;
        let { patchFlag, dynamicChildren, dirs } = n2;
        patchFlag |= n1.patchFlag & 16;
        const oldProps = n1.props || EMPTY_OBJ;
        const newProps = n2.props || EMPTY_OBJ;
        let vnodeHook;
        parentComponent && toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
          invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        }
        parentComponent && toggleRecurse(parentComponent, true);
        if (dynamicChildren) {
          patchBlockChildren(
            n1.dynamicChildren,
            dynamicChildren,
            el,
            parentComponent,
            parentSuspense,
            resolveChildrenNamespace(n2, namespace),
            slotScopeIds
          );
        } else if (!optimized) {
          patchChildren(
            n1,
            n2,
            el,
            null,
            parentComponent,
            parentSuspense,
            resolveChildrenNamespace(n2, namespace),
            slotScopeIds,
            false
          );
        }
        if (patchFlag > 0) {
          if (patchFlag & 16) {
            patchProps(
              el,
              n2,
              oldProps,
              newProps,
              parentComponent,
              parentSuspense,
              namespace
            );
          } else {
            if (patchFlag & 2) {
              if (oldProps.class !== newProps.class) {
                hostPatchProp(el, "class", null, newProps.class, namespace);
              }
            }
            if (patchFlag & 4) {
              hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
            }
            if (patchFlag & 8) {
              const propsToUpdate = n2.dynamicProps;
              for (let i = 0; i < propsToUpdate.length; i++) {
                const key = propsToUpdate[i];
                const prev = oldProps[key];
                const next = newProps[key];
                if (next !== prev || key === "value") {
                  hostPatchProp(
                    el,
                    key,
                    prev,
                    next,
                    namespace,
                    n1.children,
                    parentComponent,
                    parentSuspense,
                    unmountChildren
                  );
                }
              }
            }
          }
          if (patchFlag & 1) {
            if (n1.children !== n2.children) {
              hostSetElementText(el, n2.children);
            }
          }
        } else if (!optimized && dynamicChildren == null) {
          patchProps(
            el,
            n2,
            oldProps,
            newProps,
            parentComponent,
            parentSuspense,
            namespace
          );
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
          queuePostRenderEffect(() => {
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
          }, parentSuspense);
        }
      };
      const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
        for (let i = 0; i < newChildren.length; i++) {
          const oldVNode = oldChildren[i];
          const newVNode = newChildren[i];
          const container = (
            // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
              // In other cases, the parent container is not actually used so we
              // just pass the block element here to avoid a DOM parentNode call.
              fallbackContainer
            )
          );
          patch(
            oldVNode,
            newVNode,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            true
          );
        }
      };
      const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace) => {
        if (oldProps !== newProps) {
          if (oldProps !== EMPTY_OBJ) {
            for (const key in oldProps) {
              if (!isReservedProp(key) && !(key in newProps)) {
                hostPatchProp(
                  el,
                  key,
                  oldProps[key],
                  null,
                  namespace,
                  vnode.children,
                  parentComponent,
                  parentSuspense,
                  unmountChildren
                );
              }
            }
          }
          for (const key in newProps) {
            if (isReservedProp(key))
              continue;
            const next = newProps[key];
            const prev = oldProps[key];
            if (next !== prev && key !== "value") {
              hostPatchProp(
                el,
                key,
                prev,
                next,
                namespace,
                vnode.children,
                parentComponent,
                parentSuspense,
                unmountChildren
              );
            }
          }
          if ("value" in newProps) {
            hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
          }
        }
      };
      const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (fragmentSlotScopeIds) {
          slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        }
        if (n1 == null) {
          hostInsert(fragmentStartAnchor, container, anchor);
          hostInsert(fragmentEndAnchor, container, anchor);
          mountChildren(
            // #10007
            // such fragment like `<></>` will be compiled into
            // a fragment which doesn't have a children.
            // In this case fallback to an empty array
            n2.children || [],
            container,
            fragmentEndAnchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
          // of renderSlot() with no valid children
          n1.dynamicChildren) {
            patchBlockChildren(
              n1.dynamicChildren,
              dynamicChildren,
              container,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds
            );
            if (
              // #2080 if the stable fragment has a key, it's a <template v-for> that may
              //  get moved around. Make sure all root level vnodes inherit el.
              // #2134 or if it's a component root, it may also get moved around
              // as the component is being moved.
              n2.key != null || parentComponent && n2 === parentComponent.subTree
            ) {
              traverseStaticChildren(
                n1,
                n2,
                true
                /* shallow */
              );
            }
          } else {
            patchChildren(
              n1,
              n2,
              container,
              fragmentEndAnchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          }
        }
      };
      const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
          if (n2.shapeFlag & 512) {
            parentComponent.ctx.activate(
              n2,
              container,
              anchor,
              namespace,
              optimized
            );
          } else {
            mountComponent(
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              optimized
            );
          }
        } else {
          updateComponent(n1, n2, optimized);
        }
      };
      const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
        const instance = initialVNode.component = createComponentInstance(
          initialVNode,
          parentComponent,
          parentSuspense
        );
        if (isKeepAlive(initialVNode)) {
          instance.ctx.renderer = internals;
        }
        {
          setupComponent(instance);
        }
        if (instance.asyncDep) {
          parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
          if (!initialVNode.el) {
            const placeholder = instance.subTree = createVNode(Comment);
            processCommentNode(null, placeholder, container, anchor);
          }
        } else {
          setupRenderEffect(
            instance,
            initialVNode,
            container,
            anchor,
            parentSuspense,
            namespace,
            optimized
          );
        }
      };
      const updateComponent = (n1, n2, optimized) => {
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
          if (instance.asyncDep && !instance.asyncResolved) {
            updateComponentPreRender(instance, n2, optimized);
            return;
          } else {
            instance.next = n2;
            invalidateJob(instance.update);
            instance.effect.dirty = true;
            instance.update();
          }
        } else {
          n2.el = n1.el;
          instance.vnode = n2;
        }
      };
      const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
        const componentUpdateFn = () => {
          if (!instance.isMounted) {
            let vnodeHook;
            const { el, props } = initialVNode;
            const { bm, m, parent } = instance;
            const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
            toggleRecurse(instance, false);
            if (bm) {
              invokeArrayFns(bm);
            }
            if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
              invokeVNodeHook(vnodeHook, parent, initialVNode);
            }
            toggleRecurse(instance, true);
            if (el && hydrateNode) {
              const hydrateSubTree = () => {
                instance.subTree = renderComponentRoot(instance);
                hydrateNode(
                  el,
                  instance.subTree,
                  instance,
                  parentSuspense,
                  null
                );
              };
              if (isAsyncWrapperVNode) {
                initialVNode.type.__asyncLoader().then(
                  // note: we are moving the render call into an async callback,
                  // which means it won't track dependencies - but it's ok because
                  // a server-rendered async wrapper is already in resolved state
                  // and it will never need to change.
                  () => !instance.isUnmounted && hydrateSubTree()
                );
              } else {
                hydrateSubTree();
              }
            } else {
              const subTree = instance.subTree = renderComponentRoot(instance);
              patch(
                null,
                subTree,
                container,
                anchor,
                instance,
                parentSuspense,
                namespace
              );
              initialVNode.el = subTree.el;
            }
            if (m) {
              queuePostRenderEffect(m, parentSuspense);
            }
            if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
              const scopedInitialVNode = initialVNode;
              queuePostRenderEffect(
                () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
                parentSuspense
              );
            }
            if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
              instance.a && queuePostRenderEffect(instance.a, parentSuspense);
            }
            instance.isMounted = true;
            initialVNode = container = anchor = null;
          } else {
            let { next, bu, u, parent, vnode } = instance;
            {
              const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
              if (nonHydratedAsyncRoot) {
                if (next) {
                  next.el = vnode.el;
                  updateComponentPreRender(instance, next, optimized);
                }
                nonHydratedAsyncRoot.asyncDep.then(() => {
                  if (!instance.isUnmounted) {
                    componentUpdateFn();
                  }
                });
                return;
              }
            }
            let originNext = next;
            let vnodeHook;
            toggleRecurse(instance, false);
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            } else {
              next = vnode;
            }
            if (bu) {
              invokeArrayFns(bu);
            }
            if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
              invokeVNodeHook(vnodeHook, parent, next, vnode);
            }
            toggleRecurse(instance, true);
            const nextTree = renderComponentRoot(instance);
            const prevTree = instance.subTree;
            instance.subTree = nextTree;
            patch(
              prevTree,
              nextTree,
              // parent may have changed if it's in a teleport
              hostParentNode(prevTree.el),
              // anchor may have changed if it's in a fragment
              getNextHostNode(prevTree),
              instance,
              parentSuspense,
              namespace
            );
            next.el = nextTree.el;
            if (originNext === null) {
              updateHOCHostEl(instance, nextTree.el);
            }
            if (u) {
              queuePostRenderEffect(u, parentSuspense);
            }
            if (vnodeHook = next.props && next.props.onVnodeUpdated) {
              queuePostRenderEffect(
                () => invokeVNodeHook(vnodeHook, parent, next, vnode),
                parentSuspense
              );
            }
          }
        };
        const effect = instance.effect = new ReactiveEffect(
          componentUpdateFn,
          NOOP,
          () => queueJob(update2),
          instance.scope
          // track it in component's effect scope
        );
        const update2 = instance.update = () => {
          if (effect.dirty) {
            effect.run();
          }
        };
        update2.id = instance.uid;
        toggleRecurse(instance, true);
        update2();
      };
      const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        pauseTracking();
        flushPreFlushCbs(instance);
        resetTracking();
      };
      const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        if (patchFlag > 0) {
          if (patchFlag & 128) {
            patchKeyedChildren(
              c1,
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            return;
          } else if (patchFlag & 256) {
            patchUnkeyedChildren(
              c1,
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            return;
          }
        }
        if (shapeFlag & 8) {
          if (prevShapeFlag & 16) {
            unmountChildren(c1, parentComponent, parentSuspense);
          }
          if (c2 !== c1) {
            hostSetElementText(container, c2);
          }
        } else {
          if (prevShapeFlag & 16) {
            if (shapeFlag & 16) {
              patchKeyedChildren(
                c1,
                c2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                namespace,
                slotScopeIds,
                optimized
              );
            } else {
              unmountChildren(c1, parentComponent, parentSuspense, true);
            }
          } else {
            if (prevShapeFlag & 8) {
              hostSetElementText(container, "");
            }
            if (shapeFlag & 16) {
              mountChildren(
                c2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                namespace,
                slotScopeIds,
                optimized
              );
            }
          }
        }
      };
      const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
        c1 = c1 || EMPTY_ARR;
        c2 = c2 || EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          patch(
            c1[i],
            nextChild,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
        if (oldLength > newLength) {
          unmountChildren(
            c1,
            parentComponent,
            parentSuspense,
            true,
            false,
            commonLength
          );
        } else {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            commonLength
          );
        }
      };
      const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1;
        let e2 = l2 - 1;
        while (i <= e1 && i <= e2) {
          const n1 = c1[i];
          const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (isSameVNodeType(n1, n2)) {
            patch(
              n1,
              n2,
              container,
              null,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else {
            break;
          }
          i++;
        }
        while (i <= e1 && i <= e2) {
          const n1 = c1[e1];
          const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
          if (isSameVNodeType(n1, n2)) {
            patch(
              n1,
              n2,
              container,
              null,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else {
            break;
          }
          e1--;
          e2--;
        }
        if (i > e1) {
          if (i <= e2) {
            const nextPos = e2 + 1;
            const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
            while (i <= e2) {
              patch(
                null,
                c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
                container,
                anchor,
                parentComponent,
                parentSuspense,
                namespace,
                slotScopeIds,
                optimized
              );
              i++;
            }
          }
        } else if (i > e2) {
          while (i <= e1) {
            unmount2(c1[i], parentComponent, parentSuspense, true);
            i++;
          }
        } else {
          const s1 = i;
          const s2 = i;
          const keyToNewIndexMap = /* @__PURE__ */ new Map();
          for (i = s2; i <= e2; i++) {
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (nextChild.key != null) {
              keyToNewIndexMap.set(nextChild.key, i);
            }
          }
          let j2;
          let patched = 0;
          const toBePatched = e2 - s2 + 1;
          let moved = false;
          let maxNewIndexSoFar = 0;
          const newIndexToOldIndexMap = new Array(toBePatched);
          for (i = 0; i < toBePatched; i++)
            newIndexToOldIndexMap[i] = 0;
          for (i = s1; i <= e1; i++) {
            const prevChild = c1[i];
            if (patched >= toBePatched) {
              unmount2(prevChild, parentComponent, parentSuspense, true);
              continue;
            }
            let newIndex;
            if (prevChild.key != null) {
              newIndex = keyToNewIndexMap.get(prevChild.key);
            } else {
              for (j2 = s2; j2 <= e2; j2++) {
                if (newIndexToOldIndexMap[j2 - s2] === 0 && isSameVNodeType(prevChild, c2[j2])) {
                  newIndex = j2;
                  break;
                }
              }
            }
            if (newIndex === void 0) {
              unmount2(prevChild, parentComponent, parentSuspense, true);
            } else {
              newIndexToOldIndexMap[newIndex - s2] = i + 1;
              if (newIndex >= maxNewIndexSoFar) {
                maxNewIndexSoFar = newIndex;
              } else {
                moved = true;
              }
              patch(
                prevChild,
                c2[newIndex],
                container,
                null,
                parentComponent,
                parentSuspense,
                namespace,
                slotScopeIds,
                optimized
              );
              patched++;
            }
          }
          const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
          j2 = increasingNewIndexSequence.length - 1;
          for (i = toBePatched - 1; i >= 0; i--) {
            const nextIndex2 = s2 + i;
            const nextChild = c2[nextIndex2];
            const anchor = nextIndex2 + 1 < l2 ? c2[nextIndex2 + 1].el : parentAnchor;
            if (newIndexToOldIndexMap[i] === 0) {
              patch(
                null,
                nextChild,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                namespace,
                slotScopeIds,
                optimized
              );
            } else if (moved) {
              if (j2 < 0 || i !== increasingNewIndexSequence[j2]) {
                move(nextChild, container, anchor, 2);
              } else {
                j2--;
              }
            }
          }
        }
      };
      const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type: type2, transition: transition2, children, shapeFlag } = vnode;
        if (shapeFlag & 6) {
          move(vnode.component.subTree, container, anchor, moveType);
          return;
        }
        if (shapeFlag & 128) {
          vnode.suspense.move(container, anchor, moveType);
          return;
        }
        if (shapeFlag & 64) {
          type2.move(vnode, container, anchor, internals);
          return;
        }
        if (type2 === Fragment) {
          hostInsert(el, container, anchor);
          for (let i = 0; i < children.length; i++) {
            move(children[i], container, anchor, moveType);
          }
          hostInsert(vnode.anchor, container, anchor);
          return;
        }
        if (type2 === Static) {
          moveStaticNode(vnode, container, anchor);
          return;
        }
        const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition2;
        if (needTransition2) {
          if (moveType === 0) {
            transition2.beforeEnter(el);
            hostInsert(el, container, anchor);
            queuePostRenderEffect(() => transition2.enter(el), parentSuspense);
          } else {
            const { leave, delayLeave, afterLeave } = transition2;
            const remove22 = () => hostInsert(el, container, anchor);
            const performLeave = () => {
              leave(el, () => {
                remove22();
                afterLeave && afterLeave();
              });
            };
            if (delayLeave) {
              delayLeave(el, remove22, performLeave);
            } else {
              performLeave();
            }
          }
        } else {
          hostInsert(el, container, anchor);
        }
      };
      const unmount2 = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const {
          type: type2,
          props,
          ref: ref2,
          children,
          dynamicChildren,
          shapeFlag,
          patchFlag,
          dirs
        } = vnode;
        if (ref2 != null) {
          setRef(ref2, null, parentSuspense, vnode, true);
        }
        if (shapeFlag & 256) {
          parentComponent.ctx.deactivate(vnode);
          return;
        }
        const shouldInvokeDirs = shapeFlag & 1 && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6) {
          unmountComponent(vnode.component, parentSuspense, doRemove);
        } else {
          if (shapeFlag & 128) {
            vnode.suspense.unmount(parentSuspense, doRemove);
            return;
          }
          if (shouldInvokeDirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
          }
          if (shapeFlag & 64) {
            vnode.type.remove(
              vnode,
              parentComponent,
              parentSuspense,
              optimized,
              internals,
              doRemove
            );
          } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
          (type2 !== Fragment || patchFlag > 0 && patchFlag & 64)) {
            unmountChildren(
              dynamicChildren,
              parentComponent,
              parentSuspense,
              false,
              true
            );
          } else if (type2 === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
            unmountChildren(children, parentComponent, parentSuspense);
          }
          if (doRemove) {
            remove2(vnode);
          }
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
          queuePostRenderEffect(() => {
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
          }, parentSuspense);
        }
      };
      const remove2 = (vnode) => {
        const { type: type2, el, anchor, transition: transition2 } = vnode;
        if (type2 === Fragment) {
          {
            removeFragment(el, anchor);
          }
          return;
        }
        if (type2 === Static) {
          removeStaticNode(vnode);
          return;
        }
        const performRemove = () => {
          hostRemove(el);
          if (transition2 && !transition2.persisted && transition2.afterLeave) {
            transition2.afterLeave();
          }
        };
        if (vnode.shapeFlag & 1 && transition2 && !transition2.persisted) {
          const { leave, delayLeave } = transition2;
          const performLeave = () => leave(el, performRemove);
          if (delayLeave) {
            delayLeave(vnode.el, performRemove, performLeave);
          } else {
            performLeave();
          }
        } else {
          performRemove();
        }
      };
      const removeFragment = (cur, end2) => {
        let next;
        while (cur !== end2) {
          next = hostNextSibling(cur);
          hostRemove(cur);
          cur = next;
        }
        hostRemove(end2);
      };
      const unmountComponent = (instance, parentSuspense, doRemove) => {
        const { bum, scope, update: update2, subTree, um } = instance;
        if (bum) {
          invokeArrayFns(bum);
        }
        scope.stop();
        if (update2) {
          update2.active = false;
          unmount2(subTree, instance, parentSuspense, doRemove);
        }
        if (um) {
          queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
          instance.isUnmounted = true;
        }, parentSuspense);
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0) {
            parentSuspense.resolve();
          }
        }
      };
      const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
          unmount2(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
      };
      const getNextHostNode = (vnode) => {
        if (vnode.shapeFlag & 6) {
          return getNextHostNode(vnode.component.subTree);
        }
        if (vnode.shapeFlag & 128) {
          return vnode.suspense.next();
        }
        return hostNextSibling(vnode.anchor || vnode.el);
      };
      let isFlushing2 = false;
      const render2 = (vnode, container, namespace) => {
        if (vnode == null) {
          if (container._vnode) {
            unmount2(container._vnode, null, null, true);
          }
        } else {
          patch(
            container._vnode || null,
            vnode,
            container,
            null,
            null,
            null,
            namespace
          );
        }
        if (!isFlushing2) {
          isFlushing2 = true;
          flushPreFlushCbs();
          flushPostFlushCbs();
          isFlushing2 = false;
        }
        container._vnode = vnode;
      };
      const internals = {
        p: patch,
        um: unmount2,
        m: move,
        r: remove2,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
      };
      let hydrate;
      let hydrateNode;
      if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(
          internals
        );
      }
      return {
        render: render2,
        hydrate,
        createApp: createAppAPI(render2, hydrate)
      };
    }
    function resolveChildrenNamespace({ type: type2, props }, currentNamespace) {
      return currentNamespace === "svg" && type2 === "foreignObject" || currentNamespace === "mathml" && type2 === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
    }
    function toggleRecurse({ effect, update: update2 }, allowed) {
      effect.allowRecurse = update2.allowRecurse = allowed;
    }
    function needTransition(parentSuspense, transition2) {
      return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition2 && !transition2.persisted;
    }
    function traverseStaticChildren(n1, n2, shallow = false) {
      const ch1 = n1.children;
      const ch2 = n2.children;
      if (isArray$2(ch1) && isArray$2(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
          const c1 = ch1[i];
          let c2 = ch2[i];
          if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
              c2 = ch2[i] = cloneIfMounted(ch2[i]);
              c2.el = c1.el;
            }
            if (!shallow)
              traverseStaticChildren(c1, c2);
          }
          if (c2.type === Text) {
            c2.el = c1.el;
          }
        }
      }
    }
    function getSequence(arr) {
      const p2 = arr.slice();
      const result = [0];
      let i, j2, u, v, c2;
      const len = arr.length;
      for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
          j2 = result[result.length - 1];
          if (arr[j2] < arrI) {
            p2[i] = j2;
            result.push(i);
            continue;
          }
          u = 0;
          v = result.length - 1;
          while (u < v) {
            c2 = u + v >> 1;
            if (arr[result[c2]] < arrI) {
              u = c2 + 1;
            } else {
              v = c2;
            }
          }
          if (arrI < arr[result[u]]) {
            if (u > 0) {
              p2[i] = result[u - 1];
            }
            result[u] = i;
          }
        }
      }
      u = result.length;
      v = result[u - 1];
      while (u-- > 0) {
        result[u] = v;
        v = p2[v];
      }
      return result;
    }
    function locateNonHydratedAsyncRoot(instance) {
      const subComponent = instance.subTree.component;
      if (subComponent) {
        if (subComponent.asyncDep && !subComponent.asyncResolved) {
          return subComponent;
        } else {
          return locateNonHydratedAsyncRoot(subComponent);
        }
      }
    }
    const isTeleport = (type2) => type2.__isTeleport;
    const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
    const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
    const isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
    const resolveTarget = (props, select) => {
      const targetSelector = props && props.to;
      if (isString$1(targetSelector)) {
        if (!select) {
          return null;
        } else {
          const target = select(targetSelector);
          return target;
        }
      } else {
        return targetSelector;
      }
    };
    const TeleportImpl = {
      name: "Teleport",
      __isTeleport: true,
      process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
        const {
          mc: mountChildren,
          pc: patchChildren,
          pbc: patchBlockChildren,
          o: { insert, querySelector, createText, createComment }
        } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag, children, dynamicChildren } = n2;
        if (n1 == null) {
          const placeholder = n2.el = createText("");
          const mainAnchor = n2.anchor = createText("");
          insert(placeholder, container, anchor);
          insert(mainAnchor, container, anchor);
          const target = n2.target = resolveTarget(n2.props, querySelector);
          const targetAnchor = n2.targetAnchor = createText("");
          if (target) {
            insert(targetAnchor, target);
            if (namespace === "svg" || isTargetSVG(target)) {
              namespace = "svg";
            } else if (namespace === "mathml" || isTargetMathML(target)) {
              namespace = "mathml";
            }
          }
          const mount2 = (container2, anchor2) => {
            if (shapeFlag & 16) {
              mountChildren(
                children,
                container2,
                anchor2,
                parentComponent,
                parentSuspense,
                namespace,
                slotScopeIds,
                optimized
              );
            }
          };
          if (disabled) {
            mount2(container, mainAnchor);
          } else if (target) {
            mount2(target, targetAnchor);
          }
        } else {
          n2.el = n1.el;
          const mainAnchor = n2.anchor = n1.anchor;
          const target = n2.target = n1.target;
          const targetAnchor = n2.targetAnchor = n1.targetAnchor;
          const wasDisabled = isTeleportDisabled(n1.props);
          const currentContainer = wasDisabled ? container : target;
          const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
          if (namespace === "svg" || isTargetSVG(target)) {
            namespace = "svg";
          } else if (namespace === "mathml" || isTargetMathML(target)) {
            namespace = "mathml";
          }
          if (dynamicChildren) {
            patchBlockChildren(
              n1.dynamicChildren,
              dynamicChildren,
              currentContainer,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds
            );
            traverseStaticChildren(n1, n2, true);
          } else if (!optimized) {
            patchChildren(
              n1,
              n2,
              currentContainer,
              currentAnchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              false
            );
          }
          if (disabled) {
            if (!wasDisabled) {
              moveTeleport(
                n2,
                container,
                mainAnchor,
                internals,
                1
              );
            } else {
              if (n2.props && n1.props && n2.props.to !== n1.props.to) {
                n2.props.to = n1.props.to;
              }
            }
          } else {
            if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
              const nextTarget = n2.target = resolveTarget(
                n2.props,
                querySelector
              );
              if (nextTarget) {
                moveTeleport(
                  n2,
                  nextTarget,
                  null,
                  internals,
                  0
                );
              }
            } else if (wasDisabled) {
              moveTeleport(
                n2,
                target,
                targetAnchor,
                internals,
                1
              );
            }
          }
        }
        updateCssVars(n2);
      },
      remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount2, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
        if (target) {
          hostRemove(targetAnchor);
        }
        doRemove && hostRemove(anchor);
        if (shapeFlag & 16) {
          const shouldRemove = doRemove || !isTeleportDisabled(props);
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            unmount2(
              child,
              parentComponent,
              parentSuspense,
              shouldRemove,
              !!child.dynamicChildren
            );
          }
        }
      },
      move: moveTeleport,
      hydrate: hydrateTeleport
    };
    function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
      if (moveType === 0) {
        insert(vnode.targetAnchor, container, parentAnchor);
      }
      const { el, anchor, shapeFlag, children, props } = vnode;
      const isReorder = moveType === 2;
      if (isReorder) {
        insert(el, container, parentAnchor);
      }
      if (!isReorder || isTeleportDisabled(props)) {
        if (shapeFlag & 16) {
          for (let i = 0; i < children.length; i++) {
            move(
              children[i],
              container,
              parentAnchor,
              2
            );
          }
        }
      }
      if (isReorder) {
        insert(anchor, container, parentAnchor);
      }
    }
    function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
      o: { nextSibling, parentNode, querySelector }
    }, hydrateChildren) {
      const target = vnode.target = resolveTarget(
        vnode.props,
        querySelector
      );
      if (target) {
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16) {
          if (isTeleportDisabled(vnode.props)) {
            vnode.anchor = hydrateChildren(
              nextSibling(node),
              vnode,
              parentNode(node),
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
            vnode.targetAnchor = targetNode;
          } else {
            vnode.anchor = nextSibling(node);
            let targetAnchor = targetNode;
            while (targetAnchor) {
              targetAnchor = nextSibling(targetAnchor);
              if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                vnode.targetAnchor = targetAnchor;
                target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                break;
              }
            }
            hydrateChildren(
              targetNode,
              vnode,
              target,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
        }
        updateCssVars(vnode);
      }
      return vnode.anchor && nextSibling(vnode.anchor);
    }
    const Teleport = TeleportImpl;
    function updateCssVars(vnode) {
      const ctx = vnode.ctx;
      if (ctx && ctx.ut) {
        let node = vnode.children[0].el;
        while (node && node !== vnode.targetAnchor) {
          if (node.nodeType === 1)
            node.setAttribute("data-v-owner", ctx.uid);
          node = node.nextSibling;
        }
        ctx.ut();
      }
    }
    const Fragment = Symbol.for("v-fgt");
    const Text = Symbol.for("v-txt");
    const Comment = Symbol.for("v-cmt");
    const Static = Symbol.for("v-stc");
    const blockStack = [];
    let currentBlock = null;
    function openBlock(disableTracking = false) {
      blockStack.push(currentBlock = disableTracking ? null : []);
    }
    function closeBlock() {
      blockStack.pop();
      currentBlock = blockStack[blockStack.length - 1] || null;
    }
    let isBlockTreeEnabled = 1;
    function setBlockTracking(value) {
      isBlockTreeEnabled += value;
    }
    function setupBlock(vnode) {
      vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
      closeBlock();
      if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(vnode);
      }
      return vnode;
    }
    function createElementBlock(type2, props, children, patchFlag, dynamicProps, shapeFlag) {
      return setupBlock(
        createBaseVNode(
          type2,
          props,
          children,
          patchFlag,
          dynamicProps,
          shapeFlag,
          true
        )
      );
    }
    function createBlock(type2, props, children, patchFlag, dynamicProps) {
      return setupBlock(
        createVNode(
          type2,
          props,
          children,
          patchFlag,
          dynamicProps,
          true
        )
      );
    }
    function isVNode(value) {
      return value ? value.__v_isVNode === true : false;
    }
    function isSameVNodeType(n1, n2) {
      return n1.type === n2.type && n1.key === n2.key;
    }
    const InternalObjectKey = `__vInternal`;
    const normalizeKey = ({ key }) => key != null ? key : null;
    const normalizeRef = ({
      ref: ref2,
      ref_key,
      ref_for
    }) => {
      if (typeof ref2 === "number") {
        ref2 = "" + ref2;
      }
      return ref2 != null ? isString$1(ref2) || isRef(ref2) || isFunction$1(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
    };
    function createBaseVNode(type2, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type2 === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
      const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type: type2,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: currentRenderingInstance
      };
      if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        if (shapeFlag & 128) {
          type2.normalize(vnode);
        }
      } else if (children) {
        vnode.shapeFlag |= isString$1(children) ? 8 : 16;
      }
      if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
      !isBlockNode && // has current parent block
      currentBlock && // presence of a patch flag indicates this node needs patching on updates.
      // component nodes also should always be patched, because even if the
      // component doesn't need to update, it needs to persist the instance on to
      // the next vnode so that it can be properly unmounted later.
      (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
      // vnode should not be considered dynamic due to handler caching.
      vnode.patchFlag !== 32) {
        currentBlock.push(vnode);
      }
      return vnode;
    }
    const createVNode = _createVNode;
    function _createVNode(type2, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
      if (!type2 || type2 === NULL_DYNAMIC_COMPONENT) {
        type2 = Comment;
      }
      if (isVNode(type2)) {
        const cloned = cloneVNode(
          type2,
          props,
          true
          /* mergeRef: true */
        );
        if (children) {
          normalizeChildren(cloned, children);
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
          if (cloned.shapeFlag & 6) {
            currentBlock[currentBlock.indexOf(type2)] = cloned;
          } else {
            currentBlock.push(cloned);
          }
        }
        cloned.patchFlag |= -2;
        return cloned;
      }
      if (isClassComponent(type2)) {
        type2 = type2.__vccOpts;
      }
      if (props) {
        props = guardReactiveProps(props);
        let { class: klass, style: style2 } = props;
        if (klass && !isString$1(klass)) {
          props.class = normalizeClass(klass);
        }
        if (isObject$5(style2)) {
          if (isProxy(style2) && !isArray$2(style2)) {
            style2 = extend$3({}, style2);
          }
          props.style = normalizeStyle(style2);
        }
      }
      const shapeFlag = isString$1(type2) ? 1 : isSuspense(type2) ? 128 : isTeleport(type2) ? 64 : isObject$5(type2) ? 4 : isFunction$1(type2) ? 2 : 0;
      return createBaseVNode(
        type2,
        props,
        children,
        patchFlag,
        dynamicProps,
        shapeFlag,
        isBlockNode,
        true
      );
    }
    function guardReactiveProps(props) {
      if (!props)
        return null;
      return isProxy(props) || InternalObjectKey in props ? extend$3({}, props) : props;
    }
    function cloneVNode(vnode, extraProps, mergeRef = false) {
      const { props, ref: ref2, patchFlag, children } = vnode;
      const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
      const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? (
          // #2078 in the case of <component :is="vnode" ref="extra"/>
          // if the vnode itself already has a ref, cloneVNode will need to merge
          // the refs so the single vnode can be set on multiple refs
          mergeRef && ref2 ? isArray$2(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
        ) : ref2,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce
      };
      return cloned;
    }
    function createTextVNode(text = " ", flag = 0) {
      return createVNode(Text, null, text, flag);
    }
    function createCommentVNode(text = "", asBlock = false) {
      return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
    }
    function normalizeVNode(child) {
      if (child == null || typeof child === "boolean") {
        return createVNode(Comment);
      } else if (isArray$2(child)) {
        return createVNode(
          Fragment,
          null,
          // #3666, avoid reference pollution when reusing vnode
          child.slice()
        );
      } else if (typeof child === "object") {
        return cloneIfMounted(child);
      } else {
        return createVNode(Text, null, String(child));
      }
    }
    function cloneIfMounted(child) {
      return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
    }
    function normalizeChildren(vnode, children) {
      let type2 = 0;
      const { shapeFlag } = vnode;
      if (children == null) {
        children = null;
      } else if (isArray$2(children)) {
        type2 = 16;
      } else if (typeof children === "object") {
        if (shapeFlag & (1 | 64)) {
          const slot = children.default;
          if (slot) {
            slot._c && (slot._d = false);
            normalizeChildren(vnode, slot());
            slot._c && (slot._d = true);
          }
          return;
        } else {
          type2 = 32;
          const slotFlag = children._;
          if (!slotFlag && !(InternalObjectKey in children)) {
            children._ctx = currentRenderingInstance;
          } else if (slotFlag === 3 && currentRenderingInstance) {
            if (currentRenderingInstance.slots._ === 1) {
              children._ = 1;
            } else {
              children._ = 2;
              vnode.patchFlag |= 1024;
            }
          }
        }
      } else if (isFunction$1(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type2 = 32;
      } else {
        children = String(children);
        if (shapeFlag & 64) {
          type2 = 16;
          children = [createTextVNode(children)];
        } else {
          type2 = 8;
        }
      }
      vnode.children = children;
      vnode.shapeFlag |= type2;
    }
    function mergeProps(...args) {
      const ret = {};
      for (let i = 0; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
          if (key === "class") {
            if (ret.class !== toMerge.class) {
              ret.class = normalizeClass([ret.class, toMerge.class]);
            }
          } else if (key === "style") {
            ret.style = normalizeStyle([ret.style, toMerge.style]);
          } else if (isOn(key)) {
            const existing = ret[key];
            const incoming = toMerge[key];
            if (incoming && existing !== incoming && !(isArray$2(existing) && existing.includes(incoming))) {
              ret[key] = existing ? [].concat(existing, incoming) : incoming;
            }
          } else if (key !== "") {
            ret[key] = toMerge[key];
          }
        }
      }
      return ret;
    }
    function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
      callWithAsyncErrorHandling(hook, instance, 7, [
        vnode,
        prevVNode
      ]);
    }
    const emptyAppContext = createAppContext();
    let uid = 0;
    function createComponentInstance(vnode, parent, suspense) {
      const type2 = vnode.type;
      const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
      const instance = {
        uid: uid++,
        vnode,
        type: type2,
        parent,
        appContext,
        root: null,
        // to be immediately set
        next: null,
        subTree: null,
        // will be set synchronously right after creation
        effect: null,
        update: null,
        // will be set synchronously right after creation
        scope: new EffectScope(
          true
          /* detached */
        ),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type2, appContext),
        emitsOptions: normalizeEmitsOptions(type2, appContext),
        // emit
        emit: null,
        // to be set immediately
        emitted: null,
        // props default value
        propsDefaults: EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type2.inheritAttrs,
        // state
        ctx: EMPTY_OBJ,
        data: EMPTY_OBJ,
        props: EMPTY_OBJ,
        attrs: EMPTY_OBJ,
        slots: EMPTY_OBJ,
        refs: EMPTY_OBJ,
        setupState: EMPTY_OBJ,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
      };
      {
        instance.ctx = { _: instance };
      }
      instance.root = parent ? parent.root : instance;
      instance.emit = emit.bind(null, instance);
      if (vnode.ce) {
        vnode.ce(instance);
      }
      return instance;
    }
    let currentInstance = null;
    const getCurrentInstance = () => currentInstance || currentRenderingInstance;
    let internalSetCurrentInstance;
    let setInSSRSetupState;
    {
      const g = getGlobalThis();
      const registerGlobalSetter = (key, setter) => {
        let setters;
        if (!(setters = g[key]))
          setters = g[key] = [];
        setters.push(setter);
        return (v) => {
          if (setters.length > 1)
            setters.forEach((set2) => set2(v));
          else
            setters[0](v);
        };
      };
      internalSetCurrentInstance = registerGlobalSetter(
        `__VUE_INSTANCE_SETTERS__`,
        (v) => currentInstance = v
      );
      setInSSRSetupState = registerGlobalSetter(
        `__VUE_SSR_SETTERS__`,
        (v) => isInSSRComponentSetup = v
      );
    }
    const setCurrentInstance = (instance) => {
      const prev = currentInstance;
      internalSetCurrentInstance(instance);
      instance.scope.on();
      return () => {
        instance.scope.off();
        internalSetCurrentInstance(prev);
      };
    };
    const unsetCurrentInstance = () => {
      currentInstance && currentInstance.scope.off();
      internalSetCurrentInstance(null);
    };
    function isStatefulComponent(instance) {
      return instance.vnode.shapeFlag & 4;
    }
    let isInSSRComponentSetup = false;
    function setupComponent(instance, isSSR = false) {
      isSSR && setInSSRSetupState(isSSR);
      const { props, children } = instance.vnode;
      const isStateful = isStatefulComponent(instance);
      initProps(instance, props, isStateful, isSSR);
      initSlots(instance, children);
      const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
      isSSR && setInSSRSetupState(false);
      return setupResult;
    }
    function setupStatefulComponent(instance, isSSR) {
      const Component = instance.type;
      instance.accessCache = /* @__PURE__ */ Object.create(null);
      instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
      const { setup } = Component;
      if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        const reset = setCurrentInstance(instance);
        pauseTracking();
        const setupResult = callWithErrorHandling(
          setup,
          instance,
          0,
          [
            instance.props,
            setupContext
          ]
        );
        resetTracking();
        reset();
        if (isPromise(setupResult)) {
          setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
          if (isSSR) {
            return setupResult.then((resolvedResult) => {
              handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e) => {
              handleError(e, instance, 0);
            });
          } else {
            instance.asyncDep = setupResult;
          }
        } else {
          handleSetupResult(instance, setupResult, isSSR);
        }
      } else {
        finishComponentSetup(instance, isSSR);
      }
    }
    function handleSetupResult(instance, setupResult, isSSR) {
      if (isFunction$1(setupResult)) {
        if (instance.type.__ssrInlineRender) {
          instance.ssrRender = setupResult;
        } else {
          instance.render = setupResult;
        }
      } else if (isObject$5(setupResult)) {
        instance.setupState = proxyRefs(setupResult);
      } else
        ;
      finishComponentSetup(instance, isSSR);
    }
    let compile;
    function finishComponentSetup(instance, isSSR, skipOptions) {
      const Component = instance.type;
      if (!instance.render) {
        if (!isSSR && compile && !Component.render) {
          const template = Component.template || resolveMergedOptions(instance).template;
          if (template) {
            const { isCustomElement, compilerOptions } = instance.appContext.config;
            const { delimiters, compilerOptions: componentCompilerOptions } = Component;
            const finalCompilerOptions = extend$3(
              extend$3(
                {
                  isCustomElement,
                  delimiters
                },
                compilerOptions
              ),
              componentCompilerOptions
            );
            Component.render = compile(template, finalCompilerOptions);
          }
        }
        instance.render = Component.render || NOOP;
      }
      {
        const reset = setCurrentInstance(instance);
        pauseTracking();
        try {
          applyOptions(instance);
        } finally {
          resetTracking();
          reset();
        }
      }
    }
    function getAttrsProxy(instance) {
      return instance.attrsProxy || (instance.attrsProxy = new Proxy(
        instance.attrs,
        {
          get(target, key) {
            track(instance, "get", "$attrs");
            return target[key];
          }
        }
      ));
    }
    function createSetupContext(instance) {
      const expose = (exposed) => {
        instance.exposed = exposed || {};
      };
      {
        return {
          get attrs() {
            return getAttrsProxy(instance);
          },
          slots: instance.slots,
          emit: instance.emit,
          expose
        };
      }
    }
    function getExposeProxy(instance) {
      if (instance.exposed) {
        return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
          get(target, key) {
            if (key in target) {
              return target[key];
            } else if (key in publicPropertiesMap) {
              return publicPropertiesMap[key](instance);
            }
          },
          has(target, key) {
            return key in target || key in publicPropertiesMap;
          }
        }));
      }
    }
    const classifyRE = /(?:^|[-_])(\w)/g;
    const classify = (str) => str.replace(classifyRE, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
    function getComponentName(Component, includeInferred = true) {
      return isFunction$1(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
    }
    function formatComponentName(instance, Component, isRoot = false) {
      let name2 = getComponentName(Component);
      if (!name2 && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) {
          name2 = match[1];
        }
      }
      if (!name2 && instance && instance.parent) {
        const inferFromRegistry = (registry) => {
          for (const key in registry) {
            if (registry[key] === Component) {
              return key;
            }
          }
        };
        name2 = inferFromRegistry(
          instance.components || instance.parent.type.components
        ) || inferFromRegistry(instance.appContext.components);
      }
      return name2 ? classify(name2) : isRoot ? `App` : `Anonymous`;
    }
    function isClassComponent(value) {
      return isFunction$1(value) && "__vccOpts" in value;
    }
    const computed = (getterOrOptions, debugOptions) => {
      return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
    };
    function h(type2, propsOrChildren, children) {
      const l = arguments.length;
      if (l === 2) {
        if (isObject$5(propsOrChildren) && !isArray$2(propsOrChildren)) {
          if (isVNode(propsOrChildren)) {
            return createVNode(type2, null, [propsOrChildren]);
          }
          return createVNode(type2, propsOrChildren);
        } else {
          return createVNode(type2, null, propsOrChildren);
        }
      } else {
        if (l > 3) {
          children = Array.prototype.slice.call(arguments, 2);
        } else if (l === 3 && isVNode(children)) {
          children = [children];
        }
        return createVNode(type2, propsOrChildren, children);
      }
    }
    const version$1 = "3.4.19";
    const warn = NOOP;
    /**
    * @vue/runtime-dom v3.4.19
    * (c) 2018-present Yuxi (Evan) You and Vue contributors
    * @license MIT
    **/
    const svgNS = "http://www.w3.org/2000/svg";
    const mathmlNS = "http://www.w3.org/1998/Math/MathML";
    const doc = typeof document !== "undefined" ? document : null;
    const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
    const nodeOps = {
      insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
      },
      remove: (child) => {
        const parent = child.parentNode;
        if (parent) {
          parent.removeChild(child);
        }
      },
      createElement: (tag, namespace, is, props) => {
        const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : doc.createElement(tag, is ? { is } : void 0);
        if (tag === "select" && props && props.multiple != null) {
          el.setAttribute("multiple", props.multiple);
        }
        return el;
      },
      createText: (text) => doc.createTextNode(text),
      createComment: (text) => doc.createComment(text),
      setText: (node, text) => {
        node.nodeValue = text;
      },
      setElementText: (el, text) => {
        el.textContent = text;
      },
      parentNode: (node) => node.parentNode,
      nextSibling: (node) => node.nextSibling,
      querySelector: (selector) => doc.querySelector(selector),
      setScopeId(el, id) {
        el.setAttribute(id, "");
      },
      // __UNSAFE__
      // Reason: innerHTML.
      // Static content here can only come from compiled templates.
      // As long as the user only uses trusted templates, this is safe.
      insertStaticContent(content, parent, anchor, namespace, start, end2) {
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        if (start && (start === end2 || start.nextSibling)) {
          while (true) {
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end2 || !(start = start.nextSibling))
              break;
          }
        } else {
          templateContainer.innerHTML = namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content;
          const template = templateContainer.content;
          if (namespace === "svg" || namespace === "mathml") {
            const wrapper = template.firstChild;
            while (wrapper.firstChild) {
              template.appendChild(wrapper.firstChild);
            }
            template.removeChild(wrapper);
          }
          parent.insertBefore(template, anchor);
        }
        return [
          // first
          before ? before.nextSibling : parent.firstChild,
          // last
          anchor ? anchor.previousSibling : parent.lastChild
        ];
      }
    };
    const TRANSITION = "transition";
    const ANIMATION = "animation";
    const vtcKey = Symbol("_vtc");
    const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
    Transition.displayName = "Transition";
    const DOMTransitionPropsValidators = {
      name: String,
      type: String,
      css: {
        type: Boolean,
        default: true
      },
      duration: [String, Number, Object],
      enterFromClass: String,
      enterActiveClass: String,
      enterToClass: String,
      appearFromClass: String,
      appearActiveClass: String,
      appearToClass: String,
      leaveFromClass: String,
      leaveActiveClass: String,
      leaveToClass: String
    };
    Transition.props = /* @__PURE__ */ extend$3(
      {},
      BaseTransitionPropsValidators,
      DOMTransitionPropsValidators
    );
    const callHook = (hook, args = []) => {
      if (isArray$2(hook)) {
        hook.forEach((h2) => h2(...args));
      } else if (hook) {
        hook(...args);
      }
    };
    const hasExplicitCallback = (hook) => {
      return hook ? isArray$2(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
    };
    function resolveTransitionProps(rawProps) {
      const baseProps = {};
      for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
          baseProps[key] = rawProps[key];
        }
      }
      if (rawProps.css === false) {
        return baseProps;
      }
      const {
        name: name2 = "v",
        type: type2,
        duration,
        enterFromClass = `${name2}-enter-from`,
        enterActiveClass = `${name2}-enter-active`,
        enterToClass = `${name2}-enter-to`,
        appearFromClass = enterFromClass,
        appearActiveClass = enterActiveClass,
        appearToClass = enterToClass,
        leaveFromClass = `${name2}-leave-from`,
        leaveActiveClass = `${name2}-leave-active`,
        leaveToClass = `${name2}-leave-to`
      } = rawProps;
      const durations = normalizeDuration(duration);
      const enterDuration = durations && durations[0];
      const leaveDuration = durations && durations[1];
      const {
        onBeforeEnter,
        onEnter,
        onEnterCancelled,
        onLeave,
        onLeaveCancelled,
        onBeforeAppear = onBeforeEnter,
        onAppear = onEnter,
        onAppearCancelled = onEnterCancelled
      } = baseProps;
      const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
      };
      const finishLeave = (el, done) => {
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
      };
      const makeEnterHook = (isAppear) => {
        return (el, done) => {
          const hook = isAppear ? onAppear : onEnter;
          const resolve2 = () => finishEnter(el, isAppear, done);
          callHook(hook, [el, resolve2]);
          nextFrame(() => {
            removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
            addTransitionClass(el, isAppear ? appearToClass : enterToClass);
            if (!hasExplicitCallback(hook)) {
              whenTransitionEnds(el, type2, enterDuration, resolve2);
            }
          });
        };
      };
      return extend$3(baseProps, {
        onBeforeEnter(el) {
          callHook(onBeforeEnter, [el]);
          addTransitionClass(el, enterFromClass);
          addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear(el) {
          callHook(onBeforeAppear, [el]);
          addTransitionClass(el, appearFromClass);
          addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
          el._isLeaving = true;
          const resolve2 = () => finishLeave(el, done);
          addTransitionClass(el, leaveFromClass);
          forceReflow();
          addTransitionClass(el, leaveActiveClass);
          nextFrame(() => {
            if (!el._isLeaving) {
              return;
            }
            removeTransitionClass(el, leaveFromClass);
            addTransitionClass(el, leaveToClass);
            if (!hasExplicitCallback(onLeave)) {
              whenTransitionEnds(el, type2, leaveDuration, resolve2);
            }
          });
          callHook(onLeave, [el, resolve2]);
        },
        onEnterCancelled(el) {
          finishEnter(el, false);
          callHook(onEnterCancelled, [el]);
        },
        onAppearCancelled(el) {
          finishEnter(el, true);
          callHook(onAppearCancelled, [el]);
        },
        onLeaveCancelled(el) {
          finishLeave(el);
          callHook(onLeaveCancelled, [el]);
        }
      });
    }
    function normalizeDuration(duration) {
      if (duration == null) {
        return null;
      } else if (isObject$5(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
      } else {
        const n = NumberOf(duration);
        return [n, n];
      }
    }
    function NumberOf(val) {
      const res = toNumber$1(val);
      return res;
    }
    function addTransitionClass(el, cls) {
      cls.split(/\s+/).forEach((c2) => c2 && el.classList.add(c2));
      (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
    }
    function removeTransitionClass(el, cls) {
      cls.split(/\s+/).forEach((c2) => c2 && el.classList.remove(c2));
      const _vtc = el[vtcKey];
      if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
          el[vtcKey] = void 0;
        }
      }
    }
    function nextFrame(cb) {
      requestAnimationFrame(() => {
        requestAnimationFrame(cb);
      });
    }
    let endId = 0;
    function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
      const id = el._endId = ++endId;
      const resolveIfNotStale = () => {
        if (id === el._endId) {
          resolve2();
        }
      };
      if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
      }
      const { type: type2, timeout: timeout2, propCount } = getTransitionInfo(el, expectedType);
      if (!type2) {
        return resolve2();
      }
      const endEvent = type2 + "end";
      let ended = 0;
      const end2 = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
      };
      const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
          end2();
        }
      };
      setTimeout(() => {
        if (ended < propCount) {
          end2();
        }
      }, timeout2 + 1);
      el.addEventListener(endEvent, onEnd);
    }
    function getTransitionInfo(el, expectedType) {
      const styles = window.getComputedStyle(el);
      const getStyleProperties = (key) => (styles[key] || "").split(", ");
      const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
      const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
      const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
      const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
      const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
      const animationTimeout = getTimeout(animationDelays, animationDurations);
      let type2 = null;
      let timeout2 = 0;
      let propCount = 0;
      if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
          type2 = TRANSITION;
          timeout2 = transitionTimeout;
          propCount = transitionDurations.length;
        }
      } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
          type2 = ANIMATION;
          timeout2 = animationTimeout;
          propCount = animationDurations.length;
        }
      } else {
        timeout2 = Math.max(transitionTimeout, animationTimeout);
        type2 = timeout2 > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type2 ? type2 === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
      }
      const hasTransform = type2 === TRANSITION && /\b(transform|all)(,|$)/.test(
        getStyleProperties(`${TRANSITION}Property`).toString()
      );
      return {
        type: type2,
        timeout: timeout2,
        propCount,
        hasTransform
      };
    }
    function getTimeout(delays, durations) {
      while (delays.length < durations.length) {
        delays = delays.concat(delays);
      }
      return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
    }
    function toMs(s) {
      if (s === "auto")
        return 0;
      return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
    }
    function forceReflow() {
      return document.body.offsetHeight;
    }
    function patchClass(el, value, isSVG) {
      const transitionClasses = el[vtcKey];
      if (transitionClasses) {
        value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
      }
      if (value == null) {
        el.removeAttribute("class");
      } else if (isSVG) {
        el.setAttribute("class", value);
      } else {
        el.className = value;
      }
    }
    const vShowOldKey = Symbol("_vod");
    const vShow = {
      beforeMount(el, { value }, { transition: transition2 }) {
        el[vShowOldKey] = el.style.display === "none" ? "" : el.style.display;
        if (transition2 && value) {
          transition2.beforeEnter(el);
        } else {
          setDisplay(el, value);
        }
      },
      mounted(el, { value }, { transition: transition2 }) {
        if (transition2 && value) {
          transition2.enter(el);
        }
      },
      updated(el, { value, oldValue }, { transition: transition2 }) {
        if (!value === !oldValue && (el.style.display === el[vShowOldKey] || !value))
          return;
        if (transition2) {
          if (value) {
            transition2.beforeEnter(el);
            setDisplay(el, true);
            transition2.enter(el);
          } else {
            transition2.leave(el, () => {
              setDisplay(el, false);
            });
          }
        } else {
          setDisplay(el, value);
        }
      },
      beforeUnmount(el, { value }) {
        setDisplay(el, value);
      }
    };
    function setDisplay(el, value) {
      el.style.display = value ? el[vShowOldKey] : "none";
    }
    const CSS_VAR_TEXT = Symbol("");
    function useCssVars(getter) {
      const instance = getCurrentInstance();
      if (!instance) {
        return;
      }
      const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
        Array.from(
          document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)
        ).forEach((node) => setVarsOnNode(node, vars));
      };
      const setVars = () => {
        const vars = getter(instance.proxy);
        setVarsOnVNode(instance.subTree, vars);
        updateTeleports(vars);
      };
      watchPostEffect(setVars);
      onMounted(() => {
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, { childList: true });
        onUnmounted(() => ob.disconnect());
      });
    }
    function setVarsOnVNode(vnode, vars) {
      if (vnode.shapeFlag & 128) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
          suspense.effects.push(() => {
            setVarsOnVNode(suspense.activeBranch, vars);
          });
        }
      }
      while (vnode.component) {
        vnode = vnode.component.subTree;
      }
      if (vnode.shapeFlag & 1 && vnode.el) {
        setVarsOnNode(vnode.el, vars);
      } else if (vnode.type === Fragment) {
        vnode.children.forEach((c2) => setVarsOnVNode(c2, vars));
      } else if (vnode.type === Static) {
        let { el, anchor } = vnode;
        while (el) {
          setVarsOnNode(el, vars);
          if (el === anchor)
            break;
          el = el.nextSibling;
        }
      }
    }
    function setVarsOnNode(el, vars) {
      if (el.nodeType === 1) {
        const style2 = el.style;
        let cssText = "";
        for (const key in vars) {
          style2.setProperty(`--${key}`, vars[key]);
          cssText += `--${key}: ${vars[key]};`;
        }
        style2[CSS_VAR_TEXT] = cssText;
      }
    }
    const displayRE = /(^|;)\s*display\s*:/;
    function patchStyle(el, prev, next) {
      const style2 = el.style;
      const isCssString = isString$1(next);
      const currentDisplay = style2.display;
      let hasControlledDisplay = false;
      if (next && !isCssString) {
        if (prev && !isString$1(prev)) {
          for (const key in prev) {
            if (next[key] == null) {
              setStyle(style2, key, "");
            }
          }
        }
        for (const key in next) {
          if (key === "display") {
            hasControlledDisplay = true;
          }
          setStyle(style2, key, next[key]);
        }
      } else {
        if (isCssString) {
          if (prev !== next) {
            const cssVarText = style2[CSS_VAR_TEXT];
            if (cssVarText) {
              next += ";" + cssVarText;
            }
            style2.cssText = next;
            hasControlledDisplay = displayRE.test(next);
          }
        } else if (prev) {
          el.removeAttribute("style");
        }
      }
      if (vShowOldKey in el) {
        el[vShowOldKey] = hasControlledDisplay ? style2.display : "";
        style2.display = currentDisplay;
      }
    }
    const importantRE = /\s*!important$/;
    function setStyle(style2, name2, val) {
      if (isArray$2(val)) {
        val.forEach((v) => setStyle(style2, name2, v));
      } else {
        if (val == null)
          val = "";
        if (name2.startsWith("--")) {
          style2.setProperty(name2, val);
        } else {
          const prefixed = autoPrefix(style2, name2);
          if (importantRE.test(val)) {
            style2.setProperty(
              hyphenate(prefixed),
              val.replace(importantRE, ""),
              "important"
            );
          } else {
            style2[prefixed] = val;
          }
        }
      }
    }
    const prefixes = ["Webkit", "Moz", "ms"];
    const prefixCache = {};
    function autoPrefix(style2, rawName) {
      const cached = prefixCache[rawName];
      if (cached) {
        return cached;
      }
      let name2 = camelize(rawName);
      if (name2 !== "filter" && name2 in style2) {
        return prefixCache[rawName] = name2;
      }
      name2 = capitalize(name2);
      for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name2;
        if (prefixed in style2) {
          return prefixCache[rawName] = prefixed;
        }
      }
      return rawName;
    }
    const xlinkNS = "http://www.w3.org/1999/xlink";
    function patchAttr(el, key, value, isSVG, instance) {
      if (isSVG && key.startsWith("xlink:")) {
        if (value == null) {
          el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        } else {
          el.setAttributeNS(xlinkNS, key, value);
        }
      } else {
        const isBoolean2 = isSpecialBooleanAttr(key);
        if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
          el.removeAttribute(key);
        } else {
          el.setAttribute(key, isBoolean2 ? "" : value);
        }
      }
    }
    function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
      if (key === "innerHTML" || key === "textContent") {
        if (prevChildren) {
          unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? "" : value;
        return;
      }
      const tag = el.tagName;
      if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
      !tag.includes("-")) {
        el._value = value;
        const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
        const newValue = value == null ? "" : value;
        if (oldValue !== newValue) {
          el.value = newValue;
        }
        if (value == null) {
          el.removeAttribute(key);
        }
        return;
      }
      let needRemove = false;
      if (value === "" || value == null) {
        const type2 = typeof el[key];
        if (type2 === "boolean") {
          value = includeBooleanAttr(value);
        } else if (value == null && type2 === "string") {
          value = "";
          needRemove = true;
        } else if (type2 === "number") {
          value = 0;
          needRemove = true;
        }
      }
      try {
        el[key] = value;
      } catch (e) {
      }
      needRemove && el.removeAttribute(key);
    }
    function addEventListener(el, event2, handler, options) {
      el.addEventListener(event2, handler, options);
    }
    function removeEventListener(el, event2, handler, options) {
      el.removeEventListener(event2, handler, options);
    }
    const veiKey = Symbol("_vei");
    function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
      const invokers = el[veiKey] || (el[veiKey] = {});
      const existingInvoker = invokers[rawName];
      if (nextValue && existingInvoker) {
        existingInvoker.value = nextValue;
      } else {
        const [name2, options] = parseName(rawName);
        if (nextValue) {
          const invoker = invokers[rawName] = createInvoker(nextValue, instance);
          addEventListener(el, name2, invoker, options);
        } else if (existingInvoker) {
          removeEventListener(el, name2, existingInvoker, options);
          invokers[rawName] = void 0;
        }
      }
    }
    const optionsModifierRE = /(?:Once|Passive|Capture)$/;
    function parseName(name2) {
      let options;
      if (optionsModifierRE.test(name2)) {
        options = {};
        let m;
        while (m = name2.match(optionsModifierRE)) {
          name2 = name2.slice(0, name2.length - m[0].length);
          options[m[0].toLowerCase()] = true;
        }
      }
      const event2 = name2[2] === ":" ? name2.slice(3) : hyphenate(name2.slice(2));
      return [event2, options];
    }
    let cachedNow = 0;
    const p = /* @__PURE__ */ Promise.resolve();
    const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
    function createInvoker(initialValue, instance) {
      const invoker = (e) => {
        if (!e._vts) {
          e._vts = Date.now();
        } else if (e._vts <= invoker.attached) {
          return;
        }
        callWithAsyncErrorHandling(
          patchStopImmediatePropagation(e, invoker.value),
          instance,
          5,
          [e]
        );
      };
      invoker.value = initialValue;
      invoker.attached = getNow();
      return invoker;
    }
    function patchStopImmediatePropagation(e, value) {
      if (isArray$2(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
          originalStop.call(e);
          e._stopped = true;
        };
        return value.map((fn2) => (e2) => !e2._stopped && fn2 && fn2(e2));
      } else {
        return value;
      }
    }
    const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
    key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
    const patchProp = (el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
      const isSVG = namespace === "svg";
      if (key === "class") {
        patchClass(el, nextValue, isSVG);
      } else if (key === "style") {
        patchStyle(el, prevValue, nextValue);
      } else if (isOn(key)) {
        if (!isModelListener(key)) {
          patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
      } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(
          el,
          key,
          nextValue,
          prevChildren,
          parentComponent,
          parentSuspense,
          unmountChildren
        );
      } else {
        if (key === "true-value") {
          el._trueValue = nextValue;
        } else if (key === "false-value") {
          el._falseValue = nextValue;
        }
        patchAttr(el, key, nextValue, isSVG);
      }
    };
    function shouldSetAsProp(el, key, value, isSVG) {
      if (isSVG) {
        if (key === "innerHTML" || key === "textContent") {
          return true;
        }
        if (key in el && isNativeOn(key) && isFunction$1(value)) {
          return true;
        }
        return false;
      }
      if (key === "spellcheck" || key === "draggable" || key === "translate") {
        return false;
      }
      if (key === "form") {
        return false;
      }
      if (key === "list" && el.tagName === "INPUT") {
        return false;
      }
      if (key === "type" && el.tagName === "TEXTAREA") {
        return false;
      }
      if (key === "width" || key === "height") {
        const tag = el.tagName;
        if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
          return false;
        }
      }
      if (isNativeOn(key) && isString$1(value)) {
        return false;
      }
      return key in el;
    }
    const getModelAssigner = (vnode) => {
      const fn2 = vnode.props["onUpdate:modelValue"] || false;
      return isArray$2(fn2) ? (value) => invokeArrayFns(fn2, value) : fn2;
    };
    const assignKey = Symbol("_assign");
    const vModelRadio = {
      created(el, { value }, vnode) {
        el.checked = looseEqual(value, vnode.props.value);
        el[assignKey] = getModelAssigner(vnode);
        addEventListener(el, "change", () => {
          el[assignKey](getValue$1(el));
        });
      },
      beforeUpdate(el, { value, oldValue }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        if (value !== oldValue) {
          el.checked = looseEqual(value, vnode.props.value);
        }
      }
    };
    function getValue$1(el) {
      return "_value" in el ? el._value : el.value;
    }
    const systemModifiers = ["ctrl", "shift", "alt", "meta"];
    const modifierGuards = {
      stop: (e) => e.stopPropagation(),
      prevent: (e) => e.preventDefault(),
      self: (e) => e.target !== e.currentTarget,
      ctrl: (e) => !e.ctrlKey,
      shift: (e) => !e.shiftKey,
      alt: (e) => !e.altKey,
      meta: (e) => !e.metaKey,
      left: (e) => "button" in e && e.button !== 0,
      middle: (e) => "button" in e && e.button !== 1,
      right: (e) => "button" in e && e.button !== 2,
      exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
    };
    const withModifiers = (fn2, modifiers) => {
      const cache = fn2._withMods || (fn2._withMods = {});
      const cacheKey = modifiers.join(".");
      return cache[cacheKey] || (cache[cacheKey] = (event2, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
          const guard = modifierGuards[modifiers[i]];
          if (guard && guard(event2, modifiers))
            return;
        }
        return fn2(event2, ...args);
      });
    };
    const keyNames = {
      esc: "escape",
      space: " ",
      up: "arrow-up",
      left: "arrow-left",
      right: "arrow-right",
      down: "arrow-down",
      delete: "backspace"
    };
    const withKeys = (fn2, modifiers) => {
      const cache = fn2._withKeys || (fn2._withKeys = {});
      const cacheKey = modifiers.join(".");
      return cache[cacheKey] || (cache[cacheKey] = (event2) => {
        if (!("key" in event2)) {
          return;
        }
        const eventKey = hyphenate(event2.key);
        if (modifiers.some((k2) => k2 === eventKey || keyNames[k2] === eventKey)) {
          return fn2(event2);
        }
      });
    };
    const rendererOptions = /* @__PURE__ */ extend$3({ patchProp }, nodeOps);
    let renderer;
    function ensureRenderer() {
      return renderer || (renderer = createRenderer(rendererOptions));
    }
    const render$1 = (...args) => {
      ensureRenderer().render(...args);
    };
    const createApp = (...args) => {
      const app2 = ensureRenderer().createApp(...args);
      const { mount: mount2 } = app2;
      app2.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
          return;
        const component = app2._component;
        if (!isFunction$1(component) && !component.render && !component.template) {
          component.template = container.innerHTML;
        }
        container.innerHTML = "";
        const proxy = mount2(container, false, resolveRootNamespace(container));
        if (container instanceof Element) {
          container.removeAttribute("v-cloak");
          container.setAttribute("data-v-app", "");
        }
        return proxy;
      };
      return app2;
    };
    function resolveRootNamespace(container) {
      if (container instanceof SVGElement) {
        return "svg";
      }
      if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
        return "mathml";
      }
    }
    function normalizeContainer(container) {
      if (isString$1(container)) {
        const res = document.querySelector(container);
        return res;
      }
      return container;
    }
    var _a;
    const isClient = typeof window !== "undefined";
    const isString = (val) => typeof val === "string";
    const noop$1 = () => {
    };
    const isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
    function resolveUnref(r) {
      return typeof r === "function" ? r() : unref(r);
    }
    function identity(arg) {
      return arg;
    }
    function tryOnScopeDispose(fn2) {
      if (getCurrentScope()) {
        onScopeDispose(fn2);
        return true;
      }
      return false;
    }
    function tryOnMounted(fn2, sync = true) {
      if (getCurrentInstance())
        onMounted(fn2);
      else if (sync)
        fn2();
      else
        nextTick$1(fn2);
    }
    function useTimeoutFn(cb, interval, options = {}) {
      const {
        immediate = true
      } = options;
      const isPending = ref(false);
      let timer = null;
      function clear2() {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      }
      function stop() {
        isPending.value = false;
        clear2();
      }
      function start(...args) {
        clear2();
        isPending.value = true;
        timer = setTimeout(() => {
          isPending.value = false;
          timer = null;
          cb(...args);
        }, resolveUnref(interval));
      }
      if (immediate) {
        isPending.value = true;
        if (isClient)
          start();
      }
      tryOnScopeDispose(stop);
      return {
        isPending: readonly(isPending),
        start,
        stop
      };
    }
    function unrefElement(elRef) {
      var _a2;
      const plain = resolveUnref(elRef);
      return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
    }
    const defaultWindow = isClient ? window : void 0;
    function useEventListener(...args) {
      let target;
      let events2;
      let listeners;
      let options;
      if (isString(args[0]) || Array.isArray(args[0])) {
        [events2, listeners, options] = args;
        target = defaultWindow;
      } else {
        [target, events2, listeners, options] = args;
      }
      if (!target)
        return noop$1;
      if (!Array.isArray(events2))
        events2 = [events2];
      if (!Array.isArray(listeners))
        listeners = [listeners];
      const cleanups = [];
      const cleanup = () => {
        cleanups.forEach((fn2) => fn2());
        cleanups.length = 0;
      };
      const register = (el, event2, listener, options2) => {
        el.addEventListener(event2, listener, options2);
        return () => el.removeEventListener(event2, listener, options2);
      };
      const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
        cleanup();
        if (!el)
          return;
        cleanups.push(...events2.flatMap((event2) => {
          return listeners.map((listener) => register(el, event2, listener, options2));
        }));
      }, { immediate: true, flush: "post" });
      const stop = () => {
        stopWatch();
        cleanup();
      };
      tryOnScopeDispose(stop);
      return stop;
    }
    let _iOSWorkaround = false;
    function onClickOutside(target, handler, options = {}) {
      const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
      if (!window2)
        return;
      if (isIOS && !_iOSWorkaround) {
        _iOSWorkaround = true;
        Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop$1));
      }
      let shouldListen = true;
      const shouldIgnore = (event2) => {
        return ignore.some((target2) => {
          if (typeof target2 === "string") {
            return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event2.target || event2.composedPath().includes(el));
          } else {
            const el = unrefElement(target2);
            return el && (event2.target === el || event2.composedPath().includes(el));
          }
        });
      };
      const listener = (event2) => {
        const el = unrefElement(target);
        if (!el || el === event2.target || event2.composedPath().includes(el))
          return;
        if (event2.detail === 0)
          shouldListen = !shouldIgnore(event2);
        if (!shouldListen) {
          shouldListen = true;
          return;
        }
        handler(event2);
      };
      const cleanup = [
        useEventListener(window2, "click", listener, { passive: true, capture }),
        useEventListener(window2, "pointerdown", (e) => {
          const el = unrefElement(target);
          if (el)
            shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
        }, { passive: true }),
        detectIframe && useEventListener(window2, "blur", (event2) => {
          var _a2;
          const el = unrefElement(target);
          if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
            handler(event2);
        })
      ].filter(Boolean);
      const stop = () => cleanup.forEach((fn2) => fn2());
      return stop;
    }
    function useSupported(callback, sync = false) {
      const isSupported = ref();
      const update2 = () => isSupported.value = Boolean(callback());
      update2();
      tryOnMounted(update2, sync);
      return isSupported;
    }
    const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    const globalKey = "__vueuse_ssr_handlers__";
    _global[globalKey] = _global[globalKey] || {};
    var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
    var __hasOwnProp$g = Object.prototype.hasOwnProperty;
    var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
    var __objRest$2 = (source, exclude) => {
      var target = {};
      for (var prop in source)
        if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
          target[prop] = source[prop];
      if (source != null && __getOwnPropSymbols$g)
        for (var prop of __getOwnPropSymbols$g(source)) {
          if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
            target[prop] = source[prop];
        }
      return target;
    };
    function useResizeObserver(target, callback, options = {}) {
      const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
      let observer;
      const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
      const cleanup = () => {
        if (observer) {
          observer.disconnect();
          observer = void 0;
        }
      };
      const stopWatch = watch(() => unrefElement(target), (el) => {
        cleanup();
        if (isSupported.value && window2 && el) {
          observer = new ResizeObserver(callback);
          observer.observe(el, observerOptions);
        }
      }, { immediate: true, flush: "post" });
      const stop = () => {
        cleanup();
        stopWatch();
      };
      tryOnScopeDispose(stop);
      return {
        isSupported,
        stop
      };
    }
    var SwipeDirection;
    (function(SwipeDirection2) {
      SwipeDirection2["UP"] = "UP";
      SwipeDirection2["RIGHT"] = "RIGHT";
      SwipeDirection2["DOWN"] = "DOWN";
      SwipeDirection2["LEFT"] = "LEFT";
      SwipeDirection2["NONE"] = "NONE";
    })(SwipeDirection || (SwipeDirection = {}));
    var __defProp2 = Object.defineProperty;
    var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
    var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues2 = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp2.call(b, prop))
          __defNormalProp2(a, prop, b[prop]);
      if (__getOwnPropSymbols2)
        for (var prop of __getOwnPropSymbols2(b)) {
          if (__propIsEnum2.call(b, prop))
            __defNormalProp2(a, prop, b[prop]);
        }
      return a;
    };
    const _TransitionPresets = {
      easeInSine: [0.12, 0, 0.39, 0],
      easeOutSine: [0.61, 1, 0.88, 1],
      easeInOutSine: [0.37, 0, 0.63, 1],
      easeInQuad: [0.11, 0, 0.5, 0],
      easeOutQuad: [0.5, 1, 0.89, 1],
      easeInOutQuad: [0.45, 0, 0.55, 1],
      easeInCubic: [0.32, 0, 0.67, 0],
      easeOutCubic: [0.33, 1, 0.68, 1],
      easeInOutCubic: [0.65, 0, 0.35, 1],
      easeInQuart: [0.5, 0, 0.75, 0],
      easeOutQuart: [0.25, 1, 0.5, 1],
      easeInOutQuart: [0.76, 0, 0.24, 1],
      easeInQuint: [0.64, 0, 0.78, 0],
      easeOutQuint: [0.22, 1, 0.36, 1],
      easeInOutQuint: [0.83, 0, 0.17, 1],
      easeInExpo: [0.7, 0, 0.84, 0],
      easeOutExpo: [0.16, 1, 0.3, 1],
      easeInOutExpo: [0.87, 0, 0.13, 1],
      easeInCirc: [0.55, 0, 1, 0.45],
      easeOutCirc: [0, 0.55, 0.45, 1],
      easeInOutCirc: [0.85, 0, 0.15, 1],
      easeInBack: [0.36, 0, 0.66, -0.56],
      easeOutBack: [0.34, 1.56, 0.64, 1],
      easeInOutBack: [0.68, -0.6, 0.32, 1.6]
    };
    __spreadValues2({
      linear: identity
    }, _TransitionPresets);
    const isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    const freeGlobal$1 = freeGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal$1 || freeSelf || Function("return this")();
    const root$1 = root;
    var Symbol$1 = root$1.Symbol;
    const Symbol$2 = Symbol$1;
    var objectProto$4 = Object.prototype;
    var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
    var nativeObjectToString$1 = objectProto$4.toString;
    var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty$3.call(value, symToStringTag$1), tag = value[symToStringTag$1];
      try {
        value[symToStringTag$1] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString$1.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag$1] = tag;
        } else {
          delete value[symToStringTag$1];
        }
      }
      return result;
    }
    var objectProto$3 = Object.prototype;
    var nativeObjectToString = objectProto$3.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    var isArray = Array.isArray;
    const isArray$1 = isArray;
    var INFINITY$1 = 1 / 0;
    var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray$1(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
    }
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function isObject$4(value) {
      var type2 = typeof value;
      return value != null && (type2 == "object" || type2 == "function");
    }
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject$4(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject$4(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject$4(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    var coreJsData = root$1["__core-js_shared__"];
    const coreJsData$1 = coreJsData;
    var maskSrcKey = function() {
      var uid2 = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
      return uid2 ? "Symbol(src)_1." + uid2 : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    var funcProto$1 = Function.prototype;
    var funcToString$1 = funcProto$1.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString$1.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype, objectProto$2 = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject$4(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray$1(value)) {
        return false;
      }
      var type2 = typeof value;
      if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    var nativeCreate = getNative(Object, "create");
    const nativeCreate$1 = nativeCreate;
    function hashClear() {
      this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
    var objectProto$1 = Object.prototype;
    var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate$1) {
        var result = data[key];
        return result === HASH_UNDEFINED$1 ? void 0 : result;
      }
      return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    var Map$1 = getNative(root$1, "Map");
    const Map$2 = Map$1;
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map$2 || ListCache)(),
        "string": new Hash()
      };
    }
    function isKeyable(value) {
      var type2 = typeof value;
      return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size2 = data.size;
      data.set(key, value);
      this.size += data.size == size2 ? 0 : 1;
      return this;
    }
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    var FUNC_ERROR_TEXT$1 = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT$1);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    const stringToPath$1 = stringToPath;
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function castPath(value, object) {
      if (isArray$1(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath$1(toString(value));
    }
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    function get$1(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray$1(value) ? value : [value];
    }
    var now$1 = function() {
      return root$1.Date.now();
    };
    const now$2 = now$1;
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max, nativeMin = Math.min;
    function debounce$1(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject$4(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now$2();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now$2());
      }
      function debounced() {
        var time = now$2(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function fromPairs(pairs) {
      var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }
    function isNil(value) {
      return value == null;
    }
    function isUndefined$1(value) {
      return value === void 0;
    }
    const isUndefined = (val) => val === void 0;
    const isBoolean = (val) => typeof val === "boolean";
    const isNumber = (val) => typeof val === "number";
    const isElement = (e) => {
      if (typeof Element === "undefined")
        return false;
      return e instanceof Element;
    };
    const isStringNumber = (val) => {
      if (!isString$1(val)) {
        return false;
      }
      return !Number.isNaN(Number(val));
    };
    const keysOf = (arr) => Object.keys(arr);
    class ElementPlusError extends Error {
      constructor(m) {
        super(m);
        this.name = "ElementPlusError";
      }
    }
    function throwError(scope, m) {
      throw new ElementPlusError(`[${scope}] ${m}`);
    }
    function debugWarn(scope, message2) {
    }
    function addUnit(value, defaultUnit = "px") {
      if (!value)
        return "";
      if (isNumber(value) || isStringNumber(value)) {
        return `${value}${defaultUnit}`;
      } else if (isString$1(value)) {
        return value;
      }
    }
    /*! Element Plus Icons Vue v2.3.1 */
    var arrow_down_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "ArrowDown",
      __name: "arrow-down",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
          })
        ]));
      }
    });
    var arrow_down_default = arrow_down_vue_vue_type_script_setup_true_lang_default;
    var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "ArrowRight",
      __name: "arrow-right",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
          })
        ]));
      }
    });
    var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
    var arrow_up_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "ArrowUp",
      __name: "arrow-up",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
          })
        ]));
      }
    });
    var arrow_up_default = arrow_up_vue_vue_type_script_setup_true_lang_default;
    var check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "Check",
      __name: "check",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
          })
        ]));
      }
    });
    var check_default = check_vue_vue_type_script_setup_true_lang_default;
    var circle_check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "CircleCheck",
      __name: "circle-check",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
          }),
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
          })
        ]));
      }
    });
    var circle_check_default = circle_check_vue_vue_type_script_setup_true_lang_default;
    var circle_close_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "CircleCloseFilled",
      __name: "circle-close-filled",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
          })
        ]));
      }
    });
    var circle_close_filled_default = circle_close_filled_vue_vue_type_script_setup_true_lang_default;
    var circle_close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "CircleClose",
      __name: "circle-close",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
          }),
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
          })
        ]));
      }
    });
    var circle_close_default = circle_close_vue_vue_type_script_setup_true_lang_default;
    var close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "Close",
      __name: "close",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
          })
        ]));
      }
    });
    var close_default = close_vue_vue_type_script_setup_true_lang_default;
    var hide_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "Hide",
      __name: "hide",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
          }),
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
          })
        ]));
      }
    });
    var hide_default = hide_vue_vue_type_script_setup_true_lang_default;
    var info_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "InfoFilled",
      __name: "info-filled",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
          })
        ]));
      }
    });
    var info_filled_default = info_filled_vue_vue_type_script_setup_true_lang_default;
    var loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "Loading",
      __name: "loading",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
          })
        ]));
      }
    });
    var loading_default = loading_vue_vue_type_script_setup_true_lang_default;
    var minus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "Minus",
      __name: "minus",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
          })
        ]));
      }
    });
    var minus_default = minus_vue_vue_type_script_setup_true_lang_default;
    var plus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "Plus",
      __name: "plus",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
          })
        ]));
      }
    });
    var plus_default = plus_vue_vue_type_script_setup_true_lang_default;
    var success_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "SuccessFilled",
      __name: "success-filled",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
          })
        ]));
      }
    });
    var success_filled_default = success_filled_vue_vue_type_script_setup_true_lang_default;
    var view_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "View",
      __name: "view",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
          })
        ]));
      }
    });
    var view_default = view_vue_vue_type_script_setup_true_lang_default;
    var warning_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
      name: "WarningFilled",
      __name: "warning-filled",
      setup(__props) {
        return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, [
          createBaseVNode("path", {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
          })
        ]));
      }
    });
    var warning_filled_default = warning_filled_vue_vue_type_script_setup_true_lang_default;
    const epPropKey = "__epPropKey";
    const definePropType = (val) => val;
    const isEpProp = (val) => isObject$5(val) && !!val[epPropKey];
    const buildProp = (prop, key) => {
      if (!isObject$5(prop) || isEpProp(prop))
        return prop;
      const { values, required, default: defaultValue, type: type2, validator } = prop;
      const _validator = values || validator ? (val) => {
        let valid = false;
        let allowedValues = [];
        if (values) {
          allowedValues = Array.from(values);
          if (hasOwn(prop, "default")) {
            allowedValues.push(defaultValue);
          }
          valid || (valid = allowedValues.includes(val));
        }
        if (validator)
          valid || (valid = validator(val));
        if (!valid && allowedValues.length > 0) {
          const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
          warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
        }
        return valid;
      } : void 0;
      const epProp = {
        type: type2,
        required: !!required,
        validator: _validator,
        [epPropKey]: true
      };
      if (hasOwn(prop, "default"))
        epProp.default = defaultValue;
      return epProp;
    };
    const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
      key,
      buildProp(option, key)
    ]));
    const iconPropType = definePropType([
      String,
      Object,
      Function
    ]);
    const TypeComponents = {
      Close: close_default,
      SuccessFilled: success_filled_default,
      InfoFilled: info_filled_default,
      WarningFilled: warning_filled_default,
      CircleCloseFilled: circle_close_filled_default
    };
    const TypeComponentsMap = {
      success: success_filled_default,
      warning: warning_filled_default,
      error: circle_close_filled_default,
      info: info_filled_default
    };
    const ValidateComponentsMap = {
      validating: loading_default,
      success: circle_check_default,
      error: circle_close_default
    };
    const withInstall = (main, extra) => {
      main.install = (app2) => {
        for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
          app2.component(comp.name, comp);
        }
      };
      if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
          main[key] = comp;
        }
      }
      return main;
    };
    const withInstallFunction = (fn2, name2) => {
      fn2.install = (app2) => {
        fn2._context = app2._context;
        app2.config.globalProperties[name2] = fn2;
      };
      return fn2;
    };
    const withNoopInstall = (component) => {
      component.install = NOOP;
      return component;
    };
    const EVENT_CODE = {
      tab: "Tab",
      enter: "Enter",
      space: "Space",
      left: "ArrowLeft",
      up: "ArrowUp",
      right: "ArrowRight",
      down: "ArrowDown",
      esc: "Escape",
      delete: "Delete",
      backspace: "Backspace",
      numpadEnter: "NumpadEnter",
      pageUp: "PageUp",
      pageDown: "PageDown",
      home: "Home",
      end: "End"
    };
    const UPDATE_MODEL_EVENT = "update:modelValue";
    const CHANGE_EVENT = "change";
    const INPUT_EVENT = "input";
    const componentSizes = ["", "default", "small", "large"];
    const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
    const isKorean = (text) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text);
    const mutable = (val) => val;
    const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
    const LISTENER_PREFIX = /^on[A-Z]/;
    const useAttrs = (params = {}) => {
      const { excludeListeners = false, excludeKeys } = params;
      const allExcludeKeys = computed(() => {
        return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
      });
      const instance = getCurrentInstance();
      if (!instance) {
        return computed(() => ({}));
      }
      return computed(() => {
        var _a2;
        return fromPairs(Object.entries((_a2 = instance.proxy) == null ? void 0 : _a2.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
      });
    };
    const useDeprecated = ({ from, replacement, scope, version: version2, ref: ref2, type: type2 = "API" }, condition) => {
      watch(() => unref(condition), (val) => {
      }, {
        immediate: true
      });
    };
    var English = {
      name: "en",
      el: {
        colorpicker: {
          confirm: "OK",
          clear: "Clear",
          defaultLabel: "color picker",
          description: "current color is {color}. press enter to select a new color."
        },
        datepicker: {
          now: "Now",
          today: "Today",
          cancel: "Cancel",
          clear: "Clear",
          confirm: "OK",
          dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
          monthTablePrompt: "Use the arrow keys and enter to select the month",
          yearTablePrompt: "Use the arrow keys and enter to select the year",
          selectedDate: "Selected date",
          selectDate: "Select date",
          selectTime: "Select time",
          startDate: "Start Date",
          startTime: "Start Time",
          endDate: "End Date",
          endTime: "End Time",
          prevYear: "Previous Year",
          nextYear: "Next Year",
          prevMonth: "Previous Month",
          nextMonth: "Next Month",
          year: "",
          month1: "January",
          month2: "February",
          month3: "March",
          month4: "April",
          month5: "May",
          month6: "June",
          month7: "July",
          month8: "August",
          month9: "September",
          month10: "October",
          month11: "November",
          month12: "December",
          week: "week",
          weeks: {
            sun: "Sun",
            mon: "Mon",
            tue: "Tue",
            wed: "Wed",
            thu: "Thu",
            fri: "Fri",
            sat: "Sat"
          },
          weeksFull: {
            sun: "Sunday",
            mon: "Monday",
            tue: "Tuesday",
            wed: "Wednesday",
            thu: "Thursday",
            fri: "Friday",
            sat: "Saturday"
          },
          months: {
            jan: "Jan",
            feb: "Feb",
            mar: "Mar",
            apr: "Apr",
            may: "May",
            jun: "Jun",
            jul: "Jul",
            aug: "Aug",
            sep: "Sep",
            oct: "Oct",
            nov: "Nov",
            dec: "Dec"
          }
        },
        inputNumber: {
          decrease: "decrease number",
          increase: "increase number"
        },
        select: {
          loading: "Loading",
          noMatch: "No matching data",
          noData: "No data",
          placeholder: "Select"
        },
        dropdown: {
          toggleDropdown: "Toggle Dropdown"
        },
        cascader: {
          noMatch: "No matching data",
          loading: "Loading",
          placeholder: "Select",
          noData: "No data"
        },
        pagination: {
          goto: "Go to",
          pagesize: "/page",
          total: "Total {total}",
          pageClassifier: "",
          page: "Page",
          prev: "Go to previous page",
          next: "Go to next page",
          currentPage: "page {pager}",
          prevPages: "Previous {pager} pages",
          nextPages: "Next {pager} pages",
          deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
        },
        dialog: {
          close: "Close this dialog"
        },
        drawer: {
          close: "Close this dialog"
        },
        messagebox: {
          title: "Message",
          confirm: "OK",
          cancel: "Cancel",
          error: "Illegal input",
          close: "Close this dialog"
        },
        upload: {
          deleteTip: "press delete to remove",
          delete: "Delete",
          preview: "Preview",
          continue: "Continue"
        },
        slider: {
          defaultLabel: "slider between {min} and {max}",
          defaultRangeStartLabel: "pick start value",
          defaultRangeEndLabel: "pick end value"
        },
        table: {
          emptyText: "No Data",
          confirmFilter: "Confirm",
          resetFilter: "Reset",
          clearFilter: "All",
          sumText: "Sum"
        },
        tour: {
          next: "Next",
          previous: "Previous",
          finish: "Finish"
        },
        tree: {
          emptyText: "No Data"
        },
        transfer: {
          noMatch: "No matching data",
          noData: "No data",
          titles: ["List 1", "List 2"],
          filterPlaceholder: "Enter keyword",
          noCheckedFormat: "{total} items",
          hasCheckedFormat: "{checked}/{total} checked"
        },
        image: {
          error: "FAILED"
        },
        pageHeader: {
          title: "Back"
        },
        popconfirm: {
          confirmButtonText: "Yes",
          cancelButtonText: "No"
        },
        carousel: {
          leftArrow: "Carousel arrow left",
          rightArrow: "Carousel arrow right",
          indicator: "Carousel switch to index {index}"
        }
      }
    };
    const buildTranslator = (locale) => (path, option) => translate$1(path, option, unref(locale));
    const translate$1 = (path, option, locale) => get$1(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
      var _a2;
      return `${(_a2 = option == null ? void 0 : option[key]) != null ? _a2 : `{${key}}`}`;
    });
    const buildLocaleContext = (locale) => {
      const lang = computed(() => unref(locale).name);
      const localeRef = isRef(locale) ? locale : ref(locale);
      return {
        lang,
        locale: localeRef,
        t: buildTranslator(locale)
      };
    };
    const localeContextKey = Symbol("localeContextKey");
    const useLocale = (localeOverrides) => {
      const locale = localeOverrides || inject(localeContextKey, ref());
      return buildLocaleContext(computed(() => locale.value || English));
    };
    const defaultNamespace = "el";
    const statePrefix = "is-";
    const _bem = (namespace, block, blockSuffix, element, modifier) => {
      let cls = `${namespace}-${block}`;
      if (blockSuffix) {
        cls += `-${blockSuffix}`;
      }
      if (element) {
        cls += `__${element}`;
      }
      if (modifier) {
        cls += `--${modifier}`;
      }
      return cls;
    };
    const namespaceContextKey = Symbol("namespaceContextKey");
    const useGetDerivedNamespace = (namespaceOverrides) => {
      const derivedNamespace = namespaceOverrides || (getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace));
      const namespace = computed(() => {
        return unref(derivedNamespace) || defaultNamespace;
      });
      return namespace;
    };
    const useNamespace = (block, namespaceOverrides) => {
      const namespace = useGetDerivedNamespace(namespaceOverrides);
      const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
      const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
      const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
      const be2 = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
      const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
      const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
      const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
      const is = (name2, ...args) => {
        const state = args.length >= 1 ? args[0] : true;
        return name2 && state ? `${statePrefix}${name2}` : "";
      };
      const cssVar = (object) => {
        const styles = {};
        for (const key in object) {
          if (object[key]) {
            styles[`--${namespace.value}-${key}`] = object[key];
          }
        }
        return styles;
      };
      const cssVarBlock = (object) => {
        const styles = {};
        for (const key in object) {
          if (object[key]) {
            styles[`--${namespace.value}-${block}-${key}`] = object[key];
          }
        }
        return styles;
      };
      const cssVarName = (name2) => `--${namespace.value}-${name2}`;
      const cssVarBlockName = (name2) => `--${namespace.value}-${block}-${name2}`;
      return {
        namespace,
        b,
        e,
        m,
        be: be2,
        em,
        bm,
        bem,
        is,
        cssVar,
        cssVarName,
        cssVarBlock,
        cssVarBlockName
      };
    };
    const _prop = buildProp({
      type: definePropType(Boolean),
      default: null
    });
    const _event = buildProp({
      type: definePropType(Function)
    });
    const createModelToggleComposable = (name2) => {
      const updateEventKey = `update:${name2}`;
      const updateEventKeyRaw = `onUpdate:${name2}`;
      const useModelToggleEmits2 = [updateEventKey];
      const useModelToggleProps2 = {
        [name2]: _prop,
        [updateEventKeyRaw]: _event
      };
      const useModelToggle2 = ({
        indicator,
        toggleReason,
        shouldHideWhenRouteChanges,
        shouldProceed,
        onShow,
        onHide
      }) => {
        const instance = getCurrentInstance();
        const { emit: emit2 } = instance;
        const props = instance.props;
        const hasUpdateHandler = computed(() => isFunction$1(props[updateEventKeyRaw]));
        const isModelBindingAbsent = computed(() => props[name2] === null);
        const doShow = (event2) => {
          if (indicator.value === true) {
            return;
          }
          indicator.value = true;
          if (toggleReason) {
            toggleReason.value = event2;
          }
          if (isFunction$1(onShow)) {
            onShow(event2);
          }
        };
        const doHide = (event2) => {
          if (indicator.value === false) {
            return;
          }
          indicator.value = false;
          if (toggleReason) {
            toggleReason.value = event2;
          }
          if (isFunction$1(onHide)) {
            onHide(event2);
          }
        };
        const show = (event2) => {
          if (props.disabled === true || isFunction$1(shouldProceed) && !shouldProceed())
            return;
          const shouldEmit = hasUpdateHandler.value && isClient;
          if (shouldEmit) {
            emit2(updateEventKey, true);
          }
          if (isModelBindingAbsent.value || !shouldEmit) {
            doShow(event2);
          }
        };
        const hide = (event2) => {
          if (props.disabled === true || !isClient)
            return;
          const shouldEmit = hasUpdateHandler.value && isClient;
          if (shouldEmit) {
            emit2(updateEventKey, false);
          }
          if (isModelBindingAbsent.value || !shouldEmit) {
            doHide(event2);
          }
        };
        const onChange = (val) => {
          if (!isBoolean(val))
            return;
          if (props.disabled && val) {
            if (hasUpdateHandler.value) {
              emit2(updateEventKey, false);
            }
          } else if (indicator.value !== val) {
            if (val) {
              doShow();
            } else {
              doHide();
            }
          }
        };
        const toggle = () => {
          if (indicator.value) {
            hide();
          } else {
            show();
          }
        };
        watch(() => props[name2], onChange);
        if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
          watch(() => __spreadValues({}, instance.proxy.$route), () => {
            if (shouldHideWhenRouteChanges.value && indicator.value) {
              hide();
            }
          });
        }
        onMounted(() => {
          onChange(props[name2]);
        });
        return {
          hide,
          show,
          toggle,
          hasUpdateHandler
        };
      };
      return {
        useModelToggle: useModelToggle2,
        useModelToggleProps: useModelToggleProps2,
        useModelToggleEmits: useModelToggleEmits2
      };
    };
    createModelToggleComposable("modelValue");
    const useProp = (name2) => {
      const vm = getCurrentInstance();
      return computed(() => {
        var _a2, _b;
        return (_b = (_a2 = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a2.$props) == null ? void 0 : _b[name2];
      });
    };
    var E = "top", R$1 = "bottom", W$1 = "right", P = "left", me$1 = "auto", G$1 = [E, R$1, W$1, P], U = "start", J$1 = "end", Xe$1 = "clippingParents", je$1 = "viewport", K$1 = "popper", Ye$1 = "reference", De$1 = G$1.reduce(function(t, e) {
      return t.concat([e + "-" + U, e + "-" + J$1]);
    }, []), Ee$1 = [].concat(G$1, [me$1]).reduce(function(t, e) {
      return t.concat([e, e + "-" + U, e + "-" + J$1]);
    }, []), Ge$1 = "beforeRead", Je$1 = "read", Ke$1 = "afterRead", Qe$1 = "beforeMain", Ze$1 = "main", et$1 = "afterMain", tt$1 = "beforeWrite", nt$1 = "write", rt$1 = "afterWrite", ot$1 = [Ge$1, Je$1, Ke$1, Qe$1, Ze$1, et$1, tt$1, nt$1, rt$1];
    function C$1(t) {
      return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function H(t) {
      if (t == null)
        return window;
      if (t.toString() !== "[object Window]") {
        var e = t.ownerDocument;
        return e && e.defaultView || window;
      }
      return t;
    }
    function Q$1(t) {
      var e = H(t).Element;
      return t instanceof e || t instanceof Element;
    }
    function B(t) {
      var e = H(t).HTMLElement;
      return t instanceof e || t instanceof HTMLElement;
    }
    function Pe$1(t) {
      if (typeof ShadowRoot == "undefined")
        return false;
      var e = H(t).ShadowRoot;
      return t instanceof e || t instanceof ShadowRoot;
    }
    function Mt$1(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function(n) {
        var r = e.styles[n] || {}, o = e.attributes[n] || {}, i = e.elements[n];
        !B(i) || !C$1(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
          var s = o[a];
          s === false ? i.removeAttribute(a) : i.setAttribute(a, s === true ? "" : s);
        }));
      });
    }
    function Rt$1(t) {
      var e = t.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
      return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
        Object.keys(e.elements).forEach(function(r) {
          var o = e.elements[r], i = e.attributes[r] || {}, a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), s = a.reduce(function(f, c2) {
            return f[c2] = "", f;
          }, {});
          !B(o) || !C$1(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(f) {
            o.removeAttribute(f);
          }));
        });
      };
    }
    var Ae$1 = { name: "applyStyles", enabled: true, phase: "write", fn: Mt$1, effect: Rt$1, requires: ["computeStyles"] };
    function q$1(t) {
      return t.split("-")[0];
    }
    var X$1 = Math.max, ve$1 = Math.min, Z$1 = Math.round;
    function ee$1(t, e) {
      e === void 0 && (e = false);
      var n = t.getBoundingClientRect(), r = 1, o = 1;
      if (B(t) && e) {
        var i = t.offsetHeight, a = t.offsetWidth;
        a > 0 && (r = Z$1(n.width) / a || 1), i > 0 && (o = Z$1(n.height) / i || 1);
      }
      return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
    }
    function ke$1(t) {
      var e = ee$1(t), n = t.offsetWidth, r = t.offsetHeight;
      return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), { x: t.offsetLeft, y: t.offsetTop, width: n, height: r };
    }
    function it$1(t, e) {
      var n = e.getRootNode && e.getRootNode();
      if (t.contains(e))
        return true;
      if (n && Pe$1(n)) {
        var r = e;
        do {
          if (r && t.isSameNode(r))
            return true;
          r = r.parentNode || r.host;
        } while (r);
      }
      return false;
    }
    function N$1(t) {
      return H(t).getComputedStyle(t);
    }
    function Wt$1(t) {
      return ["table", "td", "th"].indexOf(C$1(t)) >= 0;
    }
    function I(t) {
      return ((Q$1(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function ge$1(t) {
      return C$1(t) === "html" ? t : t.assignedSlot || t.parentNode || (Pe$1(t) ? t.host : null) || I(t);
    }
    function at$1(t) {
      return !B(t) || N$1(t).position === "fixed" ? null : t.offsetParent;
    }
    function Bt$1(t) {
      var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
      if (n && B(t)) {
        var r = N$1(t);
        if (r.position === "fixed")
          return null;
      }
      var o = ge$1(t);
      for (Pe$1(o) && (o = o.host); B(o) && ["html", "body"].indexOf(C$1(o)) < 0; ) {
        var i = N$1(o);
        if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
          return o;
        o = o.parentNode;
      }
      return null;
    }
    function se$1(t) {
      for (var e = H(t), n = at$1(t); n && Wt$1(n) && N$1(n).position === "static"; )
        n = at$1(n);
      return n && (C$1(n) === "html" || C$1(n) === "body" && N$1(n).position === "static") ? e : n || Bt$1(t) || e;
    }
    function Le$1(t) {
      return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }
    function fe$1(t, e, n) {
      return X$1(t, ve$1(e, n));
    }
    function St$1(t, e, n) {
      var r = fe$1(t, e, n);
      return r > n ? n : r;
    }
    function st$1() {
      return { top: 0, right: 0, bottom: 0, left: 0 };
    }
    function ft$1(t) {
      return Object.assign({}, st$1(), t);
    }
    function ct$1(t, e) {
      return e.reduce(function(n, r) {
        return n[r] = t, n;
      }, {});
    }
    var Tt$1 = function(t, e) {
      return t = typeof t == "function" ? t(Object.assign({}, e.rects, { placement: e.placement })) : t, ft$1(typeof t != "number" ? t : ct$1(t, G$1));
    };
    function Ht$1(t) {
      var e, n = t.state, r = t.name, o = t.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = q$1(n.placement), f = Le$1(s), c2 = [P, W$1].indexOf(s) >= 0, u = c2 ? "height" : "width";
      if (!(!i || !a)) {
        var m = Tt$1(o.padding, n), v = ke$1(i), l = f === "y" ? E : P, h2 = f === "y" ? R$1 : W$1, p2 = n.rects.reference[u] + n.rects.reference[f] - a[f] - n.rects.popper[u], g = a[f] - n.rects.reference[f], x = se$1(i), y = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, $ = p2 / 2 - g / 2, d = m[l], b = y - v[u] - m[h2], w = y / 2 - v[u] / 2 + $, O2 = fe$1(d, w, b), j2 = f;
        n.modifiersData[r] = (e = {}, e[j2] = O2, e.centerOffset = O2 - w, e);
      }
    }
    function Ct$1(t) {
      var e = t.state, n = t.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
      o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || !it$1(e.elements.popper, o) || (e.elements.arrow = o));
    }
    var pt$1 = { name: "arrow", enabled: true, phase: "main", fn: Ht$1, effect: Ct$1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
    function te$1(t) {
      return t.split("-")[1];
    }
    var qt$1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Vt$1(t) {
      var e = t.x, n = t.y, r = window, o = r.devicePixelRatio || 1;
      return { x: Z$1(e * o) / o || 0, y: Z$1(n * o) / o || 0 };
    }
    function ut$1(t) {
      var e, n = t.popper, r = t.popperRect, o = t.placement, i = t.variation, a = t.offsets, s = t.position, f = t.gpuAcceleration, c2 = t.adaptive, u = t.roundOffsets, m = t.isFixed, v = a.x, l = v === void 0 ? 0 : v, h2 = a.y, p2 = h2 === void 0 ? 0 : h2, g = typeof u == "function" ? u({ x: l, y: p2 }) : { x: l, y: p2 };
      l = g.x, p2 = g.y;
      var x = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), $ = P, d = E, b = window;
      if (c2) {
        var w = se$1(n), O2 = "clientHeight", j2 = "clientWidth";
        if (w === H(n) && (w = I(n), N$1(w).position !== "static" && s === "absolute" && (O2 = "scrollHeight", j2 = "scrollWidth")), w = w, o === E || (o === P || o === W$1) && i === J$1) {
          d = R$1;
          var A = m && w === b && b.visualViewport ? b.visualViewport.height : w[O2];
          p2 -= A - r.height, p2 *= f ? 1 : -1;
        }
        if (o === P || (o === E || o === R$1) && i === J$1) {
          $ = W$1;
          var k2 = m && w === b && b.visualViewport ? b.visualViewport.width : w[j2];
          l -= k2 - r.width, l *= f ? 1 : -1;
        }
      }
      var D2 = Object.assign({ position: s }, c2 && qt$1), S = u === true ? Vt$1({ x: l, y: p2 }) : { x: l, y: p2 };
      if (l = S.x, p2 = S.y, f) {
        var L;
        return Object.assign({}, D2, (L = {}, L[d] = y ? "0" : "", L[$] = x ? "0" : "", L.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + p2 + "px)" : "translate3d(" + l + "px, " + p2 + "px, 0)", L));
      }
      return Object.assign({}, D2, (e = {}, e[d] = y ? p2 + "px" : "", e[$] = x ? l + "px" : "", e.transform = "", e));
    }
    function Nt$1(t) {
      var e = t.state, n = t.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, i = n.adaptive, a = i === void 0 ? true : i, s = n.roundOffsets, f = s === void 0 ? true : s, c2 = { placement: q$1(e.placement), variation: te$1(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: o, isFixed: e.options.strategy === "fixed" };
      e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ut$1(Object.assign({}, c2, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: a, roundOffsets: f })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ut$1(Object.assign({}, c2, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: f })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
    }
    var Me$1 = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Nt$1, data: {} }, ye$1 = { passive: true };
    function It$1(t) {
      var e = t.state, n = t.instance, r = t.options, o = r.scroll, i = o === void 0 ? true : o, a = r.resize, s = a === void 0 ? true : a, f = H(e.elements.popper), c2 = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return i && c2.forEach(function(u) {
        u.addEventListener("scroll", n.update, ye$1);
      }), s && f.addEventListener("resize", n.update, ye$1), function() {
        i && c2.forEach(function(u) {
          u.removeEventListener("scroll", n.update, ye$1);
        }), s && f.removeEventListener("resize", n.update, ye$1);
      };
    }
    var Re$1 = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
    }, effect: It$1, data: {} }, _t$1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function be$1(t) {
      return t.replace(/left|right|bottom|top/g, function(e) {
        return _t$1[e];
      });
    }
    var zt$1 = { start: "end", end: "start" };
    function lt$1(t) {
      return t.replace(/start|end/g, function(e) {
        return zt$1[e];
      });
    }
    function We$1(t) {
      var e = H(t), n = e.pageXOffset, r = e.pageYOffset;
      return { scrollLeft: n, scrollTop: r };
    }
    function Be$1(t) {
      return ee$1(I(t)).left + We$1(t).scrollLeft;
    }
    function Ft$1(t) {
      var e = H(t), n = I(t), r = e.visualViewport, o = n.clientWidth, i = n.clientHeight, a = 0, s = 0;
      return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, s = r.offsetTop)), { width: o, height: i, x: a + Be$1(t), y: s };
    }
    function Ut$1(t) {
      var e, n = I(t), r = We$1(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, i = X$1(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = X$1(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Be$1(t), f = -r.scrollTop;
      return N$1(o || n).direction === "rtl" && (s += X$1(n.clientWidth, o ? o.clientWidth : 0) - i), { width: i, height: a, x: s, y: f };
    }
    function Se$1(t) {
      var e = N$1(t), n = e.overflow, r = e.overflowX, o = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(n + o + r);
    }
    function dt$1(t) {
      return ["html", "body", "#document"].indexOf(C$1(t)) >= 0 ? t.ownerDocument.body : B(t) && Se$1(t) ? t : dt$1(ge$1(t));
    }
    function ce$1(t, e) {
      var n;
      e === void 0 && (e = []);
      var r = dt$1(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = H(r), a = o ? [i].concat(i.visualViewport || [], Se$1(r) ? r : []) : r, s = e.concat(a);
      return o ? s : s.concat(ce$1(ge$1(a)));
    }
    function Te$1(t) {
      return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
    }
    function Xt(t) {
      var e = ee$1(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }
    function ht$1(t, e) {
      return e === je$1 ? Te$1(Ft$1(t)) : Q$1(e) ? Xt(e) : Te$1(Ut$1(I(t)));
    }
    function Yt$1(t) {
      var e = ce$1(ge$1(t)), n = ["absolute", "fixed"].indexOf(N$1(t).position) >= 0, r = n && B(t) ? se$1(t) : t;
      return Q$1(r) ? e.filter(function(o) {
        return Q$1(o) && it$1(o, r) && C$1(o) !== "body";
      }) : [];
    }
    function Gt(t, e, n) {
      var r = e === "clippingParents" ? Yt$1(t) : [].concat(e), o = [].concat(r, [n]), i = o[0], a = o.reduce(function(s, f) {
        var c2 = ht$1(t, f);
        return s.top = X$1(c2.top, s.top), s.right = ve$1(c2.right, s.right), s.bottom = ve$1(c2.bottom, s.bottom), s.left = X$1(c2.left, s.left), s;
      }, ht$1(t, i));
      return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
    }
    function mt$1(t) {
      var e = t.reference, n = t.element, r = t.placement, o = r ? q$1(r) : null, i = r ? te$1(r) : null, a = e.x + e.width / 2 - n.width / 2, s = e.y + e.height / 2 - n.height / 2, f;
      switch (o) {
        case E:
          f = { x: a, y: e.y - n.height };
          break;
        case R$1:
          f = { x: a, y: e.y + e.height };
          break;
        case W$1:
          f = { x: e.x + e.width, y: s };
          break;
        case P:
          f = { x: e.x - n.width, y: s };
          break;
        default:
          f = { x: e.x, y: e.y };
      }
      var c2 = o ? Le$1(o) : null;
      if (c2 != null) {
        var u = c2 === "y" ? "height" : "width";
        switch (i) {
          case U:
            f[c2] = f[c2] - (e[u] / 2 - n[u] / 2);
            break;
          case J$1:
            f[c2] = f[c2] + (e[u] / 2 - n[u] / 2);
            break;
        }
      }
      return f;
    }
    function ne$1(t, e) {
      e === void 0 && (e = {});
      var n = e, r = n.placement, o = r === void 0 ? t.placement : r, i = n.boundary, a = i === void 0 ? Xe$1 : i, s = n.rootBoundary, f = s === void 0 ? je$1 : s, c2 = n.elementContext, u = c2 === void 0 ? K$1 : c2, m = n.altBoundary, v = m === void 0 ? false : m, l = n.padding, h2 = l === void 0 ? 0 : l, p2 = ft$1(typeof h2 != "number" ? h2 : ct$1(h2, G$1)), g = u === K$1 ? Ye$1 : K$1, x = t.rects.popper, y = t.elements[v ? g : u], $ = Gt(Q$1(y) ? y : y.contextElement || I(t.elements.popper), a, f), d = ee$1(t.elements.reference), b = mt$1({ reference: d, element: x, strategy: "absolute", placement: o }), w = Te$1(Object.assign({}, x, b)), O2 = u === K$1 ? w : d, j2 = { top: $.top - O2.top + p2.top, bottom: O2.bottom - $.bottom + p2.bottom, left: $.left - O2.left + p2.left, right: O2.right - $.right + p2.right }, A = t.modifiersData.offset;
      if (u === K$1 && A) {
        var k2 = A[o];
        Object.keys(j2).forEach(function(D2) {
          var S = [W$1, R$1].indexOf(D2) >= 0 ? 1 : -1, L = [E, R$1].indexOf(D2) >= 0 ? "y" : "x";
          j2[D2] += k2[L] * S;
        });
      }
      return j2;
    }
    function Jt(t, e) {
      e === void 0 && (e = {});
      var n = e, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, f = n.allowedAutoPlacements, c2 = f === void 0 ? Ee$1 : f, u = te$1(r), m = u ? s ? De$1 : De$1.filter(function(h2) {
        return te$1(h2) === u;
      }) : G$1, v = m.filter(function(h2) {
        return c2.indexOf(h2) >= 0;
      });
      v.length === 0 && (v = m);
      var l = v.reduce(function(h2, p2) {
        return h2[p2] = ne$1(t, { placement: p2, boundary: o, rootBoundary: i, padding: a })[q$1(p2)], h2;
      }, {});
      return Object.keys(l).sort(function(h2, p2) {
        return l[h2] - l[p2];
      });
    }
    function Kt(t) {
      if (q$1(t) === me$1)
        return [];
      var e = be$1(t);
      return [lt$1(t), e, lt$1(e)];
    }
    function Qt(t) {
      var e = t.state, n = t.options, r = t.name;
      if (!e.modifiersData[r]._skip) {
        for (var o = n.mainAxis, i = o === void 0 ? true : o, a = n.altAxis, s = a === void 0 ? true : a, f = n.fallbackPlacements, c2 = n.padding, u = n.boundary, m = n.rootBoundary, v = n.altBoundary, l = n.flipVariations, h2 = l === void 0 ? true : l, p2 = n.allowedAutoPlacements, g = e.options.placement, x = q$1(g), y = x === g, $ = f || (y || !h2 ? [be$1(g)] : Kt(g)), d = [g].concat($).reduce(function(z2, V) {
          return z2.concat(q$1(V) === me$1 ? Jt(e, { placement: V, boundary: u, rootBoundary: m, padding: c2, flipVariations: h2, allowedAutoPlacements: p2 }) : V);
        }, []), b = e.rects.reference, w = e.rects.popper, O2 = /* @__PURE__ */ new Map(), j2 = true, A = d[0], k2 = 0; k2 < d.length; k2++) {
          var D2 = d[k2], S = q$1(D2), L = te$1(D2) === U, re2 = [E, R$1].indexOf(S) >= 0, oe2 = re2 ? "width" : "height", M2 = ne$1(e, { placement: D2, boundary: u, rootBoundary: m, altBoundary: v, padding: c2 }), T2 = re2 ? L ? W$1 : P : L ? R$1 : E;
          b[oe2] > w[oe2] && (T2 = be$1(T2));
          var pe2 = be$1(T2), _ = [];
          if (i && _.push(M2[S] <= 0), s && _.push(M2[T2] <= 0, M2[pe2] <= 0), _.every(function(z2) {
            return z2;
          })) {
            A = D2, j2 = false;
            break;
          }
          O2.set(D2, _);
        }
        if (j2)
          for (var ue2 = h2 ? 3 : 1, xe2 = function(z2) {
            var V = d.find(function(de2) {
              var ae2 = O2.get(de2);
              if (ae2)
                return ae2.slice(0, z2).every(function(Y2) {
                  return Y2;
                });
            });
            if (V)
              return A = V, "break";
          }, ie2 = ue2; ie2 > 0; ie2--) {
            var le2 = xe2(ie2);
            if (le2 === "break")
              break;
          }
        e.placement !== A && (e.modifiersData[r]._skip = true, e.placement = A, e.reset = true);
      }
    }
    var vt$1 = { name: "flip", enabled: true, phase: "main", fn: Qt, requiresIfExists: ["offset"], data: { _skip: false } };
    function gt$1(t, e, n) {
      return n === void 0 && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x };
    }
    function yt$1(t) {
      return [E, W$1, R$1, P].some(function(e) {
        return t[e] >= 0;
      });
    }
    function Zt(t) {
      var e = t.state, n = t.name, r = e.rects.reference, o = e.rects.popper, i = e.modifiersData.preventOverflow, a = ne$1(e, { elementContext: "reference" }), s = ne$1(e, { altBoundary: true }), f = gt$1(a, r), c2 = gt$1(s, o, i), u = yt$1(f), m = yt$1(c2);
      e.modifiersData[n] = { referenceClippingOffsets: f, popperEscapeOffsets: c2, isReferenceHidden: u, hasPopperEscaped: m }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": m });
    }
    var bt$1 = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Zt };
    function en(t, e, n) {
      var r = q$1(t), o = [P, E].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n, a = i[0], s = i[1];
      return a = a || 0, s = (s || 0) * o, [P, W$1].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s };
    }
    function tn(t) {
      var e = t.state, n = t.options, r = t.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = Ee$1.reduce(function(u, m) {
        return u[m] = en(m, e.rects, i), u;
      }, {}), s = a[e.placement], f = s.x, c2 = s.y;
      e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += f, e.modifiersData.popperOffsets.y += c2), e.modifiersData[r] = a;
    }
    var wt$1 = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: tn };
    function nn(t) {
      var e = t.state, n = t.name;
      e.modifiersData[n] = mt$1({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
    }
    var He$1 = { name: "popperOffsets", enabled: true, phase: "read", fn: nn, data: {} };
    function rn(t) {
      return t === "x" ? "y" : "x";
    }
    function on(t) {
      var e = t.state, n = t.options, r = t.name, o = n.mainAxis, i = o === void 0 ? true : o, a = n.altAxis, s = a === void 0 ? false : a, f = n.boundary, c2 = n.rootBoundary, u = n.altBoundary, m = n.padding, v = n.tether, l = v === void 0 ? true : v, h2 = n.tetherOffset, p2 = h2 === void 0 ? 0 : h2, g = ne$1(e, { boundary: f, rootBoundary: c2, padding: m, altBoundary: u }), x = q$1(e.placement), y = te$1(e.placement), $ = !y, d = Le$1(x), b = rn(d), w = e.modifiersData.popperOffsets, O2 = e.rects.reference, j2 = e.rects.popper, A = typeof p2 == "function" ? p2(Object.assign({}, e.rects, { placement: e.placement })) : p2, k2 = typeof A == "number" ? { mainAxis: A, altAxis: A } : Object.assign({ mainAxis: 0, altAxis: 0 }, A), D2 = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, S = { x: 0, y: 0 };
      if (w) {
        if (i) {
          var L, re2 = d === "y" ? E : P, oe2 = d === "y" ? R$1 : W$1, M2 = d === "y" ? "height" : "width", T2 = w[d], pe2 = T2 + g[re2], _ = T2 - g[oe2], ue2 = l ? -j2[M2] / 2 : 0, xe2 = y === U ? O2[M2] : j2[M2], ie2 = y === U ? -j2[M2] : -O2[M2], le2 = e.elements.arrow, z2 = l && le2 ? ke$1(le2) : { width: 0, height: 0 }, V = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : st$1(), de2 = V[re2], ae2 = V[oe2], Y2 = fe$1(0, O2[M2], z2[M2]), jt2 = $ ? O2[M2] / 2 - ue2 - Y2 - de2 - k2.mainAxis : xe2 - Y2 - de2 - k2.mainAxis, Dt2 = $ ? -O2[M2] / 2 + ue2 + Y2 + ae2 + k2.mainAxis : ie2 + Y2 + ae2 + k2.mainAxis, Oe2 = e.elements.arrow && se$1(e.elements.arrow), Et2 = Oe2 ? d === "y" ? Oe2.clientTop || 0 : Oe2.clientLeft || 0 : 0, Ce2 = (L = D2 == null ? void 0 : D2[d]) != null ? L : 0, Pt2 = T2 + jt2 - Ce2 - Et2, At2 = T2 + Dt2 - Ce2, qe2 = fe$1(l ? ve$1(pe2, Pt2) : pe2, T2, l ? X$1(_, At2) : _);
          w[d] = qe2, S[d] = qe2 - T2;
        }
        if (s) {
          var Ve2, kt2 = d === "x" ? E : P, Lt2 = d === "x" ? R$1 : W$1, F2 = w[b], he2 = b === "y" ? "height" : "width", Ne2 = F2 + g[kt2], Ie2 = F2 - g[Lt2], $e2 = [E, P].indexOf(x) !== -1, _e2 = (Ve2 = D2 == null ? void 0 : D2[b]) != null ? Ve2 : 0, ze2 = $e2 ? Ne2 : F2 - O2[he2] - j2[he2] - _e2 + k2.altAxis, Fe2 = $e2 ? F2 + O2[he2] + j2[he2] - _e2 - k2.altAxis : Ie2, Ue2 = l && $e2 ? St$1(ze2, F2, Fe2) : fe$1(l ? ze2 : Ne2, F2, l ? Fe2 : Ie2);
          w[b] = Ue2, S[b] = Ue2 - F2;
        }
        e.modifiersData[r] = S;
      }
    }
    var xt$1 = { name: "preventOverflow", enabled: true, phase: "main", fn: on, requiresIfExists: ["offset"] };
    function an(t) {
      return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
    }
    function sn(t) {
      return t === H(t) || !B(t) ? We$1(t) : an(t);
    }
    function fn(t) {
      var e = t.getBoundingClientRect(), n = Z$1(e.width) / t.offsetWidth || 1, r = Z$1(e.height) / t.offsetHeight || 1;
      return n !== 1 || r !== 1;
    }
    function cn(t, e, n) {
      n === void 0 && (n = false);
      var r = B(e), o = B(e) && fn(e), i = I(e), a = ee$1(t, o), s = { scrollLeft: 0, scrollTop: 0 }, f = { x: 0, y: 0 };
      return (r || !r && !n) && ((C$1(e) !== "body" || Se$1(i)) && (s = sn(e)), B(e) ? (f = ee$1(e, true), f.x += e.clientLeft, f.y += e.clientTop) : i && (f.x = Be$1(i))), { x: a.left + s.scrollLeft - f.x, y: a.top + s.scrollTop - f.y, width: a.width, height: a.height };
    }
    function pn(t) {
      var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
      t.forEach(function(i) {
        e.set(i.name, i);
      });
      function o(i) {
        n.add(i.name);
        var a = [].concat(i.requires || [], i.requiresIfExists || []);
        a.forEach(function(s) {
          if (!n.has(s)) {
            var f = e.get(s);
            f && o(f);
          }
        }), r.push(i);
      }
      return t.forEach(function(i) {
        n.has(i.name) || o(i);
      }), r;
    }
    function un(t) {
      var e = pn(t);
      return ot$1.reduce(function(n, r) {
        return n.concat(e.filter(function(o) {
          return o.phase === r;
        }));
      }, []);
    }
    function ln(t) {
      var e;
      return function() {
        return e || (e = new Promise(function(n) {
          Promise.resolve().then(function() {
            e = void 0, n(t());
          });
        })), e;
      };
    }
    function dn(t) {
      var e = t.reduce(function(n, r) {
        var o = n[r.name];
        return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
      }, {});
      return Object.keys(e).map(function(n) {
        return e[n];
      });
    }
    var Ot$1 = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function $t$1() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return !e.some(function(r) {
        return !(r && typeof r.getBoundingClientRect == "function");
      });
    }
    function we$1(t) {
      t === void 0 && (t = {});
      var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, o = e.defaultOptions, i = o === void 0 ? Ot$1 : o;
      return function(a, s, f) {
        f === void 0 && (f = i);
        var c2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ot$1, i), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, u = [], m = false, v = { state: c2, setOptions: function(p2) {
          var g = typeof p2 == "function" ? p2(c2.options) : p2;
          h2(), c2.options = Object.assign({}, i, c2.options, g), c2.scrollParents = { reference: Q$1(a) ? ce$1(a) : a.contextElement ? ce$1(a.contextElement) : [], popper: ce$1(s) };
          var x = un(dn([].concat(r, c2.options.modifiers)));
          return c2.orderedModifiers = x.filter(function(y) {
            return y.enabled;
          }), l(), v.update();
        }, forceUpdate: function() {
          if (!m) {
            var p2 = c2.elements, g = p2.reference, x = p2.popper;
            if ($t$1(g, x)) {
              c2.rects = { reference: cn(g, se$1(x), c2.options.strategy === "fixed"), popper: ke$1(x) }, c2.reset = false, c2.placement = c2.options.placement, c2.orderedModifiers.forEach(function(j2) {
                return c2.modifiersData[j2.name] = Object.assign({}, j2.data);
              });
              for (var y = 0; y < c2.orderedModifiers.length; y++) {
                if (c2.reset === true) {
                  c2.reset = false, y = -1;
                  continue;
                }
                var $ = c2.orderedModifiers[y], d = $.fn, b = $.options, w = b === void 0 ? {} : b, O2 = $.name;
                typeof d == "function" && (c2 = d({ state: c2, options: w, name: O2, instance: v }) || c2);
              }
            }
          }
        }, update: ln(function() {
          return new Promise(function(p2) {
            v.forceUpdate(), p2(c2);
          });
        }), destroy: function() {
          h2(), m = true;
        } };
        if (!$t$1(a, s))
          return v;
        v.setOptions(f).then(function(p2) {
          !m && f.onFirstUpdate && f.onFirstUpdate(p2);
        });
        function l() {
          c2.orderedModifiers.forEach(function(p2) {
            var g = p2.name, x = p2.options, y = x === void 0 ? {} : x, $ = p2.effect;
            if (typeof $ == "function") {
              var d = $({ state: c2, name: g, instance: v, options: y }), b = function() {
              };
              u.push(d || b);
            }
          });
        }
        function h2() {
          u.forEach(function(p2) {
            return p2();
          }), u = [];
        }
        return v;
      };
    }
    we$1();
    var mn = [Re$1, He$1, Me$1, Ae$1];
    we$1({ defaultModifiers: mn });
    var gn = [Re$1, He$1, Me$1, Ae$1, wt$1, vt$1, xt$1, pt$1, bt$1], yn = we$1({ defaultModifiers: gn });
    const usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
      const stateUpdater = {
        name: "updateState",
        enabled: true,
        phase: "write",
        fn: ({ state }) => {
          const derivedState = deriveState(state);
          Object.assign(states.value, derivedState);
        },
        requires: ["computeStyles"]
      };
      const options = computed(() => {
        const { onFirstUpdate, placement, strategy, modifiers } = unref(opts);
        return {
          onFirstUpdate,
          placement: placement || "bottom",
          strategy: strategy || "absolute",
          modifiers: [
            ...modifiers || [],
            stateUpdater,
            { name: "applyStyles", enabled: false }
          ]
        };
      });
      const instanceRef = shallowRef();
      const states = ref({
        styles: {
          popper: {
            position: unref(options).strategy,
            left: "0",
            top: "0"
          },
          arrow: {
            position: "absolute"
          }
        },
        attributes: {}
      });
      const destroy = () => {
        if (!instanceRef.value)
          return;
        instanceRef.value.destroy();
        instanceRef.value = void 0;
      };
      watch(options, (newOptions) => {
        const instance = unref(instanceRef);
        if (instance) {
          instance.setOptions(newOptions);
        }
      }, {
        deep: true
      });
      watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
        destroy();
        if (!referenceElement || !popperElement)
          return;
        instanceRef.value = yn(referenceElement, popperElement, unref(options));
      });
      onBeforeUnmount(() => {
        destroy();
      });
      return {
        state: computed(() => {
          var _a2;
          return __spreadValues({}, ((_a2 = unref(instanceRef)) == null ? void 0 : _a2.state) || {});
        }),
        styles: computed(() => unref(states).styles),
        attributes: computed(() => unref(states).attributes),
        update: () => {
          var _a2;
          return (_a2 = unref(instanceRef)) == null ? void 0 : _a2.update();
        },
        forceUpdate: () => {
          var _a2;
          return (_a2 = unref(instanceRef)) == null ? void 0 : _a2.forceUpdate();
        },
        instanceRef: computed(() => unref(instanceRef))
      };
    };
    function deriveState(state) {
      const elements = Object.keys(state.elements);
      const styles = fromPairs(elements.map((element) => [element, state.styles[element] || {}]));
      const attributes = fromPairs(elements.map((element) => [element, state.attributes[element]]));
      return {
        styles,
        attributes
      };
    }
    function useTimeout() {
      let timeoutHandle;
      const registerTimeout = (fn2, delay) => {
        cancelTimeout();
        timeoutHandle = window.setTimeout(fn2, delay);
      };
      const cancelTimeout = () => window.clearTimeout(timeoutHandle);
      tryOnScopeDispose(() => cancelTimeout());
      return {
        registerTimeout,
        cancelTimeout
      };
    }
    const defaultIdInjection = {
      prefix: Math.floor(Math.random() * 1e4),
      current: 0
    };
    const ID_INJECTION_KEY = Symbol("elIdInjection");
    const useIdInjection = () => {
      return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
    };
    const useId = (deterministicId) => {
      const idInjection = useIdInjection();
      const namespace = useGetDerivedNamespace();
      const idRef = computed(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
      return idRef;
    };
    let registeredEscapeHandlers = [];
    const cachedHandler = (e) => {
      const event2 = e;
      if (event2.key === EVENT_CODE.esc) {
        registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event2));
      }
    };
    const useEscapeKeydown = (handler) => {
      onMounted(() => {
        if (registeredEscapeHandlers.length === 0) {
          document.addEventListener("keydown", cachedHandler);
        }
        if (isClient)
          registeredEscapeHandlers.push(handler);
      });
      onBeforeUnmount(() => {
        registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
        if (registeredEscapeHandlers.length === 0) {
          if (isClient)
            document.removeEventListener("keydown", cachedHandler);
        }
      });
    };
    let cachedContainer;
    const usePopperContainerId = () => {
      const namespace = useGetDerivedNamespace();
      const idInjection = useIdInjection();
      const id = computed(() => {
        return `${namespace.value}-popper-container-${idInjection.prefix}`;
      });
      const selector = computed(() => `#${id.value}`);
      return {
        id,
        selector
      };
    };
    const createContainer = (id) => {
      const container = document.createElement("div");
      container.id = id;
      document.body.appendChild(container);
      return container;
    };
    const usePopperContainer = () => {
      const { id, selector } = usePopperContainerId();
      onBeforeMount(() => {
        if (!isClient)
          return;
        if (!cachedContainer && !document.body.querySelector(selector.value)) {
          cachedContainer = createContainer(id.value);
        }
      });
      return {
        id,
        selector
      };
    };
    const useDelayedToggleProps = buildProps({
      showAfter: {
        type: Number,
        default: 0
      },
      hideAfter: {
        type: Number,
        default: 200
      },
      autoClose: {
        type: Number,
        default: 0
      }
    });
    const useDelayedToggle = ({
      showAfter,
      hideAfter,
      autoClose,
      open,
      close
    }) => {
      const { registerTimeout } = useTimeout();
      const {
        registerTimeout: registerTimeoutForAutoClose,
        cancelTimeout: cancelTimeoutForAutoClose
      } = useTimeout();
      const onOpen = (event2) => {
        registerTimeout(() => {
          open(event2);
          const _autoClose = unref(autoClose);
          if (isNumber(_autoClose) && _autoClose > 0) {
            registerTimeoutForAutoClose(() => {
              close(event2);
            }, _autoClose);
          }
        }, unref(showAfter));
      };
      const onClose = (event2) => {
        cancelTimeoutForAutoClose();
        registerTimeout(() => {
          close(event2);
        }, unref(hideAfter));
      };
      return {
        onOpen,
        onClose
      };
    };
    const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
    const useForwardRef = (forwardRef) => {
      const setForwardRef = (el) => {
        forwardRef.value = el;
      };
      provide(FORWARD_REF_INJECTION_KEY, {
        setForwardRef
      });
    };
    const useForwardRefDirective = (setForwardRef) => {
      return {
        mounted(el) {
          setForwardRef(el);
        },
        updated(el) {
          setForwardRef(el);
        },
        unmounted() {
          setForwardRef(null);
        }
      };
    };
    const zIndex = ref(0);
    const defaultInitialZIndex = 2e3;
    const zIndexContextKey = Symbol("zIndexContextKey");
    const useZIndex = (zIndexOverrides) => {
      const zIndexInjection = zIndexOverrides || (getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0);
      const initialZIndex = computed(() => {
        const zIndexFromInjection = unref(zIndexInjection);
        return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
      });
      const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
      const nextZIndex = () => {
        zIndex.value++;
        return currentZIndex.value;
      };
      return {
        initialZIndex,
        currentZIndex,
        nextZIndex
      };
    };
    function useCursor(input) {
      const selectionRef = ref();
      function recordCursor() {
        if (input.value == void 0)
          return;
        const { selectionStart, selectionEnd, value } = input.value;
        if (selectionStart == null || selectionEnd == null)
          return;
        const beforeTxt = value.slice(0, Math.max(0, selectionStart));
        const afterTxt = value.slice(Math.max(0, selectionEnd));
        selectionRef.value = {
          selectionStart,
          selectionEnd,
          value,
          beforeTxt,
          afterTxt
        };
      }
      function setCursor() {
        if (input.value == void 0 || selectionRef.value == void 0)
          return;
        const { value } = input.value;
        const { beforeTxt, afterTxt, selectionStart } = selectionRef.value;
        if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0)
          return;
        let startPos = value.length;
        if (value.endsWith(afterTxt)) {
          startPos = value.length - afterTxt.length;
        } else if (value.startsWith(beforeTxt)) {
          startPos = beforeTxt.length;
        } else {
          const beforeLastChar = beforeTxt[selectionStart - 1];
          const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
          if (newIndex !== -1) {
            startPos = newIndex + 1;
          }
        }
        input.value.setSelectionRange(startPos, startPos);
      }
      return [recordCursor, setCursor];
    }
    const useSizeProp = buildProp({
      type: String,
      values: componentSizes,
      required: false
    });
    const SIZE_INJECTION_KEY = Symbol("size");
    const useGlobalSize = () => {
      const injectedSize = inject(SIZE_INJECTION_KEY, {});
      return computed(() => {
        return unref(injectedSize.size) || "";
      });
    };
    function useFocusController(target, { afterFocus, beforeBlur, afterBlur } = {}) {
      const instance = getCurrentInstance();
      const { emit: emit2 } = instance;
      const wrapperRef = shallowRef();
      const isFocused = ref(false);
      const handleFocus = (event2) => {
        if (isFocused.value)
          return;
        isFocused.value = true;
        emit2("focus", event2);
        afterFocus == null ? void 0 : afterFocus();
      };
      const handleBlur = (event2) => {
        var _a2;
        const cancelBlur = isFunction$1(beforeBlur) ? beforeBlur(event2) : false;
        if (cancelBlur || event2.relatedTarget && ((_a2 = wrapperRef.value) == null ? void 0 : _a2.contains(event2.relatedTarget)))
          return;
        isFocused.value = false;
        emit2("blur", event2);
        afterBlur == null ? void 0 : afterBlur();
      };
      const handleClick = () => {
        var _a2;
        (_a2 = target.value) == null ? void 0 : _a2.focus();
      };
      watch(wrapperRef, (el) => {
        if (el) {
          el.setAttribute("tabindex", "-1");
        }
      });
      useEventListener(wrapperRef, "click", handleClick);
      return {
        wrapperRef,
        isFocused,
        handleFocus,
        handleBlur
      };
    }
    const configProviderContextKey = Symbol();
    const globalConfig = ref();
    function useGlobalConfig(key, defaultValue = void 0) {
      const config2 = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
      if (key) {
        return computed(() => {
          var _a2, _b;
          return (_b = (_a2 = config2.value) == null ? void 0 : _a2[key]) != null ? _b : defaultValue;
        });
      } else {
        return config2;
      }
    }
    function useGlobalComponentSettings(block, sizeFallback) {
      const config2 = useGlobalConfig();
      const ns = useNamespace(block, computed(() => {
        var _a2;
        return ((_a2 = config2.value) == null ? void 0 : _a2.namespace) || defaultNamespace;
      }));
      const locale = useLocale(computed(() => {
        var _a2;
        return (_a2 = config2.value) == null ? void 0 : _a2.locale;
      }));
      const zIndex2 = useZIndex(computed(() => {
        var _a2;
        return ((_a2 = config2.value) == null ? void 0 : _a2.zIndex) || defaultInitialZIndex;
      }));
      const size2 = computed(() => {
        var _a2;
        return unref(sizeFallback) || ((_a2 = config2.value) == null ? void 0 : _a2.size) || "";
      });
      provideGlobalConfig(computed(() => unref(config2) || {}));
      return {
        ns,
        locale,
        zIndex: zIndex2,
        size: size2
      };
    }
    const provideGlobalConfig = (config2, app2, global2 = false) => {
      var _a2;
      const inSetup = !!getCurrentInstance();
      const oldConfig = inSetup ? useGlobalConfig() : void 0;
      const provideFn = (_a2 = app2 == null ? void 0 : app2.provide) != null ? _a2 : inSetup ? provide : void 0;
      if (!provideFn) {
        return;
      }
      const context = computed(() => {
        const cfg = unref(config2);
        if (!(oldConfig == null ? void 0 : oldConfig.value))
          return cfg;
        return mergeConfig(oldConfig.value, cfg);
      });
      provideFn(configProviderContextKey, context);
      provideFn(localeContextKey, computed(() => context.value.locale));
      provideFn(namespaceContextKey, computed(() => context.value.namespace));
      provideFn(zIndexContextKey, computed(() => context.value.zIndex));
      provideFn(SIZE_INJECTION_KEY, {
        size: computed(() => context.value.size || "")
      });
      if (global2 || !globalConfig.value) {
        globalConfig.value = context.value;
      }
      return context;
    };
    const mergeConfig = (a, b) => {
      var _a2;
      const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
      const obj = {};
      for (const key of keys) {
        obj[key] = (_a2 = b[key]) != null ? _a2 : a[key];
      }
      return obj;
    };
    const messageConfig = {};
    var _export_sfc$1 = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const iconProps = buildProps({
      size: {
        type: definePropType([Number, String])
      },
      color: {
        type: String
      }
    });
    const __default__$o = /* @__PURE__ */ defineComponent({
      name: "ElIcon",
      inheritAttrs: false
    });
    const _sfc_main$I = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$o), {
      props: iconProps,
      setup(__props) {
        const props = __props;
        const ns = useNamespace("icon");
        const style2 = computed(() => {
          const { size: size2, color } = props;
          if (!size2 && !color)
            return {};
          return {
            fontSize: isUndefined(size2) ? void 0 : addUnit(size2),
            "--color": color
          };
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("i", mergeProps({
            class: unref(ns).b(),
            style: unref(style2)
          }, _ctx.$attrs), [
            renderSlot(_ctx.$slots, "default")
          ], 16);
        };
      }
    }));
    var Icon$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$I, [["__file", "icon.vue"]]);
    const ElIcon = withInstall(Icon$1);
    const formContextKey = Symbol("formContextKey");
    const formItemContextKey = Symbol("formItemContextKey");
    const useFormSize = (fallback, ignore = {}) => {
      const emptyRef = ref(void 0);
      const size2 = ignore.prop ? emptyRef : useProp("size");
      const globalConfig2 = ignore.global ? emptyRef : useGlobalSize();
      const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
      const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
      return computed(() => size2.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "");
    };
    const useFormDisabled = (fallback) => {
      const disabled = useProp("disabled");
      const form = inject(formContextKey, void 0);
      return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
    };
    const useFormItem = () => {
      const form = inject(formContextKey, void 0);
      const formItem = inject(formItemContextKey, void 0);
      return {
        form,
        formItem
      };
    };
    const useFormItemInputId = (props, {
      formItemContext,
      disableIdGeneration,
      disableIdManagement
    }) => {
      if (!disableIdGeneration) {
        disableIdGeneration = ref(false);
      }
      if (!disableIdManagement) {
        disableIdManagement = ref(false);
      }
      const inputId = ref();
      let idUnwatch = void 0;
      const isLabeledByFormItem = computed(() => {
        var _a2;
        return !!(!props.label && formItemContext && formItemContext.inputIds && ((_a2 = formItemContext.inputIds) == null ? void 0 : _a2.length) <= 1);
      });
      onMounted(() => {
        idUnwatch = watch([toRef(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
          const newId = id != null ? id : !disableIdGeneration2 ? useId().value : void 0;
          if (newId !== inputId.value) {
            if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
              inputId.value && formItemContext.removeInputId(inputId.value);
              if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) {
                formItemContext.addInputId(newId);
              }
            }
            inputId.value = newId;
          }
        }, { immediate: true });
      });
      onUnmounted(() => {
        idUnwatch && idUnwatch();
        if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
          inputId.value && formItemContext.removeInputId(inputId.value);
        }
      });
      return {
        isLabeledByFormItem,
        inputId
      };
    };
    let hiddenTextarea = void 0;
    const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  ${isFirefox() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
    const CONTEXT_STYLE = [
      "letter-spacing",
      "line-height",
      "padding-top",
      "padding-bottom",
      "font-family",
      "font-weight",
      "font-size",
      "text-rendering",
      "text-transform",
      "width",
      "text-indent",
      "padding-left",
      "padding-right",
      "border-width",
      "box-sizing"
    ];
    function calculateNodeStyling(targetElement) {
      const style2 = window.getComputedStyle(targetElement);
      const boxSizing = style2.getPropertyValue("box-sizing");
      const paddingSize = Number.parseFloat(style2.getPropertyValue("padding-bottom")) + Number.parseFloat(style2.getPropertyValue("padding-top"));
      const borderSize = Number.parseFloat(style2.getPropertyValue("border-bottom-width")) + Number.parseFloat(style2.getPropertyValue("border-top-width"));
      const contextStyle = CONTEXT_STYLE.map((name2) => `${name2}:${style2.getPropertyValue(name2)}`).join(";");
      return { contextStyle, paddingSize, borderSize, boxSizing };
    }
    function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
      var _a2;
      if (!hiddenTextarea) {
        hiddenTextarea = document.createElement("textarea");
        document.body.appendChild(hiddenTextarea);
      }
      const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
      hiddenTextarea.setAttribute("style", `${contextStyle};${HIDDEN_STYLE}`);
      hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
      let height = hiddenTextarea.scrollHeight;
      const result = {};
      if (boxSizing === "border-box") {
        height = height + borderSize;
      } else if (boxSizing === "content-box") {
        height = height - paddingSize;
      }
      hiddenTextarea.value = "";
      const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
      if (isNumber(minRows)) {
        let minHeight = singleRowHeight * minRows;
        if (boxSizing === "border-box") {
          minHeight = minHeight + paddingSize + borderSize;
        }
        height = Math.max(minHeight, height);
        result.minHeight = `${minHeight}px`;
      }
      if (isNumber(maxRows)) {
        let maxHeight = singleRowHeight * maxRows;
        if (boxSizing === "border-box") {
          maxHeight = maxHeight + paddingSize + borderSize;
        }
        height = Math.min(maxHeight, height);
      }
      result.height = `${height}px`;
      (_a2 = hiddenTextarea.parentNode) == null ? void 0 : _a2.removeChild(hiddenTextarea);
      hiddenTextarea = void 0;
      return result;
    }
    const inputProps = buildProps({
      id: {
        type: String,
        default: void 0
      },
      size: useSizeProp,
      disabled: Boolean,
      modelValue: {
        type: definePropType([
          String,
          Number,
          Object
        ]),
        default: ""
      },
      maxlength: {
        type: [String, Number]
      },
      minlength: {
        type: [String, Number]
      },
      type: {
        type: String,
        default: "text"
      },
      resize: {
        type: String,
        values: ["none", "both", "horizontal", "vertical"]
      },
      autosize: {
        type: definePropType([Boolean, Object]),
        default: false
      },
      autocomplete: {
        type: String,
        default: "off"
      },
      formatter: {
        type: Function
      },
      parser: {
        type: Function
      },
      placeholder: {
        type: String
      },
      form: {
        type: String
      },
      readonly: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      showPassword: {
        type: Boolean,
        default: false
      },
      showWordLimit: {
        type: Boolean,
        default: false
      },
      suffixIcon: {
        type: iconPropType
      },
      prefixIcon: {
        type: iconPropType
      },
      containerRole: {
        type: String,
        default: void 0
      },
      label: {
        type: String,
        default: void 0
      },
      tabindex: {
        type: [String, Number],
        default: 0
      },
      validateEvent: {
        type: Boolean,
        default: true
      },
      inputStyle: {
        type: definePropType([Object, Array, String]),
        default: () => mutable({})
      },
      autofocus: {
        type: Boolean,
        default: false
      }
    });
    const inputEmits = {
      [UPDATE_MODEL_EVENT]: (value) => isString$1(value),
      input: (value) => isString$1(value),
      change: (value) => isString$1(value),
      focus: (evt) => evt instanceof FocusEvent,
      blur: (evt) => evt instanceof FocusEvent,
      clear: () => true,
      mouseleave: (evt) => evt instanceof MouseEvent,
      mouseenter: (evt) => evt instanceof MouseEvent,
      keydown: (evt) => evt instanceof Event,
      compositionstart: (evt) => evt instanceof CompositionEvent,
      compositionupdate: (evt) => evt instanceof CompositionEvent,
      compositionend: (evt) => evt instanceof CompositionEvent
    };
    const _hoisted_1$I = ["role"];
    const _hoisted_2$C = ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"];
    const _hoisted_3$v = ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"];
    const __default__$n = /* @__PURE__ */ defineComponent({
      name: "ElInput",
      inheritAttrs: false
    });
    const _sfc_main$H = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$n), {
      props: inputProps,
      emits: inputEmits,
      setup(__props, { expose, emit: emit2 }) {
        const props = __props;
        const rawAttrs = useAttrs$1();
        const slots = useSlots();
        const containerAttrs = computed(() => {
          const comboBoxAttrs = {};
          if (props.containerRole === "combobox") {
            comboBoxAttrs["aria-haspopup"] = rawAttrs["aria-haspopup"];
            comboBoxAttrs["aria-owns"] = rawAttrs["aria-owns"];
            comboBoxAttrs["aria-expanded"] = rawAttrs["aria-expanded"];
          }
          return comboBoxAttrs;
        });
        const containerKls = computed(() => [
          props.type === "textarea" ? nsTextarea.b() : nsInput.b(),
          nsInput.m(inputSize.value),
          nsInput.is("disabled", inputDisabled.value),
          nsInput.is("exceed", inputExceed.value),
          {
            [nsInput.b("group")]: slots.prepend || slots.append,
            [nsInput.bm("group", "append")]: slots.append,
            [nsInput.bm("group", "prepend")]: slots.prepend,
            [nsInput.m("prefix")]: slots.prefix || props.prefixIcon,
            [nsInput.m("suffix")]: slots.suffix || props.suffixIcon || props.clearable || props.showPassword,
            [nsInput.bm("suffix", "password-clear")]: showClear.value && showPwdVisible.value
          },
          rawAttrs.class
        ]);
        const wrapperKls = computed(() => [
          nsInput.e("wrapper"),
          nsInput.is("focus", isFocused.value)
        ]);
        const attrs = useAttrs({
          excludeKeys: computed(() => {
            return Object.keys(containerAttrs.value);
          })
        });
        const { form: elForm, formItem: elFormItem } = useFormItem();
        const { inputId } = useFormItemInputId(props, {
          formItemContext: elFormItem
        });
        const inputSize = useFormSize();
        const inputDisabled = useFormDisabled();
        const nsInput = useNamespace("input");
        const nsTextarea = useNamespace("textarea");
        const input = shallowRef();
        const textarea = shallowRef();
        const hovering = ref(false);
        const isComposing = ref(false);
        const passwordVisible = ref(false);
        const countStyle = ref();
        const textareaCalcStyle = shallowRef(props.inputStyle);
        const _ref = computed(() => input.value || textarea.value);
        const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref, {
          afterBlur() {
            var _a2;
            if (props.validateEvent) {
              (_a2 = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "blur").catch((err) => debugWarn());
            }
          }
        });
        const needStatusIcon = computed(() => {
          var _a2;
          return (_a2 = elForm == null ? void 0 : elForm.statusIcon) != null ? _a2 : false;
        });
        const validateState = computed(() => (elFormItem == null ? void 0 : elFormItem.validateState) || "");
        const validateIcon = computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
        const passwordIcon = computed(() => passwordVisible.value ? view_default : hide_default);
        const containerStyle = computed(() => [
          rawAttrs.style
        ]);
        const textareaStyle = computed(() => [
          props.inputStyle,
          textareaCalcStyle.value,
          { resize: props.resize }
        ]);
        const nativeInputValue = computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
        const showClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (isFocused.value || hovering.value));
        const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (!!nativeInputValue.value || isFocused.value));
        const isWordLimitVisible = computed(() => props.showWordLimit && !!props.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
        const textLength = computed(() => nativeInputValue.value.length);
        const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(props.maxlength));
        const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
        const [recordCursor, setCursor] = useCursor(input);
        useResizeObserver(textarea, (entries) => {
          onceInitSizeTextarea();
          if (!isWordLimitVisible.value || props.resize !== "both")
            return;
          const entry = entries[0];
          const { width } = entry.contentRect;
          countStyle.value = {
            right: `calc(100% - ${width + 15 + 6}px)`
          };
        });
        const resizeTextarea = () => {
          const { type: type2, autosize } = props;
          if (!isClient || type2 !== "textarea" || !textarea.value)
            return;
          if (autosize) {
            const minRows = isObject$5(autosize) ? autosize.minRows : void 0;
            const maxRows = isObject$5(autosize) ? autosize.maxRows : void 0;
            const textareaStyle2 = calcTextareaHeight(textarea.value, minRows, maxRows);
            textareaCalcStyle.value = __spreadValues({
              overflowY: "hidden"
            }, textareaStyle2);
            nextTick$1(() => {
              textarea.value.offsetHeight;
              textareaCalcStyle.value = textareaStyle2;
            });
          } else {
            textareaCalcStyle.value = {
              minHeight: calcTextareaHeight(textarea.value).minHeight
            };
          }
        };
        const createOnceInitResize = (resizeTextarea2) => {
          let isInit = false;
          return () => {
            var _a2;
            if (isInit || !props.autosize)
              return;
            const isElHidden = ((_a2 = textarea.value) == null ? void 0 : _a2.offsetParent) === null;
            if (!isElHidden) {
              resizeTextarea2();
              isInit = true;
            }
          };
        };
        const onceInitSizeTextarea = createOnceInitResize(resizeTextarea);
        const setNativeInputValue = () => {
          const input2 = _ref.value;
          const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
          if (!input2 || input2.value === formatterValue)
            return;
          input2.value = formatterValue;
        };
        const handleInput = (event2) => __async(this, null, function* () {
          recordCursor();
          let { value } = event2.target;
          if (props.formatter) {
            value = props.parser ? props.parser(value) : value;
          }
          if (isComposing.value)
            return;
          if (value === nativeInputValue.value) {
            setNativeInputValue();
            return;
          }
          emit2(UPDATE_MODEL_EVENT, value);
          emit2("input", value);
          yield nextTick$1();
          setNativeInputValue();
          setCursor();
        });
        const handleChange = (event2) => {
          emit2("change", event2.target.value);
        };
        const handleCompositionStart = (event2) => {
          emit2("compositionstart", event2);
          isComposing.value = true;
        };
        const handleCompositionUpdate = (event2) => {
          var _a2;
          emit2("compositionupdate", event2);
          const text = (_a2 = event2.target) == null ? void 0 : _a2.value;
          const lastCharacter = text[text.length - 1] || "";
          isComposing.value = !isKorean(lastCharacter);
        };
        const handleCompositionEnd = (event2) => {
          emit2("compositionend", event2);
          if (isComposing.value) {
            isComposing.value = false;
            handleInput(event2);
          }
        };
        const handlePasswordVisible = () => {
          passwordVisible.value = !passwordVisible.value;
          focus();
        };
        const focus = () => __async(this, null, function* () {
          var _a2;
          yield nextTick$1();
          (_a2 = _ref.value) == null ? void 0 : _a2.focus();
        });
        const blur = () => {
          var _a2;
          return (_a2 = _ref.value) == null ? void 0 : _a2.blur();
        };
        const handleMouseLeave = (evt) => {
          hovering.value = false;
          emit2("mouseleave", evt);
        };
        const handleMouseEnter = (evt) => {
          hovering.value = true;
          emit2("mouseenter", evt);
        };
        const handleKeydown = (evt) => {
          emit2("keydown", evt);
        };
        const select = () => {
          var _a2;
          (_a2 = _ref.value) == null ? void 0 : _a2.select();
        };
        const clear2 = () => {
          emit2(UPDATE_MODEL_EVENT, "");
          emit2("change", "");
          emit2("clear");
          emit2("input", "");
        };
        watch(() => props.modelValue, () => {
          var _a2;
          nextTick$1(() => resizeTextarea());
          if (props.validateEvent) {
            (_a2 = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "change").catch((err) => debugWarn());
          }
        });
        watch(nativeInputValue, () => setNativeInputValue());
        watch(() => props.type, () => __async(this, null, function* () {
          yield nextTick$1();
          setNativeInputValue();
          resizeTextarea();
        }));
        onMounted(() => {
          if (!props.formatter && props.parser)
            ;
          setNativeInputValue();
          nextTick$1(resizeTextarea);
        });
        expose({
          input,
          textarea,
          ref: _ref,
          textareaStyle,
          autosize: toRef(props, "autosize"),
          focus,
          blur,
          select,
          clear: clear2,
          resizeTextarea
        });
        return (_ctx, _cache) => {
          return withDirectives((openBlock(), createElementBlock("div", mergeProps(unref(containerAttrs), {
            class: unref(containerKls),
            style: unref(containerStyle),
            role: _ctx.containerRole,
            onMouseenter: handleMouseEnter,
            onMouseleave: handleMouseLeave
          }), [
            createCommentVNode(" input "),
            _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createCommentVNode(" prepend slot "),
              _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(nsInput).be("group", "prepend"))
              }, [
                renderSlot(_ctx.$slots, "prepend")
              ], 2)) : createCommentVNode("v-if", true),
              createBaseVNode("div", {
                ref_key: "wrapperRef",
                ref: wrapperRef,
                class: normalizeClass(unref(wrapperKls))
              }, [
                createCommentVNode(" prefix slot "),
                _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(unref(nsInput).e("prefix"))
                }, [
                  createBaseVNode("span", {
                    class: normalizeClass(unref(nsInput).e("prefix-inner"))
                  }, [
                    renderSlot(_ctx.$slots, "prefix"),
                    _ctx.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                      key: 0,
                      class: normalizeClass(unref(nsInput).e("icon"))
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
                      ]),
                      _: 1
                    }, 8, ["class"])) : createCommentVNode("v-if", true)
                  ], 2)
                ], 2)) : createCommentVNode("v-if", true),
                createBaseVNode("input", mergeProps({
                  id: unref(inputId),
                  ref_key: "input",
                  ref: input,
                  class: unref(nsInput).e("inner")
                }, unref(attrs), {
                  minlength: _ctx.minlength,
                  maxlength: _ctx.maxlength,
                  type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
                  disabled: unref(inputDisabled),
                  readonly: _ctx.readonly,
                  autocomplete: _ctx.autocomplete,
                  tabindex: _ctx.tabindex,
                  "aria-label": _ctx.label,
                  placeholder: _ctx.placeholder,
                  style: _ctx.inputStyle,
                  form: _ctx.form,
                  autofocus: _ctx.autofocus,
                  onCompositionstart: handleCompositionStart,
                  onCompositionupdate: handleCompositionUpdate,
                  onCompositionend: handleCompositionEnd,
                  onInput: handleInput,
                  onFocus: _cache[0] || (_cache[0] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
                  onBlur: _cache[1] || (_cache[1] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
                  onChange: handleChange,
                  onKeydown: handleKeydown
                }), null, 16, _hoisted_2$C),
                createCommentVNode(" suffix slot "),
                unref(suffixVisible) ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: normalizeClass(unref(nsInput).e("suffix"))
                }, [
                  createBaseVNode("span", {
                    class: normalizeClass(unref(nsInput).e("suffix-inner"))
                  }, [
                    !unref(showClear) || !unref(showPwdVisible) || !unref(isWordLimitVisible) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      renderSlot(_ctx.$slots, "suffix"),
                      _ctx.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                        key: 0,
                        class: normalizeClass(unref(nsInput).e("icon"))
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("v-if", true)
                    ], 64)) : createCommentVNode("v-if", true),
                    unref(showClear) ? (openBlock(), createBlock(unref(ElIcon), {
                      key: 1,
                      class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
                      onMousedown: withModifiers(unref(NOOP), ["prevent"]),
                      onClick: clear2
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(circle_close_default))
                      ]),
                      _: 1
                    }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
                    unref(showPwdVisible) ? (openBlock(), createBlock(unref(ElIcon), {
                      key: 2,
                      class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
                      onClick: handlePasswordVisible
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(unref(passwordIcon))))
                      ]),
                      _: 1
                    }, 8, ["class"])) : createCommentVNode("v-if", true),
                    unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
                      key: 3,
                      class: normalizeClass(unref(nsInput).e("count"))
                    }, [
                      createBaseVNode("span", {
                        class: normalizeClass(unref(nsInput).e("count-inner"))
                      }, toDisplayString(unref(textLength)) + " / " + toDisplayString(_ctx.maxlength), 3)
                    ], 2)) : createCommentVNode("v-if", true),
                    unref(validateState) && unref(validateIcon) && unref(needStatusIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                      key: 4,
                      class: normalizeClass([
                        unref(nsInput).e("icon"),
                        unref(nsInput).e("validateIcon"),
                        unref(nsInput).is("loading", unref(validateState) === "validating")
                      ])
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(unref(validateIcon))))
                      ]),
                      _: 1
                    }, 8, ["class"])) : createCommentVNode("v-if", true)
                  ], 2)
                ], 2)) : createCommentVNode("v-if", true)
              ], 2),
              createCommentVNode(" append slot "),
              _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(unref(nsInput).be("group", "append"))
              }, [
                renderSlot(_ctx.$slots, "append")
              ], 2)) : createCommentVNode("v-if", true)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createCommentVNode(" textarea "),
              createBaseVNode("textarea", mergeProps({
                id: unref(inputId),
                ref_key: "textarea",
                ref: textarea,
                class: unref(nsTextarea).e("inner")
              }, unref(attrs), {
                minlength: _ctx.minlength,
                maxlength: _ctx.maxlength,
                tabindex: _ctx.tabindex,
                disabled: unref(inputDisabled),
                readonly: _ctx.readonly,
                autocomplete: _ctx.autocomplete,
                style: unref(textareaStyle),
                "aria-label": _ctx.label,
                placeholder: _ctx.placeholder,
                form: _ctx.form,
                autofocus: _ctx.autofocus,
                onCompositionstart: handleCompositionStart,
                onCompositionupdate: handleCompositionUpdate,
                onCompositionend: handleCompositionEnd,
                onInput: handleInput,
                onFocus: _cache[2] || (_cache[2] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
                onBlur: _cache[3] || (_cache[3] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
                onChange: handleChange,
                onKeydown: handleKeydown
              }), null, 16, _hoisted_3$v),
              unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
                key: 0,
                style: normalizeStyle(countStyle.value),
                class: normalizeClass(unref(nsInput).e("count"))
              }, toDisplayString(unref(textLength)) + " / " + toDisplayString(_ctx.maxlength), 7)) : createCommentVNode("v-if", true)
            ], 64))
          ], 16, _hoisted_1$I)), [
            [vShow, _ctx.type !== "hidden"]
          ]);
        };
      }
    }));
    var Input = /* @__PURE__ */ _export_sfc$1(_sfc_main$H, [["__file", "input.vue"]]);
    const ElInput = withInstall(Input);
    const POPPER_INJECTION_KEY = Symbol("popper");
    const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
    const roleTypes = [
      "dialog",
      "grid",
      "group",
      "listbox",
      "menu",
      "navigation",
      "tooltip",
      "tree"
    ];
    const popperProps = buildProps({
      role: {
        type: String,
        values: roleTypes,
        default: "tooltip"
      }
    });
    const __default__$m = /* @__PURE__ */ defineComponent({
      name: "ElPopper",
      inheritAttrs: false
    });
    const _sfc_main$G = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$m), {
      props: popperProps,
      setup(__props, { expose }) {
        const props = __props;
        const triggerRef = ref();
        const popperInstanceRef = ref();
        const contentRef = ref();
        const referenceRef = ref();
        const role = computed(() => props.role);
        const popperProvides = {
          triggerRef,
          popperInstanceRef,
          contentRef,
          referenceRef,
          role
        };
        expose(popperProvides);
        provide(POPPER_INJECTION_KEY, popperProvides);
        return (_ctx, _cache) => {
          return renderSlot(_ctx.$slots, "default");
        };
      }
    }));
    var Popper = /* @__PURE__ */ _export_sfc$1(_sfc_main$G, [["__file", "popper.vue"]]);
    const popperArrowProps = buildProps({
      arrowOffset: {
        type: Number,
        default: 5
      }
    });
    const __default__$l = /* @__PURE__ */ defineComponent({
      name: "ElPopperArrow",
      inheritAttrs: false
    });
    const _sfc_main$F = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$l), {
      props: popperArrowProps,
      setup(__props, { expose }) {
        const props = __props;
        const ns = useNamespace("popper");
        const { arrowOffset, arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
        watch(() => props.arrowOffset, (val) => {
          arrowOffset.value = val;
        });
        onBeforeUnmount(() => {
          arrowRef.value = void 0;
        });
        expose({
          arrowRef
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("span", {
            ref_key: "arrowRef",
            ref: arrowRef,
            class: normalizeClass(unref(ns).e("arrow")),
            style: normalizeStyle(unref(arrowStyle)),
            "data-popper-arrow": ""
          }, null, 6);
        };
      }
    }));
    var ElPopperArrow = /* @__PURE__ */ _export_sfc$1(_sfc_main$F, [["__file", "arrow.vue"]]);
    const NAME = "ElOnlyChild";
    const OnlyChild = /* @__PURE__ */ defineComponent({
      name: NAME,
      setup(_, {
        slots,
        attrs
      }) {
        var _a2;
        const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
        const forwardRefDirective = useForwardRefDirective((_a2 = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a2 : NOOP);
        return () => {
          var _a22;
          const defaultSlot = (_a22 = slots.default) == null ? void 0 : _a22.call(slots, attrs);
          if (!defaultSlot)
            return null;
          if (defaultSlot.length > 1) {
            return null;
          }
          const firstLegitNode = findFirstLegitChild(defaultSlot);
          if (!firstLegitNode) {
            return null;
          }
          return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
        };
      }
    });
    function findFirstLegitChild(node) {
      if (!node)
        return null;
      const children = node;
      for (const child of children) {
        if (isObject$5(child)) {
          switch (child.type) {
            case Comment:
              continue;
            case Text:
            case "svg":
              return wrapTextContent(child);
            case Fragment:
              return findFirstLegitChild(child.children);
            default:
              return child;
          }
        }
        return wrapTextContent(child);
      }
      return null;
    }
    function wrapTextContent(s) {
      const ns = useNamespace("only-child");
      return createVNode("span", {
        "class": ns.e("content")
      }, [s]);
    }
    const popperTriggerProps = buildProps({
      virtualRef: {
        type: definePropType(Object)
      },
      virtualTriggering: Boolean,
      onMouseenter: {
        type: definePropType(Function)
      },
      onMouseleave: {
        type: definePropType(Function)
      },
      onClick: {
        type: definePropType(Function)
      },
      onKeydown: {
        type: definePropType(Function)
      },
      onFocus: {
        type: definePropType(Function)
      },
      onBlur: {
        type: definePropType(Function)
      },
      onContextmenu: {
        type: definePropType(Function)
      },
      id: String,
      open: Boolean
    });
    const __default__$k = /* @__PURE__ */ defineComponent({
      name: "ElPopperTrigger",
      inheritAttrs: false
    });
    const _sfc_main$E = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$k), {
      props: popperTriggerProps,
      setup(__props, { expose }) {
        const props = __props;
        const { role, triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
        useForwardRef(triggerRef);
        const ariaControls = computed(() => {
          return ariaHaspopup.value ? props.id : void 0;
        });
        const ariaDescribedby = computed(() => {
          if (role && role.value === "tooltip") {
            return props.open && props.id ? props.id : void 0;
          }
          return void 0;
        });
        const ariaHaspopup = computed(() => {
          if (role && role.value !== "tooltip") {
            return role.value;
          }
          return void 0;
        });
        const ariaExpanded = computed(() => {
          return ariaHaspopup.value ? `${props.open}` : void 0;
        });
        let virtualTriggerAriaStopWatch = void 0;
        onMounted(() => {
          watch(() => props.virtualRef, (virtualEl) => {
            if (virtualEl) {
              triggerRef.value = unrefElement(virtualEl);
            }
          }, {
            immediate: true
          });
          watch(triggerRef, (el, prevEl) => {
            virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
            virtualTriggerAriaStopWatch = void 0;
            if (isElement(el)) {
              [
                "onMouseenter",
                "onMouseleave",
                "onClick",
                "onKeydown",
                "onFocus",
                "onBlur",
                "onContextmenu"
              ].forEach((eventName) => {
                var _a2;
                const handler = props[eventName];
                if (handler) {
                  el.addEventListener(eventName.slice(2).toLowerCase(), handler);
                  (_a2 = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a2.call(prevEl, eventName.slice(2).toLowerCase(), handler);
                }
              });
              virtualTriggerAriaStopWatch = watch([ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded], (watches) => {
                [
                  "aria-controls",
                  "aria-describedby",
                  "aria-haspopup",
                  "aria-expanded"
                ].forEach((key, idx) => {
                  isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
                });
              }, { immediate: true });
            }
            if (isElement(prevEl)) {
              [
                "aria-controls",
                "aria-describedby",
                "aria-haspopup",
                "aria-expanded"
              ].forEach((key) => prevEl.removeAttribute(key));
            }
          }, {
            immediate: true
          });
        });
        onBeforeUnmount(() => {
          virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
          virtualTriggerAriaStopWatch = void 0;
        });
        expose({
          triggerRef
        });
        return (_ctx, _cache) => {
          return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
            "aria-controls": unref(ariaControls),
            "aria-describedby": unref(ariaDescribedby),
            "aria-expanded": unref(ariaExpanded),
            "aria-haspopup": unref(ariaHaspopup)
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : createCommentVNode("v-if", true);
        };
      }
    }));
    var ElPopperTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$E, [["__file", "trigger.vue"]]);
    const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
    const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
    const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
    const FOCUS_AFTER_TRAPPED_OPTS = {
      cancelable: true,
      bubbles: false
    };
    const FOCUSOUT_PREVENTED_OPTS = {
      cancelable: true,
      bubbles: false
    };
    const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
    const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
    const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
    const focusReason = ref();
    const lastUserFocusTimestamp = ref(0);
    const lastAutomatedFocusTimestamp = ref(0);
    let focusReasonUserCount = 0;
    const obtainAllFocusableElements = (element) => {
      const nodes = [];
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node) => {
          const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
          if (node.disabled || node.hidden || isHiddenInput)
            return NodeFilter.FILTER_SKIP;
          return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      while (walker.nextNode())
        nodes.push(walker.currentNode);
      return nodes;
    };
    const getVisibleElement = (elements, container) => {
      for (const element of elements) {
        if (!isHidden(element, container))
          return element;
      }
    };
    const isHidden = (element, container) => {
      if (getComputedStyle(element).visibility === "hidden")
        return true;
      while (element) {
        if (container && element === container)
          return false;
        if (getComputedStyle(element).display === "none")
          return true;
        element = element.parentElement;
      }
      return false;
    };
    const getEdges = (container) => {
      const focusable = obtainAllFocusableElements(container);
      const first = getVisibleElement(focusable, container);
      const last = getVisibleElement(focusable.reverse(), container);
      return [first, last];
    };
    const isSelectable = (element) => {
      return element instanceof HTMLInputElement && "select" in element;
    };
    const tryFocus = (element, shouldSelect) => {
      if (element && element.focus) {
        const prevFocusedElement = document.activeElement;
        element.focus({ preventScroll: true });
        lastAutomatedFocusTimestamp.value = window.performance.now();
        if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
          element.select();
        }
      }
    };
    function removeFromStack(list, item) {
      const copy = [...list];
      const idx = list.indexOf(item);
      if (idx !== -1) {
        copy.splice(idx, 1);
      }
      return copy;
    }
    const createFocusableStack = () => {
      let stack2 = [];
      const push = (layer) => {
        const currentLayer = stack2[0];
        if (currentLayer && layer !== currentLayer) {
          currentLayer.pause();
        }
        stack2 = removeFromStack(stack2, layer);
        stack2.unshift(layer);
      };
      const remove2 = (layer) => {
        var _a2, _b;
        stack2 = removeFromStack(stack2, layer);
        (_b = (_a2 = stack2[0]) == null ? void 0 : _a2.resume) == null ? void 0 : _b.call(_a2);
      };
      return {
        push,
        remove: remove2
      };
    };
    const focusFirstDescendant = (elements, shouldSelect = false) => {
      const prevFocusedElement = document.activeElement;
      for (const element of elements) {
        tryFocus(element, shouldSelect);
        if (document.activeElement !== prevFocusedElement)
          return;
      }
    };
    const focusableStack = createFocusableStack();
    const isFocusCausedByUserEvent = () => {
      return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
    };
    const notifyFocusReasonPointer = () => {
      focusReason.value = "pointer";
      lastUserFocusTimestamp.value = window.performance.now();
    };
    const notifyFocusReasonKeydown = () => {
      focusReason.value = "keyboard";
      lastUserFocusTimestamp.value = window.performance.now();
    };
    const useFocusReason = () => {
      onMounted(() => {
        if (focusReasonUserCount === 0) {
          document.addEventListener("mousedown", notifyFocusReasonPointer);
          document.addEventListener("touchstart", notifyFocusReasonPointer);
          document.addEventListener("keydown", notifyFocusReasonKeydown);
        }
        focusReasonUserCount++;
      });
      onBeforeUnmount(() => {
        focusReasonUserCount--;
        if (focusReasonUserCount <= 0) {
          document.removeEventListener("mousedown", notifyFocusReasonPointer);
          document.removeEventListener("touchstart", notifyFocusReasonPointer);
          document.removeEventListener("keydown", notifyFocusReasonKeydown);
        }
      });
      return {
        focusReason,
        lastUserFocusTimestamp,
        lastAutomatedFocusTimestamp
      };
    };
    const createFocusOutPreventedEvent = (detail) => {
      return new CustomEvent(FOCUSOUT_PREVENTED, __spreadProps(__spreadValues({}, FOCUSOUT_PREVENTED_OPTS), {
        detail
      }));
    };
    const _sfc_main$D = /* @__PURE__ */ defineComponent({
      name: "ElFocusTrap",
      inheritAttrs: false,
      props: {
        loop: Boolean,
        trapped: Boolean,
        focusTrapEl: Object,
        focusStartEl: {
          type: [Object, String],
          default: "first"
        }
      },
      emits: [
        ON_TRAP_FOCUS_EVT,
        ON_RELEASE_FOCUS_EVT,
        "focusin",
        "focusout",
        "focusout-prevented",
        "release-requested"
      ],
      setup(props, { emit: emit2 }) {
        const forwardRef = ref();
        let lastFocusBeforeTrapped;
        let lastFocusAfterTrapped;
        const { focusReason: focusReason2 } = useFocusReason();
        useEscapeKeydown((event2) => {
          if (props.trapped && !focusLayer.paused) {
            emit2("release-requested", event2);
          }
        });
        const focusLayer = {
          paused: false,
          pause() {
            this.paused = true;
          },
          resume() {
            this.paused = false;
          }
        };
        const onKeydown = (e) => {
          if (!props.loop && !props.trapped)
            return;
          if (focusLayer.paused)
            return;
          const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
          const { loop: loop2 } = props;
          const isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
          const currentFocusingEl = document.activeElement;
          if (isTabbing && currentFocusingEl) {
            const container = currentTarget;
            const [first, last] = getEdges(container);
            const isTabbable = first && last;
            if (!isTabbable) {
              if (currentFocusingEl === container) {
                const focusoutPreventedEvent = createFocusOutPreventedEvent({
                  focusReason: focusReason2.value
                });
                emit2("focusout-prevented", focusoutPreventedEvent);
                if (!focusoutPreventedEvent.defaultPrevented) {
                  e.preventDefault();
                }
              }
            } else {
              if (!shiftKey && currentFocusingEl === last) {
                const focusoutPreventedEvent = createFocusOutPreventedEvent({
                  focusReason: focusReason2.value
                });
                emit2("focusout-prevented", focusoutPreventedEvent);
                if (!focusoutPreventedEvent.defaultPrevented) {
                  e.preventDefault();
                  if (loop2)
                    tryFocus(first, true);
                }
              } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
                const focusoutPreventedEvent = createFocusOutPreventedEvent({
                  focusReason: focusReason2.value
                });
                emit2("focusout-prevented", focusoutPreventedEvent);
                if (!focusoutPreventedEvent.defaultPrevented) {
                  e.preventDefault();
                  if (loop2)
                    tryFocus(last, true);
                }
              }
            }
          }
        };
        provide(FOCUS_TRAP_INJECTION_KEY, {
          focusTrapRef: forwardRef,
          onKeydown
        });
        watch(() => props.focusTrapEl, (focusTrapEl) => {
          if (focusTrapEl) {
            forwardRef.value = focusTrapEl;
          }
        }, { immediate: true });
        watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
          if (forwardRef2) {
            forwardRef2.addEventListener("keydown", onKeydown);
            forwardRef2.addEventListener("focusin", onFocusIn);
            forwardRef2.addEventListener("focusout", onFocusOut);
          }
          if (oldForwardRef) {
            oldForwardRef.removeEventListener("keydown", onKeydown);
            oldForwardRef.removeEventListener("focusin", onFocusIn);
            oldForwardRef.removeEventListener("focusout", onFocusOut);
          }
        });
        const trapOnFocus = (e) => {
          emit2(ON_TRAP_FOCUS_EVT, e);
        };
        const releaseOnFocus = (e) => emit2(ON_RELEASE_FOCUS_EVT, e);
        const onFocusIn = (e) => {
          const trapContainer = unref(forwardRef);
          if (!trapContainer)
            return;
          const target = e.target;
          const relatedTarget = e.relatedTarget;
          const isFocusedInTrap = target && trapContainer.contains(target);
          if (!props.trapped) {
            const isPrevFocusedInTrap = relatedTarget && trapContainer.contains(relatedTarget);
            if (!isPrevFocusedInTrap) {
              lastFocusBeforeTrapped = relatedTarget;
            }
          }
          if (isFocusedInTrap)
            emit2("focusin", e);
          if (focusLayer.paused)
            return;
          if (props.trapped) {
            if (isFocusedInTrap) {
              lastFocusAfterTrapped = target;
            } else {
              tryFocus(lastFocusAfterTrapped, true);
            }
          }
        };
        const onFocusOut = (e) => {
          const trapContainer = unref(forwardRef);
          if (focusLayer.paused || !trapContainer)
            return;
          if (props.trapped) {
            const relatedTarget = e.relatedTarget;
            if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
              setTimeout(() => {
                if (!focusLayer.paused && props.trapped) {
                  const focusoutPreventedEvent = createFocusOutPreventedEvent({
                    focusReason: focusReason2.value
                  });
                  emit2("focusout-prevented", focusoutPreventedEvent);
                  if (!focusoutPreventedEvent.defaultPrevented) {
                    tryFocus(lastFocusAfterTrapped, true);
                  }
                }
              }, 0);
            }
          } else {
            const target = e.target;
            const isFocusedInTrap = target && trapContainer.contains(target);
            if (!isFocusedInTrap)
              emit2("focusout", e);
          }
        };
        function startTrap() {
          return __async(this, null, function* () {
            yield nextTick$1();
            const trapContainer = unref(forwardRef);
            if (trapContainer) {
              focusableStack.push(focusLayer);
              const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
              lastFocusBeforeTrapped = prevFocusedElement;
              const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
              if (!isPrevFocusContained) {
                const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
                trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
                trapContainer.dispatchEvent(focusEvent);
                if (!focusEvent.defaultPrevented) {
                  nextTick$1(() => {
                    let focusStartEl = props.focusStartEl;
                    if (!isString$1(focusStartEl)) {
                      tryFocus(focusStartEl);
                      if (document.activeElement !== focusStartEl) {
                        focusStartEl = "first";
                      }
                    }
                    if (focusStartEl === "first") {
                      focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
                    }
                    if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                      tryFocus(trapContainer);
                    }
                  });
                }
              }
            }
          });
        }
        function stopTrap() {
          const trapContainer = unref(forwardRef);
          if (trapContainer) {
            trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
            const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, __spreadProps(__spreadValues({}, FOCUS_AFTER_TRAPPED_OPTS), {
              detail: {
                focusReason: focusReason2.value
              }
            }));
            trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
            trapContainer.dispatchEvent(releasedEvent);
            if (!releasedEvent.defaultPrevented && (focusReason2.value == "keyboard" || !isFocusCausedByUserEvent() || trapContainer.contains(document.activeElement))) {
              tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body);
            }
            trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
            focusableStack.remove(focusLayer);
          }
        }
        onMounted(() => {
          if (props.trapped) {
            startTrap();
          }
          watch(() => props.trapped, (trapped) => {
            if (trapped) {
              startTrap();
            } else {
              stopTrap();
            }
          });
        });
        onBeforeUnmount(() => {
          if (props.trapped) {
            stopTrap();
          }
        });
        return {
          onKeydown
        };
      }
    });
    function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
      return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
    }
    var ElFocusTrap = /* @__PURE__ */ _export_sfc$1(_sfc_main$D, [["render", _sfc_render], ["__file", "focus-trap.vue"]]);
    const POSITIONING_STRATEGIES = ["fixed", "absolute"];
    const popperCoreConfigProps = buildProps({
      boundariesPadding: {
        type: Number,
        default: 0
      },
      fallbackPlacements: {
        type: definePropType(Array),
        default: void 0
      },
      gpuAcceleration: {
        type: Boolean,
        default: true
      },
      offset: {
        type: Number,
        default: 12
      },
      placement: {
        type: String,
        values: Ee$1,
        default: "bottom"
      },
      popperOptions: {
        type: definePropType(Object),
        default: () => ({})
      },
      strategy: {
        type: String,
        values: POSITIONING_STRATEGIES,
        default: "absolute"
      }
    });
    const popperContentProps = buildProps(__spreadProps(__spreadValues({}, popperCoreConfigProps), {
      id: String,
      style: {
        type: definePropType([String, Array, Object])
      },
      className: {
        type: definePropType([String, Array, Object])
      },
      effect: {
        type: String,
        default: "dark"
      },
      visible: Boolean,
      enterable: {
        type: Boolean,
        default: true
      },
      pure: Boolean,
      focusOnShow: {
        type: Boolean,
        default: false
      },
      trapping: {
        type: Boolean,
        default: false
      },
      popperClass: {
        type: definePropType([String, Array, Object])
      },
      popperStyle: {
        type: definePropType([String, Array, Object])
      },
      referenceEl: {
        type: definePropType(Object)
      },
      triggerTargetEl: {
        type: definePropType(Object)
      },
      stopPopperMouseEvent: {
        type: Boolean,
        default: true
      },
      ariaLabel: {
        type: String,
        default: void 0
      },
      virtualTriggering: Boolean,
      zIndex: Number
    }));
    const popperContentEmits = {
      mouseenter: (evt) => evt instanceof MouseEvent,
      mouseleave: (evt) => evt instanceof MouseEvent,
      focus: () => true,
      blur: () => true,
      close: () => true
    };
    const buildPopperOptions = (props, modifiers = []) => {
      const { placement, strategy, popperOptions } = props;
      const options = __spreadProps(__spreadValues({
        placement,
        strategy
      }, popperOptions), {
        modifiers: [...genModifiers(props), ...modifiers]
      });
      deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
      return options;
    };
    const unwrapMeasurableEl = ($el) => {
      if (!isClient)
        return;
      return unrefElement($el);
    };
    function genModifiers(options) {
      const { offset, gpuAcceleration, fallbackPlacements } = options;
      return [
        {
          name: "offset",
          options: {
            offset: [0, offset != null ? offset : 12]
          }
        },
        {
          name: "preventOverflow",
          options: {
            padding: {
              top: 2,
              bottom: 2,
              left: 5,
              right: 5
            }
          }
        },
        {
          name: "flip",
          options: {
            padding: 5,
            fallbackPlacements
          }
        },
        {
          name: "computeStyles",
          options: {
            gpuAcceleration
          }
        }
      ];
    }
    function deriveExtraModifiers(options, modifiers) {
      if (modifiers) {
        options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
      }
    }
    const DEFAULT_ARROW_OFFSET = 0;
    const usePopperContent = (props) => {
      const { popperInstanceRef, contentRef, triggerRef, role } = inject(POPPER_INJECTION_KEY, void 0);
      const arrowRef = ref();
      const arrowOffset = ref();
      const eventListenerModifier = computed(() => {
        return {
          name: "eventListeners",
          enabled: !!props.visible
        };
      });
      const arrowModifier = computed(() => {
        var _a2;
        const arrowEl = unref(arrowRef);
        const offset = (_a2 = unref(arrowOffset)) != null ? _a2 : DEFAULT_ARROW_OFFSET;
        return {
          name: "arrow",
          enabled: !isUndefined$1(arrowEl),
          options: {
            element: arrowEl,
            padding: offset
          }
        };
      });
      const options = computed(() => {
        return __spreadValues({
          onFirstUpdate: () => {
            update2();
          }
        }, buildPopperOptions(props, [
          unref(arrowModifier),
          unref(eventListenerModifier)
        ]));
      });
      const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef));
      const { attributes, state, styles, update: update2, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
      watch(instanceRef, (instance) => popperInstanceRef.value = instance);
      onMounted(() => {
        watch(() => {
          var _a2;
          return (_a2 = unref(computedReference)) == null ? void 0 : _a2.getBoundingClientRect();
        }, () => {
          update2();
        });
      });
      return {
        attributes,
        arrowRef,
        contentRef,
        instanceRef,
        state,
        styles,
        role,
        forceUpdate,
        update: update2
      };
    };
    const usePopperContentDOM = (props, {
      attributes,
      styles,
      role
    }) => {
      const { nextZIndex } = useZIndex();
      const ns = useNamespace("popper");
      const contentAttrs = computed(() => unref(attributes).popper);
      const contentZIndex = ref(isNumber(props.zIndex) ? props.zIndex : nextZIndex());
      const contentClass = computed(() => [
        ns.b(),
        ns.is("pure", props.pure),
        ns.is(props.effect),
        props.popperClass
      ]);
      const contentStyle = computed(() => {
        return [
          { zIndex: unref(contentZIndex) },
          unref(styles).popper,
          props.popperStyle || {}
        ];
      });
      const ariaModal = computed(() => role.value === "dialog" ? "false" : void 0);
      const arrowStyle = computed(() => unref(styles).arrow || {});
      const updateZIndex = () => {
        contentZIndex.value = isNumber(props.zIndex) ? props.zIndex : nextZIndex();
      };
      return {
        ariaModal,
        arrowStyle,
        contentAttrs,
        contentClass,
        contentStyle,
        contentZIndex,
        updateZIndex
      };
    };
    const usePopperContentFocusTrap = (props, emit2) => {
      const trapped = ref(false);
      const focusStartRef = ref();
      const onFocusAfterTrapped = () => {
        emit2("focus");
      };
      const onFocusAfterReleased = (event2) => {
        var _a2;
        if (((_a2 = event2.detail) == null ? void 0 : _a2.focusReason) !== "pointer") {
          focusStartRef.value = "first";
          emit2("blur");
        }
      };
      const onFocusInTrap = (event2) => {
        if (props.visible && !trapped.value) {
          if (event2.target) {
            focusStartRef.value = event2.target;
          }
          trapped.value = true;
        }
      };
      const onFocusoutPrevented = (event2) => {
        if (!props.trapping) {
          if (event2.detail.focusReason === "pointer") {
            event2.preventDefault();
          }
          trapped.value = false;
        }
      };
      const onReleaseRequested = () => {
        trapped.value = false;
        emit2("close");
      };
      return {
        focusStartRef,
        trapped,
        onFocusAfterReleased,
        onFocusAfterTrapped,
        onFocusInTrap,
        onFocusoutPrevented,
        onReleaseRequested
      };
    };
    const __default__$j = /* @__PURE__ */ defineComponent({
      name: "ElPopperContent"
    });
    const _sfc_main$C = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$j), {
      props: popperContentProps,
      emits: popperContentEmits,
      setup(__props, { expose, emit: emit2 }) {
        const props = __props;
        const {
          focusStartRef,
          trapped,
          onFocusAfterReleased,
          onFocusAfterTrapped,
          onFocusInTrap,
          onFocusoutPrevented,
          onReleaseRequested
        } = usePopperContentFocusTrap(props, emit2);
        const { attributes, arrowRef, contentRef, styles, instanceRef, role, update: update2 } = usePopperContent(props);
        const {
          ariaModal,
          arrowStyle,
          contentAttrs,
          contentClass,
          contentStyle,
          updateZIndex
        } = usePopperContentDOM(props, {
          styles,
          attributes,
          role
        });
        const formItemContext = inject(formItemContextKey, void 0);
        const arrowOffset = ref();
        provide(POPPER_CONTENT_INJECTION_KEY, {
          arrowStyle,
          arrowRef,
          arrowOffset
        });
        if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
          provide(formItemContextKey, __spreadProps(__spreadValues({}, formItemContext), {
            addInputId: NOOP,
            removeInputId: NOOP
          }));
        }
        let triggerTargetAriaStopWatch = void 0;
        const updatePopper = (shouldUpdateZIndex = true) => {
          update2();
          shouldUpdateZIndex && updateZIndex();
        };
        const togglePopperAlive = () => {
          updatePopper(false);
          if (props.visible && props.focusOnShow) {
            trapped.value = true;
          } else if (props.visible === false) {
            trapped.value = false;
          }
        };
        onMounted(() => {
          watch(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
            triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
            triggerTargetAriaStopWatch = void 0;
            const el = unref(triggerTargetEl || contentRef.value);
            const prevEl = unref(prevTriggerTargetEl || contentRef.value);
            if (isElement(el)) {
              triggerTargetAriaStopWatch = watch([role, () => props.ariaLabel, ariaModal, () => props.id], (watches) => {
                ["role", "aria-label", "aria-modal", "id"].forEach((key, idx) => {
                  isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
                });
              }, { immediate: true });
            }
            if (prevEl !== el && isElement(prevEl)) {
              ["role", "aria-label", "aria-modal", "id"].forEach((key) => {
                prevEl.removeAttribute(key);
              });
            }
          }, { immediate: true });
          watch(() => props.visible, togglePopperAlive, { immediate: true });
        });
        onBeforeUnmount(() => {
          triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
          triggerTargetAriaStopWatch = void 0;
        });
        expose({
          popperContentRef: contentRef,
          popperInstanceRef: instanceRef,
          updatePopper,
          contentStyle
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", mergeProps({
            ref_key: "contentRef",
            ref: contentRef
          }, unref(contentAttrs), {
            style: unref(contentStyle),
            class: unref(contentClass),
            tabindex: "-1",
            onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
            onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
          }), [
            createVNode(unref(ElFocusTrap), {
              trapped: unref(trapped),
              "trap-on-focus-in": true,
              "focus-trap-el": unref(contentRef),
              "focus-start-el": unref(focusStartRef),
              onFocusAfterTrapped: unref(onFocusAfterTrapped),
              onFocusAfterReleased: unref(onFocusAfterReleased),
              onFocusin: unref(onFocusInTrap),
              onFocusoutPrevented: unref(onFocusoutPrevented),
              onReleaseRequested: unref(onReleaseRequested)
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
          ], 16);
        };
      }
    }));
    var ElPopperContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$C, [["__file", "content.vue"]]);
    const ElPopper = withInstall(Popper);
    const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
    const useTooltipContentProps = buildProps(__spreadProps(__spreadValues(__spreadValues({}, useDelayedToggleProps), popperContentProps), {
      appendTo: {
        type: definePropType([String, Object])
      },
      content: {
        type: String,
        default: ""
      },
      rawContent: {
        type: Boolean,
        default: false
      },
      persistent: Boolean,
      ariaLabel: String,
      visible: {
        type: definePropType(Boolean),
        default: null
      },
      transition: String,
      teleported: {
        type: Boolean,
        default: true
      },
      disabled: Boolean
    }));
    const useTooltipTriggerProps = buildProps(__spreadProps(__spreadValues({}, popperTriggerProps), {
      disabled: Boolean,
      trigger: {
        type: definePropType([String, Array]),
        default: "hover"
      },
      triggerKeys: {
        type: definePropType(Array),
        default: () => [EVENT_CODE.enter, EVENT_CODE.space]
      }
    }));
    const {
      useModelToggleProps: useTooltipModelToggleProps,
      useModelToggleEmits: useTooltipModelToggleEmits,
      useModelToggle: useTooltipModelToggle
    } = createModelToggleComposable("visible");
    const useTooltipProps = buildProps(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, popperProps), useTooltipModelToggleProps), useTooltipContentProps), useTooltipTriggerProps), popperArrowProps), {
      showArrow: {
        type: Boolean,
        default: true
      }
    }));
    const tooltipEmits = [
      ...useTooltipModelToggleEmits,
      "before-show",
      "before-hide",
      "show",
      "hide",
      "open",
      "close"
    ];
    const isTriggerType = (trigger2, type2) => {
      if (isArray$2(trigger2)) {
        return trigger2.includes(type2);
      }
      return trigger2 === type2;
    };
    const whenTrigger = (trigger2, type2, handler) => {
      return (e) => {
        isTriggerType(unref(trigger2), type2) && handler(e);
      };
    };
    const __default__$i = /* @__PURE__ */ defineComponent({
      name: "ElTooltipTrigger"
    });
    const _sfc_main$B = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$i), {
      props: useTooltipTriggerProps,
      setup(__props, { expose }) {
        const props = __props;
        const ns = useNamespace("tooltip");
        const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
        const triggerRef = ref(null);
        const stopWhenControlledOrDisabled = () => {
          if (unref(controlled) || props.disabled) {
            return true;
          }
        };
        const trigger2 = toRef(props, "trigger");
        const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "hover", onOpen));
        const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "hover", onClose));
        const onClick2 = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "click", (e) => {
          if (e.button === 0) {
            onToggle(e);
          }
        }));
        const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "focus", onOpen));
        const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "focus", onClose));
        const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "contextmenu", (e) => {
          e.preventDefault();
          onToggle(e);
        }));
        const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
          const { code } = e;
          if (props.triggerKeys.includes(code)) {
            e.preventDefault();
            onToggle(e);
          }
        });
        expose({
          triggerRef
        });
        return (_ctx, _cache) => {
          return openBlock(), createBlock(unref(ElPopperTrigger), {
            id: unref(id),
            "virtual-ref": _ctx.virtualRef,
            open: unref(open),
            "virtual-triggering": _ctx.virtualTriggering,
            class: normalizeClass(unref(ns).e("trigger")),
            onBlur: unref(onBlur),
            onClick: unref(onClick2),
            onContextmenu: unref(onContextMenu),
            onFocus: unref(onFocus),
            onMouseenter: unref(onMouseenter),
            onMouseleave: unref(onMouseleave),
            onKeydown: unref(onKeydown)
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
        };
      }
    }));
    var ElTooltipTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$B, [["__file", "trigger.vue"]]);
    const __default__$h = /* @__PURE__ */ defineComponent({
      name: "ElTooltipContent",
      inheritAttrs: false
    });
    const _sfc_main$A = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$h), {
      props: useTooltipContentProps,
      setup(__props, { expose }) {
        const props = __props;
        const { selector } = usePopperContainerId();
        const ns = useNamespace("tooltip");
        const contentRef = ref(null);
        const destroyed = ref(false);
        const {
          controlled,
          id,
          open,
          trigger: trigger2,
          onClose,
          onOpen,
          onShow,
          onHide,
          onBeforeShow,
          onBeforeHide
        } = inject(TOOLTIP_INJECTION_KEY, void 0);
        const transitionClass = computed(() => {
          return props.transition || `${ns.namespace.value}-fade-in-linear`;
        });
        const persistentRef = computed(() => {
          return props.persistent;
        });
        onBeforeUnmount(() => {
          destroyed.value = true;
        });
        const shouldRender = computed(() => {
          return unref(persistentRef) ? true : unref(open);
        });
        const shouldShow = computed(() => {
          return props.disabled ? false : unref(open);
        });
        const appendTo = computed(() => {
          return props.appendTo || selector.value;
        });
        const contentStyle = computed(() => {
          var _a2;
          return (_a2 = props.style) != null ? _a2 : {};
        });
        const ariaHidden = computed(() => !unref(open));
        const onTransitionLeave = () => {
          onHide();
        };
        const stopWhenControlled = () => {
          if (unref(controlled))
            return true;
        };
        const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
          if (props.enterable && unref(trigger2) === "hover") {
            onOpen();
          }
        });
        const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
          if (unref(trigger2) === "hover") {
            onClose();
          }
        });
        const onBeforeEnter = () => {
          var _a2, _b;
          (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
          onBeforeShow == null ? void 0 : onBeforeShow();
        };
        const onBeforeLeave = () => {
          onBeforeHide == null ? void 0 : onBeforeHide();
        };
        const onAfterShow = () => {
          onShow();
          stopHandle = onClickOutside(computed(() => {
            var _a2;
            return (_a2 = contentRef.value) == null ? void 0 : _a2.popperContentRef;
          }), () => {
            if (unref(controlled))
              return;
            const $trigger = unref(trigger2);
            if ($trigger !== "hover") {
              onClose();
            }
          });
        };
        const onBlur = () => {
          if (!props.virtualTriggering) {
            onClose();
          }
        };
        let stopHandle;
        watch(() => unref(open), (val) => {
          if (!val) {
            stopHandle == null ? void 0 : stopHandle();
          }
        }, {
          flush: "post"
        });
        watch(() => props.content, () => {
          var _a2, _b;
          (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
        });
        expose({
          contentRef
        });
        return (_ctx, _cache) => {
          return openBlock(), createBlock(Teleport, {
            disabled: !_ctx.teleported,
            to: unref(appendTo)
          }, [
            createVNode(Transition, {
              name: unref(transitionClass),
              onAfterLeave: onTransitionLeave,
              onBeforeEnter,
              onAfterEnter: onAfterShow,
              onBeforeLeave
            }, {
              default: withCtx(() => [
                unref(shouldRender) ? withDirectives((openBlock(), createBlock(unref(ElPopperContent), mergeProps({
                  key: 0,
                  id: unref(id),
                  ref_key: "contentRef",
                  ref: contentRef
                }, _ctx.$attrs, {
                  "aria-label": _ctx.ariaLabel,
                  "aria-hidden": unref(ariaHidden),
                  "boundaries-padding": _ctx.boundariesPadding,
                  "fallback-placements": _ctx.fallbackPlacements,
                  "gpu-acceleration": _ctx.gpuAcceleration,
                  offset: _ctx.offset,
                  placement: _ctx.placement,
                  "popper-options": _ctx.popperOptions,
                  strategy: _ctx.strategy,
                  effect: _ctx.effect,
                  enterable: _ctx.enterable,
                  pure: _ctx.pure,
                  "popper-class": _ctx.popperClass,
                  "popper-style": [_ctx.popperStyle, unref(contentStyle)],
                  "reference-el": _ctx.referenceEl,
                  "trigger-target-el": _ctx.triggerTargetEl,
                  visible: unref(shouldShow),
                  "z-index": _ctx.zIndex,
                  onMouseenter: unref(onContentEnter),
                  onMouseleave: unref(onContentLeave),
                  onBlur,
                  onClose: unref(onClose)
                }), {
                  default: withCtx(() => [
                    !destroyed.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
                  ]),
                  _: 3
                }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
                  [vShow, unref(shouldShow)]
                ]) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 8, ["name"])
          ], 8, ["disabled", "to"]);
        };
      }
    }));
    var ElTooltipContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$A, [["__file", "content.vue"]]);
    const _hoisted_1$H = ["innerHTML"];
    const _hoisted_2$B = { key: 1 };
    const __default__$g = /* @__PURE__ */ defineComponent({
      name: "ElTooltip"
    });
    const _sfc_main$z = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$g), {
      props: useTooltipProps,
      emits: tooltipEmits,
      setup(__props, { expose, emit: emit2 }) {
        const props = __props;
        usePopperContainer();
        const id = useId();
        const popperRef = ref();
        const contentRef = ref();
        const updatePopper = () => {
          var _a2;
          const popperComponent = unref(popperRef);
          if (popperComponent) {
            (_a2 = popperComponent.popperInstanceRef) == null ? void 0 : _a2.update();
          }
        };
        const open = ref(false);
        const toggleReason = ref();
        const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
          indicator: open,
          toggleReason
        });
        const { onOpen, onClose } = useDelayedToggle({
          showAfter: toRef(props, "showAfter"),
          hideAfter: toRef(props, "hideAfter"),
          autoClose: toRef(props, "autoClose"),
          open: show,
          close: hide
        });
        const controlled = computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
        provide(TOOLTIP_INJECTION_KEY, {
          controlled,
          id,
          open: readonly(open),
          trigger: toRef(props, "trigger"),
          onOpen: (event2) => {
            onOpen(event2);
          },
          onClose: (event2) => {
            onClose(event2);
          },
          onToggle: (event2) => {
            if (unref(open)) {
              onClose(event2);
            } else {
              onOpen(event2);
            }
          },
          onShow: () => {
            emit2("show", toggleReason.value);
          },
          onHide: () => {
            emit2("hide", toggleReason.value);
          },
          onBeforeShow: () => {
            emit2("before-show", toggleReason.value);
          },
          onBeforeHide: () => {
            emit2("before-hide", toggleReason.value);
          },
          updatePopper
        });
        watch(() => props.disabled, (disabled) => {
          if (disabled && open.value) {
            open.value = false;
          }
        });
        const isFocusInsideContent = (event2) => {
          var _a2, _b;
          const popperContent = (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.contentRef) == null ? void 0 : _b.popperContentRef;
          const activeElement = (event2 == null ? void 0 : event2.relatedTarget) || document.activeElement;
          return popperContent && popperContent.contains(activeElement);
        };
        onDeactivated(() => open.value && hide());
        expose({
          popperRef,
          contentRef,
          isFocusInsideContent,
          updatePopper,
          onOpen,
          onClose,
          hide
        });
        return (_ctx, _cache) => {
          return openBlock(), createBlock(unref(ElPopper), {
            ref_key: "popperRef",
            ref: popperRef,
            role: _ctx.role
          }, {
            default: withCtx(() => [
              createVNode(ElTooltipTrigger, {
                disabled: _ctx.disabled,
                trigger: _ctx.trigger,
                "trigger-keys": _ctx.triggerKeys,
                "virtual-ref": _ctx.virtualRef,
                "virtual-triggering": _ctx.virtualTriggering
              }, {
                default: withCtx(() => [
                  _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
                ]),
                _: 3
              }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
              createVNode(ElTooltipContent, {
                ref_key: "contentRef",
                ref: contentRef,
                "aria-label": _ctx.ariaLabel,
                "boundaries-padding": _ctx.boundariesPadding,
                content: _ctx.content,
                disabled: _ctx.disabled,
                effect: _ctx.effect,
                enterable: _ctx.enterable,
                "fallback-placements": _ctx.fallbackPlacements,
                "hide-after": _ctx.hideAfter,
                "gpu-acceleration": _ctx.gpuAcceleration,
                offset: _ctx.offset,
                persistent: _ctx.persistent,
                "popper-class": _ctx.popperClass,
                "popper-style": _ctx.popperStyle,
                placement: _ctx.placement,
                "popper-options": _ctx.popperOptions,
                pure: _ctx.pure,
                "raw-content": _ctx.rawContent,
                "reference-el": _ctx.referenceEl,
                "trigger-target-el": _ctx.triggerTargetEl,
                "show-after": _ctx.showAfter,
                strategy: _ctx.strategy,
                teleported: _ctx.teleported,
                transition: _ctx.transition,
                "virtual-triggering": _ctx.virtualTriggering,
                "z-index": _ctx.zIndex,
                "append-to": _ctx.appendTo
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content", {}, () => [
                    _ctx.rawContent ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      innerHTML: _ctx.content
                    }, null, 8, _hoisted_1$H)) : (openBlock(), createElementBlock("span", _hoisted_2$B, toDisplayString(_ctx.content), 1))
                  ]),
                  _ctx.showArrow ? (openBlock(), createBlock(unref(ElPopperArrow), {
                    key: 0,
                    "arrow-offset": _ctx.arrowOffset
                  }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
                ]),
                _: 3
              }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
            ]),
            _: 3
          }, 8, ["role"]);
        };
      }
    }));
    var Tooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["__file", "tooltip.vue"]]);
    const ElTooltip = withInstall(Tooltip);
    const badgeProps = buildProps({
      value: {
        type: [String, Number],
        default: ""
      },
      max: {
        type: Number,
        default: 99
      },
      isDot: Boolean,
      hidden: Boolean,
      type: {
        type: String,
        values: ["primary", "success", "warning", "info", "danger"],
        default: "danger"
      }
    });
    const _hoisted_1$G = ["textContent"];
    const __default__$f = /* @__PURE__ */ defineComponent({
      name: "ElBadge"
    });
    const _sfc_main$y = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$f), {
      props: badgeProps,
      setup(__props, { expose }) {
        const props = __props;
        const ns = useNamespace("badge");
        const content = computed(() => {
          if (props.isDot)
            return "";
          if (isNumber(props.value) && isNumber(props.max)) {
            return props.max < props.value ? `${props.max}+` : `${props.value}`;
          }
          return `${props.value}`;
        });
        expose({
          content
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(unref(ns).b())
          }, [
            renderSlot(_ctx.$slots, "default"),
            createVNode(Transition, {
              name: `${unref(ns).namespace.value}-zoom-in-center`,
              persisted: ""
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("sup", {
                  class: normalizeClass([
                    unref(ns).e("content"),
                    unref(ns).em("content", _ctx.type),
                    unref(ns).is("fixed", !!_ctx.$slots.default),
                    unref(ns).is("dot", _ctx.isDot)
                  ]),
                  textContent: toDisplayString(unref(content))
                }, null, 10, _hoisted_1$G), [
                  [vShow, !_ctx.hidden && (unref(content) || _ctx.isDot)]
                ])
              ]),
              _: 1
            }, 8, ["name"])
          ], 2);
        };
      }
    }));
    var Badge = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["__file", "badge.vue"]]);
    const ElBadge = withInstall(Badge);
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function getDefaultExportFromCjs(x) {
      return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
    }
    const REPEAT_INTERVAL = 100;
    const REPEAT_DELAY = 600;
    const vRepeatClick = {
      beforeMount(el, binding) {
        const value = binding.value;
        const { interval = REPEAT_INTERVAL, delay = REPEAT_DELAY } = isFunction$1(value) ? {} : value;
        let intervalId;
        let delayId;
        const handler = () => isFunction$1(value) ? value() : value.handler();
        const clear2 = () => {
          if (delayId) {
            clearTimeout(delayId);
            delayId = void 0;
          }
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = void 0;
          }
        };
        el.addEventListener("mousedown", (evt) => {
          if (evt.button !== 0)
            return;
          clear2();
          handler();
          document.addEventListener("mouseup", () => clear2(), {
            once: true
          });
          delayId = setTimeout(() => {
            intervalId = setInterval(() => {
              handler();
            }, interval);
          }, delay);
        });
      }
    };
    const cardProps = buildProps({
      header: {
        type: String,
        default: ""
      },
      footer: {
        type: String,
        default: ""
      },
      bodyStyle: {
        type: definePropType([String, Object, Array]),
        default: ""
      },
      bodyClass: String,
      shadow: {
        type: String,
        values: ["always", "hover", "never"],
        default: "always"
      }
    });
    const __default__$e = /* @__PURE__ */ defineComponent({
      name: "ElCard"
    });
    const _sfc_main$x = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$e), {
      props: cardProps,
      setup(__props) {
        const ns = useNamespace("card");
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass([unref(ns).b(), unref(ns).is(`${_ctx.shadow}-shadow`)])
          }, [
            _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(ns).e("header"))
            }, [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode(toDisplayString(_ctx.header), 1)
              ])
            ], 2)) : createCommentVNode("v-if", true),
            createBaseVNode("div", {
              class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass]),
              style: normalizeStyle(_ctx.bodyStyle)
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 6),
            _ctx.$slots.footer || _ctx.footer ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(unref(ns).e("footer"))
            }, [
              renderSlot(_ctx.$slots, "footer", {}, () => [
                createTextVNode(toDisplayString(_ctx.footer), 1)
              ])
            ], 2)) : createCommentVNode("v-if", true)
          ], 2);
        };
      }
    }));
    var Card = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["__file", "card.vue"]]);
    const ElCard = withInstall(Card);
    const radioPropsBase = buildProps({
      size: useSizeProp,
      disabled: Boolean,
      label: {
        type: [String, Number, Boolean],
        default: ""
      }
    });
    const radioProps = buildProps(__spreadProps(__spreadValues({}, radioPropsBase), {
      modelValue: {
        type: [String, Number, Boolean],
        default: ""
      },
      name: {
        type: String,
        default: ""
      },
      border: Boolean
    }));
    const radioEmits = {
      [UPDATE_MODEL_EVENT]: (val) => isString$1(val) || isNumber(val) || isBoolean(val),
      [CHANGE_EVENT]: (val) => isString$1(val) || isNumber(val) || isBoolean(val)
    };
    const radioGroupKey = Symbol("radioGroupKey");
    const useRadio = (props, emit2) => {
      const radioRef = ref();
      const radioGroup = inject(radioGroupKey, void 0);
      const isGroup = computed(() => !!radioGroup);
      const modelValue = computed({
        get() {
          return isGroup.value ? radioGroup.modelValue : props.modelValue;
        },
        set(val) {
          if (isGroup.value) {
            radioGroup.changeEvent(val);
          } else {
            emit2 && emit2(UPDATE_MODEL_EVENT, val);
          }
          radioRef.value.checked = props.modelValue === props.label;
        }
      });
      const size2 = useFormSize(computed(() => radioGroup == null ? void 0 : radioGroup.size));
      const disabled = useFormDisabled(computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
      const focus = ref(false);
      const tabIndex = computed(() => {
        return disabled.value || isGroup.value && modelValue.value !== props.label ? -1 : 0;
      });
      return {
        radioRef,
        isGroup,
        radioGroup,
        focus,
        size: size2,
        disabled,
        tabIndex,
        modelValue
      };
    };
    const _hoisted_1$F = ["value", "name", "disabled"];
    const __default__$d = /* @__PURE__ */ defineComponent({
      name: "ElRadio"
    });
    const _sfc_main$w = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$d), {
      props: radioProps,
      emits: radioEmits,
      setup(__props, { emit: emit2 }) {
        const props = __props;
        const ns = useNamespace("radio");
        const { radioRef, radioGroup, focus, size: size2, disabled, modelValue } = useRadio(props, emit2);
        function handleChange() {
          nextTick$1(() => emit2("change", modelValue.value));
        }
        return (_ctx, _cache) => {
          var _a2;
          return openBlock(), createElementBlock("label", {
            class: normalizeClass([
              unref(ns).b(),
              unref(ns).is("disabled", unref(disabled)),
              unref(ns).is("focus", unref(focus)),
              unref(ns).is("bordered", _ctx.border),
              unref(ns).is("checked", unref(modelValue) === _ctx.label),
              unref(ns).m(unref(size2))
            ])
          }, [
            createBaseVNode("span", {
              class: normalizeClass([
                unref(ns).e("input"),
                unref(ns).is("disabled", unref(disabled)),
                unref(ns).is("checked", unref(modelValue) === _ctx.label)
              ])
            }, [
              withDirectives(createBaseVNode("input", {
                ref_key: "radioRef",
                ref: radioRef,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
                class: normalizeClass(unref(ns).e("original")),
                value: _ctx.label,
                name: _ctx.name || ((_a2 = unref(radioGroup)) == null ? void 0 : _a2.name),
                disabled: unref(disabled),
                type: "radio",
                onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
                onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
                onChange: handleChange,
                onClick: _cache[3] || (_cache[3] = withModifiers(() => {
                }, ["stop"]))
              }, null, 42, _hoisted_1$F), [
                [vModelRadio, unref(modelValue)]
              ]),
              createBaseVNode("span", {
                class: normalizeClass(unref(ns).e("inner"))
              }, null, 2)
            ], 2),
            createBaseVNode("span", {
              class: normalizeClass(unref(ns).e("label")),
              onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {
              }, ["stop"]))
            }, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ])
            ], 34)
          ], 2);
        };
      }
    }));
    var Radio = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["__file", "radio.vue"]]);
    const radioButtonProps = buildProps(__spreadProps(__spreadValues({}, radioPropsBase), {
      name: {
        type: String,
        default: ""
      }
    }));
    const _hoisted_1$E = ["value", "name", "disabled"];
    const __default__$c = /* @__PURE__ */ defineComponent({
      name: "ElRadioButton"
    });
    const _sfc_main$v = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$c), {
      props: radioButtonProps,
      setup(__props) {
        const props = __props;
        const ns = useNamespace("radio");
        const { radioRef, focus, size: size2, disabled, modelValue, radioGroup } = useRadio(props);
        const activeStyle = computed(() => {
          return {
            backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
            borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
            boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
            color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
          };
        });
        return (_ctx, _cache) => {
          var _a2;
          return openBlock(), createElementBlock("label", {
            class: normalizeClass([
              unref(ns).b("button"),
              unref(ns).is("active", unref(modelValue) === _ctx.label),
              unref(ns).is("disabled", unref(disabled)),
              unref(ns).is("focus", unref(focus)),
              unref(ns).bm("button", unref(size2))
            ])
          }, [
            withDirectives(createBaseVNode("input", {
              ref_key: "radioRef",
              ref: radioRef,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
              class: normalizeClass(unref(ns).be("button", "original-radio")),
              value: _ctx.label,
              type: "radio",
              name: _ctx.name || ((_a2 = unref(radioGroup)) == null ? void 0 : _a2.name),
              disabled: unref(disabled),
              onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
              onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
              onClick: _cache[3] || (_cache[3] = withModifiers(() => {
              }, ["stop"]))
            }, null, 42, _hoisted_1$E), [
              [vModelRadio, unref(modelValue)]
            ]),
            createBaseVNode("span", {
              class: normalizeClass(unref(ns).be("button", "inner")),
              style: normalizeStyle(unref(modelValue) === _ctx.label ? unref(activeStyle) : {}),
              onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {
              }, ["stop"]))
            }, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ])
            ], 38)
          ], 2);
        };
      }
    }));
    var RadioButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["__file", "radio-button.vue"]]);
    const radioGroupProps = buildProps({
      id: {
        type: String,
        default: void 0
      },
      size: useSizeProp,
      disabled: Boolean,
      modelValue: {
        type: [String, Number, Boolean],
        default: ""
      },
      fill: {
        type: String,
        default: ""
      },
      label: {
        type: String,
        default: void 0
      },
      textColor: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        default: void 0
      },
      validateEvent: {
        type: Boolean,
        default: true
      }
    });
    const radioGroupEmits = radioEmits;
    const _hoisted_1$D = ["id", "aria-label", "aria-labelledby"];
    const __default__$b = /* @__PURE__ */ defineComponent({
      name: "ElRadioGroup"
    });
    const _sfc_main$u = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$b), {
      props: radioGroupProps,
      emits: radioGroupEmits,
      setup(__props, { emit: emit2 }) {
        const props = __props;
        const ns = useNamespace("radio");
        const radioId = useId();
        const radioGroupRef = ref();
        const { formItem } = useFormItem();
        const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
          formItemContext: formItem
        });
        const changeEvent = (value) => {
          emit2(UPDATE_MODEL_EVENT, value);
          nextTick$1(() => emit2("change", value));
        };
        onMounted(() => {
          const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
          const firstLabel = radios[0];
          if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
            firstLabel.tabIndex = 0;
          }
        });
        const name2 = computed(() => {
          return props.name || radioId.value;
        });
        provide(radioGroupKey, reactive(__spreadProps(__spreadValues({}, toRefs(props)), {
          changeEvent,
          name: name2
        })));
        watch(() => props.modelValue, () => {
          if (props.validateEvent) {
            formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
          }
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            id: unref(groupId),
            ref_key: "radioGroupRef",
            ref: radioGroupRef,
            class: normalizeClass(unref(ns).b("group")),
            role: "radiogroup",
            "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || "radio-group" : void 0,
            "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 10, _hoisted_1$D);
        };
      }
    }));
    var RadioGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["__file", "radio-group.vue"]]);
    const ElRadio = withInstall(Radio, {
      RadioButton,
      RadioGroup
    });
    const ElRadioGroup = withNoopInstall(RadioGroup);
    withNoopInstall(RadioButton);
    const rowContextKey = Symbol("rowContextKey");
    const RowJustify = [
      "start",
      "center",
      "end",
      "space-around",
      "space-between",
      "space-evenly"
    ];
    const RowAlign = ["top", "middle", "bottom"];
    const rowProps = buildProps({
      tag: {
        type: String,
        default: "div"
      },
      gutter: {
        type: Number,
        default: 0
      },
      justify: {
        type: String,
        values: RowJustify,
        default: "start"
      },
      align: {
        type: String,
        values: RowAlign
      }
    });
    const __default__$a = /* @__PURE__ */ defineComponent({
      name: "ElRow"
    });
    const _sfc_main$t = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$a), {
      props: rowProps,
      setup(__props) {
        const props = __props;
        const ns = useNamespace("row");
        const gutter = computed(() => props.gutter);
        provide(rowContextKey, {
          gutter
        });
        const style2 = computed(() => {
          const styles = {};
          if (!props.gutter) {
            return styles;
          }
          styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
          return styles;
        });
        const rowKls = computed(() => [
          ns.b(),
          ns.is(`justify-${props.justify}`, props.justify !== "start"),
          ns.is(`align-${props.align}`, !!props.align)
        ]);
        return (_ctx, _cache) => {
          return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            class: normalizeClass(unref(rowKls)),
            style: normalizeStyle(unref(style2))
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["class", "style"]);
        };
      }
    }));
    var Row = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["__file", "row.vue"]]);
    const ElRow = withInstall(Row);
    const colProps = buildProps({
      tag: {
        type: String,
        default: "div"
      },
      span: {
        type: Number,
        default: 24
      },
      offset: {
        type: Number,
        default: 0
      },
      pull: {
        type: Number,
        default: 0
      },
      push: {
        type: Number,
        default: 0
      },
      xs: {
        type: definePropType([Number, Object]),
        default: () => mutable({})
      },
      sm: {
        type: definePropType([Number, Object]),
        default: () => mutable({})
      },
      md: {
        type: definePropType([Number, Object]),
        default: () => mutable({})
      },
      lg: {
        type: definePropType([Number, Object]),
        default: () => mutable({})
      },
      xl: {
        type: definePropType([Number, Object]),
        default: () => mutable({})
      }
    });
    const __default__$9 = /* @__PURE__ */ defineComponent({
      name: "ElCol"
    });
    const _sfc_main$s = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$9), {
      props: colProps,
      setup(__props) {
        const props = __props;
        const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });
        const ns = useNamespace("col");
        const style2 = computed(() => {
          const styles = {};
          if (gutter.value) {
            styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
          }
          return styles;
        });
        const colKls = computed(() => {
          const classes2 = [];
          const pos = ["span", "offset", "pull", "push"];
          pos.forEach((prop) => {
            const size2 = props[prop];
            if (isNumber(size2)) {
              if (prop === "span")
                classes2.push(ns.b(`${props[prop]}`));
              else if (size2 > 0)
                classes2.push(ns.b(`${prop}-${props[prop]}`));
            }
          });
          const sizes = ["xs", "sm", "md", "lg", "xl"];
          sizes.forEach((size2) => {
            if (isNumber(props[size2])) {
              classes2.push(ns.b(`${size2}-${props[size2]}`));
            } else if (isObject$5(props[size2])) {
              Object.entries(props[size2]).forEach(([prop, sizeProp]) => {
                classes2.push(prop !== "span" ? ns.b(`${size2}-${prop}-${sizeProp}`) : ns.b(`${size2}-${sizeProp}`));
              });
            }
          });
          if (gutter.value) {
            classes2.push(ns.is("guttered"));
          }
          return [ns.b(), classes2];
        });
        return (_ctx, _cache) => {
          return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            class: normalizeClass(unref(colKls)),
            style: normalizeStyle(unref(style2))
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["class", "style"]);
        };
      }
    }));
    var Col = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["__file", "col.vue"]]);
    const ElCol = withInstall(Col);
    const emitChangeFn = (value) => isNumber(value) || isString$1(value) || isArray$2(value);
    const collapseProps = buildProps({
      accordion: Boolean,
      modelValue: {
        type: definePropType([Array, String, Number]),
        default: () => mutable([])
      }
    });
    const collapseEmits = {
      [UPDATE_MODEL_EVENT]: emitChangeFn,
      [CHANGE_EVENT]: emitChangeFn
    };
    const collapseContextKey = Symbol("collapseContextKey");
    const useCollapse = (props, emit2) => {
      const activeNames = ref(castArray(props.modelValue));
      const setActiveNames = (_activeNames) => {
        activeNames.value = _activeNames;
        const value = props.accordion ? activeNames.value[0] : activeNames.value;
        emit2(UPDATE_MODEL_EVENT, value);
        emit2(CHANGE_EVENT, value);
      };
      const handleItemClick = (name2) => {
        if (props.accordion) {
          setActiveNames([activeNames.value[0] === name2 ? "" : name2]);
        } else {
          const _activeNames = [...activeNames.value];
          const index = _activeNames.indexOf(name2);
          if (index > -1) {
            _activeNames.splice(index, 1);
          } else {
            _activeNames.push(name2);
          }
          setActiveNames(_activeNames);
        }
      };
      watch(() => props.modelValue, () => activeNames.value = castArray(props.modelValue), { deep: true });
      provide(collapseContextKey, {
        activeNames,
        handleItemClick
      });
      return {
        activeNames,
        setActiveNames
      };
    };
    const useCollapseDOM = () => {
      const ns = useNamespace("collapse");
      const rootKls = computed(() => ns.b());
      return {
        rootKls
      };
    };
    const __default__$8 = /* @__PURE__ */ defineComponent({
      name: "ElCollapse"
    });
    const _sfc_main$r = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$8), {
      props: collapseProps,
      emits: collapseEmits,
      setup(__props, { expose, emit: emit2 }) {
        const props = __props;
        const { activeNames, setActiveNames } = useCollapse(props, emit2);
        const { rootKls } = useCollapseDOM();
        expose({
          activeNames,
          setActiveNames
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(unref(rootKls))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2);
        };
      }
    }));
    var Collapse = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["__file", "collapse.vue"]]);
    const __default__$7 = /* @__PURE__ */ defineComponent({
      name: "ElCollapseTransition"
    });
    const _sfc_main$q = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$7), {
      setup(__props) {
        const ns = useNamespace("collapse-transition");
        const reset = (el) => {
          el.style.maxHeight = "";
          el.style.overflow = el.dataset.oldOverflow;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        };
        const on2 = {
          beforeEnter(el) {
            if (!el.dataset)
              el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            if (el.style.height)
              el.dataset.elExistsHeight = el.style.height;
            el.style.maxHeight = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
          },
          enter(el) {
            requestAnimationFrame(() => {
              el.dataset.oldOverflow = el.style.overflow;
              if (el.dataset.elExistsHeight) {
                el.style.maxHeight = el.dataset.elExistsHeight;
              } else if (el.scrollHeight !== 0) {
                el.style.maxHeight = `${el.scrollHeight}px`;
              } else {
                el.style.maxHeight = 0;
              }
              el.style.paddingTop = el.dataset.oldPaddingTop;
              el.style.paddingBottom = el.dataset.oldPaddingBottom;
              el.style.overflow = "hidden";
            });
          },
          afterEnter(el) {
            el.style.maxHeight = "";
            el.style.overflow = el.dataset.oldOverflow;
          },
          enterCancelled(el) {
            reset(el);
          },
          beforeLeave(el) {
            if (!el.dataset)
              el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;
            el.style.maxHeight = `${el.scrollHeight}px`;
            el.style.overflow = "hidden";
          },
          leave(el) {
            if (el.scrollHeight !== 0) {
              el.style.maxHeight = 0;
              el.style.paddingTop = 0;
              el.style.paddingBottom = 0;
            }
          },
          afterLeave(el) {
            reset(el);
          },
          leaveCancelled(el) {
            reset(el);
          }
        };
        return (_ctx, _cache) => {
          return openBlock(), createBlock(Transition, mergeProps({
            name: unref(ns).b()
          }, toHandlers(on2)), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 16, ["name"]);
        };
      }
    }));
    var CollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["__file", "collapse-transition.vue"]]);
    CollapseTransition.install = (app2) => {
      app2.component(CollapseTransition.name, CollapseTransition);
    };
    const _CollapseTransition = CollapseTransition;
    const collapseItemProps = buildProps({
      title: {
        type: String,
        default: ""
      },
      name: {
        type: definePropType([String, Number]),
        default: void 0
      },
      disabled: Boolean
    });
    const useCollapseItem = (props) => {
      const collapse = inject(collapseContextKey);
      const { namespace } = useNamespace("collapse");
      const focusing = ref(false);
      const isClick = ref(false);
      const idInjection = useIdInjection();
      const id = computed(() => idInjection.current++);
      const name2 = computed(() => {
        var _a2;
        return (_a2 = props.name) != null ? _a2 : `${namespace.value}-id-${idInjection.prefix}-${unref(id)}`;
      });
      const isActive = computed(() => collapse == null ? void 0 : collapse.activeNames.value.includes(unref(name2)));
      const handleFocus = () => {
        setTimeout(() => {
          if (!isClick.value) {
            focusing.value = true;
          } else {
            isClick.value = false;
          }
        }, 50);
      };
      const handleHeaderClick = () => {
        if (props.disabled)
          return;
        collapse == null ? void 0 : collapse.handleItemClick(unref(name2));
        focusing.value = false;
        isClick.value = true;
      };
      const handleEnterClick = () => {
        collapse == null ? void 0 : collapse.handleItemClick(unref(name2));
      };
      return {
        focusing,
        id,
        isActive,
        handleFocus,
        handleHeaderClick,
        handleEnterClick
      };
    };
    const useCollapseItemDOM = (props, { focusing, isActive, id }) => {
      const ns = useNamespace("collapse");
      const rootKls = computed(() => [
        ns.b("item"),
        ns.is("active", unref(isActive)),
        ns.is("disabled", props.disabled)
      ]);
      const headKls = computed(() => [
        ns.be("item", "header"),
        ns.is("active", unref(isActive)),
        { focusing: unref(focusing) && !props.disabled }
      ]);
      const arrowKls = computed(() => [
        ns.be("item", "arrow"),
        ns.is("active", unref(isActive))
      ]);
      const itemWrapperKls = computed(() => ns.be("item", "wrap"));
      const itemContentKls = computed(() => ns.be("item", "content"));
      const scopedContentId = computed(() => ns.b(`content-${unref(id)}`));
      const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`));
      return {
        arrowKls,
        headKls,
        rootKls,
        itemWrapperKls,
        itemContentKls,
        scopedContentId,
        scopedHeadId
      };
    };
    const _hoisted_1$C = ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex"];
    const _hoisted_2$A = ["id", "aria-hidden", "aria-labelledby"];
    const __default__$6 = /* @__PURE__ */ defineComponent({
      name: "ElCollapseItem"
    });
    const _sfc_main$p = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$6), {
      props: collapseItemProps,
      setup(__props, { expose }) {
        const props = __props;
        const {
          focusing,
          id,
          isActive,
          handleFocus,
          handleHeaderClick,
          handleEnterClick
        } = useCollapseItem(props);
        const {
          arrowKls,
          headKls,
          rootKls,
          itemWrapperKls,
          itemContentKls,
          scopedContentId,
          scopedHeadId
        } = useCollapseItemDOM(props, { focusing, isActive, id });
        expose({
          isActive
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(unref(rootKls))
          }, [
            createBaseVNode("button", {
              id: unref(scopedHeadId),
              class: normalizeClass(unref(headKls)),
              "aria-expanded": unref(isActive),
              "aria-controls": unref(scopedContentId),
              "aria-describedby": unref(scopedContentId),
              tabindex: _ctx.disabled ? -1 : 0,
              type: "button",
              onClick: _cache[0] || (_cache[0] = (...args) => unref(handleHeaderClick) && unref(handleHeaderClick)(...args)),
              onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => unref(handleEnterClick) && unref(handleEnterClick)(...args), ["stop", "prevent"]), ["space", "enter"])),
              onFocus: _cache[2] || (_cache[2] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
              onBlur: _cache[3] || (_cache[3] = ($event) => focusing.value = false)
            }, [
              renderSlot(_ctx.$slots, "title", {}, () => [
                createTextVNode(toDisplayString(_ctx.title), 1)
              ]),
              createVNode(unref(ElIcon), {
                class: normalizeClass(unref(arrowKls))
              }, {
                default: withCtx(() => [
                  createVNode(unref(arrow_right_default))
                ]),
                _: 1
              }, 8, ["class"])
            ], 42, _hoisted_1$C),
            createVNode(unref(_CollapseTransition), null, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("div", {
                  id: unref(scopedContentId),
                  role: "region",
                  class: normalizeClass(unref(itemWrapperKls)),
                  "aria-hidden": !unref(isActive),
                  "aria-labelledby": unref(scopedHeadId)
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(unref(itemContentKls))
                  }, [
                    renderSlot(_ctx.$slots, "default")
                  ], 2)
                ], 10, _hoisted_2$A), [
                  [vShow, unref(isActive)]
                ])
              ]),
              _: 3
            })
          ], 2);
        };
      }
    }));
    var CollapseItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["__file", "collapse-item.vue"]]);
    const ElCollapse = withInstall(Collapse, {
      CollapseItem
    });
    const ElCollapseItem = withNoopInstall(CollapseItem);
    const inputNumberProps = buildProps({
      id: {
        type: String,
        default: void 0
      },
      step: {
        type: Number,
        default: 1
      },
      stepStrictly: Boolean,
      max: {
        type: Number,
        default: Number.POSITIVE_INFINITY
      },
      min: {
        type: Number,
        default: Number.NEGATIVE_INFINITY
      },
      modelValue: Number,
      readonly: Boolean,
      disabled: Boolean,
      size: useSizeProp,
      controls: {
        type: Boolean,
        default: true
      },
      controlsPosition: {
        type: String,
        default: "",
        values: ["", "right"]
      },
      valueOnClear: {
        type: [String, Number, null],
        validator: (val) => val === null || isNumber(val) || ["min", "max"].includes(val),
        default: null
      },
      name: String,
      label: String,
      placeholder: String,
      precision: {
        type: Number,
        validator: (val) => val >= 0 && val === Number.parseInt(`${val}`, 10)
      },
      validateEvent: {
        type: Boolean,
        default: true
      }
    });
    const inputNumberEmits = {
      [CHANGE_EVENT]: (cur, prev) => prev !== cur,
      blur: (e) => e instanceof FocusEvent,
      focus: (e) => e instanceof FocusEvent,
      [INPUT_EVENT]: (val) => isNumber(val) || isNil(val),
      [UPDATE_MODEL_EVENT]: (val) => isNumber(val) || isNil(val)
    };
    const _hoisted_1$B = ["aria-label", "onKeydown"];
    const _hoisted_2$z = ["aria-label", "onKeydown"];
    const __default__$5 = /* @__PURE__ */ defineComponent({
      name: "ElInputNumber"
    });
    const _sfc_main$o = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$5), {
      props: inputNumberProps,
      emits: inputNumberEmits,
      setup(__props, { expose, emit: emit2 }) {
        const props = __props;
        const { t } = useLocale();
        const ns = useNamespace("input-number");
        const input = ref();
        const data = reactive({
          currentValue: props.modelValue,
          userInput: null
        });
        const { formItem } = useFormItem();
        const minDisabled = computed(() => isNumber(props.modelValue) && props.modelValue <= props.min);
        const maxDisabled = computed(() => isNumber(props.modelValue) && props.modelValue >= props.max);
        const numPrecision = computed(() => {
          const stepPrecision = getPrecision(props.step);
          if (!isUndefined(props.precision)) {
            if (stepPrecision > props.precision)
              ;
            return props.precision;
          } else {
            return Math.max(getPrecision(props.modelValue), stepPrecision);
          }
        });
        const controlsAtRight = computed(() => {
          return props.controls && props.controlsPosition === "right";
        });
        const inputNumberSize = useFormSize();
        const inputNumberDisabled = useFormDisabled();
        const displayValue = computed(() => {
          if (data.userInput !== null) {
            return data.userInput;
          }
          let currentValue = data.currentValue;
          if (isNil(currentValue))
            return "";
          if (isNumber(currentValue)) {
            if (Number.isNaN(currentValue))
              return "";
            if (!isUndefined(props.precision)) {
              currentValue = currentValue.toFixed(props.precision);
            }
          }
          return currentValue;
        });
        const toPrecision = (num, pre) => {
          if (isUndefined(pre))
            pre = numPrecision.value;
          if (pre === 0)
            return Math.round(num);
          let snum = String(num);
          const pointPos = snum.indexOf(".");
          if (pointPos === -1)
            return num;
          const nums = snum.replace(".", "").split("");
          const datum = nums[pointPos + pre];
          if (!datum)
            return num;
          const length = snum.length;
          if (snum.charAt(length - 1) === "5") {
            snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
          }
          return Number.parseFloat(Number(snum).toFixed(pre));
        };
        const getPrecision = (value) => {
          if (isNil(value))
            return 0;
          const valueString = value.toString();
          const dotPosition = valueString.indexOf(".");
          let precision = 0;
          if (dotPosition !== -1) {
            precision = valueString.length - dotPosition - 1;
          }
          return precision;
        };
        const ensurePrecision = (val, coefficient = 1) => {
          if (!isNumber(val))
            return data.currentValue;
          return toPrecision(val + props.step * coefficient);
        };
        const increase = () => {
          if (props.readonly || inputNumberDisabled.value || maxDisabled.value)
            return;
          const value = Number(displayValue.value) || 0;
          const newVal = ensurePrecision(value);
          setCurrentValue(newVal);
          emit2(INPUT_EVENT, data.currentValue);
          setCurrentValueToModelValue();
        };
        const decrease = () => {
          if (props.readonly || inputNumberDisabled.value || minDisabled.value)
            return;
          const value = Number(displayValue.value) || 0;
          const newVal = ensurePrecision(value, -1);
          setCurrentValue(newVal);
          emit2(INPUT_EVENT, data.currentValue);
          setCurrentValueToModelValue();
        };
        const verifyValue = (value, update2) => {
          const { max, min, step, precision, stepStrictly, valueOnClear } = props;
          if (max < min) {
            throwError("InputNumber", "min should not be greater than max.");
          }
          let newVal = Number(value);
          if (isNil(value) || Number.isNaN(newVal)) {
            return null;
          }
          if (value === "") {
            if (valueOnClear === null) {
              return null;
            }
            newVal = isString$1(valueOnClear) ? { min, max }[valueOnClear] : valueOnClear;
          }
          if (stepStrictly) {
            newVal = toPrecision(Math.round(newVal / step) * step, precision);
          }
          if (!isUndefined(precision)) {
            newVal = toPrecision(newVal, precision);
          }
          if (newVal > max || newVal < min) {
            newVal = newVal > max ? max : min;
            update2 && emit2(UPDATE_MODEL_EVENT, newVal);
          }
          return newVal;
        };
        const setCurrentValue = (value, emitChange = true) => {
          var _a2;
          const oldVal = data.currentValue;
          const newVal = verifyValue(value);
          if (!emitChange) {
            emit2(UPDATE_MODEL_EVENT, newVal);
            return;
          }
          if (oldVal === newVal)
            return;
          data.userInput = null;
          emit2(UPDATE_MODEL_EVENT, newVal);
          emit2(CHANGE_EVENT, newVal, oldVal);
          if (props.validateEvent) {
            (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "change").catch((err) => debugWarn());
          }
          data.currentValue = newVal;
        };
        const handleInput = (value) => {
          data.userInput = value;
          const newVal = value === "" ? null : Number(value);
          emit2(INPUT_EVENT, newVal);
          setCurrentValue(newVal, false);
        };
        const handleInputChange = (value) => {
          const newVal = value !== "" ? Number(value) : "";
          if (isNumber(newVal) && !Number.isNaN(newVal) || value === "") {
            setCurrentValue(newVal);
          }
          setCurrentValueToModelValue();
          data.userInput = null;
        };
        const focus = () => {
          var _a2, _b;
          (_b = (_a2 = input.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
        };
        const blur = () => {
          var _a2, _b;
          (_b = (_a2 = input.value) == null ? void 0 : _a2.blur) == null ? void 0 : _b.call(_a2);
        };
        const handleFocus = (event2) => {
          emit2("focus", event2);
        };
        const handleBlur = (event2) => {
          var _a2;
          data.userInput = null;
          emit2("blur", event2);
          if (props.validateEvent) {
            (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "blur").catch((err) => debugWarn());
          }
        };
        const setCurrentValueToModelValue = () => {
          if (data.currentValue !== props.modelValue) {
            data.currentValue = props.modelValue;
          }
        };
        const handleWheel = (e) => {
          if (document.activeElement === e.target)
            e.preventDefault();
        };
        watch(() => props.modelValue, (value, oldValue) => {
          const newValue = verifyValue(value, true);
          if (data.userInput === null && newValue !== oldValue) {
            data.currentValue = newValue;
          }
        }, { immediate: true });
        onMounted(() => {
          var _a2;
          const { min, max, modelValue } = props;
          const innerInput = (_a2 = input.value) == null ? void 0 : _a2.input;
          innerInput.setAttribute("role", "spinbutton");
          if (Number.isFinite(max)) {
            innerInput.setAttribute("aria-valuemax", String(max));
          } else {
            innerInput.removeAttribute("aria-valuemax");
          }
          if (Number.isFinite(min)) {
            innerInput.setAttribute("aria-valuemin", String(min));
          } else {
            innerInput.removeAttribute("aria-valuemin");
          }
          innerInput.setAttribute("aria-valuenow", data.currentValue || data.currentValue === 0 ? String(data.currentValue) : "");
          innerInput.setAttribute("aria-disabled", String(inputNumberDisabled.value));
          if (!isNumber(modelValue) && modelValue != null) {
            let val = Number(modelValue);
            if (Number.isNaN(val)) {
              val = null;
            }
            emit2(UPDATE_MODEL_EVENT, val);
          }
        });
        onUpdated(() => {
          var _a2, _b;
          const innerInput = (_a2 = input.value) == null ? void 0 : _a2.input;
          innerInput == null ? void 0 : innerInput.setAttribute("aria-valuenow", `${(_b = data.currentValue) != null ? _b : ""}`);
        });
        expose({
          focus,
          blur
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass([
              unref(ns).b(),
              unref(ns).m(unref(inputNumberSize)),
              unref(ns).is("disabled", unref(inputNumberDisabled)),
              unref(ns).is("without-controls", !_ctx.controls),
              unref(ns).is("controls-right", unref(controlsAtRight))
            ]),
            onDragstart: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["prevent"]))
          }, [
            _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
              key: 0,
              role: "button",
              "aria-label": unref(t)("el.inputNumber.decrease"),
              class: normalizeClass([unref(ns).e("decrease"), unref(ns).is("disabled", unref(minDisabled))]),
              onKeydown: withKeys(decrease, ["enter"])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  unref(controlsAtRight) ? (openBlock(), createBlock(unref(arrow_down_default), { key: 0 })) : (openBlock(), createBlock(unref(minus_default), { key: 1 }))
                ]),
                _: 1
              })
            ], 42, _hoisted_1$B)), [
              [unref(vRepeatClick), decrease]
            ]) : createCommentVNode("v-if", true),
            _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
              key: 1,
              role: "button",
              "aria-label": unref(t)("el.inputNumber.increase"),
              class: normalizeClass([unref(ns).e("increase"), unref(ns).is("disabled", unref(maxDisabled))]),
              onKeydown: withKeys(increase, ["enter"])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  unref(controlsAtRight) ? (openBlock(), createBlock(unref(arrow_up_default), { key: 0 })) : (openBlock(), createBlock(unref(plus_default), { key: 1 }))
                ]),
                _: 1
              })
            ], 42, _hoisted_2$z)), [
              [unref(vRepeatClick), increase]
            ]) : createCommentVNode("v-if", true),
            createVNode(unref(ElInput), {
              id: _ctx.id,
              ref_key: "input",
              ref: input,
              type: "number",
              step: _ctx.step,
              "model-value": unref(displayValue),
              placeholder: _ctx.placeholder,
              readonly: _ctx.readonly,
              disabled: unref(inputNumberDisabled),
              size: unref(inputNumberSize),
              max: _ctx.max,
              min: _ctx.min,
              name: _ctx.name,
              label: _ctx.label,
              "validate-event": false,
              onWheel: handleWheel,
              onKeydown: [
                withKeys(withModifiers(increase, ["prevent"]), ["up"]),
                withKeys(withModifiers(decrease, ["prevent"]), ["down"])
              ],
              onBlur: handleBlur,
              onFocus: handleFocus,
              onInput: handleInput,
              onChange: handleInputChange
            }, null, 8, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "label", "onKeydown"])
          ], 34);
        };
      }
    }));
    var InputNumber = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["__file", "input-number.vue"]]);
    const ElInputNumber = withInstall(InputNumber);
    const progressProps = buildProps({
      type: {
        type: String,
        default: "line",
        values: ["line", "circle", "dashboard"]
      },
      percentage: {
        type: Number,
        default: 0,
        validator: (val) => val >= 0 && val <= 100
      },
      status: {
        type: String,
        default: "",
        values: ["", "success", "exception", "warning"]
      },
      indeterminate: {
        type: Boolean,
        default: false
      },
      duration: {
        type: Number,
        default: 3
      },
      strokeWidth: {
        type: Number,
        default: 6
      },
      strokeLinecap: {
        type: definePropType(String),
        default: "round"
      },
      textInside: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 126
      },
      showText: {
        type: Boolean,
        default: true
      },
      color: {
        type: definePropType([
          String,
          Array,
          Function
        ]),
        default: ""
      },
      striped: Boolean,
      stripedFlow: Boolean,
      format: {
        type: definePropType(Function),
        default: (percentage) => `${percentage}%`
      }
    });
    const _hoisted_1$A = ["aria-valuenow"];
    const _hoisted_2$y = { viewBox: "0 0 100 100" };
    const _hoisted_3$u = ["d", "stroke", "stroke-linecap", "stroke-width"];
    const _hoisted_4$d = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"];
    const _hoisted_5$d = { key: 0 };
    const __default__$4 = /* @__PURE__ */ defineComponent({
      name: "ElProgress"
    });
    const _sfc_main$n = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$4), {
      props: progressProps,
      setup(__props) {
        const props = __props;
        const STATUS_COLOR_MAP = {
          success: "#13ce66",
          exception: "#ff4949",
          warning: "#e6a23c",
          default: "#20a0ff"
        };
        const ns = useNamespace("progress");
        const barStyle = computed(() => ({
          width: `${props.percentage}%`,
          animationDuration: `${props.duration}s`,
          backgroundColor: getCurrentColor(props.percentage)
        }));
        const relativeStrokeWidth = computed(() => (props.strokeWidth / props.width * 100).toFixed(1));
        const radius = computed(() => {
          if (["circle", "dashboard"].includes(props.type)) {
            return Number.parseInt(`${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`, 10);
          }
          return 0;
        });
        const trackPath = computed(() => {
          const r = radius.value;
          const isDashboard = props.type === "dashboard";
          return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
        });
        const perimeter = computed(() => 2 * Math.PI * radius.value);
        const rate = computed(() => props.type === "dashboard" ? 0.75 : 1);
        const strokeDashoffset = computed(() => {
          const offset = -1 * perimeter.value * (1 - rate.value) / 2;
          return `${offset}px`;
        });
        const trailPathStyle = computed(() => ({
          strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
          strokeDashoffset: strokeDashoffset.value
        }));
        const circlePathStyle = computed(() => ({
          strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
          strokeDashoffset: strokeDashoffset.value,
          transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
        }));
        const stroke = computed(() => {
          let ret;
          if (props.color) {
            ret = getCurrentColor(props.percentage);
          } else {
            ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
          }
          return ret;
        });
        const statusIcon = computed(() => {
          if (props.status === "warning") {
            return warning_filled_default;
          }
          if (props.type === "line") {
            return props.status === "success" ? circle_check_default : circle_close_default;
          } else {
            return props.status === "success" ? check_default : close_default;
          }
        });
        const progressTextSize = computed(() => {
          return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
        });
        const content = computed(() => props.format(props.percentage));
        function getColors(color) {
          const span = 100 / color.length;
          const seriesColors = color.map((seriesColor, index) => {
            if (isString$1(seriesColor)) {
              return {
                color: seriesColor,
                percentage: (index + 1) * span
              };
            }
            return seriesColor;
          });
          return seriesColors.sort((a, b) => a.percentage - b.percentage);
        }
        const getCurrentColor = (percentage) => {
          var _a2;
          const { color } = props;
          if (isFunction$1(color)) {
            return color(percentage);
          } else if (isString$1(color)) {
            return color;
          } else {
            const colors = getColors(color);
            for (const color2 of colors) {
              if (color2.percentage > percentage)
                return color2.color;
            }
            return (_a2 = colors[colors.length - 1]) == null ? void 0 : _a2.color;
          }
        };
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass([
              unref(ns).b(),
              unref(ns).m(_ctx.type),
              unref(ns).is(_ctx.status),
              {
                [unref(ns).m("without-text")]: !_ctx.showText,
                [unref(ns).m("text-inside")]: _ctx.textInside
              }
            ]),
            role: "progressbar",
            "aria-valuenow": _ctx.percentage,
            "aria-valuemin": "0",
            "aria-valuemax": "100"
          }, [
            _ctx.type === "line" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(ns).b("bar"))
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(ns).be("bar", "outer")),
                style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
              }, [
                createBaseVNode("div", {
                  class: normalizeClass([
                    unref(ns).be("bar", "inner"),
                    { [unref(ns).bem("bar", "inner", "indeterminate")]: _ctx.indeterminate },
                    { [unref(ns).bem("bar", "inner", "striped")]: _ctx.striped },
                    { [unref(ns).bem("bar", "inner", "striped-flow")]: _ctx.stripedFlow }
                  ]),
                  style: normalizeStyle(unref(barStyle))
                }, [
                  (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(unref(ns).be("bar", "innerText"))
                  }, [
                    renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
                      createBaseVNode("span", null, toDisplayString(unref(content)), 1)
                    ])
                  ], 2)) : createCommentVNode("v-if", true)
                ], 6)
              ], 6)
            ], 2)) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(unref(ns).b("circle")),
              style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
            }, [
              (openBlock(), createElementBlock("svg", _hoisted_2$y, [
                createBaseVNode("path", {
                  class: normalizeClass(unref(ns).be("circle", "track")),
                  d: unref(trackPath),
                  stroke: `var(${unref(ns).cssVarName("fill-color-light")}, #e5e9f2)`,
                  "stroke-linecap": _ctx.strokeLinecap,
                  "stroke-width": unref(relativeStrokeWidth),
                  fill: "none",
                  style: normalizeStyle(unref(trailPathStyle))
                }, null, 14, _hoisted_3$u),
                createBaseVNode("path", {
                  class: normalizeClass(unref(ns).be("circle", "path")),
                  d: unref(trackPath),
                  stroke: unref(stroke),
                  fill: "none",
                  opacity: _ctx.percentage ? 1 : 0,
                  "stroke-linecap": _ctx.strokeLinecap,
                  "stroke-width": unref(relativeStrokeWidth),
                  style: normalizeStyle(unref(circlePathStyle))
                }, null, 14, _hoisted_4$d)
              ]))
            ], 6)),
            (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(unref(ns).e("text")),
              style: normalizeStyle({ fontSize: `${unref(progressTextSize)}px` })
            }, [
              renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
                !_ctx.status ? (openBlock(), createElementBlock("span", _hoisted_5$d, toDisplayString(unref(content)), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(statusIcon))))
                  ]),
                  _: 1
                }))
              ])
            ], 6)) : createCommentVNode("v-if", true)
          ], 10, _hoisted_1$A);
        };
      }
    }));
    var Progress = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["__file", "progress.vue"]]);
    const ElProgress = withInstall(Progress);
    const sliderContextKey = Symbol("sliderContextKey");
    const sliderProps = buildProps({
      modelValue: {
        type: definePropType([Number, Array]),
        default: 0
      },
      id: {
        type: String,
        default: void 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      showInput: Boolean,
      showInputControls: {
        type: Boolean,
        default: true
      },
      size: useSizeProp,
      inputSize: useSizeProp,
      showStops: Boolean,
      showTooltip: {
        type: Boolean,
        default: true
      },
      formatTooltip: {
        type: definePropType(Function),
        default: void 0
      },
      disabled: Boolean,
      range: Boolean,
      vertical: Boolean,
      height: String,
      debounce: {
        type: Number,
        default: 300
      },
      label: {
        type: String,
        default: void 0
      },
      rangeStartLabel: {
        type: String,
        default: void 0
      },
      rangeEndLabel: {
        type: String,
        default: void 0
      },
      formatValueText: {
        type: definePropType(Function),
        default: void 0
      },
      tooltipClass: {
        type: String,
        default: void 0
      },
      placement: {
        type: String,
        values: Ee$1,
        default: "top"
      },
      marks: {
        type: definePropType(Object)
      },
      validateEvent: {
        type: Boolean,
        default: true
      }
    });
    const isValidValue = (value) => isNumber(value) || isArray$2(value) && value.every(isNumber);
    const sliderEmits = {
      [UPDATE_MODEL_EVENT]: isValidValue,
      [INPUT_EVENT]: isValidValue,
      [CHANGE_EVENT]: isValidValue
    };
    const useLifecycle = (props, initData, resetSize) => {
      const sliderWrapper = ref();
      onMounted(() => __async(exports, null, function* () {
        if (props.range) {
          if (Array.isArray(props.modelValue)) {
            initData.firstValue = Math.max(props.min, props.modelValue[0]);
            initData.secondValue = Math.min(props.max, props.modelValue[1]);
          } else {
            initData.firstValue = props.min;
            initData.secondValue = props.max;
          }
          initData.oldValue = [initData.firstValue, initData.secondValue];
        } else {
          if (typeof props.modelValue !== "number" || Number.isNaN(props.modelValue)) {
            initData.firstValue = props.min;
          } else {
            initData.firstValue = Math.min(props.max, Math.max(props.min, props.modelValue));
          }
          initData.oldValue = initData.firstValue;
        }
        useEventListener(window, "resize", resetSize);
        yield nextTick$1();
        resetSize();
      }));
      return {
        sliderWrapper
      };
    };
    const useMarks = (props) => {
      return computed(() => {
        if (!props.marks) {
          return [];
        }
        const marksKeys = Object.keys(props.marks);
        return marksKeys.map(Number.parseFloat).sort((a, b) => a - b).filter((point) => point <= props.max && point >= props.min).map((point) => ({
          point,
          position: (point - props.min) * 100 / (props.max - props.min),
          mark: props.marks[point]
        }));
      });
    };
    const useSlide = (props, initData, emit2) => {
      const { form: elForm, formItem: elFormItem } = useFormItem();
      const slider = shallowRef();
      const firstButton = ref();
      const secondButton = ref();
      const buttonRefs = {
        firstButton,
        secondButton
      };
      const sliderDisabled = computed(() => {
        return props.disabled || (elForm == null ? void 0 : elForm.disabled) || false;
      });
      const minValue = computed(() => {
        return Math.min(initData.firstValue, initData.secondValue);
      });
      const maxValue = computed(() => {
        return Math.max(initData.firstValue, initData.secondValue);
      });
      const barSize = computed(() => {
        return props.range ? `${100 * (maxValue.value - minValue.value) / (props.max - props.min)}%` : `${100 * (initData.firstValue - props.min) / (props.max - props.min)}%`;
      });
      const barStart = computed(() => {
        return props.range ? `${100 * (minValue.value - props.min) / (props.max - props.min)}%` : "0%";
      });
      const runwayStyle = computed(() => {
        return props.vertical ? { height: props.height } : {};
      });
      const barStyle = computed(() => {
        return props.vertical ? {
          height: barSize.value,
          bottom: barStart.value
        } : {
          width: barSize.value,
          left: barStart.value
        };
      });
      const resetSize = () => {
        if (slider.value) {
          initData.sliderSize = slider.value[`client${props.vertical ? "Height" : "Width"}`];
        }
      };
      const getButtonRefByPercent = (percent) => {
        const targetValue = props.min + percent * (props.max - props.min) / 100;
        if (!props.range) {
          return firstButton;
        }
        let buttonRefName;
        if (Math.abs(minValue.value - targetValue) < Math.abs(maxValue.value - targetValue)) {
          buttonRefName = initData.firstValue < initData.secondValue ? "firstButton" : "secondButton";
        } else {
          buttonRefName = initData.firstValue > initData.secondValue ? "firstButton" : "secondButton";
        }
        return buttonRefs[buttonRefName];
      };
      const setPosition = (percent) => {
        const buttonRef = getButtonRefByPercent(percent);
        buttonRef.value.setPosition(percent);
        return buttonRef;
      };
      const setFirstValue = (firstValue) => {
        initData.firstValue = firstValue;
        _emit(props.range ? [minValue.value, maxValue.value] : firstValue);
      };
      const setSecondValue = (secondValue) => {
        initData.secondValue = secondValue;
        if (props.range) {
          _emit([minValue.value, maxValue.value]);
        }
      };
      const _emit = (val) => {
        emit2(UPDATE_MODEL_EVENT, val);
        emit2(INPUT_EVENT, val);
      };
      const emitChange = () => __async(exports, null, function* () {
        yield nextTick$1();
        emit2(CHANGE_EVENT, props.range ? [minValue.value, maxValue.value] : props.modelValue);
      });
      const handleSliderPointerEvent = (event2) => {
        var _a2, _b, _c2, _d, _e2, _f;
        if (sliderDisabled.value || initData.dragging)
          return;
        resetSize();
        let newPercent = 0;
        if (props.vertical) {
          const clientY = (_c2 = (_b = (_a2 = event2.touches) == null ? void 0 : _a2.item(0)) == null ? void 0 : _b.clientY) != null ? _c2 : event2.clientY;
          const sliderOffsetBottom = slider.value.getBoundingClientRect().bottom;
          newPercent = (sliderOffsetBottom - clientY) / initData.sliderSize * 100;
        } else {
          const clientX = (_f = (_e2 = (_d = event2.touches) == null ? void 0 : _d.item(0)) == null ? void 0 : _e2.clientX) != null ? _f : event2.clientX;
          const sliderOffsetLeft = slider.value.getBoundingClientRect().left;
          newPercent = (clientX - sliderOffsetLeft) / initData.sliderSize * 100;
        }
        if (newPercent < 0 || newPercent > 100)
          return;
        return setPosition(newPercent);
      };
      const onSliderWrapperPrevent = (event2) => {
        var _a2, _b;
        if (((_a2 = buttonRefs["firstButton"].value) == null ? void 0 : _a2.dragging) || ((_b = buttonRefs["secondButton"].value) == null ? void 0 : _b.dragging)) {
          event2.preventDefault();
        }
      };
      const onSliderDown = (event2) => __async(exports, null, function* () {
        const buttonRef = handleSliderPointerEvent(event2);
        if (buttonRef) {
          yield nextTick$1();
          buttonRef.value.onButtonDown(event2);
        }
      });
      const onSliderClick = (event2) => {
        const buttonRef = handleSliderPointerEvent(event2);
        if (buttonRef) {
          emitChange();
        }
      };
      return {
        elFormItem,
        slider,
        firstButton,
        secondButton,
        sliderDisabled,
        minValue,
        maxValue,
        runwayStyle,
        barStyle,
        resetSize,
        setPosition,
        emitChange,
        onSliderWrapperPrevent,
        onSliderClick,
        onSliderDown,
        setFirstValue,
        setSecondValue
      };
    };
    const { left, down, right, up, home: home$1, end, pageUp, pageDown } = EVENT_CODE;
    const useTooltip = (props, formatTooltip, showTooltip) => {
      const tooltip = ref();
      const tooltipVisible = ref(false);
      const enableFormat = computed(() => {
        return formatTooltip.value instanceof Function;
      });
      const formatValue = computed(() => {
        return enableFormat.value && formatTooltip.value(props.modelValue) || props.modelValue;
      });
      const displayTooltip = debounce$1(() => {
        showTooltip.value && (tooltipVisible.value = true);
      }, 50);
      const hideTooltip = debounce$1(() => {
        showTooltip.value && (tooltipVisible.value = false);
      }, 50);
      return {
        tooltip,
        tooltipVisible,
        formatValue,
        displayTooltip,
        hideTooltip
      };
    };
    const useSliderButton = (props, initData, emit2) => {
      const {
        disabled,
        min,
        max,
        step,
        showTooltip,
        precision,
        sliderSize,
        formatTooltip,
        emitChange,
        resetSize,
        updateDragging
      } = inject(sliderContextKey);
      const { tooltip, tooltipVisible, formatValue, displayTooltip, hideTooltip } = useTooltip(props, formatTooltip, showTooltip);
      const button = ref();
      const currentPosition = computed(() => {
        return `${(props.modelValue - min.value) / (max.value - min.value) * 100}%`;
      });
      const wrapperStyle = computed(() => {
        return props.vertical ? { bottom: currentPosition.value } : { left: currentPosition.value };
      });
      const handleMouseEnter = () => {
        initData.hovering = true;
        displayTooltip();
      };
      const handleMouseLeave = () => {
        initData.hovering = false;
        if (!initData.dragging) {
          hideTooltip();
        }
      };
      const onButtonDown = (event2) => {
        if (disabled.value)
          return;
        event2.preventDefault();
        onDragStart(event2);
        window.addEventListener("mousemove", onDragging);
        window.addEventListener("touchmove", onDragging);
        window.addEventListener("mouseup", onDragEnd);
        window.addEventListener("touchend", onDragEnd);
        window.addEventListener("contextmenu", onDragEnd);
        button.value.focus();
      };
      const incrementPosition = (amount) => {
        if (disabled.value)
          return;
        initData.newPosition = Number.parseFloat(currentPosition.value) + amount / (max.value - min.value) * 100;
        setPosition(initData.newPosition);
        emitChange();
      };
      const onLeftKeyDown = () => {
        incrementPosition(-step.value);
      };
      const onRightKeyDown = () => {
        incrementPosition(step.value);
      };
      const onPageDownKeyDown = () => {
        incrementPosition(-step.value * 4);
      };
      const onPageUpKeyDown = () => {
        incrementPosition(step.value * 4);
      };
      const onHomeKeyDown = () => {
        if (disabled.value)
          return;
        setPosition(0);
        emitChange();
      };
      const onEndKeyDown = () => {
        if (disabled.value)
          return;
        setPosition(100);
        emitChange();
      };
      const onKeyDown = (event2) => {
        let isPreventDefault = true;
        if ([left, down].includes(event2.key)) {
          onLeftKeyDown();
        } else if ([right, up].includes(event2.key)) {
          onRightKeyDown();
        } else if (event2.key === home$1) {
          onHomeKeyDown();
        } else if (event2.key === end) {
          onEndKeyDown();
        } else if (event2.key === pageDown) {
          onPageDownKeyDown();
        } else if (event2.key === pageUp) {
          onPageUpKeyDown();
        } else {
          isPreventDefault = false;
        }
        isPreventDefault && event2.preventDefault();
      };
      const getClientXY = (event2) => {
        let clientX;
        let clientY;
        if (event2.type.startsWith("touch")) {
          clientY = event2.touches[0].clientY;
          clientX = event2.touches[0].clientX;
        } else {
          clientY = event2.clientY;
          clientX = event2.clientX;
        }
        return {
          clientX,
          clientY
        };
      };
      const onDragStart = (event2) => {
        initData.dragging = true;
        initData.isClick = true;
        const { clientX, clientY } = getClientXY(event2);
        if (props.vertical) {
          initData.startY = clientY;
        } else {
          initData.startX = clientX;
        }
        initData.startPosition = Number.parseFloat(currentPosition.value);
        initData.newPosition = initData.startPosition;
      };
      const onDragging = (event2) => {
        if (initData.dragging) {
          initData.isClick = false;
          displayTooltip();
          resetSize();
          let diff;
          const { clientX, clientY } = getClientXY(event2);
          if (props.vertical) {
            initData.currentY = clientY;
            diff = (initData.startY - initData.currentY) / sliderSize.value * 100;
          } else {
            initData.currentX = clientX;
            diff = (initData.currentX - initData.startX) / sliderSize.value * 100;
          }
          initData.newPosition = initData.startPosition + diff;
          setPosition(initData.newPosition);
        }
      };
      const onDragEnd = () => {
        if (initData.dragging) {
          setTimeout(() => {
            initData.dragging = false;
            if (!initData.hovering) {
              hideTooltip();
            }
            if (!initData.isClick) {
              setPosition(initData.newPosition);
            }
            emitChange();
          }, 0);
          window.removeEventListener("mousemove", onDragging);
          window.removeEventListener("touchmove", onDragging);
          window.removeEventListener("mouseup", onDragEnd);
          window.removeEventListener("touchend", onDragEnd);
          window.removeEventListener("contextmenu", onDragEnd);
        }
      };
      const setPosition = (newPosition) => __async(exports, null, function* () {
        if (newPosition === null || Number.isNaN(+newPosition))
          return;
        if (newPosition < 0) {
          newPosition = 0;
        } else if (newPosition > 100) {
          newPosition = 100;
        }
        const lengthPerStep = 100 / ((max.value - min.value) / step.value);
        const steps = Math.round(newPosition / lengthPerStep);
        let value = steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value;
        value = Number.parseFloat(value.toFixed(precision.value));
        if (value !== props.modelValue) {
          emit2(UPDATE_MODEL_EVENT, value);
        }
        if (!initData.dragging && props.modelValue !== initData.oldValue) {
          initData.oldValue = props.modelValue;
        }
        yield nextTick$1();
        initData.dragging && displayTooltip();
        tooltip.value.updatePopper();
      });
      watch(() => initData.dragging, (val) => {
        updateDragging(val);
      });
      return {
        disabled,
        button,
        tooltip,
        tooltipVisible,
        showTooltip,
        wrapperStyle,
        formatValue,
        handleMouseEnter,
        handleMouseLeave,
        onButtonDown,
        onKeyDown,
        setPosition
      };
    };
    const useStops = (props, initData, minValue, maxValue) => {
      const stops = computed(() => {
        if (!props.showStops || props.min > props.max)
          return [];
        if (props.step === 0) {
          return [];
        }
        const stopCount = (props.max - props.min) / props.step;
        const stepWidth = 100 * props.step / (props.max - props.min);
        const result = Array.from({ length: stopCount - 1 }).map((_, index) => (index + 1) * stepWidth);
        if (props.range) {
          return result.filter((step) => {
            return step < 100 * (minValue.value - props.min) / (props.max - props.min) || step > 100 * (maxValue.value - props.min) / (props.max - props.min);
          });
        } else {
          return result.filter((step) => step > 100 * (initData.firstValue - props.min) / (props.max - props.min));
        }
      });
      const getStopStyle = (position) => {
        return props.vertical ? { bottom: `${position}%` } : { left: `${position}%` };
      };
      return {
        stops,
        getStopStyle
      };
    };
    const useWatch = (props, initData, minValue, maxValue, emit2, elFormItem) => {
      const _emit = (val) => {
        emit2(UPDATE_MODEL_EVENT, val);
        emit2(INPUT_EVENT, val);
      };
      const valueChanged = () => {
        if (props.range) {
          return ![minValue.value, maxValue.value].every((item, index) => item === initData.oldValue[index]);
        } else {
          return props.modelValue !== initData.oldValue;
        }
      };
      const setValues = () => {
        var _a2, _b;
        if (props.min > props.max) {
          throwError("Slider", "min should not be greater than max.");
        }
        const val = props.modelValue;
        if (props.range && Array.isArray(val)) {
          if (val[1] < props.min) {
            _emit([props.min, props.min]);
          } else if (val[0] > props.max) {
            _emit([props.max, props.max]);
          } else if (val[0] < props.min) {
            _emit([props.min, val[1]]);
          } else if (val[1] > props.max) {
            _emit([val[0], props.max]);
          } else {
            initData.firstValue = val[0];
            initData.secondValue = val[1];
            if (valueChanged()) {
              if (props.validateEvent) {
                (_a2 = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "change").catch((err) => debugWarn());
              }
              initData.oldValue = val.slice();
            }
          }
        } else if (!props.range && typeof val === "number" && !Number.isNaN(val)) {
          if (val < props.min) {
            _emit(props.min);
          } else if (val > props.max) {
            _emit(props.max);
          } else {
            initData.firstValue = val;
            if (valueChanged()) {
              if (props.validateEvent) {
                (_b = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _b.call(elFormItem, "change").catch((err) => debugWarn());
              }
              initData.oldValue = val;
            }
          }
        }
      };
      setValues();
      watch(() => initData.dragging, (val) => {
        if (!val) {
          setValues();
        }
      });
      watch(() => props.modelValue, (val, oldVal) => {
        if (initData.dragging || Array.isArray(val) && Array.isArray(oldVal) && val.every((item, index) => item === oldVal[index]) && initData.firstValue === val[0] && initData.secondValue === val[1]) {
          return;
        }
        setValues();
      }, {
        deep: true
      });
      watch(() => [props.min, props.max], () => {
        setValues();
      });
    };
    const sliderButtonProps = buildProps({
      modelValue: {
        type: Number,
        default: 0
      },
      vertical: Boolean,
      tooltipClass: String,
      placement: {
        type: String,
        values: Ee$1,
        default: "top"
      }
    });
    const sliderButtonEmits = {
      [UPDATE_MODEL_EVENT]: (value) => isNumber(value)
    };
    const _hoisted_1$z = ["tabindex"];
    const __default__$3 = /* @__PURE__ */ defineComponent({
      name: "ElSliderButton"
    });
    const _sfc_main$m = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$3), {
      props: sliderButtonProps,
      emits: sliderButtonEmits,
      setup(__props, { expose, emit: emit2 }) {
        const props = __props;
        const ns = useNamespace("slider");
        const initData = reactive({
          hovering: false,
          dragging: false,
          isClick: false,
          startX: 0,
          currentX: 0,
          startY: 0,
          currentY: 0,
          startPosition: 0,
          newPosition: 0,
          oldValue: props.modelValue
        });
        const {
          disabled,
          button,
          tooltip,
          showTooltip,
          tooltipVisible,
          wrapperStyle,
          formatValue,
          handleMouseEnter,
          handleMouseLeave,
          onButtonDown,
          onKeyDown,
          setPosition
        } = useSliderButton(props, initData, emit2);
        const { hovering, dragging } = toRefs(initData);
        expose({
          onButtonDown,
          onKeyDown,
          setPosition,
          hovering,
          dragging
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            ref_key: "button",
            ref: button,
            class: normalizeClass([unref(ns).e("button-wrapper"), { hover: unref(hovering), dragging: unref(dragging) }]),
            style: normalizeStyle(unref(wrapperStyle)),
            tabindex: unref(disabled) ? -1 : 0,
            onMouseenter: _cache[0] || (_cache[0] = (...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args)),
            onMouseleave: _cache[1] || (_cache[1] = (...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args)),
            onMousedown: _cache[2] || (_cache[2] = (...args) => unref(onButtonDown) && unref(onButtonDown)(...args)),
            onTouchstart: _cache[3] || (_cache[3] = (...args) => unref(onButtonDown) && unref(onButtonDown)(...args)),
            onFocus: _cache[4] || (_cache[4] = (...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args)),
            onBlur: _cache[5] || (_cache[5] = (...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args)),
            onKeydown: _cache[6] || (_cache[6] = (...args) => unref(onKeyDown) && unref(onKeyDown)(...args))
          }, [
            createVNode(unref(ElTooltip), {
              ref_key: "tooltip",
              ref: tooltip,
              visible: unref(tooltipVisible),
              placement: _ctx.placement,
              "fallback-placements": ["top", "bottom", "right", "left"],
              "stop-popper-mouse-event": false,
              "popper-class": _ctx.tooltipClass,
              disabled: !unref(showTooltip),
              persistent: ""
            }, {
              content: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(unref(formatValue)), 1)
              ]),
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass([unref(ns).e("button"), { hover: unref(hovering), dragging: unref(dragging) }])
                }, null, 2)
              ]),
              _: 1
            }, 8, ["visible", "placement", "popper-class", "disabled"])
          ], 46, _hoisted_1$z);
        };
      }
    }));
    var SliderButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__file", "button.vue"]]);
    const sliderMarkerProps = buildProps({
      mark: {
        type: definePropType([String, Object]),
        default: void 0
      }
    });
    var SliderMarker = /* @__PURE__ */ defineComponent({
      name: "ElSliderMarker",
      props: sliderMarkerProps,
      setup(props) {
        const ns = useNamespace("slider");
        const label = computed(() => {
          return isString$1(props.mark) ? props.mark : props.mark.label;
        });
        const style2 = computed(() => isString$1(props.mark) ? void 0 : props.mark.style);
        return () => h("div", {
          class: ns.e("marks-text"),
          style: style2.value
        }, label.value);
      }
    });
    const _hoisted_1$y = ["id", "role", "aria-label", "aria-labelledby"];
    const _hoisted_2$x = { key: 1 };
    const __default__$2 = /* @__PURE__ */ defineComponent({
      name: "ElSlider"
    });
    const _sfc_main$l = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$2), {
      props: sliderProps,
      emits: sliderEmits,
      setup(__props, { expose, emit: emit2 }) {
        const props = __props;
        const ns = useNamespace("slider");
        const { t } = useLocale();
        const initData = reactive({
          firstValue: 0,
          secondValue: 0,
          oldValue: 0,
          dragging: false,
          sliderSize: 1
        });
        const {
          elFormItem,
          slider,
          firstButton,
          secondButton,
          sliderDisabled,
          minValue,
          maxValue,
          runwayStyle,
          barStyle,
          resetSize,
          emitChange,
          onSliderWrapperPrevent,
          onSliderClick,
          onSliderDown,
          setFirstValue,
          setSecondValue
        } = useSlide(props, initData, emit2);
        const { stops, getStopStyle } = useStops(props, initData, minValue, maxValue);
        const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
          formItemContext: elFormItem
        });
        const sliderWrapperSize = useFormSize();
        const sliderInputSize = computed(() => props.inputSize || sliderWrapperSize.value);
        const groupLabel = computed(() => {
          return props.label || t("el.slider.defaultLabel", {
            min: props.min,
            max: props.max
          });
        });
        const firstButtonLabel = computed(() => {
          if (props.range) {
            return props.rangeStartLabel || t("el.slider.defaultRangeStartLabel");
          } else {
            return groupLabel.value;
          }
        });
        const firstValueText = computed(() => {
          return props.formatValueText ? props.formatValueText(firstValue.value) : `${firstValue.value}`;
        });
        const secondButtonLabel = computed(() => {
          return props.rangeEndLabel || t("el.slider.defaultRangeEndLabel");
        });
        const secondValueText = computed(() => {
          return props.formatValueText ? props.formatValueText(secondValue.value) : `${secondValue.value}`;
        });
        const sliderKls = computed(() => [
          ns.b(),
          ns.m(sliderWrapperSize.value),
          ns.is("vertical", props.vertical),
          { [ns.m("with-input")]: props.showInput }
        ]);
        const markList = useMarks(props);
        useWatch(props, initData, minValue, maxValue, emit2, elFormItem);
        const precision = computed(() => {
          const precisions = [props.min, props.max, props.step].map((item) => {
            const decimal = `${item}`.split(".")[1];
            return decimal ? decimal.length : 0;
          });
          return Math.max.apply(null, precisions);
        });
        const { sliderWrapper } = useLifecycle(props, initData, resetSize);
        const { firstValue, secondValue, sliderSize } = toRefs(initData);
        const updateDragging = (val) => {
          initData.dragging = val;
        };
        provide(sliderContextKey, __spreadProps(__spreadValues({}, toRefs(props)), {
          sliderSize,
          disabled: sliderDisabled,
          precision,
          emitChange,
          resetSize,
          updateDragging
        }));
        expose({
          onSliderClick
        });
        return (_ctx, _cache) => {
          var _a2, _b;
          return openBlock(), createElementBlock("div", {
            id: _ctx.range ? unref(inputId) : void 0,
            ref_key: "sliderWrapper",
            ref: sliderWrapper,
            class: normalizeClass(unref(sliderKls)),
            role: _ctx.range ? "group" : void 0,
            "aria-label": _ctx.range && !unref(isLabeledByFormItem) ? unref(groupLabel) : void 0,
            "aria-labelledby": _ctx.range && unref(isLabeledByFormItem) ? (_a2 = unref(elFormItem)) == null ? void 0 : _a2.labelId : void 0,
            onTouchstart: _cache[2] || (_cache[2] = (...args) => unref(onSliderWrapperPrevent) && unref(onSliderWrapperPrevent)(...args)),
            onTouchmove: _cache[3] || (_cache[3] = (...args) => unref(onSliderWrapperPrevent) && unref(onSliderWrapperPrevent)(...args))
          }, [
            createBaseVNode("div", {
              ref_key: "slider",
              ref: slider,
              class: normalizeClass([
                unref(ns).e("runway"),
                { "show-input": _ctx.showInput && !_ctx.range },
                unref(ns).is("disabled", unref(sliderDisabled))
              ]),
              style: normalizeStyle(unref(runwayStyle)),
              onMousedown: _cache[0] || (_cache[0] = (...args) => unref(onSliderDown) && unref(onSliderDown)(...args)),
              onTouchstart: _cache[1] || (_cache[1] = (...args) => unref(onSliderDown) && unref(onSliderDown)(...args))
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(ns).e("bar")),
                style: normalizeStyle(unref(barStyle))
              }, null, 6),
              createVNode(SliderButton, {
                id: !_ctx.range ? unref(inputId) : void 0,
                ref_key: "firstButton",
                ref: firstButton,
                "model-value": unref(firstValue),
                vertical: _ctx.vertical,
                "tooltip-class": _ctx.tooltipClass,
                placement: _ctx.placement,
                role: "slider",
                "aria-label": _ctx.range || !unref(isLabeledByFormItem) ? unref(firstButtonLabel) : void 0,
                "aria-labelledby": !_ctx.range && unref(isLabeledByFormItem) ? (_b = unref(elFormItem)) == null ? void 0 : _b.labelId : void 0,
                "aria-valuemin": _ctx.min,
                "aria-valuemax": _ctx.range ? unref(secondValue) : _ctx.max,
                "aria-valuenow": unref(firstValue),
                "aria-valuetext": unref(firstValueText),
                "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
                "aria-disabled": unref(sliderDisabled),
                "onUpdate:modelValue": unref(setFirstValue)
              }, null, 8, ["id", "model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-labelledby", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"]),
              _ctx.range ? (openBlock(), createBlock(SliderButton, {
                key: 0,
                ref_key: "secondButton",
                ref: secondButton,
                "model-value": unref(secondValue),
                vertical: _ctx.vertical,
                "tooltip-class": _ctx.tooltipClass,
                placement: _ctx.placement,
                role: "slider",
                "aria-label": unref(secondButtonLabel),
                "aria-valuemin": unref(firstValue),
                "aria-valuemax": _ctx.max,
                "aria-valuenow": unref(secondValue),
                "aria-valuetext": unref(secondValueText),
                "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
                "aria-disabled": unref(sliderDisabled),
                "onUpdate:modelValue": unref(setSecondValue)
              }, null, 8, ["model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"])) : createCommentVNode("v-if", true),
              _ctx.showStops ? (openBlock(), createElementBlock("div", _hoisted_2$x, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(stops), (item, key) => {
                  return openBlock(), createElementBlock("div", {
                    key,
                    class: normalizeClass(unref(ns).e("stop")),
                    style: normalizeStyle(unref(getStopStyle)(item))
                  }, null, 6);
                }), 128))
              ])) : createCommentVNode("v-if", true),
              unref(markList).length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createBaseVNode("div", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(markList), (item, key) => {
                    return openBlock(), createElementBlock("div", {
                      key,
                      style: normalizeStyle(unref(getStopStyle)(item.position)),
                      class: normalizeClass([unref(ns).e("stop"), unref(ns).e("marks-stop")])
                    }, null, 6);
                  }), 128))
                ]),
                createBaseVNode("div", {
                  class: normalizeClass(unref(ns).e("marks"))
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(markList), (item, key) => {
                    return openBlock(), createBlock(unref(SliderMarker), {
                      key,
                      mark: item.mark,
                      style: normalizeStyle(unref(getStopStyle)(item.position))
                    }, null, 8, ["mark", "style"]);
                  }), 128))
                ], 2)
              ], 64)) : createCommentVNode("v-if", true)
            ], 38),
            _ctx.showInput && !_ctx.range ? (openBlock(), createBlock(unref(ElInputNumber), {
              key: 0,
              ref: "input",
              "model-value": unref(firstValue),
              class: normalizeClass(unref(ns).e("input")),
              step: _ctx.step,
              disabled: unref(sliderDisabled),
              controls: _ctx.showInputControls,
              min: _ctx.min,
              max: _ctx.max,
              debounce: _ctx.debounce,
              size: unref(sliderInputSize),
              "onUpdate:modelValue": unref(setFirstValue),
              onChange: unref(emitChange)
            }, null, 8, ["model-value", "class", "step", "disabled", "controls", "min", "max", "debounce", "size", "onUpdate:modelValue", "onChange"])) : createCommentVNode("v-if", true)
          ], 42, _hoisted_1$y);
        };
      }
    }));
    var Slider = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__file", "slider.vue"]]);
    const ElSlider = withInstall(Slider);
    const switchProps = buildProps({
      modelValue: {
        type: [Boolean, String, Number],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        validator: isValidComponentSize
      },
      width: {
        type: [String, Number],
        default: ""
      },
      inlinePrompt: {
        type: Boolean,
        default: false
      },
      inactiveActionIcon: {
        type: iconPropType
      },
      activeActionIcon: {
        type: iconPropType
      },
      activeIcon: {
        type: iconPropType
      },
      inactiveIcon: {
        type: iconPropType
      },
      activeText: {
        type: String,
        default: ""
      },
      inactiveText: {
        type: String,
        default: ""
      },
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      },
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      },
      activeColor: {
        type: String,
        default: ""
      },
      inactiveColor: {
        type: String,
        default: ""
      },
      borderColor: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        default: ""
      },
      validateEvent: {
        type: Boolean,
        default: true
      },
      beforeChange: {
        type: definePropType(Function)
      },
      id: String,
      tabindex: {
        type: [String, Number]
      },
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      label: {
        type: String,
        default: void 0
      }
    });
    const switchEmits = {
      [UPDATE_MODEL_EVENT]: (val) => isBoolean(val) || isString$1(val) || isNumber(val),
      [CHANGE_EVENT]: (val) => isBoolean(val) || isString$1(val) || isNumber(val),
      [INPUT_EVENT]: (val) => isBoolean(val) || isString$1(val) || isNumber(val)
    };
    const _hoisted_1$x = ["onClick"];
    const _hoisted_2$w = ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"];
    const _hoisted_3$t = ["aria-hidden"];
    const _hoisted_4$c = ["aria-hidden"];
    const _hoisted_5$c = ["aria-hidden"];
    const COMPONENT_NAME = "ElSwitch";
    const __default__$1 = /* @__PURE__ */ defineComponent({
      name: COMPONENT_NAME
    });
    const _sfc_main$k = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
      props: switchProps,
      emits: switchEmits,
      setup(__props, { expose, emit: emit2 }) {
        const props = __props;
        const vm = getCurrentInstance();
        const { formItem } = useFormItem();
        const switchSize = useFormSize();
        const ns = useNamespace("switch");
        const useBatchDeprecated = (list) => {
          list.forEach((param) => {
            useDeprecated({
              from: param[0],
              replacement: param[1],
              scope: COMPONENT_NAME,
              version: "2.3.0",
              ref: "https://element-plus.org/en-US/component/switch.html#attributes",
              type: "Attribute"
            }, computed(() => {
              var _a2;
              return !!((_a2 = vm.vnode.props) == null ? void 0 : _a2[param[2]]);
            }));
          });
        };
        useBatchDeprecated([
          ['"value"', '"model-value" or "v-model"', "value"],
          ['"active-color"', "CSS var `--el-switch-on-color`", "activeColor"],
          ['"inactive-color"', "CSS var `--el-switch-off-color`", "inactiveColor"],
          ['"border-color"', "CSS var `--el-switch-border-color`", "borderColor"]
        ]);
        const { inputId } = useFormItemInputId(props, {
          formItemContext: formItem
        });
        const switchDisabled = useFormDisabled(computed(() => props.loading));
        const isControlled = ref(props.modelValue !== false);
        const input = ref();
        const core = ref();
        const switchKls = computed(() => [
          ns.b(),
          ns.m(switchSize.value),
          ns.is("disabled", switchDisabled.value),
          ns.is("checked", checked.value)
        ]);
        const labelLeftKls = computed(() => [
          ns.e("label"),
          ns.em("label", "left"),
          ns.is("active", !checked.value)
        ]);
        const labelRightKls = computed(() => [
          ns.e("label"),
          ns.em("label", "right"),
          ns.is("active", checked.value)
        ]);
        const coreStyle = computed(() => ({
          width: addUnit(props.width)
        }));
        watch(() => props.modelValue, () => {
          isControlled.value = true;
        });
        watch(() => props.value, () => {
          isControlled.value = false;
        });
        const actualValue = computed(() => {
          return isControlled.value ? props.modelValue : props.value;
        });
        const checked = computed(() => actualValue.value === props.activeValue);
        if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
          emit2(UPDATE_MODEL_EVENT, props.inactiveValue);
          emit2(CHANGE_EVENT, props.inactiveValue);
          emit2(INPUT_EVENT, props.inactiveValue);
        }
        watch(checked, (val) => {
          var _a2;
          input.value.checked = val;
          if (props.validateEvent) {
            (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "change").catch((err) => debugWarn());
          }
        });
        const handleChange = () => {
          const val = checked.value ? props.inactiveValue : props.activeValue;
          emit2(UPDATE_MODEL_EVENT, val);
          emit2(CHANGE_EVENT, val);
          emit2(INPUT_EVENT, val);
          nextTick$1(() => {
            input.value.checked = checked.value;
          });
        };
        const switchValue = () => {
          if (switchDisabled.value)
            return;
          const { beforeChange } = props;
          if (!beforeChange) {
            handleChange();
            return;
          }
          const shouldChange = beforeChange();
          const isPromiseOrBool = [
            isPromise(shouldChange),
            isBoolean(shouldChange)
          ].includes(true);
          if (!isPromiseOrBool) {
            throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
          }
          if (isPromise(shouldChange)) {
            shouldChange.then((result) => {
              if (result) {
                handleChange();
              }
            }).catch((e) => {
            });
          } else if (shouldChange) {
            handleChange();
          }
        };
        const styles = computed(() => {
          return ns.cssVarBlock(__spreadValues(__spreadValues(__spreadValues({}, props.activeColor ? { "on-color": props.activeColor } : null), props.inactiveColor ? { "off-color": props.inactiveColor } : null), props.borderColor ? { "border-color": props.borderColor } : null));
        });
        const focus = () => {
          var _a2, _b;
          (_b = (_a2 = input.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
        };
        onMounted(() => {
          input.value.checked = checked.value;
        });
        expose({
          focus,
          checked
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(unref(switchKls)),
            style: normalizeStyle(unref(styles)),
            onClick: withModifiers(switchValue, ["prevent"])
          }, [
            createBaseVNode("input", {
              id: unref(inputId),
              ref_key: "input",
              ref: input,
              class: normalizeClass(unref(ns).e("input")),
              type: "checkbox",
              role: "switch",
              "aria-checked": unref(checked),
              "aria-disabled": unref(switchDisabled),
              "aria-label": _ctx.label,
              name: _ctx.name,
              "true-value": _ctx.activeValue,
              "false-value": _ctx.inactiveValue,
              disabled: unref(switchDisabled),
              tabindex: _ctx.tabindex,
              onChange: handleChange,
              onKeydown: withKeys(switchValue, ["enter"])
            }, null, 42, _hoisted_2$w),
            !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(labelLeftKls))
            }, [
              _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true),
              !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
                key: 1,
                "aria-hidden": unref(checked)
              }, toDisplayString(_ctx.inactiveText), 9, _hoisted_3$t)) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true),
            createBaseVNode("span", {
              ref_key: "core",
              ref: core,
              class: normalizeClass(unref(ns).e("core")),
              style: normalizeStyle(unref(coreStyle))
            }, [
              _ctx.inlinePrompt ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ns).e("inner"))
              }, [
                _ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass(unref(ns).is("icon"))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(checked) ? _ctx.activeIcon : _ctx.inactiveIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : _ctx.activeText || _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: normalizeClass(unref(ns).is("text")),
                  "aria-hidden": !unref(checked)
                }, toDisplayString(unref(checked) ? _ctx.activeText : _ctx.inactiveText), 11, _hoisted_4$c)) : createCommentVNode("v-if", true)
              ], 2)) : createCommentVNode("v-if", true),
              createBaseVNode("div", {
                class: normalizeClass(unref(ns).e("action"))
              }, [
                _ctx.loading ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass(unref(ns).is("loading"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(loading_default))
                  ]),
                  _: 1
                }, 8, ["class"])) : unref(checked) ? renderSlot(_ctx.$slots, "active-action", { key: 1 }, () => [
                  _ctx.activeActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeActionIcon)))
                    ]),
                    _: 1
                  })) : createCommentVNode("v-if", true)
                ]) : !unref(checked) ? renderSlot(_ctx.$slots, "inactive-action", { key: 2 }, () => [
                  _ctx.inactiveActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveActionIcon)))
                    ]),
                    _: 1
                  })) : createCommentVNode("v-if", true)
                ]) : createCommentVNode("v-if", true)
              ], 2)
            ], 6),
            !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(labelRightKls))
            }, [
              _ctx.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true),
              !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
                key: 1,
                "aria-hidden": !unref(checked)
              }, toDisplayString(_ctx.activeText), 9, _hoisted_5$c)) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true)
          ], 14, _hoisted_1$x);
        };
      }
    }));
    var Switch = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__file", "switch.vue"]]);
    const ElSwitch = withInstall(Switch);
    const messageTypes = ["success", "info", "warning", "error"];
    const messageDefaults = mutable({
      customClass: "",
      center: false,
      dangerouslyUseHTMLString: false,
      duration: 3e3,
      icon: void 0,
      id: "",
      message: "",
      onClose: void 0,
      showClose: false,
      type: "info",
      offset: 16,
      zIndex: 0,
      grouping: false,
      repeatNum: 1,
      appendTo: isClient ? document.body : void 0
    });
    const messageProps = buildProps({
      customClass: {
        type: String,
        default: messageDefaults.customClass
      },
      center: {
        type: Boolean,
        default: messageDefaults.center
      },
      dangerouslyUseHTMLString: {
        type: Boolean,
        default: messageDefaults.dangerouslyUseHTMLString
      },
      duration: {
        type: Number,
        default: messageDefaults.duration
      },
      icon: {
        type: iconPropType,
        default: messageDefaults.icon
      },
      id: {
        type: String,
        default: messageDefaults.id
      },
      message: {
        type: definePropType([
          String,
          Object,
          Function
        ]),
        default: messageDefaults.message
      },
      onClose: {
        type: definePropType(Function),
        required: false
      },
      showClose: {
        type: Boolean,
        default: messageDefaults.showClose
      },
      type: {
        type: String,
        values: messageTypes,
        default: messageDefaults.type
      },
      offset: {
        type: Number,
        default: messageDefaults.offset
      },
      zIndex: {
        type: Number,
        default: messageDefaults.zIndex
      },
      grouping: {
        type: Boolean,
        default: messageDefaults.grouping
      },
      repeatNum: {
        type: Number,
        default: messageDefaults.repeatNum
      }
    });
    const messageEmits = {
      destroy: () => true
    };
    const instances = shallowReactive([]);
    const getInstance = (id) => {
      const idx = instances.findIndex((instance) => instance.id === id);
      const current = instances[idx];
      let prev;
      if (idx > 0) {
        prev = instances[idx - 1];
      }
      return { current, prev };
    };
    const getLastOffset = (id) => {
      const { prev } = getInstance(id);
      if (!prev)
        return 0;
      return prev.vm.exposed.bottom.value;
    };
    const getOffsetOrSpace = (id, offset) => {
      const idx = instances.findIndex((instance) => instance.id === id);
      return idx > 0 ? 20 : offset;
    };
    const _hoisted_1$w = ["id"];
    const _hoisted_2$v = ["innerHTML"];
    const __default__ = /* @__PURE__ */ defineComponent({
      name: "ElMessage"
    });
    const _sfc_main$j = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
      props: messageProps,
      emits: messageEmits,
      setup(__props, { expose }) {
        const props = __props;
        const { Close } = TypeComponents;
        const { ns, zIndex: zIndex2 } = useGlobalComponentSettings("message");
        const { currentZIndex, nextZIndex } = zIndex2;
        const messageRef = ref();
        const visible = ref(false);
        const height = ref(0);
        let stopTimer = void 0;
        const badgeType = computed(() => props.type ? props.type === "error" ? "danger" : props.type : "info");
        const typeClass = computed(() => {
          const type2 = props.type;
          return { [ns.bm("icon", type2)]: type2 && TypeComponentsMap[type2] };
        });
        const iconComponent = computed(() => props.icon || TypeComponentsMap[props.type] || "");
        const lastOffset = computed(() => getLastOffset(props.id));
        const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
        const bottom = computed(() => height.value + offset.value);
        const customStyle = computed(() => ({
          top: `${offset.value}px`,
          zIndex: currentZIndex.value
        }));
        function startTimer() {
          if (props.duration === 0)
            return;
          ({ stop: stopTimer } = useTimeoutFn(() => {
            close();
          }, props.duration));
        }
        function clearTimer() {
          stopTimer == null ? void 0 : stopTimer();
        }
        function close() {
          visible.value = false;
        }
        function keydown({ code }) {
          if (code === EVENT_CODE.esc) {
            close();
          }
        }
        onMounted(() => {
          startTimer();
          nextZIndex();
          visible.value = true;
        });
        watch(() => props.repeatNum, () => {
          clearTimer();
          startTimer();
        });
        useEventListener(document, "keydown", keydown);
        useResizeObserver(messageRef, () => {
          height.value = messageRef.value.getBoundingClientRect().height;
        });
        expose({
          visible,
          bottom,
          close
        });
        return (_ctx, _cache) => {
          return openBlock(), createBlock(Transition, {
            name: unref(ns).b("fade"),
            onBeforeLeave: _ctx.onClose,
            onAfterLeave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("destroy")),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("div", {
                id: _ctx.id,
                ref_key: "messageRef",
                ref: messageRef,
                class: normalizeClass([
                  unref(ns).b(),
                  { [unref(ns).m(_ctx.type)]: _ctx.type },
                  unref(ns).is("center", _ctx.center),
                  unref(ns).is("closable", _ctx.showClose),
                  _ctx.customClass
                ]),
                style: normalizeStyle(unref(customStyle)),
                role: "alert",
                onMouseenter: clearTimer,
                onMouseleave: startTimer
              }, [
                _ctx.repeatNum > 1 ? (openBlock(), createBlock(unref(ElBadge), {
                  key: 0,
                  value: _ctx.repeatNum,
                  type: unref(badgeType),
                  class: normalizeClass(unref(ns).e("badge"))
                }, null, 8, ["value", "type", "class"])) : createCommentVNode("v-if", true),
                unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass([unref(ns).e("icon"), unref(typeClass)])
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true),
                renderSlot(_ctx.$slots, "default", {}, () => [
                  !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
                    key: 0,
                    class: normalizeClass(unref(ns).e("content"))
                  }, toDisplayString(_ctx.message), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
                    createBaseVNode("p", {
                      class: normalizeClass(unref(ns).e("content")),
                      innerHTML: _ctx.message
                    }, null, 10, _hoisted_2$v)
                  ], 2112))
                ]),
                _ctx.showClose ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass(unref(ns).e("closeBtn")),
                  onClick: withModifiers(close, ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Close))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
              ], 46, _hoisted_1$w), [
                [vShow, visible.value]
              ])
            ]),
            _: 3
          }, 8, ["name", "onBeforeLeave"]);
        };
      }
    }));
    var MessageConstructor = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__file", "message.vue"]]);
    let seed = 1;
    const normalizeOptions$1 = (params) => {
      const options = !params || isString$1(params) || isVNode(params) || isFunction$1(params) ? { message: params } : params;
      const normalized = __spreadValues(__spreadValues({}, messageDefaults), options);
      if (!normalized.appendTo) {
        normalized.appendTo = document.body;
      } else if (isString$1(normalized.appendTo)) {
        let appendTo = document.querySelector(normalized.appendTo);
        if (!isElement(appendTo)) {
          appendTo = document.body;
        }
        normalized.appendTo = appendTo;
      }
      return normalized;
    };
    const closeMessage = (instance) => {
      const idx = instances.indexOf(instance);
      if (idx === -1)
        return;
      instances.splice(idx, 1);
      const { handler } = instance;
      handler.close();
    };
    const createMessage = (_a2, context) => {
      var _b = _a2, { appendTo } = _b, options = __objRest(_b, ["appendTo"]);
      const id = `message_${seed++}`;
      const userOnClose = options.onClose;
      const container = document.createElement("div");
      const props = __spreadProps(__spreadValues({}, options), {
        id,
        onClose: () => {
          userOnClose == null ? void 0 : userOnClose();
          closeMessage(instance);
        },
        onDestroy: () => {
          render$1(null, container);
        }
      });
      const vnode = createVNode(MessageConstructor, props, isFunction$1(props.message) || isVNode(props.message) ? {
        default: isFunction$1(props.message) ? props.message : () => props.message
      } : null);
      vnode.appContext = context || message._context;
      render$1(vnode, container);
      appendTo.appendChild(container.firstElementChild);
      const vm = vnode.component;
      const handler = {
        close: () => {
          vm.exposed.visible.value = false;
        }
      };
      const instance = {
        id,
        vnode,
        vm,
        handler,
        props: vnode.component.props
      };
      return instance;
    };
    const message = (options = {}, context) => {
      if (!isClient)
        return { close: () => void 0 };
      if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
        return { close: () => void 0 };
      }
      const normalized = normalizeOptions$1(options);
      if (normalized.grouping && instances.length) {
        const instance2 = instances.find(({ vnode: vm }) => {
          var _a2;
          return ((_a2 = vm.props) == null ? void 0 : _a2.message) === normalized.message;
        });
        if (instance2) {
          instance2.props.repeatNum += 1;
          instance2.props.type = normalized.type;
          return instance2.handler;
        }
      }
      const instance = createMessage(normalized, context);
      instances.push(instance);
      return instance.handler;
    };
    messageTypes.forEach((type2) => {
      message[type2] = (options = {}, appContext) => {
        const normalized = normalizeOptions$1(options);
        return message(__spreadProps(__spreadValues({}, normalized), { type: type2 }), appContext);
      };
    });
    function closeAll(type2) {
      for (const instance of instances) {
        if (!type2 || type2 === instance.props.type) {
          instance.handler.close();
        }
      }
    }
    message.closeAll = closeAll;
    message._context = null;
    const ElMessage = withInstallFunction(message, "$message");
    const base = "";
    const elBadge = "";
    const elMessage = "";
    const style$2 = "";
    var DEFAULT_ICON_CONFIGS = {
      size: "1em",
      strokeWidth: 4,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      rtl: false,
      theme: "outline",
      colors: {
        outline: {
          fill: "#333",
          background: "transparent"
        },
        filled: {
          fill: "#333",
          background: "#FFF"
        },
        twoTone: {
          fill: "#333",
          twoTone: "#2F88FF"
        },
        multiColor: {
          outStrokeColor: "#333",
          outFillColor: "#2F88FF",
          innerStrokeColor: "#FFF",
          innerFillColor: "#43CCF8"
        }
      },
      prefix: "i"
    };
    function guid() {
      return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
    }
    function IconConverter(id, icon, config2) {
      var fill = typeof icon.fill === "string" ? [icon.fill] : icon.fill || [];
      var colors = [];
      var theme = icon.theme || config2.theme;
      switch (theme) {
        case "outline":
          colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
          colors.push("none");
          colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
          colors.push("none");
          break;
        case "filled":
          colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
          colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
          colors.push("#FFF");
          colors.push("#FFF");
          break;
        case "two-tone":
          colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
          colors.push(typeof fill[1] === "string" ? fill[1] : config2.colors.twoTone.twoTone);
          colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
          colors.push(typeof fill[1] === "string" ? fill[1] : config2.colors.twoTone.twoTone);
          break;
        case "multi-color":
          colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
          colors.push(typeof fill[1] === "string" ? fill[1] : config2.colors.multiColor.outFillColor);
          colors.push(typeof fill[2] === "string" ? fill[2] : config2.colors.multiColor.innerStrokeColor);
          colors.push(typeof fill[3] === "string" ? fill[3] : config2.colors.multiColor.innerFillColor);
          break;
      }
      return {
        size: icon.size || config2.size,
        strokeWidth: icon.strokeWidth || config2.strokeWidth,
        strokeLinecap: icon.strokeLinecap || config2.strokeLinecap,
        strokeLinejoin: icon.strokeLinejoin || config2.strokeLinejoin,
        colors,
        id
      };
    }
    var IconContext = Symbol("icon-context");
    function IconWrapper(name2, rtl, render2) {
      var options = {
        name: "icon-" + name2,
        props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
        setup: function setup(props) {
          var id = guid();
          var ICON_CONFIGS = inject(IconContext, DEFAULT_ICON_CONFIGS);
          return function() {
            var size2 = props.size, strokeWidth = props.strokeWidth, strokeLinecap = props.strokeLinecap, strokeLinejoin = props.strokeLinejoin, theme = props.theme, fill = props.fill, spin = props.spin;
            var svgProps = IconConverter(id, {
              size: size2,
              strokeWidth,
              strokeLinecap,
              strokeLinejoin,
              theme,
              fill
            }, ICON_CONFIGS);
            var cls = [ICON_CONFIGS.prefix + "-icon"];
            cls.push(ICON_CONFIGS.prefix + "-icon-" + name2);
            if (rtl && ICON_CONFIGS.rtl) {
              cls.push(ICON_CONFIGS.prefix + "-icon-rtl");
            }
            if (spin) {
              cls.push(ICON_CONFIGS.prefix + "-icon-spin");
            }
            return createVNode("span", {
              "class": cls.join(" ")
            }, [render2(svgProps)]);
          };
        }
      };
      return options;
    }
    const AddOne = IconWrapper("add-one", false, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M24 16V32",
        "stroke": props.colors[2],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M16 24L32 24",
        "stroke": props.colors[2],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const Bookmark = IconWrapper("bookmark", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M10 44C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M21 22V4H33V22L27 15.7273L21 22Z",
        "fill": props.colors[3],
        "stroke": props.colors[2],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M10 4H38",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const Bug = IconWrapper("bug", false, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M24 42C36 42 38 31.5324 38 28C38 24.8379 38 20.1712 38 14H10C10 17.4423 10 22.109 10 28C10 31.4506 12 42 24 42Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M4 8L10 14",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M44 8L38 14",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M4 27H10",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M44 27H38",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M7 44L13 38",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M41 44L35 38",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M24 42V14",
        "stroke": props.colors[2],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M14.9204 39.0407C17.0024 40.783 19.9244 41.9998 23.9999 41.9998C28.1112 41.9998 31.0487 40.7712 33.1341 39.0137",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M32 12.3333C32 7.73096 28.4183 4 24 4C19.5817 4 16 7.73096 16 12.3333V14H32V12.3333Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const CheckSmall = IconWrapper("check-small", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M10 24L20 34L40 14",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const CloseOne = IconWrapper("close-one", false, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M29.6567 18.3432L18.343 29.6569",
        "stroke": props.colors[2],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M18.3433 18.3432L29.657 29.6569",
        "stroke": props.colors[2],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const CloseSmall = IconWrapper("close-small", false, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M14 14L34 34",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M14 34L34 14",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const Error$1 = IconWrapper("error", false, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M6 11L11 6L24 19L37 6L42 11L29 24L42 37L37 42L24 29L11 42L6 37L19 24L6 11Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const GithubOne = IconWrapper("github-one", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap
      }, null), createVNode("path", {
        "d": "M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap
      }, null), createVNode("path", {
        "d": "M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap
      }, null), createVNode("path", {
        "d": "M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap
      }, null)]);
    });
    const GoEnd = IconWrapper("go-end", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M14 12L26 24L14 36",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M34 12V36",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const GoStart = IconWrapper("go-start", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M34 36L22 24L34 12",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M14 12V36",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const HamburgerButton = IconWrapper("hamburger-button", false, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M7.94971 11.9497H39.9497",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M7.94971 23.9497H39.9497",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M7.94971 35.9497H39.9497",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const HourglassFull = IconWrapper("hourglass-full", false, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M7 4H41",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M7 44H41",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M21 15H27",
        "stroke": props.colors[2],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M19 38H29",
        "stroke": props.colors[2],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const MusicMenu = IconWrapper("music-menu", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M29 6V35",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M15 36.04C15 33.2565 17.2565 31 20.04 31H29V36.96C29 39.7435 26.7435 42 23.96 42H20.04C17.2565 42 15 39.7435 15 36.96V36.04Z",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M29 14.0664L41.8834 17.1215V9.01339L29 6V14.0664Z",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M6 8H20",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M6 16H20",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M6 24H16",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const MusicOne = IconWrapper("music-one", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M24 6V35",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M10 36.04C10 33.2565 12.2565 31 15.04 31H24V36.96C24 39.7435 21.7435 42 18.96 42H15.04C12.2565 42 10 39.7435 10 36.96V36.04Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M24 14.0664L36.8834 17.1215V9.01341L24 6.00002V14.0664Z",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const Pause = IconWrapper("pause", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M16 12V36",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M32 12V36",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const PlayOne = IconWrapper("play-one", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const PlayWrong = IconWrapper("play-wrong", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M33 33L41 41",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M41 33L33 41",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const SettingTwo = IconWrapper("setting-two", false, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
        "fill": props.colors[3],
        "stroke": props.colors[2],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const SpaCandle = IconWrapper("spa-candle", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M6.54086 26.4339C6.2633 25.1848 7.21374 24 8.49323 24H39.5068C40.7863 24 41.7367 25.1848 41.4591 26.4339L38.348 40.4339C38.1447 41.3489 37.3331 42 36.3957 42H11.6043C10.6669 42 9.85532 41.3489 9.65197 40.4339L6.54086 26.4339Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M20.643 9.88858C22.0743 8.00815 23.1776 5.41033 23.774 4C24.8177 5.41033 27.084 8.94836 27.7997 10.8288C28.6942 13.1793 26.4578 16 23.774 16C21.0903 16 18.8538 12.2391 20.643 9.88858Z",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M24 16V24",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const SuccessPicture = IconWrapper("success-picture", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M44 22C44 20.8954 43.1046 20 42 20C40.8954 20 40 20.8954 40 22H44ZM24 8C25.1046 8 26 7.10457 26 6C26 4.89543 25.1046 4 24 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 22V39H44V22H40ZM9 8H24V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z",
        "fill": props.colors[0]
      }, null), createVNode("path", {
        "d": "M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M31.4142 9.58579C30.6332 8.80474 29.3668 8.80474 28.5858 9.58579C27.8047 10.3668 27.8047 11.6332 28.5858 12.4142L31.4142 9.58579ZM34 15L32.5858 16.4142C33.3668 17.1953 34.6332 17.1953 35.4142 16.4142L34 15ZM43.4142 8.41421C44.1953 7.63317 44.1953 6.36683 43.4142 5.58579C42.6332 4.80474 41.3668 4.80474 40.5858 5.58579L43.4142 8.41421ZM28.5858 12.4142L32.5858 16.4142L35.4142 13.5858L31.4142 9.58579L28.5858 12.4142ZM35.4142 16.4142L43.4142 8.41421L40.5858 5.58579L32.5858 13.5858L35.4142 16.4142Z",
        "fill": props.colors[0]
      }, null)]);
    });
    const VolumeMute = IconWrapper("volume-mute", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("rect", {
        "opacity": "0.01",
        "x": "30",
        "y": "18",
        "width": "13",
        "height": "13",
        "fill": props.colors[2]
      }, null), createVNode("mask", {
        "id": props.id + "603476ab",
        "maskUnits": "userSpaceOnUse",
        "x": "30",
        "y": "18",
        "width": "13",
        "height": "13",
        "style": {
          maskType: "alpha"
        }
      }, [createVNode("rect", {
        "x": "30",
        "y": "18",
        "width": "13",
        "height": "13",
        "fill": props.colors[2]
      }, null)]), createVNode("g", {
        "mask": "url(#" + props.id + "603476ab)"
      }, [createVNode("path", {
        "d": "M40.7348 20.2858L32.2495 28.7711",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M32.2496 20.2858L40.7349 28.7711",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]), createVNode("path", {
        "d": "M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const VolumeNotice = IconWrapper("volume-notice", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M34.2359 41.1857C40.0836 37.6953 44 31.305 44 24C44 16.8085 40.2043 10.5035 34.507 6.97906",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap
      }, null)]);
    });
    const VolumeSmall = IconWrapper("volume-small", true, function(props) {
      return createVNode("svg", {
        "width": props.size,
        "height": props.size,
        "viewBox": "0 0 48 48",
        "fill": "none"
      }, [createVNode("path", {
        "d": "M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z",
        "fill": props.colors[1],
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linejoin": props.strokeLinejoin
      }, null), createVNode("path", {
        "d": "M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33",
        "stroke": props.colors[0],
        "stroke-width": props.strokeWidth,
        "stroke-linecap": props.strokeLinecap,
        "stroke-linejoin": props.strokeLinejoin
      }, null)]);
    });
    const getCurrentTime = () => {
      let time = /* @__PURE__ */ new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
      let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
      let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
      let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
      let second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
      let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      let currentTime = {
        year,
        month,
        day,
        hour,
        minute,
        second,
        weekday: weekday[time.getDay()]
      };
      return currentTime;
    };
    const getTimeCapsule = () => {
      const todayStartDate = new Date((/* @__PURE__ */ new Date()).toLocaleDateString()).getTime();
      const todayPassHours = (/* @__PURE__ */ new Date() - todayStartDate) / 1e3 / 60 / 60;
      const todayPassHoursPercent = todayPassHours / 24 * 100;
      const weeks = [7, 1, 2, 3, 4, 5, 6];
      const weekDay = weeks[(/* @__PURE__ */ new Date()).getDay()];
      const weekDayPassPercent = weekDay / 7 * 100;
      const year = (/* @__PURE__ */ new Date()).getFullYear();
      const date = (/* @__PURE__ */ new Date()).getDate();
      const month = (/* @__PURE__ */ new Date()).getMonth() + 1;
      const monthAll = new Date(year, month, 0).getDate();
      const monthPassPercent = date / monthAll * 100;
      const yearStartDate = new Date(year, 0, 1).getTime();
      const yearEndDate = new Date(year + 1, 0, 1).getTime();
      const yearPassHours = (/* @__PURE__ */ new Date() - yearStartDate) / 1e3 / 60 / 60;
      const yearTotalHours = (yearEndDate - yearStartDate) / 1e3 / 60 / 60;
      const yearPassPercent = yearPassHours / yearTotalHours * 100;
      return {
        day: {
          elapsed: Math.floor(todayPassHours),
          pass: Math.floor(todayPassHoursPercent)
        },
        week: {
          elapsed: weekDay,
          pass: Math.floor(weekDayPassPercent)
        },
        month: {
          elapsed: date,
          pass: Math.floor(monthPassPercent)
        },
        year: {
          elapsed: month - 1,
          pass: Math.floor(yearPassPercent)
        }
      };
    };
    const helloInit = () => {
      const hour = (/* @__PURE__ */ new Date()).getHours();
      let hello = null;
      if (hour < 6) {
        hello = "凌晨好";
      } else if (hour < 9) {
        hello = "早上好";
      } else if (hour < 12) {
        hello = "上午好";
      } else if (hour < 14) {
        hello = "中午好";
      } else if (hour < 17) {
        hello = "下午好";
      } else if (hour < 19) {
        hello = "傍晚好";
      } else if (hour < 22) {
        hello = "晚上好";
      } else {
        hello = "夜深了";
      }
      ElMessage({
        dangerouslyUseHTMLString: true,
        message: `<strong>${hello}</strong> 欢迎来到我的主页`
      });
    };
    const anniversaries = {
      4.4: "清明节",
      5.12: "汶川大地震纪念日",
      7.7: "中国人民抗日战争纪念日",
      9.18: "九·一八事变纪念日",
      12.13: "南京大屠杀死难者国家公祭日"
    };
    const checkDays = () => {
      const myDate = /* @__PURE__ */ new Date();
      const mon = myDate.getMonth() + 1;
      const date = myDate.getDate();
      const key = `${mon}.${date}`;
      if (Object.prototype.hasOwnProperty.call(anniversaries, key)) {
        console.log(`今天是${anniversaries[key]}`);
        const gray = document.createElement("style");
        gray.innerHTML = "html{filter: grayscale(100%)}";
        document.head.appendChild(gray);
        ElMessage({
          message: `今天是${anniversaries[key]}`,
          duration: 14e3,
          icon: h(SpaCandle, { theme: "filled", fill: "#efefef" })
        });
      }
    };
    const siteDateStatistics = (startDate) => {
      const currentDate = /* @__PURE__ */ new Date();
      const differenceInTime = currentDate.getTime() - startDate.getTime();
      const differenceInDays = differenceInTime / (1e3 * 3600 * 24);
      const differenceInMonths = differenceInDays / 30;
      const differenceInYears = differenceInMonths / 12;
      if (differenceInYears >= 1) {
        return `本站已经苟活了 ${Math.floor(differenceInYears)} 年 ${Math.floor(
          differenceInMonths % 12
        )} 月 ${Math.round(differenceInDays % 30)} 天`;
      } else if (differenceInMonths >= 1) {
        return `本站已经苟活了 ${Math.floor(differenceInMonths)} 月 ${Math.round(
          differenceInDays % 30
        )} 天`;
      } else {
        return `本站已经苟活了 ${Math.round(differenceInDays)} 天`;
      }
    };
    var isVue2 = false;
    /*!
     * pinia v2.1.7
     * (c) 2023 Eduardo San Martin Morote
     * @license MIT
     */
    let activePinia;
    const setActivePinia = (pinia2) => activePinia = pinia2;
    const piniaSymbol = (
      /* istanbul ignore next */
      Symbol()
    );
    function isPlainObject(o) {
      return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
    }
    var MutationType;
    (function(MutationType2) {
      MutationType2["direct"] = "direct";
      MutationType2["patchObject"] = "patch object";
      MutationType2["patchFunction"] = "patch function";
    })(MutationType || (MutationType = {}));
    function createPinia() {
      const scope = effectScope(true);
      const state = scope.run(() => ref({}));
      let _p = [];
      let toBeInstalled = [];
      const pinia2 = markRaw({
        install(app2) {
          setActivePinia(pinia2);
          {
            pinia2._a = app2;
            app2.provide(piniaSymbol, pinia2);
            app2.config.globalProperties.$pinia = pinia2;
            toBeInstalled.forEach((plugin) => _p.push(plugin));
            toBeInstalled = [];
          }
        },
        use(plugin) {
          if (!this._a && !isVue2) {
            toBeInstalled.push(plugin);
          } else {
            _p.push(plugin);
          }
          return this;
        },
        _p,
        // it's actually undefined here
        // @ts-expect-error
        _a: null,
        _e: scope,
        _s: /* @__PURE__ */ new Map(),
        state
      });
      return pinia2;
    }
    const noop = () => {
    };
    function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
      subscriptions.push(callback);
      const removeSubscription = () => {
        const idx = subscriptions.indexOf(callback);
        if (idx > -1) {
          subscriptions.splice(idx, 1);
          onCleanup();
        }
      };
      if (!detached && getCurrentScope()) {
        onScopeDispose(removeSubscription);
      }
      return removeSubscription;
    }
    function triggerSubscriptions(subscriptions, ...args) {
      subscriptions.slice().forEach((callback) => {
        callback(...args);
      });
    }
    const fallbackRunWithContext = (fn2) => fn2();
    function mergeReactiveObjects(target, patchToApply) {
      if (target instanceof Map && patchToApply instanceof Map) {
        patchToApply.forEach((value, key) => target.set(key, value));
      }
      if (target instanceof Set && patchToApply instanceof Set) {
        patchToApply.forEach(target.add, target);
      }
      for (const key in patchToApply) {
        if (!patchToApply.hasOwnProperty(key))
          continue;
        const subPatch = patchToApply[key];
        const targetValue = target[key];
        if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
          target[key] = mergeReactiveObjects(targetValue, subPatch);
        } else {
          target[key] = subPatch;
        }
      }
      return target;
    }
    const skipHydrateSymbol = (
      /* istanbul ignore next */
      Symbol()
    );
    function shouldHydrate(obj) {
      return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
    }
    const { assign } = Object;
    function isComputed(o) {
      return !!(isRef(o) && o.effect);
    }
    function createOptionsStore(id, options, pinia2, hot) {
      const { state, actions, getters } = options;
      const initialState = pinia2.state.value[id];
      let store;
      function setup() {
        if (!initialState && true) {
          {
            pinia2.state.value[id] = state ? state() : {};
          }
        }
        const localState = toRefs(pinia2.state.value[id]);
        return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name2) => {
          computedGetters[name2] = markRaw(computed(() => {
            setActivePinia(pinia2);
            const store2 = pinia2._s.get(id);
            return getters[name2].call(store2, store2);
          }));
          return computedGetters;
        }, {}));
      }
      store = createSetupStore(id, setup, options, pinia2, hot, true);
      return store;
    }
    function createSetupStore($id, setup, options = {}, pinia2, hot, isOptionsStore) {
      let scope;
      const optionsForPlugin = assign({ actions: {} }, options);
      const $subscribeOptions = {
        deep: true
        // flush: 'post',
      };
      let isListening;
      let isSyncListening;
      let subscriptions = [];
      let actionSubscriptions = [];
      let debuggerEvents;
      const initialState = pinia2.state.value[$id];
      if (!isOptionsStore && !initialState && true) {
        {
          pinia2.state.value[$id] = {};
        }
      }
      ref({});
      let activeListener;
      function $patch(partialStateOrMutator) {
        let subscriptionMutation;
        isListening = isSyncListening = false;
        if (typeof partialStateOrMutator === "function") {
          partialStateOrMutator(pinia2.state.value[$id]);
          subscriptionMutation = {
            type: MutationType.patchFunction,
            storeId: $id,
            events: debuggerEvents
          };
        } else {
          mergeReactiveObjects(pinia2.state.value[$id], partialStateOrMutator);
          subscriptionMutation = {
            type: MutationType.patchObject,
            payload: partialStateOrMutator,
            storeId: $id,
            events: debuggerEvents
          };
        }
        const myListenerId = activeListener = Symbol();
        nextTick$1().then(() => {
          if (activeListener === myListenerId) {
            isListening = true;
          }
        });
        isSyncListening = true;
        triggerSubscriptions(subscriptions, subscriptionMutation, pinia2.state.value[$id]);
      }
      const $reset = isOptionsStore ? function $reset2() {
        const { state } = options;
        const newState = state ? state() : {};
        this.$patch(($state) => {
          assign($state, newState);
        });
      } : (
        /* istanbul ignore next */
        noop
      );
      function $dispose() {
        scope.stop();
        subscriptions = [];
        actionSubscriptions = [];
        pinia2._s.delete($id);
      }
      function wrapAction(name2, action) {
        return function() {
          setActivePinia(pinia2);
          const args = Array.from(arguments);
          const afterCallbackList = [];
          const onErrorCallbackList = [];
          function after(callback) {
            afterCallbackList.push(callback);
          }
          function onError(callback) {
            onErrorCallbackList.push(callback);
          }
          triggerSubscriptions(actionSubscriptions, {
            args,
            name: name2,
            store,
            after,
            onError
          });
          let ret;
          try {
            ret = action.apply(this && this.$id === $id ? this : store, args);
          } catch (error) {
            triggerSubscriptions(onErrorCallbackList, error);
            throw error;
          }
          if (ret instanceof Promise) {
            return ret.then((value) => {
              triggerSubscriptions(afterCallbackList, value);
              return value;
            }).catch((error) => {
              triggerSubscriptions(onErrorCallbackList, error);
              return Promise.reject(error);
            });
          }
          triggerSubscriptions(afterCallbackList, ret);
          return ret;
        };
      }
      const partialStore = {
        _p: pinia2,
        // _s: scope,
        $id,
        $onAction: addSubscription.bind(null, actionSubscriptions),
        $patch,
        $reset,
        $subscribe(callback, options2 = {}) {
          const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
          const stopWatcher = scope.run(() => watch(() => pinia2.state.value[$id], (state) => {
            if (options2.flush === "sync" ? isSyncListening : isListening) {
              callback({
                storeId: $id,
                type: MutationType.direct,
                events: debuggerEvents
              }, state);
            }
          }, assign({}, $subscribeOptions, options2)));
          return removeSubscription;
        },
        $dispose
      };
      const store = reactive(partialStore);
      pinia2._s.set($id, store);
      const runWithContext = pinia2._a && pinia2._a.runWithContext || fallbackRunWithContext;
      const setupStore = runWithContext(() => pinia2._e.run(() => (scope = effectScope()).run(setup)));
      for (const key in setupStore) {
        const prop = setupStore[key];
        if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
          if (!isOptionsStore) {
            if (initialState && shouldHydrate(prop)) {
              if (isRef(prop)) {
                prop.value = initialState[key];
              } else {
                mergeReactiveObjects(prop, initialState[key]);
              }
            }
            {
              pinia2.state.value[$id][key] = prop;
            }
          }
        } else if (typeof prop === "function") {
          const actionValue = wrapAction(key, prop);
          {
            setupStore[key] = actionValue;
          }
          optionsForPlugin.actions[key] = prop;
        } else
          ;
      }
      {
        assign(store, setupStore);
        assign(toRaw(store), setupStore);
      }
      Object.defineProperty(store, "$state", {
        get: () => pinia2.state.value[$id],
        set: (state) => {
          $patch(($state) => {
            assign($state, state);
          });
        }
      });
      pinia2._p.forEach((extender) => {
        {
          assign(store, scope.run(() => extender({
            store,
            app: pinia2._a,
            pinia: pinia2,
            options: optionsForPlugin
          })));
        }
      });
      if (initialState && isOptionsStore && options.hydrate) {
        options.hydrate(store.$state, initialState);
      }
      isListening = true;
      isSyncListening = true;
      return store;
    }
    function defineStore(idOrOptions, setup, setupOptions) {
      let id;
      let options;
      const isSetupStore = typeof setup === "function";
      if (typeof idOrOptions === "string") {
        id = idOrOptions;
        options = isSetupStore ? setupOptions : setup;
      } else {
        options = idOrOptions;
        id = idOrOptions.id;
      }
      function useStore(pinia2, hot) {
        const hasContext = hasInjectionContext();
        pinia2 = // in test mode, ignore the argument provided as we can always retrieve a
        // pinia instance with getActivePinia()
        pinia2 || (hasContext ? inject(piniaSymbol, null) : null);
        if (pinia2)
          setActivePinia(pinia2);
        pinia2 = activePinia;
        if (!pinia2._s.has(id)) {
          if (isSetupStore) {
            createSetupStore(id, setup, options, pinia2);
          } else {
            createOptionsStore(id, options, pinia2);
          }
        }
        const store = pinia2._s.get(id);
        return store;
      }
      useStore.$id = id;
      return useStore;
    }
    function storeToRefs(store) {
      {
        store = toRaw(store);
        const refs = {};
        for (const key in store) {
          const value = store[key];
          if (isRef(value) || isReactive(value)) {
            refs[key] = // ---
            toRef(store, key);
          }
        }
        return refs;
      }
    }
    const mainStore = defineStore("main", {
      state: () => {
        return {
          imgLoadStatus: false,
          // 壁纸加载状态
          innerWidth: null,
          // 当前窗口宽度
          coverType: "0",
          // 壁纸种类
          siteStartShow: false,
          // 建站日期显示
          musicClick: false,
          // 音乐链接是否跳转
          musicIsOk: false,
          // 音乐是否加载完成
          musicVolume: 0,
          // 音乐音量;
          musicOpenState: false,
          // 音乐面板开启状态
          backgroundShow: false,
          // 壁纸展示状态
          boxOpenState: false,
          // 盒子开启状态
          mobileOpenState: false,
          // 移动端开启状态
          mobileFuncState: false,
          // 移动端功能区开启状态
          setOpenState: false,
          // 设置页面开启状态
          playerState: false,
          // 当前播放状态
          playerTitle: null,
          // 当前播放歌曲名
          playerArtist: null,
          // 当前播放歌手名
          playerLrc: "歌词加载中",
          // 当前播放歌词
          playerLrcShow: true,
          // 是否显示底栏歌词
          footerBlur: true,
          // 底栏模糊
          playerAutoplay: false,
          // 是否自动播放
          playerLoop: "all",
          // 循环播放 "all", "one", "none"
          playerOrder: "list"
          // 循环顺序 "list", "random"
        };
      },
      getters: {
        // 获取歌词
        getPlayerLrc(state) {
          return state.playerLrc;
        },
        // 获取歌曲信息
        getPlayerData(state) {
          return {
            name: state.playerTitle,
            artist: state.playerArtist
          };
        },
        // 获取页面宽度
        getInnerWidth(state) {
          return state.innerWidth;
        }
      },
      actions: {
        // 更改当前页面宽度
        setInnerWidth(value) {
          this.innerWidth = value;
          if (value >= 720) {
            this.mobileOpenState = false;
            this.mobileFuncState = false;
          }
        },
        // 更改播放状态
        setPlayerState(value) {
          if (value) {
            this.playerState = false;
          } else {
            this.playerState = true;
          }
        },
        // 更改歌词
        setPlayerLrc(value) {
          this.playerLrc = value;
        },
        // 更改歌曲数据
        setPlayerData(title, artist) {
          this.playerTitle = title;
          this.playerArtist = artist;
        },
        // 更改壁纸加载状态
        setImgLoadStatus(value) {
          this.imgLoadStatus = value;
        }
      },
      persist: {
        key: "data",
        storage: window.localStorage,
        paths: [
          "coverType",
          "musicVolume",
          "siteStartShow",
          "musicClick",
          "playerLrcShow",
          "footerBlur",
          "playerAutoplay",
          "playerLoop",
          "playerOrder"
        ]
      }
    });
    function ampCount(selector) {
      let cnt = 0;
      for (let i = 0; i < selector.length; ++i) {
        if (selector[i] === "&")
          ++cnt;
      }
      return cnt;
    }
    const seperatorRegex = /\s*,(?![^(]*\))\s*/g;
    const extraSpaceRegex = /\s+/g;
    function resolveSelectorWithAmp(amp, selector) {
      const nextAmp = [];
      selector.split(seperatorRegex).forEach((partialSelector) => {
        let round = ampCount(partialSelector);
        if (!round) {
          amp.forEach((partialAmp) => {
            nextAmp.push(
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              (partialAmp && partialAmp + " ") + partialSelector
            );
          });
          return;
        } else if (round === 1) {
          amp.forEach((partialAmp) => {
            nextAmp.push(partialSelector.replace("&", partialAmp));
          });
          return;
        }
        let partialNextAmp = [
          partialSelector
        ];
        while (round--) {
          const nextPartialNextAmp = [];
          partialNextAmp.forEach((selectorItr) => {
            amp.forEach((partialAmp) => {
              nextPartialNextAmp.push(selectorItr.replace("&", partialAmp));
            });
          });
          partialNextAmp = nextPartialNextAmp;
        }
        partialNextAmp.forEach((part) => nextAmp.push(part));
      });
      return nextAmp;
    }
    function resolveSelector(amp, selector) {
      const nextAmp = [];
      selector.split(seperatorRegex).forEach((partialSelector) => {
        amp.forEach((partialAmp) => {
          nextAmp.push((partialAmp && partialAmp + " ") + partialSelector);
        });
      });
      return nextAmp;
    }
    function parseSelectorPath(selectorPaths) {
      let amp = [""];
      selectorPaths.forEach((selector) => {
        selector = selector && selector.trim();
        if (
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          !selector
        ) {
          return;
        }
        if (selector.includes("&")) {
          amp = resolveSelectorWithAmp(amp, selector);
        } else {
          amp = resolveSelector(amp, selector);
        }
      });
      return amp.join(", ").replace(extraSpaceRegex, " ");
    }
    const kebabRegex = /[A-Z]/g;
    function kebabCase(pattern) {
      return pattern.replace(kebabRegex, (match) => "-" + match.toLowerCase());
    }
    function upwrapProperty(prop, indent = "  ") {
      if (typeof prop === "object" && prop !== null) {
        return " {\n" + Object.entries(prop).map((v) => {
          return indent + `  ${kebabCase(v[0])}: ${v[1]};`;
        }).join("\n") + "\n" + indent + "}";
      }
      return `: ${prop};`;
    }
    function upwrapProperties(props, instance, params) {
      if (typeof props === "function") {
        return props({
          context: instance.context,
          props: params
        });
      }
      return props;
    }
    function createStyle(selector, props, instance, params) {
      if (!props)
        return "";
      const unwrappedProps = upwrapProperties(props, instance, params);
      if (!unwrappedProps)
        return "";
      if (typeof unwrappedProps === "string") {
        return `${selector} {
${unwrappedProps}
}`;
      }
      const propertyNames = Object.keys(unwrappedProps);
      if (propertyNames.length === 0) {
        if (instance.config.keepEmptyBlock)
          return selector + " {\n}";
        return "";
      }
      const statements = selector ? [
        selector + " {"
      ] : [];
      propertyNames.forEach((propertyName) => {
        const property = unwrappedProps[propertyName];
        if (propertyName === "raw") {
          statements.push("\n" + property + "\n");
          return;
        }
        propertyName = kebabCase(propertyName);
        if (property !== null && property !== void 0) {
          statements.push(`  ${propertyName}${upwrapProperty(property)}`);
        }
      });
      if (selector) {
        statements.push("}");
      }
      return statements.join("\n");
    }
    function loopCNodeListWithCallback(children, options, callback) {
      if (!children)
        return;
      children.forEach((child) => {
        if (Array.isArray(child)) {
          loopCNodeListWithCallback(child, options, callback);
        } else if (typeof child === "function") {
          const grandChildren = child(options);
          if (Array.isArray(grandChildren)) {
            loopCNodeListWithCallback(grandChildren, options, callback);
          } else if (grandChildren) {
            callback(grandChildren);
          }
        } else if (child) {
          callback(child);
        }
      });
    }
    function traverseCNode(node, selectorPaths, styles, instance, params, styleSheet) {
      const $ = node.$;
      if (!$ || typeof $ === "string") {
        selectorPaths.push($);
      } else if (typeof $ === "function") {
        selectorPaths.push($({
          context: instance.context,
          props: params
        }));
      } else {
        if ($.before)
          $.before(instance.context);
        if (!$.$ || typeof $.$ === "string") {
          selectorPaths.push($.$);
        } else if ($.$) {
          selectorPaths.push($.$({
            context: instance.context,
            props: params
          }));
        }
      }
      const selector = parseSelectorPath(selectorPaths);
      const style2 = createStyle(selector, node.props, instance, params);
      if (styleSheet && style2) {
        styleSheet.insertRule(style2);
      }
      if (!styleSheet && style2.length)
        styles.push(style2);
      if (node.children) {
        loopCNodeListWithCallback(node.children, {
          context: instance.context,
          props: params
        }, (childNode) => {
          if (typeof childNode === "string") {
            const style3 = createStyle(selector, { raw: childNode }, instance, params);
            if (styleSheet) {
              styleSheet.insertRule(style3);
            } else {
              styles.push(style3);
            }
          } else {
            traverseCNode(childNode, selectorPaths, styles, instance, params, styleSheet);
          }
        });
      }
      selectorPaths.pop();
      if ($ && $.after)
        $.after(instance.context);
    }
    function render(node, instance, props, insertRule = false) {
      const styles = [];
      traverseCNode(node, [], styles, instance, props, insertRule ? node.instance.__styleSheet : void 0);
      if (insertRule)
        return "";
      return styles.join("\n\n");
    }
    function murmur2(str) {
      var h2 = 0;
      var k2, i = 0, len = str.length;
      for (; len >= 4; ++i, len -= 4) {
        k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
        k2 = /* Math.imul(k, m): */
        (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
        k2 ^= /* k >>> r: */
        k2 >>> 24;
        h2 = /* Math.imul(k, m): */
        (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
        (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      }
      switch (len) {
        case 3:
          h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
        case 2:
          h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
        case 1:
          h2 ^= str.charCodeAt(i) & 255;
          h2 = /* Math.imul(h, m): */
          (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      }
      h2 ^= h2 >>> 13;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
    }
    function removeElement(el) {
      if (!el)
        return;
      const parentElement = el.parentElement;
      if (parentElement)
        parentElement.removeChild(el);
    }
    function queryElement(id) {
      return document.querySelector(`style[cssr-id="${id}"]`);
    }
    function createElement$1(id) {
      const el = document.createElement("style");
      el.setAttribute("cssr-id", id);
      return el;
    }
    if (window) {
      window.__cssrContext = {};
    }
    function getCount(el) {
      const count = el.getAttribute("mount-count");
      if (count === null)
        return null;
      return Number(count);
    }
    function setCount(el, count) {
      el.setAttribute("mount-count", String(count));
    }
    function unmount(intance, node, id, count) {
      const { els } = node;
      if (id === void 0) {
        els.forEach(removeElement);
        node.els = [];
      } else {
        const target = queryElement(id);
        if (target && els.includes(target)) {
          const mountCount = getCount(target);
          if (!count) {
            if (mountCount !== null) {
              console.error(`[css-render/unmount]: The style with target='${id}' is mounted in no-count mode.`);
            } else {
              removeElement(target);
              node.els = els.filter((el) => el !== target);
            }
          } else {
            if (mountCount === null) {
              console.error(`[css-render/unmount]: The style with target='${id}' is mounted in count mode.`);
            } else {
              if (mountCount <= 1) {
                removeElement(target);
                node.els = els.filter((el) => el !== target);
              } else
                setCount(target, mountCount - 1);
            }
          }
        }
      }
    }
    function addElementToList(els, target) {
      els.push(target);
    }
    function mount(instance, node, id, props, head, count, boost, force, ssrAdapter) {
      if (boost && !ssrAdapter) {
        if (id === void 0) {
          console.error("[css-render/mount]: `id` is required in `boost` mode.");
          return;
        }
        const cssrContext = window.__cssrContext;
        if (!cssrContext[id]) {
          cssrContext[id] = true;
          render(node, instance, props, boost);
        }
        return;
      }
      let target;
      const { els } = node;
      let style2;
      if (id === void 0) {
        style2 = node.render(props);
        id = murmur2(style2);
      }
      if (ssrAdapter) {
        ssrAdapter(id, style2 !== null && style2 !== void 0 ? style2 : node.render(props));
        return;
      }
      const queriedTarget = queryElement(id);
      if (force || queriedTarget === null) {
        target = queriedTarget === null ? createElement$1(id) : queriedTarget;
        if (style2 === void 0)
          style2 = node.render(props);
        target.textContent = style2;
        if (queriedTarget !== null)
          return;
        if (head) {
          const firstStyleEl = document.head.getElementsByTagName("style")[0] || null;
          document.head.insertBefore(target, firstStyleEl);
        } else {
          document.head.appendChild(target);
        }
        if (count) {
          setCount(target, 1);
        }
        addElementToList(els, target);
      } else {
        const mountCount = getCount(queriedTarget);
        if (count) {
          if (mountCount === null) {
            console.error(`[css-render/mount]: The style with id='${id}' has been mounted in no-count mode.`);
          } else {
            setCount(queriedTarget, mountCount + 1);
          }
        } else {
          if (mountCount !== null) {
            console.error(`[css-render/mount]: The style with id='${id}' has been mounted in count mode.`);
          }
        }
      }
      return queriedTarget !== null && queriedTarget !== void 0 ? queriedTarget : target;
    }
    function wrappedRender(props) {
      return render(this, this.instance, props);
    }
    function wrappedMount(options = {}) {
      const { target, id, ssr, props, count = false, head = false, boost = false, force = false } = options;
      const targetElement = mount(this.instance, this, id !== null && id !== void 0 ? id : target, props, head, count, boost, force, ssr);
      return targetElement;
    }
    function wrappedUnmount(options = {}) {
      const { id, target, delay = 0, count = false } = options;
      if (delay === 0)
        unmount(this.instance, this, id !== null && id !== void 0 ? id : target, count);
      else {
        setTimeout(() => unmount(this.instance, this, id !== null && id !== void 0 ? id : target, count), delay);
      }
    }
    const createCNode = function(instance, $, props, children) {
      return {
        instance,
        $,
        props,
        children,
        els: [],
        render: wrappedRender,
        mount: wrappedMount,
        unmount: wrappedUnmount
      };
    };
    const c$2 = function(instance, $, props, children) {
      if (Array.isArray($)) {
        return createCNode(instance, { $: null }, null, $);
      }
      if (Array.isArray(props)) {
        return createCNode(instance, $, null, props);
      } else if (Array.isArray(children)) {
        return createCNode(instance, $, props, children);
      } else {
        return createCNode(instance, $, props, null);
      }
    };
    function CssRender(config2 = {}) {
      let styleSheet = null;
      const cssr = {
        c: (...args) => c$2(cssr, ...args),
        use: (plugin, ...args) => plugin.install(cssr, ...args),
        find: queryElement,
        context: {},
        config: config2,
        get __styleSheet() {
          if (!styleSheet) {
            const style2 = document.createElement("style");
            document.head.appendChild(style2);
            styleSheet = document.styleSheets[document.styleSheets.length - 1];
            return styleSheet;
          }
          return styleSheet;
        }
      };
      return cssr;
    }
    const { c: c$1 } = CssRender();
    const style$1 = c$1(".xicon", {
      width: "1em",
      height: "1em",
      display: "inline-flex"
    }, [
      c$1("svg", {
        width: "1em",
        height: "1em"
      }),
      c$1("svg:not([fill])", {
        fill: "currentColor"
      })
    ]);
    const mountStyle = () => {
      style$1.mount({ id: "xicons-icon" });
    };
    const iconConfigProviderProps = {
      size: [String, Number],
      color: String,
      tag: String
    };
    const iconConfigInjectionKey = Symbol("IconConfigInjection");
    const defaultTag = "span";
    const Icon = /* @__PURE__ */ defineComponent({
      name: "Icon",
      props: iconConfigProviderProps,
      setup(props, { slots }) {
        const IconConfigProvider = inject(iconConfigInjectionKey, null);
        const mergedSizeRef = computed(() => {
          var _a2;
          const _size = (_a2 = props.size) !== null && _a2 !== void 0 ? _a2 : IconConfigProvider === null || IconConfigProvider === void 0 ? void 0 : IconConfigProvider.size;
          if (_size === void 0) {
            return void 0;
          }
          if (typeof _size === "number" || /^\d+$/.test(_size))
            return `${_size}px`;
          return _size;
        });
        const mergedColorRef = computed(() => {
          const { color } = props;
          if (color === void 0) {
            if (IconConfigProvider) {
              return IconConfigProvider.color;
            }
            return void 0;
          }
          return color;
        });
        const mergedTagRef = computed(() => {
          var _a2;
          const { tag } = props;
          if (tag === void 0) {
            return (_a2 = IconConfigProvider === null || IconConfigProvider === void 0 ? void 0 : IconConfigProvider.tag) !== null && _a2 !== void 0 ? _a2 : defaultTag;
          }
          return tag;
        });
        onBeforeMount(() => {
          mountStyle();
        });
        return () => h(mergedTagRef.value, {
          class: "xicon",
          style: {
            color: mergedColorRef.value,
            fontSize: mergedSizeRef.value
          }
        }, [
          renderSlot(slots, "default")
        ]);
      }
    });
    const Loading_vue_vue_type_style_index_0_scoped_d7fe35e2_lang = "";
    const _export_sfc = (sfc, props) => {
      const target = sfc.__vccOpts || sfc;
      for (const [key, val] of props) {
        target[key] = val;
      }
      return target;
    };
    const _withScopeId$6 = (n) => (pushScopeId("data-v-d7fe35e2"), n = n(), popScopeId(), n);
    const _hoisted_1$v = { class: "loader" };
    const _hoisted_2$u = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "loader-circle" }, null, -1));
    const _hoisted_3$s = { class: "loader-text" };
    const _hoisted_4$b = { class: "name" };
    const _hoisted_5$b = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("span", { class: "tip" }, " 加载中 ", -1));
    const _hoisted_6$a = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "loader-section section-left" }, null, -1));
    const _hoisted_7$6 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("div", { class: "loader-section section-right" }, null, -1));
    const _sfc_main$i = {
      __name: "Loading",
      setup(__props) {
        const store = mainStore();
        const siteName = "297&web";
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            id: "loader-wrapper",
            class: normalizeClass(unref(store).imgLoadStatus ? "loaded" : null)
          }, [
            createBaseVNode("div", _hoisted_1$v, [
              _hoisted_2$u,
              createBaseVNode("div", _hoisted_3$s, [
                createBaseVNode("span", _hoisted_4$b, toDisplayString(unref(siteName)), 1),
                _hoisted_5$b
              ])
            ]),
            _hoisted_6$a,
            _hoisted_7$6
          ], 2);
        };
      }
    };
    const Loading = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-d7fe35e2"]]);
    const _hoisted_1$u = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 512 512"
    };
    const _hoisted_2$t = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22c18.2 6.8 31.3 24.4 31.3 45c0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7c54.4-11.4 98.3-55.4 109.7-109.7c17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9c129.4 7 233.4 112 240.9 241.5c.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9c76.8 6.3 138 68.2 144.9 145.2c.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3c-8.4-110.1-96.5-198.2-206.6-206.7z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$r = [_hoisted_2$t];
    const Blog = /* @__PURE__ */ defineComponent({
      name: "Blog",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$u, _hoisted_3$r);
      }
    });
    const _hoisted_1$t = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 448 512"
    };
    const _hoisted_2$s = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7c-4.2-15.4-4.2-59.3 0-74.7c5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32c0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$q = [_hoisted_2$s];
    const Book = /* @__PURE__ */ defineComponent({
      name: "Book",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_3$q);
      }
    });
    const _hoisted_1$s = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 640 512"
    };
    const _hoisted_2$r = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160c0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$p = [_hoisted_2$r];
    const Cloud = /* @__PURE__ */ defineComponent({
      name: "Cloud",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$s, _hoisted_3$p);
      }
    });
    const _hoisted_1$r = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 496 512"
    };
    const _hoisted_2$q = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$o = [_hoisted_2$q];
    const CompactDisc = /* @__PURE__ */ defineComponent({
      name: "CompactDisc",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$r, _hoisted_3$o);
      }
    });
    const _hoisted_1$q = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 496 512"
    };
    const _hoisted_2$p = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25c12.49 12.5 32.76 12.5 45.25 0c12.5-12.5 12.5-32.76 0-45.25c-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248s248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$n = [_hoisted_2$p];
    const Compass = /* @__PURE__ */ defineComponent({
      name: "Compass",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_3$n);
      }
    });
    const _hoisted_1$p = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 384 512"
    };
    const _hoisted_2$o = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99c-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$m = [_hoisted_2$o];
    const Fire = /* @__PURE__ */ defineComponent({
      name: "Fire",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_3$m);
      }
    });
    const _hoisted_1$o = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 384 512"
    };
    const _hoisted_2$n = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4l-97.9 27v.3h-1.1l-98.7-27.3l-6-75.8h47.7L138 320l53.5 14.5l53.7-14.5l6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$l = [_hoisted_2$n];
    const Html5 = /* @__PURE__ */ defineComponent({
      name: "Html5",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_3$l);
      }
    });
    const _hoisted_1$n = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 448 512"
    };
    const _hoisted_2$m = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5c-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$k = [_hoisted_2$m];
    const JsSquare = /* @__PURE__ */ defineComponent({
      name: "JsSquare",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_3$k);
      }
    });
    const _hoisted_1$m = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 640 512"
    };
    const _hoisted_2$l = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$j = [_hoisted_2$l];
    const LaptopCode = /* @__PURE__ */ defineComponent({
      name: "LaptopCode",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$j);
      }
    });
    const _hoisted_1$l = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 512 512"
    };
    const _hoisted_2$k = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$i = [_hoisted_2$k];
    const Link$1 = /* @__PURE__ */ defineComponent({
      name: "Link",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$i);
      }
    });
    const _hoisted_1$k = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 640 512"
    };
    const _hoisted_2$j = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5c3.8-1.3 4.6-1.6 8.7-4c.4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18c-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2c-18-2.4-19.8-3.6-19.8-7.8c0-3.5 1.5-8.1 14.8-8.1c11.9 0 16.3 2.6 18.1 10.6c.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5c.3-.4.5-.8.4-1.3c-1.2-13.8-10.3-20.2-28.8-20.2c-16.5 0-26.3 7-26.3 18.6c0 12.7 9.8 16.1 25.6 17.7c18.9 1.9 20.4 4.6 20.4 8.3c0 6.5-5.2 9.2-17.4 9.2c-15.3 0-18.7-3.8-19.8-11.4c-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7c0 9.7 5.3 21.3 30.6 21.3c18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1c6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3c-5.1 0-9.3 4.1-9.3 9.3c0 5.2 4.2 9.4 9.3 9.4c5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9c-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3c0 2.3-1.5 2.8-2.4 3.1c1.7.1 1.8 1.2 2.1 2.8c.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2c1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1c1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0c1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7c.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$h = [_hoisted_2$j];
    const Node = /* @__PURE__ */ defineComponent({
      name: "Node",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_3$h);
      }
    });
    const _hoisted_1$j = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 512 512"
    };
    const _hoisted_2$i = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$g = [_hoisted_2$i];
    const QuoteLeft = /* @__PURE__ */ defineComponent({
      name: "QuoteLeft",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$g);
      }
    });
    const _hoisted_1$i = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 512 512"
    };
    const _hoisted_2$h = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$f = [_hoisted_2$h];
    const QuoteRight = /* @__PURE__ */ defineComponent({
      name: "QuoteRight",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$f);
      }
    });
    const _hoisted_1$h = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 512 512"
    };
    const _hoisted_2$g = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1c.9-3.7 1.7-7.4 2.5-11.1c12.3-59.6 4.2-107.5-23.1-123.3c-26.3-15.1-69.2.6-112.6 38.4c-4.3 3.7-8.5 7.6-12.5 11.5c-2.7-2.6-5.5-5.2-8.3-7.7c-45.5-40.4-91.1-57.4-118.4-41.5c-26.2 15.2-34 60.3-23 116.7c1.1 5.6 2.3 11.1 3.7 16.7c-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5c4.5 1.5 9 3 13.6 4.3c-1.5 6-2.8 11.9-4 18c-10.5 55.5-2.3 99.5 23.9 114.6c27 15.6 72.4-.4 116.6-39.1c3.5-3.1 7-6.3 10.5-9.7c4.4 4.3 9 8.4 13.6 12.4c42.8 36.8 85.1 51.7 111.2 36.6c27-15.6 35.8-62.9 24.4-120.5c-.9-4.4-1.9-8.9-3-13.5c3.2-.9 6.3-1.9 9.4-2.9c57.7-19.1 99.5-50 99.5-81.7c0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36c16.9 9.7 23.4 48.9 12.8 100.4c-.7 3.4-1.4 6.7-2.3 10c-22.2-5-44.7-8.6-67.3-10.6c-13-18.6-27.2-36.4-42.6-53.1c3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9c-15.6-1.7-31.1-4.2-46.4-7.5c4.4-14.4 9.9-29.3 16.3-44.5c4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8c-5.3 8.3-10.5 16.8-15.4 25.4c-4.9 8.5-9.7 17.2-14.2 26c-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8c-7.6 13.3-15.7 26.2-24.2 39c-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7c6.4 14.5 12 29.2 16.9 44.3c-15.5 3.5-31.2 6.2-47 8c5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2c-4.9-8.5-10-16.9-15.3-25.2c16.1 2 31.5 4.7 45.9 8c-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8c-19.8-.9-39.7-.9-59.5 0c9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39c2.5 2.2 5 4.6 7.6 7c-15.5 16.7-29.8 34.5-42.9 53.1c-22.6 2-45 5.5-67.2 10.4c-1.3-5.1-2.4-10.3-3.5-15.5c-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9c-21.3-6.7-45.5-17.3-63-31.2c-10.1-7-16.9-17.8-18.8-29.9c0-18.3 31.6-41.7 77.2-57.6c5.7-2 11.5-3.8 17.3-5.5c6.8 21.7 15 43 24.5 63.6c-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3c-11.1 5.3-23.9 5.8-35.3 1.3c-15.9-9.2-22.5-44.5-13.5-92c1.1-5.6 2.3-11.2 3.7-16.7c22.4 4.8 45 8.1 67.9 9.8c13.2 18.7 27.7 36.6 43.2 53.4c-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3c9.6.4 19.5.6 29.5.6c10.3 0 20.4-.2 30.4-.7c-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3c-15.9 9.2-49.8-2.8-86.4-34.2c-4.2-3.6-8.4-7.5-12.7-11.5c15.3-16.9 29.4-34.8 42.2-53.6c22.9-1.9 45.7-5.4 68.2-10.5c1 4.1 1.9 8.2 2.7 12.2c4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6c-7-21.8-15.6-43.1-25.5-63.8c9.6-20.4 17.7-41.4 24.5-62.9c5.2 1.5 10.2 3.1 15 4.7c46.6 16 79.3 39.8 79.3 58c0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$e = [_hoisted_2$g];
    const React = /* @__PURE__ */ defineComponent({
      name: "React",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$e);
      }
    });
    const _hoisted_1$g = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 448 512"
    };
    const _hoisted_2$f = /* @__PURE__ */ createBaseVNode(
      "path",
      {
        d: "M356.9 64.3H280l-56 88.6l-48-88.6H0L224 448L448 64.3h-91.1zm-301.2 32h53.8L224 294.5L338.4 96.3h53.8L224 384.5L55.7 96.3z",
        fill: "currentColor"
      },
      null,
      -1
      /* HOISTED */
    );
    const _hoisted_3$d = [_hoisted_2$f];
    const Vuejs = /* @__PURE__ */ defineComponent({
      name: "Vuejs",
      render: function render2(_ctx, _cache) {
        return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$d);
      }
    });
    const Message_vue_vue_type_style_index_0_scoped_03d4b6aa_lang = "";
    const _hoisted_1$f = { class: "message" };
    const _hoisted_2$e = { class: "logo" };
    const _hoisted_3$c = ["src"];
    const _hoisted_4$a = { class: "bg" };
    const _hoisted_5$a = { class: "sm" };
    const _hoisted_6$9 = { class: "content" };
    const _hoisted_7$5 = { class: "text" };
    const _sfc_main$h = {
      __name: "Message",
      setup(__props) {
        const store = mainStore();
        const siteLogo = "/images/icon/logo.png";
        const siteUrl = computed(() => {
          const url = "chenxq";
          if (url.startsWith("http://") || url.startsWith("https://")) {
            const urlFormat = url.replace(/^(https?:\/\/)/, "");
            return urlFormat.split(".");
          }
          return url.split(".");
        });
        const descriptionText = reactive({
          hello: "About This",
          text: "一个记录着关于前端技术总结思维导图的小站"
        });
        const changeBox = () => {
          if (store.getInnerWidth >= 990) {
            store.boxOpenState = !store.boxOpenState;
          } else {
            ElMessage({
              message: "当前页面宽度不足以开启盒子",
              grouping: true,
              icon: h(Error$1, {
                theme: "filled",
                fill: "#efefef"
              })
            });
          }
        };
        watch(
          () => store.boxOpenState,
          (value) => {
            if (value) {
              descriptionText.hello = "Oops !";
              descriptionText.text = "哎呀，这都被你发现了（ 再点击一次可关闭 ）";
            } else {
              descriptionText.hello = "About This";
              descriptionText.text = "一个记录着关于前端技术总结思维导图的小站";
            }
          }
        );
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", _hoisted_1$f, [
            createBaseVNode("div", _hoisted_2$e, [
              createBaseVNode("img", {
                class: "logo-img",
                src: unref(siteLogo),
                alt: "logo"
              }, null, 8, _hoisted_3$c),
              createBaseVNode("div", {
                class: normalizeClass({ name: true, "text-hidden": true, long: unref(siteUrl)[0].length >= 6 })
              }, [
                createBaseVNode("span", _hoisted_4$a, toDisplayString(unref(siteUrl)[0]), 1),
                createBaseVNode("span", _hoisted_5$a, "." + toDisplayString(unref(siteUrl)[1]), 1)
              ], 2)
            ]),
            createBaseVNode("div", {
              class: "description cards",
              onClick: changeBox
            }, [
              createBaseVNode("div", _hoisted_6$9, [
                createVNode(unref(Icon), { size: "16" }, {
                  default: withCtx(() => [
                    createVNode(unref(QuoteLeft))
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_7$5, [
                  createBaseVNode("p", null, toDisplayString(unref(descriptionText).hello), 1),
                  createBaseVNode("p", null, toDisplayString(unref(descriptionText).text), 1)
                ]),
                createVNode(unref(Icon), { size: "16" }, {
                  default: withCtx(() => [
                    createVNode(unref(QuoteRight))
                  ]),
                  _: 1
                })
              ])
            ])
          ]);
        };
      }
    };
    const Message = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-03d4b6aa"]]);
    const socialLinks = [
      {
        name: "Github",
        icon: "/images/icon/github.png",
        tip: "去 Github 看看",
        url: "https://github.com/chenxq-297"
      },
      {
        name: "BiliBili",
        icon: "/images/icon/bilibili.png",
        tip: "(゜-゜)つロ 干杯 ~",
        url: "https://space.bilibili.com/85639075"
      },
      {
        name: "Telegram",
        icon: "/images/icon/telegram.png",
        tip: "电ロ~电报 ~",
        url: "https://t.me/quan297/"
      }
    ];
    const SocialLinks_vue_vue_type_style_index_0_scoped_4c3b376d_lang = "";
    const _hoisted_1$e = { class: "social" };
    const _hoisted_2$d = { class: "link" };
    const _hoisted_3$b = ["href", "onMouseenter"];
    const _hoisted_4$9 = ["src"];
    const _hoisted_5$9 = { class: "tip" };
    const _sfc_main$g = {
      __name: "SocialLinks",
      setup(__props) {
        const socialTip = ref("通过这里联系我吧");
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", _hoisted_1$e, [
            createBaseVNode("div", _hoisted_2$d, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(socialLinks), (item) => {
                return openBlock(), createElementBlock("a", {
                  key: item.name,
                  href: item.url,
                  target: "_blank",
                  onMouseenter: ($event) => socialTip.value = item.tip,
                  onMouseleave: _cache[0] || (_cache[0] = ($event) => socialTip.value = "通过这里联系我吧")
                }, [
                  createBaseVNode("img", {
                    class: "icon",
                    src: item.icon,
                    height: "24"
                  }, null, 8, _hoisted_4$9)
                ], 40, _hoisted_3$b);
              }), 128))
            ]),
            createBaseVNode("span", _hoisted_5$9, toDisplayString(unref(socialTip)), 1)
          ]);
        };
      }
    };
    const SocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-4c3b376d"]]);
    const Left_vue_vue_type_style_index_0_scoped_82ebc9a3_lang = "";
    const _sfc_main$f = {
      __name: "Left",
      setup(__props) {
        const store = mainStore();
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(unref(store).mobileOpenState ? "left hidden" : "left")
          }, [
            createVNode(Message),
            createVNode(SocialLinks)
          ], 2);
        };
      }
    };
    const MainLeft = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-82ebc9a3"]]);
    const elRow = "";
    const elCol = "";
    const elSlider = "";
    const elInputNumber = "";
    const elInput = "";
    const elTooltip = "";
    const elPopper = "";
    var fetchJsonp$1 = { exports: {} };
    (function(module2, exports2) {
      (function(global2, factory) {
        {
          factory(exports2, module2);
        }
      })(commonjsGlobal, function(exports3, module3) {
        var defaultOptions = {
          timeout: 5e3,
          jsonpCallback: "callback",
          jsonpCallbackFunction: null
        };
        function generateCallbackFunction() {
          return "jsonp_" + Date.now() + "_" + Math.ceil(Math.random() * 1e5);
        }
        function clearFunction(functionName) {
          try {
            delete window[functionName];
          } catch (e) {
            window[functionName] = void 0;
          }
        }
        function removeScript(scriptId) {
          var script = document.getElementById(scriptId);
          if (script) {
            document.getElementsByTagName("head")[0].removeChild(script);
          }
        }
        function fetchJsonp2(_url) {
          var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
          var url = _url;
          var timeout2 = options.timeout || defaultOptions.timeout;
          var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;
          var timeoutId = void 0;
          return new Promise(function(resolve2, reject) {
            var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
            var scriptId = jsonpCallback + "_" + callbackFunction;
            window[callbackFunction] = function(response) {
              resolve2({
                ok: true,
                // keep consistent with fetch API
                json: function json() {
                  return Promise.resolve(response);
                }
              });
              if (timeoutId)
                clearTimeout(timeoutId);
              removeScript(scriptId);
              clearFunction(callbackFunction);
            };
            url += url.indexOf("?") === -1 ? "?" : "&";
            var jsonpScript = document.createElement("script");
            jsonpScript.setAttribute("src", "" + url + jsonpCallback + "=" + callbackFunction);
            if (options.charset) {
              jsonpScript.setAttribute("charset", options.charset);
            }
            if (options.nonce) {
              jsonpScript.setAttribute("nonce", options.nonce);
            }
            if (options.referrerPolicy) {
              jsonpScript.setAttribute("referrerPolicy", options.referrerPolicy);
            }
            if (options.crossorigin) {
              jsonpScript.setAttribute("crossorigin", "true");
            }
            jsonpScript.id = scriptId;
            document.getElementsByTagName("head")[0].appendChild(jsonpScript);
            timeoutId = setTimeout(function() {
              reject(new Error("JSONP request to " + _url + " timed out"));
              clearFunction(callbackFunction);
              removeScript(scriptId);
              window[callbackFunction] = function() {
                clearFunction(callbackFunction);
              };
            }, timeout2);
            jsonpScript.onerror = function() {
              reject(new Error("JSONP request to " + _url + " failed"));
              clearFunction(callbackFunction);
              removeScript(scriptId);
              if (timeoutId)
                clearTimeout(timeoutId);
            };
          });
        }
        module3.exports = fetchJsonp2;
      });
    })(fetchJsonp$1, fetchJsonp$1.exports);
    var fetchJsonpExports = fetchJsonp$1.exports;
    const fetchJsonp = /* @__PURE__ */ getDefaultExportFromCjs(fetchJsonpExports);
    const getPlayerList = (server, type2, id) => __async(exports, null, function* () {
      const res = yield fetch(
        `${"https://api-meting.imsyy.top/api"}?server=${server}&type=${type2}&id=${id}`
      );
      const data = yield res.json();
      if (data[0].url.startsWith("@")) {
        const [handle, jsonpCallback, jsonpCallbackFunction, url] = data[0].url.split("@").slice(1);
        const jsonpData = yield fetchJsonp(url).then((res2) => res2.json());
        const domain = (jsonpData.req_0.data.sip.find((i) => !i.startsWith("http://ws")) || jsonpData.req_0.data.sip[0]).replace("http://", "https://");
        return data.map((v, i) => ({
          name: v.name || v.title,
          artist: v.artist || v.author,
          url: domain + jsonpData.req_0.data.midurlinfo[i].purl,
          cover: v.cover || v.pic,
          lrc: v.lrc
        }));
      } else {
        return data.map((v) => ({
          name: v.name || v.title,
          artist: v.artist || v.author,
          url: v.url,
          cover: v.cover || v.pic,
          lrc: v.lrc
        }));
      }
    });
    const getHitokoto = () => __async(exports, null, function* () {
      const res = yield fetch("https://v1.hitokoto.cn");
      return yield res.json();
    });
    const getAdcode = (key) => __async(exports, null, function* () {
      const res = yield fetch(`https://restapi.amap.com/v3/ip?key=${key}`);
      return yield res.json();
    });
    const getWeather = (key, city) => __async(exports, null, function* () {
      const res = yield fetch(
        `https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${city}`
      );
      return yield res.json();
    });
    const getOtherWeather = () => __async(exports, null, function* () {
      const res = yield fetch("https://api.oioweb.cn/api/weather/GetWeather");
      return yield res.json();
    });
    const style = "";
    var D = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function j(e) {
      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var z = { exports: {} };
    (function(e, t) {
      (function(a, s) {
        e.exports = s();
      })(D, function() {
        if (typeof window == "object" && !(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0)) {
          var a = function(o, h2) {
            return o.nodeName === "HTML" ? -h2 : o.getBoundingClientRect().top + h2;
          }, s = function(o) {
            return o < 0.5 ? 4 * o * o * o : (o - 1) * (2 * o - 2) * (2 * o - 2) + 1;
          }, l = function(o, h2, m, u) {
            return m > u ? h2 : o + (h2 - o) * s(m / u);
          }, d = function(o, h2, m, u) {
            h2 = h2 || 500, u = u || window;
            var L = u.scrollTop || window.pageYOffset;
            if (typeof o == "number")
              var E2 = parseInt(o);
            else
              var E2 = a(o, L);
            var H2 = Date.now(), V = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function($) {
              window.setTimeout($, 15);
            }, x = function() {
              var $ = Date.now() - H2;
              u !== window ? u.scrollTop = l(L, E2, $, h2) : window.scroll(0, l(L, E2, $, h2)), $ > h2 ? typeof m == "function" && m(o) : V(x);
            };
            x();
          }, r = function(o) {
            if (!o.defaultPrevented) {
              o.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash);
              var h2 = document.getElementById(this.hash.substring(1));
              if (!h2)
                return;
              d(h2, 500, function(m) {
                location.replace("#" + m.id);
              });
            }
          };
          return document.addEventListener("DOMContentLoaded", function() {
            for (var o = document.querySelectorAll('a[href^="#"]:not([href="#"])'), h2, m = o.length; h2 = o[--m]; )
              h2.addEventListener("click", r, false);
          }), d;
        }
      });
    })(z);
    var Y = z.exports;
    const N = /* @__PURE__ */ j(Y), k = /mobile/i.test(window.navigator.userAgent), W = {
      isMobile: k,
      eventsName: {
        moveStart: k ? "touchstart" : "mousedown",
        moving: k ? "touchmove" : "mousemove",
        moveEnd: k ? "touchend" : "mouseup"
      },
      storage: {
        set: (e, t) => {
          localStorage.setItem(e, t);
        },
        get: (e) => {
          localStorage.getItem(e);
        }
      },
      /**
       * Parse Second to Time String
       *
       * @param {Number} second
       * @return {String} 00:00 or 00:00:00
       */
      secondToTime: (e) => {
        const t = (d) => d < 10 ? "0" + d : "" + d, a = Math.floor(e / 3600), s = Math.floor((e - a * 3600) / 60), l = Math.floor(e - a * 3600 - s * 60);
        return (a > 0 ? [a, s, l] : [s, l]).map(t).join(":");
      },
      randomOrder: (e) => {
        function t(a) {
          for (let s = a.length - 1; s >= 0; s--) {
            const l = Math.floor(Math.random() * (s + 1)), d = a[l];
            a[l] = a[s], a[s] = d;
          }
          return a;
        }
        return t(
          [...Array(e)].map(function(a, s) {
            return s;
          })
        );
      },
      /**
       * Parse Lyric String to Array
       * 
       * @param {String} lyricStr 
       * @return {Array} [[0, "APlayer"], [1.2, "is"], [34.56, "Amazing"]]
       */
      parse(e) {
        if (e) {
          e = e.replace(/([^\]^\n])\[/g, (s, l) => l + `
[`);
          let t = e.split(`
`), a = [];
          for (let s = 0; s < t.length; s++) {
            const l = t[s].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), d = t[s].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
            if (l)
              for (let r = 0; r < l.length; r++) {
                const o = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(l[r]), h2 = o[1] * 60, m = parseInt(o[2]), u = o[4] ? parseInt(o[4]) / ((o[4] + "").length === 2 ? 100 : 1e3) : 0, L = h2 + m + u;
                a.push([L, d]);
              }
          }
          return a = a.filter((s) => s[1]), a.sort((s, l) => s[0] - l[0]), a;
        } else
          return [];
      }
    }, c = W, X = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 31"
    }, J = /* @__PURE__ */ createBaseVNode("path", { d: "M15.552 15.168q.448.32.448.832 0 .448-.448.768L1.856 25.28q-.768.512-1.312.192T0 24.192V7.744q0-.96.544-1.28t1.312.192z" }, null, -1), G = [
      J
    ];
    function Q(e, t) {
      return openBlock(), createElementBlock("svg", X, [...G]);
    }
    const K = { render: Q }, Z = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 17 32"
    }, ee = /* @__PURE__ */ createBaseVNode("path", { d: "M14.08 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112V6.848q0-2.048 2.88-2.048m-11.2 0q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112T0 25.088V6.848Q0 4.8 2.88 4.8" }, null, -1), te = [
      ee
    ];
    function ae(e, t) {
      return openBlock(), createElementBlock("svg", Z, [...te]);
    }
    const ie = { render: ae }, se = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 28 32"
    }, oe = /* @__PURE__ */ createBaseVNode("path", { d: "M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8M20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16m4.576 0q0 2.72-1.536 5.056t-4 3.36q-.256.096-.448.096-.48 0-.832-.352t-.32-.8q0-.704.672-1.056 1.024-.512 1.376-.8 1.312-.96 2.048-2.4T22.848 16t-.736-3.104-2.048-2.4q-.352-.288-1.376-.8-.672-.352-.672-1.056 0-.448.32-.8t.8-.352q.224 0 .48.096 2.496 1.056 4 3.36T25.152 16m4.576 0q0 4.096-2.272 7.552t-6.048 5.056q-.224.096-.448.096-.48 0-.832-.352t-.32-.8q0-.64.704-1.056l.384-.192q.256-.128.416-.192.8-.448 1.44-.896 2.208-1.632 3.456-4.064T27.424 16t-1.216-5.152-3.456-4.064q-.64-.448-1.44-.896-.128-.096-.416-.192t-.384-.192q-.704-.416-.704-1.056 0-.448.32-.8t.832-.352q.224 0 .448.096 3.776 1.632 6.048 5.056T29.728 16" }, null, -1), re = [
      oe
    ];
    function le(e, t) {
      return openBlock(), createElementBlock("svg", se, [...re]);
    }
    const ne = { render: le }, de = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 28 32"
    }, he = /* @__PURE__ */ createBaseVNode("path", { d: "M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8M20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16" }, null, -1), ue = [
      he
    ];
    function pe(e, t) {
      return openBlock(), createElementBlock("svg", de, [...ue]);
    }
    const ce = { render: pe }, ye = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 28 32"
    }, me = /* @__PURE__ */ createBaseVNode("path", { d: "M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8" }, null, -1), fe = [
      me
    ];
    function ve(e, t) {
      return openBlock(), createElementBlock("svg", ye, [...fe]);
    }
    const ge = { render: ve }, we = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, Se = /* @__PURE__ */ createBaseVNode("path", { d: "m22.667 4 7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827L20.668 20h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653V4zm-20 4h6l3.76 3.76L9.6 14.587 7.013 12H2.666z" }, null, -1), Te = [
      Se
    ];
    function Le(e, t) {
      return openBlock(), createElementBlock("svg", we, [...Te]);
    }
    const $e = { render: Le }, _e = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, Be = /* @__PURE__ */ createBaseVNode("path", { d: "M.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549H.622z" }, null, -1), be = [
      Be
    ];
    function ke(e, t) {
      return openBlock(), createElementBlock("svg", _e, [...be]);
    }
    const Me = { render: ke }, Ee = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 22 32"
    }, Re = /* @__PURE__ */ createBaseVNode("path", { d: "M20.8 14.4q.704 0 1.152.48T22.4 16t-.48 1.12-1.12.48H1.6q-.64 0-1.12-.48T0 16t.448-1.12T1.6 14.4zM1.6 11.2q-.64 0-1.12-.48T0 9.6t.448-1.12T1.6 8h19.2q.704 0 1.152.48T22.4 9.6t-.48 1.12-1.12.48zm19.2 9.6q.704 0 1.152.48t.448 1.12-.48 1.12-1.12.48H1.6q-.64 0-1.12-.48T0 22.4t.448-1.12T1.6 20.8z" }, null, -1), Ce = [
      Re
    ];
    function qe(e, t) {
      return openBlock(), createElementBlock("svg", Ee, [...Ce]);
    }
    const xe = { render: qe }, Ne = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 29 32"
    }, Oe = /* @__PURE__ */ createBaseVNode("path", { d: "M9.333 9.333h13.333v4L27.999 8l-5.333-5.333v4h-16v8h2.667zm13.334 13.334H9.334v-4L4.001 24l5.333 5.333v-4h16v-8h-2.667v5.333z" }, null, -1), Ae = [
      Oe
    ];
    function Ie(e, t) {
      return openBlock(), createElementBlock("svg", Ne, [...Ae]);
    }
    const ze = { render: Ie }, Fe = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 33 32"
    }, He = /* @__PURE__ */ createBaseVNode("path", { d: "M9.333 9.333h13.333v4L27.999 8l-5.333-5.333v4h-16v8h2.667zm13.334 13.334H9.334v-4L4.001 24l5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8H16l-2.667 1.333v1.333h2v5.333z" }, null, -1), Ve = [
      He
    ];
    function Ue(e, t) {
      return openBlock(), createElementBlock("svg", Fe, [...Ve]);
    }
    const Pe = { render: Ue }, De = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 29 32"
    }, je = /* @__PURE__ */ createBaseVNode("path", { d: "m2.667 7.027 1.707-1.693 22.293 22.293-1.693 1.707-4-4H9.334v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v.973H6.667v-3.64zm20 10.306h2.667v5.573l-2.667-2.667v-2.907zm0-10.666v-4L28 8l-5.333 5.333v-4H11.76L9.093 6.666z" }, null, -1), Ye = [
      je
    ];
    function We(e, t) {
      return openBlock(), createElementBlock("svg", De, [...Ye]);
    }
    const Xe = { render: We }, Je = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, Ge = /* @__PURE__ */ createBaseVNode("path", { d: "M4 16C4 9.4 9.4 4 16 4s12 5.4 12 12c0 1.2-.8 2-2 2s-2-.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 .8 2 2s-.8 2-2 2C9.4 28 4 22.6 4 16" }, null, -1), Qe = [
      Ge
    ];
    function Ke(e, t) {
      return openBlock(), createElementBlock("svg", Je, [...Qe]);
    }
    const Ze = { render: Ke }, et = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, tt = /* @__PURE__ */ createBaseVNode("path", { d: "M22 16 11.895 5.4 10 7.387 18.211 16 10 24.612l1.895 1.988 8.211-8.613z" }, null, -1), at = [
      tt
    ];
    function it(e, t) {
      return openBlock(), createElementBlock("svg", et, [...at]);
    }
    const st = { render: it }, ot = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, rt = /* @__PURE__ */ createBaseVNode("path", { d: "M25.468 6.947a1 1 0 0 0-1.03.057L18 11.384V7.831a1.001 1.001 0 0 0-1.562-.827l-12 8.164a1 1 0 0 0 0 1.654l12 8.168A.999.999 0 0 0 18 24.164v-3.556l6.438 4.382A.999.999 0 0 0 26 24.164V7.831c0-.371-.205-.71-.532-.884" }, null, -1), lt = [
      rt
    ];
    function nt(e, t) {
      return openBlock(), createElementBlock("svg", ot, [...lt]);
    }
    const dt = { render: nt }, ht = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, ut = /* @__PURE__ */ createBaseVNode("path", { d: "M26.667 5.333H5.333a2.667 2.667 0 0 0-2.666 2.666v16.002a2.667 2.667 0 0 0 2.666 2.666h21.335a2.667 2.667 0 0 0 2.666-2.666V7.999a2.667 2.667 0 0 0-2.666-2.666zM5.333 16h5.333v2.667H5.333zm13.334 8H5.334v-2.667h13.333zm8 0h-5.333v-2.667h5.333zm0-5.333H13.334V16h13.333z" }, null, -1), pt = [
      ut
    ];
    function ct(e, t) {
      return openBlock(), createElementBlock("svg", ht, [...pt]);
    }
    const yt = { render: ct }, mt = {
      __name: "Icon",
      props: {
        type: {
          type: String
        }
      },
      setup(e) {
        const t = {
          play: K,
          pause: ie,
          volumeUp: ne,
          volumeDown: ce,
          volumeOff: ge,
          orderRandom: $e,
          orderList: Me,
          menu: xe,
          loopAll: ze,
          loopOne: Pe,
          loopNone: Xe,
          loading: Ze,
          right: st,
          skip: dt,
          lrc: yt
        };
        return (a, s) => (openBlock(), createBlock(resolveDynamicComponent(t[e.type])));
      }
    }, F = mt, M = (e, t) => {
      const a = e.__vccOpts || e;
      for (const [s, l] of t)
        a[s] = l;
      return a;
    }, ft = {
      props: ["aplayer"],
      computed: {
        ol() {
          return this.$refs.ol;
        }
      },
      methods: {
        showList() {
          setTimeout(() => {
            this.ol.scrollTop = this.aplayer.index * 33;
          }, 0);
        },
        switchList(e) {
          e !== this.aplayer.index ? (this.$emit("switchList", e), this.$emit("play")) : this.$emit("toggle");
        }
      }
    }, vt = ["onClick"], gt = { class: "aplayer-list-index" }, wt = { class: "aplayer-list-title" }, St = { class: "aplayer-list-author" };
    function Tt(e, t, a, s, l, d) {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["aplayer-list", { "aplayer-list-hide": !a.aplayer.listFolded }]),
        style: normalizeStyle({ "max-height": `${a.aplayer.listMaxHeight}px` })
      }, [
        createBaseVNode("ol", {
          style: normalizeStyle({ "max-height": `${a.aplayer.listMaxHeight}px` }),
          ref: "ol"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.aplayer.audio, (r, o) => (openBlock(), createElementBlock("li", {
            class: normalizeClass({ "aplayer-list-light": o === a.aplayer.index }),
            onClick: (h2) => d.switchList(o)
          }, [
            createBaseVNode("span", {
              class: "aplayer-list-cur",
              style: normalizeStyle({ background: `${a.aplayer.coverColor[a.aplayer.index] || r.theme || a.aplayer.theme}` })
            }, null, 4),
            createBaseVNode("span", gt, toDisplayString(o + 1), 1),
            createBaseVNode("span", wt, toDisplayString(r.name), 1),
            createBaseVNode("span", St, toDisplayString(r.artist ? r.artist : ""), 1)
          ], 10, vt))), 256))
        ], 4)
      ], 6);
    }
    const Lt = /* @__PURE__ */ M(ft, [["render", Tt]]), $t = {
      props: ["aplayer"],
      computed: {
        transformStyle() {
          return {
            transform: `translateY(-${this.aplayer.lyricIndex * 16}px)`,
            webkitTransform: `translateY(-${this.aplayer.lyricIndex * 16}px)`
          };
        }
      }
    }, _t = { class: "aplayer-lrc" };
    function Bt(e, t, a, s, l, d) {
      return openBlock(), createElementBlock("div", _t, [
        createBaseVNode("div", {
          class: "aplayer-lrc-contents",
          style: normalizeStyle(d.transformStyle)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(a.aplayer.lyrics[a.aplayer.index], (r, o) => (openBlock(), createElementBlock("p", {
            class: normalizeClass({ "aplayer-lrc-current": o === a.aplayer.lyricIndex })
          }, toDisplayString(r[1]), 3))), 256))
        ], 4)
      ]);
    }
    const bt = /* @__PURE__ */ M($t, [["render", Bt]]), R = ["one", "all", "none"], C = ["list", "random"], kt = {
      components: {
        utils: c,
        Icon: F
      },
      props: ["aplayer", "audioStatus", "styleStatus"],
      data() {
        return {
          aplayerThumbShowStatus: false,
          volumeBarShowStatus: false
        };
      },
      computed: {
        aplayerBar() {
          return this.$refs.aplayerBar;
        },
        volumeBar() {
          return this.$refs.volumeBar;
        },
        switchVolumeIcon() {
          return this.aplayer.muted || this.aplayer.volume <= 0 ? "volumeOff" : this.aplayer.volume >= 0.95 ? "volumeUp" : "volumeDown";
        },
        audio() {
          return this.aplayer.audio[this.aplayer.index];
        },
        duration() {
          return c.secondToTime(this.audioStatus.duration);
        },
        playedTime: {
          get() {
            return c.secondToTime(this.audioStatus.playedTime);
          },
          set(e) {
            this.$emit("playedTime", e);
          }
        },
        disableTimeUpdate: {
          get() {
            return this.audioStatus.disableTimeUpdate;
          },
          set(e) {
            this.$emit("disableTimeUpdate", e);
          }
        }
      },
      methods: {
        loopButtonClick() {
          let e = R.indexOf(this.aplayer.loop);
          e = (e + 1) % R.length, this.$emit("setLoop", R[e]);
        },
        orderButtonClick() {
          let e = C.indexOf(this.aplayer.order);
          e = (e + 1) % C.length, this.$emit("setOrder", C[e]);
        },
        aplayerBarMoving(e) {
          let t = ((e.clientX || e.changedTouches[0].clientX) - this.aplayerBar.getBoundingClientRect().left) / this.aplayerBar.clientWidth;
          t = Math.max(t, 0), t = Math.min(t, 1), this.playedTime = t * this.audioStatus.duration, this.$emit("updateLyric");
        },
        aplayerBarMoveEnd(e) {
          document.removeEventListener(c.eventsName.moveEnd, this.aplayerBarMoveEnd), document.removeEventListener(c.eventsName.moving, this.aplayerBarMoving);
          let t = ((e.clientX || e.changedTouches[0].clientX) - this.aplayerBar.getBoundingClientRect().left) / this.aplayerBar.clientWidth;
          t = Math.max(t, 0), t = Math.min(t, 1), this.$emit("seek", t * this.audioStatus.duration), this.disableTimeUpdate = false;
        },
        aplayerBarMoveStart() {
          this.disableTimeUpdate = true, document.addEventListener(c.eventsName.moving, this.aplayerBarMoving), document.addEventListener(c.eventsName.moveEnd, this.aplayerBarMoveEnd);
        },
        volumeBarMoving(e) {
          let t = 1 - ((e.clientY || e.changedTouches[0].clientY) - this.volumeBar.getBoundingClientRect().top) / this.volumeBar.clientHeight;
          t = Math.max(t, 0), t = Math.min(t, 1), this.$emit("setVolume", t);
        },
        volumeBarMoveEnd(e) {
          this.volumeBarShowStatus = false, document.removeEventListener(c.eventsName.moveEnd, this.volumeBarMoveEnd), document.removeEventListener(c.eventsName.moving, this.volumeBarMoving);
          let t = 1 - ((e.clientY || e.changedTouches[0].clientY) - this.volumeBar.getBoundingClientRect().top) / this.volumeBar.clientHeight;
          t = Math.max(t, 0), t = Math.min(t, 1), this.$emit("setVolume", t, true);
        },
        volumeBarMoveStart() {
          this.volumeBarShowStatus = true, document.addEventListener(c.eventsName.moving, this.volumeBarMoving), document.addEventListener(c.eventsName.moveEnd, this.volumeBarMoveEnd);
        }
      },
      mounted() {
        this.aplayerBar.parentNode.addEventListener(c.eventsName.moveStart, this.aplayerBarMoveStart), this.volumeBar.parentNode.addEventListener(c.eventsName.moveStart, this.volumeBarMoveStart);
      },
      beforeUnmount() {
        this.aplayerBar.parentNode.removeEventListener(c.eventsName.moveStart, this.aplayerBarMoveStart), this.volumeBar.parentNode.removeEventListener(c.eventsName.moveStart, this.volumeBarMoveStart);
      }
    }, Mt = { class: "aplayer-controller" }, Et = {
      class: "aplayer-bar",
      ref: "aplayerBar"
    }, Rt = { class: "aplayer-loading-icon" }, Ct = { class: "aplayer-time-inner" }, qt = { class: "aplayer-ptime" }, xt = { class: "aplayer-dtime" }, Nt = { class: "aplayer-volume-bar-wrap" }, Ot = {
      class: "aplayer-volume-bar",
      ref: "volumeBar"
    };
    function At(e, t, a, s, l, d) {
      var o, h2, m;
      const r = resolveComponent("Icon");
      return openBlock(), createElementBlock("div", Mt, [
        createBaseVNode("div", {
          class: "aplayer-bar-wrap",
          onMouseover: t[0] || (t[0] = (u) => l.aplayerThumbShowStatus = true),
          onMouseout: t[1] || (t[1] = (u) => l.aplayerThumbShowStatus = false)
        }, [
          createBaseVNode("div", Et, [
            createBaseVNode("div", {
              class: "aplayer-loaded",
              style: normalizeStyle({ width: `${a.audioStatus.duration ? a.audioStatus.loadedTime / a.audioStatus.duration * 100 : 0}%` })
            }, null, 4),
            createBaseVNode("div", {
              class: "aplayer-played",
              style: normalizeStyle({ width: `${a.audioStatus.duration ? a.audioStatus.playedTime / a.audioStatus.duration * 100 : 0}%`, background: `${a.aplayer.coverColor[a.aplayer.index] || ((o = d.audio) == null ? void 0 : o.theme) || a.aplayer.theme}` })
            }, [
              withDirectives(createBaseVNode("span", {
                class: "aplayer-thumb",
                style: normalizeStyle({ background: `${a.aplayer.coverColor[a.aplayer.index] || ((h2 = d.audio) == null ? void 0 : h2.theme) || a.aplayer.theme}` })
              }, [
                createBaseVNode("span", Rt, [
                  createVNode(r, { type: "loading" })
                ])
              ], 4), [
                [vShow, l.aplayerThumbShowStatus]
              ])
            ], 4)
          ], 512)
        ], 32),
        createBaseVNode("div", {
          class: normalizeClass({ "aplayer-time": true, "aplayer-time-narrow": a.styleStatus.timeNarrow })
        }, [
          createBaseVNode("span", Ct, [
            createBaseVNode("span", qt, toDisplayString(d.playedTime), 1),
            createTextVNode(" / "),
            createBaseVNode("span", xt, toDisplayString(d.duration), 1)
          ]),
          createBaseVNode("span", {
            class: "aplayer-icon aplayer-icon-back",
            onClick: t[2] || (t[2] = (u) => e.$emit("skipBack"))
          }, [
            createVNode(r, { type: "skip" })
          ]),
          createBaseVNode("span", {
            class: "aplayer-icon aplayer-icon-play",
            onClick: t[3] || (t[3] = (u) => e.$emit("toggle"))
          }, [
            withDirectives(createVNode(r, { type: "play" }, null, 512), [
              [vShow, !a.audioStatus.playStatus]
            ]),
            withDirectives(createVNode(r, { type: "pause" }, null, 512), [
              [vShow, a.audioStatus.playStatus]
            ])
          ]),
          createBaseVNode("span", {
            class: "aplayer-icon aplayer-icon-forward",
            onClick: t[4] || (t[4] = (u) => e.$emit("skipForward"))
          }, [
            createVNode(r, { type: "skip" })
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["aplayer-volume-wrap", { "aplayer-volume-bar-wrap-active": l.volumeBarShowStatus }])
          }, [
            createBaseVNode("button", {
              type: "button",
              class: "aplayer-icon aplayer-icon-volume-down",
              onClick: t[5] || (t[5] = (u) => e.$emit("mute"))
            }, [
              createVNode(r, { type: d.switchVolumeIcon }, null, 8, ["type"])
            ]),
            createBaseVNode("div", Nt, [
              createBaseVNode("div", Ot, [
                createBaseVNode("div", {
                  class: "aplayer-volume",
                  style: normalizeStyle({ height: `${a.aplayer.muted ? 0 : a.aplayer.volume * 100}%`, background: `${a.aplayer.coverColor[a.aplayer.index] || ((m = d.audio) == null ? void 0 : m.theme) || a.aplayer.theme}` })
                }, null, 4)
              ], 512)
            ])
          ], 2),
          createBaseVNode("button", {
            type: "button",
            class: "aplayer-icon aplayer-icon-order",
            onClick: t[6] || (t[6] = (...u) => d.orderButtonClick && d.orderButtonClick(...u))
          }, [
            withDirectives(createVNode(r, { type: "orderList" }, null, 512), [
              [vShow, a.aplayer.order === "list"]
            ]),
            withDirectives(createVNode(r, { type: "orderRandom" }, null, 512), [
              [vShow, a.aplayer.order === "random"]
            ])
          ]),
          createBaseVNode("button", {
            type: "button",
            class: "aplayer-icon aplayer-icon-loop",
            onClick: t[7] || (t[7] = (...u) => d.loopButtonClick && d.loopButtonClick(...u))
          }, [
            withDirectives(createVNode(r, { type: "loopOne" }, null, 512), [
              [vShow, a.aplayer.loop === "one"]
            ]),
            withDirectives(createVNode(r, { type: "loopAll" }, null, 512), [
              [vShow, a.aplayer.loop === "all"]
            ]),
            withDirectives(createVNode(r, { type: "loopNone" }, null, 512), [
              [vShow, a.aplayer.loop === "none"]
            ])
          ]),
          createBaseVNode("button", {
            type: "button",
            class: "aplayer-icon aplayer-icon-menu",
            onClick: t[8] || (t[8] = (u) => e.$emit("toggleList"))
          }, [
            createVNode(r, { type: "menu" })
          ]),
          createBaseVNode("button", {
            type: "button",
            class: normalizeClass({ "aplayer-icon": true, "aplayer-icon-lrc": true, "aplayer-icon-lrc-inactivity": !a.aplayer.lyricShow }),
            onClick: t[9] || (t[9] = (u) => e.$emit("toggleLrc"))
          }, [
            createVNode(r, { type: "lrc" })
          ], 2)
        ], 2)
      ]);
    }
    const It = /* @__PURE__ */ M(kt, [["render", At]]);
    let T = null;
    const O = [
      "abort",
      "canplay",
      "canplaythrough",
      "durationchange",
      "emptied",
      "encrypted",
      "ended",
      "error",
      "interruptbegin",
      "interruptend",
      "loadeddata",
      "loadedmetadata",
      "loadstart",
      "mozaudioavailable",
      "pause",
      "play",
      "playing",
      "progress",
      "ratechange",
      "seeked",
      "seeking",
      "stalled",
      "suspend",
      "timeupdate",
      "volumechange",
      "waiting"
    ], zt = {
      name: "APlayer",
      components: {
        smoothScroll: N,
        utils: c,
        Icon: F,
        List: Lt,
        Lyric: bt,
        Controller: It
      },
      props: {
        audio: {
          type: Array,
          default: []
        },
        mode: {
          type: String,
          default: "normal"
          // "normal", "fixed", "mini"
        },
        autoplay: {
          type: Boolean,
          default: false
        },
        mutex: {
          type: Boolean,
          default: true
        },
        preload: {
          type: String,
          default: "metadata"
          // "auto", "metadata", "none"
        },
        theme: {
          type: String,
          default: "#B7DAFF"
        },
        autoSwitch: {
          type: Boolean,
          default: true
        },
        loop: {
          type: String,
          default: "all"
          // "one", "all", "none"  
        },
        order: {
          type: String,
          default: "list"
          // "list", "random"
        },
        muted: {
          type: Boolean,
          default: false
        },
        volume: {
          type: Number,
          default: 0.7,
          validator(e) {
            return e >= 0 && e <= 1;
          }
        },
        lrcType: {
          type: Number,
          default: 1
        },
        lrcShow: {
          type: Boolean,
          default: true
        },
        listFolded: {
          type: Boolean,
          default: false
        },
        listMaxHeight: {
          type: Number,
          default: 250
        },
        noticeSwitch: {
          type: Boolean,
          default: true
        },
        storageName: {
          type: String,
          default: "aplayer-setting"
        }
      },
      data() {
        return {
          aplayer: {
            index: 0,
            audio: [],
            randomOrder: [],
            mode: this.mode,
            autoplay: this.autoplay,
            mutex: this.mutex,
            preload: this.preload,
            theme: this.theme,
            autoSwitch: this.autoSwitch,
            coverColor: [],
            loop: this.loop,
            order: this.order,
            muted: this.muted,
            volume: this.volume,
            lyricType: this.lrcType,
            lyricShow: this.lrcShow,
            lyricIndex: 0,
            lyrics: [],
            listFolded: this.listFolded,
            listMaxHeight: this.listMaxHeight,
            noticeSwitch: this.noticeSwitch,
            noticeText: "",
            noticeOpacity: 0,
            storageName: this.storageName,
            storage: {}
          },
          audioStatus: {
            duration: 0,
            loadedTime: 0,
            playedTime: 0,
            playStatus: false,
            waitingStatus: false,
            disableTimeUpdate: false
          },
          styleStatus: {
            isMobile: /mobile/i.test(window.navigator.userAgent),
            narrow: false,
            timeNarrow: false,
            mini: true
          },
          destroyComponent: false
        };
      },
      computed: {
        audioRef() {
          return this.$refs.audio;
        },
        coverStyle() {
          let e = this.aplayer.audio[this.aplayer.index];
          return e != null && e.cover ? {
            "background-image": `url(${e.cover})`,
            "background-color": `${this.aplayer.coverColor[this.aplayer.index] || (e == null ? void 0 : e.theme) || this.aplayer.theme}`
          } : {
            "background-color": `${this.aplayer.coverColor[this.aplayer.index] || (e == null ? void 0 : e.theme) || this.aplayer.theme}`
          };
        }
      },
      methods: {
        // internal methods
        getStorage(e) {
          return this.aplayer.storage[e];
        },
        setStorage(e, t) {
          this.aplayer.storage[e] = t, localStorage.setItem(this.aplayer.storageName, JSON.stringify(this.aplayer.storage));
        },
        setAudio(e) {
          this.hls && (this.hls.destroy(), this.hls = null);
          let t = e.type;
          (!t || t === "auto") && (t = /m3u8(#|\?|$)/i.exec(e.url) ? "hls" : "normal"), t === "hls" ? Hls.isSupported() ? (this.hls = new Hls(), this.hls.loadSource(e.url), this.hls.attachMedia(this.audioRef)) : this.audioRef.canPlayType("application/x-mpegURL") || this.audioRef.canPlayType("application/vnd.apple.mpegURL") ? this.audioRef.src = e.url : this.setNotice("Error: HLS is not supported.") : t === "normal" && (this.audioRef.src = e.url);
        },
        prevIndex() {
          let e = this.aplayer.index;
          if (this.aplayer.audio.length > 1) {
            if (this.aplayer.order === "list")
              return e - 1 < 0 ? this.aplayer.audio.length - 1 : e - 1;
            if (this.aplayer.order === "random") {
              let t = this.aplayer.randomOrder.indexOf(e);
              return t === 0 ? this.aplayer.randomOrder[this.aplayer.randomOrder.length - 1] : this.aplayer.randomOrder[t - 1];
            }
          } else
            return 0;
        },
        nextIndex() {
          let e = this.aplayer.index;
          if (this.aplayer.audio.length > 1) {
            if (this.aplayer.order === "list")
              return (e + 1) % this.aplayer.audio.length;
            if (this.aplayer.order === "random") {
              let t = this.aplayer.randomOrder.indexOf(e);
              return t === this.aplayer.randomOrder.length - 1 ? this.aplayer.randomOrder[0] : this.aplayer.randomOrder[t + 1];
            }
          } else
            return 0;
        },
        coverColor() {
          var t;
          let e = !this.aplayer.coverColor[this.aplayer.index];
          if (this.aplayer.autoSwitch && e)
            try {
              this.colorThief || (this.colorThief = new ColorThief()), this.colorThief.getColorAsync((t = this.aplayer.audio[this.aplayer.index]) == null ? void 0 : t.cover, ([a, s, l]) => this.aplayer.coverColor[this.aplayer.index] = `rgb(${a}, ${s}, ${l})`);
            } catch (e2) {
              this.aplayer.autoSwitch = false, this.setNotice("The color-thief is required to support self-adapting theme.");
            }
        },
        switchStyle() {
          this.$refs.switch && (this.$refs.switch.style.display = "none", setTimeout(() => {
            this.$refs.switch && (this.$refs.switch.style.display = "block");
          }, 100));
        },
        loadedTime() {
          return this.audioRef.buffered.length ? this.audioRef.buffered.end(this.audioRef.buffered.length - 1) : 0;
        },
        playedTime(e) {
          this.audioStatus.playedTime = e;
        },
        disableTimeUpdate(e) {
          this.audioStatus.disableTimeUpdate = e;
        },
        loadLyric(e, t) {
          return __async(this, null, function* () {
            try {
              let a = yield fetch(this.aplayer.audio[t].lrc);
              a.ok || a.status === 304 ? e = c.parse(yield a.text()) : this.setNotice("LRC file request fails: status " + a.status);
            } catch (a) {
              console.warn(a);
            } finally {
              this.aplayer.lyrics[t] = e, this.updateLyric();
            }
          });
        },
        switchLyric(e) {
          if (this.aplayer.lyrics[e])
            return;
          let t = [[0, "Not available"]];
          this.aplayer.lyricType === 1 ? (this.aplayer.lyrics[e] = [[0, "Loading"]], this.loadLyric(t, e)) : this.aplayer.lyricType === 2 && (this.aplayer.audio[e].lrc && (t = c.parse(this.aplayer.audio[e].lrc)), this.aplayer.lyrics[e] = t, this.updateLyric());
        },
        updateLyric() {
          let e = this.aplayer.lyrics[this.aplayer.index];
          if (e)
            for (let t = 0; t < e.length; t++) {
              const a = e[t], s = e[t + 1];
              this.audioStatus.playedTime >= a[0] && (!s || this.audioStatus.playedTime < s[0]) && (this.aplayer.lyricIndex = t);
            }
        },
        // expose methods
        init() {
          this.destroyComponent = false, this.aplayer.storage = JSON.parse(localStorage.getItem(this.aplayer.storageName)) || {}, this.aplayer.volume = this.getStorage("volume") || this.aplayer.volume, this.audioRef.preload = this.aplayer.preload, this.audioRef.muted = this.aplayer.muted, this.audioRef.volume = this.aplayer.volume, O.forEach((e) => {
            this.audioRef.addEventListener(e, (t) => this.$emit(e, t));
          }), this.audioRef.addEventListener("play", () => this.audioStatus.playStatus = true), this.audioRef.addEventListener("pause", () => this.audioStatus.playStatus = false), this.audioRef.addEventListener("timeupdate", this.timeupdate), this.audioRef.addEventListener("durationchange", this.durationchange), this.audioRef.addEventListener("loadedmetadata", this.loadedmetadata), this.audioRef.addEventListener("canplay", this.canplay), this.audioRef.addEventListener("progress", this.progress), this.audioRef.addEventListener("error", this.error), this.audioRef.addEventListener("ended", this.ended), this.audioRef.addEventListener("waiting", this.waiting), this.audioRef.addEventListener("playing", this.playing), window.addEventListener("resize", this.resize), this.addList(this.audio, true), this.aplayer.autoplay && this.play(), this.$emit("init");
        },
        play() {
          this.switchStyle(), this.audioStatus.playStatus = true, this.$nextTick(() => {
            this.audioStatus.playStatus = true, this.aplayer.mutex && (T && T !== this && T.pause(), T = this);
            const e = this.audioRef.play();
            e && e.catch((t) => {
              console.warn(t), t.name === "NotAllowedError" && (this.audioStatus.playStatus = false);
            });
          });
        },
        pause() {
          this.switchStyle(), this.audioStatus.playStatus = false, this.audioRef.pause();
        },
        toggle() {
          this.audioStatus.playStatus ? this.pause() : this.play();
        },
        seek(e) {
          e = Math.max(e, 0), e = Math.min(e, this.audioStatus.duration), this.audioStatus.playedTime = e, this.audioRef.currentTime = e;
        },
        mute() {
          this.aplayer.muted = !this.aplayer.muted, this.audioRef.muted = !this.audioRef.muted;
        },
        setVolume(e, t = false) {
          e = parseFloat(e), isNaN(e) || (e = Math.max(e, 0), e = Math.min(e, 1), this.aplayer.volume = e, this.audioRef.volume = e, t && this.setStorage("volume", e), this.aplayer.muted && this.mute());
        },
        // user set theme > auto cover theme > audio theme > aplayer theme
        setTheme(e, t = this.aplayer.index) {
          e && (this.aplayer.coverColor[t] ? this.aplayer.coverColor[t] = e : this.aplayer.audio[t] && (this.aplayer.audio[t].theme = e));
        },
        setMode(e = "normal") {
          this.aplayer.mode = e, this.resize();
        },
        setLoop(e) {
          this.aplayer.audio.length <= 1 && e === "one" && (e = "all"), this.aplayer.loop = e;
        },
        setOrder(e) {
          this.aplayer.order = e;
        },
        setNotice(e, t = 2e3, a = 0.8) {
          if (!this.aplayer.noticeSwitch || this.aplayer.mode === "mini" || this.aplayer.mode === "fixed" && this.styleStatus.mini) {
            console.warn(e);
            return;
          }
          this.aplayer.noticeText = e, this.aplayer.noticeOpacity = a, this.noticeTimeout && clearTimeout(this.noticeTimeout), this.$emit("noticeshow"), t && (this.noticeTimeout = setTimeout(() => {
            this.aplayer.noticeOpacity = 0, this.$emit("noticehide");
          }, t));
        },
        skipBack() {
          this.switchList(this.prevIndex());
        },
        skipForward() {
          this.switchList(this.nextIndex());
        },
        destroy() {
          this.destroyComponent = true, this.$emit("destroy");
        },
        showLrc() {
          this.$emit("lrcshow"), this.aplayer.lyricShow = true;
        },
        hideLrc() {
          this.$emit("lrchide"), this.aplayer.lyricShow = false;
        },
        toggleLrc() {
          this.aplayer.lyricShow ? this.hideLrc() : this.showLrc();
        },
        showList() {
          this.$emit("listshow"), this.aplayer.mode !== "mini" && this.$refs.list.showList(), this.aplayer.listFolded = true;
        },
        hideList() {
          this.$emit("listhide"), this.aplayer.listFolded = false;
        },
        toggleList() {
          this.aplayer.listFolded ? this.hideList() : this.showList();
        },
        addList(e, t = false) {
          this.$emit("listadd", e), Object.prototype.toString.call(e) !== "[object Array]" && (e = [e]), e.map((s) => (s.name = s.name || s.title || "Audio Name", s.artist = s.artist || s.author || "Audio Artist", s.cover = s.cover || s.pic, s.type = s.type || "normal", s));
          const a = this.aplayer.audio.length === 0;
          if (t && (this.aplayer.audio = []), this.aplayer.audio = this.aplayer.audio.concat(e), this.aplayer.randomOrder = c.randomOrder(this.aplayer.audio.length), a) {
            let s = 0;
            this.aplayer.order === "random" && (s = this.aplayer.randomOrder[0]), this.switchList(s);
          }
        },
        removeList(e) {
          this.$emit("listremove", nextIndex), this.aplayer.coverColor.splice(e, 1), this.aplayer.randomOrder.splice(this.aplayer.randomOrder.indexOf(this.aplayer.audio.length - 1), 1), this.aplayer.audio[e] && (this.aplayer.audio.length > 1 ? (this.aplayer.audio.splice(e, 1), e === this.aplayer.index && (this.aplayer.audio[e] ? this.switchList(e) : this.switchList(e - 1)), this.aplayer.index > e && this.aplayer.index--) : this.clearList()), this.aplayer.lyrics.splice(e, 1);
        },
        switchList(e) {
          this.$emit("listswitch", e), typeof e < "u" && this.aplayer.audio[e] && (this.aplayer.index = e, this.coverColor(), this.aplayer.mode !== "mini" && N(e * 33, 500, null, this.$refs.list.ol), this.setAudio(this.aplayer.audio[e]), this.switchLyric(e), this.audioStatus.duration = 0, this.audioStatus.playedTime = 0);
        },
        clearList() {
          this.$emit("listclear"), this.pause(), this.audioRef.src = "", this.aplayer.audio = [], this.aplayer.randomOrder = [], this.aplayer.coverColor = [], this.aplayer.lyrics = [], this.aplayer.index = 0, this.aplayer.lyricIndex = 0, this.audioStatus.duration = 0, this.audioStatus.loadedTime = 0, this.audioStatus.playedTime = 0, this.audioStatus.playStatus = false, this.audioStatus.waitingStatus = false, this.audioStatus.disableTimeUpdate = false;
        },
        // media events
        timeupdate() {
          this.audioStatus.disableTimeUpdate || (this.audioStatus.playedTime = this.audioRef.currentTime), this.updateLyric();
        },
        durationchange() {
          this.audioStatus.duration = this.audioRef.duration;
        },
        loadedmetadata() {
          this.seek(0), this.audioStatus.playStatus && this.audioRef.play();
        },
        canplay() {
          this.audioStatus.loadedTime = this.loadedTime();
        },
        progress() {
          this.audioStatus.loadedTime = this.loadedTime();
        },
        error() {
          if (this.aplayer.audio.length > 1) {
            let e = this.audioStatus.playStatus;
            this.setNotice("An audio error has occurred, player will skip forward in 2 seconds."), this.skipForwardTimeout && clearTimeout(this.skipForwardTimeout), this.skipForwardTimeout = setTimeout(() => {
              this.skipForward(), e && this.play();
            }, 2e3);
          } else
            this.aplayer.audio.length === 1 && this.setNotice("An audio error has occurred.");
        },
        ended() {
          let e = this.aplayer.index;
          this.aplayer.loop === "none" ? (this.skipForward(), this.aplayer.order === "list" ? e < this.aplayer.audio.length - 1 ? this.play() : this.pause() : this.aplayer.order === "random" && (this.aplayer.randomOrder.indexOf(e) < this.aplayer.randomOrder.length - 1 ? this.play() : this.pause())) : this.aplayer.loop === "one" ? (this.switchList(e), this.play()) : this.aplayer.loop === "all" && (this.skipForward(), this.play());
        },
        waiting() {
          this.audioStatus.waitingStatus = true;
        },
        playing() {
          this.audioStatus.waitingStatus = false;
        },
        resize() {
          this.aplayer.mode === "normal" ? (this.styleStatus.narrow = this.$refs.aplayer.offsetWidth <= 300, this.styleStatus.timeNarrow = this.$refs.info.offsetWidth <= 200) : (this.styleStatus.narrow = window.innerWidth <= 318, this.styleStatus.timeNarrow = true);
        }
      },
      watch: {
        audio(e) {
          this.addList(e, true);
        }
      },
      mounted() {
        this.init();
      },
      beforeUnmount() {
        this.clearList(), this.hls && this.hls.destroy(), T === this && (T = null), this.colorThief = null, this.noticeTimeout && clearTimeout(this.noticeTimeout), this.skipForwardTimeout && clearTimeout(this.skipForwardTimeout), O.forEach((e) => {
          this.audioRef.removeEventListener(e, (t) => this.$emit(e, t));
        }), this.audioRef.removeEventListener("play", () => this.audioStatus.playStatus = true), this.audioRef.removeEventListener("pause", () => this.audioStatus.playStatus = false), this.audioRef.removeEventListener("timeupdate", this.timeupdate), this.audioRef.removeEventListener("durationchange", this.durationchange), this.audioRef.removeEventListener("loadedmetadata", this.loadedmetadata), this.audioRef.removeEventListener("canplay", this.canplay), this.audioRef.removeEventListener("progress", this.progress), this.audioRef.removeEventListener("error", this.error), this.audioRef.removeEventListener("ended", this.ended), this.audioRef.removeEventListener("waiting", this.waiting), this.audioRef.removeEventListener("playing", this.playing), window.removeEventListener("resize", this.resize);
      }
    }, Ft = zt, Ht = { ref: "switch" }, Vt = {
      class: "aplayer-info",
      ref: "info"
    }, Ut = { class: "aplayer-music" }, Pt = { class: "aplayer-title" }, Dt = { class: "aplayer-author" }, jt = { class: "aplayer-icon" }, Yt = { ref: "audio" };
    function Wt(e, t, a, s, l, d) {
      const r = resolveComponent("List"), o = resolveComponent("Icon"), h2 = resolveComponent("Lyric"), m = resolveComponent("Controller");
      return e.destroyComponent ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["aplayer", { "aplayer-narrow": e.styleStatus.narrow, "aplayer-fixed": e.aplayer.mode === "fixed", "aplayer-mini": e.aplayer.mode === "mini" || e.aplayer.mode === "fixed" && e.styleStatus.mini, "aplayer-loading": e.audioStatus.playStatus && e.audioStatus.waitingStatus, "aplayer-withlist": e.aplayer.audio.length > 1, "aplayer-withlrc": e.aplayer.mode === "normal" && e.aplayer.lyricShow, "aplayer-mobile": e.styleStatus.isMobile }]),
        ref: "aplayer"
      }, [
        e.aplayer.mode === "fixed" ? (openBlock(), createBlock(r, {
          key: 0,
          aplayer: e.aplayer,
          onPlay: e.play,
          onToggle: e.toggle,
          onSwitchList: e.switchList,
          ref: "list"
        }, null, 8, ["aplayer", "onPlay", "onToggle", "onSwitchList"])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "aplayer-body",
          style: normalizeStyle({ width: `${e.aplayer.mode === "fixed" ? "calc(100% - 18px)" : "100%"}` })
        }, [
          createBaseVNode("div", {
            class: "aplayer-pic",
            style: normalizeStyle(e.coverStyle),
            onClick: t[0] || (t[0] = (...u) => e.toggle && e.toggle(...u))
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["aplayer-button", { "aplayer-play": !e.audioStatus.playStatus, "aplayer-pause": e.audioStatus.playStatus }])
            }, [
              createBaseVNode("div", Ht, [
                withDirectives(createVNode(o, { type: "play" }, null, 512), [
                  [vShow, !e.audioStatus.playStatus]
                ]),
                withDirectives(createVNode(o, { type: "pause" }, null, 512), [
                  [vShow, e.audioStatus.playStatus]
                ])
              ], 512)
            ], 2)
          ], 4),
          createBaseVNode("div", Vt, [
            createBaseVNode("div", Ut, [
              createBaseVNode("span", Pt, toDisplayString(e.aplayer.audio[e.aplayer.index] ? e.aplayer.audio[e.aplayer.index].name : "No Audio"), 1),
              createBaseVNode("span", Dt, toDisplayString(e.aplayer.audio[e.aplayer.index] ? " - " + e.aplayer.audio[e.aplayer.index].artist : ""), 1)
            ]),
            e.aplayer.mode === "normal" ? withDirectives((openBlock(), createBlock(h2, {
              key: 0,
              aplayer: e.aplayer,
              ref: "lyric"
            }, null, 8, ["aplayer"])), [
              [vShow, e.aplayer.lyricShow]
            ]) : createCommentVNode("", true),
            createVNode(m, {
              aplayer: e.aplayer,
              audioStatus: e.audioStatus,
              styleStatus: e.styleStatus,
              onPlayedTime: e.playedTime,
              onDisableTimeUpdate: e.disableTimeUpdate,
              onToggle: e.toggle,
              onSkipBack: e.skipBack,
              onSkipForward: e.skipForward,
              onSeek: e.seek,
              onMute: e.mute,
              onSetLoop: e.setLoop,
              onSetOrder: e.setOrder,
              onToggleList: e.toggleList,
              onToggleLrc: e.toggleLrc,
              onSetVolume: e.setVolume
            }, null, 8, ["aplayer", "audioStatus", "styleStatus", "onPlayedTime", "onDisableTimeUpdate", "onToggle", "onSkipBack", "onSkipForward", "onSeek", "onMute", "onSetLoop", "onSetOrder", "onToggleList", "onToggleLrc", "onSetVolume"])
          ], 512),
          createBaseVNode("div", {
            class: "aplayer-notice",
            style: normalizeStyle({ opacity: e.aplayer.noticeOpacity })
          }, toDisplayString(e.aplayer.noticeText), 5),
          createBaseVNode("div", {
            class: "aplayer-miniswitcher",
            onClick: t[1] || (t[1] = (u) => e.styleStatus.mini = !e.styleStatus.mini)
          }, [
            createBaseVNode("button", jt, [
              createVNode(o, { type: "right" })
            ])
          ])
        ], 4),
        e.aplayer.mode === "normal" ? (openBlock(), createBlock(r, {
          key: 1,
          aplayer: e.aplayer,
          onPlay: e.play,
          onToggle: e.toggle,
          onSwitchList: e.switchList,
          ref: "list"
        }, null, 8, ["aplayer", "onPlay", "onToggle", "onSwitchList"])) : createCommentVNode("", true),
        e.aplayer.mode === "fixed" ? withDirectives((openBlock(), createBlock(h2, {
          key: 2,
          aplayer: e.aplayer,
          ref: "lyric"
        }, null, 8, ["aplayer"])), [
          [vShow, e.aplayer.lyricShow]
        ]) : createCommentVNode("", true),
        createBaseVNode("audio", Yt, null, 512)
      ], 2));
    }
    const q = /* @__PURE__ */ M(Ft, [["render", Wt]]);
    q.install = (e) => {
      e.component(q.name, q);
    };
    const Player_vue_vue_type_style_index_0_scoped_079c9c7d_lang = "";
    const _sfc_main$e = {
      __name: "Player",
      props: {
        // 主题色
        theme: {
          type: String,
          default: "#efefef"
        },
        // 默认音量
        volume: {
          type: Number,
          default: 0.7,
          validator: (value) => {
            return value >= 0 && value <= 1;
          }
        },
        // 歌曲服务器 ( netease-网易云, tencent-qq音乐 )
        songServer: {
          type: String,
          default: "netease"
          //'netease' | 'tencent'
        },
        // 播放类型 ( song-歌曲, playlist-播放列表, album-专辑, search-搜索, artist-艺术家 )
        songType: {
          type: String,
          default: "playlist"
        },
        // id
        songId: {
          type: String,
          default: "7452421335"
        },
        // 列表是否默认折叠
        listFolded: {
          type: Boolean,
          default: false
        },
        // 列表最大高度
        listMaxHeight: {
          type: Number,
          default: 420
        }
      },
      setup(__props, { expose: __expose }) {
        useCssVars((_ctx) => ({
          "05d3d2c3": unref(listHeight)
        }));
        const store = mainStore();
        const player = ref(null);
        const playList = ref([]);
        const playIndex = ref(0);
        const props = __props;
        const listHeight = computed(() => {
          return props.listMaxHeight + "px";
        });
        onMounted(() => {
          nextTick$1(() => {
            try {
              getPlayerList(props.songServer, props.songType, props.songId).then((res) => {
                console.log(res);
                store.musicIsOk = true;
                playList.value = res;
                console.log("音乐加载完成");
                console.log(playList.value);
                console.log(playIndex.value, playList.value.length, props.volume);
              });
            } catch (err) {
              console.error(err);
              store.musicIsOk = false;
              ElMessage({
                message: "播放器加载失败",
                grouping: true,
                icon: h(PlayWrong, {
                  theme: "filled",
                  fill: "#efefef"
                })
              });
            }
          });
        });
        const onPlay = () => {
          console.log("播放");
          playIndex.value = player.value.aplayer.index;
          store.setPlayerState(player.value.audioRef.paused);
          store.setPlayerData(playList.value[playIndex.value].name, playList.value[playIndex.value].artist);
          ElMessage({
            message: store.getPlayerData.name + " - " + store.getPlayerData.artist,
            grouping: true,
            icon: h(MusicOne, {
              theme: "filled",
              fill: "#efefef"
            })
          });
        };
        const onPause = () => {
          store.setPlayerState(player.value.audioRef.paused);
        };
        const onTimeUp = () => {
          let lyrics = player.value.aplayer.lyrics[playIndex.value];
          let lyricIndex = player.value.aplayer.lyricIndex;
          if (!lyrics || !lyrics[lyricIndex]) {
            return;
          }
          let lrc = lyrics[lyricIndex][1];
          if (lrc === "Loading") {
            lrc = "歌词加载中";
          } else if (lrc === "Not available") {
            lrc = "歌词加载失败";
          }
          store.setPlayerLrc(lrc);
        };
        const playToggle = () => {
          player.value.toggle();
        };
        const changeVolume = (value) => {
          player.value.setVolume(value, false);
        };
        const changeSong = (type2) => {
          type2 === 0 ? player.value.skipBack() : player.value.skipForward();
          nextTick$1(() => {
            player.value.play();
          });
        };
        const toggleList = () => {
          player.value.toggleList();
        };
        const loadMusicError = () => {
          let notice = "";
          if (playList.value.length > 1) {
            notice = "播放歌曲出现错误，播放器将在 2s 后进行下一首";
          } else {
            notice = "播放歌曲出现错误";
          }
          ElMessage({
            message: notice,
            grouping: true,
            icon: h(PlayWrong, {
              theme: "filled",
              fill: "#EFEFEF",
              duration: 2e3
            })
          });
          console.error(
            "播放歌曲: " + player.value.aplayer.audio[player.value.aplayer.index].name + " 出现错误"
          );
        };
        __expose({ playToggle, changeVolume, changeSong, toggleList });
        return (_ctx, _cache) => {
          return unref(playList)[0] ? (openBlock(), createBlock(unref(q), {
            key: 0,
            ref_key: "player",
            ref: player,
            audio: unref(playList),
            autoplay: unref(store).playerAutoplay,
            theme: __props.theme,
            autoSwitch: false,
            loop: unref(store).playerLoop,
            order: unref(store).playerOrder,
            volume: __props.volume,
            showLrc: true,
            listFolded: __props.listFolded,
            listMaxHeight: __props.listMaxHeight,
            noticeSwitch: false,
            onPlay,
            onPause,
            onTimeupdate: onTimeUp,
            onError: loadMusicError
          }, null, 8, ["audio", "autoplay", "theme", "loop", "order", "volume", "listFolded", "listMaxHeight"])) : createCommentVNode("", true);
        };
      }
    };
    const Player = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-079c9c7d"]]);
    const Music_vue_vue_type_style_index_0_scoped_3df54c62_lang = "";
    const _hoisted_1$d = { class: "btns" };
    const _hoisted_2$c = { class: "control" };
    const _hoisted_3$a = { class: "menu" };
    const _hoisted_4$8 = { class: "name" };
    const _hoisted_5$8 = { class: "volume" };
    const _hoisted_6$8 = { class: "icon" };
    const _sfc_main$d = {
      __name: "Music",
      setup(__props) {
        const store = mainStore();
        const volumeShow = ref(false);
        const volumeNum = ref(store.musicVolume ? store.musicVolume : 0.7);
        const musicListShow = ref(false);
        const playerRef = ref(null);
        const playerData = reactive({
          server: "netease",
          type: "playlist",
          id: ""
        });
        const openMusicList = () => {
          musicListShow.value = true;
          playerRef.value.toggleList();
        };
        const closeMusicList = () => {
          musicListShow.value = false;
          playerRef.value.toggleList();
        };
        const changePlayState = () => {
          playerRef.value.playToggle();
        };
        const changeMusicIndex = (type2) => {
          playerRef.value.changeSong(type2);
        };
        onMounted(() => {
          window.addEventListener("keydown", (e) => {
            if (!store.musicIsOk) {
              return;
            }
            if (e.code == "Space") {
              changePlayState();
            }
          });
          window.$openList = openMusicList;
        });
        watch(
          () => volumeNum.value,
          (value) => {
            store.musicVolume = value;
            playerRef.value.changeVolume(store.musicVolume);
          }
        );
        return (_ctx, _cache) => {
          const _component_el_slider = ElSlider;
          return openBlock(), createElementBlock(Fragment, null, [
            withDirectives(createBaseVNode("div", {
              class: "music",
              onMouseenter: _cache[5] || (_cache[5] = ($event) => volumeShow.value = true),
              onMouseleave: _cache[6] || (_cache[6] = ($event) => volumeShow.value = false)
            }, [
              createBaseVNode("div", _hoisted_1$d, [
                createBaseVNode("span", {
                  onClick: _cache[0] || (_cache[0] = ($event) => openMusicList())
                }, "音乐列表"),
                createBaseVNode("span", {
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(store).musicOpenState = false)
                }, "回到一言")
              ]),
              createBaseVNode("div", _hoisted_2$c, [
                createVNode(unref(GoStart), {
                  theme: "filled",
                  size: "30",
                  fill: "#efefef",
                  onClick: _cache[2] || (_cache[2] = ($event) => changeMusicIndex(0))
                }),
                createBaseVNode("div", {
                  class: "state",
                  onClick: changePlayState
                }, [
                  withDirectives(createVNode(unref(PlayOne), {
                    theme: "filled",
                    size: "50",
                    fill: "#efefef"
                  }, null, 512), [
                    [vShow, !unref(store).playerState]
                  ]),
                  withDirectives(createVNode(unref(Pause), {
                    theme: "filled",
                    size: "50",
                    fill: "#efefef"
                  }, null, 512), [
                    [vShow, unref(store).playerState]
                  ])
                ]),
                createVNode(unref(GoEnd), {
                  theme: "filled",
                  size: "30",
                  fill: "#efefef",
                  onClick: _cache[3] || (_cache[3] = ($event) => changeMusicIndex(1))
                })
              ]),
              createBaseVNode("div", _hoisted_3$a, [
                withDirectives(createBaseVNode("div", _hoisted_4$8, [
                  createBaseVNode("span", null, toDisplayString(unref(store).getPlayerData.name ? unref(store).getPlayerData.name + " - " + unref(store).getPlayerData.artist : "未播放音乐"), 1)
                ], 512), [
                  [vShow, !unref(volumeShow)]
                ]),
                withDirectives(createBaseVNode("div", _hoisted_5$8, [
                  createBaseVNode("div", _hoisted_6$8, [
                    unref(volumeNum) == 0 ? (openBlock(), createBlock(unref(VolumeMute), {
                      key: 0,
                      theme: "filled",
                      size: "24",
                      fill: "#efefef"
                    })) : unref(volumeNum) > 0 && unref(volumeNum) < 0.7 ? (openBlock(), createBlock(unref(VolumeSmall), {
                      key: 1,
                      theme: "filled",
                      size: "24",
                      fill: "#efefef"
                    })) : (openBlock(), createBlock(unref(VolumeNotice), {
                      key: 2,
                      theme: "filled",
                      size: "24",
                      fill: "#efefef"
                    }))
                  ]),
                  createVNode(_component_el_slider, {
                    modelValue: unref(volumeNum),
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(volumeNum) ? volumeNum.value = $event : null),
                    "show-tooltip": false,
                    min: 0,
                    max: 1,
                    step: 0.01
                  }, null, 8, ["modelValue"])
                ], 512), [
                  [vShow, unref(volumeShow)]
                ])
              ])
            ], 544), [
              [vShow, unref(store).musicOpenState]
            ]),
            createVNode(Transition, {
              name: "fade",
              mode: "out-in"
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("div", {
                  class: "music-list",
                  onClick: _cache[9] || (_cache[9] = ($event) => closeMusicList())
                }, [
                  createVNode(Transition, { name: "zoom" }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("div", {
                        class: "list",
                        onClick: _cache[8] || (_cache[8] = withModifiers(() => {
                        }, ["stop"]))
                      }, [
                        createVNode(unref(CloseOne), {
                          class: "close",
                          theme: "filled",
                          size: "28",
                          fill: "#ffffff60",
                          onClick: _cache[7] || (_cache[7] = ($event) => closeMusicList())
                        }),
                        createVNode(Player, {
                          ref_key: "playerRef",
                          ref: playerRef,
                          songServer: unref(playerData).server,
                          songType: unref(playerData).type,
                          songId: unref(playerData).id,
                          volume: unref(volumeNum)
                        }, null, 8, ["songServer", "songType", "songId", "volume"])
                      ], 512), [
                        [vShow, unref(musicListShow)]
                      ])
                    ]),
                    _: 1
                  })
                ], 512), [
                  [vShow, unref(musicListShow)]
                ])
              ]),
              _: 1
            })
          ], 64);
        };
      }
    };
    const Music = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-3df54c62"]]);
    let timeout;
    function debounce(func, wait = 300, immediate = false) {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(function() {
          timeout = null;
        }, wait);
        if (callNow)
          typeof func === "function" && func();
      } else {
        timeout = setTimeout(function() {
          typeof func === "function" && func();
        }, wait);
      }
    }
    const Hitokoto_vue_vue_type_style_index_0_scoped_28c8de00_lang = "";
    const _withScopeId$5 = (n) => (pushScopeId("data-v-28c8de00"), n = n(), popScopeId(), n);
    const _hoisted_1$c = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", null, "打开音乐播放器", -1));
    const _hoisted_2$b = { class: "text" };
    const _hoisted_3$9 = { class: "from" };
    const _sfc_main$c = {
      __name: "Hitokoto",
      setup(__props) {
        const store = mainStore();
        const openMusicShow = ref(false);
        const hitokotoData = reactive({
          text: "这里应该显示一句话",
          from: "無名"
        });
        const getHitokotoData = () => __async(this, null, function* () {
          try {
            const result = yield getHitokoto();
            hitokotoData.text = result.hitokoto;
            hitokotoData.from = result.from;
          } catch (error) {
            ElMessage({
              message: "一言获取失败",
              icon: h(Error$1, {
                theme: "filled",
                fill: "#efefef"
              })
            });
            hitokotoData.text = "这里应该显示一句话";
            hitokotoData.from = "無名";
          }
        });
        const updateHitokoto = () => {
          debounce(() => {
            getHitokotoData();
          }, 500);
        };
        onMounted(() => {
          getHitokotoData();
        });
        return (_ctx, _cache) => {
          return withDirectives((openBlock(), createElementBlock("div", {
            class: "hitokoto cards",
            onMouseenter: _cache[1] || (_cache[1] = ($event) => openMusicShow.value = true),
            onMouseleave: _cache[2] || (_cache[2] = ($event) => openMusicShow.value = false),
            onClick: _cache[3] || (_cache[3] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createVNode(Transition, { name: "el-fade-in-linear" }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("div", {
                  class: "open-music",
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(store).musicOpenState = true)
                }, [
                  createVNode(unref(MusicMenu), {
                    theme: "filled",
                    size: "18",
                    fill: "#efefef"
                  }),
                  _hoisted_1$c
                ], 512), [
                  [vShow, unref(openMusicShow) && unref(store).musicIsOk]
                ])
              ]),
              _: 1
            }),
            createVNode(Transition, {
              name: "el-fade-in-linear",
              mode: "out-in"
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("div", {
                  key: unref(hitokotoData).text,
                  class: "content",
                  onClick: updateHitokoto
                }, [
                  createBaseVNode("span", _hoisted_2$b, toDisplayString(unref(hitokotoData).text), 1),
                  createBaseVNode("span", _hoisted_3$9, "-「 " + toDisplayString(unref(hitokotoData).from) + " 」", 1)
                ]))
              ]),
              _: 1
            })
          ], 544)), [
            [vShow, !unref(store).musicOpenState]
          ]);
        };
      }
    };
    const Hitokoto = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-28c8de00"]]);
    const _hoisted_1$b = {
      key: 0,
      class: "weather"
    };
    const _hoisted_2$a = { class: "sm-hidden" };
    const _hoisted_3$8 = { class: "sm-hidden" };
    const _hoisted_4$7 = {
      key: 1,
      class: "weather"
    };
    const _hoisted_5$7 = /* @__PURE__ */ createBaseVNode("span", null, "天气数据获取失败", -1);
    const _hoisted_6$7 = [
      _hoisted_5$7
    ];
    const _sfc_main$b = {
      __name: "Weather",
      setup(__props) {
        const mainKey = "6c13af6fc30868bee488faf2cc652ab4";
        const weatherData = reactive({
          adCode: {
            city: null,
            // 城市
            adcode: null
            // 城市编码
          },
          weather: {
            weather: null,
            // 天气现象
            temperature: null,
            // 实时气温
            winddirection: null,
            // 风向描述
            windpower: null
            // 风力级别
          }
        });
        const getWeatherData = () => __async(this, null, function* () {
          try {
            if (!mainKey)
              ;
            else {
              const adCode = yield getAdcode(mainKey);
              console.log(adCode);
              if (adCode.infocode !== "10000") {
                throw "地区查询失败";
              }
              weatherData.adCode = {
                city: adCode.city,
                adcode: adCode.adcode
              };
              const result = yield getWeather(mainKey, weatherData.adCode.adcode);
              weatherData.weather = {
                weather: result.lives[0].weather,
                temperature: result.lives[0].temperature,
                winddirection: result.lives[0].winddirection,
                windpower: result.lives[0].windpower
              };
            }
          } catch (error) {
            console.error("天气信息获取失败:" + error);
            onError("天气信息获取失败");
          }
        });
        const onError = (message2) => {
          ElMessage({
            message: message2,
            icon: h(Error$1, {
              theme: "filled",
              fill: "#efefef"
            })
          });
          console.error(message2);
        };
        onMounted(() => {
          getWeatherData();
        });
        return (_ctx, _cache) => {
          var _a2;
          return unref(weatherData).adCode.city && unref(weatherData).weather.weather ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
            createBaseVNode("span", null, toDisplayString(unref(weatherData).adCode.city) + " ", 1),
            createBaseVNode("span", null, toDisplayString(unref(weatherData).weather.weather) + " ", 1),
            createBaseVNode("span", null, toDisplayString(unref(weatherData).weather.temperature) + "℃", 1),
            createBaseVNode("span", _hoisted_2$a, "  " + toDisplayString(((_a2 = unref(weatherData).weather.winddirection) == null ? void 0 : _a2.endsWith("风")) ? unref(weatherData).weather.winddirection : unref(weatherData).weather.winddirection + "风") + "  ", 1),
            createBaseVNode("span", _hoisted_3$8, toDisplayString(unref(weatherData).weather.windpower) + " 级", 1)
          ])) : (openBlock(), createElementBlock("div", _hoisted_4$7, _hoisted_6$7));
        };
      }
    };
    const index_vue_vue_type_style_index_0_scoped_6c8ddb02_lang = "";
    const _hoisted_1$a = { class: "left" };
    const _hoisted_2$9 = { class: "right cards" };
    const _hoisted_3$7 = { class: "time" };
    const _hoisted_4$6 = { class: "date" };
    const _hoisted_5$6 = { class: "sm-hidden" };
    const _hoisted_6$6 = { class: "text" };
    const _sfc_main$a = {
      __name: "index",
      setup(__props) {
        const store = mainStore();
        const currentTime = ref({});
        const timeInterval = ref(null);
        const playerHasId = "";
        const updateTimeData = () => {
          currentTime.value = getCurrentTime();
        };
        onMounted(() => {
          updateTimeData();
          timeInterval.value = setInterval(updateTimeData, 1e3);
        });
        onBeforeUnmount(() => {
          clearInterval(timeInterval.value);
        });
        return (_ctx, _cache) => {
          const _component_el_col = ElCol;
          const _component_el_row = ElRow;
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(unref(store).mobileFuncState ? "function mobile" : "function")
          }, [
            createVNode(_component_el_row, { gutter: 20 }, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 12 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$a, [
                      createVNode(Hitokoto),
                      unref(playerHasId) ? (openBlock(), createBlock(Music, { key: 0 })) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, { span: 12 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2$9, [
                      createBaseVNode("div", _hoisted_3$7, [
                        createBaseVNode("div", _hoisted_4$6, [
                          createBaseVNode("span", null, toDisplayString(unref(currentTime).year) + " 年 ", 1),
                          createBaseVNode("span", null, toDisplayString(unref(currentTime).month) + " 月 ", 1),
                          createBaseVNode("span", null, toDisplayString(unref(currentTime).day) + " 日 ", 1),
                          createBaseVNode("span", _hoisted_5$6, toDisplayString(unref(currentTime).weekday), 1)
                        ]),
                        createBaseVNode("div", _hoisted_6$6, [
                          createBaseVNode("span", null, toDisplayString(unref(currentTime).hour) + ":" + toDisplayString(unref(currentTime).minute) + ":" + toDisplayString(unref(currentTime).second), 1)
                        ])
                      ]),
                      createVNode(_sfc_main$b)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 2);
        };
      }
    };
    const Func = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-6c8ddb02"]]);
    function isObject$3(obj) {
      return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
    }
    function extend$2(target = {}, src = {}) {
      Object.keys(src).forEach((key) => {
        if (typeof target[key] === "undefined")
          target[key] = src[key];
        else if (isObject$3(src[key]) && isObject$3(target[key]) && Object.keys(src[key]).length > 0) {
          extend$2(target[key], src[key]);
        }
      });
    }
    const ssrDocument = {
      body: {},
      addEventListener() {
      },
      removeEventListener() {
      },
      activeElement: {
        blur() {
        },
        nodeName: ""
      },
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      getElementById() {
        return null;
      },
      createEvent() {
        return {
          initEvent() {
          }
        };
      },
      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {
          },
          getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS() {
        return {};
      },
      importNode() {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };
    function getDocument() {
      const doc2 = typeof document !== "undefined" ? document : {};
      extend$2(doc2, ssrDocument);
      return doc2;
    }
    const ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState() {
        },
        pushState() {
        },
        go() {
        },
        back() {
        }
      },
      CustomEvent: function CustomEvent2() {
        return this;
      },
      addEventListener() {
      },
      removeEventListener() {
      },
      getComputedStyle() {
        return {
          getPropertyValue() {
            return "";
          }
        };
      },
      Image() {
      },
      Date() {
      },
      screen: {},
      setTimeout() {
      },
      clearTimeout() {
      },
      matchMedia() {
        return {};
      },
      requestAnimationFrame(callback) {
        if (typeof setTimeout === "undefined") {
          callback();
          return null;
        }
        return setTimeout(callback, 0);
      },
      cancelAnimationFrame(id) {
        if (typeof setTimeout === "undefined") {
          return;
        }
        clearTimeout(id);
      }
    };
    function getWindow() {
      const win = typeof window !== "undefined" ? window : {};
      extend$2(win, ssrWindow);
      return win;
    }
    function deleteProps(obj) {
      const object = obj;
      Object.keys(object).forEach((key) => {
        try {
          object[key] = null;
        } catch (e) {
        }
        try {
          delete object[key];
        } catch (e) {
        }
      });
    }
    function nextTick(callback, delay = 0) {
      return setTimeout(callback, delay);
    }
    function now() {
      return Date.now();
    }
    function getComputedStyle$1(el) {
      const window2 = getWindow();
      let style2;
      if (window2.getComputedStyle) {
        style2 = window2.getComputedStyle(el, null);
      }
      if (!style2 && el.currentStyle) {
        style2 = el.currentStyle;
      }
      if (!style2) {
        style2 = el.style;
      }
      return style2;
    }
    function getTranslate(el, axis = "x") {
      const window2 = getWindow();
      let matrix;
      let curTransform;
      let transformMatrix;
      const curStyle = getComputedStyle$1(el);
      if (window2.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(",").length > 6) {
          curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
        }
        transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        matrix = transformMatrix.toString().split(",");
      }
      if (axis === "x") {
        if (window2.WebKitCSSMatrix)
          curTransform = transformMatrix.m41;
        else if (matrix.length === 16)
          curTransform = parseFloat(matrix[12]);
        else
          curTransform = parseFloat(matrix[4]);
      }
      if (axis === "y") {
        if (window2.WebKitCSSMatrix)
          curTransform = transformMatrix.m42;
        else if (matrix.length === 16)
          curTransform = parseFloat(matrix[13]);
        else
          curTransform = parseFloat(matrix[5]);
      }
      return curTransform || 0;
    }
    function isObject$2(o) {
      return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
    }
    function isNode(node) {
      if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
        return node instanceof HTMLElement;
      }
      return node && (node.nodeType === 1 || node.nodeType === 11);
    }
    function extend$1(...args) {
      const to = Object(args[0]);
      const noExtend = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < args.length; i += 1) {
        const nextSource = args[i];
        if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
          const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
          for (let nextIndex2 = 0, len = keysArray.length; nextIndex2 < len; nextIndex2 += 1) {
            const nextKey = keysArray[nextIndex2];
            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== void 0 && desc.enumerable) {
              if (isObject$2(to[nextKey]) && isObject$2(nextSource[nextKey])) {
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend$1(to[nextKey], nextSource[nextKey]);
                }
              } else if (!isObject$2(to[nextKey]) && isObject$2(nextSource[nextKey])) {
                to[nextKey] = {};
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend$1(to[nextKey], nextSource[nextKey]);
                }
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    }
    function setCSSProperty(el, varName, varValue) {
      el.style.setProperty(varName, varValue);
    }
    function animateCSSModeScroll({
      swiper: swiper2,
      targetPosition,
      side
    }) {
      const window2 = getWindow();
      const startPosition = -swiper2.translate;
      let startTime = null;
      let time;
      const duration = swiper2.params.speed;
      swiper2.wrapperEl.style.scrollSnapType = "none";
      window2.cancelAnimationFrame(swiper2.cssModeFrameID);
      const dir = targetPosition > startPosition ? "next" : "prev";
      const isOutOfBound = (current, target) => {
        return dir === "next" && current >= target || dir === "prev" && current <= target;
      };
      const animate = () => {
        time = (/* @__PURE__ */ new Date()).getTime();
        if (startTime === null) {
          startTime = time;
        }
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) {
          currentPosition = targetPosition;
        }
        swiper2.wrapperEl.scrollTo({
          [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
          swiper2.wrapperEl.style.overflow = "hidden";
          swiper2.wrapperEl.style.scrollSnapType = "";
          setTimeout(() => {
            swiper2.wrapperEl.style.overflow = "";
            swiper2.wrapperEl.scrollTo({
              [side]: currentPosition
            });
          });
          window2.cancelAnimationFrame(swiper2.cssModeFrameID);
          return;
        }
        swiper2.cssModeFrameID = window2.requestAnimationFrame(animate);
      };
      animate();
    }
    function elementChildren(element, selector = "") {
      return [...element.children].filter((el) => el.matches(selector));
    }
    function createElement(tag, classes2 = []) {
      const el = document.createElement(tag);
      el.classList.add(...Array.isArray(classes2) ? classes2 : [classes2]);
      return el;
    }
    function elementPrevAll(el, selector) {
      const prevEls = [];
      while (el.previousElementSibling) {
        const prev = el.previousElementSibling;
        if (selector) {
          if (prev.matches(selector))
            prevEls.push(prev);
        } else
          prevEls.push(prev);
        el = prev;
      }
      return prevEls;
    }
    function elementNextAll(el, selector) {
      const nextEls = [];
      while (el.nextElementSibling) {
        const next = el.nextElementSibling;
        if (selector) {
          if (next.matches(selector))
            nextEls.push(next);
        } else
          nextEls.push(next);
        el = next;
      }
      return nextEls;
    }
    function elementStyle(el, prop) {
      const window2 = getWindow();
      return window2.getComputedStyle(el, null).getPropertyValue(prop);
    }
    function elementIndex(el) {
      let child = el;
      let i;
      if (child) {
        i = 0;
        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1)
            i += 1;
        }
        return i;
      }
      return void 0;
    }
    function elementParents(el, selector) {
      const parents = [];
      let parent = el.parentElement;
      while (parent) {
        if (selector) {
          if (parent.matches(selector))
            parents.push(parent);
        } else {
          parents.push(parent);
        }
        parent = parent.parentElement;
      }
      return parents;
    }
    function elementOuterSize(el, size2, includeMargins) {
      const window2 = getWindow();
      if (includeMargins) {
        return el[size2 === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size2 === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size2 === "width" ? "margin-left" : "margin-bottom"));
      }
      return el.offsetWidth;
    }
    let support;
    function calcSupport() {
      const window2 = getWindow();
      const document2 = getDocument();
      return {
        smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
        touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
      };
    }
    function getSupport() {
      if (!support) {
        support = calcSupport();
      }
      return support;
    }
    let deviceCached;
    function calcDevice({
      userAgent
    } = {}) {
      const support2 = getSupport();
      const window2 = getWindow();
      const platform = window2.navigator.platform;
      const ua = userAgent || window2.navigator.userAgent;
      const device = {
        ios: false,
        android: false
      };
      const screenWidth = window2.screen.width;
      const screenHeight = window2.screen.height;
      const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
      let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      const windows = platform === "Win32";
      let macos = platform === "MacIntel";
      const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
      if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad)
          ipad = [0, 1, "13_0_0"];
        macos = false;
      }
      if (android && !windows) {
        device.os = "android";
        device.android = true;
      }
      if (ipad || iphone || ipod) {
        device.os = "ios";
        device.ios = true;
      }
      return device;
    }
    function getDevice(overrides = {}) {
      if (!deviceCached) {
        deviceCached = calcDevice(overrides);
      }
      return deviceCached;
    }
    let browser;
    function calcBrowser() {
      const window2 = getWindow();
      let needPerspectiveFix = false;
      function isSafari() {
        const ua = window2.navigator.userAgent.toLowerCase();
        return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
      }
      if (isSafari()) {
        const ua = String(window2.navigator.userAgent);
        if (ua.includes("Version/")) {
          const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
          needPerspectiveFix = major < 16 || major === 16 && minor < 2;
        }
      }
      return {
        isSafari: needPerspectiveFix || isSafari(),
        needPerspectiveFix,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
      };
    }
    function getBrowser() {
      if (!browser) {
        browser = calcBrowser();
      }
      return browser;
    }
    function Resize({
      swiper: swiper2,
      on: on2,
      emit: emit2
    }) {
      const window2 = getWindow();
      let observer = null;
      let animationFrame = null;
      const resizeHandler = () => {
        if (!swiper2 || swiper2.destroyed || !swiper2.initialized)
          return;
        emit2("beforeResize");
        emit2("resize");
      };
      const createObserver = () => {
        if (!swiper2 || swiper2.destroyed || !swiper2.initialized)
          return;
        observer = new ResizeObserver((entries) => {
          animationFrame = window2.requestAnimationFrame(() => {
            const {
              width,
              height
            } = swiper2;
            let newWidth = width;
            let newHeight = height;
            entries.forEach(({
              contentBoxSize,
              contentRect,
              target
            }) => {
              if (target && target !== swiper2.el)
                return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });
            if (newWidth !== width || newHeight !== height) {
              resizeHandler();
            }
          });
        });
        observer.observe(swiper2.el);
      };
      const removeObserver = () => {
        if (animationFrame) {
          window2.cancelAnimationFrame(animationFrame);
        }
        if (observer && observer.unobserve && swiper2.el) {
          observer.unobserve(swiper2.el);
          observer = null;
        }
      };
      const orientationChangeHandler = () => {
        if (!swiper2 || swiper2.destroyed || !swiper2.initialized)
          return;
        emit2("orientationchange");
      };
      on2("init", () => {
        if (swiper2.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
          createObserver();
          return;
        }
        window2.addEventListener("resize", resizeHandler);
        window2.addEventListener("orientationchange", orientationChangeHandler);
      });
      on2("destroy", () => {
        removeObserver();
        window2.removeEventListener("resize", resizeHandler);
        window2.removeEventListener("orientationchange", orientationChangeHandler);
      });
    }
    function Observer({
      swiper: swiper2,
      extendParams,
      on: on2,
      emit: emit2
    }) {
      const observers = [];
      const window2 = getWindow();
      const attach = (target, options = {}) => {
        const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations) => {
          if (swiper2.__preventObserver__)
            return;
          if (mutations.length === 1) {
            emit2("observerUpdate", mutations[0]);
            return;
          }
          const observerUpdate = function observerUpdate2() {
            emit2("observerUpdate", mutations[0]);
          };
          if (window2.requestAnimationFrame) {
            window2.requestAnimationFrame(observerUpdate);
          } else {
            window2.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === "undefined" ? true : options.attributes,
          childList: typeof options.childList === "undefined" ? true : options.childList,
          characterData: typeof options.characterData === "undefined" ? true : options.characterData
        });
        observers.push(observer);
      };
      const init = () => {
        if (!swiper2.params.observer)
          return;
        if (swiper2.params.observeParents) {
          const containerParents = elementParents(swiper2.el);
          for (let i = 0; i < containerParents.length; i += 1) {
            attach(containerParents[i]);
          }
        }
        attach(swiper2.el, {
          childList: swiper2.params.observeSlideChildren
        });
        attach(swiper2.wrapperEl, {
          attributes: false
        });
      };
      const destroy = () => {
        observers.forEach((observer) => {
          observer.disconnect();
        });
        observers.splice(0, observers.length);
      };
      extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      });
      on2("init", init);
      on2("destroy", destroy);
    }
    const eventsEmitter = {
      on(events2, handler, priority) {
        const self2 = this;
        if (!self2.eventsListeners || self2.destroyed)
          return self2;
        if (typeof handler !== "function")
          return self2;
        const method = priority ? "unshift" : "push";
        events2.split(" ").forEach((event2) => {
          if (!self2.eventsListeners[event2])
            self2.eventsListeners[event2] = [];
          self2.eventsListeners[event2][method](handler);
        });
        return self2;
      },
      once(events2, handler, priority) {
        const self2 = this;
        if (!self2.eventsListeners || self2.destroyed)
          return self2;
        if (typeof handler !== "function")
          return self2;
        function onceHandler(...args) {
          self2.off(events2, onceHandler);
          if (onceHandler.__emitterProxy) {
            delete onceHandler.__emitterProxy;
          }
          handler.apply(self2, args);
        }
        onceHandler.__emitterProxy = handler;
        return self2.on(events2, onceHandler, priority);
      },
      onAny(handler, priority) {
        const self2 = this;
        if (!self2.eventsListeners || self2.destroyed)
          return self2;
        if (typeof handler !== "function")
          return self2;
        const method = priority ? "unshift" : "push";
        if (self2.eventsAnyListeners.indexOf(handler) < 0) {
          self2.eventsAnyListeners[method](handler);
        }
        return self2;
      },
      offAny(handler) {
        const self2 = this;
        if (!self2.eventsListeners || self2.destroyed)
          return self2;
        if (!self2.eventsAnyListeners)
          return self2;
        const index = self2.eventsAnyListeners.indexOf(handler);
        if (index >= 0) {
          self2.eventsAnyListeners.splice(index, 1);
        }
        return self2;
      },
      off(events2, handler) {
        const self2 = this;
        if (!self2.eventsListeners || self2.destroyed)
          return self2;
        if (!self2.eventsListeners)
          return self2;
        events2.split(" ").forEach((event2) => {
          if (typeof handler === "undefined") {
            self2.eventsListeners[event2] = [];
          } else if (self2.eventsListeners[event2]) {
            self2.eventsListeners[event2].forEach((eventHandler, index) => {
              if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                self2.eventsListeners[event2].splice(index, 1);
              }
            });
          }
        });
        return self2;
      },
      emit(...args) {
        const self2 = this;
        if (!self2.eventsListeners || self2.destroyed)
          return self2;
        if (!self2.eventsListeners)
          return self2;
        let events2;
        let data;
        let context;
        if (typeof args[0] === "string" || Array.isArray(args[0])) {
          events2 = args[0];
          data = args.slice(1, args.length);
          context = self2;
        } else {
          events2 = args[0].events;
          data = args[0].data;
          context = args[0].context || self2;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
        eventsArray.forEach((event2) => {
          if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
            self2.eventsAnyListeners.forEach((eventHandler) => {
              eventHandler.apply(context, [event2, ...data]);
            });
          }
          if (self2.eventsListeners && self2.eventsListeners[event2]) {
            self2.eventsListeners[event2].forEach((eventHandler) => {
              eventHandler.apply(context, data);
            });
          }
        });
        return self2;
      }
    };
    function updateSize() {
      const swiper2 = this;
      let width;
      let height;
      const el = swiper2.el;
      if (typeof swiper2.params.width !== "undefined" && swiper2.params.width !== null) {
        width = swiper2.params.width;
      } else {
        width = el.clientWidth;
      }
      if (typeof swiper2.params.height !== "undefined" && swiper2.params.height !== null) {
        height = swiper2.params.height;
      } else {
        height = el.clientHeight;
      }
      if (width === 0 && swiper2.isHorizontal() || height === 0 && swiper2.isVertical()) {
        return;
      }
      width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
      height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
      if (Number.isNaN(width))
        width = 0;
      if (Number.isNaN(height))
        height = 0;
      Object.assign(swiper2, {
        width,
        height,
        size: swiper2.isHorizontal() ? width : height
      });
    }
    function updateSlides() {
      const swiper2 = this;
      function getDirectionLabel(property) {
        if (swiper2.isHorizontal()) {
          return property;
        }
        return {
          "width": "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          "marginRight": "marginBottom"
        }[property];
      }
      function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
      }
      const params = swiper2.params;
      const {
        wrapperEl,
        slidesEl,
        size: swiperSize,
        rtlTranslate: rtl,
        wrongRTL
      } = swiper2;
      const isVirtual = swiper2.virtual && params.virtual.enabled;
      const previousSlidesLength = isVirtual ? swiper2.virtual.slides.length : swiper2.slides.length;
      const slides = elementChildren(slidesEl, `.${swiper2.params.slideClass}, swiper-slide`);
      const slidesLength = isVirtual ? swiper2.virtual.slides.length : slides.length;
      let snapGrid = [];
      const slidesGrid = [];
      const slidesSizesGrid = [];
      let offsetBefore = params.slidesOffsetBefore;
      if (typeof offsetBefore === "function") {
        offsetBefore = params.slidesOffsetBefore.call(swiper2);
      }
      let offsetAfter = params.slidesOffsetAfter;
      if (typeof offsetAfter === "function") {
        offsetAfter = params.slidesOffsetAfter.call(swiper2);
      }
      const previousSnapGridLength = swiper2.snapGrid.length;
      const previousSlidesGridLength = swiper2.slidesGrid.length;
      let spaceBetween = params.spaceBetween;
      let slidePosition = -offsetBefore;
      let prevSlideSize = 0;
      let index = 0;
      if (typeof swiperSize === "undefined") {
        return;
      }
      if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
      } else if (typeof spaceBetween === "string") {
        spaceBetween = parseFloat(spaceBetween);
      }
      swiper2.virtualSize = -spaceBetween;
      slides.forEach((slideEl) => {
        if (rtl) {
          slideEl.style.marginLeft = "";
        } else {
          slideEl.style.marginRight = "";
        }
        slideEl.style.marginBottom = "";
        slideEl.style.marginTop = "";
      });
      if (params.centeredSlides && params.cssMode) {
        setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
        setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
      }
      const gridEnabled = params.grid && params.grid.rows > 1 && swiper2.grid;
      if (gridEnabled) {
        swiper2.grid.initSlides(slidesLength);
      }
      let slideSize;
      const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
        return typeof params.breakpoints[key].slidesPerView !== "undefined";
      }).length > 0;
      for (let i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        let slide2;
        if (slides[i])
          slide2 = slides[i];
        if (gridEnabled) {
          swiper2.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel);
        }
        if (slides[i] && elementStyle(slide2, "display") === "none")
          continue;
        if (params.slidesPerView === "auto") {
          if (shouldResetSlideSize) {
            slides[i].style[getDirectionLabel("width")] = ``;
          }
          const slideStyles = getComputedStyle(slide2);
          const currentTransform = slide2.style.transform;
          const currentWebKitTransform = slide2.style.webkitTransform;
          if (currentTransform) {
            slide2.style.transform = "none";
          }
          if (currentWebKitTransform) {
            slide2.style.webkitTransform = "none";
          }
          if (params.roundLengths) {
            slideSize = swiper2.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
          } else {
            const width = getDirectionPropertyValue(slideStyles, "width");
            const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
            const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
            const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
            const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
            const boxSizing = slideStyles.getPropertyValue("box-sizing");
            if (boxSizing && boxSizing === "border-box") {
              slideSize = width + marginLeft + marginRight;
            } else {
              const {
                clientWidth,
                offsetWidth
              } = slide2;
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
            }
          }
          if (currentTransform) {
            slide2.style.transform = currentTransform;
          }
          if (currentWebKitTransform) {
            slide2.style.webkitTransform = currentWebKitTransform;
          }
          if (params.roundLengths)
            slideSize = Math.floor(slideSize);
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
          if (params.roundLengths)
            slideSize = Math.floor(slideSize);
          if (slides[i]) {
            slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
          }
        }
        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (prevSlideSize === 0 && i !== 0)
            slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (i === 0)
            slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1e3)
            slidePosition = 0;
          if (params.roundLengths)
            slidePosition = Math.floor(slidePosition);
          if (index % params.slidesPerGroup === 0)
            snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths)
            slidePosition = Math.floor(slidePosition);
          if ((index - Math.min(swiper2.params.slidesPerGroupSkip, index)) % swiper2.params.slidesPerGroup === 0)
            snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper2.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }
      swiper2.virtualSize = Math.max(swiper2.virtualSize, swiperSize) + offsetAfter;
      if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
        wrapperEl.style.width = `${swiper2.virtualSize + spaceBetween}px`;
      }
      if (params.setWrapperSize) {
        wrapperEl.style[getDirectionLabel("width")] = `${swiper2.virtualSize + spaceBetween}px`;
      }
      if (gridEnabled) {
        swiper2.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
      }
      if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (params.roundLengths)
            slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] <= swiper2.virtualSize - swiperSize) {
            newSlidesGrid.push(slidesGridItem);
          }
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper2.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper2.virtualSize - swiperSize);
        }
      }
      if (isVirtual && params.loop) {
        const size2 = slidesSizesGrid[0] + spaceBetween;
        if (params.slidesPerGroup > 1) {
          const groups = Math.ceil((swiper2.virtual.slidesBefore + swiper2.virtual.slidesAfter) / params.slidesPerGroup);
          const groupSize = size2 * params.slidesPerGroup;
          for (let i = 0; i < groups; i += 1) {
            snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
          }
        }
        for (let i = 0; i < swiper2.virtual.slidesBefore + swiper2.virtual.slidesAfter; i += 1) {
          if (params.slidesPerGroup === 1) {
            snapGrid.push(snapGrid[snapGrid.length - 1] + size2);
          }
          slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size2);
          swiper2.virtualSize += size2;
        }
      }
      if (snapGrid.length === 0)
        snapGrid = [0];
      if (spaceBetween !== 0) {
        const key = swiper2.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
        slides.filter((_, slideIndex) => {
          if (!params.cssMode || params.loop)
            return true;
          if (slideIndex === slides.length - 1) {
            return false;
          }
          return true;
        }).forEach((slideEl) => {
          slideEl.style[key] = `${spaceBetween}px`;
        });
      }
      if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue) => {
          allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap) => {
          if (snap <= 0)
            return -offsetBefore;
          if (snap > maxSnap)
            return maxSnap + offsetAfter;
          return snap;
        });
      }
      if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue) => {
          allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        if (allSlidesSize < swiperSize) {
          const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
          snapGrid.forEach((snap, snapIndex) => {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach((snap, snapIndex) => {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }
      Object.assign(swiper2, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
      });
      if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
        setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper2.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper2.snapGrid[0];
        const addToSlidesGrid = -swiper2.slidesGrid[0];
        swiper2.snapGrid = swiper2.snapGrid.map((v) => v + addToSnapGrid);
        swiper2.slidesGrid = swiper2.slidesGrid.map((v) => v + addToSlidesGrid);
      }
      if (slidesLength !== previousSlidesLength) {
        swiper2.emit("slidesLengthChange");
      }
      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper2.params.watchOverflow)
          swiper2.checkOverflow();
        swiper2.emit("snapGridLengthChange");
      }
      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper2.emit("slidesGridLengthChange");
      }
      if (params.watchSlidesProgress) {
        swiper2.updateSlidesOffset();
      }
      if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper2.el.classList.contains(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
          if (!hasClassBackfaceClassAdded)
            swiper2.el.classList.add(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) {
          swiper2.el.classList.remove(backFaceHiddenClass);
        }
      }
    }
    function updateAutoHeight(speed) {
      const swiper2 = this;
      const activeSlides = [];
      const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
      let newHeight = 0;
      let i;
      if (typeof speed === "number") {
        swiper2.setTransition(speed);
      } else if (speed === true) {
        swiper2.setTransition(swiper2.params.speed);
      }
      const getSlideByIndex = (index) => {
        if (isVirtual) {
          return swiper2.slides[swiper2.getSlideIndexByData(index)];
        }
        return swiper2.slides[index];
      };
      if (swiper2.params.slidesPerView !== "auto" && swiper2.params.slidesPerView > 1) {
        if (swiper2.params.centeredSlides) {
          (swiper2.visibleSlides || []).forEach((slide2) => {
            activeSlides.push(slide2);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper2.params.slidesPerView); i += 1) {
            const index = swiper2.activeIndex + i;
            if (index > swiper2.slides.length && !isVirtual)
              break;
            activeSlides.push(getSlideByIndex(index));
          }
        }
      } else {
        activeSlides.push(getSlideByIndex(swiper2.activeIndex));
      }
      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== "undefined") {
          const height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      }
      if (newHeight || newHeight === 0)
        swiper2.wrapperEl.style.height = `${newHeight}px`;
    }
    function updateSlidesOffset() {
      const swiper2 = this;
      const slides = swiper2.slides;
      const minusOffset = swiper2.isElement ? swiper2.isHorizontal() ? swiper2.wrapperEl.offsetLeft : swiper2.wrapperEl.offsetTop : 0;
      for (let i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = (swiper2.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper2.cssOverflowAdjustment();
      }
    }
    function updateSlidesProgress(translate2 = this && this.translate || 0) {
      const swiper2 = this;
      const params = swiper2.params;
      const {
        slides,
        rtlTranslate: rtl,
        snapGrid
      } = swiper2;
      if (slides.length === 0)
        return;
      if (typeof slides[0].swiperSlideOffset === "undefined")
        swiper2.updateSlidesOffset();
      let offsetCenter = -translate2;
      if (rtl)
        offsetCenter = translate2;
      slides.forEach((slideEl) => {
        slideEl.classList.remove(params.slideVisibleClass);
      });
      swiper2.visibleSlidesIndexes = [];
      swiper2.visibleSlides = [];
      let spaceBetween = params.spaceBetween;
      if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper2.size;
      } else if (typeof spaceBetween === "string") {
        spaceBetween = parseFloat(spaceBetween);
      }
      for (let i = 0; i < slides.length; i += 1) {
        const slide2 = slides[i];
        let slideOffset = slide2.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) {
          slideOffset -= slides[0].swiperSlideOffset;
        }
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper2.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper2.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper2.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper2.size - 1 || slideAfter > 1 && slideAfter <= swiper2.size || slideBefore <= 0 && slideAfter >= swiper2.size;
        if (isVisible) {
          swiper2.visibleSlides.push(slide2);
          swiper2.visibleSlidesIndexes.push(i);
          slides[i].classList.add(params.slideVisibleClass);
        }
        slide2.progress = rtl ? -slideProgress : slideProgress;
        slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
      }
    }
    function updateProgress(translate2) {
      const swiper2 = this;
      if (typeof translate2 === "undefined") {
        const multiplier = swiper2.rtlTranslate ? -1 : 1;
        translate2 = swiper2 && swiper2.translate && swiper2.translate * multiplier || 0;
      }
      const params = swiper2.params;
      const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
      let {
        progress,
        isBeginning,
        isEnd,
        progressLoop
      } = swiper2;
      const wasBeginning = isBeginning;
      const wasEnd = isEnd;
      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate2 - swiper2.minTranslate()) / translatesDiff;
        const isBeginningRounded = Math.abs(translate2 - swiper2.minTranslate()) < 1;
        const isEndRounded = Math.abs(translate2 - swiper2.maxTranslate()) < 1;
        isBeginning = isBeginningRounded || progress <= 0;
        isEnd = isEndRounded || progress >= 1;
        if (isBeginningRounded)
          progress = 0;
        if (isEndRounded)
          progress = 1;
      }
      if (params.loop) {
        const firstSlideIndex = swiper2.getSlideIndexByData(0);
        const lastSlideIndex = swiper2.getSlideIndexByData(swiper2.slides.length - 1);
        const firstSlideTranslate = swiper2.slidesGrid[firstSlideIndex];
        const lastSlideTranslate = swiper2.slidesGrid[lastSlideIndex];
        const translateMax = swiper2.slidesGrid[swiper2.slidesGrid.length - 1];
        const translateAbs = Math.abs(translate2);
        if (translateAbs >= firstSlideTranslate) {
          progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
        } else {
          progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
        }
        if (progressLoop > 1)
          progressLoop -= 1;
      }
      Object.assign(swiper2, {
        progress,
        progressLoop,
        isBeginning,
        isEnd
      });
      if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
        swiper2.updateSlidesProgress(translate2);
      if (isBeginning && !wasBeginning) {
        swiper2.emit("reachBeginning toEdge");
      }
      if (isEnd && !wasEnd) {
        swiper2.emit("reachEnd toEdge");
      }
      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper2.emit("fromEdge");
      }
      swiper2.emit("progress", progress);
    }
    function updateSlidesClasses() {
      const swiper2 = this;
      const {
        slides,
        params,
        slidesEl,
        activeIndex
      } = swiper2;
      const isVirtual = swiper2.virtual && params.virtual.enabled;
      const getFilteredSlide = (selector) => {
        return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
      };
      slides.forEach((slideEl) => {
        slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
      });
      let activeSlide;
      if (isVirtual) {
        if (params.loop) {
          let slideIndex = activeIndex - swiper2.virtual.slidesBefore;
          if (slideIndex < 0)
            slideIndex = swiper2.virtual.slides.length + slideIndex;
          if (slideIndex >= swiper2.virtual.slides.length)
            slideIndex -= swiper2.virtual.slides.length;
          activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        } else {
          activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
        }
      } else {
        activeSlide = slides[activeIndex];
      }
      if (activeSlide) {
        activeSlide.classList.add(params.slideActiveClass);
        let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      }
      swiper2.emitSlidesClasses();
    }
    const processLazyPreloader = (swiper2, imageEl) => {
      if (!swiper2 || swiper2.destroyed || !swiper2.params)
        return;
      const slideSelector = () => swiper2.isElement ? `swiper-slide` : `.${swiper2.params.slideClass}`;
      const slideEl = imageEl.closest(slideSelector());
      if (slideEl) {
        const lazyEl = slideEl.querySelector(`.${swiper2.params.lazyPreloaderClass}`);
        if (lazyEl)
          lazyEl.remove();
      }
    };
    const unlazy = (swiper2, index) => {
      if (!swiper2.slides[index])
        return;
      const imageEl = swiper2.slides[index].querySelector('[loading="lazy"]');
      if (imageEl)
        imageEl.removeAttribute("loading");
    };
    const preload = (swiper2) => {
      if (!swiper2 || swiper2.destroyed || !swiper2.params)
        return;
      let amount = swiper2.params.lazyPreloadPrevNext;
      const len = swiper2.slides.length;
      if (!len || !amount || amount < 0)
        return;
      amount = Math.min(amount, len);
      const slidesPerView = swiper2.params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : Math.ceil(swiper2.params.slidesPerView);
      const activeIndex = swiper2.activeIndex;
      if (swiper2.params.grid && swiper2.params.grid.rows > 1) {
        const activeColumn = activeIndex;
        const preloadColumns = [activeColumn - amount];
        preloadColumns.push(...Array.from({
          length: amount
        }).map((_, i) => {
          return activeColumn + slidesPerView + i;
        }));
        swiper2.slides.forEach((slideEl, i) => {
          if (preloadColumns.includes(slideEl.column))
            unlazy(swiper2, i);
        });
        return;
      }
      const slideIndexLastInView = activeIndex + slidesPerView - 1;
      if (swiper2.params.rewind || swiper2.params.loop) {
        for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
          const realIndex = (i % len + len) % len;
          if (realIndex < activeIndex || realIndex > slideIndexLastInView)
            unlazy(swiper2, realIndex);
        }
      } else {
        for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
          if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
            unlazy(swiper2, i);
          }
        }
      }
    };
    function getActiveIndexByTranslate(swiper2) {
      const {
        slidesGrid,
        params
      } = swiper2;
      const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
      let activeIndex;
      for (let i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate2 >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined")
          activeIndex = 0;
      }
      return activeIndex;
    }
    function updateActiveIndex(newActiveIndex) {
      const swiper2 = this;
      const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
      const {
        snapGrid,
        params,
        activeIndex: previousIndex,
        realIndex: previousRealIndex,
        snapIndex: previousSnapIndex
      } = swiper2;
      let activeIndex = newActiveIndex;
      let snapIndex;
      const getVirtualRealIndex = (aIndex) => {
        let realIndex2 = aIndex - swiper2.virtual.slidesBefore;
        if (realIndex2 < 0) {
          realIndex2 = swiper2.virtual.slides.length + realIndex2;
        }
        if (realIndex2 >= swiper2.virtual.slides.length) {
          realIndex2 -= swiper2.virtual.slides.length;
        }
        return realIndex2;
      };
      if (typeof activeIndex === "undefined") {
        activeIndex = getActiveIndexByTranslate(swiper2);
      }
      if (snapGrid.indexOf(translate2) >= 0) {
        snapIndex = snapGrid.indexOf(translate2);
      } else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }
      if (snapIndex >= snapGrid.length)
        snapIndex = snapGrid.length - 1;
      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper2.snapIndex = snapIndex;
          swiper2.emit("snapIndexChange");
        }
        if (swiper2.params.loop && swiper2.virtual && swiper2.params.virtual.enabled) {
          swiper2.realIndex = getVirtualRealIndex(activeIndex);
        }
        return;
      }
      let realIndex;
      if (swiper2.virtual && params.virtual.enabled && params.loop) {
        realIndex = getVirtualRealIndex(activeIndex);
      } else if (swiper2.slides[activeIndex]) {
        realIndex = parseInt(swiper2.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10);
      } else {
        realIndex = activeIndex;
      }
      Object.assign(swiper2, {
        previousSnapIndex,
        snapIndex,
        previousRealIndex,
        realIndex,
        previousIndex,
        activeIndex
      });
      if (swiper2.initialized) {
        preload(swiper2);
      }
      swiper2.emit("activeIndexChange");
      swiper2.emit("snapIndexChange");
      if (previousRealIndex !== realIndex) {
        swiper2.emit("realIndexChange");
      }
      if (swiper2.initialized || swiper2.params.runCallbacksOnInit) {
        swiper2.emit("slideChange");
      }
    }
    function updateClickedSlide(e) {
      const swiper2 = this;
      const params = swiper2.params;
      const slide2 = e.closest(`.${params.slideClass}, swiper-slide`);
      let slideFound = false;
      let slideIndex;
      if (slide2) {
        for (let i = 0; i < swiper2.slides.length; i += 1) {
          if (swiper2.slides[i] === slide2) {
            slideFound = true;
            slideIndex = i;
            break;
          }
        }
      }
      if (slide2 && slideFound) {
        swiper2.clickedSlide = slide2;
        if (swiper2.virtual && swiper2.params.virtual.enabled) {
          swiper2.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
        } else {
          swiper2.clickedIndex = slideIndex;
        }
      } else {
        swiper2.clickedSlide = void 0;
        swiper2.clickedIndex = void 0;
        return;
      }
      if (params.slideToClickedSlide && swiper2.clickedIndex !== void 0 && swiper2.clickedIndex !== swiper2.activeIndex) {
        swiper2.slideToClickedSlide();
      }
    }
    const update = {
      updateSize,
      updateSlides,
      updateAutoHeight,
      updateSlidesOffset,
      updateSlidesProgress,
      updateProgress,
      updateSlidesClasses,
      updateActiveIndex,
      updateClickedSlide
    };
    function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
      const swiper2 = this;
      const {
        params,
        rtlTranslate: rtl,
        translate: translate2,
        wrapperEl
      } = swiper2;
      if (params.virtualTranslate) {
        return rtl ? -translate2 : translate2;
      }
      if (params.cssMode) {
        return translate2;
      }
      let currentTranslate = getTranslate(wrapperEl, axis);
      currentTranslate += swiper2.cssOverflowAdjustment();
      if (rtl)
        currentTranslate = -currentTranslate;
      return currentTranslate || 0;
    }
    function setTranslate(translate2, byController) {
      const swiper2 = this;
      const {
        rtlTranslate: rtl,
        params,
        wrapperEl,
        progress
      } = swiper2;
      let x = 0;
      let y = 0;
      const z2 = 0;
      if (swiper2.isHorizontal()) {
        x = rtl ? -translate2 : translate2;
      } else {
        y = translate2;
      }
      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }
      swiper2.previousTranslate = swiper2.translate;
      swiper2.translate = swiper2.isHorizontal() ? x : y;
      if (params.cssMode) {
        wrapperEl[swiper2.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper2.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        if (swiper2.isHorizontal()) {
          x -= swiper2.cssOverflowAdjustment();
        } else {
          y -= swiper2.cssOverflowAdjustment();
        }
        wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z2}px)`;
      }
      let newProgress;
      const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate2 - swiper2.minTranslate()) / translatesDiff;
      }
      if (newProgress !== progress) {
        swiper2.updateProgress(translate2);
      }
      swiper2.emit("setTranslate", swiper2.translate, byController);
    }
    function minTranslate() {
      return -this.snapGrid[0];
    }
    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
    function translateTo(translate2 = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
      const swiper2 = this;
      const {
        params,
        wrapperEl
      } = swiper2;
      if (swiper2.animating && params.preventInteractionOnTransition) {
        return false;
      }
      const minTranslate2 = swiper2.minTranslate();
      const maxTranslate2 = swiper2.maxTranslate();
      let newTranslate;
      if (translateBounds && translate2 > minTranslate2)
        newTranslate = minTranslate2;
      else if (translateBounds && translate2 < maxTranslate2)
        newTranslate = maxTranslate2;
      else
        newTranslate = translate2;
      swiper2.updateProgress(newTranslate);
      if (params.cssMode) {
        const isH = swiper2.isHorizontal();
        if (speed === 0) {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        } else {
          if (!swiper2.support.smoothScroll) {
            animateCSSModeScroll({
              swiper: swiper2,
              targetPosition: -newTranslate,
              side: isH ? "left" : "top"
            });
            return true;
          }
          wrapperEl.scrollTo({
            [isH ? "left" : "top"]: -newTranslate,
            behavior: "smooth"
          });
        }
        return true;
      }
      if (speed === 0) {
        swiper2.setTransition(0);
        swiper2.setTranslate(newTranslate);
        if (runCallbacks) {
          swiper2.emit("beforeTransitionStart", speed, internal);
          swiper2.emit("transitionEnd");
        }
      } else {
        swiper2.setTransition(speed);
        swiper2.setTranslate(newTranslate);
        if (runCallbacks) {
          swiper2.emit("beforeTransitionStart", speed, internal);
          swiper2.emit("transitionStart");
        }
        if (!swiper2.animating) {
          swiper2.animating = true;
          if (!swiper2.onTranslateToWrapperTransitionEnd) {
            swiper2.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
              if (!swiper2 || swiper2.destroyed)
                return;
              if (e.target !== this)
                return;
              swiper2.wrapperEl.removeEventListener("transitionend", swiper2.onTranslateToWrapperTransitionEnd);
              swiper2.onTranslateToWrapperTransitionEnd = null;
              delete swiper2.onTranslateToWrapperTransitionEnd;
              if (runCallbacks) {
                swiper2.emit("transitionEnd");
              }
            };
          }
          swiper2.wrapperEl.addEventListener("transitionend", swiper2.onTranslateToWrapperTransitionEnd);
        }
      }
      return true;
    }
    const translate = {
      getTranslate: getSwiperTranslate,
      setTranslate,
      minTranslate,
      maxTranslate,
      translateTo
    };
    function setTransition(duration, byController) {
      const swiper2 = this;
      if (!swiper2.params.cssMode) {
        swiper2.wrapperEl.style.transitionDuration = `${duration}ms`;
      }
      swiper2.emit("setTransition", duration, byController);
    }
    function transitionEmit({
      swiper: swiper2,
      runCallbacks,
      direction,
      step
    }) {
      const {
        activeIndex,
        previousIndex
      } = swiper2;
      let dir = direction;
      if (!dir) {
        if (activeIndex > previousIndex)
          dir = "next";
        else if (activeIndex < previousIndex)
          dir = "prev";
        else
          dir = "reset";
      }
      swiper2.emit(`transition${step}`);
      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === "reset") {
          swiper2.emit(`slideResetTransition${step}`);
          return;
        }
        swiper2.emit(`slideChangeTransition${step}`);
        if (dir === "next") {
          swiper2.emit(`slideNextTransition${step}`);
        } else {
          swiper2.emit(`slidePrevTransition${step}`);
        }
      }
    }
    function transitionStart(runCallbacks = true, direction) {
      const swiper2 = this;
      const {
        params
      } = swiper2;
      if (params.cssMode)
        return;
      if (params.autoHeight) {
        swiper2.updateAutoHeight();
      }
      transitionEmit({
        swiper: swiper2,
        runCallbacks,
        direction,
        step: "Start"
      });
    }
    function transitionEnd(runCallbacks = true, direction) {
      const swiper2 = this;
      const {
        params
      } = swiper2;
      swiper2.animating = false;
      if (params.cssMode)
        return;
      swiper2.setTransition(0);
      transitionEmit({
        swiper: swiper2,
        runCallbacks,
        direction,
        step: "End"
      });
    }
    const transition = {
      setTransition,
      transitionStart,
      transitionEnd
    };
    function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
      if (typeof index === "string") {
        index = parseInt(index, 10);
      }
      const swiper2 = this;
      let slideIndex = index;
      if (slideIndex < 0)
        slideIndex = 0;
      const {
        params,
        snapGrid,
        slidesGrid,
        previousIndex,
        activeIndex,
        rtlTranslate: rtl,
        wrapperEl,
        enabled
      } = swiper2;
      if (swiper2.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
        return false;
      }
      const skip = Math.min(swiper2.params.slidesPerGroupSkip, slideIndex);
      let snapIndex = skip + Math.floor((slideIndex - skip) / swiper2.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length)
        snapIndex = snapGrid.length - 1;
      const translate2 = -snapGrid[snapIndex];
      if (params.normalizeSlideIndex) {
        for (let i = 0; i < slidesGrid.length; i += 1) {
          const normalizedTranslate = -Math.floor(translate2 * 100);
          const normalizedGrid = Math.floor(slidesGrid[i] * 100);
          const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
          if (typeof slidesGrid[i + 1] !== "undefined") {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
              slideIndex = i;
            } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
              slideIndex = i + 1;
            }
          } else if (normalizedTranslate >= normalizedGrid) {
            slideIndex = i;
          }
        }
      }
      if (swiper2.initialized && slideIndex !== activeIndex) {
        if (!swiper2.allowSlideNext && (rtl ? translate2 > swiper2.translate && translate2 > swiper2.minTranslate() : translate2 < swiper2.translate && translate2 < swiper2.minTranslate())) {
          return false;
        }
        if (!swiper2.allowSlidePrev && translate2 > swiper2.translate && translate2 > swiper2.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) {
            return false;
          }
        }
      }
      if (slideIndex !== (previousIndex || 0) && runCallbacks) {
        swiper2.emit("beforeSlideChangeStart");
      }
      swiper2.updateProgress(translate2);
      let direction;
      if (slideIndex > activeIndex)
        direction = "next";
      else if (slideIndex < activeIndex)
        direction = "prev";
      else
        direction = "reset";
      if (rtl && -translate2 === swiper2.translate || !rtl && translate2 === swiper2.translate) {
        swiper2.updateActiveIndex(slideIndex);
        if (params.autoHeight) {
          swiper2.updateAutoHeight();
        }
        swiper2.updateSlidesClasses();
        if (params.effect !== "slide") {
          swiper2.setTranslate(translate2);
        }
        if (direction !== "reset") {
          swiper2.transitionStart(runCallbacks, direction);
          swiper2.transitionEnd(runCallbacks, direction);
        }
        return false;
      }
      if (params.cssMode) {
        const isH = swiper2.isHorizontal();
        const t = rtl ? translate2 : -translate2;
        if (speed === 0) {
          const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
          if (isVirtual) {
            swiper2.wrapperEl.style.scrollSnapType = "none";
            swiper2._immediateVirtual = true;
          }
          if (isVirtual && !swiper2._cssModeVirtualInitialSet && swiper2.params.initialSlide > 0) {
            swiper2._cssModeVirtualInitialSet = true;
            requestAnimationFrame(() => {
              wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
            });
          } else {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
          }
          if (isVirtual) {
            requestAnimationFrame(() => {
              swiper2.wrapperEl.style.scrollSnapType = "";
              swiper2._immediateVirtual = false;
            });
          }
        } else {
          if (!swiper2.support.smoothScroll) {
            animateCSSModeScroll({
              swiper: swiper2,
              targetPosition: t,
              side: isH ? "left" : "top"
            });
            return true;
          }
          wrapperEl.scrollTo({
            [isH ? "left" : "top"]: t,
            behavior: "smooth"
          });
        }
        return true;
      }
      swiper2.setTransition(speed);
      swiper2.setTranslate(translate2);
      swiper2.updateActiveIndex(slideIndex);
      swiper2.updateSlidesClasses();
      swiper2.emit("beforeTransitionStart", speed, internal);
      swiper2.transitionStart(runCallbacks, direction);
      if (speed === 0) {
        swiper2.transitionEnd(runCallbacks, direction);
      } else if (!swiper2.animating) {
        swiper2.animating = true;
        if (!swiper2.onSlideToWrapperTransitionEnd) {
          swiper2.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
            if (!swiper2 || swiper2.destroyed)
              return;
            if (e.target !== this)
              return;
            swiper2.wrapperEl.removeEventListener("transitionend", swiper2.onSlideToWrapperTransitionEnd);
            swiper2.onSlideToWrapperTransitionEnd = null;
            delete swiper2.onSlideToWrapperTransitionEnd;
            swiper2.transitionEnd(runCallbacks, direction);
          };
        }
        swiper2.wrapperEl.addEventListener("transitionend", swiper2.onSlideToWrapperTransitionEnd);
      }
      return true;
    }
    function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
      if (typeof index === "string") {
        const indexAsNumber = parseInt(index, 10);
        index = indexAsNumber;
      }
      const swiper2 = this;
      let newIndex = index;
      if (swiper2.params.loop) {
        if (swiper2.virtual && swiper2.params.virtual.enabled) {
          newIndex = newIndex + swiper2.virtual.slidesBefore;
        } else {
          newIndex = swiper2.getSlideIndexByData(newIndex);
        }
      }
      return swiper2.slideTo(newIndex, speed, runCallbacks, internal);
    }
    function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
      const swiper2 = this;
      const {
        enabled,
        params,
        animating
      } = swiper2;
      if (!enabled)
        return swiper2;
      let perGroup = params.slidesPerGroup;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        perGroup = Math.max(swiper2.slidesPerViewDynamic("current", true), 1);
      }
      const increment = swiper2.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
      const isVirtual = swiper2.virtual && params.virtual.enabled;
      if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding)
          return false;
        swiper2.loopFix({
          direction: "next"
        });
        swiper2._clientLeft = swiper2.wrapperEl.clientLeft;
      }
      if (params.rewind && swiper2.isEnd) {
        return swiper2.slideTo(0, speed, runCallbacks, internal);
      }
      return swiper2.slideTo(swiper2.activeIndex + increment, speed, runCallbacks, internal);
    }
    function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
      const swiper2 = this;
      const {
        params,
        snapGrid,
        slidesGrid,
        rtlTranslate,
        enabled,
        animating
      } = swiper2;
      if (!enabled)
        return swiper2;
      const isVirtual = swiper2.virtual && params.virtual.enabled;
      if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding)
          return false;
        swiper2.loopFix({
          direction: "prev"
        });
        swiper2._clientLeft = swiper2.wrapperEl.clientLeft;
      }
      const translate2 = rtlTranslate ? swiper2.translate : -swiper2.translate;
      function normalize(val) {
        if (val < 0)
          return -Math.floor(Math.abs(val));
        return Math.floor(val);
      }
      const normalizedTranslate = normalize(translate2);
      const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
      let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
      if (typeof prevSnap === "undefined" && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex) => {
          if (normalizedTranslate >= snap) {
            prevSnapIndex = snapIndex;
          }
        });
        if (typeof prevSnapIndex !== "undefined") {
          prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
      }
      let prevIndex = 0;
      if (typeof prevSnap !== "undefined") {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0)
          prevIndex = swiper2.activeIndex - 1;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
          prevIndex = prevIndex - swiper2.slidesPerViewDynamic("previous", true) + 1;
          prevIndex = Math.max(prevIndex, 0);
        }
      }
      if (params.rewind && swiper2.isBeginning) {
        const lastIndex = swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual ? swiper2.virtual.slides.length - 1 : swiper2.slides.length - 1;
        return swiper2.slideTo(lastIndex, speed, runCallbacks, internal);
      }
      return swiper2.slideTo(prevIndex, speed, runCallbacks, internal);
    }
    function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
      const swiper2 = this;
      return swiper2.slideTo(swiper2.activeIndex, speed, runCallbacks, internal);
    }
    function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
      const swiper2 = this;
      let index = swiper2.activeIndex;
      const skip = Math.min(swiper2.params.slidesPerGroupSkip, index);
      const snapIndex = skip + Math.floor((index - skip) / swiper2.params.slidesPerGroup);
      const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
      if (translate2 >= swiper2.snapGrid[snapIndex]) {
        const currentSnap = swiper2.snapGrid[snapIndex];
        const nextSnap = swiper2.snapGrid[snapIndex + 1];
        if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper2.params.slidesPerGroup;
        }
      } else {
        const prevSnap = swiper2.snapGrid[snapIndex - 1];
        const currentSnap = swiper2.snapGrid[snapIndex];
        if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
          index -= swiper2.params.slidesPerGroup;
        }
      }
      index = Math.max(index, 0);
      index = Math.min(index, swiper2.slidesGrid.length - 1);
      return swiper2.slideTo(index, speed, runCallbacks, internal);
    }
    function slideToClickedSlide() {
      const swiper2 = this;
      const {
        params,
        slidesEl
      } = swiper2;
      const slidesPerView = params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : params.slidesPerView;
      let slideToIndex = swiper2.clickedIndex;
      let realIndex;
      const slideSelector = swiper2.isElement ? `swiper-slide` : `.${params.slideClass}`;
      if (params.loop) {
        if (swiper2.animating)
          return;
        realIndex = parseInt(swiper2.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
        if (params.centeredSlides) {
          if (slideToIndex < swiper2.loopedSlides - slidesPerView / 2 || slideToIndex > swiper2.slides.length - swiper2.loopedSlides + slidesPerView / 2) {
            swiper2.loopFix();
            slideToIndex = swiper2.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
            nextTick(() => {
              swiper2.slideTo(slideToIndex);
            });
          } else {
            swiper2.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper2.slides.length - slidesPerView) {
          swiper2.loopFix();
          slideToIndex = swiper2.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
          nextTick(() => {
            swiper2.slideTo(slideToIndex);
          });
        } else {
          swiper2.slideTo(slideToIndex);
        }
      } else {
        swiper2.slideTo(slideToIndex);
      }
    }
    const slide = {
      slideTo,
      slideToLoop,
      slideNext,
      slidePrev,
      slideReset,
      slideToClosest,
      slideToClickedSlide
    };
    function loopCreate(slideRealIndex) {
      const swiper2 = this;
      const {
        params,
        slidesEl
      } = swiper2;
      if (!params.loop || swiper2.virtual && swiper2.params.virtual.enabled)
        return;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
      swiper2.loopFix({
        slideRealIndex,
        direction: params.centeredSlides ? void 0 : "next"
      });
    }
    function loopFix({
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = {}) {
      const swiper2 = this;
      if (!swiper2.params.loop)
        return;
      swiper2.emit("beforeLoopFix");
      const {
        slides,
        allowSlidePrev,
        allowSlideNext,
        slidesEl,
        params
      } = swiper2;
      swiper2.allowSlidePrev = true;
      swiper2.allowSlideNext = true;
      if (swiper2.virtual && params.virtual.enabled) {
        if (slideTo2) {
          if (!params.centeredSlides && swiper2.snapIndex === 0) {
            swiper2.slideTo(swiper2.virtual.slides.length, 0, false, true);
          } else if (params.centeredSlides && swiper2.snapIndex < params.slidesPerView) {
            swiper2.slideTo(swiper2.virtual.slides.length + swiper2.snapIndex, 0, false, true);
          } else if (swiper2.snapIndex === swiper2.snapGrid.length - 1) {
            swiper2.slideTo(swiper2.virtual.slidesBefore, 0, false, true);
          }
        }
        swiper2.allowSlidePrev = allowSlidePrev;
        swiper2.allowSlideNext = allowSlideNext;
        swiper2.emit("loopFix");
        return;
      }
      const slidesPerView = params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
      let loopedSlides = params.loopedSlides || slidesPerView;
      if (loopedSlides % params.slidesPerGroup !== 0) {
        loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
      }
      swiper2.loopedSlides = loopedSlides;
      const prependSlidesIndexes = [];
      const appendSlidesIndexes = [];
      let activeIndex = swiper2.activeIndex;
      if (typeof activeSlideIndex === "undefined") {
        activeSlideIndex = swiper2.getSlideIndex(swiper2.slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
      } else {
        activeIndex = activeSlideIndex;
      }
      const isNext = direction === "next" || !direction;
      const isPrev = direction === "prev" || !direction;
      let slidesPrepended = 0;
      let slidesAppended = 0;
      if (activeSlideIndex < loopedSlides) {
        slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
        for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
          const index = i - Math.floor(i / slides.length) * slides.length;
          prependSlidesIndexes.push(slides.length - index - 1);
        }
      } else if (activeSlideIndex > swiper2.slides.length - loopedSlides * 2) {
        slidesAppended = Math.max(activeSlideIndex - (swiper2.slides.length - loopedSlides * 2), params.slidesPerGroup);
        for (let i = 0; i < slidesAppended; i += 1) {
          const index = i - Math.floor(i / slides.length) * slides.length;
          appendSlidesIndexes.push(index);
        }
      }
      if (isPrev) {
        prependSlidesIndexes.forEach((index) => {
          swiper2.slides[index].swiperLoopMoveDOM = true;
          slidesEl.prepend(swiper2.slides[index]);
          swiper2.slides[index].swiperLoopMoveDOM = false;
        });
      }
      if (isNext) {
        appendSlidesIndexes.forEach((index) => {
          swiper2.slides[index].swiperLoopMoveDOM = true;
          slidesEl.append(swiper2.slides[index]);
          swiper2.slides[index].swiperLoopMoveDOM = false;
        });
      }
      swiper2.recalcSlides();
      if (params.slidesPerView === "auto") {
        swiper2.updateSlides();
      }
      if (params.watchSlidesProgress) {
        swiper2.updateSlidesOffset();
      }
      if (slideTo2) {
        if (prependSlidesIndexes.length > 0 && isPrev) {
          if (typeof slideRealIndex === "undefined") {
            const currentSlideTranslate = swiper2.slidesGrid[activeIndex];
            const newSlideTranslate = swiper2.slidesGrid[activeIndex + slidesPrepended];
            const diff = newSlideTranslate - currentSlideTranslate;
            if (byMousewheel) {
              swiper2.setTranslate(swiper2.translate - diff);
            } else {
              swiper2.slideTo(activeIndex + slidesPrepended, 0, false, true);
              if (setTranslate2) {
                swiper2.touches[swiper2.isHorizontal() ? "startX" : "startY"] += diff;
              }
            }
          } else {
            if (setTranslate2) {
              swiper2.slideToLoop(slideRealIndex, 0, false, true);
            }
          }
        } else if (appendSlidesIndexes.length > 0 && isNext) {
          if (typeof slideRealIndex === "undefined") {
            const currentSlideTranslate = swiper2.slidesGrid[activeIndex];
            const newSlideTranslate = swiper2.slidesGrid[activeIndex - slidesAppended];
            const diff = newSlideTranslate - currentSlideTranslate;
            if (byMousewheel) {
              swiper2.setTranslate(swiper2.translate - diff);
            } else {
              swiper2.slideTo(activeIndex - slidesAppended, 0, false, true);
              if (setTranslate2) {
                swiper2.touches[swiper2.isHorizontal() ? "startX" : "startY"] += diff;
              }
            }
          } else {
            swiper2.slideToLoop(slideRealIndex, 0, false, true);
          }
        }
      }
      swiper2.allowSlidePrev = allowSlidePrev;
      swiper2.allowSlideNext = allowSlideNext;
      if (swiper2.controller && swiper2.controller.control && !byController) {
        const loopParams = {
          slideRealIndex,
          slideTo: false,
          direction,
          setTranslate: setTranslate2,
          activeSlideIndex,
          byController: true
        };
        if (Array.isArray(swiper2.controller.control)) {
          swiper2.controller.control.forEach((c2) => {
            if (!c2.destroyed && c2.params.loop)
              c2.loopFix(loopParams);
          });
        } else if (swiper2.controller.control instanceof swiper2.constructor && swiper2.controller.control.params.loop) {
          swiper2.controller.control.loopFix(loopParams);
        }
      }
      swiper2.emit("loopFix");
    }
    function loopDestroy() {
      const swiper2 = this;
      const {
        params,
        slidesEl
      } = swiper2;
      if (!params.loop || swiper2.virtual && swiper2.params.virtual.enabled)
        return;
      swiper2.recalcSlides();
      const newSlidesOrder = [];
      swiper2.slides.forEach((slideEl) => {
        const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
        newSlidesOrder[index] = slideEl;
      });
      swiper2.slides.forEach((slideEl) => {
        slideEl.removeAttribute("data-swiper-slide-index");
      });
      newSlidesOrder.forEach((slideEl) => {
        slidesEl.append(slideEl);
      });
      swiper2.recalcSlides();
      swiper2.slideTo(swiper2.realIndex, 0);
    }
    const loop = {
      loopCreate,
      loopFix,
      loopDestroy
    };
    function setGrabCursor(moving) {
      const swiper2 = this;
      if (!swiper2.params.simulateTouch || swiper2.params.watchOverflow && swiper2.isLocked || swiper2.params.cssMode)
        return;
      const el = swiper2.params.touchEventsTarget === "container" ? swiper2.el : swiper2.wrapperEl;
      if (swiper2.isElement) {
        swiper2.__preventObserver__ = true;
      }
      el.style.cursor = "move";
      el.style.cursor = moving ? "grabbing" : "grab";
      if (swiper2.isElement) {
        requestAnimationFrame(() => {
          swiper2.__preventObserver__ = false;
        });
      }
    }
    function unsetGrabCursor() {
      const swiper2 = this;
      if (swiper2.params.watchOverflow && swiper2.isLocked || swiper2.params.cssMode) {
        return;
      }
      if (swiper2.isElement) {
        swiper2.__preventObserver__ = true;
      }
      swiper2[swiper2.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
      if (swiper2.isElement) {
        requestAnimationFrame(() => {
          swiper2.__preventObserver__ = false;
        });
      }
    }
    const grabCursor = {
      setGrabCursor,
      unsetGrabCursor
    };
    function closestElement(selector, base2 = this) {
      function __closestFrom(el) {
        if (!el || el === getDocument() || el === getWindow())
          return null;
        if (el.assignedSlot)
          el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) {
          return null;
        }
        return found || __closestFrom(el.getRootNode().host);
      }
      return __closestFrom(base2);
    }
    function onTouchStart(event2) {
      const swiper2 = this;
      const document2 = getDocument();
      const window2 = getWindow();
      const data = swiper2.touchEventsData;
      data.evCache.push(event2);
      const {
        params,
        touches,
        enabled
      } = swiper2;
      if (!enabled)
        return;
      if (!params.simulateTouch && event2.pointerType === "mouse")
        return;
      if (swiper2.animating && params.preventInteractionOnTransition) {
        return;
      }
      if (!swiper2.animating && params.cssMode && params.loop) {
        swiper2.loopFix();
      }
      let e = event2;
      if (e.originalEvent)
        e = e.originalEvent;
      let targetEl = e.target;
      if (params.touchEventsTarget === "wrapper") {
        if (!swiper2.wrapperEl.contains(targetEl))
          return;
      }
      if ("which" in e && e.which === 3)
        return;
      if ("button" in e && e.button > 0)
        return;
      if (data.isTouched && data.isMoved)
        return;
      const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
      const eventPath = event2.composedPath ? event2.composedPath() : event2.path;
      if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
        targetEl = eventPath[0];
      }
      const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
      const isTargetShadow = !!(e.target && e.target.shadowRoot);
      if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
        swiper2.allowClick = true;
        return;
      }
      if (params.swipeHandler) {
        if (!targetEl.closest(params.swipeHandler))
          return;
      }
      touches.currentX = e.pageX;
      touches.currentY = e.pageY;
      const startX = touches.currentX;
      const startY = touches.currentY;
      const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === "prevent") {
          event2.preventDefault();
        } else {
          return;
        }
      }
      Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: void 0,
        startMoving: void 0
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = now();
      swiper2.allowClick = true;
      swiper2.updateSize();
      swiper2.swipeDirection = void 0;
      if (params.threshold > 0)
        data.allowThresholdMove = false;
      let preventDefault = true;
      if (targetEl.matches(data.focusableElements)) {
        preventDefault = false;
        if (targetEl.nodeName === "SELECT") {
          data.isTouched = false;
        }
      }
      if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
        document2.activeElement.blur();
      }
      const shouldPreventDefault = preventDefault && swiper2.allowTouchMove && params.touchStartPreventDefault;
      if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
        e.preventDefault();
      }
      if (params.freeMode && params.freeMode.enabled && swiper2.freeMode && swiper2.animating && !params.cssMode) {
        swiper2.freeMode.onTouchStart();
      }
      swiper2.emit("touchStart", e);
    }
    function onTouchMove(event2) {
      const document2 = getDocument();
      const swiper2 = this;
      const data = swiper2.touchEventsData;
      const {
        params,
        touches,
        rtlTranslate: rtl,
        enabled
      } = swiper2;
      if (!enabled)
        return;
      if (!params.simulateTouch && event2.pointerType === "mouse")
        return;
      let e = event2;
      if (e.originalEvent)
        e = e.originalEvent;
      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper2.emit("touchMoveOpposite", e);
        }
        return;
      }
      const pointerIndex = data.evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
      if (pointerIndex >= 0)
        data.evCache[pointerIndex] = e;
      const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
      const pageX = targetTouch.pageX;
      const pageY = targetTouch.pageY;
      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }
      if (!swiper2.allowTouchMove) {
        if (!e.target.matches(data.focusableElements)) {
          swiper2.allowClick = false;
        }
        if (data.isTouched) {
          Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            prevX: swiper2.touches.currentX,
            prevY: swiper2.touches.currentY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = now();
        }
        return;
      }
      if (params.touchReleaseOnEdges && !params.loop) {
        if (swiper2.isVertical()) {
          if (pageY < touches.startY && swiper2.translate <= swiper2.maxTranslate() || pageY > touches.startY && swiper2.translate >= swiper2.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper2.translate <= swiper2.maxTranslate() || pageX > touches.startX && swiper2.translate >= swiper2.minTranslate()) {
          return;
        }
      }
      if (document2.activeElement) {
        if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
          data.isMoved = true;
          swiper2.allowClick = false;
          return;
        }
      }
      if (data.allowTouchCallbacks) {
        swiper2.emit("touchMove", e);
      }
      if (e.targetTouches && e.targetTouches.length > 1)
        return;
      touches.currentX = pageX;
      touches.currentY = pageY;
      const diffX = touches.currentX - touches.startX;
      const diffY = touches.currentY - touches.startY;
      if (swiper2.params.threshold && Math.sqrt(__pow(diffX, 2) + __pow(diffY, 2)) < swiper2.params.threshold)
        return;
      if (typeof data.isScrolling === "undefined") {
        let touchAngle;
        if (swiper2.isHorizontal() && touches.currentY === touches.startY || swiper2.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper2.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }
      if (data.isScrolling) {
        swiper2.emit("touchMoveOpposite", e);
      }
      if (typeof data.startMoving === "undefined") {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }
      if (data.isScrolling || swiper2.zoom && swiper2.params.zoom && swiper2.params.zoom.enabled && data.evCache.length > 1) {
        data.isTouched = false;
        return;
      }
      if (!data.startMoving) {
        return;
      }
      swiper2.allowClick = false;
      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }
      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }
      let diff = swiper2.isHorizontal() ? diffX : diffY;
      let touchesDiff = swiper2.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
      if (params.oneWayMovement) {
        diff = Math.abs(diff) * (rtl ? 1 : -1);
        touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
      }
      touches.diff = diff;
      diff *= params.touchRatio;
      if (rtl) {
        diff = -diff;
        touchesDiff = -touchesDiff;
      }
      const prevTouchesDirection = swiper2.touchesDirection;
      swiper2.swipeDirection = diff > 0 ? "prev" : "next";
      swiper2.touchesDirection = touchesDiff > 0 ? "prev" : "next";
      const isLoop = swiper2.params.loop && !params.cssMode;
      if (!data.isMoved) {
        if (isLoop) {
          swiper2.loopFix({
            direction: swiper2.swipeDirection
          });
        }
        data.startTranslate = swiper2.getTranslate();
        swiper2.setTransition(0);
        if (swiper2.animating) {
          const evt = new window.CustomEvent("transitionend", {
            bubbles: true,
            cancelable: true
          });
          swiper2.wrapperEl.dispatchEvent(evt);
        }
        data.allowMomentumBounce = false;
        if (params.grabCursor && (swiper2.allowSlideNext === true || swiper2.allowSlidePrev === true)) {
          swiper2.setGrabCursor(true);
        }
        swiper2.emit("sliderFirstMove", e);
      }
      let loopFixed;
      if (data.isMoved && prevTouchesDirection !== swiper2.touchesDirection && isLoop && Math.abs(diff) >= 1) {
        swiper2.loopFix({
          direction: swiper2.swipeDirection,
          setTranslate: true
        });
        loopFixed = true;
      }
      swiper2.emit("sliderMove", e);
      data.isMoved = true;
      data.currentTranslate = diff + data.startTranslate;
      let disableParentSwiper = true;
      let resistanceRatio = params.resistanceRatio;
      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }
      if (diff > 0) {
        if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper2.minTranslate() - swiper2.size / 2 : swiper2.minTranslate())) {
          swiper2.loopFix({
            direction: "prev",
            setTranslate: true,
            activeSlideIndex: 0
          });
        }
        if (data.currentTranslate > swiper2.minTranslate()) {
          disableParentSwiper = false;
          if (params.resistance) {
            data.currentTranslate = swiper2.minTranslate() - 1 + __pow(-swiper2.minTranslate() + data.startTranslate + diff, resistanceRatio);
          }
        }
      } else if (diff < 0) {
        if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper2.maxTranslate() + swiper2.size / 2 : swiper2.maxTranslate())) {
          swiper2.loopFix({
            direction: "next",
            setTranslate: true,
            activeSlideIndex: swiper2.slides.length - (params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
          });
        }
        if (data.currentTranslate < swiper2.maxTranslate()) {
          disableParentSwiper = false;
          if (params.resistance) {
            data.currentTranslate = swiper2.maxTranslate() + 1 - __pow(swiper2.maxTranslate() - data.startTranslate - diff, resistanceRatio);
          }
        }
      }
      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      }
      if (!swiper2.allowSlideNext && swiper2.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }
      if (!swiper2.allowSlidePrev && swiper2.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }
      if (!swiper2.allowSlidePrev && !swiper2.allowSlideNext) {
        data.currentTranslate = data.startTranslate;
      }
      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper2.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }
      if (!params.followFinger || params.cssMode)
        return;
      if (params.freeMode && params.freeMode.enabled && swiper2.freeMode || params.watchSlidesProgress) {
        swiper2.updateActiveIndex();
        swiper2.updateSlidesClasses();
      }
      if (params.freeMode && params.freeMode.enabled && swiper2.freeMode) {
        swiper2.freeMode.onTouchMove();
      }
      swiper2.updateProgress(data.currentTranslate);
      swiper2.setTranslate(data.currentTranslate);
    }
    function onTouchEnd(event2) {
      const swiper2 = this;
      const data = swiper2.touchEventsData;
      const pointerIndex = data.evCache.findIndex((cachedEv) => cachedEv.pointerId === event2.pointerId);
      if (pointerIndex >= 0) {
        data.evCache.splice(pointerIndex, 1);
      }
      if (["pointercancel", "pointerout", "pointerleave"].includes(event2.type)) {
        const proceed = event2.type === "pointercancel" && (swiper2.browser.isSafari || swiper2.browser.isWebView);
        if (!proceed) {
          return;
        }
      }
      const {
        params,
        touches,
        rtlTranslate: rtl,
        slidesGrid,
        enabled
      } = swiper2;
      if (!enabled)
        return;
      if (!params.simulateTouch && event2.pointerType === "mouse")
        return;
      let e = event2;
      if (e.originalEvent)
        e = e.originalEvent;
      if (data.allowTouchCallbacks) {
        swiper2.emit("touchEnd", e);
      }
      data.allowTouchCallbacks = false;
      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper2.setGrabCursor(false);
        }
        data.isMoved = false;
        data.startMoving = false;
        return;
      }
      if (params.grabCursor && data.isMoved && data.isTouched && (swiper2.allowSlideNext === true || swiper2.allowSlidePrev === true)) {
        swiper2.setGrabCursor(false);
      }
      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime;
      if (swiper2.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper2.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper2.emit("tap click", e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper2.emit("doubleTap doubleClick", e);
        }
      }
      data.lastClickTime = now();
      nextTick(() => {
        if (!swiper2.destroyed)
          swiper2.allowClick = true;
      });
      if (!data.isTouched || !data.isMoved || !swiper2.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      let currentPos;
      if (params.followFinger) {
        currentPos = rtl ? swiper2.translate : -swiper2.translate;
      } else {
        currentPos = -data.currentTranslate;
      }
      if (params.cssMode) {
        return;
      }
      if (params.freeMode && params.freeMode.enabled) {
        swiper2.freeMode.onTouchEnd({
          currentPos
        });
        return;
      }
      let stopIndex = 0;
      let groupSize = swiper2.slidesSizesGrid[0];
      for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment2] !== "undefined") {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
            stopIndex = i;
            groupSize = slidesGrid[i + increment2] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      }
      let rewindFirstIndex = null;
      let rewindLastIndex = null;
      if (params.rewind) {
        if (swiper2.isBeginning) {
          rewindLastIndex = params.virtual && params.virtual.enabled && swiper2.virtual ? swiper2.virtual.slides.length - 1 : swiper2.slides.length - 1;
        } else if (swiper2.isEnd) {
          rewindFirstIndex = 0;
        }
      }
      const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (timeDiff > params.longSwipesMs) {
        if (!params.longSwipes) {
          swiper2.slideTo(swiper2.activeIndex);
          return;
        }
        if (swiper2.swipeDirection === "next") {
          if (ratio >= params.longSwipesRatio)
            swiper2.slideTo(params.rewind && swiper2.isEnd ? rewindFirstIndex : stopIndex + increment);
          else
            swiper2.slideTo(stopIndex);
        }
        if (swiper2.swipeDirection === "prev") {
          if (ratio > 1 - params.longSwipesRatio) {
            swiper2.slideTo(stopIndex + increment);
          } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
            swiper2.slideTo(rewindLastIndex);
          } else {
            swiper2.slideTo(stopIndex);
          }
        }
      } else {
        if (!params.shortSwipes) {
          swiper2.slideTo(swiper2.activeIndex);
          return;
        }
        const isNavButtonTarget = swiper2.navigation && (e.target === swiper2.navigation.nextEl || e.target === swiper2.navigation.prevEl);
        if (!isNavButtonTarget) {
          if (swiper2.swipeDirection === "next") {
            swiper2.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
          }
          if (swiper2.swipeDirection === "prev") {
            swiper2.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
          }
        } else if (e.target === swiper2.navigation.nextEl) {
          swiper2.slideTo(stopIndex + increment);
        } else {
          swiper2.slideTo(stopIndex);
        }
      }
    }
    function onResize() {
      const swiper2 = this;
      const {
        params,
        el
      } = swiper2;
      if (el && el.offsetWidth === 0)
        return;
      if (params.breakpoints) {
        swiper2.setBreakpoint();
      }
      const {
        allowSlideNext,
        allowSlidePrev,
        snapGrid
      } = swiper2;
      const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
      swiper2.allowSlideNext = true;
      swiper2.allowSlidePrev = true;
      swiper2.updateSize();
      swiper2.updateSlides();
      swiper2.updateSlidesClasses();
      const isVirtualLoop = isVirtual && params.loop;
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper2.isEnd && !swiper2.isBeginning && !swiper2.params.centeredSlides && !isVirtualLoop) {
        swiper2.slideTo(swiper2.slides.length - 1, 0, false, true);
      } else {
        if (swiper2.params.loop && !isVirtual) {
          swiper2.slideToLoop(swiper2.realIndex, 0, false, true);
        } else {
          swiper2.slideTo(swiper2.activeIndex, 0, false, true);
        }
      }
      if (swiper2.autoplay && swiper2.autoplay.running && swiper2.autoplay.paused) {
        clearTimeout(swiper2.autoplay.resizeTimeout);
        swiper2.autoplay.resizeTimeout = setTimeout(() => {
          if (swiper2.autoplay && swiper2.autoplay.running && swiper2.autoplay.paused) {
            swiper2.autoplay.resume();
          }
        }, 500);
      }
      swiper2.allowSlidePrev = allowSlidePrev;
      swiper2.allowSlideNext = allowSlideNext;
      if (swiper2.params.watchOverflow && snapGrid !== swiper2.snapGrid) {
        swiper2.checkOverflow();
      }
    }
    function onClick(e) {
      const swiper2 = this;
      if (!swiper2.enabled)
        return;
      if (!swiper2.allowClick) {
        if (swiper2.params.preventClicks)
          e.preventDefault();
        if (swiper2.params.preventClicksPropagation && swiper2.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }
    function onScroll() {
      const swiper2 = this;
      const {
        wrapperEl,
        rtlTranslate,
        enabled
      } = swiper2;
      if (!enabled)
        return;
      swiper2.previousTranslate = swiper2.translate;
      if (swiper2.isHorizontal()) {
        swiper2.translate = -wrapperEl.scrollLeft;
      } else {
        swiper2.translate = -wrapperEl.scrollTop;
      }
      if (swiper2.translate === 0)
        swiper2.translate = 0;
      swiper2.updateActiveIndex();
      swiper2.updateSlidesClasses();
      let newProgress;
      const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper2.translate - swiper2.minTranslate()) / translatesDiff;
      }
      if (newProgress !== swiper2.progress) {
        swiper2.updateProgress(rtlTranslate ? -swiper2.translate : swiper2.translate);
      }
      swiper2.emit("setTranslate", swiper2.translate, false);
    }
    function onLoad(e) {
      const swiper2 = this;
      processLazyPreloader(swiper2, e.target);
      if (swiper2.params.cssMode || swiper2.params.slidesPerView !== "auto" && !swiper2.params.autoHeight) {
        return;
      }
      swiper2.update();
    }
    let dummyEventAttached = false;
    function dummyEventListener() {
    }
    const events = (swiper2, method) => {
      const document2 = getDocument();
      const {
        params,
        el,
        wrapperEl,
        device
      } = swiper2;
      const capture = !!params.nested;
      const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
      const swiperMethod = method;
      el[domMethod]("pointerdown", swiper2.onTouchStart, {
        passive: false
      });
      document2[domMethod]("pointermove", swiper2.onTouchMove, {
        passive: false,
        capture
      });
      document2[domMethod]("pointerup", swiper2.onTouchEnd, {
        passive: true
      });
      document2[domMethod]("pointercancel", swiper2.onTouchEnd, {
        passive: true
      });
      document2[domMethod]("pointerout", swiper2.onTouchEnd, {
        passive: true
      });
      document2[domMethod]("pointerleave", swiper2.onTouchEnd, {
        passive: true
      });
      if (params.preventClicks || params.preventClicksPropagation) {
        el[domMethod]("click", swiper2.onClick, true);
      }
      if (params.cssMode) {
        wrapperEl[domMethod]("scroll", swiper2.onScroll);
      }
      if (params.updateOnWindowResize) {
        swiper2[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
      } else {
        swiper2[swiperMethod]("observerUpdate", onResize, true);
      }
      el[domMethod]("load", swiper2.onLoad, {
        capture: true
      });
    };
    function attachEvents() {
      const swiper2 = this;
      const document2 = getDocument();
      const {
        params
      } = swiper2;
      swiper2.onTouchStart = onTouchStart.bind(swiper2);
      swiper2.onTouchMove = onTouchMove.bind(swiper2);
      swiper2.onTouchEnd = onTouchEnd.bind(swiper2);
      if (params.cssMode) {
        swiper2.onScroll = onScroll.bind(swiper2);
      }
      swiper2.onClick = onClick.bind(swiper2);
      swiper2.onLoad = onLoad.bind(swiper2);
      if (!dummyEventAttached) {
        document2.addEventListener("touchstart", dummyEventListener);
        dummyEventAttached = true;
      }
      events(swiper2, "on");
    }
    function detachEvents() {
      const swiper2 = this;
      events(swiper2, "off");
    }
    const events$1 = {
      attachEvents,
      detachEvents
    };
    const isGridEnabled = (swiper2, params) => {
      return swiper2.grid && params.grid && params.grid.rows > 1;
    };
    function setBreakpoint() {
      const swiper2 = this;
      const {
        realIndex,
        initialized,
        params,
        el
      } = swiper2;
      const breakpoints2 = params.breakpoints;
      if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
        return;
      const breakpoint = swiper2.getBreakpoint(breakpoints2, swiper2.params.breakpointsBase, swiper2.el);
      if (!breakpoint || swiper2.currentBreakpoint === breakpoint)
        return;
      const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
      const breakpointParams = breakpointOnlyParams || swiper2.originalParams;
      const wasMultiRow = isGridEnabled(swiper2, params);
      const isMultiRow = isGridEnabled(swiper2, breakpointParams);
      const wasEnabled = params.enabled;
      if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        swiper2.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
          el.classList.add(`${params.containerModifierClass}grid-column`);
        }
        swiper2.emitContainerClasses();
      }
      ["navigation", "pagination", "scrollbar"].forEach((prop) => {
        if (typeof breakpointParams[prop] === "undefined")
          return;
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) {
          swiper2[prop].disable();
        }
        if (!wasModuleEnabled && isModuleEnabled) {
          swiper2[prop].enable();
        }
      });
      const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
      if (directionChanged && initialized) {
        swiper2.changeDirection();
      }
      extend$1(swiper2.params, breakpointParams);
      const isEnabled = swiper2.params.enabled;
      Object.assign(swiper2, {
        allowTouchMove: swiper2.params.allowTouchMove,
        allowSlideNext: swiper2.params.allowSlideNext,
        allowSlidePrev: swiper2.params.allowSlidePrev
      });
      if (wasEnabled && !isEnabled) {
        swiper2.disable();
      } else if (!wasEnabled && isEnabled) {
        swiper2.enable();
      }
      swiper2.currentBreakpoint = breakpoint;
      swiper2.emit("_beforeBreakpoint", breakpointParams);
      if (needsReLoop && initialized) {
        swiper2.loopDestroy();
        swiper2.loopCreate(realIndex);
        swiper2.updateSlides();
      }
      swiper2.emit("breakpoint", breakpointParams);
    }
    function getBreakpoint(breakpoints2, base2 = "window", containerEl) {
      if (!breakpoints2 || base2 === "container" && !containerEl)
        return void 0;
      let breakpoint = false;
      const window2 = getWindow();
      const currentHeight = base2 === "window" ? window2.innerHeight : containerEl.clientHeight;
      const points = Object.keys(breakpoints2).map((point) => {
        if (typeof point === "string" && point.indexOf("@") === 0) {
          const minRatio = parseFloat(point.substr(1));
          const value = currentHeight * minRatio;
          return {
            value,
            point
          };
        }
        return {
          value: point,
          point
        };
      });
      points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
      for (let i = 0; i < points.length; i += 1) {
        const {
          point,
          value
        } = points[i];
        if (base2 === "window") {
          if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
            breakpoint = point;
          }
        } else if (value <= containerEl.clientWidth) {
          breakpoint = point;
        }
      }
      return breakpoint || "max";
    }
    const breakpoints = {
      setBreakpoint,
      getBreakpoint
    };
    function prepareClasses(entries, prefix) {
      const resultClasses = [];
      entries.forEach((item) => {
        if (typeof item === "object") {
          Object.keys(item).forEach((classNames) => {
            if (item[classNames]) {
              resultClasses.push(prefix + classNames);
            }
          });
        } else if (typeof item === "string") {
          resultClasses.push(prefix + item);
        }
      });
      return resultClasses;
    }
    function addClasses() {
      const swiper2 = this;
      const {
        classNames,
        params,
        rtl,
        el,
        device
      } = swiper2;
      const suffixes = prepareClasses(["initialized", params.direction, {
        "free-mode": swiper2.params.freeMode && params.freeMode.enabled
      }, {
        "autoheight": params.autoHeight
      }, {
        "rtl": rtl
      }, {
        "grid": params.grid && params.grid.rows > 1
      }, {
        "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
      }, {
        "android": device.android
      }, {
        "ios": device.ios
      }, {
        "css-mode": params.cssMode
      }, {
        "centered": params.cssMode && params.centeredSlides
      }, {
        "watch-progress": params.watchSlidesProgress
      }], params.containerModifierClass);
      classNames.push(...suffixes);
      el.classList.add(...classNames);
      swiper2.emitContainerClasses();
    }
    function removeClasses() {
      const swiper2 = this;
      const {
        el,
        classNames
      } = swiper2;
      el.classList.remove(...classNames);
      swiper2.emitContainerClasses();
    }
    const classes = {
      addClasses,
      removeClasses
    };
    function checkOverflow() {
      const swiper2 = this;
      const {
        isLocked: wasLocked,
        params
      } = swiper2;
      const {
        slidesOffsetBefore
      } = params;
      if (slidesOffsetBefore) {
        const lastSlideIndex = swiper2.slides.length - 1;
        const lastSlideRightEdge = swiper2.slidesGrid[lastSlideIndex] + swiper2.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper2.isLocked = swiper2.size > lastSlideRightEdge;
      } else {
        swiper2.isLocked = swiper2.snapGrid.length === 1;
      }
      if (params.allowSlideNext === true) {
        swiper2.allowSlideNext = !swiper2.isLocked;
      }
      if (params.allowSlidePrev === true) {
        swiper2.allowSlidePrev = !swiper2.isLocked;
      }
      if (wasLocked && wasLocked !== swiper2.isLocked) {
        swiper2.isEnd = false;
      }
      if (wasLocked !== swiper2.isLocked) {
        swiper2.emit(swiper2.isLocked ? "lock" : "unlock");
      }
    }
    const checkOverflow$1 = {
      checkOverflow
    };
    const defaults = {
      init: true,
      direction: "horizontal",
      oneWayMovement: false,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      resizeObserver: true,
      nested: false,
      createElements: false,
      enabled: true,
      focusableElements: "input, select, option, textarea, button, video, label",
      // Overrides
      width: null,
      height: null,
      //
      preventInteractionOnTransition: false,
      // ssr
      userAgent: null,
      url: null,
      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: "slide",
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      // Breakpoints
      breakpoints: void 0,
      breakpointsBase: "window",
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: false,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: true,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 5,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // loop
      loop: false,
      loopedSlides: null,
      loopPreventsSliding: true,
      // rewind
      rewind: false,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      maxBackfaceHiddenSlides: 10,
      // NS
      containerModifierClass: "swiper-",
      // NEW
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      // Callbacks
      runCallbacksOnInit: true,
      // Internals
      _emitClasses: false
    };
    function moduleExtendParams(params, allModulesParams) {
      return function extendParams(obj = {}) {
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== "object" || moduleParams === null) {
          extend$1(allModulesParams, obj);
          return;
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }
        if (!(moduleParamName in params && "enabled" in moduleParams)) {
          extend$1(allModulesParams, obj);
          return;
        }
        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }
        if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName])
          params[moduleParamName] = {
            enabled: false
          };
        extend$1(allModulesParams, obj);
      };
    }
    const prototypes = {
      eventsEmitter,
      update,
      translate,
      transition,
      slide,
      loop,
      grabCursor,
      events: events$1,
      breakpoints,
      checkOverflow: checkOverflow$1,
      classes
    };
    const extendedDefaults = {};
    let Swiper$1 = class Swiper2 {
      constructor(...args) {
        let el;
        let params;
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
          params = args[0];
        } else {
          [el, params] = args;
        }
        if (!params)
          params = {};
        params = extend$1({}, params);
        if (el && !params.el)
          params.el = el;
        const document2 = getDocument();
        if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
          const swipers = [];
          document2.querySelectorAll(params.el).forEach((containerEl) => {
            const newParams = extend$1({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper2(newParams));
          });
          return swipers;
        }
        const swiper2 = this;
        swiper2.__swiper__ = true;
        swiper2.support = getSupport();
        swiper2.device = getDevice({
          userAgent: params.userAgent
        });
        swiper2.browser = getBrowser();
        swiper2.eventsListeners = {};
        swiper2.eventsAnyListeners = [];
        swiper2.modules = [...swiper2.__modules__];
        if (params.modules && Array.isArray(params.modules)) {
          swiper2.modules.push(...params.modules);
        }
        const allModulesParams = {};
        swiper2.modules.forEach((mod) => {
          mod({
            params,
            swiper: swiper2,
            extendParams: moduleExtendParams(params, allModulesParams),
            on: swiper2.on.bind(swiper2),
            once: swiper2.once.bind(swiper2),
            off: swiper2.off.bind(swiper2),
            emit: swiper2.emit.bind(swiper2)
          });
        });
        const swiperParams = extend$1({}, defaults, allModulesParams);
        swiper2.params = extend$1({}, swiperParams, extendedDefaults, params);
        swiper2.originalParams = extend$1({}, swiper2.params);
        swiper2.passedParams = extend$1({}, params);
        if (swiper2.params && swiper2.params.on) {
          Object.keys(swiper2.params.on).forEach((eventName) => {
            swiper2.on(eventName, swiper2.params.on[eventName]);
          });
        }
        if (swiper2.params && swiper2.params.onAny) {
          swiper2.onAny(swiper2.params.onAny);
        }
        Object.assign(swiper2, {
          enabled: swiper2.params.enabled,
          el,
          // Classes
          classNames: [],
          // Slides
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          // isDirection
          isHorizontal() {
            return swiper2.params.direction === "horizontal";
          },
          isVertical() {
            return swiper2.params.direction === "vertical";
          },
          // Indexes
          activeIndex: 0,
          realIndex: 0,
          //
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / __pow(2, 23)) * __pow(2, 23);
          },
          // Locks
          allowSlideNext: swiper2.params.allowSlideNext,
          allowSlidePrev: swiper2.params.allowSlidePrev,
          // Touch Events
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            // Form elements to match
            focusableElements: swiper2.params.focusableElements,
            // Last click time
            lastClickTime: 0,
            clickTimeout: void 0,
            // Velocities
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: []
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper2.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        });
        swiper2.emit("_swiper");
        if (swiper2.params.init) {
          swiper2.init();
        }
        return swiper2;
      }
      getSlideIndex(slideEl) {
        const {
          slidesEl,
          params
        } = this;
        const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        const firstSlideIndex = elementIndex(slides[0]);
        return elementIndex(slideEl) - firstSlideIndex;
      }
      getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
      }
      recalcSlides() {
        const swiper2 = this;
        const {
          slidesEl,
          params
        } = swiper2;
        swiper2.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      }
      enable() {
        const swiper2 = this;
        if (swiper2.enabled)
          return;
        swiper2.enabled = true;
        if (swiper2.params.grabCursor) {
          swiper2.setGrabCursor();
        }
        swiper2.emit("enable");
      }
      disable() {
        const swiper2 = this;
        if (!swiper2.enabled)
          return;
        swiper2.enabled = false;
        if (swiper2.params.grabCursor) {
          swiper2.unsetGrabCursor();
        }
        swiper2.emit("disable");
      }
      setProgress(progress, speed) {
        const swiper2 = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper2.minTranslate();
        const max = swiper2.maxTranslate();
        const current = (max - min) * progress + min;
        swiper2.translateTo(current, typeof speed === "undefined" ? 0 : speed);
        swiper2.updateActiveIndex();
        swiper2.updateSlidesClasses();
      }
      emitContainerClasses() {
        const swiper2 = this;
        if (!swiper2.params._emitClasses || !swiper2.el)
          return;
        const cls = swiper2.el.className.split(" ").filter((className) => {
          return className.indexOf("swiper") === 0 || className.indexOf(swiper2.params.containerModifierClass) === 0;
        });
        swiper2.emit("_containerClasses", cls.join(" "));
      }
      getSlideClasses(slideEl) {
        const swiper2 = this;
        if (swiper2.destroyed)
          return "";
        return slideEl.className.split(" ").filter((className) => {
          return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper2.params.slideClass) === 0;
        }).join(" ");
      }
      emitSlidesClasses() {
        const swiper2 = this;
        if (!swiper2.params._emitClasses || !swiper2.el)
          return;
        const updates = [];
        swiper2.slides.forEach((slideEl) => {
          const classNames = swiper2.getSlideClasses(slideEl);
          updates.push({
            slideEl,
            classNames
          });
          swiper2.emit("_slideClass", slideEl, classNames);
        });
        swiper2.emit("_slideClasses", updates);
      }
      slidesPerViewDynamic(view = "current", exact = false) {
        const swiper2 = this;
        const {
          params,
          slides,
          slidesGrid,
          slidesSizesGrid,
          size: swiperSize,
          activeIndex
        } = swiper2;
        let spv = 1;
        if (params.centeredSlides) {
          let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
          let breakLoop;
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize)
                breakLoop = true;
            }
          }
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize)
                breakLoop = true;
            }
          }
        } else {
          if (view === "current") {
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
              const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
              if (slideInView) {
                spv += 1;
              }
            }
          } else {
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
              const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
              if (slideInView) {
                spv += 1;
              }
            }
          }
        }
        return spv;
      }
      update() {
        const swiper2 = this;
        if (!swiper2 || swiper2.destroyed)
          return;
        const {
          snapGrid,
          params
        } = swiper2;
        if (params.breakpoints) {
          swiper2.setBreakpoint();
        }
        [...swiper2.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
          if (imageEl.complete) {
            processLazyPreloader(swiper2, imageEl);
          }
        });
        swiper2.updateSize();
        swiper2.updateSlides();
        swiper2.updateProgress();
        swiper2.updateSlidesClasses();
        function setTranslate2() {
          const translateValue = swiper2.rtlTranslate ? swiper2.translate * -1 : swiper2.translate;
          const newTranslate = Math.min(Math.max(translateValue, swiper2.maxTranslate()), swiper2.minTranslate());
          swiper2.setTranslate(newTranslate);
          swiper2.updateActiveIndex();
          swiper2.updateSlidesClasses();
        }
        let translated;
        if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
          setTranslate2();
          if (params.autoHeight) {
            swiper2.updateAutoHeight();
          }
        } else {
          if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper2.isEnd && !params.centeredSlides) {
            const slides = swiper2.virtual && params.virtual.enabled ? swiper2.virtual.slides : swiper2.slides;
            translated = swiper2.slideTo(slides.length - 1, 0, false, true);
          } else {
            translated = swiper2.slideTo(swiper2.activeIndex, 0, false, true);
          }
          if (!translated) {
            setTranslate2();
          }
        }
        if (params.watchOverflow && snapGrid !== swiper2.snapGrid) {
          swiper2.checkOverflow();
        }
        swiper2.emit("update");
      }
      changeDirection(newDirection, needUpdate = true) {
        const swiper2 = this;
        const currentDirection = swiper2.params.direction;
        if (!newDirection) {
          newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
        }
        if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
          return swiper2;
        }
        swiper2.el.classList.remove(`${swiper2.params.containerModifierClass}${currentDirection}`);
        swiper2.el.classList.add(`${swiper2.params.containerModifierClass}${newDirection}`);
        swiper2.emitContainerClasses();
        swiper2.params.direction = newDirection;
        swiper2.slides.forEach((slideEl) => {
          if (newDirection === "vertical") {
            slideEl.style.width = "";
          } else {
            slideEl.style.height = "";
          }
        });
        swiper2.emit("changeDirection");
        if (needUpdate)
          swiper2.update();
        return swiper2;
      }
      changeLanguageDirection(direction) {
        const swiper2 = this;
        if (swiper2.rtl && direction === "rtl" || !swiper2.rtl && direction === "ltr")
          return;
        swiper2.rtl = direction === "rtl";
        swiper2.rtlTranslate = swiper2.params.direction === "horizontal" && swiper2.rtl;
        if (swiper2.rtl) {
          swiper2.el.classList.add(`${swiper2.params.containerModifierClass}rtl`);
          swiper2.el.dir = "rtl";
        } else {
          swiper2.el.classList.remove(`${swiper2.params.containerModifierClass}rtl`);
          swiper2.el.dir = "ltr";
        }
        swiper2.update();
      }
      mount(element) {
        const swiper2 = this;
        if (swiper2.mounted)
          return true;
        let el = element || swiper2.params.el;
        if (typeof el === "string") {
          el = document.querySelector(el);
        }
        if (!el) {
          return false;
        }
        el.swiper = swiper2;
        if (el.shadowEl) {
          swiper2.isElement = true;
        }
        const getWrapperSelector = () => {
          return `.${(swiper2.params.wrapperClass || "").trim().split(" ").join(".")}`;
        };
        const getWrapper = () => {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            const res = el.shadowRoot.querySelector(getWrapperSelector());
            return res;
          }
          return elementChildren(el, getWrapperSelector())[0];
        };
        let wrapperEl = getWrapper();
        if (!wrapperEl && swiper2.params.createElements) {
          wrapperEl = createElement("div", swiper2.params.wrapperClass);
          el.append(wrapperEl);
          elementChildren(el, `.${swiper2.params.slideClass}`).forEach((slideEl) => {
            wrapperEl.append(slideEl);
          });
        }
        Object.assign(swiper2, {
          el,
          wrapperEl,
          slidesEl: swiper2.isElement ? el : wrapperEl,
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
          rtlTranslate: swiper2.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
          wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
        });
        return true;
      }
      init(el) {
        const swiper2 = this;
        if (swiper2.initialized)
          return swiper2;
        const mounted = swiper2.mount(el);
        if (mounted === false)
          return swiper2;
        swiper2.emit("beforeInit");
        if (swiper2.params.breakpoints) {
          swiper2.setBreakpoint();
        }
        swiper2.addClasses();
        swiper2.updateSize();
        swiper2.updateSlides();
        if (swiper2.params.watchOverflow) {
          swiper2.checkOverflow();
        }
        if (swiper2.params.grabCursor && swiper2.enabled) {
          swiper2.setGrabCursor();
        }
        if (swiper2.params.loop && swiper2.virtual && swiper2.params.virtual.enabled) {
          swiper2.slideTo(swiper2.params.initialSlide + swiper2.virtual.slidesBefore, 0, swiper2.params.runCallbacksOnInit, false, true);
        } else {
          swiper2.slideTo(swiper2.params.initialSlide, 0, swiper2.params.runCallbacksOnInit, false, true);
        }
        if (swiper2.params.loop) {
          swiper2.loopCreate();
        }
        swiper2.attachEvents();
        [...swiper2.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
          if (imageEl.complete) {
            processLazyPreloader(swiper2, imageEl);
          } else {
            imageEl.addEventListener("load", (e) => {
              processLazyPreloader(swiper2, e.target);
            });
          }
        });
        preload(swiper2);
        swiper2.initialized = true;
        preload(swiper2);
        swiper2.emit("init");
        swiper2.emit("afterInit");
        return swiper2;
      }
      destroy(deleteInstance = true, cleanStyles = true) {
        const swiper2 = this;
        const {
          params,
          el,
          wrapperEl,
          slides
        } = swiper2;
        if (typeof swiper2.params === "undefined" || swiper2.destroyed) {
          return null;
        }
        swiper2.emit("beforeDestroy");
        swiper2.initialized = false;
        swiper2.detachEvents();
        if (params.loop) {
          swiper2.loopDestroy();
        }
        if (cleanStyles) {
          swiper2.removeClasses();
          el.removeAttribute("style");
          wrapperEl.removeAttribute("style");
          if (slides && slides.length) {
            slides.forEach((slideEl) => {
              slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
              slideEl.removeAttribute("style");
              slideEl.removeAttribute("data-swiper-slide-index");
            });
          }
        }
        swiper2.emit("destroy");
        Object.keys(swiper2.eventsListeners).forEach((eventName) => {
          swiper2.off(eventName);
        });
        if (deleteInstance !== false) {
          swiper2.el.swiper = null;
          deleteProps(swiper2);
        }
        swiper2.destroyed = true;
        return null;
      }
      static extendDefaults(newDefaults) {
        extend$1(extendedDefaults, newDefaults);
      }
      static get extendedDefaults() {
        return extendedDefaults;
      }
      static get defaults() {
        return defaults;
      }
      static installModule(mod) {
        if (!Swiper2.prototype.__modules__)
          Swiper2.prototype.__modules__ = [];
        const modules = Swiper2.prototype.__modules__;
        if (typeof mod === "function" && modules.indexOf(mod) < 0) {
          modules.push(mod);
        }
      }
      static use(module2) {
        if (Array.isArray(module2)) {
          module2.forEach((m) => Swiper2.installModule(m));
          return Swiper2;
        }
        Swiper2.installModule(module2);
        return Swiper2;
      }
    };
    Object.keys(prototypes).forEach((prototypeGroup) => {
      Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
        Swiper$1.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
      });
    });
    Swiper$1.use([Resize, Observer]);
    function Mousewheel({
      swiper: swiper2,
      extendParams,
      on: on2,
      emit: emit2
    }) {
      const window2 = getWindow();
      extendParams({
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
          noMousewheelClass: "swiper-no-mousewheel"
        }
      });
      swiper2.mousewheel = {
        enabled: false
      };
      let timeout2;
      let lastScrollTime = now();
      let lastEventBeforeSnap;
      const recentWheelEvents = [];
      function normalize(e) {
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0;
        let pX = 0;
        let pY = 0;
        if ("detail" in e) {
          sY = e.detail;
        }
        if ("wheelDelta" in e) {
          sY = -e.wheelDelta / 120;
        }
        if ("wheelDeltaY" in e) {
          sY = -e.wheelDeltaY / 120;
        }
        if ("wheelDeltaX" in e) {
          sX = -e.wheelDeltaX / 120;
        }
        if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ("deltaY" in e) {
          pY = e.deltaY;
        }
        if ("deltaX" in e) {
          pX = e.deltaX;
        }
        if (e.shiftKey && !pX) {
          pX = pY;
          pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) {
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else {
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        }
        if (pX && !sX) {
          sX = pX < 1 ? -1 : 1;
        }
        if (pY && !sY) {
          sY = pY < 1 ? -1 : 1;
        }
        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY
        };
      }
      function handleMouseEnter() {
        if (!swiper2.enabled)
          return;
        swiper2.mouseEntered = true;
      }
      function handleMouseLeave() {
        if (!swiper2.enabled)
          return;
        swiper2.mouseEntered = false;
      }
      function animateSlider(newEvent) {
        if (swiper2.params.mousewheel.thresholdDelta && newEvent.delta < swiper2.params.mousewheel.thresholdDelta) {
          return false;
        }
        if (swiper2.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper2.params.mousewheel.thresholdTime) {
          return false;
        }
        if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
          return true;
        }
        if (newEvent.direction < 0) {
          if ((!swiper2.isEnd || swiper2.params.loop) && !swiper2.animating) {
            swiper2.slideNext();
            emit2("scroll", newEvent.raw);
          }
        } else if ((!swiper2.isBeginning || swiper2.params.loop) && !swiper2.animating) {
          swiper2.slidePrev();
          emit2("scroll", newEvent.raw);
        }
        lastScrollTime = new window2.Date().getTime();
        return false;
      }
      function releaseScroll(newEvent) {
        const params = swiper2.params.mousewheel;
        if (newEvent.direction < 0) {
          if (swiper2.isEnd && !swiper2.params.loop && params.releaseOnEdges) {
            return true;
          }
        } else if (swiper2.isBeginning && !swiper2.params.loop && params.releaseOnEdges) {
          return true;
        }
        return false;
      }
      function handle(event2) {
        let e = event2;
        let disableParentSwiper = true;
        if (!swiper2.enabled)
          return;
        if (event2.target.closest(`.${swiper2.params.mousewheel.noMousewheelClass}`))
          return;
        const params = swiper2.params.mousewheel;
        if (swiper2.params.cssMode) {
          e.preventDefault();
        }
        let targetEl = swiper2.el;
        if (swiper2.params.mousewheel.eventsTarget !== "container") {
          targetEl = document.querySelector(swiper2.params.mousewheel.eventsTarget);
        }
        const targetElContainsTarget = targetEl && targetEl.contains(e.target);
        if (!swiper2.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges)
          return true;
        if (e.originalEvent)
          e = e.originalEvent;
        let delta = 0;
        const rtlFactor = swiper2.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
          if (swiper2.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY))
              delta = -data.pixelX * rtlFactor;
            else
              return true;
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX))
            delta = -data.pixelY;
          else
            return true;
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }
        if (delta === 0)
          return true;
        if (params.invert)
          delta = -delta;
        let positions = swiper2.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper2.minTranslate())
          positions = swiper2.minTranslate();
        if (positions <= swiper2.maxTranslate())
          positions = swiper2.maxTranslate();
        disableParentSwiper = swiper2.params.loop ? true : !(positions === swiper2.minTranslate() || positions === swiper2.maxTranslate());
        if (disableParentSwiper && swiper2.params.nested)
          e.stopPropagation();
        if (!swiper2.params.freeMode || !swiper2.params.freeMode.enabled) {
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event2
          };
          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift();
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
          recentWheelEvents.push(newEvent);
          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
              animateSlider(newEvent);
            }
          } else {
            animateSlider(newEvent);
          }
          if (releaseScroll(newEvent)) {
            return true;
          }
        } else {
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta)
          };
          const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
          if (!ignoreWheelEvents) {
            lastEventBeforeSnap = void 0;
            let position = swiper2.getTranslate() + delta * params.sensitivity;
            const wasBeginning = swiper2.isBeginning;
            const wasEnd = swiper2.isEnd;
            if (position >= swiper2.minTranslate())
              position = swiper2.minTranslate();
            if (position <= swiper2.maxTranslate())
              position = swiper2.maxTranslate();
            swiper2.setTransition(0);
            swiper2.setTranslate(position);
            swiper2.updateProgress();
            swiper2.updateActiveIndex();
            swiper2.updateSlidesClasses();
            if (!wasBeginning && swiper2.isBeginning || !wasEnd && swiper2.isEnd) {
              swiper2.updateSlidesClasses();
            }
            if (swiper2.params.loop) {
              swiper2.loopFix({
                direction: newEvent.direction < 0 ? "next" : "prev",
                byMousewheel: true
              });
            }
            if (swiper2.params.freeMode.sticky) {
              clearTimeout(timeout2);
              timeout2 = void 0;
              if (recentWheelEvents.length >= 15) {
                recentWheelEvents.shift();
              }
              const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
              const firstEvent = recentWheelEvents[0];
              recentWheelEvents.push(newEvent);
              if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                recentWheelEvents.splice(0);
              } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                timeout2 = nextTick(() => {
                  swiper2.slideToClosest(swiper2.params.speed, true, void 0, snapToThreshold);
                }, 0);
              }
              if (!timeout2) {
                timeout2 = nextTick(() => {
                  const snapToThreshold = 0.5;
                  lastEventBeforeSnap = newEvent;
                  recentWheelEvents.splice(0);
                  swiper2.slideToClosest(swiper2.params.speed, true, void 0, snapToThreshold);
                }, 500);
              }
            }
            if (!ignoreWheelEvents)
              emit2("scroll", e);
            if (swiper2.params.autoplay && swiper2.params.autoplayDisableOnInteraction)
              swiper2.autoplay.stop();
            if (position === swiper2.minTranslate() || position === swiper2.maxTranslate())
              return true;
          }
        }
        if (e.preventDefault)
          e.preventDefault();
        else
          e.returnValue = false;
        return false;
      }
      function events2(method) {
        let targetEl = swiper2.el;
        if (swiper2.params.mousewheel.eventsTarget !== "container") {
          targetEl = document.querySelector(swiper2.params.mousewheel.eventsTarget);
        }
        targetEl[method]("mouseenter", handleMouseEnter);
        targetEl[method]("mouseleave", handleMouseLeave);
        targetEl[method]("wheel", handle);
      }
      function enable() {
        if (swiper2.params.cssMode) {
          swiper2.wrapperEl.removeEventListener("wheel", handle);
          return true;
        }
        if (swiper2.mousewheel.enabled)
          return false;
        events2("addEventListener");
        swiper2.mousewheel.enabled = true;
        return true;
      }
      function disable() {
        if (swiper2.params.cssMode) {
          swiper2.wrapperEl.addEventListener(event, handle);
          return true;
        }
        if (!swiper2.mousewheel.enabled)
          return false;
        events2("removeEventListener");
        swiper2.mousewheel.enabled = false;
        return true;
      }
      on2("init", () => {
        if (!swiper2.params.mousewheel.enabled && swiper2.params.cssMode) {
          disable();
        }
        if (swiper2.params.mousewheel.enabled)
          enable();
      });
      on2("destroy", () => {
        if (swiper2.params.cssMode) {
          enable();
        }
        if (swiper2.mousewheel.enabled)
          disable();
      });
      Object.assign(swiper2.mousewheel, {
        enable,
        disable
      });
    }
    function createElementIfNotDefined(swiper2, originalParams, params, checkProps) {
      if (swiper2.params.createElements) {
        Object.keys(checkProps).forEach((key) => {
          if (!params[key] && params.auto === true) {
            let element = elementChildren(swiper2.el, `.${checkProps[key]}`)[0];
            if (!element) {
              element = createElement("div", checkProps[key]);
              element.className = checkProps[key];
              swiper2.el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
          }
        });
      }
      return params;
    }
    function classesToSelector(classes2 = "") {
      return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
    }
    function Pagination({
      swiper: swiper2,
      extendParams,
      on: on2,
      emit: emit2
    }) {
      const pfx = "swiper-pagination";
      extendParams({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: "bullets",
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: (number) => number,
          formatFractionTotal: (number) => number,
          bulletClass: `${pfx}-bullet`,
          bulletActiveClass: `${pfx}-bullet-active`,
          modifierClass: `${pfx}-`,
          currentClass: `${pfx}-current`,
          totalClass: `${pfx}-total`,
          hiddenClass: `${pfx}-hidden`,
          progressbarFillClass: `${pfx}-progressbar-fill`,
          progressbarOppositeClass: `${pfx}-progressbar-opposite`,
          clickableClass: `${pfx}-clickable`,
          lockClass: `${pfx}-lock`,
          horizontalClass: `${pfx}-horizontal`,
          verticalClass: `${pfx}-vertical`,
          paginationDisabledClass: `${pfx}-disabled`
        }
      });
      swiper2.pagination = {
        el: null,
        bullets: []
      };
      let bulletSize;
      let dynamicBulletIndex = 0;
      const makeElementsArray = (el) => {
        if (!Array.isArray(el))
          el = [el].filter((e) => !!e);
        return el;
      };
      function isPaginationDisabled() {
        return !swiper2.params.pagination.el || !swiper2.pagination.el || Array.isArray(swiper2.pagination.el) && swiper2.pagination.el.length === 0;
      }
      function setSideBullets(bulletEl, position) {
        const {
          bulletActiveClass
        } = swiper2.params.pagination;
        if (!bulletEl)
          return;
        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
        if (bulletEl) {
          bulletEl.classList.add(`${bulletActiveClass}-${position}`);
          bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
          if (bulletEl) {
            bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
          }
        }
      }
      function onBulletClick(e) {
        const bulletEl = e.target.closest(classesToSelector(swiper2.params.pagination.bulletClass));
        if (!bulletEl) {
          return;
        }
        e.preventDefault();
        const index = elementIndex(bulletEl) * swiper2.params.slidesPerGroup;
        if (swiper2.params.loop) {
          if (swiper2.realIndex === index)
            return;
          const newSlideIndex = swiper2.getSlideIndexByData(index);
          const currentSlideIndex = swiper2.getSlideIndexByData(swiper2.realIndex);
          if (newSlideIndex > swiper2.slides.length - swiper2.loopedSlides) {
            swiper2.loopFix({
              direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
              activeSlideIndex: newSlideIndex,
              slideTo: false
            });
          }
          swiper2.slideToLoop(index);
        } else {
          swiper2.slideTo(index);
        }
      }
      function update2() {
        const rtl = swiper2.rtl;
        const params = swiper2.params.pagination;
        if (isPaginationDisabled())
          return;
        let el = swiper2.pagination.el;
        el = makeElementsArray(el);
        let current;
        let previousIndex;
        const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : swiper2.slides.length;
        const total = swiper2.params.loop ? Math.ceil(slidesLength / swiper2.params.slidesPerGroup) : swiper2.snapGrid.length;
        if (swiper2.params.loop) {
          previousIndex = swiper2.previousRealIndex || 0;
          current = swiper2.params.slidesPerGroup > 1 ? Math.floor(swiper2.realIndex / swiper2.params.slidesPerGroup) : swiper2.realIndex;
        } else if (typeof swiper2.snapIndex !== "undefined") {
          current = swiper2.snapIndex;
          previousIndex = swiper2.previousSnapIndex;
        } else {
          previousIndex = swiper2.previousIndex || 0;
          current = swiper2.activeIndex || 0;
        }
        if (params.type === "bullets" && swiper2.pagination.bullets && swiper2.pagination.bullets.length > 0) {
          const bullets = swiper2.pagination.bullets;
          let firstIndex;
          let lastIndex;
          let midIndex;
          if (params.dynamicBullets) {
            bulletSize = elementOuterSize(bullets[0], swiper2.isHorizontal() ? "width" : "height", true);
            el.forEach((subEl) => {
              subEl.style[swiper2.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
            });
            if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
              dynamicBulletIndex += current - (previousIndex || 0);
              if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (dynamicBulletIndex < 0) {
                dynamicBulletIndex = 0;
              }
            }
            firstIndex = Math.max(current - dynamicBulletIndex, 0);
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }
          bullets.forEach((bulletEl) => {
            const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
            bulletEl.classList.remove(...classesToRemove);
          });
          if (el.length > 1) {
            bullets.forEach((bullet) => {
              const bulletIndex = elementIndex(bullet);
              if (bulletIndex === current) {
                bullet.classList.add(...params.bulletActiveClass.split(" "));
              } else if (swiper2.isElement) {
                bullet.setAttribute("part", "bullet");
              }
              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                }
                if (bulletIndex === firstIndex) {
                  setSideBullets(bullet, "prev");
                }
                if (bulletIndex === lastIndex) {
                  setSideBullets(bullet, "next");
                }
              }
            });
          } else {
            const bullet = bullets[current];
            if (bullet) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            }
            if (swiper2.isElement) {
              bullets.forEach((bulletEl, bulletIndex) => {
                bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
              });
            }
            if (params.dynamicBullets) {
              const firstDisplayedBullet = bullets[firstIndex];
              const lastDisplayedBullet = bullets[lastIndex];
              for (let i = firstIndex; i <= lastIndex; i += 1) {
                if (bullets[i]) {
                  bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                }
              }
              setSideBullets(firstDisplayedBullet, "prev");
              setSideBullets(lastDisplayedBullet, "next");
            }
          }
          if (params.dynamicBullets) {
            const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
            const offsetProp = rtl ? "right" : "left";
            bullets.forEach((bullet) => {
              bullet.style[swiper2.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
            });
          }
        }
        el.forEach((subEl, subElIndex) => {
          if (params.type === "fraction") {
            subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
              fractionEl.textContent = params.formatFractionCurrent(current + 1);
            });
            subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
              totalEl.textContent = params.formatFractionTotal(total);
            });
          }
          if (params.type === "progressbar") {
            let progressbarDirection;
            if (params.progressbarOpposite) {
              progressbarDirection = swiper2.isHorizontal() ? "vertical" : "horizontal";
            } else {
              progressbarDirection = swiper2.isHorizontal() ? "horizontal" : "vertical";
            }
            const scale = (current + 1) / total;
            let scaleX = 1;
            let scaleY = 1;
            if (progressbarDirection === "horizontal") {
              scaleX = scale;
            } else {
              scaleY = scale;
            }
            subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
              progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
              progressEl.style.transitionDuration = `${swiper2.params.speed}ms`;
            });
          }
          if (params.type === "custom" && params.renderCustom) {
            subEl.innerHTML = params.renderCustom(swiper2, current + 1, total);
            if (subElIndex === 0)
              emit2("paginationRender", subEl);
          } else {
            if (subElIndex === 0)
              emit2("paginationRender", subEl);
            emit2("paginationUpdate", subEl);
          }
          if (swiper2.params.watchOverflow && swiper2.enabled) {
            subEl.classList[swiper2.isLocked ? "add" : "remove"](params.lockClass);
          }
        });
      }
      function render2() {
        const params = swiper2.params.pagination;
        if (isPaginationDisabled())
          return;
        const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : swiper2.slides.length;
        let el = swiper2.pagination.el;
        el = makeElementsArray(el);
        let paginationHTML = "";
        if (params.type === "bullets") {
          let numberOfBullets = swiper2.params.loop ? Math.ceil(slidesLength / swiper2.params.slidesPerGroup) : swiper2.snapGrid.length;
          if (swiper2.params.freeMode && swiper2.params.freeMode.enabled && numberOfBullets > slidesLength) {
            numberOfBullets = slidesLength;
          }
          for (let i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper2, i, params.bulletClass);
            } else {
              paginationHTML += `<${params.bulletElement} ${swiper2.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
            }
          }
        }
        if (params.type === "fraction") {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper2, params.currentClass, params.totalClass);
          } else {
            paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
          }
        }
        if (params.type === "progressbar") {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper2, params.progressbarFillClass);
          } else {
            paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
          }
        }
        swiper2.pagination.bullets = [];
        el.forEach((subEl) => {
          if (params.type !== "custom") {
            subEl.innerHTML = paginationHTML || "";
          }
          if (params.type === "bullets") {
            swiper2.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
          }
        });
        if (params.type !== "custom") {
          emit2("paginationRender", el[0]);
        }
      }
      function init() {
        swiper2.params.pagination = createElementIfNotDefined(swiper2, swiper2.originalParams.pagination, swiper2.params.pagination, {
          el: "swiper-pagination"
        });
        const params = swiper2.params.pagination;
        if (!params.el)
          return;
        let el;
        if (typeof params.el === "string" && swiper2.isElement) {
          el = swiper2.el.shadowRoot.querySelector(params.el);
        }
        if (!el && typeof params.el === "string") {
          el = [...document.querySelectorAll(params.el)];
        }
        if (!el) {
          el = params.el;
        }
        if (!el || el.length === 0)
          return;
        if (swiper2.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
          el = [...swiper2.el.querySelectorAll(params.el)];
          if (el.length > 1) {
            el = el.filter((subEl) => {
              if (elementParents(subEl, ".swiper")[0] !== swiper2.el)
                return false;
              return true;
            })[0];
          }
        }
        if (Array.isArray(el) && el.length === 1)
          el = el[0];
        Object.assign(swiper2.pagination, {
          el
        });
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          if (params.type === "bullets" && params.clickable) {
            subEl.classList.add(params.clickableClass);
          }
          subEl.classList.add(params.modifierClass + params.type);
          subEl.classList.add(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.type === "bullets" && params.dynamicBullets) {
            subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
            dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) {
              params.dynamicMainBullets = 1;
            }
          }
          if (params.type === "progressbar" && params.progressbarOpposite) {
            subEl.classList.add(params.progressbarOppositeClass);
          }
          if (params.clickable) {
            subEl.addEventListener("click", onBulletClick);
          }
          if (!swiper2.enabled) {
            subEl.classList.add(params.lockClass);
          }
        });
      }
      function destroy() {
        const params = swiper2.params.pagination;
        if (isPaginationDisabled())
          return;
        let el = swiper2.pagination.el;
        if (el) {
          el = makeElementsArray(el);
          el.forEach((subEl) => {
            subEl.classList.remove(params.hiddenClass);
            subEl.classList.remove(params.modifierClass + params.type);
            subEl.classList.remove(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
            if (params.clickable) {
              subEl.removeEventListener("click", onBulletClick);
            }
          });
        }
        if (swiper2.pagination.bullets)
          swiper2.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
      }
      on2("changeDirection", () => {
        if (!swiper2.pagination || !swiper2.pagination.el)
          return;
        const params = swiper2.params.pagination;
        let {
          el
        } = swiper2.pagination;
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.horizontalClass, params.verticalClass);
          subEl.classList.add(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
        });
      });
      on2("init", () => {
        if (swiper2.params.pagination.enabled === false) {
          disable();
        } else {
          init();
          render2();
          update2();
        }
      });
      on2("activeIndexChange", () => {
        if (typeof swiper2.snapIndex === "undefined") {
          update2();
        }
      });
      on2("snapIndexChange", () => {
        update2();
      });
      on2("snapGridLengthChange", () => {
        render2();
        update2();
      });
      on2("destroy", () => {
        destroy();
      });
      on2("enable disable", () => {
        let {
          el
        } = swiper2.pagination;
        if (el) {
          el = makeElementsArray(el);
          el.forEach((subEl) => subEl.classList[swiper2.enabled ? "remove" : "add"](swiper2.params.pagination.lockClass));
        }
      });
      on2("lock unlock", () => {
        update2();
      });
      on2("click", (_s, e) => {
        const targetEl = e.target;
        let {
          el
        } = swiper2.pagination;
        if (!Array.isArray(el))
          el = [el].filter((element) => !!element);
        if (swiper2.params.pagination.el && swiper2.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper2.params.pagination.bulletClass)) {
          if (swiper2.navigation && (swiper2.navigation.nextEl && targetEl === swiper2.navigation.nextEl || swiper2.navigation.prevEl && targetEl === swiper2.navigation.prevEl))
            return;
          const isHidden2 = el[0].classList.contains(swiper2.params.pagination.hiddenClass);
          if (isHidden2 === true) {
            emit2("paginationShow");
          } else {
            emit2("paginationHide");
          }
          el.forEach((subEl) => subEl.classList.toggle(swiper2.params.pagination.hiddenClass));
        }
      });
      const enable = () => {
        swiper2.el.classList.remove(swiper2.params.pagination.paginationDisabledClass);
        let {
          el
        } = swiper2.pagination;
        if (el) {
          el = makeElementsArray(el);
          el.forEach((subEl) => subEl.classList.remove(swiper2.params.pagination.paginationDisabledClass));
        }
        init();
        render2();
        update2();
      };
      const disable = () => {
        swiper2.el.classList.add(swiper2.params.pagination.paginationDisabledClass);
        let {
          el
        } = swiper2.pagination;
        if (el) {
          el = makeElementsArray(el);
          el.forEach((subEl) => subEl.classList.add(swiper2.params.pagination.paginationDisabledClass));
        }
        destroy();
      };
      Object.assign(swiper2.pagination, {
        enable,
        disable,
        render: render2,
        update: update2,
        init,
        destroy
      });
    }
    function isObject$1(o) {
      return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
    }
    function extend(target, src) {
      const noExtend = ["__proto__", "constructor", "prototype"];
      Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
        if (typeof target[key] === "undefined")
          target[key] = src[key];
        else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
          if (src[key].__swiper__)
            target[key] = src[key];
          else
            extend(target[key], src[key]);
        } else {
          target[key] = src[key];
        }
      });
    }
    function needsNavigation(params = {}) {
      return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
    }
    function needsPagination(params = {}) {
      return params.pagination && typeof params.pagination.el === "undefined";
    }
    function needsScrollbar(params = {}) {
      return params.scrollbar && typeof params.scrollbar.el === "undefined";
    }
    function uniqueClasses(classNames = "") {
      const classes2 = classNames.split(" ").map((c2) => c2.trim()).filter((c2) => !!c2);
      const unique = [];
      classes2.forEach((c2) => {
        if (unique.indexOf(c2) < 0)
          unique.push(c2);
      });
      return unique.join(" ");
    }
    function wrapperClass(className = "") {
      if (!className)
        return "swiper-wrapper";
      if (!className.includes("swiper-wrapper"))
        return `swiper-wrapper ${className}`;
      return className;
    }
    const paramsList = [
      "eventsPrefix",
      "injectStyles",
      "injectStylesUrls",
      "modules",
      "init",
      "_direction",
      "oneWayMovement",
      "touchEventsTarget",
      "initialSlide",
      "_speed",
      "cssMode",
      "updateOnWindowResize",
      "resizeObserver",
      "nested",
      "focusableElements",
      "_enabled",
      "_width",
      "_height",
      "preventInteractionOnTransition",
      "userAgent",
      "url",
      "_edgeSwipeDetection",
      "_edgeSwipeThreshold",
      "_freeMode",
      "_autoHeight",
      "setWrapperSize",
      "virtualTranslate",
      "_effect",
      "breakpoints",
      "_spaceBetween",
      "_slidesPerView",
      "maxBackfaceHiddenSlides",
      "_grid",
      "_slidesPerGroup",
      "_slidesPerGroupSkip",
      "_slidesPerGroupAuto",
      "_centeredSlides",
      "_centeredSlidesBounds",
      "_slidesOffsetBefore",
      "_slidesOffsetAfter",
      "normalizeSlideIndex",
      "_centerInsufficientSlides",
      "_watchOverflow",
      "roundLengths",
      "touchRatio",
      "touchAngle",
      "simulateTouch",
      "_shortSwipes",
      "_longSwipes",
      "longSwipesRatio",
      "longSwipesMs",
      "_followFinger",
      "allowTouchMove",
      "_threshold",
      "touchMoveStopPropagation",
      "touchStartPreventDefault",
      "touchStartForcePreventDefault",
      "touchReleaseOnEdges",
      "uniqueNavElements",
      "_resistance",
      "_resistanceRatio",
      "_watchSlidesProgress",
      "_grabCursor",
      "preventClicks",
      "preventClicksPropagation",
      "_slideToClickedSlide",
      "_loop",
      "loopedSlides",
      "loopPreventsSliding",
      "_rewind",
      "_allowSlidePrev",
      "_allowSlideNext",
      "_swipeHandler",
      "_noSwiping",
      "noSwipingClass",
      "noSwipingSelector",
      "passiveListeners",
      "containerModifierClass",
      "slideClass",
      "slideActiveClass",
      "slideVisibleClass",
      "slideNextClass",
      "slidePrevClass",
      "wrapperClass",
      "lazyPreloaderClass",
      "lazyPreloadPrevNext",
      "runCallbacksOnInit",
      "observer",
      "observeParents",
      "observeSlideChildren",
      // modules
      "a11y",
      "_autoplay",
      "_controller",
      "coverflowEffect",
      "cubeEffect",
      "fadeEffect",
      "flipEffect",
      "creativeEffect",
      "cardsEffect",
      "hashNavigation",
      "history",
      "keyboard",
      "mousewheel",
      "_navigation",
      "_pagination",
      "parallax",
      "_scrollbar",
      "_thumbs",
      "virtual",
      "zoom",
      "control"
    ];
    function getParams(obj = {}, splitEvents = true) {
      const params = {
        on: {}
      };
      const events2 = {};
      const passedParams = {};
      extend(params, Swiper$1.defaults);
      extend(params, Swiper$1.extendedDefaults);
      params._emitClasses = true;
      params.init = false;
      const rest = {};
      const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
      const plainObj = Object.assign({}, obj);
      Object.keys(plainObj).forEach((key) => {
        if (typeof obj[key] === "undefined")
          return;
        if (allowedParams.indexOf(key) >= 0) {
          if (isObject$1(obj[key])) {
            params[key] = {};
            passedParams[key] = {};
            extend(params[key], obj[key]);
            extend(passedParams[key], obj[key]);
          } else {
            params[key] = obj[key];
            passedParams[key] = obj[key];
          }
        } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
          if (splitEvents) {
            events2[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
          } else {
            params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
          }
        } else {
          rest[key] = obj[key];
        }
      });
      ["navigation", "pagination", "scrollbar"].forEach((key) => {
        if (params[key] === true)
          params[key] = {};
        if (params[key] === false)
          delete params[key];
      });
      return {
        params,
        passedParams,
        rest,
        events: events2
      };
    }
    function mountSwiper({
      el,
      nextEl,
      prevEl,
      paginationEl,
      scrollbarEl,
      swiper: swiper2
    }, swiperParams) {
      if (needsNavigation(swiperParams) && nextEl && prevEl) {
        swiper2.params.navigation.nextEl = nextEl;
        swiper2.originalParams.navigation.nextEl = nextEl;
        swiper2.params.navigation.prevEl = prevEl;
        swiper2.originalParams.navigation.prevEl = prevEl;
      }
      if (needsPagination(swiperParams) && paginationEl) {
        swiper2.params.pagination.el = paginationEl;
        swiper2.originalParams.pagination.el = paginationEl;
      }
      if (needsScrollbar(swiperParams) && scrollbarEl) {
        swiper2.params.scrollbar.el = scrollbarEl;
        swiper2.originalParams.scrollbar.el = scrollbarEl;
      }
      swiper2.init(el);
    }
    function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
      const keys = [];
      if (!oldParams)
        return keys;
      const addKey = (key) => {
        if (keys.indexOf(key) < 0)
          keys.push(key);
      };
      if (children && oldChildren) {
        const oldChildrenKeys = oldChildren.map(getKey);
        const childrenKeys = children.map(getKey);
        if (oldChildrenKeys.join("") !== childrenKeys.join(""))
          addKey("children");
        if (oldChildren.length !== children.length)
          addKey("children");
      }
      const watchParams = paramsList.filter((key) => key[0] === "_").map((key) => key.replace(/_/, ""));
      watchParams.forEach((key) => {
        if (key in swiperParams && key in oldParams) {
          if (isObject$1(swiperParams[key]) && isObject$1(oldParams[key])) {
            const newKeys = Object.keys(swiperParams[key]);
            const oldKeys = Object.keys(oldParams[key]);
            if (newKeys.length !== oldKeys.length) {
              addKey(key);
            } else {
              newKeys.forEach((newKey) => {
                if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
                  addKey(key);
                }
              });
              oldKeys.forEach((oldKey) => {
                if (swiperParams[key][oldKey] !== oldParams[key][oldKey])
                  addKey(key);
              });
            }
          } else if (swiperParams[key] !== oldParams[key]) {
            addKey(key);
          }
        }
      });
      return keys;
    }
    function getChildren(originalSlots, slidesRef, oldSlidesRef) {
      if (originalSlots === void 0) {
        originalSlots = {};
      }
      const slides = [];
      const slots = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
      };
      const getSlidesFromElements = (els, slotName) => {
        if (!Array.isArray(els)) {
          return;
        }
        els.forEach((vnode) => {
          const isFragment = typeof vnode.type === "symbol";
          if (slotName === "default")
            slotName = "container-end";
          if (isFragment && vnode.children) {
            getSlidesFromElements(vnode.children, slotName);
          } else if (vnode.type && (vnode.type.name === "SwiperSlide" || vnode.type.name === "AsyncComponentWrapper")) {
            slides.push(vnode);
          } else if (slots[slotName]) {
            slots[slotName].push(vnode);
          }
        });
      };
      Object.keys(originalSlots).forEach((slotName) => {
        if (typeof originalSlots[slotName] !== "function")
          return;
        const els = originalSlots[slotName]();
        getSlidesFromElements(els, slotName);
      });
      oldSlidesRef.value = slidesRef.value;
      slidesRef.value = slides;
      return {
        slides,
        slots
      };
    }
    function updateSwiper({
      swiper: swiper2,
      slides,
      passedParams,
      changedParams,
      nextEl,
      prevEl,
      scrollbarEl,
      paginationEl
    }) {
      const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
      const {
        params: currentParams,
        pagination: pagination2,
        navigation,
        scrollbar,
        virtual,
        thumbs
      } = swiper2;
      let needThumbsInit;
      let needControllerInit;
      let needPaginationInit;
      let needScrollbarInit;
      let needNavigationInit;
      let loopNeedDestroy;
      let loopNeedEnable;
      let loopNeedReloop;
      if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
        needThumbsInit = true;
      }
      if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
        needControllerInit = true;
      }
      if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination2 && !pagination2.el) {
        needPaginationInit = true;
      }
      if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
        needScrollbarInit = true;
      }
      if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
        needNavigationInit = true;
      }
      const destroyModule = (mod) => {
        if (!swiper2[mod])
          return;
        swiper2[mod].destroy();
        if (mod === "navigation") {
          if (swiper2.isElement) {
            swiper2[mod].prevEl.remove();
            swiper2[mod].nextEl.remove();
          }
          currentParams[mod].prevEl = void 0;
          currentParams[mod].nextEl = void 0;
          swiper2[mod].prevEl = void 0;
          swiper2[mod].nextEl = void 0;
        } else {
          if (swiper2.isElement) {
            swiper2[mod].el.remove();
          }
          currentParams[mod].el = void 0;
          swiper2[mod].el = void 0;
        }
      };
      if (changedParams.includes("loop") && swiper2.isElement) {
        if (currentParams.loop && !passedParams.loop) {
          loopNeedDestroy = true;
        } else if (!currentParams.loop && passedParams.loop) {
          loopNeedEnable = true;
        } else {
          loopNeedReloop = true;
        }
      }
      updateParams.forEach((key) => {
        if (isObject$1(currentParams[key]) && isObject$1(passedParams[key])) {
          extend(currentParams[key], passedParams[key]);
          if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
            destroyModule(key);
          }
        } else {
          const newValue = passedParams[key];
          if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
            if (newValue === false) {
              destroyModule(key);
            }
          } else {
            currentParams[key] = passedParams[key];
          }
        }
      });
      if (updateParams.includes("controller") && !needControllerInit && swiper2.controller && swiper2.controller.control && currentParams.controller && currentParams.controller.control) {
        swiper2.controller.control = currentParams.controller.control;
      }
      if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
        virtual.slides = slides;
        virtual.update(true);
      }
      if (changedParams.includes("children") && slides && currentParams.loop) {
        loopNeedReloop = true;
      }
      if (needThumbsInit) {
        const initialized = thumbs.init();
        if (initialized)
          thumbs.update(true);
      }
      if (needControllerInit) {
        swiper2.controller.control = currentParams.controller.control;
      }
      if (needPaginationInit) {
        if (swiper2.isElement && (!paginationEl || typeof paginationEl === "string")) {
          paginationEl = document.createElement("div");
          paginationEl.classList.add("swiper-pagination");
          swiper2.el.shadowEl.appendChild(paginationEl);
        }
        if (paginationEl)
          currentParams.pagination.el = paginationEl;
        pagination2.init();
        pagination2.render();
        pagination2.update();
      }
      if (needScrollbarInit) {
        if (swiper2.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
          scrollbarEl = document.createElement("div");
          scrollbarEl.classList.add("swiper-scrollbar");
          swiper2.el.shadowEl.appendChild(scrollbarEl);
        }
        if (scrollbarEl)
          currentParams.scrollbar.el = scrollbarEl;
        scrollbar.init();
        scrollbar.updateSize();
        scrollbar.setTranslate();
      }
      if (needNavigationInit) {
        if (swiper2.isElement) {
          if (!nextEl || typeof nextEl === "string") {
            nextEl = document.createElement("div");
            nextEl.classList.add("swiper-button-next");
            swiper2.el.shadowEl.appendChild(nextEl);
          }
          if (!prevEl || typeof prevEl === "string") {
            prevEl = document.createElement("div");
            prevEl.classList.add("swiper-button-prev");
            swiper2.el.shadowEl.appendChild(prevEl);
          }
        }
        if (nextEl)
          currentParams.navigation.nextEl = nextEl;
        if (prevEl)
          currentParams.navigation.prevEl = prevEl;
        navigation.init();
        navigation.update();
      }
      if (changedParams.includes("allowSlideNext")) {
        swiper2.allowSlideNext = passedParams.allowSlideNext;
      }
      if (changedParams.includes("allowSlidePrev")) {
        swiper2.allowSlidePrev = passedParams.allowSlidePrev;
      }
      if (changedParams.includes("direction")) {
        swiper2.changeDirection(passedParams.direction, false);
      }
      if (loopNeedDestroy || loopNeedReloop) {
        swiper2.loopDestroy();
      }
      if (loopNeedEnable || loopNeedReloop) {
        swiper2.loopCreate();
      }
      swiper2.update();
    }
    function renderVirtual(swiperRef, slides, virtualData) {
      if (!virtualData)
        return null;
      const getSlideIndex = (index) => {
        let slideIndex = index;
        if (index < 0) {
          slideIndex = slides.length + index;
        } else if (slideIndex >= slides.length) {
          slideIndex = slideIndex - slides.length;
        }
        return slideIndex;
      };
      const style2 = swiperRef.value.isHorizontal() ? {
        [swiperRef.value.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px`
      } : {
        top: `${virtualData.offset}px`
      };
      const {
        from,
        to
      } = virtualData;
      const loopFrom = swiperRef.value.params.loop ? -slides.length : 0;
      const loopTo = swiperRef.value.params.loop ? slides.length * 2 : slides.length;
      const slidesToRender = [];
      for (let i = loopFrom; i < loopTo; i += 1) {
        if (i >= from && i <= to) {
          slidesToRender.push(slides[getSlideIndex(i)]);
        }
      }
      return slidesToRender.map((slide2) => {
        if (!slide2.props)
          slide2.props = {};
        if (!slide2.props.style)
          slide2.props.style = {};
        slide2.props.swiperRef = swiperRef;
        slide2.props.style = style2;
        return h(slide2.type, __spreadValues({}, slide2.props), slide2.children);
      });
    }
    const updateOnVirtualData = (swiper2) => {
      if (!swiper2 || swiper2.destroyed || !swiper2.params.virtual || swiper2.params.virtual && !swiper2.params.virtual.enabled)
        return;
      swiper2.updateSlides();
      swiper2.updateProgress();
      swiper2.updateSlidesClasses();
      if (swiper2.parallax && swiper2.params.parallax && swiper2.params.parallax.enabled) {
        swiper2.parallax.setTranslate();
      }
    };
    const Swiper = {
      name: "Swiper",
      props: {
        tag: {
          type: String,
          default: "div"
        },
        wrapperTag: {
          type: String,
          default: "div"
        },
        modules: {
          type: Array,
          default: void 0
        },
        init: {
          type: Boolean,
          default: void 0
        },
        direction: {
          type: String,
          default: void 0
        },
        oneWayMovement: {
          type: Boolean,
          default: void 0
        },
        touchEventsTarget: {
          type: String,
          default: void 0
        },
        initialSlide: {
          type: Number,
          default: void 0
        },
        speed: {
          type: Number,
          default: void 0
        },
        cssMode: {
          type: Boolean,
          default: void 0
        },
        updateOnWindowResize: {
          type: Boolean,
          default: void 0
        },
        resizeObserver: {
          type: Boolean,
          default: void 0
        },
        nested: {
          type: Boolean,
          default: void 0
        },
        focusableElements: {
          type: String,
          default: void 0
        },
        width: {
          type: Number,
          default: void 0
        },
        height: {
          type: Number,
          default: void 0
        },
        preventInteractionOnTransition: {
          type: Boolean,
          default: void 0
        },
        userAgent: {
          type: String,
          default: void 0
        },
        url: {
          type: String,
          default: void 0
        },
        edgeSwipeDetection: {
          type: [Boolean, String],
          default: void 0
        },
        edgeSwipeThreshold: {
          type: Number,
          default: void 0
        },
        autoHeight: {
          type: Boolean,
          default: void 0
        },
        setWrapperSize: {
          type: Boolean,
          default: void 0
        },
        virtualTranslate: {
          type: Boolean,
          default: void 0
        },
        effect: {
          type: String,
          default: void 0
        },
        breakpoints: {
          type: Object,
          default: void 0
        },
        spaceBetween: {
          type: [Number, String],
          default: void 0
        },
        slidesPerView: {
          type: [Number, String],
          default: void 0
        },
        maxBackfaceHiddenSlides: {
          type: Number,
          default: void 0
        },
        slidesPerGroup: {
          type: Number,
          default: void 0
        },
        slidesPerGroupSkip: {
          type: Number,
          default: void 0
        },
        slidesPerGroupAuto: {
          type: Boolean,
          default: void 0
        },
        centeredSlides: {
          type: Boolean,
          default: void 0
        },
        centeredSlidesBounds: {
          type: Boolean,
          default: void 0
        },
        slidesOffsetBefore: {
          type: Number,
          default: void 0
        },
        slidesOffsetAfter: {
          type: Number,
          default: void 0
        },
        normalizeSlideIndex: {
          type: Boolean,
          default: void 0
        },
        centerInsufficientSlides: {
          type: Boolean,
          default: void 0
        },
        watchOverflow: {
          type: Boolean,
          default: void 0
        },
        roundLengths: {
          type: Boolean,
          default: void 0
        },
        touchRatio: {
          type: Number,
          default: void 0
        },
        touchAngle: {
          type: Number,
          default: void 0
        },
        simulateTouch: {
          type: Boolean,
          default: void 0
        },
        shortSwipes: {
          type: Boolean,
          default: void 0
        },
        longSwipes: {
          type: Boolean,
          default: void 0
        },
        longSwipesRatio: {
          type: Number,
          default: void 0
        },
        longSwipesMs: {
          type: Number,
          default: void 0
        },
        followFinger: {
          type: Boolean,
          default: void 0
        },
        allowTouchMove: {
          type: Boolean,
          default: void 0
        },
        threshold: {
          type: Number,
          default: void 0
        },
        touchMoveStopPropagation: {
          type: Boolean,
          default: void 0
        },
        touchStartPreventDefault: {
          type: Boolean,
          default: void 0
        },
        touchStartForcePreventDefault: {
          type: Boolean,
          default: void 0
        },
        touchReleaseOnEdges: {
          type: Boolean,
          default: void 0
        },
        uniqueNavElements: {
          type: Boolean,
          default: void 0
        },
        resistance: {
          type: Boolean,
          default: void 0
        },
        resistanceRatio: {
          type: Number,
          default: void 0
        },
        watchSlidesProgress: {
          type: Boolean,
          default: void 0
        },
        grabCursor: {
          type: Boolean,
          default: void 0
        },
        preventClicks: {
          type: Boolean,
          default: void 0
        },
        preventClicksPropagation: {
          type: Boolean,
          default: void 0
        },
        slideToClickedSlide: {
          type: Boolean,
          default: void 0
        },
        loop: {
          type: Boolean,
          default: void 0
        },
        loopedSlides: {
          type: Number,
          default: void 0
        },
        loopPreventsSliding: {
          type: Boolean,
          default: void 0
        },
        rewind: {
          type: Boolean,
          default: void 0
        },
        allowSlidePrev: {
          type: Boolean,
          default: void 0
        },
        allowSlideNext: {
          type: Boolean,
          default: void 0
        },
        swipeHandler: {
          type: Boolean,
          default: void 0
        },
        noSwiping: {
          type: Boolean,
          default: void 0
        },
        noSwipingClass: {
          type: String,
          default: void 0
        },
        noSwipingSelector: {
          type: String,
          default: void 0
        },
        passiveListeners: {
          type: Boolean,
          default: void 0
        },
        containerModifierClass: {
          type: String,
          default: void 0
        },
        slideClass: {
          type: String,
          default: void 0
        },
        slideActiveClass: {
          type: String,
          default: void 0
        },
        slideVisibleClass: {
          type: String,
          default: void 0
        },
        slideNextClass: {
          type: String,
          default: void 0
        },
        slidePrevClass: {
          type: String,
          default: void 0
        },
        wrapperClass: {
          type: String,
          default: void 0
        },
        lazyPreloaderClass: {
          type: String,
          default: void 0
        },
        lazyPreloadPrevNext: {
          type: Number,
          default: void 0
        },
        runCallbacksOnInit: {
          type: Boolean,
          default: void 0
        },
        observer: {
          type: Boolean,
          default: void 0
        },
        observeParents: {
          type: Boolean,
          default: void 0
        },
        observeSlideChildren: {
          type: Boolean,
          default: void 0
        },
        a11y: {
          type: [Boolean, Object],
          default: void 0
        },
        autoplay: {
          type: [Boolean, Object],
          default: void 0
        },
        controller: {
          type: Object,
          default: void 0
        },
        coverflowEffect: {
          type: Object,
          default: void 0
        },
        cubeEffect: {
          type: Object,
          default: void 0
        },
        fadeEffect: {
          type: Object,
          default: void 0
        },
        flipEffect: {
          type: Object,
          default: void 0
        },
        creativeEffect: {
          type: Object,
          default: void 0
        },
        cardsEffect: {
          type: Object,
          default: void 0
        },
        hashNavigation: {
          type: [Boolean, Object],
          default: void 0
        },
        history: {
          type: [Boolean, Object],
          default: void 0
        },
        keyboard: {
          type: [Boolean, Object],
          default: void 0
        },
        mousewheel: {
          type: [Boolean, Object],
          default: void 0
        },
        navigation: {
          type: [Boolean, Object],
          default: void 0
        },
        pagination: {
          type: [Boolean, Object],
          default: void 0
        },
        parallax: {
          type: [Boolean, Object],
          default: void 0
        },
        scrollbar: {
          type: [Boolean, Object],
          default: void 0
        },
        thumbs: {
          type: Object,
          default: void 0
        },
        virtual: {
          type: [Boolean, Object],
          default: void 0
        },
        zoom: {
          type: [Boolean, Object],
          default: void 0
        },
        grid: {
          type: [Object],
          default: void 0
        },
        freeMode: {
          type: [Boolean, Object],
          default: void 0
        },
        enabled: {
          type: Boolean,
          default: void 0
        }
      },
      emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
      setup(props, _ref) {
        let {
          slots: originalSlots,
          emit: emit2
        } = _ref;
        const {
          tag: Tag,
          wrapperTag: WrapperTag
        } = props;
        const containerClasses = ref("swiper");
        const virtualData = ref(null);
        const breakpointChanged = ref(false);
        const initializedRef = ref(false);
        const swiperElRef = ref(null);
        const swiperRef = ref(null);
        const oldPassedParamsRef = ref(null);
        const slidesRef = {
          value: []
        };
        const oldSlidesRef = {
          value: []
        };
        const nextElRef = ref(null);
        const prevElRef = ref(null);
        const paginationElRef = ref(null);
        const scrollbarElRef = ref(null);
        const {
          params: swiperParams,
          passedParams
        } = getParams(props, false);
        getChildren(originalSlots, slidesRef, oldSlidesRef);
        oldPassedParamsRef.value = passedParams;
        oldSlidesRef.value = slidesRef.value;
        const onBeforeBreakpoint = () => {
          getChildren(originalSlots, slidesRef, oldSlidesRef);
          breakpointChanged.value = true;
        };
        swiperParams.onAny = function(event2) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          emit2(event2, ...args);
        };
        Object.assign(swiperParams.on, {
          _beforeBreakpoint: onBeforeBreakpoint,
          _containerClasses(swiper2, classes2) {
            containerClasses.value = classes2;
          }
        });
        const passParams = __spreadValues({}, swiperParams);
        delete passParams.wrapperClass;
        swiperRef.value = new Swiper$1(passParams);
        if (swiperRef.value.virtual && swiperRef.value.params.virtual.enabled) {
          swiperRef.value.virtual.slides = slidesRef.value;
          const extendWith = {
            cache: false,
            slides: slidesRef.value,
            renderExternal: (data) => {
              virtualData.value = data;
            },
            renderExternalUpdate: false
          };
          extend(swiperRef.value.params.virtual, extendWith);
          extend(swiperRef.value.originalParams.virtual, extendWith);
        }
        onUpdated(() => {
          if (!initializedRef.value && swiperRef.value) {
            swiperRef.value.emitSlidesClasses();
            initializedRef.value = true;
          }
          const {
            passedParams: newPassedParams
          } = getParams(props, false);
          const changedParams = getChangedParams(newPassedParams, oldPassedParamsRef.value, slidesRef.value, oldSlidesRef.value, (c2) => c2.props && c2.props.key);
          oldPassedParamsRef.value = newPassedParams;
          if ((changedParams.length || breakpointChanged.value) && swiperRef.value && !swiperRef.value.destroyed) {
            updateSwiper({
              swiper: swiperRef.value,
              slides: slidesRef.value,
              passedParams: newPassedParams,
              changedParams,
              nextEl: nextElRef.value,
              prevEl: prevElRef.value,
              scrollbarEl: scrollbarElRef.value,
              paginationEl: paginationElRef.value
            });
          }
          breakpointChanged.value = false;
        });
        provide("swiper", swiperRef);
        watch(virtualData, () => {
          nextTick$1(() => {
            updateOnVirtualData(swiperRef.value);
          });
        });
        onMounted(() => {
          if (!swiperElRef.value)
            return;
          mountSwiper({
            el: swiperElRef.value,
            nextEl: nextElRef.value,
            prevEl: prevElRef.value,
            paginationEl: paginationElRef.value,
            scrollbarEl: scrollbarElRef.value,
            swiper: swiperRef.value
          }, swiperParams);
          emit2("swiper", swiperRef.value);
        });
        onBeforeUnmount(() => {
          if (swiperRef.value && !swiperRef.value.destroyed) {
            swiperRef.value.destroy(true, false);
          }
        });
        function renderSlides(slides) {
          if (swiperParams.virtual) {
            return renderVirtual(swiperRef, slides, virtualData.value);
          }
          slides.forEach((slide2, index) => {
            if (!slide2.props)
              slide2.props = {};
            slide2.props.swiperRef = swiperRef;
            slide2.props.swiperSlideIndex = index;
          });
          return slides;
        }
        return () => {
          const {
            slides,
            slots
          } = getChildren(originalSlots, slidesRef, oldSlidesRef);
          return h(Tag, {
            ref: swiperElRef,
            class: uniqueClasses(containerClasses.value)
          }, [slots["container-start"], h(WrapperTag, {
            class: wrapperClass(swiperParams.wrapperClass)
          }, [slots["wrapper-start"], renderSlides(slides), slots["wrapper-end"]]), needsNavigation(props) && [h("div", {
            ref: prevElRef,
            class: "swiper-button-prev"
          }), h("div", {
            ref: nextElRef,
            class: "swiper-button-next"
          })], needsScrollbar(props) && h("div", {
            ref: scrollbarElRef,
            class: "swiper-scrollbar"
          }), needsPagination(props) && h("div", {
            ref: paginationElRef,
            class: "swiper-pagination"
          }), slots["container-end"]]);
        };
      }
    };
    const SwiperSlide = {
      name: "SwiperSlide",
      props: {
        tag: {
          type: String,
          default: "div"
        },
        swiperRef: {
          type: Object,
          required: false
        },
        swiperSlideIndex: {
          type: Number,
          default: void 0,
          required: false
        },
        zoom: {
          type: Boolean,
          default: void 0,
          required: false
        },
        lazy: {
          type: Boolean,
          default: false,
          required: false
        },
        virtualIndex: {
          type: [String, Number],
          default: void 0
        }
      },
      setup(props, _ref) {
        let {
          slots
        } = _ref;
        let eventAttached = false;
        const {
          swiperRef
        } = props;
        const slideElRef = ref(null);
        const slideClasses = ref("swiper-slide");
        const lazyLoaded = ref(false);
        function updateClasses(swiper2, el, classNames) {
          if (el === slideElRef.value) {
            slideClasses.value = classNames;
          }
        }
        onMounted(() => {
          if (!swiperRef || !swiperRef.value)
            return;
          swiperRef.value.on("_slideClass", updateClasses);
          eventAttached = true;
        });
        onBeforeUpdate(() => {
          if (eventAttached || !swiperRef || !swiperRef.value)
            return;
          swiperRef.value.on("_slideClass", updateClasses);
          eventAttached = true;
        });
        onUpdated(() => {
          if (!slideElRef.value || !swiperRef || !swiperRef.value)
            return;
          if (typeof props.swiperSlideIndex !== "undefined") {
            slideElRef.value.swiperSlideIndex = props.swiperSlideIndex;
          }
          if (swiperRef.value.destroyed) {
            if (slideClasses.value !== "swiper-slide") {
              slideClasses.value = "swiper-slide";
            }
          }
        });
        onBeforeUnmount(() => {
          if (!swiperRef || !swiperRef.value)
            return;
          swiperRef.value.off("_slideClass", updateClasses);
        });
        const slideData = computed(() => ({
          isActive: slideClasses.value.indexOf("swiper-slide-active") >= 0,
          isVisible: slideClasses.value.indexOf("swiper-slide-visible") >= 0,
          isPrev: slideClasses.value.indexOf("swiper-slide-prev") >= 0,
          isNext: slideClasses.value.indexOf("swiper-slide-next") >= 0
        }));
        provide("swiperSlide", slideData);
        const onLoad2 = () => {
          lazyLoaded.value = true;
        };
        return () => {
          return h(props.tag, {
            class: uniqueClasses(`${slideClasses.value}`),
            ref: slideElRef,
            "data-swiper-slide-index": typeof props.virtualIndex === "undefined" && swiperRef && swiperRef.value && swiperRef.value.params.loop ? props.swiperSlideIndex : props.virtualIndex,
            onLoadCapture: onLoad2
          }, props.zoom ? h("div", {
            class: "swiper-zoom-container",
            "data-swiper-zoom": typeof props.zoom === "number" ? props.zoom : void 0
          }, [slots.default && slots.default(slideData.value), props.lazy && !lazyLoaded.value && h("div", {
            class: "swiper-lazy-preloader"
          })]) : [slots.default && slots.default(slideData.value), props.lazy && !lazyLoaded.value && h("div", {
            class: "swiper-lazy-preloader"
          })]);
        };
      }
    };
    const siteLinks = [
      {
        icon: "Html5",
        name: "Html&Css",
        link: "/public/html/htmlAndCss.html"
      },
      {
        icon: "JsSquare",
        name: "JavaScript"
      },
      {
        icon: "Vuejs",
        name: "Vue"
      },
      {
        icon: "Node",
        name: "Node"
      },
      {
        icon: "React",
        name: "React"
      }
    ];
    const Links_vue_vue_type_style_index_0_scoped_5809f35f_lang = "";
    const _withScopeId$4 = (n) => (pushScopeId("data-v-5809f35f"), n = n(), popScopeId(), n);
    const _hoisted_1$9 = {
      key: 0,
      class: "links"
    };
    const _hoisted_2$8 = { class: "line" };
    const _hoisted_3$6 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("span", { class: "title" }, "文档列表", -1));
    const _hoisted_4$5 = ["onClick"];
    const _hoisted_5$5 = { class: "name text-hidden" };
    const _hoisted_6$5 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "swiper-pagination" }, null, -1));
    const _sfc_main$9 = {
      __name: "Links",
      setup(__props) {
        const siteLinksList = computed(() => {
          const result = [];
          for (let i = 0; i < siteLinks.length; i += 6) {
            const subArr = siteLinks.slice(i, i + 6);
            result.push(subArr);
          }
          return result;
        });
        const siteIcon = {
          Blog,
          Cloud,
          CompactDisc,
          Compass,
          Book,
          Fire,
          LaptopCode,
          React,
          Html5,
          JsSquare,
          Vuejs,
          Node
        };
        const jumpLink = (data) => {
          if (data.link) {
            window.open(data.link, "_blank");
          } else {
            ElMessage("文档正在整理中 ~ ");
          }
        };
        onMounted(() => {
          console.log(siteLinks);
        });
        return (_ctx, _cache) => {
          const _component_el_col = ElCol;
          const _component_el_row = ElRow;
          return unref(siteLinks)[0] ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
            createBaseVNode("div", _hoisted_2$8, [
              createVNode(unref(Icon), { size: "20" }, {
                default: withCtx(() => [
                  createVNode(unref(Link$1))
                ]),
                _: 1
              }),
              _hoisted_3$6
            ]),
            unref(siteLinks)[0] ? (openBlock(), createBlock(unref(Swiper), {
              key: 0,
              modules: [unref(Pagination), unref(Mousewheel)],
              "slides-per-view": 1,
              "space-between": 40,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
                bulletElement: "div"
              },
              mousewheel: true
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(siteLinksList), (site) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: site }, {
                    default: withCtx(() => [
                      createVNode(_component_el_row, {
                        class: "link-all",
                        gutter: 20
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(site, (item, index) => {
                            return openBlock(), createBlock(_component_el_col, {
                              span: 8,
                              key: item
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", {
                                  class: "item cards",
                                  style: normalizeStyle(index < 3 ? "margin-bottom: 20px" : null),
                                  onClick: ($event) => jumpLink(item)
                                }, [
                                  createVNode(unref(Icon), { size: "26" }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(siteIcon[item.icon])))
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createBaseVNode("span", _hoisted_5$5, toDisplayString(item.name), 1)
                                ], 12, _hoisted_4$5)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                _hoisted_6$5
              ]),
              _: 1
            }, 8, ["modules", "pagination"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true);
        };
      }
    };
    const Link = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-5809f35f"]]);
    const Right_vue_vue_type_style_index_0_scoped_281a9bdd_lang = "";
    const _hoisted_1$8 = { class: "bg" };
    const _hoisted_2$7 = { class: "sm" };
    const _sfc_main$8 = {
      __name: "Right",
      setup(__props) {
        const store = mainStore();
        const siteUrl = computed(() => {
          const url = "chenxq";
          if (url.startsWith("http://") || url.startsWith("https://")) {
            const urlFormat = url.replace(/^(https?:\/\/)/, "");
            return urlFormat.split(".");
          }
          return url.split(".");
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(unref(store).mobileOpenState ? "right" : "right hidden")
          }, [
            createBaseVNode("div", {
              class: "logo text-hidden",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(store).mobileFuncState = !unref(store).mobileFuncState)
            }, [
              createBaseVNode("span", _hoisted_1$8, toDisplayString(unref(siteUrl)[0]), 1),
              createBaseVNode("span", _hoisted_2$7, "." + toDisplayString(unref(siteUrl)[1]), 1)
            ]),
            createVNode(Func),
            createVNode(Link)
          ], 2);
        };
      }
    };
    const MainRight = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-281a9bdd"]]);
    const Background_vue_vue_type_style_index_0_scoped_d1da0224_lang = "";
    const _hoisted_1$7 = ["src"];
    const _hoisted_2$6 = ["href"];
    const _sfc_main$7 = {
      __name: "Background",
      emits: ["loadComplete"],
      setup(__props, { emit: __emit }) {
        const store = mainStore();
        const bgUrl = ref(null);
        const imgTimeout = ref(null);
        const emit2 = __emit;
        const bgRandom = Math.floor(Math.random() * 10 + 1);
        const changeBg = (type2) => {
          if (type2 == 0) {
            bgUrl.value = `/images/background${bgRandom}.jpg`;
          } else if (type2 == 1) {
            bgUrl.value = "https://api.dujin.org/bing/1920.php";
          } else if (type2 == 2) {
            bgUrl.value = "https://api.aixiaowai.cn/gqapi/gqapi.php";
          } else if (type2 == 3) {
            bgUrl.value = "https://api.aixiaowai.cn/api/api.php";
          }
        };
        const imgLoadComplete = () => {
          imgTimeout.value = setTimeout(
            () => {
              store.setImgLoadStatus(true);
            },
            Math.floor(Math.random() * (600 - 300 + 1)) + 300
          );
        };
        const imgAnimationEnd = () => {
          console.log("壁纸加载且动画完成");
          emit2("loadComplete");
        };
        const imgLoadError = () => {
          console.error("壁纸加载失败：", bgUrl.value);
          ElMessage({
            message: "壁纸加载失败，已临时切换回默认",
            icon: h(Error$1, {
              theme: "filled",
              fill: "#efefef"
            })
          });
          bgUrl.value = `/images/background${bgRandom}.jpg`;
        };
        onMounted(() => {
          changeBg(store.coverType);
        });
        onBeforeUnmount(() => {
          clearTimeout(imgTimeout.value);
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(unref(store).backgroundShow ? "cover show" : "cover")
          }, [
            withDirectives(createBaseVNode("img", {
              class: "bg",
              alt: "cover",
              src: unref(bgUrl),
              onLoad: imgLoadComplete,
              onErrorOnce: imgLoadError,
              onAnimationend: imgAnimationEnd
            }, null, 40, _hoisted_1$7), [
              [vShow, unref(store).imgLoadStatus]
            ]),
            createBaseVNode("div", {
              class: normalizeClass(unref(store).backgroundShow ? "gray hidden" : "gray")
            }, null, 2),
            createVNode(Transition, {
              name: "fade",
              mode: "out-in"
            }, {
              default: withCtx(() => [
                unref(store).backgroundShow && unref(store).coverType != "3" ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  class: "down",
                  href: unref(bgUrl),
                  target: "_blank"
                }, " 下载壁纸 ", 8, _hoisted_2$6)) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ], 2);
        };
      }
    };
    const Background = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-d1da0224"]]);
    const name = "chenxq-home";
    const author = "imsyy";
    const github = "https://chenxq-297.github.io";
    const home = "https://chenxq-297.github.io/chenxq-home";
    const homepage = "https://chenxq-297.github.io/chenxq-home";
    const version = "4.1.4";
    const type = "module";
    const scripts = {
      dev: "vite --host",
      build: "vite build",
      preview: "vite preview",
      format: "prettier --write src/",
      lint: "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts,.vue --fix"
    };
    const dependencies = {
      "@worstone/vue-aplayer": "^1.0.6",
      aplayer: "^1.10.1",
      axios: "^1.6.3",
      "element-plus": "^2.4.4",
      "fetch-jsonp": "^1.3.0",
      pinia: "^2.1.7",
      "pinia-plugin-persistedstate": "^3.2.1",
      swiper: "^9.4.1",
      vue: "^3.4.3"
    };
    const devDependencies = {
      "@icon-park/vue-next": "^1.4.2",
      "@vicons/fa": "^0.12.0",
      "@vicons/utils": "^0.1.4",
      "@vitejs/plugin-vue": "^4.6.2",
      eslint: "^8.56.0",
      "eslint-plugin-vue": "^9.19.2",
      prettier: "^3.1.1",
      sass: "^1.69.6",
      terser: "^5.26.0",
      "unplugin-auto-import": "^0.11.5",
      "unplugin-vue-components": "^0.22.12",
      vite: "^4.5.1",
      "vite-plugin-compression": "^0.5.1",
      "vite-plugin-pwa": "^0.14.7"
    };
    const config = {
      name,
      author,
      github,
      home,
      homepage,
      "private": true,
      version,
      type,
      scripts,
      dependencies,
      devDependencies
    };
    const Footer_vue_vue_type_style_index_0_scoped_733d78f1_lang = "";
    const _hoisted_1$6 = {
      key: 0,
      class: "power"
    };
    const _hoisted_2$5 = {
      key: 0,
      class: "site-start"
    };
    const _hoisted_3$5 = ["href"];
    const _hoisted_4$4 = { class: "hidden" };
    const _hoisted_5$4 = ["href"];
    const _hoisted_6$4 = {
      key: 0,
      href: "https://beian.miit.gov.cn",
      target: "_blank"
    };
    const _hoisted_7$4 = {
      key: 1,
      class: "lrc"
    };
    const _hoisted_8$4 = ["innerHTML"];
    const _sfc_main$6 = {
      __name: "Footer",
      setup(__props) {
        const store = mainStore();
        const fullYear = (/* @__PURE__ */ new Date()).getFullYear();
        const siteStartDate = ref("2024-02-24");
        const siteIcp = ref("");
        const siteAnthor = ref("chenxq");
        const siteUrl = computed(() => {
          const url = "chenxq";
          if (!url.startsWith("http://") && !url.startsWith("https://")) {
            return "//" + url;
          }
          return url;
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("footer", {
            id: "footer",
            class: normalizeClass(unref(store).footerBlur ? "blur" : null)
          }, [
            createVNode(Transition, {
              name: "fade",
              mode: "out-in"
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  !unref(store).playerState || !unref(store).playerLrcShow ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
                    createBaseVNode("span", null, [
                      createTextVNode(" Copyright © "),
                      ((_a2 = unref(siteStartDate)) == null ? void 0 : _a2.length) >= 4 ? (openBlock(), createElementBlock("span", _hoisted_2$5, toDisplayString(unref(siteStartDate).substring(0, 4)) + " - ", 1)) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(unref(fullYear)) + " ", 1),
                      createBaseVNode("a", { href: unref(siteUrl) }, toDisplayString(unref(siteAnthor)), 9, _hoisted_3$5)
                    ]),
                    createBaseVNode("span", _hoisted_4$4, [
                      createTextVNode(" & Made by "),
                      createBaseVNode("a", {
                        href: unref(config).github,
                        target: "_blank"
                      }, toDisplayString(unref(config).author), 9, _hoisted_5$4)
                    ]),
                    unref(siteIcp) ? (openBlock(), createElementBlock("a", _hoisted_6$4, " & " + toDisplayString(unref(siteIcp)), 1)) : createCommentVNode("", true)
                  ])) : (openBlock(), createElementBlock("div", _hoisted_7$4, [
                    createVNode(Transition, {
                      name: "fade",
                      mode: "out-in"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createElementBlock("div", {
                          class: "lrc-all",
                          key: unref(store).getPlayerLrc
                        }, [
                          createVNode(unref(MusicOne), {
                            theme: "filled",
                            size: "18",
                            fill: "#efefef"
                          }),
                          createBaseVNode("span", {
                            class: "lrc-text text-hidden",
                            innerHTML: unref(store).getPlayerLrc
                          }, null, 8, _hoisted_8$4),
                          createVNode(unref(MusicOne), {
                            theme: "filled",
                            size: "18",
                            fill: "#efefef"
                          })
                        ]))
                      ]),
                      _: 1
                    })
                  ]))
                ];
              }),
              _: 1
            })
          ], 2);
        };
      }
    };
    const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-733d78f1"]]);
    const elProgress = "";
    const TimeCapsule_vue_vue_type_style_index_0_scoped_e1d644a0_lang = "";
    const _withScopeId$3 = (n) => (pushScopeId("data-v-e1d644a0"), n = n(), popScopeId(), n);
    const _hoisted_1$5 = { class: "time-capsule" };
    const _hoisted_2$4 = { class: "title" };
    const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", null, "时光胶囊", -1));
    const _hoisted_4$3 = { class: "text" };
    const _hoisted_5$3 = { class: "text" };
    const _hoisted_6$3 = { class: "text" };
    const _hoisted_7$3 = { class: "text" };
    const _hoisted_8$3 = { key: 0 };
    const _hoisted_9$3 = ["innerHTML"];
    const _sfc_main$5 = {
      __name: "TimeCapsule",
      setup(__props) {
        const store = mainStore();
        const timeData = ref(getTimeCapsule());
        const startDate = ref("2024-02-24");
        const startDateText = ref(null);
        const timeInterval = ref(null);
        onMounted(() => {
          timeInterval.value = setInterval(() => {
            timeData.value = getTimeCapsule();
            if (startDate.value)
              startDateText.value = siteDateStatistics(new Date(startDate.value));
          }, 1e3);
        });
        onBeforeUnmount(() => {
          clearInterval(timeInterval.value);
        });
        return (_ctx, _cache) => {
          var _a2;
          const _component_el_progress = ElProgress;
          return openBlock(), createElementBlock("div", _hoisted_1$5, [
            createBaseVNode("div", _hoisted_2$4, [
              createVNode(unref(HourglassFull), {
                theme: "two-tone",
                size: "24",
                fill: ["#efefef", "#00000020"]
              }),
              _hoisted_3$4
            ]),
            createBaseVNode("span", _hoisted_4$3, "今日已经度过了 " + toDisplayString(unref(timeData).day.elapsed) + " 小时", 1),
            createVNode(_component_el_progress, {
              "text-inside": true,
              "stroke-width": 20,
              percentage: unref(timeData).day.pass
            }, null, 8, ["percentage"]),
            createBaseVNode("span", _hoisted_5$3, "本周已经度过了 " + toDisplayString(unref(timeData).week.elapsed) + " 天", 1),
            createVNode(_component_el_progress, {
              "text-inside": true,
              "stroke-width": 20,
              percentage: unref(timeData).week.pass
            }, null, 8, ["percentage"]),
            createBaseVNode("span", _hoisted_6$3, "本月已经度过了 " + toDisplayString(unref(timeData).month.elapsed) + " 天", 1),
            createVNode(_component_el_progress, {
              "text-inside": true,
              "stroke-width": 20,
              percentage: unref(timeData).month.pass
            }, null, 8, ["percentage"]),
            createBaseVNode("span", _hoisted_7$3, "今年已经度过了 " + toDisplayString(unref(timeData).year.elapsed) + " 个月", 1),
            createVNode(_component_el_progress, {
              "text-inside": true,
              "stroke-width": 20,
              percentage: unref(timeData).year.pass
            }, null, 8, ["percentage"]),
            ((_a2 = unref(startDate)) == null ? void 0 : _a2.length) >= 4 && unref(store).siteStartShow ? (openBlock(), createElementBlock("div", _hoisted_8$3, [
              createBaseVNode("span", {
                class: "text",
                innerHTML: unref(startDateText)
              }, null, 8, _hoisted_9$3)
            ])) : createCommentVNode("", true)
          ]);
        };
      }
    };
    const TimeCapsule = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e1d644a0"]]);
    const GithubProject_vue_vue_type_style_index_0_scoped_6fe702f1_lang = "";
    const _withScopeId$2 = (n) => (pushScopeId("data-v-6fe702f1"), n = n(), popScopeId(), n);
    const _hoisted_1$4 = { class: "github-project" };
    const _hoisted_2$3 = { class: "title" };
    const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", null, "Github", -1));
    const _hoisted_4$2 = ["onClick"];
    const _hoisted_5$2 = { class: "name" };
    const _hoisted_6$2 = { class: "name-text" };
    const _hoisted_7$2 = { class: "author" };
    const _hoisted_8$2 = { class: "desc" };
    const _hoisted_9$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "swiper-pagination" }, null, -1));
    const _sfc_main$4 = {
      __name: "GithubProject",
      setup(__props) {
        const projectData = [
          {
            name: "home",
            author: "imsyy",
            desc: "个人主页，我的个人主页，个人主页源码，主页模板，homepage"
          },
          {
            name: "SPlayer",
            author: "imsyy",
            desc: "🎉 一个简约的音乐播放器，支持网易云音乐账号登录，逐字歌词，下载歌曲，展示评论区，音乐云盘及歌单管理，音乐频谱，移动端基础适配 | A minimalist music player"
          },
          {
            name: "Snavigation",
            author: "imsyy",
            desc: "Snavigation 一个简约的起始页 | 支持自定义搜索引擎，自定义快捷方式，自定义壁纸以及数据备份"
          },
          {
            name: "DailyHotApi",
            author: "imsyy",
            desc: "今日热榜 API，一个聚合热门数据的 API 接口，支持 Vercel 部署 | 前端页面：https://github.com/imsyy/DailyHot"
          },
          {
            name: "site-status",
            author: "imsyy",
            desc: "📺 一个基于 UptimeRobot API 的在线状态面板 | 站点监测 | 状态检测 | An online status panel based on the UptimeRobot API | UptimeRobot, status, site"
          }
        ];
        const projectList = computed(() => {
          const result = [];
          for (let i = 0; i < projectData.length; i += 4) {
            const subArr = projectData.slice(i, i + 4);
            result.push(subArr);
          }
          return result;
        });
        const toGithub = (data) => {
          window.open(`https://github.com/${data.author}/${data.name}`);
        };
        return (_ctx, _cache) => {
          const _component_el_col = ElCol;
          const _component_el_row = ElRow;
          return openBlock(), createElementBlock("div", _hoisted_1$4, [
            createBaseVNode("div", _hoisted_2$3, [
              createVNode(unref(GithubOne), {
                theme: "two-tone",
                size: "24",
                fill: ["#efefef", "#00000020"]
              }),
              _hoisted_3$3
            ]),
            createVNode(unref(Swiper), {
              modules: [unref(Pagination), unref(Mousewheel)],
              "slides-per-view": 1,
              "space-between": 40,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
                bulletElement: "div"
              },
              mousewheel: true
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(projectList), (list) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: list }, {
                    default: withCtx(() => [
                      createVNode(_component_el_row, {
                        class: "all-project",
                        gutter: 20
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(list, (item, index) => {
                            return openBlock(), createBlock(_component_el_col, {
                              span: 12,
                              key: index
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", {
                                  class: "project cards",
                                  onClick: ($event) => toGithub(item)
                                }, [
                                  createBaseVNode("div", _hoisted_5$2, [
                                    createVNode(unref(Bookmark), {
                                      theme: "outline",
                                      size: "22",
                                      fill: "#efefef"
                                    }),
                                    createBaseVNode("div", _hoisted_6$2, [
                                      createBaseVNode("span", _hoisted_7$2, toDisplayString(item.author), 1),
                                      createBaseVNode("span", null, toDisplayString(item.name), 1)
                                    ])
                                  ]),
                                  createBaseVNode("span", _hoisted_8$2, toDisplayString(item.desc), 1)
                                ], 8, _hoisted_4$2)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                _hoisted_9$2
              ]),
              _: 1
            }, 8, ["modules", "pagination"])
          ]);
        };
      }
    };
    const GithubProject = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6fe702f1"]]);
    const index_vue_vue_type_style_index_0_scoped_29504fc6_lang = "";
    const _hoisted_1$3 = { class: "content" };
    const _sfc_main$3 = {
      __name: "index",
      setup(__props) {
        const store = mainStore();
        const closeShow = ref(false);
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            class: "box cards",
            onMouseenter: _cache[2] || (_cache[2] = ($event) => closeShow.value = true),
            onMouseleave: _cache[3] || (_cache[3] = ($event) => closeShow.value = false)
          }, [
            createVNode(Transition, { name: "el-fade-in-linear" }, {
              default: withCtx(() => [
                withDirectives(createVNode(unref(CloseOne), {
                  class: "close",
                  theme: "filled",
                  size: "28",
                  fill: "#ffffff60",
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(store).boxOpenState = false)
                }, null, 512), [
                  [vShow, unref(closeShow)]
                ])
              ]),
              _: 1
            }),
            createVNode(Transition, { name: "el-fade-in-linear" }, {
              default: withCtx(() => [
                withDirectives(createVNode(unref(SettingTwo), {
                  class: "setting",
                  theme: "filled",
                  size: "28",
                  fill: "#ffffff60",
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(store).setOpenState = true)
                }, null, 512), [
                  [vShow, unref(closeShow)]
                ])
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_1$3, [
              createVNode(TimeCapsule),
              createVNode(GithubProject)
            ])
          ], 32);
        };
      }
    };
    const Box = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-29504fc6"]]);
    const elCard = "";
    const elCollapse = "";
    const elSwitch = "";
    const elCollapseItem = "";
    const elRadioGroup = "";
    const elRadio = "";
    const Set_vue_vue_type_style_index_0_scoped_e740a7fe_lang = "";
    const _withScopeId$1 = (n) => (pushScopeId("data-v-e740a7fe"), n = n(), popScopeId(), n);
    const _hoisted_1$2 = { class: "setting" };
    const _hoisted_2$2 = { class: "bg-set" };
    const _hoisted_3$2 = { class: "item" };
    const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "text" }, "建站日期显示", -1));
    const _hoisted_5$1 = { class: "item" };
    const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "text" }, "音乐点击是否打开面板", -1));
    const _hoisted_7$1 = { class: "item" };
    const _hoisted_8$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "text" }, "底栏歌词显示", -1));
    const _hoisted_9$1 = { class: "item" };
    const _hoisted_10 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "text" }, "底栏背景模糊", -1));
    const _hoisted_11 = { class: "item" };
    const _hoisted_12 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "text" }, "自动播放", -1));
    const _hoisted_13 = { class: "item" };
    const _hoisted_14 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "text" }, "随机播放", -1));
    const _hoisted_15 = { class: "item" };
    const _hoisted_16 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "text" }, "循环模式", -1));
    const _hoisted_17 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", null, "设置内容待增加", -1));
    const _sfc_main$2 = {
      __name: "Set",
      setup(__props) {
        const store = mainStore();
        const {
          coverType,
          siteStartShow,
          musicClick,
          playerLrcShow,
          footerBlur,
          playerAutoplay,
          playerOrder,
          playerLoop
        } = storeToRefs(store);
        const activeName = ref("1");
        const radioChange = () => {
          ElMessage({
            message: "壁纸设置成功，刷新后生效",
            icon: h(SuccessPicture, {
              theme: "filled",
              fill: "#efefef"
            })
          });
        };
        return (_ctx, _cache) => {
          const _component_el_radio = ElRadio;
          const _component_el_radio_group = ElRadioGroup;
          const _component_el_collapse_item = ElCollapseItem;
          const _component_el_switch = ElSwitch;
          const _component_el_collapse = ElCollapse;
          return openBlock(), createElementBlock("div", _hoisted_1$2, [
            createVNode(_component_el_collapse, {
              class: "collapse",
              modelValue: unref(activeName),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(activeName) ? activeName.value = $event : null),
              accordion: ""
            }, {
              default: withCtx(() => [
                createVNode(_component_el_collapse_item, {
                  title: "个性壁纸",
                  name: "1"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2$2, [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(coverType),
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(coverType) ? coverType.value = $event : null),
                        "text-color": "#ffffff",
                        onChange: radioChange
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio, {
                            label: "0",
                            size: "large",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("默认壁纸")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_radio, {
                            label: "1",
                            size: "large",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("每日一图")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_radio, {
                            label: "2",
                            size: "large",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("随机风景")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_radio, {
                            label: "3",
                            size: "large",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("随机动漫")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_collapse_item, {
                  title: "个性化调整",
                  name: "2"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3$2, [
                      _hoisted_4$1,
                      createVNode(_component_el_switch, {
                        modelValue: unref(siteStartShow),
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(siteStartShow) ? siteStartShow.value = $event : null),
                        "inline-prompt": "",
                        "active-icon": unref(CheckSmall),
                        "inactive-icon": unref(CloseSmall)
                      }, null, 8, ["modelValue", "active-icon", "inactive-icon"])
                    ]),
                    createBaseVNode("div", _hoisted_5$1, [
                      _hoisted_6$1,
                      createVNode(_component_el_switch, {
                        modelValue: unref(musicClick),
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(musicClick) ? musicClick.value = $event : null),
                        "inline-prompt": "",
                        "active-icon": unref(CheckSmall),
                        "inactive-icon": unref(CloseSmall)
                      }, null, 8, ["modelValue", "active-icon", "inactive-icon"])
                    ]),
                    createBaseVNode("div", _hoisted_7$1, [
                      _hoisted_8$1,
                      createVNode(_component_el_switch, {
                        modelValue: unref(playerLrcShow),
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(playerLrcShow) ? playerLrcShow.value = $event : null),
                        "inline-prompt": "",
                        "active-icon": unref(CheckSmall),
                        "inactive-icon": unref(CloseSmall)
                      }, null, 8, ["modelValue", "active-icon", "inactive-icon"])
                    ]),
                    createBaseVNode("div", _hoisted_9$1, [
                      _hoisted_10,
                      createVNode(_component_el_switch, {
                        modelValue: unref(footerBlur),
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(footerBlur) ? footerBlur.value = $event : null),
                        "inline-prompt": "",
                        "active-icon": unref(CheckSmall),
                        "inactive-icon": unref(CloseSmall)
                      }, null, 8, ["modelValue", "active-icon", "inactive-icon"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_collapse_item, {
                  title: "播放器配置",
                  name: "3"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_11, [
                      _hoisted_12,
                      createVNode(_component_el_switch, {
                        modelValue: unref(playerAutoplay),
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(playerAutoplay) ? playerAutoplay.value = $event : null),
                        "inline-prompt": "",
                        "active-icon": unref(CheckSmall),
                        "inactive-icon": unref(CloseSmall)
                      }, null, 8, ["modelValue", "active-icon", "inactive-icon"])
                    ]),
                    createBaseVNode("div", _hoisted_13, [
                      _hoisted_14,
                      createVNode(_component_el_switch, {
                        modelValue: unref(playerOrder),
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(playerOrder) ? playerOrder.value = $event : null),
                        "inline-prompt": "",
                        "active-icon": unref(CheckSmall),
                        "inactive-icon": unref(CloseSmall),
                        "active-value": "random",
                        "inactive-value": "list"
                      }, null, 8, ["modelValue", "active-icon", "inactive-icon"])
                    ]),
                    createBaseVNode("div", _hoisted_15, [
                      _hoisted_16,
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(playerLoop),
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(playerLoop) ? playerLoop.value = $event : null),
                        size: "small",
                        "text-color": "#FFFFFF"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio, {
                            label: "all",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("列表")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_radio, {
                            label: "one",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("单曲")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_radio, {
                            label: "none",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode("不循环")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_collapse_item, {
                  title: "其他设置",
                  name: "4"
                }, {
                  default: withCtx(() => [
                    _hoisted_17
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]);
        };
      }
    };
    const Set$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e740a7fe"]]);
    const index_vue_vue_type_style_index_0_scoped_12358b34_lang = "";
    const _withScopeId = (n) => (pushScopeId("data-v-12358b34"), n = n(), popScopeId(), n);
    const _hoisted_1$1 = { class: "logo text-hidden" };
    const _hoisted_2$1 = { class: "bg" };
    const _hoisted_3$1 = { class: "sm" };
    const _hoisted_4 = { class: "version" };
    const _hoisted_5 = { class: "num" };
    const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "card-header" }, [
      /* @__PURE__ */ createBaseVNode("span", null, "更新日志")
    ], -1));
    const _hoisted_7 = { class: "upnote" };
    const _hoisted_8 = { class: "title" };
    const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "全局设置", -1));
    const _sfc_main$1 = {
      __name: "index",
      setup(__props) {
        const store = mainStore();
        const closeShow = ref(false);
        const siteUrl = computed(() => {
          const url = "chenxq";
          if (url.startsWith("http://") || url.startsWith("https://")) {
            const urlFormat = url.replace(/^(https?:\/\/)/, "");
            return urlFormat.split(".");
          }
          return url.split(".");
        });
        const upData = reactive({
          new: [
            "采用 Vue 进行重构",
            "音乐歌单支持快速自定义",
            "壁纸支持个性化设置",
            "音乐播放器支持音量控制"
          ],
          fix: ["修复天气 API", "时光胶囊显示错误", "移动端动画及细节", "图标更换为 IconPark"]
        });
        const jumpTo = (url) => {
          window.open(url);
        };
        return (_ctx, _cache) => {
          const _component_el_tooltip = ElTooltip;
          const _component_el_card = ElCard;
          const _component_el_col = ElCol;
          const _component_el_row = ElRow;
          return openBlock(), createElementBlock("div", {
            class: "set",
            onMouseenter: _cache[2] || (_cache[2] = ($event) => closeShow.value = true),
            onMouseleave: _cache[3] || (_cache[3] = ($event) => closeShow.value = false),
            onClick: _cache[4] || (_cache[4] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createVNode(Transition, { name: "el-fade-in-linear" }, {
              default: withCtx(() => [
                withDirectives(createVNode(unref(CloseOne), {
                  class: "close",
                  theme: "filled",
                  size: "28",
                  fill: "#ffffff60",
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(store).setOpenState = false)
                }, null, 512), [
                  [vShow, unref(closeShow)]
                ])
              ]),
              _: 1
            }),
            createVNode(_component_el_row, { gutter: 40 }, {
              default: withCtx(() => [
                createVNode(_component_el_col, {
                  span: 12,
                  class: "left"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$1, [
                      createBaseVNode("span", _hoisted_2$1, toDisplayString(unref(siteUrl)[0]), 1),
                      createBaseVNode("span", _hoisted_3$1, "." + toDisplayString(unref(siteUrl)[1]), 1)
                    ]),
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, "v " + toDisplayString(unref(config).version), 1),
                      createVNode(_component_el_tooltip, {
                        content: "Github 源代码仓库",
                        placement: "right",
                        "show-arrow": false
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(GithubOne), {
                            class: "github",
                            theme: "outline",
                            size: "24",
                            onClick: _cache[1] || (_cache[1] = ($event) => jumpTo(unref(config).github))
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_el_card, { class: "update" }, {
                      header: withCtx(() => [
                        _hoisted_6
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_7, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(upData).new, (item) => {
                            return openBlock(), createElementBlock("div", {
                              key: item,
                              class: "uptext"
                            }, [
                              createVNode(unref(AddOne), {
                                theme: "outline",
                                size: "22"
                              }),
                              createTextVNode(" " + toDisplayString(item), 1)
                            ]);
                          }), 128)),
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(upData).fix, (item) => {
                            return openBlock(), createElementBlock("div", {
                              key: item,
                              class: "uptext"
                            }, [
                              createVNode(unref(Bug), {
                                theme: "outline",
                                size: "22"
                              }),
                              createTextVNode(" " + toDisplayString(item), 1)
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, {
                  span: 12,
                  class: "right"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(unref(SettingTwo), {
                        theme: "filled",
                        size: "28",
                        fill: "#ffffff60"
                      }),
                      _hoisted_9
                    ]),
                    createVNode(Set$1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 32);
        };
      }
    };
    const MoreSet = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-12358b34"]]);
    let mainCursor;
    Math.lerp = (a, b, n) => (1 - n) * a + n * b;
    const getStyle = (el, attr) => {
      try {
        return window.getComputedStyle ? window.getComputedStyle(el)[attr] : el.currentStyle[attr];
      } catch (e) {
        console.error(e);
      }
      return false;
    };
    const cursorInit = () => {
      mainCursor = new Cursor();
      return mainCursor;
    };
    class Cursor {
      constructor() {
        this.pos = {
          curr: null,
          prev: null
        };
        this.pt = [];
        this.create();
        this.init();
        this.render();
      }
      move(left2, top) {
        this.cursor.style["left"] = `${left2}px`;
        this.cursor.style["top"] = `${top}px`;
      }
      create() {
        if (!this.cursor) {
          this.cursor = document.createElement("div");
          this.cursor.id = "cursor";
          this.cursor.classList.add("xs-hidden");
          this.cursor.classList.add("hidden");
          document.body.append(this.cursor);
        }
        var el = document.getElementsByTagName("*");
        for (let i = 0; i < el.length; i++)
          if (getStyle(el[i], "cursor") == "pointer")
            this.pt.push(el[i].outerHTML);
        document.body.appendChild(this.scr = document.createElement("style"));
        this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='10px' height='10px'><circle cx='4' cy='4' r='4' fill='white' /></svg>") 4 4, auto !important}`;
      }
      refresh() {
        this.scr.remove();
        this.cursor.classList.remove("active");
        this.pos = {
          curr: null,
          prev: null
        };
        this.pt = [];
        this.create();
        this.init();
        this.render();
      }
      init() {
        document.onmousemove = (e) => {
          this.pos.curr == null && this.move(e.clientX - 8, e.clientY - 8);
          this.pos.curr = {
            x: e.clientX - 8,
            y: e.clientY - 8
          };
          this.cursor.classList.remove("hidden");
        };
        document.onmouseenter = () => this.cursor.classList.remove("hidden");
        document.onmouseleave = () => this.cursor.classList.add("hidden");
        document.onmousedown = () => this.cursor.classList.add("active");
        document.onmouseup = () => this.cursor.classList.remove("active");
      }
      render() {
        if (this.pos.prev) {
          this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.35);
          this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.35);
          this.move(this.pos.prev.x, this.pos.prev.y);
        } else {
          this.pos.prev = this.pos.curr;
        }
        requestAnimationFrame(() => this.render());
      }
    }
    const App_vue_vue_type_style_index_0_scoped_0fd98bc0_lang = "";
    const _hoisted_1 = {
      key: 0,
      id: "main"
    };
    const _hoisted_2 = { class: "container" };
    const _hoisted_3 = { class: "all" };
    const _sfc_main = {
      __name: "App",
      setup(__props) {
        const store = mainStore();
        const getWidth = () => {
          store.setInnerWidth(window.innerWidth);
        };
        const loadComplete = () => {
          nextTick$1(() => {
            helloInit();
            checkDays();
          });
        };
        watch(
          () => store.innerWidth,
          (value) => {
            if (value < 990) {
              store.boxOpenState = false;
            }
          }
        );
        onMounted(() => {
          cursorInit();
          document.oncontextmenu = () => {
            ElMessage({
              message: "为了浏览体验，本站禁用右键",
              grouping: true,
              duration: 2e3
            });
            return false;
          };
          window.addEventListener("mousedown", (event2) => {
            if (event2.button == 1) {
              store.backgroundShow = !store.backgroundShow;
              ElMessage({
                message: `已${store.backgroundShow ? "开启" : "退出"}壁纸展示状态`,
                grouping: true
              });
            }
          });
          getWidth();
          window.addEventListener("resize", getWidth);
          const styleTitle1 = "font-size: 20px;font-weight: 600;color: rgb(244,167,89);";
          const styleTitle2 = "font-size:12px;color: rgb(244,167,89);";
          const styleContent = "color: rgb(30,152,255);";
          const title1 = "無名の主页";
          const title2 = `
 _____ __  __  _______     ____     __
|_   _|  \\/  |/ ____\\ \\   / /\\ \\   / /
  | | | \\  / | (___  \\ \\_/ /  \\ \\_/ /
  | | | |\\/| |\\___ \\  \\   /    \\   /
 _| |_| |  | |____) |  | |      | |
|_____|_|  |_|_____/   |_|      |_|`;
          const content = `

版本: ${config.version}
主页: ${config.home}
Github: ${config.github}`;
          console.info(`%c${title1} %c${title2} %c${content}`, styleTitle1, styleTitle2, styleContent);
        });
        onBeforeUnmount(() => {
          window.removeEventListener("resize", getWidth);
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock(Fragment, null, [
            createVNode(Loading),
            createVNode(Background, { onLoadComplete: loadComplete }),
            createVNode(Transition, {
              name: "fade",
              mode: "out-in"
            }, {
              default: withCtx(() => [
                unref(store).imgLoadStatus ? (openBlock(), createElementBlock("main", _hoisted_1, [
                  withDirectives(createBaseVNode("div", _hoisted_2, [
                    withDirectives(createBaseVNode("section", _hoisted_3, [
                      createVNode(MainLeft),
                      withDirectives(createVNode(MainRight, null, null, 512), [
                        [vShow, !unref(store).boxOpenState]
                      ]),
                      withDirectives(createVNode(Box, null, null, 512), [
                        [vShow, unref(store).boxOpenState]
                      ])
                    ], 512), [
                      [vShow, !unref(store).setOpenState]
                    ]),
                    withDirectives(createBaseVNode("section", {
                      class: "more",
                      onClick: _cache[0] || (_cache[0] = ($event) => unref(store).setOpenState = false)
                    }, [
                      createVNode(MoreSet)
                    ], 512), [
                      [vShow, unref(store).setOpenState]
                    ])
                  ], 512), [
                    [vShow, !unref(store).backgroundShow]
                  ]),
                  withDirectives(createVNode(unref(Icon), {
                    class: "menu",
                    size: "24",
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(store).mobileOpenState = !unref(store).mobileOpenState)
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(unref(store).mobileOpenState ? unref(CloseSmall) : unref(HamburgerButton))))
                    ]),
                    _: 1
                  }, 512), [
                    [vShow, !unref(store).backgroundShow]
                  ]),
                  createVNode(Transition, {
                    name: "fade",
                    mode: "out-in"
                  }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(Footer, null, null, 512), [
                        [vShow, !unref(store).backgroundShow && !unref(store).setOpenState]
                      ])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ], 64);
        };
      }
    };
    const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0fd98bc0"]]);
    function isObject(v) {
      return typeof v === "object" && v !== null;
    }
    function normalizeOptions(options, factoryOptions) {
      options = isObject(options) ? options : /* @__PURE__ */ Object.create(null);
      return new Proxy(options, {
        get(target, key, receiver) {
          if (key === "key")
            return Reflect.get(target, key, receiver);
          return Reflect.get(target, key, receiver) || Reflect.get(factoryOptions, key, receiver);
        }
      });
    }
    function get(state, path) {
      return path.reduce((obj, p2) => {
        return obj == null ? void 0 : obj[p2];
      }, state);
    }
    function set(state, path, val) {
      return path.slice(0, -1).reduce((obj, p2) => {
        if (/^(__proto__)$/.test(p2))
          return {};
        else
          return obj[p2] = obj[p2] || {};
      }, state)[path[path.length - 1]] = val, state;
    }
    function pick(baseState, paths) {
      return paths.reduce((substate, path) => {
        const pathArray = path.split(".");
        return set(substate, pathArray, get(baseState, pathArray));
      }, {});
    }
    function parsePersistence(factoryOptions, store) {
      return (o) => {
        var _a2;
        try {
          const {
            storage = localStorage,
            beforeRestore = void 0,
            afterRestore = void 0,
            serializer = {
              serialize: JSON.stringify,
              deserialize: JSON.parse
            },
            key = store.$id,
            paths = null,
            debug = false
          } = o;
          return {
            storage,
            beforeRestore,
            afterRestore,
            serializer,
            key: ((_a2 = factoryOptions.key) != null ? _a2 : (k2) => k2)(typeof key == "string" ? key : key(store.$id)),
            paths,
            debug
          };
        } catch (e) {
          if (o.debug)
            console.error("[pinia-plugin-persistedstate]", e);
          return null;
        }
      };
    }
    function hydrateStore(store, { storage, serializer, key, debug }) {
      try {
        const fromStorage = storage == null ? void 0 : storage.getItem(key);
        if (fromStorage)
          store.$patch(serializer == null ? void 0 : serializer.deserialize(fromStorage));
      } catch (e) {
        if (debug)
          console.error("[pinia-plugin-persistedstate]", e);
      }
    }
    function persistState(state, { storage, serializer, key, paths, debug }) {
      try {
        const toStore = Array.isArray(paths) ? pick(state, paths) : state;
        storage.setItem(key, serializer.serialize(toStore));
      } catch (e) {
        if (debug)
          console.error("[pinia-plugin-persistedstate]", e);
      }
    }
    function createPersistedState(factoryOptions = {}) {
      return (context) => {
        const { auto = false } = factoryOptions;
        const {
          options: { persist = auto },
          store,
          pinia: pinia2
        } = context;
        if (!persist)
          return;
        if (!(store.$id in pinia2.state.value)) {
          const original_store = pinia2._s.get(store.$id.replace("__hot:", ""));
          if (original_store)
            Promise.resolve().then(() => original_store.$persist());
          return;
        }
        const persistences = (Array.isArray(persist) ? persist.map((p2) => normalizeOptions(p2, factoryOptions)) : [normalizeOptions(persist, factoryOptions)]).map(parsePersistence(factoryOptions, store)).filter(Boolean);
        store.$persist = () => {
          persistences.forEach((persistence) => {
            persistState(store.$state, persistence);
          });
        };
        store.$hydrate = ({ runHooks = true } = {}) => {
          persistences.forEach((persistence) => {
            const { beforeRestore, afterRestore } = persistence;
            if (runHooks)
              beforeRestore == null ? void 0 : beforeRestore(context);
            hydrateStore(store, persistence);
            if (runHooks)
              afterRestore == null ? void 0 : afterRestore(context);
          });
        };
        persistences.forEach((persistence) => {
          const { beforeRestore, afterRestore } = persistence;
          beforeRestore == null ? void 0 : beforeRestore(context);
          hydrateStore(store, persistence);
          afterRestore == null ? void 0 : afterRestore(context);
          store.$subscribe(
            (_mutation, state) => {
              persistState(state, persistence);
            },
            {
              detached: true
            }
          );
        });
      };
    }
    var src_default = createPersistedState();
    const swiper = "";
    const pagination = "";
    const app = createApp(App);
    const pinia = createPinia();
    pinia.use(src_default);
    app.use(pinia);
    app.mount("#app");
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      console.log("站点已更新，刷新后生效");
      ElMessage("站点已更新，刷新后生效");
    });
  }
});
export default require_index_001();
