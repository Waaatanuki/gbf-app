import{a6 as l,r as s}from"./index-b8cc9633.js";const o={set(t,e){window.localStorage.setItem(t,JSON.stringify(e))},get(t){const e=window.localStorage.getItem(t);return JSON.parse(e)},remove(t){window.localStorage.removeItem(t)},clear(){window.localStorage.clear()}},d=l("app",()=>{const t=s("desktop"),e=s({opened:o.get("sidebarStatus")?!!+o.get("sidebarStatus"):!0,withoutAnimation:!1});function i(){e.value.opened=!e.value.opened,e.value.withoutAnimation=!1,e.value.opened?o.set("sidebarStatus",1):o.set("sidebarStatus",0)}function n(a){o.set("sidebarStatus",0),e.value.opened=!1,e.value.withoutAnimation=a}function r(a){t.value=a}return{device:t,sidebar:e,toggleSidebar:i,closeSideBar:n,toggleDevice:r}});export{d as u};
