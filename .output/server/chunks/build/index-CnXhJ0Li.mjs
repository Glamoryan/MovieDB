import { useSSRContext, defineComponent, ref, mergeProps, watch, computed, resolveComponent, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { d as defineStore, _ as _export_sfc } from './server.mjs';
import { debounce } from 'lodash';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20273.42%2035.52'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20y1='17.76'%20x2='273.42'%20y2='17.76'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2390cea1'/%3e%3cstop%20offset='0.56'%20stop-color='%233cbec9'/%3e%3cstop%20offset='1'%20stop-color='%2300b3e5'/%3e%3c/linearGradient%3e%3c/defs%3e%3ctitle%3eAsset%203%3c/title%3e%3cg%20id='Layer_2'%20data-name='Layer%202'%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cpath%20class='cls-1'%20d='M191.85,35.37h63.9A17.67,17.67,0,0,0,273.42,17.7h0A17.67,17.67,0,0,0,255.75,0h-63.9A17.67,17.67,0,0,0,174.18,17.7h0A17.67,17.67,0,0,0,191.85,35.37ZM10.1,35.42h7.8V6.92H28V0H0v6.9H10.1Zm28.1,0H46V8.25h.1L55.05,35.4h6L70.3,8.25h.1V35.4h7.8V0H66.45l-8.2,23.1h-.1L50,0H38.2ZM89.14.12h11.7a33.56,33.56,0,0,1,8.08,1,18.52,18.52,0,0,1,6.67,3.08,15.09,15.09,0,0,1,4.53,5.52,18.5,18.5,0,0,1,1.67,8.25,16.91,16.91,0,0,1-1.62,7.58,16.3,16.3,0,0,1-4.38,5.5,19.24,19.24,0,0,1-6.35,3.37,24.53,24.53,0,0,1-7.55,1.15H89.14Zm7.8,28.2h4a21.66,21.66,0,0,0,5-.55A10.58,10.58,0,0,0,110,26a8.73,8.73,0,0,0,2.68-3.35,11.9,11.9,0,0,0,1-5.08,9.87,9.87,0,0,0-1-4.52,9.17,9.17,0,0,0-2.63-3.18A11.61,11.61,0,0,0,106.22,8a17.06,17.06,0,0,0-4.68-.63h-4.6ZM133.09.12h13.2a32.87,32.87,0,0,1,4.63.33,12.66,12.66,0,0,1,4.17,1.3,7.94,7.94,0,0,1,3,2.72,8.34,8.34,0,0,1,1.15,4.65,7.48,7.48,0,0,1-1.67,5,9.13,9.13,0,0,1-4.43,2.82V17a10.28,10.28,0,0,1,3.18,1,8.51,8.51,0,0,1,2.45,1.85,7.79,7.79,0,0,1,1.57,2.62,9.16,9.16,0,0,1,.55,3.2,8.52,8.52,0,0,1-1.2,4.68,9.32,9.32,0,0,1-3.1,3A13.38,13.38,0,0,1,152.32,35a22.5,22.5,0,0,1-4.73.5h-14.5Zm7.8,14.15h5.65a7.65,7.65,0,0,0,1.78-.2,4.78,4.78,0,0,0,1.57-.65,3.43,3.43,0,0,0,1.13-1.2,3.63,3.63,0,0,0,.42-1.8A3.3,3.3,0,0,0,151,8.6a3.42,3.42,0,0,0-1.23-1.13A6.07,6.07,0,0,0,148,6.9a9.9,9.9,0,0,0-1.85-.18h-5.3Zm0,14.65h7a8.27,8.27,0,0,0,1.83-.2,4.67,4.67,0,0,0,1.67-.7,3.93,3.93,0,0,0,1.23-1.3,3.8,3.8,0,0,0,.47-1.95,3.16,3.16,0,0,0-.62-2,4,4,0,0,0-1.58-1.18,8.23,8.23,0,0,0-2-.55,15.12,15.12,0,0,0-2.05-.15h-5.9Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav-bar flex items-center justify-between" }, _attrs))}><div class="section-left flex items-center"><img${ssrRenderAttr("src", _imports_0)} alt="logo" class="logo"><div class="nav-link flex items-center ml-4"><div class="nav-link-item">`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Movies`);
      } else {
        return [
          createTextVNode("Movies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="nav-link-item">TV Shows</div><div class="nav-link-item">People</div><div class="nav-link-item">More</div></div></div><div class="section-right flex items-center"><div class="create-movie">+</div><div class="language-selector rounded-md">EN</div><div class="login">Login</div><div class="join-tmdb">Join TMDB</div><div class="search-icon"></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BannerItem",
  __ssrInlineRender: true,
  emits: ["update-search"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const searchTerm = ref("");
    debounce((term) => {
      emits("update-search", term);
    }, 500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner-main" }, _attrs))}><div class="banner-content"><div class="title"><span class="content-title">Welcome.</span> Millions of movies, TV shows and people to discover. Explore now. </div><div class="search flex"><input${ssrRenderAttr("value", searchTerm.value)} class="rounded-md" type="text" name="" id=""><button class="rounded-3xl">Search</button></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useStore = defineStore({
  id: "main",
  state: () => ({
    favoriteMovies: []
  }),
  actions: {
    toggleFavorite(movie) {
      const index2 = this.$state.favoriteMovies.findIndex((item) => item.id === movie.id);
      if (index2 === -1) {
        this.$state.favoriteMovies.push(movie);
      } else {
        this.$state.favoriteMovies.splice(index2, 1);
      }
      localStorage.setItem("favoriteMovies", JSON.stringify(this.$state.favoriteMovies));
    }
  },
  getters: {
    isFavorite(state) {
      return (movie) => state.favoriteMovies.some((item) => item.id === movie.id);
    }
  },
  onInvalidate() {
    const favorites = localStorage.getItem("favoriteMovies");
    if (favorites) {
      this.favoriteMovies = JSON.parse(favorites);
    }
  }
});
const _sfc_main$3 = {
  props: {
    movie: Object
  },
  setup(props) {
    const store = useStore();
    const isFavorite = computed(() => store.isFavorite(props.movie));
    const toggleFavorite = () => {
      store.toggleFavorite(props.movie);
    };
    return { isFavorite, toggleFavorite };
  },
  methods: {
    getImageUrl() {
      return `https://image.tmdb.org/t/p/w220_and_h330_face/${this.movie.poster_path}`;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "item-card mt-6" }, _attrs))}><img class="image rounded-xl"${ssrRenderAttr("src", $options.getImageUrl())} alt="item-image"><div class="rating text-center">${ssrInterpolate($props.movie.vote_average.toFixed(1))}</div><div class="title">${ssrInterpolate($props.movie.title)}</div><div class="date">${ssrInterpolate($props.movie.release_date)}</div><button class="favorite-button">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: $setup.isFavorite ? ["fas", "star"] : ["far", "star"]
  }, null, _parent));
  _push(`</button></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CardItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const popularEndpoint = "https://api.themoviedb.org/3/discover/movie?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RecommenderItem",
  __ssrInlineRender: true,
  props: {
    searchTerm: String
  },
  setup(__props) {
    const props = __props;
    const movies = ref([]);
    const currentSelection = ref("popular");
    const fetchMovies = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        movies.value = data.results;
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    const fetchPopularMovies = () => {
      fetchMovies(popularEndpoint);
      currentSelection.value = "popular";
    };
    watch(() => props.searchTerm, (newTerm) => {
      if (newTerm && newTerm.length >= 3) {
        fetchMovies(`https://api.themoviedb.org/3/search/movie?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&query=${newTerm}&include_adult=false&language=en-US&page=1`);
      } else {
        fetchPopularMovies();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recommender-wrapper mt-4 ml-4" }, _attrs))}><div class="header flex items-center"><div class="title">What&#39;s Popular</div><div class="selectors flex"><div class="${ssrRenderClass([{ current: currentSelection.value === "popular" }, "selector popular"])}">Popular </div><div class="${ssrRenderClass([{ current: currentSelection.value === "top-rated" }, "selector top-rated"])}">Top Rated </div></div></div><div class="content flex"><!--[-->`);
      ssrRenderList(movies.value, (movie) => {
        _push(ssrRenderComponent(CardItem, {
          key: movie.id,
          movie
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RecommenderItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "MainView",
  __ssrInlineRender: true,
  setup(__props) {
    const searchTerm = ref("");
    const handleSearch = (term) => {
      searchTerm.value = term;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavItem = __nuxt_component_0;
      const _component_BannerItem = _sfc_main$4;
      const _component_RecommenderItem = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NavItem, null, null, _parent));
      _push(ssrRenderComponent(_component_BannerItem, { onUpdateSearch: handleSearch }, null, _parent));
      _push(ssrRenderComponent(_component_RecommenderItem, { "search-term": searchTerm.value }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MainView = _sfc_main$1;
  _push(ssrRenderComponent(_component_MainView, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CnXhJ0Li.mjs.map
