import indexPageData from './pages/indexPage.js';
const getPageContext = (pagePath)=>{
    console.log("getPageContext Invoked:", pagePath);
    let context= {};
    switch (pagePath){
        case "/index.html":
            context = {...context, ...indexPageData};
            break;
    }

    console.log("getPageContext Context:", JSON.stringify(context, null, 2));

    return context;
}

export default getPageContext;