function get(url)
{
    var xhr = new XMLHttpRequest();
    xhr.open( "GET", url, false );
    xhr.send( null );
    return xhr.responseText;
}

sso = JSON.parse(get('https://www.habbo.es/api/ssotoken'))["ssoToken"]

var html_payload = `
<html>
<head>
    <meta name="referrer" content="origin">
    <link rel="stylesheet" type="text/css" href="https://images.habbo.com/game-data-server-static//./hotel.731d1960.css">
    <script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="https://images.habbo.com/game-data-server-static//./habboapi.10385504.js"></script>
</head>
<body>
    <div id="client-ui">
        <div id="flash-wrapper">
            <object width="100%" height="100%" id="flash-container" type="application/x-shockwave-flash" data="//images.habbo.com/gordon/PRODUCTION-202101051143-881384628/Habbo.swf" style="visibility: visible;"><param name="base" value="//images.habbo.com/gordon/PRODUCTION-202101051143-881384628/"><param name="allowScriptAccess" value="always"><param name="menu" value="false"><param name="wmode" value="opaque"><param name="flashvars" value="external.texts.txt=https://www.habbo.es/gamedata/external_flash_texts/357bd98e0dcbb89d2fbe6f53e4e7aadb20a03e0f&amp;connection.info.port=38101,843&amp;furnidata.load.url=https://www.habbo.es/gamedata/furnidata_xml/e8c9b0145f617e0c269a04830b5975f40bf093a2&amp;external.variables.txt=https://www.habbo.es/gamedata/external_variables/5a79fd7dde794202da5cb9578c0103307cd241a0&amp;client.allow.cross.domain=1&amp;url.prefix=https://www.habbo.com&amp;external.override.texts.txt=https://www.habbo.es/gamedata/override/external_flash_override_texts/357bd98e0dcbb89d2fbe6f53e4e7aadb20a03e0f&amp;supersonic_custom_css=https://images.habbo.com/game-data-server-static//./hotel.731d1960.css&amp;external.figurepartlist.txt=https://www.habbo.es/gamedata/figuredata/595de281707e45dbab45d698fb6e951941569571&amp;flash.client.origin=popup&amp;client.starting=Please wait! Habbo is starting up.&amp;processlog.enabled=1&amp;has.identity=1&amp;avatareditor.promohabbos=https://www.habbo.com/api/public/lists/hotlooks&amp;productdata.load.url=https://www.habbo.es/gamedata/productdata/90ad99f2d1cd9362c71278b78df6c2673593eab4&amp;client.starting.revolving=For science, you monster/Loading funny message…please wait./Would you like fries with that?/Follow the yellow duck./Time is just an illusion./Are we there yet?!/I like your t-shirt./Look left. Look right. Blink twice. Ta da!/It's not you, it's me./Shhh! I'm trying to think here./Loading pixel universe.&amp;external.override.variables.txt=https://www.habbo.es/gamedata/override/external_override_variables/5a79fd7dde794202da5cb9578c0103307cd241a0&amp;spaweb=1&amp;supersonic_application_key=2abb40ad&amp;connection.info.host=game-es.habbo.com&amp;client.notify.cross.domain=0&amp;account_id=0&amp;flash.client.url=//images.habbo.com/gordon/PRODUCTION-202101051143-881384628/&amp;sso.ticket=${sso}"></object>
        </div>
        <div id="content" class="client-content"></div>
        <iframe id="page-content" class="hidden" allowtransparency="true" frameborder="0" src="about:blank"></iframe>
    </div>
</body>
</html>`;
document.body.innerHTML = html_payload