﻿var querystring = document.currentScript.src.substring(document.currentScript.src.indexOf("?"));
var urlParams = new URLSearchParams(querystring);
$.ajax({
    url: '/assets/js/custom/commonjs_token.js?' + urlParams,
    async: false,
    dataType: "script",
    cache: true,
});

var contentType = "";
var searchAddress = false;

$(document).ready(function () {

    var showAd = [];
    var prepareAd = [];
    var intAdCount = availableAd.length;
    var d = new Date();

    if (intAdCount == 4) {
        if (d.getSeconds() >= 45) {
            showAd.push(availableAd[3]);
        } else if (d.getSeconds() >= 30) {
            showAd.push(availableAd[2]);
        } else if (d.getSeconds() >= 15) {
            showAd.push(availableAd[1]);
        } else {
            showAd.push(availableAd[0]);
        }
    } else if (intAdCount == 3) {
        if (d.getSeconds() >= 40) {
            showAd.push(availableAd[2]);
        } else if (d.getSeconds() >= 20) {
            showAd.push(availableAd[1]);
        } else {
            showAd.push(availableAd[0]);
        }
    } else if (intAdCount == 2) {
        if (d.getSeconds() >= 30) {
            showAd.push(availableAd[1]);
        } else {
            showAd.push(availableAd[0]);
        }
    } else if (intAdCount == 1) {
        showAd.push(availableAd[0]);
    }

    if (showAd.length > 0) {
        prepareAd.push(gotAd[0]);
    }

    if ($('.searchautocomplete').length) {
        $('.searchautocomplete').autocomplete({
            open: function () {
                if (showAd.length > 0) {
                    $('.ui-autocomplete').prepend("<li class='mb-2'>" + showAd[0] + "</li>");
                }
            },
            source: function (request, response) {
                var searchTerm = request.term;
                var filterBy = $('.filterby').val();

                $.ajax({
                    dataType: "json",
                    type: 'Get',
                    url: '/searchHandler',
                    data: { term: searchTerm, filterby: filterBy },
                    success: function (data) {
                        if (showAd.length > 0) {
                            data = prepareAd.concat(data);
                        }
                        response($.map(data, function (item) {
                            return {
                                label: item.split('\t')[0],
                                value: item.split('\t')[1],
                                desc: item.split('\t')[2],
                                typeval: item.split('\t')[3],
                                checkMark: item.split('\t')[4],
                                logo: item.split('\t')[5]
                            };
                        }));
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                    }
                });
            },
            autoFocus: true,
            delay: 350,
            minLength: 0,
            select: function (event, ui) {

                var typeval = ui.item.typeval;
                var searchkey = $("#txtSearchInput").val().trim();
                var intRegex = /^\d+$/;

                if (typeval == "" && (ui.item.label == "Addresses" || ui.item.label == "Private")) {
                    typeval = 3;
                    ui.item.value = $("#hdnSearchText").val();
                }
                else if (typeval == "" && ui.item.label == "Tokens") {
                    typeval = 2;
                    ui.item.value = $("#hdnSearchText").val();
                }
                else if (typeval == "" && ui.item.label == "Labels") {
                    typeval = 5;
                    ui.item.value = $("#hdnSearchText").val();
                }
                else if (typeval == "" && ui.item.label == "ShowAds") {

                    ui.item.value = $("#hdnSearchText").val();

                    /*if (searchkey.startsWith("0x") == false && (searchkey.endsWith(".eth") == true || searchkey.endsWith(".xyz") == true || searchkey.endsWith(".luxe") == true)) {*/
                    if (searchkey.endsWith(".eth") == true || searchkey.endsWith(".xyz") == true || searchkey.endsWith(".luxe") == true) {
                        typeval = 6;
                    } else if (searchkey.startsWith("0x") == true && searchkey.length == 42) {
                        typeval = 10;
                    } else if (searchkey.startsWith("0x") == false && searchkey.length == 40) {
                        typeval = 11;
                    } else if (searchkey.startsWith("0x") == true && searchkey.length == 66) {
                        typeval = 7;
                    } else if (searchkey.startsWith("0x") == false && searchkey.length == 64) {
                        typeval = 8;
                    } else if (intRegex.test(searchkey) == true) {
                        typeval = 9;
                    } else if ($("#hdnSearchLabel").val() == "Addresses" || $("#hdnSearchLabel").val() == "Private") {
                        typeval = 3;
                    } else if ($("#hdnSearchLabel").val() == "Tokens") {
                        typeval = 2;
                    } else if ($("#hdnSearchLabel").val() == "Labels") {
                        typeval = 5;
                    }
                }

                $(this).val('Searching ...');
                if (typeval == 1) {
                    event.preventDefault();
                    window.location.href = '/token/' + ui.item.label;
                } else if (typeval == 2) {
                    event.preventDefault();
                    window.location.href = '/token/' + ui.item.value;
                } else if (typeval == 3) {
                    event.preventDefault();
                    window.location.href = '/address/' + ui.item.value;
                } else if (typeval == 4) {
                    event.preventDefault();
                    window.location.href = '/address/' + ui.item.label;
                } else if (typeval == 5) {
                    event.preventDefault();
                    window.location.href = '/labelcloud/' + ui.item.value;
                } else if (typeval == 6) {
                    event.preventDefault();
                    window.location.href = '/name-lookup-search?id=' + searchkey;
                } else if (typeval == 7) {
                    event.preventDefault();
                    window.location.href = '/tx/' + searchkey;
                } else if (typeval == 8) {
                    event.preventDefault();
                    window.location.href = '/tx/0x' + searchkey;
                } else if (typeval == 9) {
                    event.preventDefault();
                    window.location.href = '/block/' + searchkey;
                } else if (typeval == 10) {
                    event.preventDefault();
                    window.location.href = '/address/' + searchkey;
                } else if (typeval == 11) {
                    event.preventDefault();
                    window.location.href = '/address/0x' + searchkey;
                } else {
                    window.location.href = '/search?f=0&q=' + searchkey;
                }
            }
        }).focus(function (event) {
            $(this).autocomplete("search", "");
            $(".ui-helper-hidden-accessible").hide();
            event.preventDefault();
        }).addClass("list-unstyled py-3 mb-0").data("ui-autocomplete")._renderItem = function (ul, item) {

            ul.addClass("list-unstyled bg-white shadow p-2 mb-0");

            var tickMark = '';
            var imglogo = '';

            if (item.checkMark === '1') {
                tickMark = "<i class='fa fa-badge-check text-info ms-auto'></i>";
            }
            if (item.logo !== '') {
                imglogo = "<img class='u-xs-avatar' style='margin-top: 1px;' src='" + GenerateTokenImageHTML(item.logo) + "'>";
            }
            else {
                if (contentType === "Addresses") {
                    var blockiesData = blockies.create({ seed: item.value.toLowerCase(), size: 8, scale: 16 }).toDataURL();
                    imglogo = "<img class='u-xs-avatar rounded-circle' style='margin-top: 1px;' src='" + blockiesData + "'>";
                }
                else {
                    imglogo = "<img class='u-xs-avatar' style='margin-top: 1px;' src='/images/main/empty-token.png'>";
                }
            }

            if (item.label == "ShowAds" && item.desc == "" && item.typeval == "" && item.checkMark == "" && item.logo == "") {
                item.value = "";
                return $("<li class='mb-2'>").append("").appendTo(ul);
            } else if (item.desc == "" && item.typeval == "" && item.checkMark == "" && item.logo == "") {

                contentType = item.label;
                item.value = "";

                return $("<li class='mb-2 ether-search-heading'>").append("<h5 class='h6 fw-bold bg-light px-2 py-1 rounded mb-2'>" + (item.label == "Private" ? "Private Name Tags" : item.label) + "</h5>").appendTo(ul);

            } else {

                if (searchAddress == false) {
                    if (contentType === "Labels") {
                        $("#hdnSearchText").val(item.label);
                        $("#hdnSearchLabel").val('Labels');
                    } else {
                        $("#hdnSearchText").val(item.value);
                        $("#hdnSearchLabel").val(contentType);
                    }
                    searchAddress = true;
                }

                if (contentType === "Private") {
                    var addressContent = item.label.substring(0, 42);
                    return $("<li class='mb-2'>")
                        .append("<a class='ether-search media rounded p-2' href='javascript:;'><div class='me-2'><span class='btn btn-icon btn-soft-secondary rounded-circle'><i class='fa fa-tag btn-icon__inner'></i></span></div><div class='media-body text-truncate'><span class='u-label u-label--value u-label--secondary text-dark'>" + (addressContent.length > 25 ? addressContent.substring(0, 25) + "..." : addressContent) + "</span></div></a>")
                        .appendTo(ul);
                }
                else if (contentType === "Tokens (ERC 20)" || contentType === "Tokens (ERC 721)" || contentType === "Tokens (ERC 1155)") {

                    var website = (item.desc.split('~')[1] != undefined ? "<div class='text-secondary fs-sm text-truncate'>" + item.desc.split('~')[1] + "</div>" : "");
                    var tokenType = item.desc.split('~')[2];
                    var price = "";
                    if ($("#hdnIsTestNet").val() == "False") {
                        price = (tokenType != "2" ? (item.desc.split('~')[3] != undefined ? "<span class='badge bg-soft-secondary me-2'>" + item.desc.split('~')[3] + "</span>" : "") : "");
                    }

                    return $("<li class='mb-2'>")
                        .append("<a class='ether-search media rounded p-2' href='javascript:;'><div class='me-2'>" + imglogo + "</div><div class='media-body text-truncate'><h6 class='d-flex align-items-center text-size-1 mb-0'><div class='text-truncate me-2'>" + item.label + "</div>" + price + tickMark + "</h6><span class='text-secondary text-truncate fs-sm'>" + item.value + "</span>" + website + "</div></a>")
                        .appendTo(ul);
                }
                else if (contentType === "Addresses") {
                    var addressContent = item.label.substring(0, 42);
                    return $("<li class='mb-2'>")
                        .append("<a class='ether-search media rounded p-2' href='javascript:;'><div class='me-2'>" + imglogo + "</div><div class='media-body text-truncate'><h6 class='text-size-1 mb-0 text-truncate'>" + addressContent + "</h6></div></a>")
                        .appendTo(ul);
                }
                else if (contentType === "Labels") {
                    return $("<li class='mb-2'>")
                        .append("<a class='ether-search media rounded p-2' href='javascript:;'><div class='me-2'><span class='btn btn-icon btn-soft-secondary rounded-circle'><i class='fa fa-tag btn-icon__inner'></i></span></div ><div class='media-body text-truncate'><h6 class='text-size-1 mb-0'>" + item.label.substring(0, 42) + "</h6></div></a>")
                        .appendTo(ul);
                }
            }
        };
    }
    
    $('.filterby').change(function () {
        var val = $('.searchautocomplete').val();
        $('.searchautocomplete').autocomplete('search', val);
    });

    $(".page-link").click(function (a) { var b = $("#spinwheel"); b.show(), setTimeout(function () { b.button("reset") }, 0) }),

        $("#txtSearchInput").val('');    
    $("#txtSearchInputMobile").val('');

}), window.onpageshow = function (a) {
    a.persisted && $("#spinwheel").hide();
};

