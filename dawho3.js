// ���𧋦: 110
(function(para) {
    var p = para.sdk_url,
        n = para.name,
        w = window,
        d = document,
        s = 'script',
        x = null,
        y = null;
    w['sensorsDataAnalytic201505'] = n;
    w[n] = w[n] || function(a) { return function() {
            (w[n]._q = w[n]._q || []).push([a, arguments]); } };
    var ifs = ['track', 'quick', 'register', 'registerPage', 'registerOnce', 'clearAllRegister', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify', 'login', 'logout', 'trackLink', 'clearAllRegister'];
    for (var i = 0; i < ifs.length; i++) {
        w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    if (!w[n]._t) {
        x = d.createElement(s), y = d.getElementsByTagName(s)[0];
        x.async = 1;
        x.src = p;
        w[n].para = para;
        y.parentNode.insertBefore(x, y);
    }
})({
    name: 'sensors',
    // 皜祈岫頝臬�� / 甇��讛楝敺� 閬���蹱��
    // 皜祈岫頝臬��
    // server_url: 'https://dmp-test.sinopac.com/DMP_SA_SIT/API/',
    // sdk_url: 'https://dmp-test.sinopac.com/DMP_SA_SIT/SDK/Scripts/sensorsdata.min.securejs',
    // heatmap_url: 'https://dmp-test.sinopac.com/DMP_SA_SIT/SDK/Scripts/heatmap.min.securejs',
    // server_url: 'http://10.11.22.217/DMP_SA/API/',
    // sdk_url: 'http://10.11.22.217/DMP_SA/SDK/Scripts/sensorsdata.min.securejs',
    // heatmap_url: 'http://10.11.22.217/DMP_SA/SDK/Scripts/heatmap.min.securejs',
    // server_url: 'http://10.11.22.217/DMP_SA/API/',
    // sdk_url: 'http://10.11.22.217/DMP_SA/SDK/Scripts/sensorsdata.min.securejs',
    // heatmap_url: 'http://10.11.22.217/DMP_SA/SDK/Scripts/heatmap.min.securejs',
    // 甇��讛楝敺�
    server_url: 'https://dmp.sinopac.com/DMP_SA/API/',
    sdk_url: 'https://dmp.sinopac.com/DMP_SA/SDK/Scripts/sensorsdata.min.securejs',
    //heatmap_url蟡䂿�硋���𣂷葉暺墧�𠰴���𣂼�𡃏孛�𥪜���𣂼�蠘�賭誨蝣潘�䔶誨蝣潛���𣂼極�瑟��䌊��閧���僐��憒���𦦵�䂿�碶誨蝣潔葉 `sensorsdata.min.js` ���𧋦�糓 1.13.1 ��𠹺誑��滨��𧋦嚗屸�坔�见��彍����滨蔭嚗屸�䀹䲰甇斤��𧋦銝漤�閬��滨蔭��
    heatmap_url: "https://dmp.sinopac.com/DMP_SA/SDK/Scripts/heatmap.min.securejs",
    //web_url 蟡䂿�硋���𣂷葉暺墧�𠰴���𣂼�𡃏孛�𥪜���𣂼�蠘�賣��鍂��甇文𧑐��嚗䔶誨蝣潛���𣂼極�瑟��䌊��閧���僐��憒���𦦵�䂿�硋��蝱���𧋦��� `sensorsdata.min.js` ���糓 1.10 ��𠹺誑銝羓��𧋦嚗屸�坔�见��彍銝漤�閬��滨蔭��
    web_url: "https://dawho.tw/",
    heatmap: {
        //�糓�炏��见�罸�墧�𠰴�吔�屸�䁅�� default 銵函內��见���諹䌊��閖��� $WebClick 鈭衤辣嚗�虾隞亥身蝵� 'not_collect' 銵函內��𣈯��
        //��閬� JSSDK ���𧋦��笔之�䲰 1.7
        clickmap: 'default',
        //�糓�炏��见�蠘孛�磰酉�誩�𥕦�吔�屸�䁅�� default 銵函內��见���諹䌊��閖��� $WebStay 鈭衤辣嚗�虾隞亥身蝵� 'not_collect' 銵函內��𣈯��
        //��閬� JSSDK ���𧋦��笔之�䲰 1.9.1
        scroll_notice_map: 'default'
    },
    //閮剔蔭 true 敺峕��銁蝬脤��綉���枂��� logger嚗峕�憿舐內�䔄�����彍���,閮剔蔭 false 銵函內銝漤＊蝷箝��暺䁅�� true
    show_log: false,
    //暺䁅�滚�� false嚗諹”蝷箸糓�炏��见�笔鱓���𢒰�䌊��閖��� $pageview ��蠘�踝�玺DK ���銁 url �㺿霈𠹺�见�諹䌊��閖���web���𢒰�讛汗鈭衤辣 $pageview
    is_track_single_page: false,
    //��㯄�� App-H5
    use_app_track: true
});

var sPlatform = '';
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    sPlatform = 'iOS';
} else if (/(Android)/i.test(navigator.userAgent)) {
    sPlatform = 'Android';
} else {
    sPlatform = 'PC';
}

// 頝函雯���鰵憓�
sensors.quick('useModulePlugin', 'SiteLinker', {
    linker: [
        { part_url: 'dawho.tw', after_hash: false },
        { part_url: 'sinopac.com', after_hash: false }
    ]
});

sensors.registerPage({
    is_login: "  ", //隢衤�� �鍂��銵𣬚�箏���鞾��𤌍鈭衤辣閮剛�� excel瑼𥪯�见�砍�勗惇�扳�閬誩�憛怠神
    platform: 'PC',
    product: '憭扳�Dawho' //隢衤�� �鍂��銵𣬚�箏���鞾��𤌍鈭衤辣閮剛�� excel瑼𥪯�见�砍�勗惇�扳�閬誩�憛怠神
})
sensors.quick('autoTrack');