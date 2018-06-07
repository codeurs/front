/// <reference types="mithril" />
declare module "ui/component" {
    import { Component as MithrilComponent, CVnode, CVnodeDOM, Children } from 'mithril';
    export class Component<Attr = {}, El = Element> implements MithrilComponent<Attr> {
        pure: boolean;
        attrs: Attr;
        dom: El;
        children: Children;
        constructor(vnode: CVnode<Attr>);
        oninit(_: any): void;
        onbeforeupdate(vnode: CVnode<Attr>, old: CVnodeDOM<Attr>): boolean;
        patch(to: any, ...methods: Array<string>): void;
        update(vnode: CVnodeDOM<Attr>, original?: any): any;
        onafterupdate(): void;
        updatePure(vnode: CVnodeDOM<Attr>, original?: any): any;
        view(): Children;
    }
}
declare module "ui/page" {
    import m from 'mithril';
    import { Component } from "ui/component";
    export class Page extends Component<{
        route: {
            href: string;
            path: string;
            params: {};
        };
    }> {
        currentRoute: any;
        constructor(vnode: any);
        oninit(vnode: any): void;
        onafterupdate(): void;
        onroutechange(): void;
        static render(attrs: any): m.Vnode<{
            route: {
                href: string;
                path: string;
                params: {};
            };
        }, {}>;
    }
}
declare module "ui/picture" {
    import m from 'mithril';
    import { Component } from "ui/component";
    export function largeImage(img: any): string;
    export function getResizedUrl(url: any, width: any, height: any): string;
    import './picture.less';
    export class Picture extends Component<{
        empty?: boolean;
        width?: number;
        height?: number;
        src?: string;
        mod?: any;
        inline?: boolean;
        max?: number;
    }> {
        sized(path: any, width: any): string;
        srcset(path: any, max: any): string[];
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/image" {
    import m from 'mithril';
    import { Component } from "ui/component";
    import './image.less';
    export class Image extends Component {
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/background" {
    import m from 'mithril';
    import { Component } from "ui/component";
    import './background.less';
    export type Img = {
        src: string;
        empty?: boolean;
        focus?: {
            x: number;
            y: number;
        };
    };
    export class Background extends Component<{
        img: string | Img;
    }, HTMLDivElement> {
        showing: any;
        image(): Img;
        oncreate(vnode: any): void;
        onupdate(vnode: any): void;
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/icon" {
    import m from 'mithril';
    import { Component } from "ui/component";
    import './icon.less';
    export class Icon extends Component<{
        icon: string;
        class?: any;
    }> {
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/slider" {
    import m from 'mithril';
    import { Stream } from 'mithril/stream';
    import { Component } from "ui/component";
    import './slider.less';
    export class Slider extends Component<{
        index: Stream<number>;
        total: Stream<number>;
        actives: Stream<Array<() => void>>;
        unstyled: boolean;
    }, HTMLDivElement> {
        size: number;
        total: number;
        pos: any;
        slides: any[];
        tween: any;
        oncreate(): void;
        private listen();
        bounce(): void;
        setSize(resized?: boolean): void;
        calcSlides(): void;
        onupdate(): void;
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/mediaquery" {
    import m, { Vnode } from 'mithril';
    import { Component } from "ui/component";
    export class MediaQuery extends Component<{
        minWidth?: number;
        maxWidth?: number;
        view: () => Vnode;
    }> {
        matcher: any;
        createMatcher(): any;
        onremove(): void;
        view(): m.Vnode<{}, m.Lifecycle<{}, {}>>;
    }
}
declare module "util/subcomponent" {
    import m from 'mithril';
    export function subComponent(selector: any): {
        view(vnode: any): m.Vnode<any, any>;
    };
}
declare module "util/lockscroll" {
    const _default: (lock: any) => void;
    export default _default;
}
declare module "util/classes" {
    export function classes(...classes: any[]): {};
}
declare module "ui/modal" {
    import m from 'mithril';
    import { Component } from "ui/component";
    export const ModalOverlay: {
        view(vnode: any): m.Vnode<any, any>;
    };
    import './modal.less';
    export class Modal extends Component<{
        isOpen: boolean;
        close: () => void;
        zIndex?: number;
        mod?: any;
    }> {
        opened: boolean;
        oncreate: () => void;
        onupdate: () => void;
        lock(): void;
        onremove(): void;
        closeByKey: (e: any) => void;
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/portal" {
    import { Component } from "ui/component";
    export class Portal extends Component {
        node: HTMLDivElement;
        oncreate(): void;
        onremove(): void;
        view(): any;
    }
}
declare module "ui/filter/duotone" {
    import m from 'mithril';
    import { Component } from "ui/component";
    export class DuoTone extends Component<{
        id?: string;
        from: string;
        to: string;
    }> {
        view(): m.Vnode<any, any>;
    }
}
declare module "store/sliderstore" {
    import stream from 'mithril/stream';
    /**
     * index: Stream<number>
     * total: Stream<number>
     * ?actives: Stream<Array<number => boolean>>
     */
    export class SliderStore {
        index: stream.Stream<number>;
        total: stream.Stream<number>;
        actives: stream.Stream<any[]>;
        has(index: any): boolean;
        hasNext(): boolean;
        hasPrevious(): boolean;
        goTo(index: any): boolean;
        goNext(): boolean;
        goPrevious(): boolean;
        isActive(childIndex: any): any;
    }
}
declare module "store/formstore" {
    export const FormStatus: {
        Reset: string;
        Sending: string;
        Failure: string;
        Success: string;
    };
    export type FormState = {
        type: 'reset';
    } | {
        type: 'sending';
        xhr: XMLHttpRequest;
    } | {
        type: 'error';
        errors: {};
    } | {
        type: 'success';
        response: {};
    };
    export class FormStore {
        data: {};
        status: FormState;
        constructor(data?: {});
        send(xhr: any): void;
        success(response: any): any;
        fail(errors: any): any;
        reset(): void;
        setData(key: any, value: any): void;
        toString(): "error" | "reset" | "success" | "sending";
    }
}
declare module "store/modalstore" {
    export class ModalStore {
        isOpen: boolean;
        open: () => boolean;
        close: () => boolean;
        toggle: () => boolean;
    }
}
declare module "router" {
    export class Router {
        transport: any;
        data: any;
        constructor(initialState: any);
        readonly url: any;
        view(vnode: any): void;
        mount(element: any): void;
        getPageTitle(data: any): any;
        setData(data: any): void;
        clear(): void;
        scroll(hash: any): void;
        fetch(path: any): Promise<never>;
        resolve(data: any, route: any): void;
        navigate(path: any): Promise<never>;
    }
}
declare module "action" {
    export const action: ((data: any, cb: any, replace?: boolean) => any) & {
        isActive(data: any, exact?: boolean): any;
        anchorClick(e: any, href: any, replace: any): void;
        navigate(url: any, replace: any): any;
    };
}
declare module "util/formutils" {
    export type Option = {
        key: string;
        label: string;
    };
    export type OptionsArray = Array<string | Option>;
    export type Options = OptionsArray | {
        [key: string]: string;
    };
    export function cleanupOptions(options: Options): Array<Option>;
    export function randomKey(prefix?: string): string;
    export function getErrorMessage(errors: any): any;
}
declare module "ui/form/field" {
    import m from 'mithril';
    import { Component } from "ui/component";
    import './field.less';
    export class Field extends Component<{
        unstyled?: boolean;
        errors?: undefined | string | Array<string>;
        label?: string;
        id?: string;
        required?: boolean;
        width?: number;
    }> {
        className: string;
        view(): m.Vnode<any, any>;
        viewLabel(): m.Vnode<any, any>;
        viewErrors(): m.Vnode<any, any>;
    }
}
declare module "ui/form/input" {
    import m from 'mithril';
    import { Component } from "ui/component";
    import './input.less';
    export class Input extends Component<{
        name: string;
        type?: string;
        unstyled?: boolean;
        className?: string;
        value: string;
        label?: string;
        modifier?: any;
        required?: boolean;
        options: Array<{
            key: string;
            label: string;
        }> | {
            [key: string]: string;
        };
        onchange?: (v: string) => void;
        onfocus?: (e: Event) => void;
        placeholder?: string;
    }> {
        className: string;
        inputDom: any;
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/form/select" {
    import m from 'mithril';
    import { Component } from "ui/component";
    import './select.less';
    export class Select extends Component<{
        name: string;
        unstyled?: boolean;
        className?: string;
        value: string;
        label?: string;
        modifier?: any;
        required?: boolean;
        options: Array<{
            key: string;
            label: string;
        }> | {
            [key: string]: string;
        };
        onchange?: (v: string) => void;
        onfocus?: (e: Event) => void;
    }> {
        className: string;
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/form/textarea" {
    import m from 'mithril';
    import { Component } from "ui/component";
    import './textarea.less';
    export class Textarea extends Component<{
        name: string;
        unstyled?: boolean;
        className?: string;
        value: string;
        label?: string;
        modifier?: any;
        required?: boolean;
        onchange?: (v: string) => void;
        onfocus?: (e: Event) => void;
    }> {
        className: string;
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/form/radio" {
    import m from 'mithril';
    import { Component } from "ui/component";
    import './radio.less';
    export class Radio extends Component<{
        name: string;
        value: boolean;
        onchange?: (checked: boolean) => void;
        option: string;
        required?: boolean;
        unstyled?: boolean;
        className?: string;
    }> {
        className: string;
        id: string;
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/form/radios" {
    import m from 'mithril';
    import { Component } from "ui/component";
    export class Radios extends Component<{
        name: string;
        unstyled?: boolean;
        className?: string;
        value: string;
        label?: string;
        modifier?: any;
        required?: boolean;
        options: Array<{
            key: string;
            label: string;
        }> | {
            [key: string]: string;
        };
        onchange?: (v: string) => void;
        onfocus?: (e: Event) => void;
    }> {
        className: string;
        defaultKey: string;
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/form/checkbox" {
    import m from 'mithril';
    import { Component } from "ui/component";
    import './checkbox.less';
    export class Checkbox extends Component<{
        name?: string;
        unstyled?: boolean;
        className?: string;
        value: string | boolean;
        label?: string;
        required?: boolean;
        onchange?: (v: boolean) => void;
    }> {
        className: string;
        id: string;
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/form/boxes" {
    import m from 'mithril';
    import { Options } from "util/formutils";
    import { Component } from "ui/component";
    import './boxes.less';
    export class Boxes extends Component<{
        name: string;
        unstyled?: boolean;
        className?: string;
        value: Array<string>;
        label?: string;
        modifier?: any;
        required?: boolean;
        options: Options;
        onchange?: (v: Array<string>) => void;
        onfocus?: (e: Event) => void;
    }> {
        className: string;
        setValue(key: any, active: any): void;
        view(): m.Vnode<any, any>;
    }
}
declare module "ui/form/fields" {
    import m from 'mithril';
    import { FormStore } from "store/formstore";
    import { Field } from "ui/form/field";
    export { Input } from "ui/form/input";
    export { Select } from "ui/form/select";
    export { Textarea } from "ui/form/textarea";
    export { Radio } from "ui/form/radio";
    export { Radios } from "ui/form/radios";
    export { Checkbox } from "ui/form/checkbox";
    export { Boxes } from "ui/form/boxes";
    export class Fields {
        store: FormStore;
        key: string;
        config: {
            fieldClass: typeof Field;
            defaultUnstyled: boolean;
            defaultRequired: boolean;
            labelInFields: boolean;
        };
        constructor(store: any, config: any);
        readonly status: {
            type: "reset";
        } | {
            type: "sending";
            xhr: XMLHttpRequest;
        } | {
            type: "error";
            errors: {};
        } | {
            type: "success";
            response: {};
        };
        asField(viewClass: any, config: any, children?: any): m.Vnode<{
            unstyled?: boolean;
            errors?: string | string[];
            label?: string;
            id?: string;
            required?: boolean;
            width?: number;
        }, {}>;
        defaultFieldAttrs(key: any, rest: any): any;
        /**
         * Can be used to initialize custom formfields - also used internally
         */
        fieldAttrs({key, ...rest}: {
            [x: string]: any;
            key: any;
        }): any;
        /**
         * This method can be overridden and used to filter certain attributes from passing on to the child element inside.
         * Example: Use this to filter out the label attribute. It can now be drawn in the field view itself.
         */
        viewAttrs(attrs: any): any;
        focusField(field: any): void;
    }
}
declare module "form" {
    import m from 'mithril';
    import { FormStore } from "store/formstore";
    import { Fields } from "ui/form/fields";
    export class FormBase {
        store: FormStore;
        fields: Fields;
        constructor(store: any, fields: any);
        readonly status: "error" | "reset" | "success" | "sending";
        isCompleted(): boolean;
        formSubmit(e: any, options?: {}): Promise<any>;
        submit(type: any, {url, method, headers, ...options}: {
            [x: string]: any;
            url: any;
            method: any;
            headers?: {};
        }): Promise<any>;
        formatData(type: any): any;
        transfer(request: any): Promise<{}>;
        text: (config: any) => m.Vnode<{
            unstyled?: boolean;
            errors?: string | string[];
            label?: string;
            id?: string;
            required?: boolean;
            width?: number;
        }, {}>;
        email: (config: any) => m.Vnode<{
            unstyled?: boolean;
            errors?: string | string[];
            label?: string;
            id?: string;
            required?: boolean;
            width?: number;
        }, {}>;
        password: (config: any) => m.Vnode<{
            unstyled?: boolean;
            errors?: string | string[];
            label?: string;
            id?: string;
            required?: boolean;
            width?: number;
        }, {}>;
        textarea: (config: any) => m.Vnode<{
            unstyled?: boolean;
            errors?: string | string[];
            label?: string;
            id?: string;
            required?: boolean;
            width?: number;
        }, {}>;
        select: (config: any) => m.Vnode<{
            unstyled?: boolean;
            errors?: string | string[];
            label?: string;
            id?: string;
            required?: boolean;
            width?: number;
        }, {}>;
        radio: (config: any) => m.Vnode<{
            unstyled?: boolean;
            errors?: string | string[];
            label?: string;
            id?: string;
            required?: boolean;
            width?: number;
        }, {}>;
        checkbox: (config: any) => m.Vnode<{
            unstyled?: boolean;
            errors?: string | string[];
            label?: string;
            id?: string;
            required?: boolean;
            width?: number;
        }, {}>;
        boxes: (config: any) => m.Vnode<{
            unstyled?: boolean;
            errors?: string | string[];
            label?: string;
            id?: string;
            required?: boolean;
            width?: number;
        }, {}>;
    }
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
    export class Form extends FormBase {
        constructor({data, ...config}?: {
            data?: {};
        });
        formSubmit(e: any, options?: {}): Promise<any>;
    }
}
declare module "index" {
    export { Component } from "ui/component";
    export { Page } from "ui/page";
    export { Picture, getResizedUrl, largeImage } from "ui/picture";
    export { Image } from "ui/image";
    export { Background } from "ui/background";
    export { Icon } from "ui/icon";
    export { Slider } from "ui/slider";
    export { MediaQuery } from "ui/mediaquery";
    export { Modal, ModalOverlay } from "ui/modal";
    export { Portal } from "ui/portal";
    export { DuoTone } from "ui/filter/duotone";
    export { SliderStore, SliderStore as SliderController } from "store/sliderstore";
    export { FormStatus, FormStore } from "store/formstore";
    export { ModalStore } from "store/modalstore";
    export { Router } from "router";
    export { action } from "action";
    export { FormBase, Form } from "form";
    export { Fields } from "ui/form/fields";
    export { Field } from "ui/form/field";
    export { Input } from "ui/form/input";
    export { Textarea } from "ui/form/textarea";
    export { Select } from "ui/form/select";
    export { Checkbox } from "ui/form/checkbox";
    export { Radios } from "ui/form/radios";
    export { Radio } from "ui/form/radio";
    export { Boxes } from "ui/form/boxes";
    export { classes } from "util/classes";
    export { subComponent } from "util/subcomponent";
}
