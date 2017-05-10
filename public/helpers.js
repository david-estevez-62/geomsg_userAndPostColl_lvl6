
function ajaxReqTemplate(url, cb, xhr, data, method) {
    
    var ajaxSettings = {
        url: url,
        type: method || "POST",
        success: cb
    } 

    if(!xhr && data){
      ajaxSettings.data = data;
    } else if(xhr) {
      ajaxSettings.data = data;
      ajaxSettings.xhr = xhr;
      ajaxSettings.cache = false;
      ajaxSettings.contentType = false;
      ajaxSettings.processData = false;
    }

    $.ajax(ajaxSettings)
}