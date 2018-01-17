var A;

A = {
  w: $(window),
  dropper: false,
  logApi: function(data, cd) {
    return console.log(data, cd);
  },
  reload: function() {
    return window.location.reload();
  },
  display: function(x, y) {
    if (y) {
      return $(x).show();
    } else {
      return $(x).hide();
    }
  },
  disabled: function(x, y) {
    if (y) {
      return $(x).removeAttr('disabled');
    } else {
      return $(x).attr('disabled', true);
    }
  },
  notify: function(x, html) {
    if (html == null) {
      html = '';
    }
    return x.queue(function() {
      x.html(html).show(300);
      return x.dequeue();
    });
  },
  stopPropogation: function(e) {
    return e.stopPropagation();
  },
  toggleInfoText: function(id) {
    var $t;
    $t = $("#info_text_" + id);
    $t.toggleClass('open');
    if (!$t.hasClass('open')) {
      return $t.hide(300);
    } else {
      return $t.show(300);
    }
  },
  reach: function(x) {
    console.log('reach', x);
    return yaCounter45320307.reachGoal(x);
  },
  mail: /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/,
  testMail: function(x) {
    return A.mail.test(x);
  },
  serialize: function(form) {
    var a, i, j, len, o;
    a = $(form).serializeArray();
    o = {};
    for (j = 0, len = a.length; j < len; j++) {
      i = a[j];
      o[i.name] = i.value;
    }
    return o;
  },
  htmlspecialchars: function(str) {
    if (typeof str === "string") {
      str = str.replace(/&/g, "&amp;");
      str = str.replace(/"/g, '&#34;');
      str = str.replace(/'/g, "&#039;");
      str = str.replace(/</g, "<");
      str = str.replace(/>/g, ">");
    }
    return str;
  },
  MFNL: function(x, url, callback, data, cd) {
    var $x;
    $x = $(x);
    $x.ajaxForm();
    $x.submit(function() {
      var $b, $b2, $i;
      A.I.waitInput($i = $("input[type=submit]", $x));
      A.I.waitButton($b = $("button[type=submit]", $x));
      A.I.waitButton($b2 = $("button[type=button]", $x));
      return $(this).ajaxSubmit({
        url: url,
        data: data,
        type: "POST",
        method: "POST",
        success: function(data) {
          A.I.unwaitInput($i);
          A.I.unwaitButton($b);
          A.I.unwaitButton($b2);
          return typeof callback === "function" ? callback(data, cd) : void 0;
        },
        error: function() {
          A.I.unwaitInput($i);
          return A.I.unwaitButton($b);
        }
      });
    });
    return $(x).removeClass(x);
  },
  createRequestObject: function() {
    if (typeof XMLHttpRequest === 'undefined') {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
      } catch (undefined) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
      } catch (undefined) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (undefined) {}
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (undefined) {}
      throw new Error("This browser does not support XMLHttpRequest.");
    }
    return new XMLHttpRequest();
  },
  domen: '',
  setCookie: function(k, v, date) {
    var c, cook, domain;
    domain = ' domain=*.' + window.location.host + ';';
    domain = ' domain=.' + A.domen + ';';
    cook = k + "=" + v + '; expires=' + new Date(date ? date : new Date().getTime() + 5184000000).toGMTString() + '; path=/;';
    document.cookie = cook + domain;
    c = A.getCookie('k');
    if (c !== v) {
      document.cookie = cook;
    }
    return cook;
  },
  getCookie: function(name) {
    var pattern, regexp;
    pattern = "(?:; )?" + name + "=([^;]*);?";
    regexp = new RegExp(pattern);
    if (regexp.test(document.cookie)) {
      return decodeURIComponent(RegExp["$1"]);
    }
    return false;
  },
  init: function() {
    A.dropper = !(typeof window.FileReader === 'undefined');
    A.content = $("#content");
    A.content_padding = 90;
    A.P.init();
    A.W.init();
    A.resize();
    return A.scroll();

    /*
    $('.fancy').fancybox({
      openEffect	: 'none',
      closeEffect	: 'none'
    });
     */
  },
  ready: function() {
    A.w.resize(function() {
      return A.resize();
    });
    A.w.scroll(function() {
      return A.scroll();
    });
    A.P.ready();
    A.F.ready();
    return A.UI.ready();
  },
  resize: function() {
    return A.P.resize();
  },
  scroll: function() {
    return A.P.scroll();
  }
};

