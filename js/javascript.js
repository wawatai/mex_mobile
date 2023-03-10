//gameList Btn
$(function(){
    $('.gameList li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active');

        var n = $(this).index();

        $(".gameBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//filter
$(function(){
    $('.jumpWindow .close').click(function(){
        $('.filter')
        .removeClass('display');
    })

    $(".unlogin").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $('.loginBtn').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.loginWindow')
        .addClass('display');
    })

    $('.loginWindow .forget p').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.forgetWindow')
        .addClass('display');
    })

    $('.registerBtn,.ruleWindow .back').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.registerWindow')
        .addClass('display');
    })

    $('.registerWindow .isCheck .ruleBtn').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.ruleWindow')
        .addClass('display');
    })

    $(".changePhoneBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.phoneWindow')
        .addClass('display');
    })
    $(".phoneWindow .cellphoneCheck").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".changePwdBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.passwordWindow')
        .addClass('display');
    })
    $(".passwordWindow .passwordCheck").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo2')
        .addClass('display');
    })

    $(".pointWrap .check").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.pointWindow')
        .addClass('display');
    })

    $(".applyList .applyBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })
    $(".applyList .checkBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.eventWindow')
        .addClass('display');
    })

    $(".waterBox button").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.waterWindow')
        .addClass('display');
    })

    $(".searchContent .opAcc").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.accWindow')
        .addClass('display');
    })
    $(".searchContent .opPlat").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.platWindow')
        .addClass('display');
    })


    $(".transWrap .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })

    $(".forActive .check,.forHistory .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.bettingDetail').addClass('display');
    })
})

//news切換
$(function(){
    $('.jumpWindow.news .typeList li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".jumpWindow.news .content:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//wallet
$(function(){
    $('.walletWrap .openBtn').click(function(){
        $(this).find("p")
        .toggleClass("display");

        $(this).prev("ul")
        .toggleClass("active");
    })
})

//eventApply
$(function(){
    $(".eventApplyType li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".applyList:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//mail
$(function(){
    $("header .editBtn").click(function(){
        $(".editBox,.detailBtn.edit")
        .addClass("display");
        $(".editBtn")
        .removeClass("display");
        $(".mailBox li")
        .addClass("editing");
    })
    $("header .detailBtn.edit").click(function(){
        $(".editBox,.detailBtn.edit")
        .removeClass("display");
        $(".editBtn")
        .addClass("display");
        $(".mailBox li")
        .removeClass("editing");
    })

    $(".mailTopList li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".mailWrap")
        .toggleClass("display");

        $(".mailBox li")
        .removeClass("editing");

        $(".editBox")
        .removeClass("display");

        var n = $(this).index();

        $("header .editBtn")
        .addClass("display")
        .siblings().removeClass("display");

        if(n == 1)
        {
            $("header .editBtn")
            .removeClass("display");
        }
    })

    $(".mailWrap.normal .subClass li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active"); 

        var n = $(this).index();

        $(".mailWrap.normal .mailBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".mailWrap.post .subClass li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active"); 

        var n = $(this).index();

        $(".mailWrap.post .mailBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//bettingRecord + dealRecord + pointWrap
$(function(){
    $(".searchContent .date button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

    })

    $(".bettingWrap .deal").on("change",function(){
        var n = parseInt($(this).val());

        $(".bettingWrap .list:eq("+ (n - 1) +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//event .eventType切換
$(function(){
    $('.eventType li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active');
    })
})

//help
function backToPage(){
    $("header .helpPage").removeClass("display");
    $("header .helpPage:eq(0)").addClass("display");

    $(".helpInner").removeClass("display");
    $(".helpWrap").addClass("display");
}
$(function(){
    $(".helpBody li").click(function(){
        var n = $(this).index();

        $("header .helpPage:eq("+ (n + 1) +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".helpWrap")
        .removeClass("display");

        $(".helpInner,.helpInner ul:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})








//realLogin


function callFish() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.fish').addClass('display');
}
function callLottery() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.lottery').addClass('display');
}
function callBoard() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.board').addClass('display');
}
function callSlot() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.slot').addClass('display');
}

//slotPage .gameBox .love
$(function(){
    $('.slotWrap .gameBox .love').click(function(){
        $(this).toggleClass('active');
    })
})
//slotPage .slotHeader切換
$(function(){
    $('.slotHeader .listBox li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})















//deposit
$(function(){
    $(".depList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        var n = $(this).index();

        $(".depContent:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".depContent.card .check").click(function(){
        $(".depList,.depContent").removeClass("display");
        $(".depContent.already").addClass("display");
    })
    $(".depContent.already .change").click(function(){
        $(".depContent").removeClass("display");
        $(".depList,.depContent.card").addClass("display");
    })
})

//transWrap
$(function(){
    $(".transWrap .subClass li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".transWrap .subClass li:eq(0)").click(function(){
        $(".transWrap .forActive").addClass("display");
        $(".transWrap .forPlatform").removeClass("display");
    })
    $(".transWrap .subClass li:eq(1)").click(function(){
        $(".transWrap .forActive").removeClass("display");
        $(".transWrap .forPlatform").addClass("display");
    })

    $('.transWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
    })
})

//withWrap
$(function(){
    $(".withWrap .walletBox .check").click(function(){
        $(".walletDetail").toggleClass("active");
    })

    $('.withWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
    })
})