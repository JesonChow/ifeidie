class Action{
    constructor(parameter) {
        this._one_box = $('.one-page-group');
        this._two_box = $('.two-page-group');
        this._user_box = $('.user-img');
        this._index = 0;
        this.add_event();
    }
    _sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time*1000));
    }
    // (async function() {
    //     await sleep(1);
    // })();
    add_event(){
        let that = this;
        this._user_box.click(function(){
            if(that._index == 0){
                //第一个页面点击
                that._index = 1;
                (async function() {
                    that._one_box.find('.left-group').css({'left': "-50%"});
                    that._one_box.find('.right-group').css({'opacity': "0"});
                    that._user_box.css({
                        right:'70px',
                        top:'70px',
                        width:'50px',
                        height:'50px',
                    })
                    await that._sleep(0.5);
                    that._one_box.hide();
                    that._two_box.show();
                    await that._sleep(0.04);
                    that._two_box.find('.left-group').css({'top': '50%'});
                    that._two_box.find('.right-group').css({'right': '0'});
                })();
            }else if(that._index == 1){
                //第二个页面点击
                that._index = 0;
                (async function() {
                    that._two_box.find('.left-group').css({'top':'110%'});
                    that._two_box.find('.right-group').css({'right': '-100%'});
                    await that._sleep(0.3);
                    that._two_box.hide();
                    that._one_box.show();
                    await that._sleep(0.04);
                    that._one_box.find('.left-group').css({'left': "0"});
                    that._one_box.find('.right-group').css({'opacity': "1"});
                    that._user_box.css({
                        right:'50%',
                        top:'50%',
                        width:'80px',
                        height:'80px',
                    })
                })();
            }
        });
    }
}