import { elementFactory, type ElementCreator } from "./factory.ts";
export type { ElementCreator, Givers, GiverWrapper } from "./factory.ts";

/**
 * Creates a `a` element.
 */
export const A: ElementCreator<HTMLAnchorElement> = elementFactory("a");

/**
 * Creates a `abbr` element.
 */
export const Abbr: ElementCreator<HTMLElement> = elementFactory("abbr");

/**
 * Creates a `acronym` element.
 * @deprecated
 */
export const Acronym: ElementCreator<HTMLElement> = elementFactory("acronym");

/**
 * Creates a `address` element.
 */
export const Address: ElementCreator<HTMLSpanElement> = elementFactory("address");

/**
 * Creates a `area` element.
 */
export const Area: ElementCreator<HTMLAreaElement> = elementFactory("area");

/**
 * Creates a `article` element.
 */
export const Article: ElementCreator<HTMLElement> = elementFactory("article");

/**
 * Creates a `aside` element.
 */
export const Aside: ElementCreator<HTMLElement> = elementFactory("aside");

/**
 * Creates a `audio` element.
 */
export const Audio: ElementCreator<HTMLMediaElement> = elementFactory("audio");

/**
 * Creates a `b` element.
 */
export const B: ElementCreator<HTMLElement> = elementFactory("b");

/**
 * Creates a `base` element.
 */
export const Base: ElementCreator<HTMLBaseElement> = elementFactory("base");

/**
 * Creates a `bdi` element.
 */
export const Bdi: ElementCreator<HTMLElement> = elementFactory("bdi");

/**
 * Creates a `bdo` element.
 */
export const Bdo: ElementCreator<HTMLElement> = elementFactory("bdo");

/**
 * Creates a `big` element.
 * @deprecated
 */
export const Big: ElementCreator<HTMLElement> = elementFactory("big");

/**
 * Creates a `blockquote` element.
 */
export const Blockquote: ElementCreator<HTMLQuoteElement> = elementFactory("blockquote");

/**
 * Creates a `body` element.
 */
export const Body: ElementCreator<HTMLBodyElement> = elementFactory("body");

/**
 * Creates a `br` element.
 */
export const Br: ElementCreator<HTMLBRElement> = elementFactory("br");

/**
 * Creates a `button` element.
 */
export const Button: ElementCreator<HTMLButtonElement> = elementFactory("button");

/**
 * Creates a `canvas` element.
 */
export const Canvas: ElementCreator<HTMLCanvasElement> = elementFactory("canvas");

/**
 * Creates a `caption` element.
 */
export const Caption: ElementCreator<HTMLTableCaptionElement> = elementFactory("caption");

/**
 * Creates a `center` element.
 * @deprecated
 */
export const Center: ElementCreator<HTMLElement> = elementFactory("center");

/**
 * Creates a `cite` element.
 */
export const Cite: ElementCreator<HTMLSpanElement> = elementFactory("cite");

/**
 * Creates a `code` element.
 */
export const Code: ElementCreator<HTMLSpanElement> = elementFactory("code");

/**
 * Creates a `col` element.
 */
export const Col: ElementCreator<HTMLTableColElement> = elementFactory("col");

/**
 * Creates a `colgroup` element.
 */
export const Colgroup: ElementCreator<HTMLTableColElement> = elementFactory("colgroup");

/**
 * Creates a `data` element.
 */
export const Data: ElementCreator<HTMLDataElement> = elementFactory("data");

/**
 * Creates a `datalist` element.
 */
export const Datalist: ElementCreator<HTMLDataListElement> = elementFactory("datalist");

/**
 * Creates a `dd` element.
 */
export const Dd: ElementCreator<HTMLElement> = elementFactory("dd");

/**
 * Creates a `del` element.
 */
export const Del: ElementCreator<HTMLModElement> = elementFactory("del");

/**
 * Creates a `details` element.
 */
export const Details: ElementCreator<HTMLDetailsElement> = elementFactory("details");

/**
 * Creates a `dfn` element.
 */
export const Dfn: ElementCreator<HTMLElement> = elementFactory("dfn");

/**
 * Creates a `dialog` element.
 */
export const Dialog: ElementCreator<HTMLDialogElement> = elementFactory("dialog");

/**
 * Creates a `dir` element.
 * @deprecated
 */