$(document).ready(function() {
  $('.advert, .scroll').on('click', 'a', function(event) {
    var id, top;
    event.preventDefault();
    id = $(this).attr('href');
    top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });
  $('.btn').click(function() {
    $('.btn, .std .price span, .std .price small, .pro .price span, .pro .price small').toggleClass('select');
    $('.val').toggleClass('elected');
  });
  $('.open-mob').click(function() {
    $('.wrap').addClass('slide_content');
    $('#d_mobile_head').addClass('slide_content');
    $('#hide-menu').removeClass('slide_menu');
    $('body').css('overflow', 'hidden');
    $('.wrap').css('opacity', '0.5');
    $('#d_mobile_head').css('opacity', '0.5');
    $('#close-hover').css('display', 'block');
    $('#hide-menu').css('box-shadow', '-3px 0 22px #7a7c8a');
  });
  $('.close-menu').click(function() {
    $('.wrap').removeClass('slide_content');
    $('#d_mobile_head').removeClass('slide_content');
    $('#hide-menu').addClass('slide_menu');
    $('body').css('overflow', 'initial');
    $('.wrap').css('opacity', '1');
    $('#d_mobile_head').css('opacity', '1');
    $('#close-hover').css('display', 'none');
    $('#hide-menu').css('box-shadow', 'none');
  });
  $('#close-hover').click(function() {
    $('.wrap').removeClass('slide_content');
    $('#d_mobile_head').removeClass('slide_content');
    $('#hide-menu').addClass('slide_menu');
    $('body').css('overflow', 'initial');
    $('.wrap').css('opacity', '1');
    $('#d_mobile_head').css('opacity', '1');
    $('#close-hover').css('display', 'none');
    $('#hide-menu').css('box-shadow', 'none');
  });
  $('.scroll').click(function() {
    $('.wrap').removeClass('slide_content');
    $('#d_mobile_head').removeClass('slide_content');
    $('#hide-menu').addClass('slide_menu');
    $('body').css('overflow', 'initial');
    $('.wrap').css('opacity', '1');
    $('#d_mobile_head').css('opacity', '1');
    $('#close-hover').css('display', 'none');
    $('#hide-menu').css('box-shadow', 'none');
  });
});

$(window).ready(function() {
  return A.ready();
});

$(window).load(function() {
  return A.init();
});

var API;

API = {
  init: function() {
    return API.uinit(API.U, '/api/');
  },
  isEmpty: function(o) {
    var i;
    for (i in o) {
      return false;
    }
    return true;
  },
  uinit: function(x, path) {
    var i, results;
    results = [];
    for (i in x) {
      if (i === "url") {
        continue;
      }
      if (!API.isEmpty[x[i]]) {
        API.uinit(x[i], path + i + '/');
      }
      if (x[i] === "") {
        x[i] = path + i + '/';
      }
      results.push(x[i].url = path + i + '/');
    }
    return results;
  },
  U: {
    one_report: {
      send: ""
    },
    account: {
      remind: "",
      newpass: "",
      uadd: "",
      uexit: "",
      login: "",
      text_id: "",
      update_data: "",
      ava: "",
      bg: "",
      bg2: "",
      form: {
        auth: "",
        reg: ""
      }
    },
    link: {
      stat: "",
      update: {
        pos: ""
      },
      uupdate: "",
      uadd: "",
      udelete: "",
      get: {
        edit: ""
      },
      mylist: '',
      mypubliclist: ''
    },
    spell: {
      spell: ""
    },
    login: {
      login: "",
      exit: "",
      exit_admin: "",
      admin: "",
      admin_login: ""
    },
    get: {
      form: {
        recall: "",
        map: "",
        advantages: "",
        map: "",
        about: "",
        partners: "",
        providers: "",
        contacts: "",
        calculator: "",
        docs: "",
        services: "",
        directions: "",
        projects: ""
      }
    }
  },
  GET: {
    r: function(u, d, c, cd) {
      d['nocache'] = (new Date()).getTime();
      return $.ajax({
        url: u,
        type: "POST",
        dataType: d.dataType !== void 0 ? d.dataType : "html",
        data: d,
        success: function(data) {
          if (c !== void 0) {
            return c(data, cd);
          }
        },
        error: function() {
          return c({
            error: 1
          }, cd);
        }
      });
    }
  }
};

