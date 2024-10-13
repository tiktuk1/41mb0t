function I(_0x3bfde0) {
    var O = document.createElement("script");
    O.type = "text/javascript";
    O.textContent = "(" + _0x3bfde0 + ")(this);";
    document.documentElement.appendChild(O);
    O.remove();
}

window.onmessage = function (m) {
    if (!m.data.call) {
        return;
    }
    if (m.data.call == "RETORNO") {
        return;
    }
    try {
        chrome.runtime.sendMessage(m.data, Y => {
            if (chrome.runtime.lastError) {
                //location.reload();
            }
            Y.call = "RETORNO";
            window.postMessage(Y);
        });
    } catch (Y) {
        window.postMessage({
            call: "RETORNO"
        });
    }
};

I(function () {
    window.DateSave = window.Date;
    globalThis.setIn = window.setInterval;
    globalThis.ClearIn = window.clearInterval;
    delete window.Date;
    new Function("console.clear()")();
});



I(function () {
    (function () {
        let log = console.log;
        let Interval;
        let ClearInterval;

        Interval = globalThis.setIn;
        ClearInterval = globalThis.ClearIn;

        let disableAimbot = 0;
        setObserve();
        function enviarCodigo(d) {
            let g = {
                call: "lood",
                code: d
            };
            window.postMessage(g);
        }
        function Aim() {
            this.dragon2d = null;
            this.WindMeter = null;
            this.game = null;
            this.InitGame = Z => {
                this.game = Z;
                m();
            };
            this.InitDragon2d = Z => {
                this.dragon2d = Z;
            };
            let d = this;
            let e = 0;
            this.manual = 0;
            this.c = 0;
            this.c_ay = 0;
            this.c_ax = 0;
            let f;
            let g;
            let i = !0;
            let j = 1;
            let k = 0;
            this.TornadoPower = 0;
            let l = () => {
                let a1 = [1, 2, 3, 0];
                e = a1[e];
            };
            this.wa = 0;
            this.wp = 0;
            this.SetWind = Z => {
                this.wp = Z[0];
                this.wa = Z[1];
                G();
            };
            let m = () => {
                o();
                n();
                R(this.me);
            };
            let n = () => {
                if (this.game.my_player_index == -1) {
                    return;
                }
                this.shot_type = 0;
                z();
                G();
                this.time = Interval(z, 10);
                this.timeCam = Interval(C, 1);
                let a1 = ["ang", "body", "look", "x", "y", "is_alive"];
                Object.observe2(this.game.players[this.game.my_player_index], a2 => {
                    a2.forEach(a4 => {
                        if (a4.type === "update" && a1.includes(a4.name)) {
                            setTimeout(() => {
                                G();
                            }, 11);
                        }
                    });
                });
                var a0 = ["x", "y"];
                Object.observe2(this.en, function (a2) {
                    a2.forEach(function (a4) {
                        if (a4.type === "update" && a0.includes(a4.name)) {
                            setTimeout(() => {
                                G();
                            }, 11);
                        }
                    });
                });
            };
            let o = () => {
                ClearInterval(this.time);
                ClearInterval(this.timeCam);
                this.c_ay = 0;
                this.c_ax = 0;
                this.shoot_ready = 0;
                this.manual = 0;
                if (!j) {
                    $("#btn-3").click();
                }
                this.c = 0;
                this.Power_Full = null;
                cancelAnimationFrame(Pacmanbot.Utils.anim);
                if (k) {
                    r();
                }
            };
            this.pow = () => {
                if (this.power <= 1 || !j) {
                    return 400;
                }
                return this.power;
            };
            const p = Z => {
                setTimeout(() => {
                    G();
                }, 11);
                if (k) {
                    q();
                }
            };
            const q = function () {
                z();
                s();
                v();
                x();
            };
            const r = function () {
                setTimeout(() => {
                    $("#buttonStart1v1").click();
                    $("#roomButtonStart").click();
                }, random(5000, 40000));
            };
            const s = function () {
                var a0 = this.me.x > this.x2 ? 0 : 1;
                if (this.me.look != a0) {
                    this.me.Look(a0);
                }
            };
            const v = function () {
                this.me.body = 0;
                this.me.ang = 60;
                this.me.UpdateGuiAngle();
                this.me.DrawPlayerAngle();
            };
            const w = function (Z) {
                $("#" + Z).trigger("click");
            };
            const x = function () {
                z();
                setTimeout(() => {
                    this.me.dn.Shoot(this.power, [2, 0, random(65, 500)]);
                }, random(500, 1500));
            };
            const y = () => {
                return this.game.players[this.game.my_player_index];
            };
            const z = () => {
                if (disableAimbot) {
                    return;
                }
                if (!this.game) {
                    return;
                }
                if (this.game.my_player_index == -1) {
                    return;
                }
                this.me = y();
                this.dragon2d.zoomTarget = 1;
                $("#container,#Dragon2D").css("translateX", 1);
                this.e = [];
                let a0 = this.me.selected_shot;
                this.mobile = M[this.me.mobile];
                for (let a7 in this.game.players) {
                    if (this.me.team != this.game.players[a7].team) {
                        if (this.game.players[a7].is_alive) {
                            this.e.push(this.game.players[a7]);
                        }
                    }
                }
                if (this.e.length == 0) {
                    return;
                }
                if (e > this.e.length - 1) {
                    e = 0;
                }
                let a1;
                this.reverse = !this.me.look ? 1 : -1;
                if (this.mobile.name == "ADUKA" || this.mobile.name == "NAK") {
                    a1 = true;
                }
                const a2 = {
                    x: this.me.player_sprite.angle.position.x,
                    y: this.me.player_sprite.angle.position.y
                };
                let a3 = a2;
                if (a1) {
                    a3.x = -a3.x;
                }
                let a4 = -RadToAngle(Math.atan2(a3.y, a3.x)) * this.reverse;
                if (a1) {
                    a4 = -RadToAngle(Math.atan2(a3.y, -a3.x)) * this.reverse;
                }
                let a5 = this.me.aim[a0].y;
                if (isNaN(a5) || a5 === 0) {
                    return;
                }
                let a6 = new Vector(-this.me.body + a4, -(a3.x + a3.y) / 1.4);
                if (this.me.look) {
                    a6.x = -a6.x;
                    a6.y = -a6.y;
                }
                this.mex = this.me.x + Math.round(a6.x);
                this.mey = this.me.y + Math.round(a6.y);
                this.l = this.me.look;
                this.ang = this.me.ang + this.me.body * this.reverse;
                this.a360 = (this.me.look == 0 ? 180 - this.me.ang : this.me.ang) - this.me.body;
                this.x2 = this.e[e].x;
                this.y2 = this.e[e].y;
                this.en = this.e[e];
                this.look2 = this.mex > this.x2 ? 0 : 1;
                if (this.mobile.name == "FROG" && a0 == 0) {
                    this.x2 += 50;
                }
                if (this.mobile.name == "FROG" && a0 == 1) {
                    this.x2 -= 50;
                }
                if (this.mobile.name == "FROG" && a0 == 2) {
                    if (this.look2) {
                        this.x2 -= 50;
                    } else {
                        this.x2 += 50;
                    }
                }
                if (this.manual) {
                    this.x2 = g;
                    this.y2 = f;
                }
                if (!i) {
                    return;
                }
            };
            let A = 0;
            let B = 0;
            let C = () => {
                const Z = {
                    xZikq: function (a0, a1) {
                        return a0 - a1;
                    },
                    PhMQC: function (a0, a1) {
                        return a0 - a1;
                    },
                    jmMmo: function (a0, a1) {
                        return a0(a1);
                    },
                    mvvQA: "width",
                    bDnKp: function (a0, a1) {
                        return a0 - a1;
                    },
                    DGOtB: function (a0, a1) {
                        return a0(a1);
                    },
                    BEPTQ: "height",
                    WkTtV: function (a0, a1) {
                        return a0 <= a1;
                    },
                    uWAvr: function (a0, a1) {
                        return a0 - a1;
                    },
                    DjQld: function (a0, a1) {
                        return a0 >= a1;
                    },
                    jCtVq: function (a0, a1) {
                        return a0 + a1;
                    },
                    Fgnse: function (a0, a1) {
                        return a0 - a1;
                    },
                    pesiM: function (a0, a1) {
                        return a0 <= a1;
                    },
                    TItXD: function (a0, a1) {
                        return a0 >= a1;
                    }
                };
                if (disableAimbot) {
                    return;
                }
                if (!i) {
                    return;
                }
                if (!this.game) {
                    return;
                }
                if (this.game.my_player_index == -1) {
                    return;
                }
                if (B != this.dragon2d.camera_x - 400 || A != this.dragon2d.camera_y - 300) {
                    Pacmanbot.Utils.C.apply(this);
                }
                B = this.dragon2d.camera_x - 400;
                A = this.dragon2d.camera_y - 300;
            };
            function D(Z, a0, a1, a2, a3, a4) {
                this.x0 = Z;
                this.y0 = a0;
                this.v = new Vector(a1, a2);
                this.ax = a3;
                this.ay = a4;
            }
            function E(Z, a0) {
                if (typeof a0 == "string") {
                    a0 = a0.split(",");
                }
                var a2;
                var a3 = a0.length;
                var a4 = {};
                for (a2 = 0; a2 < a3; a2++) {
                    a4[a0[a2]] = Z[a2];
                }
                return a4;
            }
            this.Zotata = Z => {
                if (!i) {
                    return;
                }
                if (!Z[3].is_me) {
                    return;
                }
                if (!Z[1]) {
                    return;
                }
                let a2 = Z[0];
                a2.start = E(a2.s, "x,y,ang,power,ax,ay,t");
                let a3 = new D(a2.start.x, a2.start.y, a2.start.ang, a2.start.power, a2.start.ax, a2.start.ay);
                this.c_ay = this.ay - a3.ay;
                this.c_ax = this.ax - a3.ax;
                this.cd = 1;
                if (this.shoot_ready || this.power == 0) {
                    return;
                }
                if (this.mobile.name === "GRUB" && this.shot_type == 1) {
                    a3.v.size -= 10;
                }
                if (this.mobile.name === "RAON" && this.shot_type == 1) {
                    a3.v.size -= 30;
                }
                if (this.mobile.name === "DRAGON2" && this.shot_type == 1) {
                    a3.v.size -= 20;
                }
                if ((this.mobile.name === "DRAGON" || this.mobile.name === "BIGFOOT") && this.shot_type == 1) {
                    a3.v.size -= 20;
                }
                let a4 = a3.v.size;
                let a5 = $("#powerBar").css("width");
                a5 = a5.substr(0, a5.length - 2);
                if (a5 <= 1) {
                    return;
                }
                this.Power_Full = a4 / a5 * 400;
                let a6 = (this.Power_Full - this.mobile.power) / (this.mobile.power / 400);
                this.c = -a6;
                this.shoot_ready = 1;
            };
            let F;
            let G = () => {
                if (disableAimbot) {
                    return;
                }
                if (!this.game) {
                    return;
                }
                if (this.game.my_player_index == -1) {
                    return;
                }
                let Z = 0;
                if (!i) {
                    return;
                }
                let a0 = new gp(this.mobile, this.mex, this.mey, this.a360, this.l, this.wp, this.wa, this.x2, this.y2);
                this.power = a0.power + Math.round(this.c / 400 * a0.power);
                if (this.power >= 400) {
                    this.power = 400;
                }
                let a1 = document.getElementById("powerMark");
                a1.style = "left : " + this.power + "px; background-color: rgb(26, 255, 0);margin-left: 0px;width: 2px;transition: all 0.2s ease 0s;font-size: 10px;white-space: nowrap;line-height: 25px;";
                a1.innerHTML = "&nbsp;" + this.en.name;
                this.shot_type = this.me.selected_shot;
                if (F) {
                    return;
                }
                F = Interval(() => {
                    Z++;
                    if (Z == 10) {
                        ClearInterval(F);
                        Pacmanbot.Utils.C.apply(this);
                        F = undefined;
                    }
                }, 0);
            };
            let I = this;
            let K;
            let N = !0;


            function Q(Z) {
                i = !1;
                $("#lines").hide();
                $("#powerMark").hide();
                $("#container_panel").hide();
                Speak("Desactivado");
            }
            const R = function (Z) {

                console.log(Z);
            };
            this.shot_type = 0;
            let S = 0;
            let V = false;
            let W = 0;
            const X = () => {
                let a1 = this;
                $("body").on("keydown", a2 => {
                    if (V) {
                        return;
                    }
                    V = true;
                    if (!i) {
                        return;
                    }
                    let _a = a2.keyCode;
                    if (_a == 220) {
                        if ($("#container_panel").is(":visible")) {
                            $("#container_panel").hide();
                            AudioDB("touch2.mp3");
                        } else {
                            $("#container_panel").show();
                            AudioDB("touch2.mp3");
                        }
                    }
                    if (S || !a1.game) {
                        return;
                    }
                    if (a1.game.my_player_index == -1) {
                        return;
                    }
                    if (_a == 81) {
                        l();
                    }
                    if (_a == 70) {
                        if (a1.manual) {
                            a1.manual = 0;
                        } else {
                            a1.manual = 1;
                        }
                        W = 1;
                    }
                    if (_a == 17) {
                        $("#btn-3").click();
                    }
                    setTimeout(() => {
                        G();
                    }, 11);
                }).keyup(function (a2) {
                    V = false;
                    let a4 = a2.keyCode;
                    if (a4 == 70) {
                        W = 0;
                    }
                });
                document.documentElement.addEventListener("wheel", a2 => {
                    if (!a1.game) {
                        return;
                    }
                    if (a1.game.my_player_index == -1) {
                        return;
                    }
                    if (a2.deltaY > 0) {
                        a1.c -= 2;
                    } else {
                        a1.c += 2;
                    }
                    setTimeout(() => {
                        G();
                    }, 11);
                });
                document.documentElement.addEventListener("mousemove", a2 => {
                    if (!a1.game || !W) {
                        return;
                    }
                    if (a1.game.my_player_index == -1) {
                        return;
                    }
                    let a4 = Math.round(a2.offsetX === undefined ? a2.originalEvent.layerX : a2.offsetX);
                    let a5 = Math.round(a2.offsetY === undefined ? a2.originalEvent.layerY : a2.offsetY);
                    let a6 = a1.dragon2d.ScreenToCameraXY(a4, a5);
                    g = a6.x;
                    f = a6.y;
                    if (!a1.manual) {
                        return;
                    }
                    setTimeout(() => {
                        G();
                    }, 11);
                });
                $(".ChatDialog input,#channelInput,#roomInput,#gameInput").focus(function (a2) {
                    S = 1;
                });
                $(".ChatDialog input,#channelInput,#roomInput,#gameInput").blur(function (a2) {
                    S = 0;
                });
                $("#btnShot1,#btnShot2,#btnShotSS").click(a2 => {
                    if (!a1.game) {
                        return;
                    }
                    if (a1.game.my_player_index == -1) {
                        return;
                    }
                    setTimeout(() => {
                        a1.s = a1.me.selected_shot;
                    }, 11);
                    setTimeout(() => {
                        G();
                    }, 11);
                });
            };
            this.panel = function () {
                const a1 = $("<div id=\"container_panel\" >\n        <input  id=\"container_panelheader\" width=\"223\" type=\"image\" src=\"https://i.imgur.com/6omykRW.gif\" alt=\"\"><br><br>\n\t\t<div class=\"cuadro\" >💙 Aimbot</div><input id=\"btn-1\" class=\"btn btn-round\"  type=\"checkbox\" checked><label for=\"btn-1\"></label>\n\t\t<div class=\"cuadro\" >💙 Trayectoria</div><input id=\"btn-2\" class=\"btn btn-round\"  type=\"checkbox\" checked><label for=\"btn-2\"></label>\n      <div class=\"cuadro\" >💙 AutoDragShot</div><input id=\"btn-3\" class=\"btn btn-round\"  type=\"checkbox\" checked><label for=\"btn-3\"></label>\n      <div class=\"cuadro\" >💙 Tornado</div><input id=\"btn-4\" class=\"btn btn-round\"  type=\"checkbox\" checked><label for=\"btn-4\"></label>\n      <div class=\"cuadro\" >💙 Espejo</div><input id=\"btn-5\" class=\"btn btn-round\"  type=\"checkbox\" checked><label for=\"btn-5\"></label>\n    \n      <br>\n      <br>\n      <br>\n\t   <br>\n\t   <br>\n\t   <br>\n       <input id=\"intrucciones\" type=\"button\" value = \"Info\">\n       <input id=\"date\"  value=\"0\" disabled=\"disabled\">\n\t   \n\t   </div>").hide().appendTo($("#chat_divs"));
                a1[0].children[0].src = "https://i.imgur.com/6omykRW.gif";
                a1.show();
                dragElement(document.getElementById("container_panel"));
                this.Aimbot = 1;
                this.Trayectoria = 1;
                this.Tornado = 1;
                this.Espejo = 1;
                $("#btn-1").click(() => {
                    if (this.Aimbot) {
                        this.Aimbot = 0;
                        alertify.error("Aimbot Desactivado");
                        AudioDB("noti.mp3");
                        $("#powerMark").hide();
                    } else {
                        this.Aimbot = 1;
                        alertify.success("Aimbot Activado");
                        AudioDB("noti.mp3");
                        $("#powerMark").show();
                    }
                });
                $("#btn-2").click(() => {
                    if (this.Trayectoria) {
                        this.Trayectoria = 0;
                        alertify.error("Trayectoria Desactivado");
                        AudioDB("noti.mp3");
                        $("#lines").hide();
                    } else {
                        this.Trayectoria = 1;
                        alertify.success("Trayectoria Activado");
                        AudioDB("noti.mp3");
                        $("#lines").show();
                    }
                    ;
                });
                $("#btn-3").click(() => {
                    if (j) {
                        j = 0;
                        alertify.error("AutoDragShot Desactivado");
                        AudioDB("noti.mp3");
                    } else {
                        j = 1;
                        alertify.success("AutoDragShot Activado");
                        AudioDB("noti.mp3");
                    }
                    ;
                });
                $("#btn-4").click(() => {
                    if (this.Tornado) {
                        this.Tornado = 0;
                        alertify.error("AutoCalibrador Desactivado");
                        AudioDB("noti.mp3");
                        G();
                    } else {
                        this.Tornado = 1;
                        alertify.success("AutoCalibrador Activado");
                        AudioDB("noti.mp3");
                        G();
                    }
                    ;
                });
                $("#btn-5").click(() => {
                    if (this.Espejo) {
                        this.Espejo = 0;
                        alertify.error("AutoCalibrador Desactivado");
                        AudioDB("noti.mp3");
                        G();
                    } else {
                        this.Espejo = 1;
                        alertify.success("AutoCalibrador Activado");
                        AudioDB("noti.mp3");
                        G();
                    }
                    ;
                });
                $("#intrucciones").click(function () {
                    alertify.alert("🟩🟩🟩TECLAS🟩🟩🟩 <br><br> Q:  Cambia Enemigo<br>🖱Rueda Mouse:  Mover Trayectoria <br> F:  Disparo TELEPORT/AUTOMATICO.<br> ª:  Ocultar Panel<br> Ctrl:AutoDragshot(ON/OFF)<br>");
                });
                $("#container_panel").unbind().bind("mousedown touchstart", function (a2) {
                    a2.stopPropagation();
                    return !1;
                });
            };
            setTimeout(X, 7000);
            setTimeout(this.panel, 7000);

        }
        ;
        window.Pacmanbot = {};
        Pacmanbot.Utils = new Aim();
        function dragElement(c) {
            const d = {
                prgYp: function (l) {
                    return l();
                },
                ydOeo: function (l, m) {
                    return l != m;
                },
                EWzJA: "team",
                tGWWZ: function (l, m) {
                    return l == m;
                },
                nIKlA: function (l, m) {
                    return l(m);
                },
                inEoS: "#container_panel",
                voJIM: ":visible",
                apuen: "touch2.mp3",
                ULyry: function (l, m) {
                    return l(m);
                },
                aHAIT: function (l, m) {
                    return l(m);
                },
                zaiuB: function (l, m) {
                    return l == m;
                },
                XRnzd: function (l, m) {
                    return l == m;
                },
                sCXnu: function (l) {
                    return l();
                },
                Cgcav: function (l, m) {
                    return l == m;
                },
                rdTng: "#btn-3",
                ujSLu: function (l, m, n) {
                    return l(m, n);
                },
                PUCTw: function (l) {
                    return l();
                },
                CTIVH: function (l, m) {
                    return l !== m;
                },
                sVQju: "ubImT",
                oRjie: "WNqhI",
                aEjVH: "3|5|2|1|4|0",
                TTIVy: function (l, m) {
                    return l + m;
                },
                OVmNy: "https://gumbao.net/",
                JiETN: "static/audio/",
                jDxWz: function (l, m) {
                    return l === m;
                },
                bdIEv: "ZqyFD",
                XOfAQ: "KUbJY",
                UGwmT: function (l, m) {
                    return l - m;
                },
                HtKkD: function (l, m) {
                    return l - m;
                },
                Onlty: function (l, m) {
                    return l - m;
                },
                YevSf: function (l, m) {
                    return l(m);
                },
                DYtlq: "width",
                cIgSV: function (l, m) {
                    return l(m);
                },
                Mvvix: "height",
                LBVcO: function (l, m) {
                    return l <= m;
                },
                GafGB: function (l, m) {
                    return l - m;
                },
                hanTu: function (l, m) {
                    return l >= m;
                },
                KAEgp: function (l, m) {
                    return l <= m;
                },
                qlVAv: function (l, m) {
                    return l - m;
                },
                PwhcJ: function (l, m) {
                    return l >= m;
                },
                MtUGD: function (l, m) {
                    return l + m;
                },
                KNSPd: function (l) {
                    return l();
                },
                YrVZt: function (l, m) {
                    return l !== m;
                },
                WmTaY: "PPPEo",
                pnVje: "header",
                ynFZv: "EdOFz",
                NCOMH: "lqigj",
                LkBZE: function (l, m) {
                    return l + m;
                },
                lOhKk: function (l, m) {
                    return l !== m;
                },
                EhzqI: "UddQx",
                qbKsO: "mYYSx"
            };
            var e = 0;
            var f = 0;
            var g = 0;
            var h = 0;
            if (document.getElementById(d.MtUGD(c.id, d.pnVje))) {
                if (d.CTIVH(d.ynFZv, d.NCOMH)) {
                    document.getElementById(d.LkBZE(c.id, d.pnVje)).onmousedown = i;
                } else {
                    d.prgYp(d);
                }
            } else if (d.lOhKk(d.EhzqI, d.qbKsO)) {
                c.onmousedown = i;
            } else if (d.ydOeo(this.me[d.EWzJA], this.game.players[f][d.EWzJA])) {
                if (this.game.players[i].is_alive) {
                    this.e.push(this.game.players[k]);
                }
            }
            function i(n) {
                const o = {
                    XzmtS: function (p) {
                        return d.PUCTw(p);
                    }
                };
                if (d.CTIVH(d.sVQju, d.oRjie)) {
                    const p = d.aEjVH.split("|");
                    let q = 0;
                    while (true) {
                        switch (p[q++]) {
                            case "0":
                                document.onmousemove = j;
                                continue;
                            case "1":
                                h = n.clientY;
                                continue;
                            case "2":
                                g = n.clientX;
                                continue;
                            case "3":
                                n = n || window.event;
                                continue;
                            case "4":
                                document.onmouseup = k;
                                continue;
                            case "5":
                                n.preventDefault();
                                continue;
                        }
                        break;
                    }
                } else {
                    if (w) {
                        return;
                    }
                    x = true;
                    if (!y) {
                        return;
                    }
                    let s = z.keyCode;
                    if (d.tGWWZ(s, 220)) {
                        if (d.nIKlA(A, d.inEoS).is(d.voJIM)) {
                            d.nIKlA(B, d.inEoS).hide();
                            d.nIKlA(C, d.apuen);
                        } else {
                            d.ULyry(D, d.inEoS).show();
                            d.aHAIT(E, d.apuen);
                        }
                    }
                    if (F || !G.game) {
                        return;
                    }
                    if (d.zaiuB(I.game.my_player_index, -1)) {
                        return;
                    }
                    if (d.XRnzd(s, 81)) {
                        d.sCXnu(K);
                    }
                    if (d.tGWWZ(s, 70)) {
                        if (L.manual) {
                            N.manual = 0;
                        } else {
                            O.manual = 1;
                        }
                        P = 1;
                    }
                    if (d.Cgcav(s, 17)) {
                        d.nIKlA(Q, d.rdTng).click();
                    }
                    d.ujSLu(R, () => {
                        o.XzmtS(s);
                    }, 11);
                }
            }
            function j(n) {
                if (d.jDxWz(d.bdIEv, d.XOfAQ)) {
                    var p = new n();
                    p.src = d.TTIVy(d.TTIVy(d.OVmNy, d.JiETN), f);
                    p.play();
                    return p;
                } else {
                    n = n || window.event;
                    n.preventDefault();
                    e = d.UGwmT(g, n.clientX);
                    f = d.HtKkD(h, n.clientY);
                    g = n.clientX;
                    h = n.clientY;
                    const p = d.HtKkD(d.Onlty(window.innerWidth, d.aHAIT(parseInt, d.YevSf($, c).css(d.DYtlq))), 20);
                    const q = d.Onlty(d.HtKkD(window.innerHeight, d.YevSf(parseInt, d.cIgSV($, c).css(d.Mvvix))), 20);
                    c.style.top = d.LBVcO(d.GafGB(c.offsetTop, f), 0) ? 0 : d.hanTu(d.Onlty(c.offsetTop, f), q) ? q : d.TTIVy(d.UGwmT(c.offsetTop, f), "px");
                    c.style.left = d.KAEgp(d.qlVAv(c.offsetLeft, e), 0) ? 0 : d.PwhcJ(d.UGwmT(c.offsetLeft, e), p) ? p : d.MtUGD(d.qlVAv(c.offsetLeft, e), "px");
                }
            }
            function k() {
                const n = {
                    XQcsq: function (o) {
                        return d.KNSPd(o);
                    }
                };
                if (d.YrVZt(d.WmTaY, d.WmTaY)) {
                    n.XQcsq(d);
                } else {
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }
        }
        let RadToAngle = function (d) {
            return d * 180 / Math.PI;
        };
        let AngleToRad = function (d) {
            return d * Math.PI / 180;
        };
        let random = function (d, e) {
            return Math.floor(Math.random() * (e - d + 1) + d);
        };
        let Speak = function (c) {
            var d = new SpeechSynthesisUtterance(c);
            speechSynthesis.speak(d);
        };
        function Vector(c, d) {
            this.ang = c;
            this.size = d;
            this.x = Math.cos(AngleToRad(c)) * d;
            this.y = -Math.sin(AngleToRad(c)) * d;
        }
        function J(c) {
            for (var e = 1; e <= 5; e++) {
                c = H(c);
            }
            c = atob(c);
            c = H(c);
            c = JSON.parse(c);
            return c;
        }
        function H(d) {
            var f = d.toString();
            var g = "";
            for (var i = 0; i < f.length; i += 2) {
                g += String.fromCharCode(parseInt(f.substr(i, 2), 16));
            }
            return g;
        }
        function AudioDB(d) {
            var g = new Audio();
            g.src = "https://gumbao.net/static/audio/" + d;
            g.play();
            return g;
        }
        function tH(c) {
            var e = "";
            for (var f = 0; f < c.length; f++) {
                e += c.charCodeAt(f).toString(16);
            }
            return e;
        }
        let M = {
            "0": {
                name: "ARMOR",
                a: 73,
                b: 0.74,
                ax: 0,
                ay: 398,
                color: "#FF0000",
                power: 936,
                off: {
                    F8: 510,
                    S1: 760,
                    S2: 940,
                    DDplus: 1160,
                    DD_S2: 1490,
                    SS: 1310,
                    TELEPORT: 860
                },
                ss: {
                    F8: 510,
                    S1: 410,
                    S2: 590,
                    DDplus: 610,
                    DD_S2: 865,
                    SS: 960,
                    TELEPORT: 460
                }
            },
            "1": {
                name: "ICE",
                a: 63.5,
                b: 0.625,
                ax: 0,
                ay: 384,
                color: "#d8dde3",
                power: 996,
                off: {
                    F8: 490,
                    S1: 740,
                    S2: 890,
                    DDplus: 1140,
                    DD_S2: 1440,
                    SS: 1290,
                    TELEPORT: 480
                },
                ss: {
                    F8: 490,
                    S1: 390,
                    S2: 540,
                    DDplus: 590,
                    DD_S2: 815,
                    SS: 940,
                    TELEPORT: 440
                }
            },
            "2": {
                name: "ADUKA",
                a: 65.5,
                b: 0.7,
                ax: 0,
                ay: 392,
                color: "#6184c9",
                power: 988,
                off: {
                    F8: 510,
                    S1: 760,
                    S2: 910,
                    DDplus: 1160,
                    DD_S2: 1460,
                    SS: 1310,
                    TELEPORT: 860
                },
                ss: {
                    F8: 510,
                    S1: 410,
                    S2: 650,
                    DDplus: 610,
                    DD_S2: 835,
                    SS: 960,
                    TELEPORT: 460
                }
            },
            "3": {
                name: "LIGHTNING",
                a: 65,
                b: 0.72,
                ax: 0,
                ay: 394,
                color: "#002fff",
                power: 988,
                off: {
                    F8: 500,
                    S1: 700,
                    S2: 850,
                    DDplus: 1100,
                    DD_S2: 1400,
                    SS: 1300,
                    TELEPORT: 800
                },
                ss: {
                    F8: 500,
                    S1: 350,
                    S2: 500,
                    DDplus: 550,
                    DD_S2: 775,
                    SS: 950,
                    TELEPORT: 400
                }
            },
            "4": {
                name: "BIGFOOT",
                a: 90,
                b: 0.74,
                ax: 0,
                ay: 396,
                color: "#11458f",
                power: 843,
                off: {
                    F8: 520,
                    S1: 770,
                    S2: 920,
                    DDplus: 1170,
                    DD_S2: 1470,
                    SS: 1320,
                    TELEPORT: 870
                },
                ss: {
                    F8: 520,
                    S1: 420,
                    S2: 570,
                    DDplus: 620,
                    DD_S2: 845,
                    SS: 970,
                    TELEPORT: 470
                }
            },
            "5": {
                name: "JD",
                a: 62.5,
                b: 0.64,
                ax: 0,
                ay: 387,
                color: "#9e1919",
                power: 1000,
                off: {
                    F8: 500,
                    S1: 750,
                    S2: 840,
                    DDplus: 1150,
                    DD_S2: 1390,
                    SS: 1300,
                    TELEPORT: 850
                },
                ss: {
                    F8: 500,
                    S1: 400,
                    S2: 490,
                    DDplus: 600,
                    DD_S2: 765,
                    SS: 950,
                    TELEPORT: 450
                }
            },
            "6": {
                name: "ASATE",
                a: 75,
                b: 0.765,
                ax: 0,
                ay: 412,
                color: "#ffea00",
                power: 936,
                off: {
                    F8: 480,
                    S1: 730,
                    S2: 880,
                    DDplus: 1130,
                    DD_S2: 1430,
                    SS: 1280,
                    TELEPORT: 830
                },
                ss: {
                    F8: 480,
                    S1: 380,
                    S2: 530,
                    DDplus: 580,
                    DD_S2: 805,
                    SS: 930,
                    TELEPORT: 430
                }
            },
            "7": {
                name: "RANDOM",
                a: 81,
                b: 0.827,
                ax: 0,
                ay: 329,
                color: "#9e1919",
                power: 0,
                off: {
                    F8: 520,
                    S1: 770,
                    S2: 920,
                    DDplus: 1170,
                    DD_S2: 1470,
                    SS: 1320,
                    TELEPORT: 870
                },
                ss: {
                    F8: 510,
                    S1: 760,
                    S2: 940,
                    DDplus: 1160,
                    DD_S2: 1490,
                    SS: 1310,
                    TELEPORT: 860
                }
            },
            "8": {
                name: "KNIGHT",
                a: 65.5,
                b: 0.695,
                ax: 0,
                ay: 360,
                color: "#eeff00",
                power: 983,
                off: {
                    F8: 550,
                    S1: 810,
                    S2: 950,
                    DDplus: 1200,
                    DD_S2: 1500,
                    SS: 1390,
                    TELEPORT: 900
                },
                ss: {
                    F8: 550,
                    S1: 450,
                    S2: 600,
                    DDplus: 650,
                    DD_S2: 875,
                    SS: 1040,
                    TELEPORT: 500
                }
            },
            "9": {
                name: "FOX",
                a: 61,
                b: 0.61,
                ax: 0,
                ay: 398,
                color: "#ffb073",
                power: 960,
                off: {
                    F8: 480,
                    S1: 710,
                    S2: 900,
                    DDplus: 1110,
                    DD_S2: 1450,
                    SS: 1280,
                    TELEPORT: 810
                },
                ss: {
                    F8: 480,
                    S1: 360,
                    S2: 550,
                    DDplus: 560,
                    DD_S2: 825,
                    SS: 930,
                    TELEPORT: 410
                }
            },
            "10": {
                name: "DRAGON",
                a: 90,
                b: 0.74,
                ax: 0,
                ay: 380,
                color: "#8d73ff",
                power: 880,
                off: {
                    F8: 550,
                    S1: 800,
                    S2: 950,
                    DDplus: 1200,
                    DD_S2: 1500,
                    SS: 1350,
                    TELEPORT: 900
                },
                ss: {
                    F8: 550,
                    S1: 450,
                    S2: 600,
                    DDplus: 650,
                    DD_S2: 875,
                    SS: 1000,
                    TELEPORT: 500
                }
            },
            "11": {
                name: "NAK",
                a: 82,
                b: 0.74,
                ax: 0,
                ay: 360,
                color: "#c75818",
                power: 828,
                off: {
                    F8: 520,
                    S1: 770,
                    S2: 920,
                    DDplus: 1170,
                    DD_S2: 1470,
                    SS: 1320,
                    TELEPORT: 870
                },
                ss: {
                    F8: 520,
                    S1: 420,
                    S2: 570,
                    DDplus: 620,
                    DD_S2: 845,
                    SS: 970,
                    TELEPORT: 470
                }
            },
            "12": {
                name: "TRICO",
                a: 82,
                b: 0.87,
                ax: 0,
                ay: 395,
                color: "#3bcf0e",
                power: 872,
                off: {
                    F8: 490,
                    S1: 740,
                    S2: 890,
                    DDplus: 1140,
                    DD_S2: 1440,
                    SS: 1290,
                    TELEPORT: 840
                },
                ss: {
                    F8: 490,
                    S1: 390,
                    S2: 540,
                    DDplus: 590,
                    DD_S2: 815,
                    SS: 940,
                    TELEPORT: 440
                }
            },
            "13": {
                name: "MAGE",
                a: 71.5,
                b: 0.78,
                ax: 0,
                ay: 360,
                color: "#0529f5",
                power: 908,
                off: {
                    F8: 500,
                    S1: 750,
                    S2: 900,
                    DDplus: 1150,
                    DD_S2: 1450,
                    SS: 1300,
                    TELEPORT: 850
                },
                ss: {
                    F8: 500,
                    S1: 400,
                    S2: 550,
                    DDplus: 600,
                    DD_S2: 825,
                    SS: 950,
                    TELEPORT: 450
                }
            },
            "14": {
                name: "TURTLE",
                a: 72.5,
                b: 0.75,
                ax: 0,
                ay: 389,
                color: "#87ff91",
                power: 924,
                off: {
                    F8: 490,
                    S1: 740,
                    S2: 970,
                    DDplus: 1140,
                    DD_S2: 1520,
                    SS: 1290,
                    TELEPORT: 840
                },
                ss: {
                    F8: 490,
                    S1: 390,
                    S2: 620,
                    DDplus: 590,
                    DD_S2: 895,
                    SS: 940,
                    TELEPORT: 440
                }
            },
            "15": {
                name: "BOOMER",
                a: 60,
                b: 1.2,
                ax: 0,
                ay: 244,
                color: "#FF0000",
                power: 808,
                off: {
                    F8: 480,
                    S1: 730,
                    S2: 880,
                    DDplus: 1130,
                    DD_S2: 1430,
                    SS: 1280,
                    TELEPORT: 830
                },
                ss: {
                    F8: 480,
                    S1: 380,
                    S2: 530,
                    DDplus: 580,
                    DD_S2: 805,
                    SS: 930,
                    TELEPORT: 430
                }
            },
            "16": {
                name: "ELECTRICO",
                a: 73.5,
                b: 0.74,
                ax: 0,
                ay: 398,
                color: "#eded00",
                power: 911,
                off: {
                    F8: 450,
                    S1: 700,
                    S2: 800,
                    DDplus: 1100,
                    DD_S2: 1350,
                    SS: 1250,
                    TELEPORT: 800
                },
                ss: {
                    F8: 450,
                    S1: 350,
                    S2: 450,
                    DDplus: 550,
                    DD_S2: 725,
                    SS: 900,
                    TELEPORT: 400
                }
            },
            "17": {
                name: "GRUB",
                a: 61,
                b: 0.65,
                ax: 0,
                ay: 395,
                color: "#c600f2",
                power: 1012,
                off: {
                    F8: 490,
                    S1: 740,
                    S2: 890,
                    DDplus: 1140,
                    DD_S2: 1440,
                    SS: 1290,
                    TELEPORT: 840
                },
                ss: {
                    F8: 490,
                    S1: 390,
                    S2: 540,
                    DDplus: 590,
                    DD_S2: 815,
                    SS: 940,
                    TELEPORT: 440
                }
            },
            "18": {
                name: "DRAGON2",
                a: 93.5,
                b: 0.78,
                ax: 0,
                ay: 398,
                color: "#6f00ed",
                power: 840,
                off: {
                    F8: 550,
                    S1: 800,
                    S2: 950,
                    DDplus: 1200,
                    DD_S2: 1500,
                    SS: 1350,
                    TELEPORT: 900
                },
                ss: {
                    F8: 550,
                    S1: 450,
                    S2: 600,
                    DDplus: 650,
                    DD_S2: 875,
                    SS: 1000,
                    TELEPORT: 500
                }
            },
            "19": {
                name: "RAON",
                a: 80,
                b: 0.72,
                ax: 0,
                ay: 392,
                color: "#ed0000",
                power: 888,
                off: {
                    F8: 500,
                    S1: 750,
                    S2: 900,
                    DDplus: 1150,
                    DD_S2: 1450,
                    SS: 1300,
                    TELEPORT: 850
                },
                ss: {
                    F8: 500,
                    S1: 400,
                    S2: 550,
                    DDplus: 600,
                    DD_S2: 825,
                    SS: 950,
                    TELEPORT: 450
                }
            },
            "20": {
                name: "RANDOMIZER",
                a: 68,
                b: 0.72,
                ax: 0,
                ay: 398,
                color: "#00ed27",
                power: 960,
                off: {
                    F8: 480,
                    S1: 680,
                    S2: 830,
                    DDplus: 1080,
                    DD_S2: 1380,
                    SS: 1280,
                    TELEPORT: 780
                },
                ss: {
                    F8: 480,
                    S1: 330,
                    S2: 480,
                    DDplus: 530,
                    DD_S2: 755,
                    SS: 930,
                    TELEPORT: 380
                }
            },
            "21": {
                name: "FROG",
                a: 55.5,
                b: 0.67,
                ax: 0,
                ay: 311,
                color: "#00ed8a",
                power: 960,
                off: {
                    F8: 500,
                    S1: 750,
                    S2: 750,
                    DDplus: 1300,
                    DD_S2: 1300,
                    SS: 1300,
                    TELEPORT: 850
                },
                ss: {
                    F8: 500,
                    S1: 400,
                    S2: 400,
                    DDplus: 600,
                    DD_S2: 675,
                    SS: 950,
                    TELEPORT: 450
                }
            },
            "22": {
                name: "KALSIDDON",
                a: 70,
                b: 0.67,
                ax: 0,
                ay: 398,
                color: "#ff9d00",
                power: 976,
                off: {
                    F8: 615,
                    S1: 765,
                    S2: 975,
                    DDplus: 1165,
                    DD_S2: 1525,
                    SS: 1315,
                    TELEPORT: 865
                },
                ss: {
                    F8: 615,
                    S1: 415,
                    S2: 625,
                    DDplus: 615,
                    DD_S2: 900,
                    SS: 965,
                    TELEPORT: 465
                }
            }
        };
        function gp(_0x35bc23, _0x41b0ef, _0x2821ca, _0x201093, _0x58ca38, _0x563d20, _0x605f00, _0x55bc4d, _0x3c9416) {
            let _0x37c370 = -8;
            let _0x530eb1 = -60;
            let _0x36a3da = 2040;
            let _0x19ab9d = 5000;
            let _0x25e42e;
            let _0x52dfba = 9999;
            let _0x4a24e9;
            let _0x4ab03a;
            let _0x272f8f;
            let _0x43fb77;
            let _0xb8d4f8;
            let _0x462141;
            let _0x5cd900;
            let _0x53ea03;
            let _0x33435a;
            let _0x1e2cee = Math.PI / 180;
            _0x4a24e9 = Math.round(Math.cos(_0x605f00 * _0x1e2cee) * _0x563d20) * _0x35bc23.b;
            _0x4ab03a = Math.round(Math.sin(_0x605f00 * _0x1e2cee) * _0x563d20) * _0x35bc23.b - _0x35bc23.a;
            _0x53ea03 = 0;
            do {
                _0x272f8f = Math.round(Math.cos(_0x201093 * _0x1e2cee) * _0x53ea03);
                _0x43fb77 = Math.round(Math.sin(_0x201093 * _0x1e2cee) * _0x53ea03);
                _0xb8d4f8 = _0x41b0ef;
                _0x462141 = 1200 - _0x2821ca;
                _0x5cd900 = 1200 - _0x3c9416;
                if (_0x462141 <= 0) {
                    _0x53ea03++;
                    continue;
                } else {
                    while (1) {
                        if (!_0x37c370 || _0xb8d4f8 <= _0x530eb1) {
                            break;
                        }
                        if (_0xb8d4f8 >= _0x36a3da) {
                            break;
                        }
                        if (_0x462141 >= _0x19ab9d) {
                            break;
                        }
                        _0x272f8f += _0x4a24e9 * 0.0049;
                        _0x43fb77 += _0x4ab03a * 0.0049;
                        _0xb8d4f8 += _0x272f8f * 0.0049;
                        _0x462141 += _0x43fb77 * 0.0049;
                        _0x25e42e = Math.sqrt((_0x5cd900 - _0x462141) ** 2 + (_0x55bc4d - _0xb8d4f8) ** 2);
                        if (_0x52dfba > _0x25e42e) {
                            _0x52dfba = _0x25e42e;
                            _0x33435a = _0x53ea03;
                        }
                        if (_0x462141 < 0) {
                            break;
                        }
                    }
                }
                _0x53ea03++;
            } while (_0x53ea03 <= 400);
            return {
                power: _0x33435a
            };
        }
        ;
        function setObserve() {
            if (!Object.observe2) {
                (function (e, t, n, r) {
                    'use strict';

                    var o;
                    var i;
                    var s = ["add", "update", "delete", "reconfigure", "setPrototype", "preventExtensions"];
                    var c = t.isArray || function (e) {
                        return function (t) {
                            return e.call(t) === "[object Array]";
                        };
                    }(e.prototype.toString);
                    var a = t.prototype.indexOf ? t.indexOf || function (e, n, r) {
                        return t.prototype.indexOf.call(e, n, r);
                    } : function (e, t, n) {
                        for (var r = n || 0; r < e.length; r++) {
                            if (e[r] === t) {
                                return r;
                            }
                        }
                        return -1;
                    };
                    var f = n.Map !== r && Map.prototype.forEach ? function () {
                        return new Map();
                    } : function () {
                        var e = [];
                        var t = [];
                        return {
                            size: 0,
                            has: function (t) {
                                return a(e, t) > -1;
                            },
                            get: function (n) {
                                return t[a(e, n)];
                            },
                            set: function (n, r) {
                                var o = a(e, n);
                                if (o === -1) {
                                    e.push(n);
                                    t.push(r);
                                    this.size++;
                                } else {
                                    t[o] = r;
                                }
                            },
                            delete: function (n) {
                                var r = a(e, n);
                                if (r > -1) {
                                    e.splice(r, 1);
                                    t.splice(r, 1);
                                    this.size--;
                                }
                            },
                            forEach: function (n) {
                                for (var r = 0; r < e.length; r++) {
                                    n.call(arguments[1], t[r], e[r], this);
                                }
                            }
                        };
                    };
                    var u = e.getOwnPropertyNames ? function () {
                        var t = e.getOwnPropertyNames;
                        try {
                            arguments.callee;
                        } catch (n) {
                            var r = (t(a).join(" ") + " ").replace(/prototype |length |name /g, "").slice(0, -1).split(" ");
                            if (r.length) {
                                t = function (t) {
                                    var n = e.getOwnPropertyNames(t);
                                    if (typeof t == "function") {
                                        var o;
                                        for (var i = 0; i < r.length;) {
                                            if ((o = a(n, r[i++])) > -1) {
                                                n.splice(o, 1);
                                            }
                                        }
                                    }
                                    return n;
                                };
                            }
                        }
                        return t;
                    }() : function (t) {
                        var n;
                        var r;
                        var o = [];
                        if ("hasOwnProperty" in t) {
                            for (n in t) {
                                if (t.hasOwnProperty(n)) {
                                    o.push(n);
                                }
                            }
                        } else {
                            r = e.hasOwnProperty;
                            for (n in t) {
                                if (r.call(t, n)) {
                                    o.push(n);
                                }
                            }
                        }
                        if (c(t)) {
                            o.push("length");
                        }
                        return o;
                    };
                    var p = e.getPrototypeOf;
                    var l = e.defineProperties && e.getOwnPropertyDescriptor;
                    var h = n.requestAnimationFrame || n.webkitRequestAnimationFrame || function () {
                        var e = +new Date();
                        var t = e;
                        return function (n) {
                            return setTimeout(function () {
                                n((t = +new Date()) - e);
                            }, 17);
                        };
                    }();
                    function v(e, t, n) {
                        var r = o.get(e);
                        if (r) {
                            d(r, e);
                            w(e, r, t, n);
                        } else {
                            r = b(e);
                            w(e, r, t, n);
                            if (o.size === 1) {
                                h(y);
                            }
                        }
                    }
                    function b(t, n) {
                        var r;
                        var i = u(t);
                        var s = [];
                        var c = 0;
                        var n = {
                            handlers: f(),
                            frozen: e.isFrozen ? e.isFrozen(t) : false,
                            extensible: e.isExtensible ? e.isExtensible(t) : true,
                            proto: p && p(t),
                            properties: i,
                            values: s,
                            notifier: j(t, n)
                        };
                        if (l) {
                            for (r = n.descriptors = []; c < i.length;) {
                                r[c] = l(t, i[c]);
                                s[c] = t[i[c++]];
                            }
                        } else {
                            while (c < i.length) {
                                s[c] = t[i[c++]];
                            }
                        }
                        o.set(t, n);
                        return n;
                    }
                    var d = function () {
                        var t = l ? function (e, t, n, r, o) {
                            var i = t.properties[n];
                            var s = e[i];
                            var c = t.values[n];
                            var a = t.descriptors[n];
                            if ("value" in o && (c === s ? c === 0 && 1 / c !== 1 / s : c === c || s === s)) {
                                m(e, t, {
                                    name: i,
                                    type: "update",
                                    object: e,
                                    oldValue: c
                                }, r);
                                t.values[n] = s;
                            }
                            if (!!a.configurable && (!o.configurable || o.writable !== a.writable || o.enumerable !== a.enumerable || o.get !== a.get || o.set !== a.set)) {
                                m(e, t, {
                                    name: i,
                                    type: "reconfigure",
                                    object: e,
                                    oldValue: c
                                }, r);
                                t.descriptors[n] = o;
                            }
                        } : function (e, t, n, r) {
                            var o = t.properties[n];
                            var i = e[o];
                            var s = t.values[n];
                            if (s === i ? s === 0 && 1 / s !== 1 / i : s === s || i === i) {
                                m(e, t, {
                                    name: o,
                                    type: "update",
                                    object: e,
                                    oldValue: s
                                }, r);
                                t.values[n] = i;
                            }
                        };
                        var n = l ? function (e, n, r, o, i) {
                            for (var s, c = n.length; r && c--;) {
                                if (n[c] !== null) {
                                    s = l(e, n[c]);
                                    r--;
                                    if (s) {
                                        t(e, o, c, i, s);
                                    } else {
                                        m(e, o, {
                                            name: n[c],
                                            type: "delete",
                                            object: e,
                                            oldValue: o.values[c]
                                        }, i);
                                        o.properties.splice(c, 1);
                                        o.values.splice(c, 1);
                                        o.descriptors.splice(c, 1);
                                    }
                                }
                            }
                        } : function (e, t, n, r, o) {
                            for (var i = t.length; n && i--;) {
                                if (t[i] !== null) {
                                    m(e, r, {
                                        name: t[i],
                                        type: "delete",
                                        object: e,
                                        oldValue: r.values[i]
                                    }, o);
                                    r.properties.splice(i, 1);
                                    r.values.splice(i, 1);
                                    n--;
                                }
                            }
                        };
                        return function (r, o, i) {
                            if (r.handlers.size && !r.frozen) {
                                var s;
                                var c;
                                var f;
                                var h;
                                var v;
                                var b;
                                var d;
                                var y;
                                var g = r.values;
                                var j = r.descriptors;
                                var w = 0;
                                if (r.extensible) {
                                    s = r.properties.slice();
                                    c = s.length;
                                    f = u(o);
                                    if (j) {
                                        while (w < f.length) {
                                            v = f[w++];
                                            h = a(s, v);
                                            y = l(o, v);
                                            if (h === -1) {
                                                m(o, r, {
                                                    name: v,
                                                    type: "add",
                                                    object: o
                                                }, i);
                                                r.properties.push(v);
                                                g.push(o[v]);
                                                j.push(y);
                                            } else {
                                                s[h] = null;
                                                c--;
                                                t(o, r, h, i, y);
                                            }
                                        }
                                        n(o, s, c, r, i);
                                        if (!e.isExtensible(o)) {
                                            r.extensible = false;
                                            m(o, r, {
                                                type: "preventExtensions",
                                                object: o
                                            }, i);
                                            r.frozen = e.isFrozen(o);
                                        }
                                    } else {
                                        while (w < f.length) {
                                            v = f[w++];
                                            h = a(s, v);
                                            b = o[v];
                                            if (h === -1) {
                                                m(o, r, {
                                                    name: v,
                                                    type: "add",
                                                    object: o
                                                }, i);
                                                r.properties.push(v);
                                                g.push(b);
                                            } else {
                                                s[h] = null;
                                                c--;
                                                t(o, r, h, i);
                                            }
                                        }
                                        n(o, s, c, r, i);
                                    }
                                } else if (!r.frozen) {
                                    for (; w < s.length; w++) {
                                        v = s[w];
                                        t(o, r, w, i, l(o, v));
                                    }
                                    if (e.isFrozen(o)) {
                                        r.frozen = true;
                                    }
                                }
                                if (p) {
                                    d = p(o);
                                    if (d !== r.proto) {
                                        m(o, r, {
                                            type: "setPrototype",
                                            name: "__proto__",
                                            object: o,
                                            oldValue: r.proto
                                        });
                                        r.proto = d;
                                    }
                                }
                            }
                        };
                    }();
                    function y() {
                        if (o.size) {
                            o.forEach(d);
                            i.forEach(g);
                            h(y);
                        }
                    }
                    function g(e, t) {
                        var n = e.changeRecords;
                        if (n.length) {
                            e.changeRecords = [];
                            t(n);
                        }
                    }
                    function j(e, t) {
                        if (arguments.length < 2) {
                            t = o.get(e);
                        }
                        return t && t.notifier || {
                            notify: function (t) {
                                t.type;
                                var n = o.get(e);
                                if (n) {
                                    var r;
                                    var i = {
                                        object: e
                                    };
                                    for (r in t) {
                                        if (r !== "object") {
                                            i[r] = t[r];
                                        }
                                    }
                                    m(e, n, i);
                                }
                            },
                            performChange: function (t, n) {
                                if (typeof t != "string") {
                                    throw new TypeError("Invalid non-string changeType");
                                }
                                if (typeof n != "function") {
                                    throw new TypeError("Cannot perform non-function");
                                }
                                var i;
                                var s;
                                var c = o.get(e);
                                var a = arguments[2];
                                var f = a === r ? n() : n.call(a);
                                if (c) {
                                    d(c, e, t);
                                }
                                if (c && f && typeof f == "object") {
                                    s = {
                                        object: e,
                                        type: t
                                    };
                                    for (i in f) {
                                        if (i !== "object" && i !== "type") {
                                            s[i] = f[i];
                                        }
                                    }
                                    m(e, c, s);
                                }
                            }
                        };
                    }
                    function w(e, t, n, r) {
                        var o = i.get(n);
                        if (!o) {
                            i.set(n, o = {
                                observed: f(),
                                changeRecords: []
                            });
                        }
                        o.observed.set(e, {
                            acceptList: r.slice(),
                            data: t
                        });
                        t.handlers.set(n, o);
                    }
                    function m(e, t, n, r) {
                        t.handlers.forEach(function (t) {
                            var o = t.observed.get(e).acceptList;
                            if ((typeof r != "string" || a(o, r) === -1) && a(o, n.type) > -1) {
                                t.changeRecords.push(n);
                            }
                        });
                    }
                    o = f();
                    i = f();
                    e.observe2 = function (t, n, o) {
                        if (!t || typeof t != "object" && typeof t != "function") {
                            throw new TypeError("Object.observe2 cannot observe2 non-object");
                        }
                        if (typeof n != "function") {
                            throw new TypeError("Object.observe2 cannot deliver to non-function");
                        }
                        if (e.isFrozen && e.isFrozen(n)) {
                            throw new TypeError("Object.observe2 cannot deliver to a frozen function object");
                        }
                        if (o === r) {
                            o = s;
                        } else if (!o || typeof o != "object") {
                            throw new TypeError("Third argument to Object.observe2 must be an array of strings.");
                        }
                        v(t, n, o);
                        return t;
                    };
                    e.unobserve = function (e, t) {
                        if (e === null || typeof e != "object" && typeof e != "function") {
                            throw new TypeError("Object.unobserve cannot unobserve non-object");
                        }
                        if (typeof t != "function") {
                            throw new TypeError("Object.unobserve cannot deliver to non-function");
                        }
                        var n;
                        var r = i.get(t);
                        if (r && (n = r.observed.get(e))) {
                            r.observed.forEach(function (e, t) {
                                d(e.data, t);
                            });
                            h(function () {
                                g(r, t);
                            });
                            if (r.observed.size === 1 && r.observed.has(e)) {
                                i.delete(t);
                            } else {
                                r.observed.delete(e);
                            }
                            if (n.data.handlers.size === 1) {
                                o.delete(e);
                            } else {
                                n.data.handlers.delete(t);
                            }
                        }
                        return e;
                    };
                    e.getNotifier = function (t) {
                        if (t === null || typeof t != "object" && typeof t != "function") {
                            throw new TypeError("Object.getNotifier cannot getNotifier non-object");
                        }
                        if (e.isFrozen && e.isFrozen(t)) {
                            return null;
                        } else {
                            return j(t);
                        }
                    };
                    e.deliverChangeRecords = function (e) {
                        if (typeof e != "function") {
                            throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");
                        }
                        var t = i.get(e);
                        if (t) {
                            t.observed.forEach(function (e, t) {
                                d(e.data, t);
                            });
                            g(t, e);
                        }
                    };
                })(Object, Array, this);
            }
        }
    })();
});



I(function () {
    function f1() {
        console.log(this);
        setTimeout(f1, 1000);
    }
    f1();
    console.trace(this);
    let TimeMax = 10000;
    let canva;
    let watemp;
    let jumps = [];
    let jumpsT1;
    let jumpsT2;
    let jumpsT3;
    let jumpsT4 = undefined;
    let JumpTornado = 0;
    let patemp;
    let altura;
    const round = Math.round;
    let frogButllet = new Image();
    frogButllet.src = "https://i.imgur.com/wKKcDW4.png";
    let frogButlletss = new Image();
    frogButlletss.src = "https://i.imgur.com/1xiJBmb.png";
    let nakButllet = new Image();
    nakButllet.src = "https://i.imgur.com/bxpTskl.png";
    let ligButlletss = new Image();
    ligButlletss.src = "https://i.imgur.com/ijuWliL.png";
    let ligr = new Image();
    ligr.src = "https://i.imgur.com/MjJGM45.png";
    let raon2 = new Image();
    raon2.src = "https://i.imgur.com/7Y5VMhw.png";
    let raonss = new Image();
    raonss.src = "https://i.imgur.com/p7he2Kp.png";
    let armorSSopen = new Image();
    armorSSopen.src = "https://i.imgur.com/Jzt4YKk.png";
    let boomerSS = new Image();
    boomerSS.src = "https://i.imgur.com/gy04Ghx.png";
    let turtleSS = new Image();
    turtleSS.src = "https://i.imgur.com/ir1arrY.png";
    let mageSS = new Image();
    mageSS.src = "https://i.imgur.com/nopYMxj.png";
    function posToCamXY(_0x43b1af, _0x1bbc34) {
        return {
            x: _0x43b1af - this.dragon2d.camera_x + 400,
            y: _0x1bbc34 - this.dragon2d.camera_y + 300
        };
    }
    const WEATHER_MIRROR = 7;
    const WEATHER_TORNADO = 8;
    const SIZE_TORNADO = 32;
    const SIZE_MIRROR = 25;
    const SIZE_ALL = 25;
    function drawWeathers() {
        for (let _0x1b944c of this.dragon2d.weathers) {
            const _0xb6b44d = _0x1b944c.weather_type;
            let _0x3699bc = _0xb6b44d === WEATHER_MIRROR ? -600 : -1500;
            let _0x3b4eba = posToCamXY.call(this, _0x1b944c.position.x, _0x3699bc);
            let _0x37582f = _0xb6b44d === WEATHER_MIRROR ? SIZE_MIRROR : _0xb6b44d === WEATHER_TORNADO ? SIZE_TORNADO * (_0x1b944c.size / 128) : SIZE_ALL * (_0x1b944c.size / 128);
            this.ctx.moveTo(_0x3b4eba.x + _0x37582f, _0x3b4eba.y);
            this.ctx.lineTo(_0x3b4eba.x + _0x37582f, 1000);
            this.ctx.moveTo(_0x3b4eba.x - _0x37582f, _0x3b4eba.y);
            this.ctx.lineTo(_0x3b4eba.x - _0x37582f, 1000);
            this.ctx.stroke();
        }
        this.ctx.beginPath();
    }
    function WeatherColision(_0x510532) {
        for (let _0x3abd16 of this.dragon2d.weathers) {
            const _0x4f5ee6 = _0x3abd16.weather_type;
            if (_0x4f5ee6 === WEATHER_MIRROR) {
                WeatherMirror.call(this, _0x3abd16, _0x510532);
            }
            if (_0x4f5ee6 === WEATHER_TORNADO) {
                WeatherTornado.call(this, _0x3abd16, _0x510532);
            }
        }
    }
    function WeatherMirror(_0x4e86e5, _0x409610) {
        const _0x3ff6d5 = this.zp.GetPosAtTime(_0x409610, jumps);
        let _0x504c93 = this.zp.GetAngleAtTime(_0x409610, jumps);
        const _0x29d7a8 = 25;
        const _0x5ed97a = round(Math.sqrt(Math.pow(_0x4e86e5.x - round(_0x3ff6d5.x), 2)));
        const _0x574992 = round(Math.sqrt(Math.pow(_0x4e86e5.x - round(this.mex), 2)));
        let _0x48e271 = _0x574992 < _0x29d7a8;
        let _0x5389e3 = _0x48e271 ? _0x4e86e5.x === Math.trunc(_0x3ff6d5.x) && round(_0x3ff6d5.y) > -600 && this.timeTemp < _0x409610 : _0x5ed97a < _0x29d7a8 && round(_0x3ff6d5.y) > -600 && this.timeTemp < _0x409610;
        if (_0x5389e3) {
            let _0xea7e49 = this.zp.GetPowerAtTime(_0x409610, jumps);
            let _0x3b1a3e = new Vector(round(_0x504c93), round(_0xea7e49));
            let _0x43d95b = [_0x409610, round(_0x3ff6d5.x), round(_0x3ff6d5.y), -round(_0x3b1a3e.x), -round(_0x3b1a3e.y)];
            jumps.push(_0x43d95b);
            this.timeTemp = _0x409610 + 10;
        }
        ;
    }
    function WeatherTornado(_0x56186e, _0x573e0c) {
        const _0x4561e4 = SIZE_TORNADO * (_0x56186e.size / 128);
        let _0x21c8ea = this.zp.GetPosAtTime(_0x573e0c, jumps);
        const _0x859081 = round(Math.sqrt(Math.pow(_0x56186e.x - round(_0x21c8ea.x), 2)));
        if (_0x859081 < _0x4561e4 && !JumpTornado) {
            let _0x1b2f9f = this.zp.GetPosAtTime(_0x573e0c, jumps);
            let _0x490499 = -this.zp.GetAngleAtTime(_0x573e0c, jumps);
            let _0x2e25b5 = this.zp.GetPowerAtTime(_0x573e0c, jumps);
            let _0x46d867 = new Vector(round(_0x490499), round(_0x2e25b5));
            let _0x146a63 = [_0x573e0c, round(_0x1b2f9f.x), round(_0x1b2f9f.y), round(_0x46d867.x), round(_0x46d867.y), 0, 0, 1];
            JumpTornado = 1;
            jumps.push(_0x146a63);
            jumpsT1 = _0x146a63;
        } else if (_0x859081 > _0x4561e4 && _0x859081 < _0x4561e4 + 2 && JumpTornado === 1) {
            const [_0x11a420, _0x4aaa17, _0x2c3003, _0x1be3a1, _0x195bed] = jumpsT1;
            let _0x106786 = this.zp.GetPosAtTime(_0x573e0c, jumps);
            let _0x2b6bbe = [_0x573e0c, _0x106786.x, _0x106786.y, -_0x1be3a1, _0x195bed, 0, 0];
            JumpTornado = 2;
            jumps.push(_0x2b6bbe);
            jumpsT2 = _0x2b6bbe;
        } else if (_0x859081 > _0x4561e4 && _0x859081 < _0x4561e4 + 2 && JumpTornado === 2) {
            const [_0x8f173d, _0x5b425d, _0x1bf3e, _0x5567c4, _0x106423] = jumpsT2;
            let _0x4fdd8a = this.zp.GetPosAtTime(_0x573e0c, jumps);
            let _0x7a36c2 = [_0x573e0c, _0x4fdd8a.x, _0x4fdd8a.y, -_0x5567c4, _0x106423, 0, 0, 1];
            JumpTornado = 3;
            jumps.push(_0x7a36c2);
            jumpsT3 = _0x7a36c2;
        } else if (_0x859081 > _0x4561e4 && _0x859081 < _0x4561e4 + 2 && JumpTornado === 3) {
            const [_0x5604d2, _0x4f1008, _0x26ee95, _0x336036, _0x546c1c] = jumpsT3;
            let _0x1af9f7 = this.zp.GetPosAtTime(_0x573e0c, jumps);
            let _0x162b53 = [_0x573e0c, _0x1af9f7.x, _0x1af9f7.y, _0x336036, _0x546c1c, round(this.zp.ax), round(this.zp.ay)];
            JumpTornado = 0;
            jumps.push(_0x162b53);
            jumpsT4 = _0x162b53;
        }
    }
    Pacmanbot.Utils['C'] = function () {
        if (!this.game) {
            return;
        }
        if (!$("#lines").length) {
            canva = $("<canvas id=\"lines\"></canvas>").appendTo($("#gameScreen"));
            let _0x4fe33e = document.getElementById("lines");
            this.ctx = _0x4fe33e.getContext("2d");
            _0x4fe33e.width = 800;
            _0x4fe33e.height = 600;
        }
        this.ctx.clearRect(0, 0, 800, 600);
        const _0x1011a5 = (_0x4c45ed, _0x18b146, _0x5ef4bd, _0x46cb6) => {
            jumps = [];
            JumpTornado = 0;
            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = this.mobile.color;
            this.ctx.font = "9px Arial";
            const _0x16c0e7 = this.a360 + _0x18b146;
            const _0x553a4b = this.power_return + _0x5ef4bd;
            const _0x534747 = this.ax - this.c_ax;
            const _0x30b296 = this.ay - this.c_ay;
            drawWeathers.call(this);
            this.zp = new ZotataPhysics(this.mex, this.mey, this.a360 + _0x18b146, this.power_return + _0x5ef4bd, this.ax - this.c_ax, this.ay - this.c_ay);
            this.timeTemp = 0;
            for (let _0xe86f79 = 0; _0xe86f79 < TimeMax; _0xe86f79++) {
                WeatherColision.call(this, _0xe86f79);
                let _0x4705c2 = _0x4c45ed === "line" ? this.zp.GetPosAtTime(_0xe86f79, jumps) : _0x4c45ed === "Orbit" ? this.zp.GetPosAtTimeOrbit(_0xe86f79, jumps, _0x46cb6[0], _0x46cb6[1], _0x46cb6[2], _0x46cb6[3]) : _0x4c45ed === "Wave" ? this.zp.GetPosAtTimeWave(_0xe86f79, jumps, _0x46cb6[0]) : this.zp.GetPosAtTime(_0xe86f79, jumps);
                let _0x6a68b3 = posToCamXY.call(this, _0x4705c2.x, _0x4705c2.y);
                if (this.mobile.name === "KALSIDDON") {
                    _0x3a0e12(_0xe86f79, _0x6a68b3, _0x4705c2);
                }
                if (this.mobile.name == "ARMOR") {
                    if (_0xe86f79 == 1800) {
                        let _0x15db08 = this.zp.GetAngleAtTime(_0xe86f79, jumps);
                        this.ctx.save();
                        this.ctx.translate(_0x6a68b3.x, _0x6a68b3.y);
                        this.ctx.rotate(_0x15db08 * Math.PI / 180);
                        this.ctx.drawImage(armorSSopen, -armorSSopen.width / 2, -armorSSopen.height / 2);
                        this.ctx.restore();
                        this.ctx.stroke();
                        this.ctx.beginPath();
                    }
                    if (_0xe86f79 >= 1800) {
                        this.ctx.strokeStyle = "#380101";
                    }
                }
                if (this.mobile.name == "BOOMER") {
                    if (_0xe86f79 == 1540) {
                        let _0x2ab695 = this.zp.GetAngleAtTime(_0xe86f79, jumps);
                        if (!this.me.look) {
                            _0x2ab695 += 180;
                        }
                        this.ctx.save();
                        this.ctx.translate(_0x6a68b3.x, _0x6a68b3.y);
                        this.ctx.rotate(_0x2ab695 * Math.PI / 180);
                        this.ctx.drawImage(boomerSS, -boomerSS.width / 2, -boomerSS.height / 2);
                        this.ctx.restore();
                        this.ctx.stroke();
                        this.ctx.beginPath();
                    }
                    if (_0xe86f79 >= 1540) {
                        this.ctx.strokeStyle = "orange";
                    }
                }
                if (this.mobile.name == "TURTLE" && this.shot_type != 1) {
                    if (_0xe86f79 == 2200) {
                        let _0x158b58 = this.zp.GetAngleAtTime(_0xe86f79, jumps);
                        _0x158b58 += 60;
                        this.ctx.save();
                        this.ctx.translate(_0x6a68b3.x, _0x6a68b3.y);
                        this.ctx.rotate(_0x158b58 * Math.PI / 180);
                        this.ctx.drawImage(turtleSS, -turtleSS.width / 2, -turtleSS.height / 2);
                        this.ctx.restore();
                        this.ctx.stroke();
                        this.ctx.beginPath();
                    }
                    if (_0xe86f79 >= 2200) {
                        this.ctx.strokeStyle = "BlueViolet";
                    }
                }
                if (this.mobile.name == "NAK" && this.shot_type == 1) {
                    if (_0x1eb113 != Math.sign(_0x4705c2.a) && _0x1eb113 < 0) {
                        _0x30b8db = _0xe86f79;
                    }
                    _0x1eb113 = Math.sign(_0x4705c2.a);
                    if (this.game.ground.IsPixel(Math.round(_0x4705c2.x), Math.round(_0x4705c2.y))) {
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.strokeStyle = "orange";
                        let _0x146c0c = -this.zp.GetAngleAtTime(_0xe86f79, jumps);
                        _0x146c0c = (_0x146c0c + 360) % 360;
                        let _0x31f695 = this.zp.GetPowerAtTime(_0xe86f79, jumps);
                        if (_0x31f695 < 100) {
                            _0x31f695 = 100;
                        }
                        this.zp = new ZotataPhysics(Math.round(_0x4705c2.x), Math.round(_0x4705c2.y), _0x146c0c, _0x31f695, 0, -1440);
                        for (let _0x14cbd6 = 0; _0x14cbd6 < TimeMax; _0x14cbd6++) {
                            WeatherColision.call(this, _0x14cbd6);
                            let _0x3c6e22 = this.zp.GetPosAtTime(_0x14cbd6, jumps);
                            let _0x4f333d = posToCamXY.call(this, _0x3c6e22.x, _0x3c6e22.y);
                            if (!this.game.ground.IsPixel(Math.round(_0x3c6e22.x), Math.round(_0x3c6e22.y))) {
                                this.ctx.save();
                                this.ctx.drawImage(nakButllet, _0x4f333d.x - nakButllet.width / 2, _0x4f333d.y - nakButllet.height / 2);
                                this.ctx.restore();
                                break;
                            }
                            this.ctx.lineTo(_0x4f333d.x, _0x4f333d.y);
                        }
                        break;
                    }
                }
                if (this.mobile.name == "FROG" && this.game.ground.IsPixel(Math.round(_0x4705c2.x), Math.round(_0x4705c2.y))) {
                    let _0x305e80 = posToCamXY.call(this, Math.round(_0x4705c2.x), Math.round(_0x4705c2.y));
                    let _0x5c9f12 = this;
                    function _0x57cc2f() {
                        cancelAnimationFrame(Pacmanbot.Utils.anim);
                        let _0xc6cc2f = new Date();
                        let _0x37b5da = Math.PI * 2 / 1.5 * _0xc6cc2f.getSeconds() + Math.PI * 2 / 1500 * _0xc6cc2f.getMilliseconds();
                        if (_0x5c9f12.shot_type == 0) {
                            _0x37b5da = -_0x37b5da;
                        }
                        if (_0x5c9f12.shot_type == 2 && !_0x5c9f12.me.look) {
                            _0x37b5da = -_0x37b5da;
                        } else {
                            _0x37b5da = _0x37b5da;
                        }
                        _0x5c9f12.ctx.save();
                        _0x5c9f12.ctx.translate(_0x305e80.x, _0x305e80.y);
                        _0x5c9f12.ctx.clearRect(-15, -15, 30, 30);
                        _0x5c9f12.ctx.rotate(_0x37b5da);
                        let _0xca5ff4 = _0x5c9f12.shot_type == 2 ? frogButlletss : frogButllet;
                        _0x5c9f12.ctx.drawImage(_0xca5ff4, -_0xca5ff4.width / 2, -_0xca5ff4.height / 2);
                        _0x5c9f12.ctx.restore();
                        Pacmanbot.Utils.anim = requestAnimationFrame(_0x57cc2f);
                    }
                    _0x57cc2f();
                    break;
                } else {
                    cancelAnimationFrame(Pacmanbot.Utils.anim);
                }
                if (this.mobile.name == "LIGHTNING" && this.game.ground.IsPixel(Math.round(_0x4705c2.x), Math.round(_0x4705c2.y))) {
                    let _0x177deb = posToCamXY.call(this, Math.round(_0x4705c2.x), Math.round(_0x4705c2.y));
                    if (this.shot_type == 0) {
                        this.ctx.drawImage(ligr, _0x177deb.x - 27, _0x177deb.y - 756);
                    } else if (this.shot_type == 1) {
                        this.ctx.save();
                        this.ctx.translate(_0x177deb.x, _0x177deb.y);
                        this.ctx.rotate(Math.PI * 45 / 180);
                        this.ctx.drawImage(ligr, -27, -756);
                        this.ctx.rotate(Math.PI * -90 / 180);
                        this.ctx.drawImage(ligr, -27, -756);
                        this.ctx.restore();
                    } else if (this.shot_type == 2) {
                        let _0x16fd58 = Dist2Points(Math.round(_0x4705c2.x), Math.round(_0x4705c2.y), this.en.x, this.en.y);
                        let _0x212f1c = Dist2Points(Math.round(_0x4705c2.x), Math.round(_0x4705c2.y), this.me.x, this.me.y);
                        if (_0x16fd58 <= 140) {
                            let _0x2ac6d9 = posToCamXY.call(this, this.en.x, this.en.y);
                            this.ctx.drawImage(ligr, _0x2ac6d9.x - 27, _0x2ac6d9.y - 756);
                        }
                        if (_0x212f1c <= 140) {
                            let _0x2f4ebf = posToCamXY.call(this, this.me.x, this.me.y);
                            this.ctx.drawImage(ligr, _0x2f4ebf.x - 27, _0x2f4ebf.y - 756);
                        }
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.lineWidth = 1;
                        this.ctx.arc(_0x177deb.x, _0x177deb.y, 140, 0, Math.PI * 2);
                        this.ctx.drawImage(ligButlletss, _0x177deb.x - 143, _0x177deb.y - 147, 305, 305);
                        this.ctx.stroke();
                    }
                    break;
                }
                if (this.mobile.name == "MAGE" && this.game.ground.IsPixel(Math.round(_0x4705c2.x), Math.round(_0x4705c2.y)) && this.shot_type != 1 && this.shot_type != 0) {
                    let _0x1986f1 = posToCamXY.call(this, Math.round(_0x4705c2.x), Math.round(_0x4705c2.y));
                    if (this.shot_type == 2) {
                        let _0x14ba84 = Dist2Points(Math.round(_0x4705c2.x), Math.round(_0x4705c2.y), this.en.x, this.en.y);
                        let _0x503017 = Dist2Points(Math.round(_0x4705c2.x), Math.round(_0x4705c2.y), this.me.x, this.me.y);
                        let _0x3184d2 = posToCamXY.call(this, this.en.x, this.en.y);
                        if (_0x14ba84 <= 58) {
                            this.ctx.stroke();
                            this.ctx.beginPath();
                            this.ctx.lineWidth = 8;
                            this.ctx.strokeStyle = "red";
                            this.ctx.arc(_0x3184d2.x, _0x3184d2.y, 4, 0, Math.PI * 2);
                        }
                        if (_0x503017 <= 58) {
                            let _0x59b687 = posToCamXY.call(this, this.me.x, this.me.y);
                            this.ctx.stroke();
                            this.ctx.beginPath();
                            this.ctx.lineWidth = 8;
                            this.ctx.strokeStyle = "red";
                            this.ctx.arc(_0x59b687.x, _0x59b687.y, 4, 0, Math.PI * 2);
                        }
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.lineWidth = 1;
                        this.ctx.strokeStyle = "blue";
                        this.ctx.arc(_0x1986f1.x, _0x1986f1.y, 50, 0, Math.PI * 2);
                        this.ctx.drawImage(mageSS, _0x1986f1.x - 64, _0x1986f1.y - 64);
                        this.ctx.stroke();
                    }
                    break;
                }
                if (this.mobile.name == "RAON" && this.game.ground.IsPixel(Math.round(_0x4705c2.x), Math.round(_0x4705c2.y)) && this.shot_type != 0) {
                    if (this.shot_type == 1) {
                        let _0x98e926 = posToCamXY.call(this, Math.round(_0x4705c2.x), Math.round(_0x4705c2.y));
                        this.ctx.drawImage(raon2, _0x98e926.x - 10, _0x98e926.y - 27);
                    } else if (this.shot_type == 2) {
                        let _0x549d44 = posToCamXY.call(this, Math.round(_0x4705c2.x), Math.round(_0x4705c2.y));
                        this.ctx.drawImage(raonss, _0x549d44.x - 9, _0x549d44.y - 29);
                    }
                    break;
                }
                this.ctx.lineTo(_0x6a68b3.x, _0x6a68b3.y);
            }
            this.ctx.stroke();
        };
        let _0x574c24 = (_0x232ea1, _0x3abe07, _0x2eb1a9) => {
            if (_0x232ea1 == _0x2eb1a9) {
                this.ctx.fillStyle = "black";
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.fillRect(_0x3abe07.x + 10, _0x3abe07.y + 2, 40, -10);
                this.ctx.fillStyle = "white";
                this.ctx.fillText("SS Open", _0x3abe07.x + 10, _0x3abe07.y);
            }
            if (_0x232ea1 >= _0x2eb1a9) {
                this.ctx.strokeStyle = "red";
            }
        };
        let _0x1eb113;
        let _0x30b8db;
        let _0x3a0e12 = (_0x4ddf7f, _0x412e38, _0xba94bd) => {
            if (_0x1eb113 != Math.sign(_0xba94bd.a) && _0x1eb113 < 0) {
                _0x30b8db = _0x4ddf7f;
            }
            _0x1eb113 = Math.sign(_0xba94bd.a);
            if (_0x4ddf7f == _0x30b8db + 30) {
                this.ctx.fillStyle = "black";
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.fillRect(_0x412e38.x + 10, _0x412e38.y + 2, 50, -10);
                this.ctx.fillStyle = "white";
                this.ctx.fillText("Open Shot", _0x412e38.x + 10, _0x412e38.y);
            }
            if (_0x4ddf7f >= _0x30b8db + 30) {
                this.ctx.strokeStyle = "lime";
            }
        };
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.font = "12px Arial";
        this.ctx.fillRect(400, 492, 85, -14);
        this.ctx.fillRect(400, 507, 85, -14);
        this.ctx.fillStyle = "#fff";
        this.ctx.fillText("Vida: " + (this.en.hp + this.en.shield), 400, 490);
        this.ctx.fillText("Calibrador: " + Math.round(this.c / 2), 400, 505);
        if (watemp !== this.wa) {
            this.cd = 0;
        }
        watemp = this.wa;
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = this.color;
        let _0x5a1dfc = posToCamXY.call(this, this.x2, this.y2);
        this.ctx.arc(_0x5a1dfc.x, _0x5a1dfc.y, 2.5, 0, Math.PI * 2);
        this.ctx.stroke();
        let _0x15bff9 = 100;
        if (this.mobile.name == "BOOMER") {
            _0x15bff9 = 50;
        }
        let _0x30b1b6 = Math.round(Math.cos(this.wa * Math.PI / 180) * this.wp * this.mobile.ay) / _0x15bff9;
        let _0x27a627 = Math.round(Math.sin(this.wa * Math.PI / 180) * this.wp * this.mobile.ay - this.mobile.ax) / _0x15bff9;
        this.ax = Math.round(_0x30b1b6);
        this.ay = Math.round(this.mobile.ay - _0x27a627);
        if (!this.Power_Full) {
            this.Power_Full = this.mobile.power;
        }
        this.power_return = Math.round(this.power * this.Power_Full / 400);
        switch (this.mobile.name) {
            case "TRICO":
                _0x1011a5("line", 0, 0, []);
                if (this.shot_type == 0 || this.shot_type == 2) {
                    break;
                }
                if (this.me.look) {
                    _0x1011a5("Orbit", 0, 0, [0, -150, 0.5, 45]);
                    _0x1011a5("Orbit", 0, 0, [180, -150, 0.5, 45]);
                } else {
                    _0x1011a5("Orbit", 0, 0, [90, 150, 0.5, 45]);
                    _0x1011a5("Orbit", 0, 0, [270, 150, 0.5, 45]);
                }
                break;
            case "TURTLE":
                if (this.shot_type == 0 || this.shot_type == 2) {
                    _0x1011a5("line", 0, 0, []);
                } else {
                    _0x1011a5("Wave", 0, 0, [3]);
                    _0x1011a5("Wave", 0, 0, [4]);
                }
                break;
            case "MAGE":
                if (this.shot_type == 0 || this.shot_type == 2) {
                    _0x1011a5("line", 0, 0, []);
                } else {
                    _0x1011a5("Wave", 0, 0, [1]);
                    _0x1011a5("Wave", 0, 0, [2]);
                }
                break;
            case "GRUB":
                _0x1011a5("line", 0, 0, []);
                if (this.shot_type == 0 || this.shot_type == 2) {
                    break;
                }
                _0x1011a5("line", 4, 9, []);
                _0x1011a5("line", 2, 4, []);
                _0x1011a5("line", -2, -6, []);
                break;
            case "RAON":
                if (this.shot_type == 0 || this.shot_type == 2) {
                    _0x1011a5("line", 0, 0, []);
                } else {
                    _0x1011a5("line", 0, 28, []);
                    _0x1011a5("line", 0, -28, []);
                }
                break;
            case "DRAGON2":
                if (this.shot_type == 0 || this.shot_type == 2) {
                    _0x1011a5("line", 0, 0, []);
                } else {
                    _0x1011a5("line", 1, 20, []);
                    _0x1011a5("line", -1, -20, []);
                }
                break;
            case "ELECTRICO":
                if (this.shot_type == 0) {
                    _0x1011a5("line", -2, 0, []);
                    _0x1011a5("line", 2, 10, []);
                    _0x1011a5("line", -4, -10, []);
                    _0x1011a5("line", 4, 20, []);
                } else if (this.shot_type == 1) {
                    _0x1011a5("line", 0, 0, []);
                    if (this.me.look) {
                        _0x1011a5("Orbit", 0, 0, [0, -150, 0.5, 45]);
                        _0x1011a5("Orbit", 0, 0, [180, -150, 0.5, 45]);
                    } else {
                        _0x1011a5("Orbit", 0, 0, [90, 150, 0.5, 45]);
                        _0x1011a5("Orbit", 0, 0, [270, 150, 0.5, 45]);
                    }
                } else if (this.shot_type == 2) {
                    _0x1011a5("line", 0, 0, []);
                }
                break;
            case "BIGFOOT":
            case "DRAGON":
                if (this.shot_type === 0 || this.shot_type === 2) {
                    _0x1011a5("line", -2, 0, []);
                    _0x1011a5("line", 2, 10, []);
                    _0x1011a5("line", -4, -10, []);
                    _0x1011a5("line", 4, 20, []);
                } else if (this.shot_type == 1) {
                    _0x1011a5("line", 5, 19, []);
                    _0x1011a5("line", 0, 3, []);
                    _0x1011a5("line", -5, -13, []);
                }
                break;
            case "JD":
                _0x1011a5("line", 0, 0, []);
                let _0x75ae1d = posToCamXY.call(this, this.me.x, this.me.y);
                let _0x13710a = posToCamXY.call(this, this.x2, this.y2);
                this.ctx.beginPath();
                this.ctx.strokeStyle = "red";
                this.ctx.moveTo(_0x75ae1d.x + 62, _0x75ae1d.y + 60);
                this.ctx.lineTo(_0x75ae1d.x + 62, _0x75ae1d.y - 60);
                this.ctx.moveTo(_0x75ae1d.x - 62, _0x75ae1d.y + 60);
                this.ctx.lineTo(_0x75ae1d.x - 62, _0x75ae1d.y - 60);
                this.ctx.moveTo(_0x13710a.x + 62, _0x13710a.y + 60);
                this.ctx.lineTo(_0x13710a.x + 62, _0x13710a.y - 60);
                this.ctx.moveTo(_0x13710a.x - 62, _0x13710a.y + 60);
                this.ctx.lineTo(_0x13710a.x - 62, _0x13710a.y - 60);
                this.ctx.font = "8px Arial";
                this.ctx.fillStyle = "black";
                this.ctx.fillRect(_0x75ae1d.x + 64, _0x75ae1d.y + 2, 12, -10);
                this.ctx.fillStyle = "white";
                this.ctx.fillText("SS", _0x75ae1d.x + 64, _0x75ae1d.y);
                this.ctx.stroke();
                break;
            case "FROG":
                _0x1011a5("line", 0, 0, []);
                let _0x4a84a3 = 75;
                if (this.shot_type == 2) {
                    _0x4a84a3 = 0;
                }
                let _0x233c5e = posToCamXY.call(this, this.en.x, this.en.y);
                this.ctx.beginPath();
                this.ctx.lineWidth = 1;
                this.ctx.strokeStyle = "#006400";
                this.ctx.arc(_0x233c5e.x, _0x233c5e.y, _0x4a84a3, 0, Math.PI * 2);
                this.ctx.stroke();
                break;
            default:
                _0x1011a5("line", 0, 0, []);
                break;
        }
    };
    function Vector(_0x3a2ed9, _0x3f8519) {
        this.ang = _0x3a2ed9;
        this.size = _0x3f8519;
        this.x = Math.cos(AngleToRad(_0x3a2ed9)) * _0x3f8519;
        this.y = -Math.sin(AngleToRad(_0x3a2ed9)) * _0x3f8519;
    }
    function AngleToRad(_0x1b9361) {
        return _0x1b9361 * Math.PI / 180;
    }
    function RadToAngle(_0x1bdf1a) {
        return _0x1bdf1a * 180 / Math.PI;
    }
    function Dist2Points(_0x2ce82c, _0x5518c7, _0x3dfc76, _0x475fc1) {
        return Math.hypot(_0x3dfc76 - _0x2ce82c, _0x475fc1 - _0x5518c7);
    }
    function CalcOrbitPoint(_0x32bc21, _0x4e2604, _0x5c60ca, _0x415dff) {
        return {
            x: _0x32bc21 + _0x5c60ca * Math.cos(AngleToRad(_0x415dff)),
            y: _0x4e2604 - _0x5c60ca * Math.sin(AngleToRad(_0x415dff))
        };
    }
    function ZotataPhysics(_0x41be8b, _0x393140, _0x508ced, _0x3a2ba0, _0x2c97a3, _0x160c38) {
        this.x0 = _0x41be8b;
        this.y0 = _0x393140;
        this.v = new Vector(_0x508ced, _0x3a2ba0);
        this.ax = _0x2c97a3;
        this.ay = _0x160c38;
    }
    ZotataPhysics.prototype.GetPosAtTime = function (_0x2b842f, _0x41da57) {
        _0x41da57 ||= [];
        var _0x59ef81 = -1;
        for (var _0x352c4a = 0; _0x352c4a < _0x41da57.length; _0x352c4a++) {
            if (_0x2b842f >= _0x41da57[_0x352c4a][0]) {
                _0x59ef81 = _0x352c4a;
            }
        }
        var _0x2aa9ed;
        var _0x6c3e22;
        var _0xd66530;
        var _0x3a584c;
        var _0x384cd4;
        var _0x58ba0d;
        var _0x9aeb8d;
        var _0x352c4a = 0;
        _0x384cd4 = this.ax;
        _0x58ba0d = this.ay;
        if (_0x59ef81 == -1) {
            _0x2aa9ed = this.x0;
            _0x6c3e22 = this.y0;
            _0xd66530 = this.v.x;
            _0x3a584c = this.v.y;
            _0x9aeb8d = _0x2b842f / 1000;
        } else {
            _0x2aa9ed = _0x41da57[_0x59ef81][1];
            _0x6c3e22 = _0x41da57[_0x59ef81][2];
            _0xd66530 = _0x41da57[_0x59ef81][3];
            _0x3a584c = _0x41da57[_0x59ef81][4];
            if (_0x41da57[_0x59ef81][5] != undefined) {
                _0x384cd4 = _0x41da57[_0x59ef81][5];
            }
            if (_0x41da57[_0x59ef81][6] != undefined) {
                _0x58ba0d = _0x41da57[_0x59ef81][6];
            }
            if (_0x41da57[_0x59ef81][7] != undefined) {
                _0x352c4a = _0x41da57[_0x59ef81][7];
            }
            _0x9aeb8d = (_0x2b842f - _0x41da57[_0x59ef81][0]) / 1000;
        }
        var _0x59ef81 = _0x2aa9ed + _0xd66530 * _0x9aeb8d + _0x384cd4 * _0x9aeb8d * _0x9aeb8d / 2;
        var _0x244fa3 = _0x6c3e22 + _0x3a584c * _0x9aeb8d + _0x58ba0d * _0x9aeb8d * _0x9aeb8d / 2;
        _0x9aeb8d -= 0.005;
        _0x2aa9ed = RadToAngle(Math.atan2(_0x244fa3 - (_0x6c3e22 + _0x3a584c * _0x9aeb8d + _0x58ba0d * _0x9aeb8d * _0x9aeb8d / 2), _0x59ef81 - (_0x2aa9ed + _0xd66530 * _0x9aeb8d + _0x384cd4 * _0x9aeb8d * _0x9aeb8d / 2)));
        return {
            x: _0x59ef81,
            y: _0x244fa3,
            a: _0x2aa9ed,
            z: _0x352c4a
        };
    };
    ZotataPhysics.prototype.GetPosAtTimeOrbit = function (_0x29b15e, _0x1529b6, _0x37a607, _0x3367eb, _0x5e8fba, _0xef43c0) {
        var _0x5271fc = _0x29b15e / 1000;
        _0x29b15e = this.GetPosAtTime(_0x29b15e, _0x1529b6);
        _0x37a607 = CalcOrbitPoint(_0x29b15e.x, _0x29b15e.y, _0x5271fc >= _0x5e8fba ? _0xef43c0 : _0xef43c0 * _0x5271fc / _0x5e8fba, _0x37a607 + _0x3367eb * _0x5271fc);
        _0x37a607.z = _0x29b15e.z;
        return _0x37a607;
    };
    ZotataPhysics.prototype.GetPosAtTimeWave = function (_0x3d2e1d, _0x21dbe6, _0x5beb73) {
        _0x21dbe6 = this.GetPosAtTime(_0x3d2e1d, _0x21dbe6);
        var _0x51da4e = _0x21dbe6.a;
        if (_0x5beb73 == 1 || _0x5beb73 == 2) {
            _0x3d2e1d = Math.sin(_0x3d2e1d / 60) * 15;
            _0x5beb73 = -_0x51da4e + (_0x5beb73 == 1 ? 90 : -90);
        } else if (_0x5beb73 == 3 || _0x5beb73 == 4) {
            _0x5beb73 = -_0x51da4e + (_0x5beb73 == 3 ? 90 : -90);
            _0x3d2e1d = _0x3d2e1d < 400 ? _0x3d2e1d / 400 * 25 : _0x3d2e1d < 2200 ? Math.cos((_0x3d2e1d - 400) / 95) * 25 : _0x3d2e1d < 2600 ? 25 - (_0x3d2e1d - 1800 - 400) / 400 * 22 : 3;
        } else if (_0x5beb73 == 5 || _0x5beb73 == 6 || _0x5beb73 == 7) {
            _0x3d2e1d = _0x5beb73 == 5 ? Math.sin(_0x3d2e1d / 60) * 15 : _0x5beb73 == 6 ? Math.sin(_0x3d2e1d / 60 + AngleToRad(120)) * 15 : Math.sin(_0x3d2e1d / 60 + AngleToRad(240)) * 15;
            _0x5beb73 = -_0x51da4e + 90;
        } else {
            _0x5beb73 = _0x3d2e1d = 0;
        }
        _0x3d2e1d = CalcOrbitPoint(_0x21dbe6.x, _0x21dbe6.y, _0x3d2e1d, _0x5beb73);
        _0x3d2e1d.z = _0x21dbe6.z;
        return _0x3d2e1d;
    };
    ZotataPhysics.prototype.GetAngleAtTime = function (_0x1269b4, _0x535306) {
        var _0x552383 = this.GetPosAtTime(_0x1269b4 - 5, _0x535306);
        var _0x40cc89 = this.GetPosAtTime(_0x1269b4 + 5, _0x535306);
        return RadToAngle(Math.atan2(_0x40cc89.y - _0x552383.y, _0x40cc89.x - _0x552383.x));
    };
    ZotataPhysics.prototype.GetAngleAtTimeWave = function (_0x23e1d9, _0x261f74, _0x44844b) {
        var _0x499fe1 = this.GetPosAtTimeWave(_0x23e1d9 - 5, _0x261f74, _0x44844b);
        _0x23e1d9 = this.GetPosAtTimeWave(_0x23e1d9 + 5, _0x261f74, _0x44844b);
        return RadToAngle(Math.atan2(_0x23e1d9.y - _0x499fe1.y, _0x23e1d9.x - _0x499fe1.x));
    };
    ZotataPhysics.prototype.GetPowerAtTime = function (_0x1bb2a3, _0x443395) {
        var _0x152b0f = this.GetPosAtTime(_0x1bb2a3, _0x443395);
        var _0x542aab = this.GetPosAtTime(_0x1bb2a3 - 1, _0x443395);
        return Math.sqrt((_0x152b0f.y - _0x542aab.y) ** 2 + (_0x152b0f.x - _0x542aab.x) ** 2) * 1000;
    };
    ZotataPhysics.prototype.GetTimeMax = function (_0x1d8d16, _0x2601d7) {
        return Math.ceil(-this.v.y / this.ay) * 1000;
    };
});

I(function () {
    globalThis.String.prototype.ins = function (_0x40a9e1, _0x1b7c02) {
        var _0x2caddc = this.indexOf(_0x40a9e1);
        if (_0x2caddc >= 0) {
            return this.slice(0, _0x2caddc + _0x40a9e1.length) + _0x1b7c02 + this.slice(_0x2caddc + _0x40a9e1.length);
        }
        throw _0x40a9e1 + " not found...";
    };
    window.XA = function (_0x55b96b) {
        var _0x55b96b = _0x55b96b.split("=");
        if (_0x55b96b.length > 1) {
            _0x55b96b = _0x55b96b[1].split("//#")[0].trim();
            return parseInt(_0x55b96b, 16);
        } else {
            return null;
        }
    };
});

I(function () {
    setTimeout(function () {
        window.Date = window.DateSave;
        let _0x213aa0 = document.getElementsByTagName("script");
        let filterScript = "";
        for (let index = 0; index < _0x213aa0.length; index++) {
            if (_0x213aa0[index].innerHTML.startsWith("(function(){")) {
                filterScript = _0x213aa0[index].innerHTML;
            }
        }
        const modScript = filterScript.replace("function _0x250d26", "window._0x6957=XA(_0x1b3b11.textContent);function _0x250d26")
            .replace("eval(_0x13d5n7(_0x1d3n57));", `{
      let e = _0x13d5n7(_0x1d3n57);

        ///mod DragonFreeze
        // if(e.includes("function DragonFreeze(a){")) {
        // e = e.insert("a.replace(re_ReplaceNonPrintableUnicodeChars,b)}","Pacmanbot.InitFreeze(a=>eval(a));")
        // DEV && console.log("DragonFreeze")
        // }

        if(e.includes("You are in a game.") && e.includes("g.IsInGame()")) e = e.replace("g.IsInGame()","false");
        if(e.includes("d.myPlayerInfo.id,n,h);")) e = e.ins("d.myPlayerInfo.id,n,h);","Pacmanbot.Utils.InitGame(t);");
        if(e.includes("Dragon2D.prototype.CreateShot=function(a,b,c,d){")) e = e.ins("Dragon2D.prototype.CreateShot=function(a,b,c,d){","Pacmanbot.Utils.Zotata(arguments);");
        if(e.includes("Dragon2D.prototype.SetWind=function(a,b){")) e = e.ins("Dragon2D.prototype.SetWind=function(a,b){","Pacmanbot.Utils.SetWind(arguments);Pacmanbot.Utils.InitDragon2d(this);");

        ///Global Function        
        //if(e.includes("},4E3)};")){
        //e = e.insert("},4E3)};",

        //"Pacmanbot.Init((a)=>{eval(a)});")
        
        //DEV && console.log("Global Function")
        //}
        //var _0x6957 = 1875263;

        //Symbol.code += e
        //console.log(e)
        // DEV && console.log(Symbol.code)


        eval(e);
      };`)
        window.eval(modScript);

        new Function("console.clear()")();
        delete window.DateSave;
        delete globalThis.setIn;
        delete globalThis.ClearIn;

        /*
        window.eval(_0x342420);
        window.onload = null;
        ClearIntervalSave(1);
        ClearIntervalSave(2);
        delete window.EvalSave;
        delete window.setIntervalSave;
        delete window.Uint8ArraySave;
        delete window.TextDecoderSave;
        delete window.TextEncoderSave;
        delete window.WebSocketSave;
        delete window.RandomSave;
        */

    }, 1000);
});

