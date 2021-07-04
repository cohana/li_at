chrome.tabs.getSelected( null, function()
{
   let li_at = '';
   if( !chrome.cookies )
      chrome.cookies = chrome.experimental.cookies;
   
   chrome.cookies.getAll( {}, function (cookie)
   {
      for( i=0; i<cookie.length; i++ )
         if( cookie[i].domain.includes("www.linkedin.com") && cookie[i].name=="li_at" )
            li_at = cookie[i].value;
      document.getElementById("cookieText").value = li_at;
      document.getElementById('b').addEventListener("click", function  () {
         document.getElementById("cookieText").value = li_at;
      });
    });
});
