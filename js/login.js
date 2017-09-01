/**
 * Created by jojopoper on 2017/08/25.
 */

var LoginController = {
    uiViews : {},

    initController : function() {
        GetLanguage();
        this.test();
        this.initStrings();
        this.initView();
    },

    initStrings : function() {
        if( mLanguage == 'cn' ) {

        } else {

        }
    },

    test : function() {
        mLanguage = 'cn';
    },

    initView : function() {

    },
};