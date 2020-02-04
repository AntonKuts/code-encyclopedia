const startInfo = [
    {
        id: 1,
        title: 'length',
        intro: 'The length of the array or string.',
        introUa: 'Довжина масиву або рядка.',
        similarTopics: ['arr', 'forIn'],
        like: false,
        category: 'js',
        descriptionEng: 'Refreshes on change. For array it can be set, for a line not. If you specify more - fill in the empty elements. If less - irrevocably crop',
        descriptionUa: 'Оновляеться при зміні. Для масиву може бути заданий, для рядка ні. Якщо вказати більше - заповнитися порожніми елементами. Якщо менше - безповоротно обріже масив.',
        linkToDocumentationEng: [
            'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/length'
        ],
        linkToDocumentationUA: [
            'https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/length',
            'https://learn.javascript.ru/array#nemnogo-o-length'
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '08.01.2020',
        code: ['arr.length'],
        display: true,
        mandatoryAttributes: null,
        lesson: 0
    },
    {
        id: 2,
        title: 'for',
        intro: 'Loop array or string.',
        introUa: 'Цикл, перебір масиву чи рядка.',
        similarTopics: ['arr', 'length'],
        like: true,
        category: 'js',
        descriptionEng: 'You can end the iteration by specifying -continue-, or end the loop immediately -break-.',
        descriptionUa: 'Можна припинити ітерацію вказавши -continue-, або одразу припинити цикл -break-.',
        linkToDocumentationEng: [
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for'
        ],
        linkToDocumentationUA: [
            'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for',
            'https://learn.javascript.ru/while-for#tsikl-for'
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '08.01.2020',
        code:'for (var i = 0; i < arr.length; i++) { \n arr[i];\n}',
        display: true,
        mandatoryAttributes: '(;;)',
        lesson: 0
    },
    {
        id: 3,
        title: 'DOCTYPE',
        intro: 'The type of the current document.',
        introUa: 'Tип поточного документа.',
        similarTopics: ['html'],
        like: true,
        category: 'html',
        descriptionEng: 'Designed to specify the current document type - DTD (document type definition). <! DOCTYPE> should be the first element in your html document. This is a web browser instruction on how to interpret the current HTML page.',
        descriptionUa: 'Призначений для задання типу поточного документа - DTD (document type definition, опис типу документа). <!DOCTYPE> повинен бути першим елементом в вашому html-документі. Це інструкція для веб-браузера про те, як інтерпретувати поточну HTML сторінку.',
        linkToDocumentationEng: [
            'https://html.spec.whatwg.org/multipage/syntax.html#the-doctype'
        ],
        linkToDocumentationUA: [
            'https://css.in.ua/html/tag/doctype',
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '20.01.2020',
        code:'<!DOCTYPE html>',
        display: true,
        mandatoryAttributes: '<!DOCTYPE html>',
        lesson: 1
    },
    {
        id: 4,
        title: 'html',
        intro: 'The main container for the entire page.',
        introUa: 'Основний контейнер для всієї сторінки.',
        similarTopics: ['DOCTYPE', 'head', 'body'],
        like: true,
        category: 'html',
        descriptionEng: 'Comes after DOCTYPE and includes <head> and <body>.',
        descriptionUa: 'Іде після DOCTYPE і включає <head> та <body>.',
        linkToDocumentationEng: [
            'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html'
        ],
        linkToDocumentationUA: [
            'https://developer.mozilla.org/uk/docs/Web/HTML/%D0%95%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82/html',
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '24.01.2020',
        code:'<html>\n some code\n</html>',
        display: true,
        mandatoryAttributes: '<html></html>',
        lesson: 1
    },
    {
        id: 5,
        title: 'head',
        intro: 'Avenge meta tags, which are designated for browsers and desktop systems.',
        introUa: 'Містить метатеги, які призначені для браузерів та пошукових систем.',
        similarTopics: ['html'],
        like: true,
        category: 'html',
        descriptionEng: 'Stores site description, key words, and other information. The contents of the <head> tag are not displayed on the web page except for the <title> tag, which sets the title of the web page window.',
        descriptionUa: 'Зберігає опис сайту, ключові сліва та іншу інформацію. Вміст тега <head> не відображається на веб-сторінці, за винятком тега <title>, який встановлює заголовок вікна веб-сторінки.',
        linkToDocumentationEng: [
            'https://www.geeksforgeeks.org/html-head-tag/'
        ],
        linkToDocumentationUA: [
            'https://css.in.ua/html/tag/head',
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '26.01.2020',
        code:'<head>\n some code\n</head>',
        display: true,
        mandatoryAttributes: '',
        lesson: 1
    },
    {
        id: 6,
        title: 'body',
        intro: 'Designed to store the body of a web page (content) displayed in a browser window.',
        introUa: 'Призначений для зберігання тіла веб-сторінки (контенту), що відображається у вікні браузера.',
        similarTopics: ['html'],
        like: true,
        category: 'html',
        descriptionEng: 'It consists of tags - brackets (<>), which in turn contain text, images, videos and other content.',
        descriptionUa: 'Складається з тегів - елементів сайту, що обгорнуті дужками(<>), які в свою чергу містять текст, малюнки, відео та інший контент.',
        linkToDocumentationEng: [
            'https://www.w3schools.com/tags/tag_body.asp'
        ],
        linkToDocumentationUA: [
            'https://css.in.ua/html/tag/body',
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '26.01.2020',
        code:'<body>\n some code\n</body>',
        display: true,
        mandatoryAttributes: '<body></body>',
        lesson: 1
    },
    {
        id: 7,
        title: 'p',
        intro: 'The main tag for the text.',
        introUa: 'Основний тег для текста.',
        similarTopics: ['span'],
        like: true,
        category: 'html',
        descriptionEng: 'A block element, so it always starts with a new line.',
        descriptionUa: 'Блоковий (block) елемент, тому завжди починається з нового рядка.',
        linkToDocumentationEng: [
            'https://www.w3schools.com/tags/tag_body.asp'
        ],
        linkToDocumentationUA: [
            'https://www.w3schools.com/tags/tag_p.asp',
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '26.01.2020',
        code:'<p>some text</p>',
        display: true,
        mandatoryAttributes: '',
        lesson: 1
    },
    {
        id: 8,
        title: 'h1',
        intro: 'Title tag.',
        introUa: 'Тег для позначення заголовку.',
        similarTopics: ['p', 'span'],
        like: true,
        category: 'html',
        descriptionEng: 'Tags from h1 to h6 define titles from larger to smaller. Begin with a new term.',
        descriptionUa: 'Теги від h1 до h6 визначають заголовки від більшого до меньшого. Починаються з новой строки.',
        linkToDocumentationEng: [
            'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements'
        ],
        linkToDocumentationUA: [
            'https://css.in.ua/html/tag/h1'
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '26.01.2020',
        code:'<h1>some text</h1>',
        display: true,
        mandatoryAttributes: '',
        lesson: 1
    },
    {
        id: 9,
        title: 'br',
        intro: 'Inserts an empty line.',
        introUa: 'Вставляє пусту строку.',
        similarTopics: [],
        like: true,
        category: 'html',
        descriptionEng: 'Lets you skip a line in text or other content.',
        descriptionUa: 'Дозволяє робити пропуски строки в тексті чи і іншому контенті.',
        linkToDocumentationEng: [
            'https://developer.mozilla.org/uk/docs/Web/HTML/Element/br'
        ],
        linkToDocumentationUA: [
            'https://css.in.ua/html/tag/br'
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '27.01.2020',
        code:'<br>',
        display: true,
        mandatoryAttributes: '',
        lesson: 1
    },
    {
        id: 10,
        title: 'div',
        intro: 'The main universal tag for building a site structure.',
        introUa: 'Основний універсальний тег для побудови структури сайту.',
        similarTopics: [],
        like: true,
        category: 'html',
        descriptionEng: 'The block element, so it always starts with a new line. Can be nested in one.',
        descriptionUa: 'Блоковий елемент, тому завжди починається з нового рядка. Може бути вкладений один в одний.',
        linkToDocumentationEng: [
            'https://www.geeksforgeeks.org/div-tag-html/'
        ],
        linkToDocumentationUA: [
            'https://css.in.ua/html/tag/div'
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '31.01.2020',
        code:'<div> some code </div>',
        display: true,
        mandatoryAttributes: '',
        lesson: 2
    },
    {
        id: 11,
        title: 'img',
        intro: 'A tag for adding pictures to the page.',
        introUa: 'Тег для додавання малюнків на сторінку.',
        similarTopics: [],
        like: true,
        category: 'html',
        descriptionEng: 'Supports image formats gif, jpg, png and more. Attribute  - alt - alternative text, for example, when the image is not loaded.',
        descriptionUa: 'Підтримує формати зображень gif, jpeg, png та інші. Атрібут - alt - альтернативний текст, наприклад коли малюнок не загрузився.',
        linkToDocumentationEng: [
            'https://www.w3schools.com/tags/tag_a.asp'
        ],
        linkToDocumentationUA: [
            'https://css.in.ua/html/tag/a'
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '04.02.2020',
        code:'<img src="some link" alt="some text"/>',
        display: true,
        mandatoryAttributes: 'href',
        lesson: 2
    },
    {
        id: 12,
        title: 'a',
        intro: 'Creates a hyperlink to an external address or place on this page.',
        introUa: 'Cтворює гіперпосилання на зовнішню адресу, чи на місце на цій сторінці.',
        similarTopics: [],
        like: true,
        category: 'html',
        descriptionEng: 'It may link to other web pages, files, e-mail addresses or any other URL and tags located on this page.',
        descriptionUa: 'Може посилатись на  інші веб-сторінки, файли, адреси електронної пошти чи будь-яку іншу URL-адресу, та теги, що розташовані на цій сторінці.',
        linkToDocumentationEng: [
            'https://www.w3schools.com/tags/tag_a.asp'
        ],
        linkToDocumentationUA: [
            'https://css.in.ua/html/tag/a'
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '04.02.2020',
        code:'<a href="some URL"> some text </a>',
        display: true,
        mandatoryAttributes: 'href',
        lesson: 2
    },
    {
        id: 13,
        title: 'span',
        intro: 'Tag to highlight text among other text.',
        introUa: 'Тег для виділення тексту з поміж іншого тексту.',
        similarTopics: ['p'],
        like: true,
        category: 'html',
        descriptionEng: 'Inline tag that is used in the middle of other tags to highlight text. You need to apply css styles to change the highlighted text.',
        descriptionUa: 'Рядковий (inline) тег, який застосовується в середини інших тегів для виділеня тексту. Для зміни виділеного тексту необхідно застосувати стилі css.',
        linkToDocumentationEng: [
            'https://developer.mozilla.org/uk/docs/Web/HTML/Element/span'
        ],
        linkToDocumentationUA: [
            'https://css.in.ua/html/tag/span'
        ],
        author: 'Anton Kuts',
        dateIntroductionOrUpdate: '04.02.2020',
        code:'<p> some text <span> highlight text </span> some text </p>',
        display: true,
        mandatoryAttributes: 'href',
        lesson: 2
    }

];

export const getStartInfo = (selectLesson) => startInfo
  .filter((item)=>
  (selectLesson ? selectLesson === item.lesson : true)
  && item.display);