export const Dir: ElementCreator<HTMLDirectoryElement> = elementFactory("dir");

/**
 * Creates a `div` element.
 */
export const Div: ElementCreator<HTMLDivElement> = elementFactory("div");

/**
 * Creates a `dl` element.
 */
export const Dl: ElementCreator<HTMLDListElement> = elementFactory("dl");

/**
 * Creates a `dt` element.
 */
export const Dt: ElementCreator<HTMLSpanElement> = elementFactory("dt");

/**
 * Creates a `em` element.
 */
export const Em: ElementCreator<HTMLSpanElement> = elementFactory("em");

/**
 * Creates a `embed` element.
 */
export const Embed: ElementCreator<HTMLEmbedElement> = elementFactory("embed");

/**
 * Creates a `fieldset` element.
 */
export const Fieldset: ElementCreator<HTMLFieldSetElement> = elementFactory("fieldset");

/**
 * Creates a `figcaption` element.
 */
export const Figcaption: ElementCreator<HTMLElement> = elementFactory("figcaption");

/**
 * Creates a `figure` element.
 */
export const Figure: ElementCreator<HTMLElement> = elementFactory("figure");

/**
 * Creates a `font` element.
 * @deprecated
 */
export const Font: ElementCreator<HTMLFontElement> = elementFactory("font");

/**
 * Creates a `footer` element.
 */
export const Footer: ElementCreator<HTMLElement> = elementFactory("footer");

/**
 * Creates a `form` element.
 */
export const Form: ElementCreator<HTMLFormElement> = elementFactory("form");

/**
 * Creates a `frame` element.
 * @deprecated
 */
export const Frame: ElementCreator<HTMLElement> = elementFactory("frame");

/**
 * Creates a `frameset` element.
 * @deprecated
 */
export const Frameset: ElementCreator<HTMLElement> = elementFactory("frameset");

/**
 * Creates a `head` element.
 */
export const Head: ElementCreator<HTMLHeadElement> = elementFactory("head");

/**
 * Creates a `header` element.
 */
export const Header: ElementCreator<HTMLElement> = elementFactory("header");

/**
 * Creates a `h1` element.
 */
export const H1: ElementCreator<HTMLHeadingElement> = elementFactory("h1");

/**
 * Creates a `h2` element.
 */
export const H2: ElementCreator<HTMLHeadingElement> = elementFactory("h2");

/**
 * Creates a `h3` element.
 */
export const H3: ElementCreator<HTMLHeadingElement> = elementFactory("h3");

/**
 * Creates a `h4` element.
 */
export const H4: ElementCreator<HTMLHeadingElement> = elementFactory("h4");

/**
 * Creates a `h5` element.
 */
export const H5: ElementCreator<HTMLHeadingElement> = elementFactory("h5");

/**
 * Creates a `h6` element.
 */
export const H6: ElementCreator<HTMLHeadingElement> = elementFactory("h6");

/**
 * Creates a `hgroup` element.
 */
export const Hgroup: ElementCreator<HTMLElement> = elementFactory("hgroup");

/**
 * Creates a `hr` element.
 */
export const Hr: ElementCreator<HTMLHRElement> = elementFactory("hr");

/**
 * Creates a `html` element.
 */
export const Html: ElementCreator<HTMLHtmlElement> = elementFactory("html");

/**
 * Creates a `i` element.
 */
export const I: ElementCreator<HTMLElement> = elementFactory("i");

/**
 * Creates a `iframe` element.
 */
export const Iframe: ElementCreator<HTMLIFrameElement> = elementFactory("iframe");

/**
 * Creates a `img` element.
 */
export const Img: ElementCreator<HTMLImageElement> = elementFactory("img");

/**
 * Creates a `input` element.
 */
export const Input: ElementCreator<HTMLInputElement> = elementFactory("input");

/**
 * Creates a `ins` element.
 */
export const Ins: ElementCreator<HTMLModElement> = elementFactory("ins");

/**
 * Creates a `kbd` element.
 */
export const Kbd: ElementCreator<HTMLElement> = elementFactory("kbd");

/**
 * Creates a `label` element.
 */
export const Label: ElementCreator<HTMLLabelElement> = elementFactory("label");

/**
 * Creates a `legend` element.
 */
export const Legend: ElementCreator<HTMLLegendElement> = elementFactory("legend");

/**
 * Creates a `li` element.
 */
