import { readPage, constructPage } from './templatingEngine.js'

// todo: 

const frontpage = readPage('public/pages/frontpage/frontpage.html')
export const frontpagePage = constructPage(frontpage, {
    cssLinks: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css" />`,
    jsLinks: ` <script src="/assets/js/escapeHTML.js"></script>`
});

const about = readPage('public/pages/about/about.html')
export const aboutPage = constructPage(about, { tabTitle: "Planter | About" });


const contact = readPage('public/pages/contact/contact.html')
export const contactPage = constructPage(contact, 
    { tabTitle: "Planter | Contact" });
