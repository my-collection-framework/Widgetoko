Bridge.assembly("Widgetoko", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,Widgetoko.Twitter.API,Widgetoko.Twitter];
    $m("Widgetoko.Twitter.TwitterListener", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[System.Object,$n[0].String],"pi":[{"n":"credentials","pt":System.Object,"ps":0},{"n":"filter","pt":$n[0].String,"ps":1}],"sn":"ctor"},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"_client","t":4,"rt":Twitter,"sn":"_client","ro":true},{"a":1,"n":"_filter","t":4,"rt":$n[0].String,"sn":"_filter","ro":true},{"a":1,"n":"_stream","t":4,"rt":$n[1].TwitterStream,"sn":"_stream"},{"a":2,"n":"OnError","t":2,"ad":{"a":2,"n":"add_OnError","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnError","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnError","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnError","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnReceived","t":2,"ad":{"a":2,"n":"add_OnReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnReceived","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnReceived","rt":$n[0].Void,"p":[Function]}}]}; });
    $m("Widgetoko.RendererProcess.SplashScreen", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"InitGlobals","is":true,"t":8,"sn":"InitGlobals","rt":$n[0].Void},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":2,"n":"Electron","is":true,"t":4,"rt":System.Object,"sn":"Electron"}]}; });
    $m("Widgetoko.RendererProcess.OptionsForm", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ConfigureEventHandlers","is":true,"t":8,"sn":"ConfigureEventHandlers","rt":$n[0].Void},{"a":2,"n":"InitGlobals","is":true,"t":8,"sn":"InitGlobals","rt":$n[0].Void},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":2,"n":"Electron","is":true,"t":4,"rt":System.Object,"sn":"Electron"}]}; });
    $m("Widgetoko.RendererProcess.MainForm", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":1,"n":"AddTweetToPage","is":true,"t":8,"pi":[{"n":"tweet","pt":$n[1].Tweet,"ps":0}],"sn":"AddTweetToPage","rt":$n[0].Void,"p":[$n[1].Tweet]},{"a":1,"n":"ConfigureEventHandlers","is":true,"t":8,"sn":"ConfigureEventHandlers","rt":$n[0].Void},{"a":1,"n":"ConfigureIPC","is":true,"t":8,"sn":"ConfigureIPC","rt":$n[0].Void},{"a":1,"n":"CreateNotification","is":true,"t":8,"pi":[{"n":"tweet","pt":$n[1].Tweet,"ps":0}],"sn":"CreateNotification","rt":$n[0].Void,"p":[$n[1].Tweet]},{"a":2,"n":"InitGlobals","is":true,"t":8,"sn":"InitGlobals","rt":$n[0].Void},{"a":1,"n":"InitListener","is":true,"t":8,"sn":"InitListener","rt":$n[2].TwitterListener},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":1,"n":"ToggleTheme","is":true,"t":8,"sn":"ToggleTheme","rt":$n[0].Void},{"a":1,"n":"DarkThemeCss","is":true,"t":4,"rt":$n[0].String,"sn":"DarkThemeCss"},{"a":2,"n":"Electron","is":true,"t":4,"rt":System.Object,"sn":"Electron"},{"a":1,"n":"LightThemeCss","is":true,"t":4,"rt":$n[0].String,"sn":"LightThemeCss"},{"a":1,"n":"MaxTweetsOnPage","is":true,"t":4,"rt":$n[0].Int32,"sn":"MaxTweetsOnPage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"NotificationBufferTimeSec","is":true,"t":4,"rt":$n[0].Int32,"sn":"NotificationBufferTimeSec","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_isStarted","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_isStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_lastNotificationDate","is":true,"t":4,"rt":$n[0].Nullable$1(System.DateTime),"sn":"_lastNotificationDate","box":function ($v) { return Bridge.box($v, System.DateTime, System.Nullable.toStringFn(System.DateTime.format), System.Nullable.getHashCode);}},{"a":1,"n":"_listener","is":true,"t":4,"rt":$n[2].TwitterListener,"sn":"_listener"}]}; });
    $m("Widgetoko.MainProcess.App", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ConfigureIPC","is":true,"t":8,"sn":"ConfigureIPC","rt":$n[0].Void},{"a":1,"n":"CreateMainWindow","is":true,"t":8,"sn":"CreateMainWindow","rt":$n[0].Void},{"a":1,"n":"CreateMenuAccelerator","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].String,"ps":0}],"sn":"CreateMenuAccelerator","rt":Electron.Accelerator,"p":[$n[0].String]},{"a":1,"n":"CreateOptionsWindow","is":true,"t":8,"sn":"CreateOptionsWindow","rt":Electron.BrowserWindow},{"a":1,"n":"CreateSplashScreen","is":true,"t":8,"sn":"CreateSplashScreen","rt":Electron.BrowserWindow},{"a":1,"n":"GetAppNameWithVersion","is":true,"t":8,"pi":[{"n":"getDisplayedVersion","pt":$n[0].Boolean,"ps":0}],"sn":"GetAppNameWithVersion","rt":$n[0].String,"p":[$n[0].Boolean]},{"a":2,"n":"InitGlobals","is":true,"t":8,"sn":"InitGlobals","rt":$n[0].Void},{"a":1,"n":"LoadUserSettings","is":true,"t":8,"sn":"LoadUserSettings","rt":$n[0].Void},{"a":1,"n":"LoadWindow","is":true,"t":8,"pi":[{"n":"win","pt":Electron.BrowserWindow,"ps":0},{"n":"page","pt":$n[0].String,"ps":1}],"sn":"LoadWindow","rt":$n[0].Void,"p":[Electron.BrowserWindow,$n[0].String]},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":1,"n":"SaveUserSettings","is":true,"t":8,"sn":"SaveUserSettings","rt":$n[0].Void},{"a":1,"n":"SetContextMenu","is":true,"t":8,"pi":[{"n":"win","pt":Electron.BrowserWindow,"ps":0}],"sn":"SetContextMenu","rt":$n[0].Void,"p":[Electron.BrowserWindow]},{"a":1,"n":"SetMainMenu","is":true,"t":8,"sn":"SetMainMenu","rt":$n[0].Void},{"a":1,"n":"SetMainMenuForOptions","is":true,"t":8,"pi":[{"n":"win","pt":Electron.BrowserWindow,"ps":0}],"sn":"SetMainMenuForOptions","rt":$n[0].Void,"p":[Electron.BrowserWindow]},{"a":1,"n":"ShowTrayIcon","is":true,"t":8,"sn":"ShowTrayIcon","rt":$n[0].Void},{"a":1,"n":"StartApp","is":true,"t":8,"pi":[{"n":"launchInfo","pt":$n[0].Object,"ps":0}],"sn":"StartApp","rt":$n[0].Void,"p":[$n[0].Object]},{"a":1,"n":"ToggleStartStop","is":true,"t":8,"pi":[{"n":"isStart","pt":$n[0].Boolean,"ps":0}],"sn":"ToggleStartStop","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"ToggleStartStopMenuItems","is":true,"t":8,"pi":[{"n":"isStarted","pt":$n[0].Boolean,"ps":0}],"sn":"ToggleStartStopMenuItems","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"AppIcon","is":true,"t":4,"rt":Electron.Tray,"sn":"AppIcon"},{"a":2,"n":"ContextMenu","is":true,"t":4,"rt":Electron.Menu,"sn":"ContextMenu"},{"a":2,"n":"Electron","is":true,"t":4,"rt":System.Object,"sn":"Electron"},{"a":2,"n":"Win","is":true,"t":4,"rt":Electron.BrowserWindow,"sn":"Win"},{"a":1,"n":"_settings","is":true,"t":4,"rt":System.Object,"sn":"_settings"}]}; });
});