export const Li: ElementCreator<HTMLLIElement> = elementFactory("li");

/**
 * Creates a `link` element.
 */
export const Link: ElementCreator<HTMLLinkElement> = elementFactory("link");

/**
 * Creates a `main` element.
 */
export const Main: ElementCreator<HTMLElement> = elementFactory("main");

/**
 * Creates a `map` element.
 */
export const Map: ElementCreator<HTMLMapElement> = elementFactory("map");

/**
 * Creates a `mark` element.
 */
export const Mark: ElementCreator<HTMLElement> = elementFactory("mark");

/**
 * Creates a `marquee` element.
 * @deprecated
 */
export const Marquee: ElementCreator<HTMLMarqueeElement> = elementFactory("marquee");

/**
 * Creates a `menu` element.
 */
export const Menu: ElementCreator<HTMLMenuElement> = elementFactory("menu");

/**
 * Creates a `meta` element.
 */
export const Meta: ElementCreator<HTMLMetaElement> = elementFactory("meta");

/**
 * Creates a `meter` element.
 */
export const Meter: ElementCreator<HTMLMeterElement> = elementFactory("meter");

/**
 * Creates a `nav` element.
 */
export const Nav: ElementCreator<HTMLElement> = elementFactory("nav");

/**
 * Creates a `nobr` element.
 * @deprecated
 */
export const Nobr: ElementCreator<HTMLElement> = elementFactory("nobr");

/**
 * Creates a `noembed` element.
 * @deprecated
 */
export const Noembed: ElementCreator<HTMLElement> = elementFactory("noembed");

/**
 * Creates a `noframes` element.
 * @deprecated
 */
export const Noframes: ElementCreator<HTMLElement> = elementFactory("noframes");

/**
 * Creates a `noscript` element.
 */
export const Noscript: ElementCreator<HTMLElement> = elementFactory("noscript");

/**
 * Creates a `object` element.
 */
export const Object: ElementCreator<HTMLObjectElement> = elementFactory("object");

/**
 * Creates a `ol` element.
 */
export const Ol: ElementCreator<HTMLOListElement> = elementFactory("ol");

/**
 * Creates a `optgroup` element.
 */
export const Optgroup: ElementCreator<HTMLOptGroupElement> = elementFactory("optgroup");

/**
 * Creates a `option` element.
 */
export const Option: ElementCreator<HTMLOptionElement> = elementFactory("option");

/**
 * Creates a `output` element.
 */
export const Output: ElementCreator<HTMLOutputElement> = elementFactory("output");

/**
 * Creates a `p` element.
 */
export const P: ElementCreator<HTMLParagraphElement> = elementFactory("p");

/**
 * Creates a `param` element.
 * @deprecated
 */
export const Param: ElementCreator<HTMLParamElement> = elementFactory("param");

/**
 * Creates a `picture` element.
 */
export const Picture: ElementCreator<HTMLPictureElement> = elementFactory("picture");

/**
 * Creates a `plaintext` element.
 * @deprecated
 */
export const Plaintext: ElementCreator<HTMLElement> = elementFactory("plaintext");

/**
 * Creates a `pre` element.
 */
export const Pre: ElementCreator<HTMLPreElement> = elementFactory("pre");

/**
 * Creates a `progress` element.
 */
export const Progress: ElementCreator<HTMLProgressElement> = elementFactory("progress");

/**
 * Creates a `q` element.
 */
export const Q: ElementCreator<HTMLQuoteElement> = elementFactory("q");

/**
 * Creates a `rb` element.
 * @deprecated
 */
export const Rb: ElementCreator<HTMLElement> = elementFactory("rb");

/**
 * Creates a `rp` element.
 */
export const Rp: ElementCreator<HTMLElement> = elementFactory("rp");

/**
 * Creates a `rt` element.
 */
export const Rt: ElementCreator<HTMLElement> = elementFactory("rt");

/**
 * Creates a `rtc` element.
 * @deprecated
 */
export const Rtc: ElementCreator<HTMLElement> = elementFactory("rtc");

/**
 * Creates a `ruby` element.
 */
export const Ruby: ElementCreator<HTMLElement> = elementFactory("ruby");

/**
 * Creates a `s` element.
 */
export const S: ElementCreator<HTMLElement> = elementFactory("s");

/**
 * Creates a `samp` element.
 */