var myfn_subscribeNewsletter = {
    spinner: '<div id="spinner-wrapper" style="height: 30px!important;"><i class="fas fa-circle-notch fa-spin spinner-wrapper__icon position-relativer text-primary fa-2x mb-2" style="top: unset"></i></div>',
    spinner_btn: '<i class="fas fa-circle-notch fa-spin fa-lg"></i>',
    startFn: function (el, text_el) {
        var self = this
        $(el).click(function (e) {
            $(el).prop("disabled", true);
            e.stopPropagation();
            e.preventDefault();
            $(el).html(self.spinner_btn)

            var strEmail = $(text_el).val().trim()
            var elEmailSubscribeModalBox = $("#emailSubscribeModalBox")
            var elEmailSubscribeModalBoxText = $("#emailSubscribeModalBoxText")
            elEmailSubscribeModalBoxText.html(self.spinner)
            elEmailSubscribeModalBox.modal("show")

            if (strEmail) {
                if (self.validateEmail(strEmail)) {
                    self.subscribeNewsletter(strEmail, function (data) {
                        if (data == 1) {
                            elEmailSubscribeModalBoxText.html('<div class="btn btn-icon btn-success rounded-circle mb-4"><i class="far fa-check btn-icon__inner lead"></i></div><h5 class="h4 mb-0">Success</h5><p class="mb-0">Thank you for subscribing to us!</p>')
                        } else if (data == 2) {
                            elEmailSubscribeModalBoxText.html('<div class="btn btn-icon btn-warning rounded-circle mb-4"><i class="far fa-exclamation-triangle btn-icon__inner lead"></i></div><h5 class="h4 mb-0">Warning</h5><p class="mb-0">Please provide a valid email address.</p>')
                        } else if (data == 3) {
                            elEmailSubscribeModalBoxText.html('<div class="btn btn-icon btn-warning rounded-circle mb-4"><i class="far fa-exclamation-triangle btn-icon__inner lead"></i></div><h5 class="h4 mb-0">Warning</h5><p class="mb-0">An unexpected error occurred. Please try again later.</p>')
                        } else if (data == 4) {
                            elEmailSubscribeModalBoxText.html('<div class="btn btn-icon btn-success rounded-circle mb-4"><i class="far fa-check btn-icon__inner lead"></i></div><h5 class="h4 mb-0">Success</h5><p class="mb-0">Thank you for subscribing to us! You will receive a confirmation email, please verify the email.</p>')
                        } else {
                            elEmailSubscribeModalBoxText.html('<div class="btn btn-icon btn-warning rounded-circle mb-4"><i class="far fa-exclamation-triangle btn-icon__inner lead"></i></div><h5 class="h4 mb-0">Warning</h5><p class="mb-0">An unexpected error occurred. Please try again later.</p>')
                        }
                        elEmailSubscribeModalBox.modal("show")
                        $(el).html("Subscribe")
                        $(el).prop("disabled", false);
                    })
                } else {
                    elEmailSubscribeModalBoxText.html('<div class="btn btn-icon btn-warning rounded-circle mb-4"><i class="far fa-exclamation-triangle btn-icon__inner lead"></i></div><h5 class="h4 mb-0">Warning</h5><p class="mb-0">Please provide a valid email address.</p>')
                    elEmailSubscribeModalBox.modal("show")
                    $(el).html("Subscribe")
                    $(el).prop("disabled", false);
                }
            }
            else {
                elEmailSubscribeModalBoxText.html('<div class="btn btn-icon btn-warning rounded-circle mb-4"><i class="far fa-exclamation-triangle btn-icon__inner lead"></i></div><h5 class="h4 mb-0">Warning</h5><p class="mb-0">Sorry, email cannot be blank.</p>')
                elEmailSubscribeModalBox.modal("show")
                $(el).html("Subscribe")
                $(el).prop("disabled", false);
            }
        });
    },
    subscribeNewsletter: function (email, callback) {
        var self = this;

        $.ajax({
            type: 'Get',
            url: '/siteHandler.ashx',
            data: {
                email: email,
                action: "subscribeNewsletter",
                sid: sid
            },
        }).done(function (data, textStatus, xhr) {
            if (data) {
                callback(data)
            } else {
                callback(0)
            }
        });
    },
    validateEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //return re.test(email);
        return true
    },
};