$(window).ready(function() {
  return API.init();
});

A.DELETE = {
  init: function() {}
};

A.DROPPER = {
  id: 0,
  getNextId: function() {
    return A.DROPPER.id++;
  },
  create: function(x, url, data) {
    var res;
    res = new Array();
    if (A.dropper) {
      $(x).each(function() {
        var c;
        console.log(x, url);
        c = function(x) {
          var isMulti, o;
          isMulti = ((data != null ? data.multi : void 0) != null) && data.multi ? true : false;
          o = {};
          o.logo = $(x);
          o.ulogo = $(".over", o.logo);
          o.hlogo = $(".drop_help", o.logo);
          o.plogo = $(".drop_preview", o.logo);
          o.file = $("input[type=file]", o.logo);
          if (o.file.length === 0) {
            o.file = $('<input ' + (isMulti ? 'multiple' : '') + ' type="file" value="Выбрать файлы" name="imgs" />');
            o.hlogo.append(o.file);
            o.hlogo.append($('<span class="choose" onclick="$(this).prev().click()">Выбрать файл' + (isMulti ? 'ы' : '') + '</span>'));
          }
          o.file.attr('id', 'file_dropper_id_' + A.DROPPER.getNextId()).change(function() {
            var f;
            f = document.getElementById(o.file.attr('id'));
            return o.sendFiles(f.files);
          });
          o.logo.bind('dragenter', function() {
            o.logo.addClass('hover');
            return false;
          });
          o.sendFiles = function(files) {
            var bar, f, file, ref, ref1;
            o.loaded = 0;
            o.links = new Array();
            o.count = files.length;
            o.plogo.children().remove();
            for (file in files) {
              f = files[file];
              if (f !== void 0 && f.type !== void 0 && ((f != null ? (ref = f.type) != null ? ref.match(/image.*/) : void 0 : void 0) || (f != null ? (ref1 = f.type) != null ? ref1.match(/video.*/) : void 0 : void 0))) {
                bar = function(f) {
                  var b;
                  b = {};
                  o.hlogo.hide();
                  o.plogo.show();
                  b.$div = $('<div id="ulogo"/>').text(file.name).appendTo(o.plogo);
                  b.$prog = $('<div/>').addClass('progress').appendTo(b.$div);
                  b.$bar = $('<div/>').addClass('bar').appendTo(b.$prog);
                  b.$btxt = $('<div/>').addClass('bartxt').text('0%').appendTo(b.$prog);
                  b.flogo = file;
                  b.reader = new FileReader();
                  b.reader.onloadend = function(e) {
                    var body, boundary, d, xhr;
                    xhr = A.createRequestObject();
                    xhr.upload.addEventListener("progress", function(e) {
                      var pro;
                      if (e.lengthComputable) {
                        pro = (e.loaded * 100) / e.total;
                        b.$bar.css({
                          width: pro + "%"
                        });
                        return b.$btxt.text((pro.toFixed(0)) + "%");
                      }
                    }, false);
                    xhr.onreadystatechange = function() {
                      if (this.readyState === 4) {
                        if (this.status === 200) {
                          if (((data != null ? data.multi : void 0) != null) && data.multi) {
                            o.loaded++;
                            if (this.responseText !== "error") {
                              o.links.push(this.responseText);
                            } else {

                            }
                            if (((data != null ? data.callback : void 0) != null)) {
                              data.callback(this.responseText, data.cd);
                            }
                            if (o.loaded === o.count) {
                              if ((data != null ? data.callbackAll : void 0) != null) {
                                return data.callbackAll(o.links, data.cd);
                              } else {
                                o.plogo.hide();
                                return o.hlogo.show();
                              }
                            }
                          } else {
                            o.logo.css("background-image", 'url("' + this.responseText + '")').addClass('have');
                            if (((data != null ? data.callback : void 0) != null)) {
                              data.callback(this.responseText, data.cd);
                            } else {

                            }
                            return o.plogo.hide();
                          }
                        } else {

                        }
                      }
                    };
                    xhr.open("POST", url);
                    boundary = "xxxxxxxxx";
                    xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + boundary);
                    xhr.setRequestHeader("Cache-Control", "no-cache");
                    body = "--" + boundary + "\r\n";
                    body += "Content-Disposition: form-data; name='myFile'; filename='" + f.name + "'\r\n";
                    body += 'Content-Type: ' + f.type + '\r\n\r\n';
                    body += b.reader.result + "\r\n";
                    body += "--" + boundary + "\r\n";
                    for (d in data) {
                      body += 'Content-Disposition: form-data; name="' + d + '"' + "\r\n\r\n";
                      body += data[d] + "\r\n";
                      body += "--" + boundary + "\r\n";
                    }
                    if (xhr.sendAsBinary) {
                      return xhr.sendAsBinary(body);
                    } else {
                      return xhr.send(body);
                    }
                  };
                  return b.reader.readAsDataURL(f);
                };
                bar(f);
              }
              if (isMulti) {
                continue;
              } else {
                break;
              }
            }
            return false;
          };
          o.ulogo.bind({
            dragover: function() {
              return false;
            },
            dragleave: function() {
              o.logo.removeClass('hover');
              return false;
            },
            drop: function(e) {
              o.logo.removeClass('hover');
              o.files = e.originalEvent.dataTransfer.files;
              o.sendFiles(o.files);
              return false;
            }
          });
          return o;
        };
        return res.push(c(this));
      });
    }
    return res;
  }
};

