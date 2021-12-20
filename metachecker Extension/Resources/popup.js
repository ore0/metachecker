function handleResponse(response) {
    const data = response.data;
    switch(response.type) {
        case "metas":
            document.getElementById("title").innerHTML = data.title;
            document.getElementById("description").innerHTML = data.description;
            document.getElementById("keywords").innerHTML = data.keywords;
            break;
        default:
            break;
    };
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.query({active:true, currentWindow:true}, (tabs) => {
  browser.tabs.sendMessage(tabs[0].id, {
    type: "popup"
  }).then(handleResponse, handleError);
});
