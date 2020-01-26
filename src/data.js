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
        descriptionEng: 'It consists of tags - brackets (<>), which in turn contain text, images, videos and other content',
        descriptionUa: 'Складається з тегів - елементів сайту, що обгорнуті дужками(<>), які в свою чергу містять текст, малюнки, відео та інший контент',
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
    }
];

export const getStartInfo = () => startInfo.filter((item)=> item.display);