A.F = {
  ready: function() {
    A.F.report = $("#report");
    A.F.res = $("#res");
    return A.F.loader = $("#loader");
  },
  exit: function() {
    A.setCookie('uid', '---');
    A.setCookie('uim', '---');
    return window.location.href = "/";
  },
  reg: function(f) {
    var $f, $pass, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      name: $.trim($("input[name=name]", $f).val()),
      email: $.trim($("input[name=email]", $f).val()),
      pass: $.trim(($pass = $("input[name=pass]", $f)).val())
    };
    $res = $(".res", $f).hide(300);
    if (s.email === "") {
      A.notify($res, 'Введите email');
    } else if (!A.mail.test(s.email)) {
      A.notify($res, 'Введите корректный email');
    } else if (s.pass === "" && $pass.length > 0) {
      A.notify($res, 'Введите пароль');
    } else {
      A.I.waitButton($("button", $f));
      A.I.waitInput($("input[type=submit]", $f));
      API.GET.r(API.U.account.uadd, s, A.F.aAuth, {
        f: $f,
        r: $res,
        reg: true
      });
    }
    return false;
  },
  aAuth: function(data, cd) {
    A.I.unwaitButton($("button", cd.f));
    A.I.unwaitInput($("input[type=submit]", cd.f));
    if (data.e === 1) {
      return A.notify(cd.r, data.m);
    } else {
      window.location.href = "/lk/";
      if (data.p !== void 0) {
        A.setCookie('uid', data.p.uid);
        return A.setCookie('uim', data.p.uim);
      }
    }
  },
  auth: function(f) {
    var $f, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      email: $.trim($("input[name=email]", $f).val()),
      pass: $.trim($("input[name=pass]", $f).val()),
      nocache: (new Date).getTime()
    };
    $res = $(".res", $f).hide(300);
    if (s.email === "") {
      A.notify($res, 'Введите email');
    } else if (s.pass === "") {
      A.notify($res, 'Введите пароль');
    } else {
      A.I.waitButton($("button", $f));
      A.I.waitInput($("input[type=submit]", $f));
      API.GET.r(API.U.account.login, s, A.F.aAuth, {
        f: $f,
        r: $res
      });
    }
    return false;
  },
  remind: function(f) {
    var $f, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      email: $.trim($("input[name=email]", $f).val()),
      nocache: (new Date).getTime()
    };
    $res = $(".res", $f).hide(300);
    if (s.email === "") {
      A.notify($res, 'Введите email');
    } else {
      A.I.waitButton($("button", $f));
      A.I.waitInput($("input[type=submit]", $f));
      API.GET.r(API.U.account.remind, s, A.F.aRemind, {
        f: $f,
        r: $res
      });
    }
    return false;
  },
  newPass: function(f) {
    var $f, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      pass1: $.trim($("input[name=pass1]", $f).val()),
      pass2: $.trim($("input[name=pass2]", $f).val()),
      key: $.trim($("input[name=key]", $f).val()),
      hash: $.trim($("input[name=hash]", $f).val()),
      id: $.trim($("input[name=id]", $f).val()),
      nocache: (new Date).getTime()
    };
    $res = $(".res", $f).hide(300);
    if (s.pass1 === "") {
      A.notify($res, 'Введите пароль');
    } else if (s.pass2 === "") {
      A.notify($res, 'Повторите пароль');
    } else if (s.pass1 !== s.pass2) {
      A.notify($res, 'Пароли должны совпадать');
    } else {
      A.I.waitButton($("button", $f));
      A.I.waitInput($("input[type=submit]", $f));
      API.GET.r(API.U.account.newpass, s, A.F.aRemind, {
        f: $f,
        r: $res
      });
    }
    return false;
  },
  aRemind: function(data, cd) {
    A.I.unwaitButton($("button", cd.f));
    A.I.unwaitInput($("input[type=submit]", cd.f));
    return A.notify(cd.r, data.m);
  },
  beforeAngularSubscribe: function(f) {
    var $r, e;
    e = $.trim($("input[name=email]", $(f)).val());
    $r = $(".res", $(f)).hide(300);
    if (A.mail.test(e)) {
      return true;
    } else {
      A.notify($r, "Введите корректный email");
      return false;
    }
  },
  text_id: function(f) {
    var $b, $f, $res, s;
    $f = $(f);
    s = {
      dataType: "JSON",
      text_id: $.trim($("input[name=text_id]", $f).val())
    };
    $res = $(".res", $f).hide(300);
    if (s.text_id === "") {
      A.notify($res, 'Введите адрес странички');
    } else {
      A.I.waitButton($b = $("button", $f));
      API.GET.r(API.U.account.text_id, s, A.F.aText_id, {
        b: $b,
        f: $f,
        r: $res
      });
    }
    return false;
  },
  aText_id: function(data, cd) {
    A.I.unwaitButton(cd.b);
    $("input[name=text_id]").val(data.text_id);
    if (data.e === 1) {
      return A.notify(cd.r, data.m);
    } else {
      return A.reload();
    }
  },
  updateData: function(f) {
    var $b, $f, $res, s;
    $f = $(f);
    s = A.serialize($f);
    s.dataType = "JSON";
    $res = $(".res", $f).hide(300);
    A.I.waitButton($b = $("button", $f));
    API.GET.r(API.U.account.update_data, s, A.F.aUpdateData, {
      b: $b,
      f: $f,
      r: $res
    });
    return false;
  },
  aUpdateData: function(data, cd) {
    A.I.unwaitButton(cd.b);
    switch (data.col) {
      case 'name':
        return $("#name").html(data.val);
      case 'hello':
        return $("#hello").html(data.val);
      case 'link':
        if (parseInt(data.e) === 1) {
          return A.notify(cd.r, data.m);
        } else {
          A.notify(cd.r, data.m);
          return setTimeout(function() {
            return window.location.href = data.link;
          }, 1000);
        }
    }
  },
  initEditPage: function() {
    A.MFNL('.mfnl', API.U.account.ava, A.F.aUploadAva, {
      folder: 'ava'
    }, {
      c: ".mfnl"
    });
    A.MFNL('.mfnl2', API.U.account.bg, A.F.aUploadBg, {
      folder: 'ava'
    }, {
      c: ".mfnl2"
    });
    A.MFNL('.mfnl3', API.U.account.bg2, A.F.aUploadBg2, {
      folder: 'ava'
    }, {
      c: ".mfnl3"
    });
    return $(".mfnl input[type=file],.mfnl2 input[type=file],.mfnl3 input[type=file]").change(function() {
      return $(this).parent().submit();
    });
  },
  aUploadAva: function(data, cd) {
    var $r;
    if (typeof data === 'string') {
      data = eval('(' + data + ')');
    }
    $r = $(".res", $(cd.c)).hide(300);
    if (data.e === 1) {
      A.notify($r, data.m);
    }
    if ((data != null ? data.link : void 0) != null) {
      return $(".ava,.ava_upload").css('background-image', 'url(' + data.link + ')');
    }
  },
  aUploadBg: function(data, cd) {
    var $r;
    if (typeof data === 'string') {
      data = eval('(' + data + ')');
    }
    $r = $(".res", $(cd.c)).hide(300);
    if (data.e === 1) {
      A.notify($r, data.m);
    }
    if ((data != null ? data.link : void 0) != null) {
      $(".ava_back").css('background-image', 'url(' + data.link + ')');
      return $("#page").css('background-image', 'url(' + data.link + ')');
    }
  },
  aUploadBg2: function(data, cd) {
    var $r;
    console.log(data);
    if (typeof data === 'string') {
      data = eval('(' + data + ')');
    }
    $r = $(".res", $(cd.c)).hide(300);
    if (data.e === 1) {
      A.notify($r, data.m);
    }
    if ((data != null ? data.link : void 0) != null) {
      $(".ava_back2").css('background-image', 'url(' + data.link + ')');
      return $("#cont_back").css('background-image', 'url(' + data.link + ')');
    }
  },
  setPageClass: function(id, c) {
    $("#page").css('background-image', '').attr('class', '').addClass(c);
    return API.GET.r(API.U.account.update_data, {
      col: 'class',
      val: id
    });
  },
  setPageClass2: function(id, c) {
    $("#cont_back").css('background-image', '').attr('class', '').addClass(c);
    return API.GET.r(API.U.account.update_data, {
      col: 'class2',
      val: id
    });
  },
  addLink: function(type) {
    return API.GET.r(API.U.link.uadd, {
      type: type
    }, A.F.aAddLink);
  },
  aAddLink: function(data) {
    A.F.updateEditLink();
    return A.F.updateMyLinks();
  },
  deleteLink: function(id) {
    if (confirm("Вы действительно хотите удалить ссылку?")) {
      API.GET.r(API.U.link.udelete, {
        id: id
      }, A.F.updateMyLinks);
      return $("tr[data-id=" + id + "]").remove();
    }
  },
  updateEditLink: function() {
    return API.GET.r(API.U.link.mylist, {}, function(data) {
      $("#mylinks").html(data);
      return A.F.initEditLinks();
    });
  },
  updateLink: function(id, i) {
    return API.GET.r(API.U.link.uupdate, {
      id: id,
      type: $(i).attr('data-type'),
      val: $(i).val()
    }, A.F.updateMyLinks);
  },
  updateMyLinks: function() {
    return API.GET.r(API.U.link.mypubliclist, {}, function(data) {
      $("#fake_apps").html(data);
      return A.P.setSlides();
    });
  },
  initEditLinks: function() {
    var base;
    return typeof (base = $('#mylinks .sortable')).sortable === "function" ? base.sortable({
      axis: 'y',
      opacity: 0.5,
      distance: 5,
      scroll: false,
      cursor: "move",
      tolerance: "pointer",
      cancel: ".deleter, input",
      start: function(event, ui) {},
      sort: function(event, ui) {
        var $p;
        return ($p = $(ui.placeholder[0])).html(ui.helper.context.innerHTML);
      },
      stop: function() {
        var arr;
        arr = [];
        $('#mylinks tr').each(function() {
          return arr.push($(this).attr('data-id'));
        });
        return API.GET.r(API.U.link.update.pos, {
          pos: arr
        }, A.F.updateMyLinks);
      }
    }) : void 0;
  },
  statLink: function(id) {
    return API.GET.r(API.U.link.stat, {
      id: id
    });
  }
};

