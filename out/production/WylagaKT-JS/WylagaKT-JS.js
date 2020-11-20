if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'WylagaKT-JS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'WylagaKT-JS'.");
}if (typeof WylagaKT === 'undefined') {
  throw new Error("Error loading module 'WylagaKT-JS'. Its dependency 'WylagaKT' was not found. Please, check whether 'WylagaKT' is loaded prior to 'WylagaKT-JS'.");
}this['WylagaKT-JS'] = function (_, Kotlin, $module$WylagaKT) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Wylaga = $module$WylagaKT.wylaga.Wylaga;
  var KeyboardAdapter = $module$WylagaKT.wylaga.external.KeyboardAdapter;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var toString = Kotlin.toString;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Painter = $module$WylagaKT.wylaga.view.display.Painter;
  var Math_0 = Math;
  var AbstractDisplayable = $module$WylagaKT.wylaga.view.display.displayables.AbstractDisplayable;
  HTMLImageDisplayable.prototype = Object.create(AbstractDisplayable.prototype);
  HTMLImageDisplayable.prototype.constructor = HTMLImageDisplayable;
  function main$lambda(closure$controller) {
    return function (it) {
      closure$controller.keyUp_za3lpa$(it.keyCode);
      return Unit;
    };
  }
  function main$lambda_0(closure$controller) {
    return function (it) {
      closure$controller.keyDown_za3lpa$(it.keyCode);
      return Unit;
    };
  }
  function main$tick(closure$now, closure$last, closure$carry, closure$dt, closure$wylaga, closure$canvasPainter) {
    return function closure$tick(timestamp) {
      closure$now.v = timestamp;
      var delta = closure$now.v - closure$last.v + closure$carry.v;
      if (delta > 1000) {
        delta = 1000.0;
      }while (delta >= closure$dt) {
        delta -= closure$dt;
        closure$wylaga.tick();
        closure$wylaga.display_9kr3df$(closure$canvasPainter);
      }
      closure$carry.v = delta;
      closure$last.v = closure$now.v;
      window.requestAnimationFrame(getCallableRef('tick', function (p1) {
        return closure$tick(p1), Unit;
      }));
    };
  }
  function main() {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById('wylagaCanvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var canvasPainter = new CanvasPainter(Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE());
    var now = {v: window.performance.now()};
    var last = {v: now.v};
    var dt = 17;
    var carry = {v: 0.0};
    var wylaga = new Wylaga(decodeToHTMLImageElement);
    var controller = new KeyboardAdapter(wylaga);
    window.onkeyup = main$lambda(controller);
    window.onkeydown = main$lambda_0(controller);
    var tick = main$tick(now, last, carry, dt, wylaga, canvasPainter);
    window.requestAnimationFrame(getCallableRef('tick', function (p1) {
      return tick(p1), Unit;
    }));
  }
  function CanvasPainter(ctx) {
    this.ctx_0 = ctx;
  }
  CanvasPainter.prototype.push = function () {
    this.ctx_0.save();
  };
  CanvasPainter.prototype.pop = function () {
    this.ctx_0.restore();
  };
  CanvasPainter.prototype.translate_lu1900$ = function (x, y) {
    this.ctx_0.translate(Math_0.floor(x), Math_0.floor(y));
  };
  CanvasPainter.prototype.rotate_14dthe$ = function (theta) {
    this.ctx_0.rotate(theta);
  };
  CanvasPainter.prototype.setColor_154pcl$ = function (color) {
    var canvasColor = this.ktToCanvasColor_0(color);
    this.ctx_0.fillStyle = canvasColor;
    this.ctx_0.strokeStyle = canvasColor;
  };
  CanvasPainter.prototype.ktToCanvasColor_0 = function (color) {
    return 'rgba(' + toString(color.red) + ',' + toString(color.green) + ',' + toString(color.blue) + ',' + toString(color.alpha / 255) + ')';
  };
  CanvasPainter.prototype.setFont_bm4lxs$ = function (typeface, size) {
    this.ctx_0.font = '' + toString(size) + 'pt ' + typeface;
  };
  CanvasPainter.prototype.drawString_61zpoe$ = function (string) {
    this.ctx_0.fillText(string, 0.0, 0.0);
  };
  CanvasPainter.prototype.fillRect_6y0v78$ = function (x, y, width, height) {
    this.ctx_0.fillRect(x, y, width, height);
  };
  CanvasPainter.prototype.drawImage_38alav$ = function (image) {
    this.ctx_0.drawImage(image, 0.0, 0.0);
  };
  CanvasPainter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CanvasPainter',
    interfaces: [Painter]
  };
  function HTMLImageDisplayable(image) {
    AbstractDisplayable.call(this);
    this.image_0 = image;
  }
  HTMLImageDisplayable.prototype.doDisplay_9kr3df$ = function (p) {
    var tmp$;
    (Kotlin.isType(tmp$ = p, CanvasPainter) ? tmp$ : throwCCE()).drawImage_38alav$(this.image_0);
  };
  HTMLImageDisplayable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HTMLImageDisplayable',
    interfaces: [AbstractDisplayable]
  };
  function decodeToHTMLImageElement$lambda(encoding) {
    var tmp$;
    var image = Kotlin.isType(tmp$ = window.document.createElement('img'), HTMLImageElement) ? tmp$ : throwCCE();
    image.src = encoding.prefix + encoding.data;
    return new HTMLImageDisplayable(image);
  }
  var decodeToHTMLImageElement;
  _.main = main;
  var package$wylaga = _.wylaga || (_.wylaga = {});
  var package$view = package$wylaga.view || (package$wylaga.view = {});
  var package$display = package$view.display || (package$view.display = {});
  package$display.CanvasPainter = CanvasPainter;
  var package$displayables = package$display.displayables || (package$display.displayables = {});
  package$displayables.HTMLImageDisplayable = HTMLImageDisplayable;
  var package$image = package$display.image || (package$display.image = {});
  Object.defineProperty(package$image, 'decodeToHTMLImageElement', {
    get: function () {
      return decodeToHTMLImageElement;
    }
  });
  decodeToHTMLImageElement = decodeToHTMLImageElement$lambda;
  main();
  Kotlin.defineModule('WylagaKT-JS', _);
  return _;
}(typeof this['WylagaKT-JS'] === 'undefined' ? {} : this['WylagaKT-JS'], kotlin, WylagaKT);
