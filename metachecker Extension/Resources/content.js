function handleMessage(request, sender, sendResponse) {
    switch(request.type) {
        case "popup":
            sendResponse({
                type: "metas",
                data: {
                    title: document.title ? document.title : "",
                    description: document.querySelector('meta[name="description"]') ? document.querySelector('meta[name="description"]').content : "",
                    keywords: document.querySelector('meta[name="keywords"]') ? document.querySelector('meta[name="keywords"]').content : "",
                }
            });
            break;
        default:
            break
    }
};

browser.runtime.onMessage.addListener(handleMessage);