A.I = {
  waitInput: function(x) {
    return $(x).each(function() {
      var button, click, val;
      button = $(this);
      click = button.attr('onclick');
      val = $.trim(button.val());
      return button.attr('onclick', '').attr('data-val', val).val(val === "" ? '' : 'Отправляется...').addClass("wait").attr('data-onclick', click).attr('disabled', 'disabled');
    });
  },
  unwaitInput: function(x) {
    return $(x).each(function() {
      var b;
      b = $(this);
      return b.val(b.attr('data-val')).removeClass("wait").attr('onclick', b.attr('data-onclick')).removeAttr('disabled');
    });
  },
  waitButton: function(x) {
    return $(x).each(function() {
      var button, click, val;
      button = $(this);
      click = button.attr('onclick');
      val = $.trim(button.html());
      if (val !== "?") {
        return button.attr('onclick', '').attr('data-val', val).html(val === "" || val === "&nbsp;" ? '' : 'Отправляется...').addClass("wait").attr('data-onclick', click).attr('disabled', 'disabled');
      }
    });
  },
  unwaitButton: function(x) {
    return $(x).each(function() {
      var b;
      b = $(this);
      return b.html(b.attr('data-val')).removeClass("wait").attr('onclick', b.attr('data-onclick')).removeAttr('disabled');
    });
  }
};