export const Samp: ElementCreator<HTMLElement> = elementFactory("samp");

/**
 * Creates a `script` element.
 */
export const Script: ElementCreator<HTMLScriptElement> = elementFactory("script");

/**
 * Creates a `search` element.
 */
export const Search: ElementCreator<HTMLElement> = elementFactory("search");

/**
 * Creates a `section` element.
 */
export const Section: ElementCreator<HTMLElement> = elementFactory("section");

/**
 * Creates a `select` element.
 */
export const Select: ElementCreator<HTMLSelectElement> = elementFactory("select");

/**
 * Creates a `slot` element.
 */
export const Slot: ElementCreator<HTMLSlotElement> = elementFactory("slot");

/**
 * Creates a `small` element.
 */
export const Small: ElementCreator<HTMLElement> = elementFactory("small");

/**
 * Creates a `source` element.
 */
export const Source: ElementCreator<HTMLSourceElement> = elementFactory("source");

/**
 * Creates a `span` element.
 */
export const Span: ElementCreator<HTMLSpanElement> = elementFactory("span");

/**
 * Creates a `strike` element.
 * @deprecated
 */
export const Strike: ElementCreator<HTMLElement> = elementFactory("strike");

/**
 * Creates a `strong` element.
 */
export const Strong: ElementCreator<HTMLElement> = elementFactory("strong");

/**
 * Creates a `style` element.
 */
export const Style: ElementCreator<HTMLStyleElement> = elementFactory("style");

/**
 * Creates a `sub` element.
 */
export const Sub: ElementCreator<HTMLElement> = elementFactory("sub");

/**
 * Creates a `summary` element.
 */
export const Summary: ElementCreator<HTMLElement> = elementFactory("summary");

/**
 * Creates a `sup` element.
 */
export const Sup: ElementCreator<HTMLElement> = elementFactory("sup");

/**
 * Creates a `table` element.
 */
export const Table: ElementCreator<HTMLTableElement> = elementFactory("table");

/**
 * Creates a `tbody` element.
 */
export const Tbody: ElementCreator<HTMLTableSectionElement> = elementFactory("tbody");

/**
 * Creates a `td` element.
 */
export const Td: ElementCreator<HTMLTableCellElement> = elementFactory("td");

/**
 * Creates a `template` element.
 */
export const Template: ElementCreator<HTMLTemplateElement> = elementFactory("template");

/**
 * Creates a `textarea` element.
 */
export const Textarea: ElementCreator<HTMLTextAreaElement> = elementFactory("textarea");

/**
 * Creates a `tfoot` element.
 */
export const Tfoot: ElementCreator<HTMLTableSectionElement> = elementFactory("tfoot");

/**
 * Creates a `th` element.
 */
export const Th: ElementCreator<HTMLTableCellElement> = elementFactory("th");

/**
 * Creates a `thead` element.
 */
export const Thead: ElementCreator<HTMLTableSectionElement> = elementFactory("thead");

/**
 * Creates a `time` element.
 */
export const Time: ElementCreator<HTMLTimeElement> = elementFactory("time");

/**
 * Creates a `title` element.
 */
export const Title: ElementCreator<HTMLTitleElement> = elementFactory("title");

/**
 * Creates a `tr` element.
 */
export const Tr: ElementCreator<HTMLTableRowElement> = elementFactory("tr");

/**
 * Creates a `track` element.
 */
export const Track: ElementCreator<HTMLTrackElement> = elementFactory("track");

/**
 * Creates a `tt` element.
 * @deprecated
 */
export const Tt: ElementCreator<HTMLElement> = elementFactory("tt");

/**
 * Creates a `u` element.
 */
export const U: ElementCreator<HTMLElement> = elementFactory("u");

/**
 * Creates a `ul` element.
 */
export const Ul: ElementCreator<HTMLUListElement> = elementFactory("ul");

/**
 * Creates a `var` element.
 */
export const Var: ElementCreator<HTMLElement> = elementFactory("var");

/**
 * Creates a `video` element.
 */
export const Video: ElementCreator<HTMLMediaElement> = elementFactory("video");

/**
 * Creates a `wbr` element.
 */
export const Wbr: ElementCreator<HTMLElement> = elementFactory("wbr");

/**
 * Creates a `xmp` element.
 * @deprecated
 */
export const Xmp: ElementCreator<HTMLElement> = elementFactory("xmp");
