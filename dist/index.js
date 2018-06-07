var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
define("ui/component", ["require", "exports", "fast-deep-equal"], function (require, exports, fast_deep_equal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Component {
        constructor(vnode) {
            // Use pure to mark this component for optimization
            // Do not use this for components that hold internal state,
            // use impure child components, or need access to children
            this.pure = false;
            this.attrs = vnode.attrs;
        }
        oninit(_) {
            if (this.pure)
                this.patch(this.updatePure, 'oncreate', 'onupdate', 'view');
            else
                this.patch(this.update, 'oncreate', 'onupdate', 'view');
        }
        onbeforeupdate(vnode, old) {
            return !this.pure || !fast_deep_equal_1.default(vnode.attrs, old.attrs);
        }
        patch(to, ...methods) {
            const comp = this;
            methods.forEach(method => {
                const original = comp[method] && comp[method].bind(comp);
                comp[method] = (...args) => {
                    return to.apply(comp, args.concat(original));
                };
            });
        }
        update(vnode, original) {
            this.attrs = vnode.attrs;
            if (vnode.dom)
                this.dom = vnode.dom;
            this.children = vnode.children;
            this.onafterupdate();
            if (original) {
                if (process.env.NODE_ENV === 'production') {
                    try {
                        return original(vnode);
                    }
                    catch (e) {
                        console.error(e);
                        return null;
                    }
                }
                else {
                    return original(vnode);
                }
            }
        }
        onafterupdate() { }
        updatePure(vnode, original) {
            this.attrs = vnode.attrs;
            this.dom = vnode.dom;
            if (original)
                return original(vnode);
        }
        view() {
            throw 'assert';
        }
    }
    exports.Component = Component;
});
define("ui/page", ["require", "exports", "mithril", "ui/component"], function (require, exports, mithril_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Page extends component_1.Component {
        constructor(vnode) {
            super(vnode);
            this.currentRoute = null;
            this.currentRoute = this.attrs.route;
        }
        oninit(vnode) {
            super.oninit(vnode);
            this.onroutechange();
        }
        onafterupdate() {
            const last = this.currentRoute.href;
            this.currentRoute = this.attrs.route;
            if (last !== this.currentRoute.href)
                this.onroutechange();
        }
        onroutechange() { }
        static render(attrs) {
            return mithril_1.default(this, attrs);
        }
    }
    exports.Page = Page;
});
define("ui/picture", ["require", "exports", "mithril", "ui/component", "classnames", "./picture.less"], function (require, exports, mithril_2, component_2, classnames_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const WIDTHS = [100, 200, 400, 600, 800];
    const HEIGHTS = [100, 200, 400, 600, 800];
    function largeImage(img) {
        return getResizedUrl(img.src, 800, 800);
    }
    exports.largeImage = largeImage;
    function getResizedUrl(url, width, height) {
        let w = WIDTHS.find(w => w > width);
        let h = HEIGHTS.find(h => h > height);
        if (!w)
            w = WIDTHS[WIDTHS.length - 1];
        if (!h)
            h = HEIGHTS[HEIGHTS.length - 1];
        return `/cache/${w}/${h}${url}`;
    }
    exports.getResizedUrl = getResizedUrl;
    class Picture extends component_2.Component {
        sized(path, width) {
            if (path.charAt(0) != '/')
                path = `/${path}`;
            return `/cache/${width}/auto${path}`;
        }
        srcset(path, max) {
            return WIDTHS.filter(width => width <= max).map(width => {
                const src = this.sized(path, width);
                return `${src} ${width * 2}w`;
            });
        }
        view() {
            const _a = this.attrs, { empty, width, height, src, mod, inline = false, max = 800 } = _a, attrs = __rest(_a, ["empty", "width", "height", "src", "mod", "inline", "max"]);
            if (empty || !src)
                return;
            const set = this.srcset(src, max);
            return mithril_2.default('.picture', {
                class: classnames_1.default([
                    `mod-${mod}`,
                    {
                        'is-inline': inline
                    }
                ])
            }, mithril_2.default('img.picture-el', Object.assign({ src: this.sized(src, WIDTHS[WIDTHS.length - 1]), width,
                height, srcset: set.join(', '), alt: '' }, attrs)));
        }
    }
    exports.Picture = Picture;
});
define("ui/image", ["require", "exports", "mithril", "ui/component", "./image.less"], function (require, exports, mithril_3, component_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Image extends component_3.Component {
        view() {
            return mithril_3.default('img.image', this.attrs);
        }
    }
    exports.Image = Image;
});
define("ui/background", ["require", "exports", "mithril", "ui/component", "ui/picture", "./background.less"], function (require, exports, mithril_4, component_4, picture_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Background extends component_4.Component {
        constructor() {
            super(...arguments);
            this.showing = null;
        }
        image() {
            const { img } = this.attrs;
            return typeof img === 'string' ? { src: img } : img;
        }
        oncreate(vnode) {
            const img = this.image();
            if (!img.src || img.empty)
                return;
            this.showing = img.src;
            const { style } = this.dom;
            const url = picture_1.getResizedUrl(img.src, this.dom.offsetWidth, this.dom.offsetHeight);
            style.backgroundImage = `url('${url}')`;
            if (img.focus)
                style.backgroundPosition = `${img.focus.x * 100}% ${img.focus.y * 100}%`;
        }
        onupdate(vnode) {
            const img = this.image();
            if (this.showing !== img.src)
                this.oncreate(vnode);
        }
        view() {
            const _a = this.attrs, { img } = _a, attrs = __rest(_a, ["img"]);
            return mithril_4.default('.background', Object.assign({ key: this.image().src }, attrs), this.children);
        }
    }
    exports.Background = Background;
});
define("ui/icon", ["require", "exports", "mithril", "ui/component", "classnames", "./icon.less"], function (require, exports, mithril_5, component_5, classnames_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Icon extends component_5.Component {
        view() {
            const { icon, class: className } = this.attrs;
            return mithril_5.default('i.icon', { class: classnames_2.default(`icon-${icon}`, className) });
        }
    }
    exports.Icon = Icon;
});
define("ui/slider", ["require", "exports", "mithril", "popmotion", "ui/component", "./slider.less"], function (require, exports, mithril_6, popmotion_1, component_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Slider extends component_6.Component {
        constructor() {
            super(...arguments);
            this.size = 0;
            this.total = 0;
            this.pos = null;
            // scroll = scroll()
            // Todo: add proper scroll decay after
            // https://github.com/Popmotion/stylefire/pull/8 is merged
            this.slides = [];
            this.tween = null;
        }
        oncreate() {
            const contentStyler = popmotion_1.styler(this.dom.firstChild);
            this.pos = popmotion_1.value(0, contentStyler.set('x'));
            const listener = this.listen();
            const size = () => this.setSize(true);
            window.addEventListener('resize', size);
            size();
            // We redraw in the next frame here, because
            // active state is only now available
            setTimeout(mithril_6.default.redraw);
            this['onremove'] = () => {
                listener.stop();
                window.removeEventListener('resize', size);
            };
        }
        // Todo: rewrite this to properly to use popmotion's actions and reactions
        listen() {
            return popmotion_1.listen(this.dom, 'mousedown touchstart').start(e => {
                if (this.tween)
                    this.tween.stop();
                let start, isHorizontal = null;
                const track = popmotion_1.pointer({
                    x: this.pos.get(),
                    preventDefault: false
                }).start(p => {
                    if (!start)
                        return start = { x: p.x, y: p.y };
                    if (isHorizontal === null) {
                        isHorizontal = Math.abs(start.x - p.x) > Math.abs(start.y - p.y);
                        this.dom.style.pointerEvents = 'none';
                    }
                    if (isHorizontal)
                        this.pos.update(p.x);
                });
                popmotion_1.listen(document, 'mouseup touchend', { once: true }).start(e => {
                    const { total, index } = this.attrs;
                    const velocity = this.pos.getVelocity();
                    track.stop();
                    this.dom.style.pointerEvents = '';
                    if (!isHorizontal)
                        return;
                    if (Math.abs(velocity) > .2 * this.size) {
                        const next = velocity > 0 ? index() - 1 : index() + 1;
                        if (next >= 0 && next < total()) {
                            index(next);
                            return mithril_6.default.redraw();
                        }
                    }
                    this.bounce();
                });
            });
        }
        // Bounce back to current slide
        bounce() {
            const { index } = this.attrs;
            this.tween = popmotion_1.spring({
                from: this.pos.get(),
                velocity: this.pos.getVelocity(),
                to: this.slides[index()],
                stiffness: 100,
                damping: 20
            }).start(this.pos);
        }
        setSize(resized = false) {
            const { index } = this.attrs;
            const size = this.dom.getBoundingClientRect().width;
            this.size = size;
            this.calcSlides();
            if (resized)
                this.pos.update(this.slides[index()]);
        }
        calcSlides() {
            const { index, total, actives } = this.attrs;
            const content = this.dom.firstChild;
            const children = content.children;
            const activeChecks = [];
            this.slides = [0];
            let curr = 0, prev = 0, last = 0;
            for (let i = 0; i < children.length; i++) {
                const slide = children[i];
                const width = slide.getBoundingClientRect().width;
                curr += width;
                // We add a pixel to the width here to prevent rounding errors
                if (curr - last >= this.size + 1) {
                    if (prev !== 0)
                        this.slides.push(-prev);
                    last = prev;
                }
                const start = prev, end = curr;
                activeChecks.push(() => {
                    const now = this.slides[index()];
                    return start >= -now - 1 && end <= -now + this.size + 1;
                });
                prev = curr;
            }
            if (curr > last && last !== 0) {
                const toLast = curr - this.size;
                this.slides.pop();
                this.slides.push(-(curr - this.size));
            }
            if (total() != this.slides.length) {
                total(this.slides.length);
                if (index() > total())
                    index(total() - 1);
                setTimeout(mithril_6.default.redraw);
            }
            if (actives)
                actives(activeChecks);
        }
        onupdate() {
            const { index } = this.attrs;
            const x = this.pos.get();
            this.setSize();
            if (x != this.slides[index()])
                this.tween = popmotion_1.tween({
                    from: this.pos.get(),
                    //velocity: this.pos.getVelocity(),
                    to: this.slides[index()],
                }).start(this.pos);
        }
        view() {
            const { unstyled = false } = this.attrs;
            const style = styles => ({ style: unstyled || styles });
            return mithril_6.default('.slider', style({ overflow: 'hidden' }), mithril_6.default('.slider-content', this.children));
        }
    }
    exports.Slider = Slider;
});
define("ui/mediaquery", ["require", "exports", "mithril", "ui/component", "matchmediaquery"], function (require, exports, mithril_7, component_7, matchmediaquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MediaQuery extends component_7.Component {
        constructor() {
            super(...arguments);
            this.matcher = this.createMatcher();
        }
        createMatcher() {
            const { minWidth, maxWidth } = this.attrs;
            const rules = [];
            if (minWidth)
                rules.push(`(min-width: ${minWidth}px)`);
            if (maxWidth)
                rules.push(`(max-width: ${maxWidth}px)`);
            const query = rules.join(' and ');
            const matcher = matchmediaquery_1.default(query);
            matcher.addListener(mithril_7.default.redraw);
            return matcher;
        }
        onremove() {
            this.matcher.removeListener(mithril_7.default.redraw);
        }
        view() {
            const { view } = this.attrs;
            return this.matcher.matches && view();
        }
    }
    exports.MediaQuery = MediaQuery;
});
define("util/subcomponent", ["require", "exports", "mithril"], function (require, exports, mithril_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function subComponent(selector) {
        return {
            view(vnode) {
                return mithril_8.default(selector, vnode.attrs, vnode.children);
            }
        };
    }
    exports.subComponent = subComponent;
});
define("util/lockscroll", ["require", "exports", "scrollbar-width"], function (require, exports, scrollbar_width_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const style = document.body.style;
    exports.default = lock => {
        if (lock) {
            style.paddingRight = scrollbar_width_1.default() + 'px';
            style.overflow = 'hidden';
        }
        else {
            style.paddingRight = '';
            style.overflow = '';
        }
    };
});
define("util/classes", ["require", "exports", "classnames"], function (require, exports, classnames_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function prefixClassNames(prefix, input) {
        return classnames_3.default(input)
            .split(' ')
            .filter(v => v)
            .map(name => prefix ? `${prefix}-${name}` : name);
    }
    function prefix(key) {
        switch (key) {
            case 'class':
            case 'className':
                return null;
            default:
                return key;
        }
    }
    function parseClasses(classes) {
        if (typeof classes == 'string' || Array.isArray(classes) || !classes)
            return classes;
        return Object.keys(classes).map(key => {
            return prefixClassNames(prefix(key), classes[key]);
        });
    }
    function classes(...classes) {
        const names = classnames_3.default(classes.map(parseClasses));
        return names ? { className: names } : {};
    }
    exports.classes = classes;
});
define("ui/modal", ["require", "exports", "mithril", "ui/component", "util/subcomponent", "util/lockscroll", "util/classes", "./modal.less"], function (require, exports, mithril_9, component_8, subcomponent_1, lockscroll_1, classes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModalOverlay = subcomponent_1.subComponent('.modal-overlay');
    class Modal extends component_8.Component {
        constructor() {
            super(...arguments);
            this.opened = false;
            this.oncreate = this.lock;
            this.onupdate = this.lock;
            this.closeByKey = e => {
                const { close } = this.attrs;
                if (e.keyCode !== 27)
                    return;
                close();
                mithril_9.default.redraw();
            };
        }
        lock() {
            const { isOpen, close } = this.attrs;
            if (this.opened === isOpen)
                return;
            if (isOpen)
                window.addEventListener('keydown', this.closeByKey);
            else
                window.removeEventListener('keydown', this.closeByKey);
            this.opened = isOpen;
        }
        onremove() {
            window.removeEventListener('keydown', this.closeByKey);
        }
        view() {
            const { isOpen, close, zIndex = 1000, mod } = this.attrs;
            if (!isOpen)
                return null;
            return mithril_9.default('.modal', Object.assign({ oncreate: ({ dom }) => setTimeout(() => {
                    lockscroll_1.default(true);
                    dom.classList.add('is-open');
                }, 25), onbeforeremove: ({ dom }) => new Promise(done => {
                    dom.addEventListener('transitionend', () => {
                        lockscroll_1.default(false);
                        done();
                    }, false, { once: true });
                    dom.classList.remove('is-open');
                }) }, classes_1.classes({ mod }), { style: { zIndex } }), mithril_9.default('.modal-container', {
                onclick: ({ target }) => {
                    if (target && target.classList.contains('modal-container'))
                        close();
                }
            }, mithril_9.default('.modal-container-content', this.children)));
        }
    }
    exports.Modal = Modal;
});
define("ui/portal", ["require", "exports", "mithril", "ui/component"], function (require, exports, mithril_10, component_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Portal extends component_9.Component {
        constructor() {
            super(...arguments);
            this.node = document.createElement('div');
        }
        oncreate() {
            document.body.appendChild(this.node);
            mithril_10.default.mount(this.node, {
                view: () => this.children
            });
        }
        onremove() {
            mithril_10.default.mount(this.node, null);
            document.body.removeChild(this.node);
        }
        view() {
            return null;
        }
    }
    exports.Portal = Portal;
});
define("ui/filter/duotone", ["require", "exports", "mithril", "ui/component", "hex-to-rgb"], function (require, exports, mithril_11, component_10, hex_to_rgb_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DuoTone extends component_10.Component {
        view() {
            const { id, from, to } = this.attrs;
            const a = hex_to_rgb_1.default(from);
            const b = hex_to_rgb_1.default(to);
            return mithril_11.default('filter', { id }, [
                mithril_11.default('feComponentTransfer', {
                    'color-interpolation-filters': 'sRGB'
                }, [
                    mithril_11.default('feFuncR[type=table]', {
                        tableValues: a[0] / 255 + ' ' + b[0] / 255
                    }),
                    mithril_11.default('feFuncG[type=table]', {
                        tableValues: a[1] / 255 + ' ' + b[1] / 255
                    }),
                    mithril_11.default('feFuncB[type=table]', {
                        tableValues: a[2] / 255 + ' ' + b[2] / 255
                    }),
                    mithril_11.default('feFuncA[type=table]', {
                        tableValues: '0 1'
                    })
                ])
            ]);
        }
    }
    exports.DuoTone = DuoTone;
});
define("store/sliderstore", ["require", "exports", "mithril/stream"], function (require, exports, stream_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * index: Stream<number>
     * total: Stream<number>
     * ?actives: Stream<Array<number => boolean>>
     */
    class SliderStore {
        constructor() {
            this.index = stream_1.default(0);
            this.total = stream_1.default(0);
            this.actives = stream_1.default([]);
        }
        has(index) {
            return index >= 0 && index < this.total();
        }
        hasNext() {
            return this.has(this.index() + 1);
        }
        hasPrevious() {
            return this.has(this.index() - 1);
        }
        goTo(index) {
            return this.has(index) && (this.index(index), true);
        }
        goNext() {
            return this.goTo(this.index() + 1);
        }
        goPrevious() {
            return this.goTo(this.index() - 1);
        }
        isActive(childIndex) {
            return this.actives()[childIndex] && this.actives()[childIndex]();
        }
    }
    exports.SliderStore = SliderStore;
});
define("store/formstore", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormStatus = {
        Reset: 'reset',
        Sending: 'sending',
        Failure: 'error',
        Success: 'success' // {response}
    };
    class FormStore {
        constructor(data = {}) {
            this.data = data;
            this.status = { type: 'reset' };
        }
        send(xhr) {
            this.status = { type: 'sending', xhr };
        }
        success(response) {
            this.status = { type: 'success', response };
            return response;
        }
        fail(errors) {
            this.status = { type: 'error', errors };
            return errors;
        }
        reset() {
            switch (this.status.type) {
                case 'sending':
                    this.status.xhr.abort();
                default:
                    this.status = { type: 'reset' };
            }
        }
        setData(key, value) {
            this.data[key] = value;
        }
        toString() {
            return this.status.type;
        }
    }
    exports.FormStore = FormStore;
});
define("store/modalstore", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ModalStore {
        constructor() {
            this.isOpen = false;
            this.open = () => this.isOpen = true;
            this.close = () => this.isOpen = false;
            this.toggle = () => this.isOpen = !this.isOpen;
        }
    }
    exports.ModalStore = ModalStore;
});
define("router", ["require", "exports", "mithril", "jump.js"], function (require, exports, mithril_12, jump_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Router {
        constructor(initialState) {
            this.transport = null;
            this.data = {};
            this.data = initialState;
        }
        get url() {
            return this.data.url;
        }
        view(vnode) {
            const { href } = window.location;
            const params = href.indexOf('?') > -1 ? mithril_12.default.parseQueryString(href.split('?')[1]) : {};
            const route = { href, path: window.location.pathname, params };
            return this.resolve(this.data, route);
        }
        mount(element) {
            window.onpopstate = e => {
                if (e.state) {
                    this.setData(e.state.data);
                    mithril_12.default.redraw();
                }
                else {
                    this.navigate(window.location.pathname);
                }
            };
            mithril_12.default.mount(element, this);
        }
        getPageTitle(data) {
            return data.title;
        }
        setData(data) {
            this.data = data;
            const { hash, href } = window.location;
            const queryIndex = href.indexOf('?');
            const query = queryIndex > -1 ? href.substr(queryIndex) : '';
            window.history.replaceState({ data }, this.getPageTitle(data));
            document.title = this.getPageTitle(data);
        }
        clear() {
            if (!this.transport)
                return;
            this.transport.abort();
            this.transport = null;
        }
        scroll(hash) {
            if (hash)
                jump_js_1.default(hash);
            else
                window.scrollTo(0, 0);
        }
        fetch(path) {
            return Promise.reject('implement');
        }
        resolve(data, route) {
            throw 'implement';
        }
        navigate(path) {
            const { hash } = window.location;
            if (path == this.url) {
                if (hash)
                    this.scroll(hash);
            }
            else {
                this.clear();
                return this.fetch(path).then(data => {
                    this.setData(data);
                    setTimeout(() => this.scroll(hash));
                    return data;
                });
            }
        }
    }
    exports.Router = Router;
});
define("action", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function trimSlashes(str) {
        return str.replace(/^\/|\/$/g, '');
    }
    function startsWith(a, b) {
        return a.substr(0, b.length) == b;
    }
    exports.action = Object.assign((data, cb, replace = false) => {
        if (typeof data == 'string')
            return exports.action({ url: data }, cb, replace);
        if (!data || !data.url)
            return {};
        const { url, target } = data;
        if (url.indexOf('mailto:') === 0)
            return { href: url };
        if (url.indexOf('@') > -1)
            return { href: 'mailto:' + url };
        if (url.indexOf('.') > -1 || url.indexOf('://') > -1)
            return {
                href: url,
                target: target || '_blank',
                rel: 'external noopener',
                onclick: cb
            };
        else
            return {
                href: url,
                target,
                onclick: e => {
                    if (cb)
                        cb();
                    exports.action.anchorClick(e, url, replace);
                }
            };
    }, {
        isActive(data, exact = false) {
            if (typeof data == 'string')
                return exports.action.isActive({ url: data }, exact);
            const { pathname } = window.location;
            const path = trimSlashes(pathname);
            const url = trimSlashes(data.url);
            if (exact)
                return path == url;
            return startsWith(path, url);
        },
        anchorClick(e, href, replace) {
            if (e.which == 2)
                return;
            e.preventDefault();
            exports.action.navigate(href, replace);
        },
        navigate(url, replace) {
            if (!url)
                return;
            if (typeof url != 'string' && 'url' in url)
                return exports.action.navigate(url.url, replace);
            if (replace)
                history.replaceState(null, null, url);
            else
                history.pushState(null, null, url);
            window.onpopstate({ state: null });
        }
    });
});
define("util/formutils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function cleanupOptions(options) {
        if (!options)
            return [];
        if (Array.isArray(options))
            return options
                .map(o => (typeof o === 'string' ? { key: o, label: o } : o));
        return Object.keys(options).map(key => ({
            key: key,
            label: options[key]
        }));
    }
    exports.cleanupOptions = cleanupOptions;
    function randomKey(prefix = '') {
        return (prefix +
            Math.random()
                .toString(36)
                .substr(2, 10));
    }
    exports.randomKey = randomKey;
    function getErrorMessage(errors) {
        if (errors === undefined)
            return '';
        const errorsList = typeof errors == 'string' ? [errors] : errors;
        if (errorsList.length)
            return errorsList[0];
        return 'This value is not valid';
    }
    exports.getErrorMessage = getErrorMessage;
});
define("ui/form/field", ["require", "exports", "mithril", "classnames", "ui/component", "util/formutils", "./field.less"], function (require, exports, mithril_13, classnames_4, component_11, formutils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Field extends component_11.Component {
        constructor() {
            super(...arguments);
            this.className = this.attrs.unstyled ? 'field' : 'field-front';
        }
        view() {
            const { errors, id, required, width = 1.0 } = this.attrs;
            const style = { width: `${width * 100}%` };
            const hasErrors = errors !== undefined;
            const classes = [hasErrors && 'has-error', required && 'is-required'];
            return mithril_13.default(`div.${this.className}`, { class: classnames_4.default(classes), style, id }, [
                this.viewLabel(),
                this.children,
                this.viewErrors()
            ]);
        }
        viewLabel() {
            const { label } = this.attrs;
            if (!label)
                return;
            return mithril_13.default(`div.${this.className}-label`, label);
        }
        viewErrors() {
            const { errors } = this.attrs;
            const hasErrors = errors !== undefined;
            if (!hasErrors)
                return;
            return mithril_13.default(`div.${this.className}-errormsg`, formutils_1.getErrorMessage(errors));
        }
    }
    exports.Field = Field;
});
define("ui/form/input", ["require", "exports", "classnames", "mithril", "ui/component", "./input.less"], function (require, exports, classnames_5, mithril_14, component_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Input extends component_12.Component {
        constructor() {
            super(...arguments);
            this.className = this.attrs.className ||
                (this.attrs.unstyled && 'input') ||
                'input-front';
            this.inputDom = null;
        }
        view() {
            const { value, onchange, label, name, modifier, onfocus, type = 'text', required, placeholder } = this.attrs;
            return mithril_14.default(`.${this.className}`, { class: classnames_5.default([modifier, value && 'has-value']) }, [
                mithril_14.default(`input.${this.className}-input`, {
                    type,
                    required,
                    name,
                    value,
                    placeholder,
                    onfocus,
                    oncreate: vnode => (this.inputDom = vnode.dom),
                    oninput: onchange && (e => onchange(e.target.value)),
                    onchange: onchange && (e => onchange(e.target.value))
                }),
                label && mithril_14.default(`label.${this.className}-label`, label)
            ]);
        }
    }
    exports.Input = Input;
});
define("ui/form/select", ["require", "exports", "classnames", "mithril", "util/formutils", "ui/component", "./select.less"], function (require, exports, classnames_6, mithril_15, formutils_2, component_13) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Select extends component_13.Component {
        constructor() {
            super(...arguments);
            this.className = this.attrs.className || (this.attrs.unstyled && 'select') || 'select-front';
        }
        view() {
            const { value, onchange, label, name, options, modifier, onfocus, required = true } = this.attrs;
            const cleanOptions = formutils_2.cleanupOptions(options);
            const fullLabel = required ? label + ' *' : label;
            return mithril_15.default(`select.${this.className}`, {
                class: classnames_6.default([modifier, value && 'has-value']),
                name,
                required,
                onfocus,
                onchange: onchange && (e => onchange(e.target.value)),
                oninput: onchange && (e => onchange(e.target.value))
            }, [
                label && mithril_15.default('option[disabled]', { selected: !value }, fullLabel),
                cleanOptions.map(o => mithril_15.default('option', { value: o.key, selected: o.key == value }, o.label))
            ]);
        }
    }
    exports.Select = Select;
});
define("ui/form/textarea", ["require", "exports", "classnames", "mithril", "ui/component", "./textarea.less"], function (require, exports, classnames_7, mithril_16, component_14) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Textarea extends component_14.Component {
        constructor() {
            super(...arguments);
            this.className = this.attrs.className ||
                (this.attrs.unstyled && 'textarea') ||
                'textarea-front';
        }
        view() {
            const { value, onchange, label, modifier, name, required, onfocus } = this.attrs;
            return mithril_16.default(`div.${this.className}`, { class: classnames_7.default([modifier, value && 'has-value']) }, [
                mithril_16.default(`textarea.${this.className}-textarea`, {
                    required,
                    name,
                    onfocus,
                    value,
                    oninput: onchange && (e => onchange(e.target.value)),
                    onchange: onchange && (e => onchange(e.target.value))
                }),
                label && mithril_16.default(`label.${this.className}-label`, label)
            ]);
        }
    }
    exports.Textarea = Textarea;
});
define("ui/form/radio", ["require", "exports", "mithril", "util/formutils", "ui/component", "./radio.less"], function (require, exports, mithril_17, formutils_3, component_15) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Radio extends component_15.Component {
        constructor() {
            super(...arguments);
            this.className = this.attrs.className || (this.attrs.unstyled && 'radio') || 'radio-front';
            this.id = formutils_3.randomKey('radio_');
        }
        view() {
            const { value = false, onchange, option, name = this.id, required } = this.attrs;
            return mithril_17.default(`div.${this.className}`, [
                mithril_17.default(`input.${this.className}-input`, {
                    type: 'radio',
                    checked: value ? true : false,
                    required,
                    name: name,
                    onclick: onchange && (_ => onchange(!value)),
                    id: this.id
                }),
                mithril_17.default(`label.${this.className}-label`, { for: this.id }, [
                    mithril_17.default(`span.${this.className}-label-bullet`),
                    mithril_17.default(`span.${this.className}-label-text`, option)
                ])
            ]);
        }
    }
    exports.Radio = Radio;
});
define("ui/form/radios", ["require", "exports", "mithril", "util/formutils", "ui/component", "ui/form/radio"], function (require, exports, mithril_18, formutils_4, component_16, radio_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Radios extends component_16.Component {
        constructor() {
            super(...arguments);
            this.className = this.attrs.className || (this.attrs.unstyled && 'radios') || 'radios-front';
            this.defaultKey = formutils_4.randomKey('radios_');
        }
        view() {
            const { value, onchange, options, unstyled, name = this.defaultKey, required } = this.attrs;
            const cleanOptions = formutils_4.cleanupOptions(options);
            return mithril_18.default(`div.${this.className}`, cleanOptions.map(option => mithril_18.default(radio_1.Radio, {
                option: option.label,
                name: name,
                unstyled,
                required,
                value: value == option.key,
                onchange: onchange && (_ => onchange(option.key))
            })));
        }
    }
    exports.Radios = Radios;
});
define("ui/form/checkbox", ["require", "exports", "mithril", "util/formutils", "ui/component", "./checkbox.less"], function (require, exports, mithril_19, formutils_5, component_17) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Checkbox extends component_17.Component {
        constructor() {
            super(...arguments);
            this.className = this.attrs.className ||
                (this.attrs.unstyled && 'checkbox') ||
                'checkbox-front';
            this.id = formutils_5.randomKey('check_');
        }
        view() {
            const { value, onchange, label, name = this.id, required } = this.attrs;
            return mithril_19.default(`div.${this.className}`, [
                mithril_19.default(`input.${this.className}-input`, {
                    type: 'checkbox',
                    name,
                    id: this.id,
                    checked: value ? true : false,
                    onclick: onchange && (() => onchange(!value)),
                    required
                }),
                mithril_19.default(`label.${this.className}-label`, { for: this.id }, mithril_19.default(`span.${this.className}-label-square`), mithril_19.default(`span.${this.className}-label-text`, label))
            ]);
        }
    }
    exports.Checkbox = Checkbox;
});
define("ui/form/boxes", ["require", "exports", "mithril", "util/formutils", "ui/component", "ui/form/checkbox", "./boxes.less"], function (require, exports, mithril_20, formutils_6, component_18, checkbox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Boxes extends component_18.Component {
        constructor() {
            super(...arguments);
            this.className = this.attrs.className || (this.attrs.unstyled && 'boxes') || 'boxes-front';
        }
        setValue(key, active) {
            const { value = [], onchange } = this.attrs;
            if (active) {
                if (!value.find(v => v == key))
                    onchange([...value, key]);
                else
                    onchange(value);
            }
            else {
                onchange(value.filter(v => v != key));
            }
        }
        view() {
            const { value = [], options, unstyled, required } = this.attrs;
            const cleanOptions = formutils_6.cleanupOptions(options);
            const half = Math.ceil(cleanOptions.length / 2);
            return mithril_20.default(`div.${this.className}`, [
                mithril_20.default(`div.${this.className}-left`, [
                    cleanOptions.slice(0, half).map(o => mithril_20.default(checkbox_1.Checkbox, {
                        unstyled,
                        required: required && value.length == 0,
                        value: value.find(v => v == o.key),
                        onchange: d => this.setValue(o.key, d),
                        label: o.label
                    }))
                ]),
                mithril_20.default(`.${this.className}-right`, [
                    cleanOptions.slice(half).map(o => mithril_20.default(checkbox_1.Checkbox, {
                        unstyled,
                        required: required && value.length == 0,
                        value: value.find(v => v == o.key),
                        onchange: d => this.setValue(o.key, d),
                        label: o.label
                    }))
                ])
            ]);
        }
    }
    exports.Boxes = Boxes;
});
define("ui/form/fields", ["require", "exports", "mithril", "util/formutils", "ui/form/field", "jump.js", "ui/form/input", "ui/form/select", "ui/form/textarea", "ui/form/radio", "ui/form/radios", "ui/form/checkbox", "ui/form/boxes"], function (require, exports, mithril_21, formutils_7, field_1, jump_js_2, input_1, select_1, textarea_1, radio_2, radios_1, checkbox_2, boxes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Input = input_1.Input;
    exports.Select = select_1.Select;
    exports.Textarea = textarea_1.Textarea;
    exports.Radio = radio_2.Radio;
    exports.Radios = radios_1.Radios;
    exports.Checkbox = checkbox_2.Checkbox;
    exports.Boxes = boxes_1.Boxes;
    class Fields {
        constructor(store, config) {
            this.key = formutils_7.randomKey();
            this.config = {
                fieldClass: field_1.Field,
                defaultUnstyled: false,
                defaultRequired: true,
                labelInFields: false
            };
            this.store = store;
            this.config = Object.assign({}, this.config, config);
        }
        get status() {
            return this.store.status;
        }
        asField(viewClass, config, children) {
            return mithril_21.default(this.config.fieldClass, this.fieldAttrs(config), mithril_21.default(viewClass, this.viewAttrs(config), children));
        }
        defaultFieldAttrs(key, rest) {
            return Object.assign({ required: this.config.defaultRequired, unstyled: this.config.defaultUnstyled, name: key }, rest, { id: 'field_' + key + '_' + this.key, value: this.store.data[key], onchange: value => this.store.setData(key, value), label: this.config.labelInFields ? undefined : rest.label });
        }
        /**
         * Can be used to initialize custom formfields - also used internally
         */
        fieldAttrs(_a) {
            var { key } = _a, rest = __rest(_a, ["key"]);
            const attrs = this.defaultFieldAttrs(rest.name || key, rest);
            switch (this.status.type) {
                case 'error':
                    return Object.assign({}, attrs, { errors: this.status.errors[key], onfocus: () => {
                            if (this.status.type == 'error')
                                delete this.status.errors[key];
                        } });
                default:
                    return attrs;
            }
        }
        /**
         * This method can be overridden and used to filter certain attributes from passing on to the child element inside.
         * Example: Use this to filter out the label attribute. It can now be drawn in the field view itself.
         */
        viewAttrs(attrs) {
            return Object.assign({}, this.fieldAttrs(attrs), { id: undefined, label: this.config.labelInFields ? attrs.label : undefined });
        }
        focusField(field) {
            jump_js_2.default(`#field_${field}_${this.key}`);
        }
    }
    exports.Fields = Fields;
});
define("form", ["require", "exports", "mithril", "store/formstore", "object-to-formdata", "ui/form/fields"], function (require, exports, mithril_22, formstore_1, object_to_formdata_1, fields_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FormBase {
        constructor(store, fields) {
            this.text = config => this.fields.asField(fields_1.Input, Object.assign({}, config));
            this.email = config => this.text(Object.assign({}, config, { type: 'email' }));
            this.password = config => this.text(Object.assign({}, config, { type: 'password' }));
            this.textarea = config => this.fields.asField(fields_1.Textarea, Object.assign({}, config));
            this.select = config => this.fields.asField(fields_1.Select, config);
            this.radio = config => this.fields.asField(fields_1.Radios, config);
            this.checkbox = config => this.fields.asField(fields_1.Checkbox, config);
            this.boxes = config => this.fields.asField(fields_1.Boxes, config);
            this.store = store;
            this.fields = fields;
        }
        get status() {
            return this.store.status.type;
        }
        isCompleted() {
            return this.status == formstore_1.FormStatus.Success;
        }
        formSubmit(e, options = {}) {
            e.preventDefault();
            const form = e.target;
            const { action: url, method } = form;
            const type = form.getAttribute('enctype') || 'application/json';
            return this.submit(type, Object.assign({ url, method }, options));
        }
        submit(type, _a) {
            var { url, method, headers = {} } = _a, options = __rest(_a, ["url", "method", "headers"]);
            switch (this.store.status.type) {
                case 'sending':
                case 'success':
                    return;
                default:
                    return this.transfer(Object.assign({ url,
                        method, data: this.formatData(type), headers: type.indexOf('multipart') === 0
                            ? headers
                            : Object.assign({ 'Content-Type': type }, headers), serialize: v => v }, options)).then(response => Promise.resolve(this.store.success(response)), errors => Promise.reject(this.store.fail(errors)));
            }
        }
        formatData(type) {
            switch (type) {
                case 'application/x-www-form-urlencoded':
                    return mithril_22.default.buildQueryString(this.store.data);
                case 'multipart/form-data':
                    return object_to_formdata_1.default(this.store.data);
                case 'application/json':
                    return JSON.stringify(this.store.data);
            }
        }
        transfer(request) {
            return mithril_22.default.request(Object.assign({}, request, { config: xhr => this.store.send(xhr) }));
        }
    }
    exports.FormBase = FormBase;
    /**
     * Als instance klasse van de view waar je de form wilt gebruiken maak je een nieuw Form aan.
     * Het onsubmit event van je html formulier koppel je door aan de submit methode van dit form object.
     * Velden toevoegen aan je html formulier is gemakkelijk via de shortcurts die je vind op dit form object.
     * Wanneer het onsucces event wordt aangeroepen weet je dat het formulier succesvol verwerkt is door de server.
     *
     * Eigen custom velden maken en toevoegen kan door de attrs methode te gebruiken (zie implementatie shortcuts).
     * Een eigen veld moet ten minste de attributes 'value' en 'onchange' ondersteunen om te functioneren.
     *
     * Langs de serverkant moet je een route voorzien die de data verwerkt.
     * Deze stuurt een json bericht terug van volgende type:
     * {
     *      "succes": true | false
     *      "errors": { ... }           // Alleen als succes false is
     *      "data": { ... }             // Alleen als succes true is (wordt meegegeven als argument aan de onsucces)
     * }
     *
     * TODO:
     * - Gebruik de setCustomValidity methode om de in-browser validatie toe te passen op elementen met een error
     * - Select vervangen door geheel eigen implementatie (die makkelijker te stylen is als de standaard html select)
     * - Een flexibel en veilig wysiwyg-editor veld toevoegen (bv. tinymce)
     * - Basis styling van bestaande elementen robuuster en flexibeler maken
     */
    class Form extends FormBase {
        constructor(_a = {}) {
            var { data = {} } = _a, config = __rest(_a, ["data"]);
            const store = new formstore_1.FormStore(data);
            const fields = new fields_1.Fields(store, Object.assign({ defaultUnstyled: true, labelInFields: false, defaultRequired: false }, config));
            super(store, fields);
        }
        formSubmit(e, options = {}) {
            return super
                .formSubmit(e, options)
                .catch(errors => {
                const [firstKey] = Object.keys(errors);
                if (firstKey)
                    this.fields.focusField(firstKey);
            });
        }
    }
    exports.Form = Form;
});
define("index", ["require", "exports", "ui/component", "ui/page", "ui/picture", "ui/image", "ui/background", "ui/icon", "ui/slider", "ui/mediaquery", "ui/modal", "ui/portal", "ui/filter/duotone", "store/sliderstore", "store/formstore", "store/modalstore", "router", "action", "form", "ui/form/fields", "ui/form/field", "ui/form/input", "ui/form/textarea", "ui/form/select", "ui/form/checkbox", "ui/form/radios", "ui/form/radio", "ui/form/boxes", "util/classes", "util/subcomponent"], function (require, exports, component_19, page_1, picture_2, image_1, background_1, icon_1, slider_1, mediaquery_1, modal_1, portal_1, duotone_1, sliderstore_1, formstore_2, modalstore_1, router_1, action_1, form_1, fields_2, field_2, input_2, textarea_2, select_2, checkbox_3, radios_2, radio_3, boxes_2, classes_2, subcomponent_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Component = component_19.Component;
    exports.Page = page_1.Page;
    exports.Picture = picture_2.Picture;
    exports.getResizedUrl = picture_2.getResizedUrl;
    exports.largeImage = picture_2.largeImage;
    exports.Image = image_1.Image;
    exports.Background = background_1.Background;
    exports.Icon = icon_1.Icon;
    exports.Slider = slider_1.Slider;
    exports.MediaQuery = mediaquery_1.MediaQuery;
    exports.Modal = modal_1.Modal;
    exports.ModalOverlay = modal_1.ModalOverlay;
    exports.Portal = portal_1.Portal;
    exports.DuoTone = duotone_1.DuoTone;
    exports.SliderStore = sliderstore_1.SliderStore;
    exports.SliderController = sliderstore_1.SliderStore;
    exports.FormStatus = formstore_2.FormStatus;
    exports.FormStore = formstore_2.FormStore;
    exports.ModalStore = modalstore_1.ModalStore;
    exports.Router = router_1.Router;
    exports.action = action_1.action;
    exports.FormBase = form_1.FormBase;
    exports.Form = form_1.Form;
    exports.Fields = fields_2.Fields;
    exports.Field = field_2.Field;
    exports.Input = input_2.Input;
    exports.Textarea = textarea_2.Textarea;
    exports.Select = select_2.Select;
    exports.Checkbox = checkbox_3.Checkbox;
    exports.Radios = radios_2.Radios;
    exports.Radio = radio_3.Radio;
    exports.Boxes = boxes_2.Boxes;
    exports.classes = classes_2.classes;
    exports.subComponent = subcomponent_2.subComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdWkvY29tcG9uZW50LnRzIiwiLi4vc3JjL3VpL3BhZ2UudHMiLCIuLi9zcmMvdWkvcGljdHVyZS50cyIsIi4uL3NyYy91aS9pbWFnZS50cyIsIi4uL3NyYy91aS9iYWNrZ3JvdW5kLnRzIiwiLi4vc3JjL3VpL2ljb24udHMiLCIuLi9zcmMvdWkvc2xpZGVyLnRzIiwiLi4vc3JjL3VpL21lZGlhcXVlcnkudHMiLCIuLi9zcmMvdXRpbC9zdWJjb21wb25lbnQudHMiLCIuLi9zcmMvdXRpbC9sb2Nrc2Nyb2xsLnRzIiwiLi4vc3JjL3V0aWwvY2xhc3Nlcy50cyIsIi4uL3NyYy91aS9tb2RhbC50cyIsIi4uL3NyYy91aS9wb3J0YWwudHMiLCIuLi9zcmMvdWkvZmlsdGVyL2R1b3RvbmUudHMiLCIuLi9zcmMvc3RvcmUvc2xpZGVyc3RvcmUudHMiLCIuLi9zcmMvc3RvcmUvZm9ybXN0b3JlLnRzIiwiLi4vc3JjL3N0b3JlL21vZGFsc3RvcmUudHMiLCIuLi9zcmMvcm91dGVyLnRzIiwiLi4vc3JjL2FjdGlvbi50cyIsIi4uL3NyYy91dGlsL2Zvcm11dGlscy50cyIsIi4uL3NyYy91aS9mb3JtL2ZpZWxkLnRzIiwiLi4vc3JjL3VpL2Zvcm0vaW5wdXQudHMiLCIuLi9zcmMvdWkvZm9ybS9zZWxlY3QudHMiLCIuLi9zcmMvdWkvZm9ybS90ZXh0YXJlYS50cyIsIi4uL3NyYy91aS9mb3JtL3JhZGlvLnRzIiwiLi4vc3JjL3VpL2Zvcm0vcmFkaW9zLnRzIiwiLi4vc3JjL3VpL2Zvcm0vY2hlY2tib3gudHMiLCIuLi9zcmMvdWkvZm9ybS9ib3hlcy50cyIsIi4uL3NyYy91aS9mb3JtL2ZpZWxkcy50cyIsIi4uL3NyYy9mb3JtLnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVVBO1FBV0MsWUFBWSxLQUFtQjtZQVQvQixtREFBbUQ7WUFD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