A.ME = {
  copyTM: null,
  init: function() {
    var clipboard;
    clipboard = new Clipboard('#copy');
    return clipboard.on('success', function(e) {
      $("#copy").addClass('success').text('Скопировано');
      e.clearSelection();
      if (A.ME.copyTM !== null) {
        clearTimeout(A.ME.copyTM);
      }
      return A.ME.copyTM = setTimeout(function() {
        return $("#copy").removeClass('success').text('Копировать');
      }, 5000);
    });
  }
};

A.P = {
  init: function() {},
  ready: function() {
    var $f, $h;
    A.P.body = $("body");
    $("#content").css({
      paddingBottom: $h = ($f = $("#b_footer")).outerHeight()
    });
    $f.css({
      marginTop: -$h
    });
    A.P.animate = $(".ani");
    A.P.pages = $(".pages .page");
    A.P.bpages = $("#pages button");
    A.P.page = $("#page");
    A.P.cont = $(".cont");
    A.P.apps = $(".cont .apps");
    A.P.setSlides();
    A.P.resize();
    return A.P.cont.addClass('show');
  },
  setSlides: function() {
    var $s, c, i, isWidget, j, k, l, len, len1, maxc, maxr, now, row, rows, s, slides;
    if (A.P.page !== void 0) {
      slides = [];
      now = 0;
      rows = 0;
      row = 0;
      maxc = (A.w.width() <= 413 ? 3 : 4);
      maxr = (A.w.height() <= 686 ? 2 : 3);
      isWidget = $("#page").hasClass('widget');
      if (isWidget) {
        maxr = 1.5;
      }
      $("#fake_apps .app").each(function() {
        var $t, type;
        if (slides[now] === void 0) {
          slides[now] = [];
        }
        $t = $(this);
        slides[now].push($t);
        type = $t.attr('data-type');
        if (type !== void 0) {
          if (type === 'site') {
            row = 0;
            rows += 0.5;
            if (rows >= maxr) {
              now++;
              return rows = 0;
            }
          } else {
            row++;
            if (row === 1) {
              rows++;
            }
            if (row === maxc) {
              row = 0;
              if (rows >= maxr) {
                now++;
                return rows = 0;
              }
            }
          }
        }
      });
      s = [];
      c = 0;
      $("#apps .slide").each(function() {
        return A.P.apps.trigger('remove.owl.carousel', 0);
      });
      for (k = 0, len = slides.length; k < len; k++) {
        i = slides[k];
        $s = $('<div class="slide"></div>');
        for (l = 0, len1 = i.length; l < len1; l++) {
          j = i[l];
          $s.append(j);
        }
        if (!A.P.apps.hasClass('owl-loaded')) {
          A.P.apps.append($s);
        } else {
          A.P.apps.trigger('add.owl.carousel', [$s]);
        }
      }
      A.P.apps.trigger('refresh.owl.carousel');
      if (!A.P.apps.hasClass('owl-loaded')) {
        A.P.apps.owlCarousel({
          nav: true,
          smartSpeed: 500,
          items: 1,
          dots: true
        });
      }
    }
    return A.P.resize();
  },
  scroll: function() {
    var ref;
    return (ref = A.P.animate) != null ? ref.each(function() {
      var $t;
      if (!($t = $(this)).hasClass('animated')) {
        if (($t.offset().top - (A.w.scrollTop() + A.w.height()) < 0) && ($t.offset().top + $t.height()) > (A.w.scrollTop() + 5)) {
          return $t.addClass('animated').addClass($t.attr('data-ani'));
        }
      }
    }) : void 0;
  },
  resize: function() {
    var h;
    if (A.P.cont !== void 0 && A.P.page !== void 0) {
      h = Math.max(50, (A.w.height() - A.P.cont.height()) / 2);
      return A.P.page.css({
        paddingTop: h
      });
    }
  },
  setPage: function(x) {
    A.P.pages.removeClass('selected');
    $(A.P.pages[x]).addClass('selected');
    A.P.bpages.removeClass('selected');
    return $(A.P.bpages[x]).addClass('selected');
  },
  openBar: function() {
    return A.P.body.css('overflow', 'hidden');
  },
  closeBar: function() {
    return A.P.body.css('overflow', 'auto');
  },
  showLeftbar: function() {
    A.P.openBar();
    return $("#leftbar").addClass('show');
  },
  showRightbar: function() {
    A.P.openBar();
    return $("#rightbar").addClass('show');
  },
  hideLeftbar: function() {
    A.P.closeBar();
    return $("#leftbar").removeClass('show');
  },
  hideRightbar: function() {
    A.P.closeBar();
    return $("#rightbar").removeClass('show');
  }
};

