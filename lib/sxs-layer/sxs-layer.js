var sxsLayer = {
    init: function () {
        this.close()
    },
    alert: function (content, options, fun) {
        var opt = options || {}
        $('body').append('<div class="sxs-layer-shade '+(opt.skin || '')+'">\n' +
            '<div class="sxs-layer-dialog" style="width: '+(opt.width === undefined ? '300px' : opt.width)+'">\n' +
            '<div class="sxs-layer-header">\n' +
            '<div class="sxs-layer-title">\n' +
            '<span>'+ (opt.title === undefined ? '提示' : opt.title) +'</span>\n' +
            '</div>\n' +
            '<div class="layer-close-btn"></div>\n' +
            '</div>\n' +
            '<div class="sxs-layer-body">\n' +
            (content || '') +
            '</div>\n' +
            '<div class="sxs-layer-footer">\n' +
            '<span class="layer-btn layer-submit">'+(opt.btn ? opt.btn[1] : '确定')+'</span>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>')
        if(typeof fun === "function") {
            $('body').on('click','.layer-submit', function () {
                fun()
            })
        } else {
            $('body').on('click','.layer-submit', function () {
                $('body .sxs-layer-shade').remove()
            })
        }
    },
    confirm: function (content, options, submitFun, cancelFun) {
        var opt = options || {}
        $('body').append('<div class="sxs-layer-shade '+(opt.skin || '')+'">\n' +
            '<div class="sxs-layer-dialog" style="width: '+(opt.width === undefined ? '400px' : opt.width)+'">\n' +
            '<div class="sxs-layer-header">\n' +
            '<div class="sxs-layer-title">\n' +
            '<span>'+ (opt.title === undefined ? '提示' : opt.title) +'</span>\n' +
            '</div>\n' +
            '<div class="layer-close-btn"></div>\n' +
            '</div>\n' +
            '<div class="sxs-layer-body">\n' +
            (content || '') +
            '</div>\n' +
            '<div class="sxs-layer-footer">\n' +
            '<span class="layer-btn layer-cancel">'+(opt.btn ? (opt.btn[0] ? opt.btn[0] : '取消') : '取消')+'</span>\n' +
            '<span class="layer-btn layer-submit">'+(opt.btn ? (opt.btn[1] ? opt.btn[1] : '确定') : '确定')+'</span>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>')
        if(typeof submitFun === "function") {
            $('body').on('click','.layer-submit', function () {
                submitFun()
            })
        } else {
            $('body').on('click','.layer-submit', function () {
                $('body .sxs-layer-shade').remove()
            })
        }
        if(typeof cancelFun === "function") {
            $('body').on('click','.layer-cancel', function () {
                cancelFun()
            })
        } else {
            $('body').on('click','.layer-cancel', function () {
                $('body .sxs-layer-shade').remove()
            })
        }
    },
    open: function (content, options) {
        var opt = options || {}
        $('body').append('<div class="sxs-layer-shade '+(opt.skin || '')+'">\n' +
            '<div class="sxs-layer-dialog" style="width: '+(opt.width === undefined ? '400px' : opt.width)+';height: '+
            (opt.height === undefined ? 'auto' : opt.height)+'">\n' +
            '<div class="sxs-layer-header">\n' +
            '<div class="sxs-layer-title">\n' +
            '<span>'+ (opt.title || '') +'</span>\n' +
            '</div>\n' +
            '<div class="layer-close-btn"></div>\n' +
            '</div>\n' +
            '<div class="sxs-layer-body">\n' +
            (content || '') +
            '</div>\n' +
            '</div>\n' +
            '</div>')
    },
    toast: function (content,time) {
        var time = time || 2000;
        $('body').append('<div class="sxs-layer-shade sxs-toast-shade">' +
            '<span class="sxs-toast">'+content+'</span>' +
            '</div>')
        setTimeout(function () {
            $('body .sxs-layer-shade').remove()
        },time)
    },
    close: function () {
        $('body').on('click','.layer-close-btn', function () {
            $('body .sxs-layer-shade').remove()
        })
    },
    closeAll: function () {
        $('.layer-close-btn').trigger('click')
    }
};
sxsLayer.init()