A.TOGGLE = {
  init: function() {}
};

A.UI = {
  ready: function() {
    return A.UI.accardeon();
  },
  accardeon: function(x) {
    var $cont, $pages, $t, $titles;
    if (x == null) {
      x = '.accardeon';
    }
    $t = $(x);
    $pages = $(".adeon_tab", $t);
    $titles = $(".adeon_title", $t);
    $cont = $(".adeon_cont", $t);
    $titles.append($("<span></span>"));
    $titles.click(function() {
      var $ti, p;
      $ti = $(this);
      p = $ti.parent();
      if (!p.hasClass('open')) {
        $(".adeon_cont", p.parent()).hide(500);
        $pages.removeClass('open');
        p.addClass('open');
        return $(".adeon_cont", p).show(500);
      }
    });
    return $(".adeon_tab.open .adeon_cont").show();
  }
};

A.UPDATE = {
  init: function() {}
};

A.W = {
  back: null,
  w: null,
  i: null,
  init: function() {
    A.W.back = $("#wback").css({
      display: 'none',
      height: '100%',
      opacity: 1
    });
    if (A.W.back.length > 0) {
      A.W.w = $("#window");
      return A.W.i = $("#w_inner");
    } else {
      return delete A.W;
    }
  },
  startLoad: function() {
    return A.W.i.addClass("load").html("Загрузка данных");
  },
  finishLoad: function(data) {
    return A.W.i.removeClass("load").html(data);
  },
  setHtml: function(data) {
    return A.W.finishLoad(data);
  },
  open: function(w) {
    A.P.body.css('overflow', 'hidden');
    A.W.back.css({
      display: 'block',
      opacity: 1
    });
    return A.W.w.css({
      maxWidth: (w !== void 0 ? w : 800) + "px"
    });
  },
  close: function() {
    var base;
    A.W.back.css({
      display: 'none',
      opacity: 0
    });
    A.P.body.css('overflow', 'auto');
    A.W.i.html("");
    return typeof (base = A.W).onClose === "function" ? base.onClose() : void 0;
  },
  openRecall: function() {
    A.W.open(1000);
    A.W.startLoad();
    return API.GET.r(API.U.get.form.recall, {}, A.W.aOpenRecall);
  },
  aOpenRecall: function(data) {
    A.W.setHtml(data);
    return $(".window_inner input[name=phone]").mask("+7 (999) 999-99-99");
  },
  openAuth: function() {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.account.form.auth, {}, A.W.aOpenRecall);
  },
  openReg: function() {
    A.W.open(600);
    A.W.startLoad();
    return API.GET.r(API.U.account.form.reg, {}, A.W.aOpenRecall);
  },
  openAddLink: function() {
    A.W.open(1000);
    A.W.startLoad();
    return API.GET.r(API.U.link.get.edit, {}, A.W.aOpenAddLink);
  },
  aOpenAddLink: function(data) {
    A.W.setHtml(data);
    return A.F.initEditLinks();
  }
};
