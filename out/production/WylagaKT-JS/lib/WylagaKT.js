if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'WylagaKT'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'WylagaKT'.");
}
var WylagaKT = function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Random = Kotlin.kotlin.random.Random;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var getCallableRef = Kotlin.getCallableRef;
  var linkedSetOf = Kotlin.kotlin.collections.linkedSetOf_i5x0yv$;
  var equals = Kotlin.equals;
  var Pair = Kotlin.kotlin.Pair;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var numberToInt = Kotlin.numberToInt;
  var math = Kotlin.kotlin.math;
  var mutableSetOf = Kotlin.kotlin.collections.mutableSetOf_i5x0yv$;
  var toString = Kotlin.toString;
  Action.prototype = Object.create(Enum.prototype);
  Action.prototype.constructor = Action;
  Entity$Orientation.prototype = Object.create(Enum.prototype);
  Entity$Orientation.prototype.constructor = Entity$Orientation;
  Pickup.prototype = Object.create(Entity.prototype);
  Pickup.prototype.constructor = Pickup;
  Projectile.prototype = Object.create(Entity.prototype);
  Projectile.prototype.constructor = Projectile;
  Ship$Sign.prototype = Object.create(Enum.prototype);
  Ship$Sign.prototype.constructor = Ship$Sign;
  Ship.prototype = Object.create(Entity.prototype);
  Ship.prototype.constructor = Ship;
  Cause.prototype = Object.create(Enum.prototype);
  Cause.prototype.constructor = Cause;
  CompositeDisplayable.prototype = Object.create(AbstractDisplayable.prototype);
  CompositeDisplayable.prototype.constructor = CompositeDisplayable;
  RotatedDisplayable.prototype = Object.create(AbstractDisplayable.prototype);
  RotatedDisplayable.prototype.constructor = RotatedDisplayable;
  TranslatedDisplayable.prototype = Object.create(AbstractDisplayable.prototype);
  TranslatedDisplayable.prototype.constructor = TranslatedDisplayable;
  SolidRect.prototype = Object.create(AbstractDisplayable.prototype);
  SolidRect.prototype.constructor = SolidRect;
  StringDisplayable.prototype = Object.create(AbstractDisplayable.prototype);
  StringDisplayable.prototype.constructor = StringDisplayable;
  ImageLoader$PNG.prototype = Object.create(Base64Encoding.prototype);
  ImageLoader$PNG.prototype.constructor = ImageLoader$PNG;
  function hello() {
    return 'Hello from JS';
  }
  function Action(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Action_initFields() {
    Action_initFields = function () {
    };
    Action$PRIMARY_instance = new Action('PRIMARY', 0);
    Action$SECONDARY_instance = new Action('SECONDARY', 1);
    Action$UP_instance = new Action('UP', 2);
    Action$DOWN_instance = new Action('DOWN', 3);
    Action$LEFT_instance = new Action('LEFT', 4);
    Action$RIGHT_instance = new Action('RIGHT', 5);
    Action$BACK_instance = new Action('BACK', 6);
  }
  var Action$PRIMARY_instance;
  function Action$PRIMARY_getInstance() {
    Action_initFields();
    return Action$PRIMARY_instance;
  }
  var Action$SECONDARY_instance;
  function Action$SECONDARY_getInstance() {
    Action_initFields();
    return Action$SECONDARY_instance;
  }
  var Action$UP_instance;
  function Action$UP_getInstance() {
    Action_initFields();
    return Action$UP_instance;
  }
  var Action$DOWN_instance;
  function Action$DOWN_getInstance() {
    Action_initFields();
    return Action$DOWN_instance;
  }
  var Action$LEFT_instance;
  function Action$LEFT_getInstance() {
    Action_initFields();
    return Action$LEFT_instance;
  }
  var Action$RIGHT_instance;
  function Action$RIGHT_getInstance() {
    Action_initFields();
    return Action$RIGHT_instance;
  }
  var Action$BACK_instance;
  function Action$BACK_getInstance() {
    Action_initFields();
    return Action$BACK_instance;
  }
  Action.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Action',
    interfaces: [Enum]
  };
  function Action$values() {
    return [Action$PRIMARY_getInstance(), Action$SECONDARY_getInstance(), Action$UP_getInstance(), Action$DOWN_getInstance(), Action$LEFT_getInstance(), Action$RIGHT_getInstance(), Action$BACK_getInstance()];
  }
  Action.values = Action$values;
  function Action$valueOf(name) {
    switch (name) {
      case 'PRIMARY':
        return Action$PRIMARY_getInstance();
      case 'SECONDARY':
        return Action$SECONDARY_getInstance();
      case 'UP':
        return Action$UP_getInstance();
      case 'DOWN':
        return Action$DOWN_getInstance();
      case 'LEFT':
        return Action$LEFT_getInstance();
      case 'RIGHT':
        return Action$RIGHT_getInstance();
      case 'BACK':
        return Action$BACK_getInstance();
      default:throwISE('No enum constant wylaga.external.Action.' + name);
    }
  }
  Action.valueOf_61zpoe$ = Action$valueOf;
  function Controller() {
  }
  Controller.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Controller',
    interfaces: []
  };
  function ControllerFactory() {
  }
  function ControllerFactory$makeCombatController$lambda(closure$dpad) {
    return function () {
      closure$dpad.upPressed = true;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_0(closure$dpad) {
    return function () {
      closure$dpad.downPressed = true;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_1(closure$dpad) {
    return function () {
      closure$dpad.leftPressed = true;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_2(closure$dpad) {
    return function () {
      closure$dpad.rightPressed = true;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_3(closure$dpad) {
    return function () {
      closure$dpad.upPressed = false;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_4(closure$dpad) {
    return function () {
      closure$dpad.downPressed = false;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_5(closure$dpad) {
    return function () {
      closure$dpad.leftPressed = false;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_6(closure$dpad) {
    return function () {
      closure$dpad.rightPressed = false;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_7(closure$dpad) {
    return function () {
      closure$dpad.firePressed = true;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_8(closure$dpad) {
    return function () {
      closure$dpad.firePressed = false;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_9(closure$dpad) {
    return function () {
      closure$dpad.specialPressed = true;
      return Unit;
    };
  }
  function ControllerFactory$makeCombatController$lambda_10(closure$dpad) {
    return function () {
      closure$dpad.specialPressed = false;
      return Unit;
    };
  }
  ControllerFactory.prototype.makeCombatController_1fixc3$ = function (pilot) {
    var controller = new ControllerFactory$MappedController();
    var dpad = new DpadParser(pilot);
    controller.setPress_jnx1x3$(Action$UP_getInstance(), ControllerFactory$makeCombatController$lambda(dpad));
    controller.setPress_jnx1x3$(Action$DOWN_getInstance(), ControllerFactory$makeCombatController$lambda_0(dpad));
    controller.setPress_jnx1x3$(Action$LEFT_getInstance(), ControllerFactory$makeCombatController$lambda_1(dpad));
    controller.setPress_jnx1x3$(Action$RIGHT_getInstance(), ControllerFactory$makeCombatController$lambda_2(dpad));
    controller.setRelease_jnx1x3$(Action$UP_getInstance(), ControllerFactory$makeCombatController$lambda_3(dpad));
    controller.setRelease_jnx1x3$(Action$DOWN_getInstance(), ControllerFactory$makeCombatController$lambda_4(dpad));
    controller.setRelease_jnx1x3$(Action$LEFT_getInstance(), ControllerFactory$makeCombatController$lambda_5(dpad));
    controller.setRelease_jnx1x3$(Action$RIGHT_getInstance(), ControllerFactory$makeCombatController$lambda_6(dpad));
    controller.setPress_jnx1x3$(Action$PRIMARY_getInstance(), ControllerFactory$makeCombatController$lambda_7(dpad));
    controller.setRelease_jnx1x3$(Action$PRIMARY_getInstance(), ControllerFactory$makeCombatController$lambda_8(dpad));
    controller.setPress_jnx1x3$(Action$SECONDARY_getInstance(), ControllerFactory$makeCombatController$lambda_9(dpad));
    controller.setRelease_jnx1x3$(Action$SECONDARY_getInstance(), ControllerFactory$makeCombatController$lambda_10(dpad));
    return controller;
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function ControllerFactory$MappedController() {
    this.pressMap_0 = LinkedHashMap_init();
    this.releaseMap_0 = LinkedHashMap_init();
  }
  function ControllerFactory$MappedController$press$lambda$lambda() {
    return Unit;
  }
  ControllerFactory$MappedController.prototype.press_lq8mc$ = function (action) {
    var tmp$;
    ((tmp$ = this.pressMap_0.get_11rb$(action)) != null ? tmp$ : ControllerFactory$MappedController$press$lambda$lambda)();
  };
  function ControllerFactory$MappedController$release$lambda$lambda() {
    return Unit;
  }
  ControllerFactory$MappedController.prototype.release_lq8mc$ = function (action) {
    var tmp$;
    ((tmp$ = this.releaseMap_0.get_11rb$(action)) != null ? tmp$ : ControllerFactory$MappedController$release$lambda$lambda)();
  };
  ControllerFactory$MappedController.prototype.setPress_jnx1x3$ = function (action, f) {
    this.pressMap_0.put_xwzc9p$(action, f);
  };
  ControllerFactory$MappedController.prototype.setRelease_jnx1x3$ = function (action, f) {
    this.releaseMap_0.put_xwzc9p$(action, f);
  };
  ControllerFactory$MappedController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MappedController',
    interfaces: [Controller]
  };
  ControllerFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ControllerFactory',
    interfaces: []
  };
  function DpadParser(pilot) {
    this.pilot_0 = pilot;
    this.downPressed_4lutu4$_0 = false;
    this.upPressed_py41sj$_0 = false;
    this.leftPressed_rjh4pz$_0 = false;
    this.rightPressed_x8lqbe$_0 = false;
    this.firePressed_xysdmg$_0 = false;
    this.specialPressed_i2kwh5$_0 = false;
  }
  Object.defineProperty(DpadParser.prototype, 'downPressed', {
    get: function () {
      return this.downPressed_4lutu4$_0;
    },
    set: function (bool) {
      this.downPressed_4lutu4$_0 = bool;
      this.updateTrajectory_0();
    }
  });
  Object.defineProperty(DpadParser.prototype, 'upPressed', {
    get: function () {
      return this.upPressed_py41sj$_0;
    },
    set: function (bool) {
      this.upPressed_py41sj$_0 = bool;
      this.updateTrajectory_0();
    }
  });
  Object.defineProperty(DpadParser.prototype, 'leftPressed', {
    get: function () {
      return this.leftPressed_rjh4pz$_0;
    },
    set: function (bool) {
      this.leftPressed_rjh4pz$_0 = bool;
      this.updateTrajectory_0();
    }
  });
  Object.defineProperty(DpadParser.prototype, 'rightPressed', {
    get: function () {
      return this.rightPressed_x8lqbe$_0;
    },
    set: function (bool) {
      this.rightPressed_x8lqbe$_0 = bool;
      this.updateTrajectory_0();
    }
  });
  Object.defineProperty(DpadParser.prototype, 'firePressed', {
    get: function () {
      return this.firePressed_xysdmg$_0;
    },
    set: function (bool) {
      this.firePressed_xysdmg$_0 = bool;
      this.pilot_0.wantsToFire = bool;
    }
  });
  Object.defineProperty(DpadParser.prototype, 'specialPressed', {
    get: function () {
      return this.specialPressed_i2kwh5$_0;
    },
    set: function (bool) {
      this.specialPressed_i2kwh5$_0 = bool;
      this.pilot_0.wantsToBoost = bool;
    }
  });
  DpadParser.prototype.updateTrajectory_0 = function () {
    var tmp$, tmp$_0;
    if (this.leftPressed === this.rightPressed)
      tmp$ = 0.0;
    else if (this.leftPressed)
      tmp$ = -1.0;
    else
      tmp$ = 1.0;
    var dx = tmp$;
    if (this.downPressed === this.upPressed)
      tmp$_0 = 0.0;
    else if (this.downPressed)
      tmp$_0 = 1.0;
    else
      tmp$_0 = -1.0;
    var dy = tmp$_0;
    this.pilot_0.trajectory = new DirectionVector(dx, dy);
  };
  DpadParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DpadParser',
    interfaces: []
  };
  function KeyboardAdapter(wylaga) {
    this.wylaga_0 = wylaga;
    this.keyMap_0 = new KeyboardAdapter$KeyMapper();
    this.bindKeyToAction_0(87, Action$UP_getInstance());
    this.bindKeyToAction_0(65, Action$LEFT_getInstance());
    this.bindKeyToAction_0(83, Action$DOWN_getInstance());
    this.bindKeyToAction_0(68, Action$RIGHT_getInstance());
    this.bindKeyToAction_0(38, Action$UP_getInstance());
    this.bindKeyToAction_0(37, Action$LEFT_getInstance());
    this.bindKeyToAction_0(40, Action$DOWN_getInstance());
    this.bindKeyToAction_0(39, Action$RIGHT_getInstance());
    this.bindKeyToAction_0(13, Action$PRIMARY_getInstance());
    this.bindKeyToAction_0(10, Action$PRIMARY_getInstance());
    this.bindKeyToAction_0(32, Action$PRIMARY_getInstance());
    this.bindKeyToAction_0(16, Action$SECONDARY_getInstance());
  }
  function KeyboardAdapter$bindKeyToAction$lambda(this$KeyboardAdapter, closure$action) {
    return function () {
      this$KeyboardAdapter.wylaga_0.press_lq8mc$(closure$action);
      return Unit;
    };
  }
  function KeyboardAdapter$bindKeyToAction$lambda_0(this$KeyboardAdapter, closure$action) {
    return function () {
      this$KeyboardAdapter.wylaga_0.release_lq8mc$(closure$action);
      return Unit;
    };
  }
  KeyboardAdapter.prototype.bindKeyToAction_0 = function (keyCode, action) {
    this.keyMap_0.bindPress_n53o35$(keyCode, KeyboardAdapter$bindKeyToAction$lambda(this, action));
    this.keyMap_0.bindRelease_n53o35$(keyCode, KeyboardAdapter$bindKeyToAction$lambda_0(this, action));
  };
  KeyboardAdapter.prototype.keyDown_za3lpa$ = function (keyCode) {
    println('Keypressed ' + keyCode);
    this.keyMap_0.keyDown_za3lpa$(keyCode);
  };
  KeyboardAdapter.prototype.keyUp_za3lpa$ = function (keyCode) {
    this.keyMap_0.keyUp_za3lpa$(keyCode);
  };
  function KeyboardAdapter$KeyMapper() {
    this.pressMap_0 = LinkedHashMap_init();
    this.releaseMap_0 = LinkedHashMap_init();
  }
  KeyboardAdapter$KeyMapper.prototype.bindPress_n53o35$ = function (keyCode, function_0) {
    return this.pressMap_0.put_xwzc9p$(keyCode, function_0);
  };
  KeyboardAdapter$KeyMapper.prototype.bindRelease_n53o35$ = function (keyCode, function_0) {
    return this.releaseMap_0.put_xwzc9p$(keyCode, function_0);
  };
  function KeyboardAdapter$KeyMapper$keyDown$lambda$lambda() {
    return Unit;
  }
  KeyboardAdapter$KeyMapper.prototype.keyDown_za3lpa$ = function (keyCode) {
    var tmp$;
    ((tmp$ = this.pressMap_0.get_11rb$(keyCode)) != null ? tmp$ : KeyboardAdapter$KeyMapper$keyDown$lambda$lambda)();
  };
  function KeyboardAdapter$KeyMapper$keyUp$lambda$lambda() {
    return Unit;
  }
  KeyboardAdapter$KeyMapper.prototype.keyUp_za3lpa$ = function (keyCode) {
    var tmp$;
    ((tmp$ = this.releaseMap_0.get_11rb$(keyCode)) != null ? tmp$ : KeyboardAdapter$KeyMapper$keyUp$lambda$lambda)();
  };
  KeyboardAdapter$KeyMapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyMapper',
    interfaces: []
  };
  KeyboardAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyboardAdapter',
    interfaces: []
  };
  function Entity(x, y, width, height, orientation, trajectory, velocity) {
    if (trajectory === void 0)
      trajectory = DirectionVector$Companion_getInstance().NULL;
    if (velocity === void 0)
      velocity = 0.0;
    this.x_w8rxeq$_0 = x;
    this.y_w8rxfl$_0 = y;
    this.width = width;
    this.height = height;
    this.orientation = orientation;
    this.trajectory_7odgfn$_0 = trajectory;
    this.velocity_gf03dv$_0 = velocity;
  }
  Object.defineProperty(Entity.prototype, 'x', {
    get: function () {
      return this.x_w8rxeq$_0;
    },
    set: function (x) {
      this.x_w8rxeq$_0 = x;
    }
  });
  Object.defineProperty(Entity.prototype, 'y', {
    get: function () {
      return this.y_w8rxfl$_0;
    },
    set: function (y) {
      this.y_w8rxfl$_0 = y;
    }
  });
  Object.defineProperty(Entity.prototype, 'trajectory', {
    get: function () {
      return this.trajectory_7odgfn$_0;
    },
    set: function (trajectory) {
      this.trajectory_7odgfn$_0 = trajectory;
    }
  });
  Object.defineProperty(Entity.prototype, 'velocity', {
    get: function () {
      return this.velocity_gf03dv$_0;
    },
    set: function (velocity) {
      this.velocity_gf03dv$_0 = velocity;
    }
  });
  Object.defineProperty(Entity.prototype, 'minX', {
    get: function () {
      return this.x;
    }
  });
  Object.defineProperty(Entity.prototype, 'maxX', {
    get: function () {
      return this.x + this.width;
    }
  });
  Object.defineProperty(Entity.prototype, 'minY', {
    get: function () {
      return this.y;
    }
  });
  Object.defineProperty(Entity.prototype, 'maxY', {
    get: function () {
      return this.y + this.height;
    }
  });
  var Math_0 = Math;
  function Entity$Orientation(name, ordinal, vector) {
    Enum.call(this);
    this.vector = vector;
    this.name$ = name;
    this.ordinal$ = ordinal;
    var y = this.vector.dx;
    var x = this.vector.dy;
    this.radians = Math_0.atan2(y, x);
  }
  function Entity$Orientation_initFields() {
    Entity$Orientation_initFields = function () {
    };
    Entity$Orientation$NORTH_instance = new Entity$Orientation('NORTH', 0, DirectionVector$Companion_getInstance().NORTH);
    Entity$Orientation$SOUTH_instance = new Entity$Orientation('SOUTH', 1, DirectionVector$Companion_getInstance().SOUTH);
  }
  var Entity$Orientation$NORTH_instance;
  function Entity$Orientation$NORTH_getInstance() {
    Entity$Orientation_initFields();
    return Entity$Orientation$NORTH_instance;
  }
  var Entity$Orientation$SOUTH_instance;
  function Entity$Orientation$SOUTH_getInstance() {
    Entity$Orientation_initFields();
    return Entity$Orientation$SOUTH_instance;
  }
  Entity$Orientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Orientation',
    interfaces: [Enum]
  };
  function Entity$Orientation$values() {
    return [Entity$Orientation$NORTH_getInstance(), Entity$Orientation$SOUTH_getInstance()];
  }
  Entity$Orientation.values = Entity$Orientation$values;
  function Entity$Orientation$valueOf(name) {
    switch (name) {
      case 'NORTH':
        return Entity$Orientation$NORTH_getInstance();
      case 'SOUTH':
        return Entity$Orientation$SOUTH_getInstance();
      default:throwISE('No enum constant wylaga.model.entities.Entity.Orientation.' + name);
    }
  }
  Entity$Orientation.valueOf_61zpoe$ = Entity$Orientation$valueOf;
  Entity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entity',
    interfaces: [Collidable, Movable]
  };
  function Pickup(x, y, width, height, trajectory, velocity, onDisable, effect) {
    Entity.call(this, x, y, width, height, Entity$Orientation$NORTH_getInstance(), trajectory, velocity);
    this.onDisable_0 = onDisable;
    this.effect = effect;
  }
  Pickup.prototype.disable_sh3iqe$ = function (cause) {
    this.onDisable_0(this, cause);
  };
  Pickup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pickup',
    interfaces: [Entity]
  };
  function PickupFactory(onDisable, addToScore, weaponUpgrades, spawnWingmen, spawnSuperWingmen) {
    this.onDisable_0 = onDisable;
    this.addToScore_0 = addToScore;
    this.weaponUpgrades_0 = weaponUpgrades;
    this.spawnWingmen_0 = spawnWingmen;
    this.spawnSuperWingmen_0 = spawnSuperWingmen;
    this.weaponLevel_0 = 0;
  }
  function PickupFactory$makeHealing$lambda(this$PickupFactory) {
    return function (it) {
      this$PickupFactory.addToScore_0(20);
      it.heal_14dthe$(it.maxHealth * 0.2);
      return Unit;
    };
  }
  PickupFactory.prototype.makeHealing_lu1900$ = function (x, y) {
    return this.makePickup_0(x, y, PickupFactory$makeHealing$lambda(this));
  };
  function PickupFactory$makeEnergy$lambda(this$PickupFactory) {
    return function (it) {
      this$PickupFactory.addToScore_0(20);
      it.energy = it.maxEnergy;
      return Unit;
    };
  }
  PickupFactory.prototype.makeEnergy_lu1900$ = function (x, y) {
    return this.makePickup_0(x, y, PickupFactory$makeEnergy$lambda(this));
  };
  function PickupFactory$makePoints$lambda(this$PickupFactory) {
    return function (it) {
      this$PickupFactory.addToScore_0(100);
      return Unit;
    };
  }
  PickupFactory.prototype.makePoints_lu1900$ = function (x, y) {
    return this.makePickup_0(x, y, PickupFactory$makePoints$lambda(this));
  };
  function PickupFactory$makeWeaponUpgrade$lambda(this$PickupFactory) {
    return function (it) {
      var tmp$;
      this$PickupFactory.addToScore_0(200);
      it.hardpoint.weapon = this$PickupFactory.weaponUpgrades_0[this$PickupFactory.weaponLevel_0];
      if (this$PickupFactory.weaponLevel_0 < (this$PickupFactory.weaponUpgrades_0.length - 1 | 0)) {
        tmp$ = this$PickupFactory.weaponLevel_0;
        this$PickupFactory.weaponLevel_0 = tmp$ + 1 | 0;
      }
      return Unit;
    };
  }
  PickupFactory.prototype.makeWeaponUpgrade_lu1900$ = function (x, y) {
    return this.makePickup_0(x, y, PickupFactory$makeWeaponUpgrade$lambda(this));
  };
  function PickupFactory$makeFullHealing$lambda(this$PickupFactory) {
    return function (it) {
      this$PickupFactory.addToScore_0(50);
      it.heal_14dthe$(it.maxHealth);
      return Unit;
    };
  }
  PickupFactory.prototype.makeFullHealing_lu1900$ = function (x, y) {
    return this.makePickup_0(x, y, PickupFactory$makeFullHealing$lambda(this));
  };
  function PickupFactory$makeHealthUpgrade$lambda(this$PickupFactory) {
    return function (it) {
      this$PickupFactory.addToScore_0(100);
      it.maxHealth = it.maxHealth + 10;
      it.heal_14dthe$(10.0);
      return Unit;
    };
  }
  PickupFactory.prototype.makeHealthUpgrade_lu1900$ = function (x, y) {
    return this.makePickup_0(x, y, PickupFactory$makeHealthUpgrade$lambda(this));
  };
  function PickupFactory$makeWingmen$lambda(this$PickupFactory) {
    return function (it) {
      this$PickupFactory.addToScore_0(50);
      this$PickupFactory.spawnWingmen_0(it);
      return Unit;
    };
  }
  PickupFactory.prototype.makeWingmen_lu1900$ = function (x, y) {
    return this.makePickup_0(x, y, PickupFactory$makeWingmen$lambda(this));
  };
  function PickupFactory$makeSuperWingmen$lambda(this$PickupFactory) {
    return function (it) {
      this$PickupFactory.addToScore_0(200);
      this$PickupFactory.spawnSuperWingmen_0(it);
      return Unit;
    };
  }
  PickupFactory.prototype.makeSuperWingmen_lu1900$ = function (x, y) {
    return this.makePickup_0(x, y, PickupFactory$makeSuperWingmen$lambda(this));
  };
  PickupFactory.prototype.makePickup_0 = function (x, y, effect) {
    return new Pickup(x - 7.5, y - 7.5, 15.0, 15.0, DirectionVector$Companion_getInstance().SOUTH, 1.0, this.onDisable_0, effect);
  };
  PickupFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PickupFactory',
    interfaces: []
  };
  function ControlBufferPilot() {
    this.trajectory = new DirectionVector(0.0, 0.0);
    this.wantsToFire_esvrwv$_0 = false;
    this.readyToFire_0 = true;
    this.wantsToBoost = false;
  }
  Object.defineProperty(ControlBufferPilot.prototype, 'wantsToFire', {
    get: function () {
      return this.wantsToFire_esvrwv$_0;
    },
    set: function (value) {
      this.wantsToFire_esvrwv$_0 = value;
      if (!value) {
        this.readyToFire_0 = true;
      }
    }
  });
  ControlBufferPilot.prototype.update_w5sr5q$ = function (ship) {
    ship.trajectory = this.trajectory;
    ship.wantsToBoost = this.wantsToBoost;
    ship.wantsToFire = (this.wantsToFire && this.readyToFire_0);
    if (this.wantsToFire)
      this.readyToFire_0 = false;
  };
  ControlBufferPilot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ControlBufferPilot',
    interfaces: [Pilot]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function MirrorPilot(target, delay) {
    this.target_0 = target;
    this.trajectoryQueue_0 = ArrayList_init();
    this.energyQueue_0 = ArrayList_init();
    this.boostQueue_0 = ArrayList_init();
    this.fireQueue_0 = ArrayList_init();
    for (var i = 1; i <= delay; i++) {
      this.trajectoryQueue_0.add_11rb$(DirectionVector$Companion_getInstance().NULL);
      this.energyQueue_0.add_11rb$(200.0);
      this.boostQueue_0.add_11rb$(false);
      this.fireQueue_0.add_11rb$(false);
    }
  }
  MirrorPilot.prototype.enqueueTargetState_0 = function () {
    this.trajectoryQueue_0.add_11rb$(this.target_0.trajectory);
    this.energyQueue_0.add_11rb$(this.target_0.energy);
    this.boostQueue_0.add_11rb$(this.target_0.wantsToBoost);
    this.fireQueue_0.add_11rb$(this.target_0.wantsToFire);
  };
  MirrorPilot.prototype.update_w5sr5q$ = function (ship) {
    this.enqueueTargetState_0();
    ship.trajectory = this.trajectoryQueue_0.removeAt_za3lpa$(0);
    ship.energy = this.energyQueue_0.removeAt_za3lpa$(0);
    ship.wantsToBoost = this.boostQueue_0.removeAt_za3lpa$(0);
    ship.wantsToFire = this.fireQueue_0.removeAt_za3lpa$(0);
  };
  MirrorPilot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MirrorPilot',
    interfaces: [Pilot]
  };
  function NullPilot() {
  }
  NullPilot.prototype.update_w5sr5q$ = function (ship) {
  };
  NullPilot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullPilot',
    interfaces: [Pilot]
  };
  function Pilot() {
  }
  Pilot.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Pilot',
    interfaces: []
  };
  function RallyPilot(targetX, targetY, onTargetReached) {
    this.targetX = targetX;
    this.targetY = targetY;
    this.onTargetReached = onTargetReached;
  }
  RallyPilot.prototype.update_w5sr5q$ = function (ship) {
    var dx = this.targetX - ship.x;
    var dy = this.targetY - ship.y;
    var x = dx * dx + dy * dy;
    var distance = Math_0.sqrt(x) / ship.velocity;
    if (distance <= 0.1)
      this.onTargetReached(ship);
    else if (distance <= 1)
      ship.trajectory = new DirectionVector(dx / ship.velocity, dy / ship.velocity);
    else
      ship.trajectory = new DirectionVector(dx, dy);
  };
  RallyPilot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RallyPilot',
    interfaces: [Pilot]
  };
  function RandomPilot(redirectChance, fireChance, toggleBoostChance, minX, minY, maxX, maxY) {
    if (minX === void 0)
      minX = 0.0;
    if (minY === void 0)
      minY = 0.0;
    if (maxX === void 0)
      maxX = 1550.0;
    if (maxY === void 0)
      maxY = 400.0;
    this.redirectChance_0 = redirectChance;
    this.fireChance_0 = fireChance;
    this.toggleBoostChance_0 = toggleBoostChance;
    this.minX_0 = minX;
    this.minY_0 = minY;
    this.maxX_0 = maxX;
    this.maxY_0 = maxY;
  }
  RandomPilot.prototype.update_w5sr5q$ = function (ship) {
    var tmp$, tmp$_0;
    if (ship.x <= this.minX_0 || ship.x >= this.maxX_0 || ship.y <= this.minY_0 || ship.y >= this.maxY_0) {
      if (ship.x <= this.minX_0)
        tmp$ = 1.0;
      else if (ship.x >= this.maxX_0)
        tmp$ = -1.0;
      else
        tmp$ = Random.Default.nextDouble() * 2 - 1;
      var dx = tmp$;
      if (ship.y <= this.minY_0)
        tmp$_0 = 1.0;
      else if (ship.y >= this.maxY_0)
        tmp$_0 = -1.0;
      else
        tmp$_0 = Random.Default.nextDouble() * 2 - 1;
      var dy = tmp$_0;
      ship.trajectory = new DirectionVector(dx, dy);
    }
     else if (Random.Default.nextDouble() <= this.redirectChance_0) {
      ship.trajectory = DirectionVector$Companion_getInstance().random();
    }
    ship.wantsToFire = Random.Default.nextDouble() <= this.fireChance_0;
    if (Random.Default.nextDouble() <= this.toggleBoostChance_0) {
      ship.wantsToBoost = !ship.wantsToBoost;
    }
  };
  RandomPilot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RandomPilot',
    interfaces: [Pilot]
  };
  function Projectile(x, y, width, height, trajectory, velocity, orientation, onCollision, onDisable) {
    Entity.call(this, x, y, width, height, orientation, trajectory, velocity);
    this.onCollision_wwsjqb$_0 = onCollision;
    this.onDisable_a3ayqv$_0 = onDisable;
  }
  Projectile.prototype.impact_w5sr5q$ = function (ship) {
    this.onCollision_wwsjqb$_0(this, ship);
  };
  Projectile.prototype.disable_sh3iqe$ = function (cause) {
    this.onDisable_a3ayqv$_0(this, cause);
  };
  Projectile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Projectile',
    interfaces: [Entity]
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function Ship(x, y, width, height, velocity, orientation, maxHealth, points, onDeath, hardpointX, hardpointY, activePilot, spawnProjectile, weapon) {
    if (weapon === void 0)
      weapon = NullWeapon$Companion_getInstance().INSTANCE;
    Entity.call(this, x, y, width, height, orientation, void 0, velocity);
    this.maxHealth = maxHealth;
    this.points = points;
    this.onDeath_0 = onDeath;
    this.activePilot = activePilot;
    this.spawnProjectile_0 = spawnProjectile;
    this.hardpoint = new Ship$Hardpoint(this, hardpointX, hardpointY, weapon);
    this.damageListeners_0 = LinkedHashSet_init();
    this.healListeners_0 = LinkedHashSet_init();
    this.fireListeners_0 = LinkedHashSet_init();
    this.trajectoryListeners_0 = LinkedHashSet_init();
    this.boostListeners_0 = LinkedHashSet_init();
    this.weaponChangeListeners_0 = LinkedHashSet_init();
    this.baseVelocity = velocity;
    this.boostVelocity = velocity * 2;
    this.wantsToFire = false;
    this.wantsToBoost_8nn9t1$_0 = false;
    this.health_46awha$_0 = this.maxHealth;
    this.maxEnergy = 200.0;
    this.energy_zhxgea$_0 = this.maxEnergy;
  }
  Ship.prototype.subscribeDamage_zc6rbt$ = function (callback) {
    return this.damageListeners_0.add_11rb$(callback);
  };
  Ship.prototype.subscribeHeal_zc6rbt$ = function (callback) {
    return this.healListeners_0.add_11rb$(callback);
  };
  Ship.prototype.subscribeFire_zc6rbt$ = function (callback) {
    return this.fireListeners_0.add_11rb$(callback);
  };
  Ship.prototype.subscribeTrajectory_zc6rbt$ = function (callback) {
    return this.trajectoryListeners_0.add_11rb$(callback);
  };
  Ship.prototype.subscribeBoost_zc6rbt$ = function (callback) {
    return this.boostListeners_0.add_11rb$(callback);
  };
  Ship.prototype.subscribeWeaponChange_9eum6x$ = function (callback) {
    return this.weaponChangeListeners_0.add_11rb$(callback);
  };
  Object.defineProperty(Ship.prototype, 'trajectory', {
    get: function () {
      return Kotlin.callGetter(this, Entity.prototype, 'trajectory');
    },
    set: function (value) {
      var prevSign = this.getSign_0(Kotlin.callGetter(this, Entity.prototype, 'trajectory').dy);
      var nextSign = this.getSign_0(value.dy);
      Kotlin.callSetter(this, Entity.prototype, 'trajectory', value);
      if (prevSign !== nextSign) {
        var tmp$;
        tmp$ = this.trajectoryListeners_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element(this);
        }
      }
    }
  });
  Object.defineProperty(Ship.prototype, 'wantsToBoost', {
    get: function () {
      return this.wantsToBoost_8nn9t1$_0;
    },
    set: function (value) {
      this.wantsToBoost_8nn9t1$_0 = value;
      var tmp$;
      tmp$ = this.boostListeners_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(this);
      }
    }
  });
  Object.defineProperty(Ship.prototype, 'health', {
    get: function () {
      return this.health_46awha$_0;
    },
    set: function (nextHealth) {
      this.health_46awha$_0 = nextHealth;
      if (this.health <= 0) {
        this.onDeath_0(this);
      }
       else if (this.health > this.maxHealth) {
        this.health_46awha$_0 = this.maxHealth;
      }
    }
  });
  Object.defineProperty(Ship.prototype, 'energy', {
    get: function () {
      return this.energy_zhxgea$_0;
    },
    set: function (nextFuel) {
      this.energy_zhxgea$_0 = nextFuel;
      if (this.energy < 0) {
        this.energy_zhxgea$_0 = 0.0;
      }
       else if (this.energy > this.maxEnergy) {
        this.energy_zhxgea$_0 = this.maxEnergy;
      }
    }
  });
  Ship.prototype.boost = function () {
    if (this.wantsToBoost) {
      if (this.energy > 0) {
        this.velocity = this.boostVelocity;
        this.energy = this.energy - 2;
      }
       else {
        this.velocity = this.baseVelocity;
        this.energy = this.energy - 1;
      }
    }
     else {
      this.velocity = this.baseVelocity;
      this.energy = this.energy + 2;
    }
  };
  Ship.prototype.damage_14dthe$ = function (damage) {
    this.health = this.health - damage;
    var tmp$;
    tmp$ = this.damageListeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(this);
    }
  };
  Ship.prototype.heal_14dthe$ = function (healing) {
    this.health = this.health + healing;
    var tmp$;
    tmp$ = this.healListeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(this);
    }
  };
  Ship.prototype.fire = function () {
    if (this.wantsToFire) {
      var tmp$;
      tmp$ = this.hardpoint.weapon.fire_ccnmq$(this, this.hardpoint.x, this.hardpoint.y).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        this.spawnProjectile_0(element, this.hardpoint.weapon);
      }
      var tmp$_0;
      tmp$_0 = this.fireListeners_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        element_0(this);
      }
    }
  };
  Ship.prototype.pilot = function () {
    this.activePilot.update_w5sr5q$(this);
  };
  Ship.prototype.getSign_0 = function (delta) {
    var tmp$;
    if (delta < 0)
      tmp$ = Ship$Sign$NEGATIVE_getInstance();
    else if (delta > 0)
      tmp$ = Ship$Sign$POSITIVE_getInstance();
    else
      tmp$ = Ship$Sign$ZERO_getInstance();
    return tmp$;
  };
  function Ship$Hardpoint($outer, x, y, weapon) {
    this.$outer = $outer;
    if (weapon === void 0)
      weapon = NullWeapon$Companion_getInstance().INSTANCE;
    this.x = x;
    this.y = y;
    this.weapon_g0frdn$_0 = weapon;
  }
  Object.defineProperty(Ship$Hardpoint.prototype, 'weapon', {
    get: function () {
      return this.weapon_g0frdn$_0;
    },
    set: function (value) {
      this.weapon_g0frdn$_0 = value;
      var tmp$;
      tmp$ = this.$outer.weaponChangeListeners_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(this.weapon);
      }
    }
  });
  Ship$Hardpoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hardpoint',
    interfaces: []
  };
  function Ship$Sign(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Ship$Sign_initFields() {
    Ship$Sign_initFields = function () {
    };
    Ship$Sign$NEGATIVE_instance = new Ship$Sign('NEGATIVE', 0);
    Ship$Sign$ZERO_instance = new Ship$Sign('ZERO', 1);
    Ship$Sign$POSITIVE_instance = new Ship$Sign('POSITIVE', 2);
  }
  var Ship$Sign$NEGATIVE_instance;
  function Ship$Sign$NEGATIVE_getInstance() {
    Ship$Sign_initFields();
    return Ship$Sign$NEGATIVE_instance;
  }
  var Ship$Sign$ZERO_instance;
  function Ship$Sign$ZERO_getInstance() {
    Ship$Sign_initFields();
    return Ship$Sign$ZERO_instance;
  }
  var Ship$Sign$POSITIVE_instance;
  function Ship$Sign$POSITIVE_getInstance() {
    Ship$Sign_initFields();
    return Ship$Sign$POSITIVE_instance;
  }
  Ship$Sign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sign',
    interfaces: [Enum]
  };
  function Ship$Sign$values() {
    return [Ship$Sign$NEGATIVE_getInstance(), Ship$Sign$ZERO_getInstance(), Ship$Sign$POSITIVE_getInstance()];
  }
  Ship$Sign.values = Ship$Sign$values;
  function Ship$Sign$valueOf(name) {
    switch (name) {
      case 'NEGATIVE':
        return Ship$Sign$NEGATIVE_getInstance();
      case 'ZERO':
        return Ship$Sign$ZERO_getInstance();
      case 'POSITIVE':
        return Ship$Sign$POSITIVE_getInstance();
      default:throwISE('No enum constant wylaga.model.entities.ships.Ship.Sign.' + name);
    }
  }
  Ship$Sign.valueOf_61zpoe$ = Ship$Sign$valueOf;
  Ship.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ship',
    interfaces: [Boostable, Pilotable, Fireable, Damagable, Entity]
  };
  function ShipFactory(onDeath, spawnProjectile, orientation) {
    this.onDeath_0 = onDeath;
    this.spawnProjectile_0 = spawnProjectile;
    this.orientation_0 = orientation;
  }
  ShipFactory.prototype.makeEnemy_fa1mpq$ = function (x, y, weapon, pilot) {
    if (x === void 0)
      x = 256.0;
    if (y === void 0)
      y = 256.0;
    return new Ship(x, y, 50.0, 50.0, 1.5, this.orientation_0, 80.0, 50, this.onDeath_0, 25.0, 2.0, pilot, this.spawnProjectile_0, weapon);
  };
  ShipFactory.prototype.makeHardpointedPlayer_fa1mpq$ = function (x, y, weapon, pilot) {
    if (x === void 0)
      x = 512.0;
    if (y === void 0)
      y = 256.0;
    return new Ship(x, y, 50.0, 50.0, 3.0, this.orientation_0, 100.0, 100, this.onDeath_0, 25.0, 2.0, pilot, this.spawnProjectile_0, weapon);
  };
  ShipFactory.prototype.makeSmallEnemy_fa1mpq$ = function (x, y, weapon, pilot) {
    return new Ship(x, y, 25.0, 25.0, 1.5, this.orientation_0, 50.0, 25, this.onDeath_0, 12.5, 2.0, pilot, this.spawnProjectile_0, weapon);
  };
  ShipFactory.prototype.makeEvilPlayer_fa1mpq$ = function (x, y, weapon, pilot) {
    return new Ship(x, y, 50.0, 50.0, 3.0, this.orientation_0, 500.0, 1000, this.onDeath_0, 25.0, 2.0, pilot, this.spawnProjectile_0, weapon);
  };
  ShipFactory.prototype.makeWingman_fa1mpq$ = function (x, y, weapon, pilot) {
    return new Ship(x, y, 25.0, 25.0, 3.0, this.orientation_0, 60.0, 25, this.onDeath_0, 12.5, 2.0, pilot, this.spawnProjectile_0, weapon);
  };
  ShipFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShipFactory',
    interfaces: []
  };
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  function NullWeapon() {
    NullWeapon$Companion_getInstance();
    this.emptySet_0 = emptySet();
  }
  NullWeapon.prototype.fire_ccnmq$ = function (ship, hardpointX, hardpointY) {
    return this.emptySet_0;
  };
  function NullWeapon$Companion() {
    NullWeapon$Companion_instance = this;
    this.INSTANCE = new NullWeapon();
  }
  NullWeapon$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NullWeapon$Companion_instance = null;
  function NullWeapon$Companion_getInstance() {
    if (NullWeapon$Companion_instance === null) {
      new NullWeapon$Companion();
    }
    return NullWeapon$Companion_instance;
  }
  NullWeapon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullWeapon',
    interfaces: [Weapon]
  };
  function SimpleWeapon(projectileWidth, projectileHeight, projectileVelocity, onImpact, onDisable) {
    this.projectileWidth_0 = projectileWidth;
    this.projectileHeight_0 = projectileHeight;
    this.projectileVelocity_0 = projectileVelocity;
    this.onImpact_0 = onImpact;
    this.onDisable_0 = onDisable;
    this.centerX_0 = this.projectileWidth_0 / 2;
  }
  SimpleWeapon.prototype.calculateProjectileY_0 = function (ship, hardpointY) {
    var tmp$;
    switch (ship.orientation.name) {
      case 'NORTH':
        tmp$ = ship.y - (this.projectileHeight_0 + hardpointY);
        break;
      case 'SOUTH':
        tmp$ = ship.y + ship.height + hardpointY;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  SimpleWeapon.prototype.fire_ccnmq$ = function (ship, hardpointX, hardpointY) {
    return setOf(new Projectile(ship.x + hardpointX - this.centerX_0, this.calculateProjectileY_0(ship, hardpointY), this.projectileWidth_0, this.projectileHeight_0, ship.orientation.vector, this.projectileVelocity_0, ship.orientation, this.onImpact_0, this.onDisable_0));
  };
  SimpleWeapon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleWeapon',
    interfaces: [Weapon]
  };
  function Weapon() {
  }
  Weapon.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Weapon',
    interfaces: []
  };
  function WeaponFactory(onProjectileDisable) {
    this.onProjectileDisable_0 = onProjectileDisable;
  }
  WeaponFactory.prototype.onImpact_0 = function (projectile, ship, damage) {
    ship.damage_14dthe$(damage);
    projectile.disable_sh3iqe$(Cause$IMPACT_getInstance());
  };
  function WeaponFactory$makePlayerWeapon$lambda(closure$damage, this$WeaponFactory) {
    return function (projectile, ship) {
      this$WeaponFactory.onImpact_0(projectile, ship, closure$damage);
      return Unit;
    };
  }
  WeaponFactory.prototype.makePlayerWeapon_14dthe$ = function (damage) {
    return new SimpleWeapon(4.0, 15.0, 9.0, WeaponFactory$makePlayerWeapon$lambda(damage, this), this.onProjectileDisable_0);
  };
  function WeaponFactory$makeEnemyWeapon$lambda(closure$damage, this$WeaponFactory) {
    return function (projectile, ship) {
      this$WeaponFactory.onImpact_0(projectile, ship, closure$damage);
      return Unit;
    };
  }
  WeaponFactory.prototype.makeEnemyWeapon_14dthe$ = function (damage) {
    return new SimpleWeapon(7.0, 7.0, 9.0, WeaponFactory$makeEnemyWeapon$lambda(damage, this), this.onProjectileDisable_0);
  };
  function WeaponFactory$makeWingmanWeapon$lambda(closure$damage, this$WeaponFactory) {
    return function (projectile, ship) {
      this$WeaponFactory.onImpact_0(projectile, ship, closure$damage);
      return Unit;
    };
  }
  WeaponFactory.prototype.makeWingmanWeapon_14dthe$ = function (damage) {
    return new SimpleWeapon(1.0, 10.0, 8.0, WeaponFactory$makeWingmanWeapon$lambda(damage, this), this.onProjectileDisable_0);
  };
  WeaponFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeaponFactory',
    interfaces: []
  };
  function Model() {
    this.collisionEngine_0 = new CollisionEngine();
    this.movementEngine_0 = new MovementEngine();
    this.firingEngine_0 = new FiringEngine();
    this.expirationEngine_0 = new ExpirationEngine();
    this.pilotingEngine_0 = new PilotingEngine();
    this.boostingEngine_0 = new BoostingEngine();
    this.engines_0 = linkedSetOf([this.pilotingEngine_0, this.boostingEngine_0, this.movementEngine_0, this.collisionEngine_0, this.firingEngine_0, this.expirationEngine_0]);
    this.playerShipSpawnListeners_0 = LinkedHashSet_init();
    this.friendlyShipSpawnListeners_0 = LinkedHashSet_init();
    this.hostileShipSpawnListeners_0 = LinkedHashSet_init();
    this.friendlyProjectileSpawnListeners_0 = LinkedHashSet_init();
    this.hostileProjectileSpawnListeners_0 = LinkedHashSet_init();
    this.pickupSpawnListeners_0 = LinkedHashSet_init();
    this.subscribePlayerShipSpawn_zc6rbt$(Model_init$lambda(this));
    this.subscribePlayerShipDespawn_zc6rbt$(Model_init$lambda_0(this));
    this.subscribeFriendlyShipSpawn_zc6rbt$(Model_init$lambda_1(this));
    this.subscribeFriendlyShipDespawn_zc6rbt$(Model_init$lambda_2(this));
    this.subscribeHostileShipSpawn_zc6rbt$(Model_init$lambda_3(this));
    this.subscribeHostileShipDespawn_zc6rbt$(Model_init$lambda_4(this));
    this.subscribeFriendlyProjectileSpawn_w8v4bi$(Model_init$lambda_5(this));
    this.subscribeFriendlyProjectileDespawn_qotlth$(Model_init$lambda_6(this));
    this.subscribeHostileProjectileSpawn_w8v4bi$(Model_init$lambda_7(this));
    this.subscribeHostileProjectileDespawn_qotlth$(Model_init$lambda_8(this));
    this.subscribePickupSpawn_59syzd$(Model_init$lambda_9(this));
    this.subscribePickupDespawn_t5w92d$(Model_init$lambda_10(this));
    this.collisionEngine_0.subscribeShipToShip_8mf76h$(Model_init$lambda_11);
    this.collisionEngine_0.subscribeFriendlyShipToProjectile_f2lmv5$(getCallableRef('impact', function ($receiver, ship) {
      return $receiver.impact_w5sr5q$(ship), Unit;
    }));
    this.collisionEngine_0.subscribeHostileShipToProjectile_f2lmv5$(getCallableRef('impact', function ($receiver, ship) {
      return $receiver.impact_w5sr5q$(ship), Unit;
    }));
    this.collisionEngine_0.subscribePlayerToPickup_fq70t5$(Model_init$lambda_12);
  }
  Model.prototype.tick = function () {
    var tmp$;
    tmp$ = this.engines_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.tick();
    }
  };
  Model.prototype.spawnPlayerShip_w5sr5q$ = function (ship) {
    var tmp$;
    tmp$ = this.playerShipSpawnListeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(ship);
    }
  };
  Model.prototype.spawnFriendlyShip_w5sr5q$ = function (ship) {
    var tmp$;
    tmp$ = this.friendlyShipSpawnListeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(ship);
    }
  };
  Model.prototype.spawnHostileShip_w5sr5q$ = function (ship) {
    var tmp$;
    tmp$ = this.hostileShipSpawnListeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(ship);
    }
  };
  Model.prototype.despawnPlayerShip_w5sr5q$ = function (ship) {
    return this.expirationEngine_0.addPlayer_w5sr5q$(ship);
  };
  Model.prototype.despawnFriendlyShip_w5sr5q$ = function (ship) {
    return this.expirationEngine_0.addFriendly_w5sr5q$(ship);
  };
  Model.prototype.despawnHostileShip_w5sr5q$ = function (ship) {
    return this.expirationEngine_0.addHostile_w5sr5q$(ship);
  };
  Model.prototype.spawnFriendlyProjectile_g1jwul$ = function (projectile, source) {
    var tmp$;
    tmp$ = this.friendlyProjectileSpawnListeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(projectile, source);
    }
  };
  Model.prototype.despawnFriendlyProjectile_7ct0n2$ = function (projectile, cause) {
    return this.expirationEngine_0.addFriendly_7ct0n2$(projectile, cause);
  };
  Model.prototype.spawnHostileProjectile_g1jwul$ = function (projectile, source) {
    var tmp$;
    tmp$ = this.hostileProjectileSpawnListeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(projectile, source);
    }
  };
  Model.prototype.despawnHostileProjectile_7ct0n2$ = function (projectile, cause) {
    return this.expirationEngine_0.addHostile_7ct0n2$(projectile, cause);
  };
  Model.prototype.spawnPickup_91x5fi$ = function (pickup) {
    var tmp$;
    tmp$ = this.pickupSpawnListeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(pickup);
    }
  };
  Model.prototype.despawnPickup_54wmhk$ = function (pickup, cause) {
    return this.expirationEngine_0.addPickup_54wmhk$(pickup, cause);
  };
  Model.prototype.subscribePlayerShipSpawn_zc6rbt$ = function (callback) {
    return this.playerShipSpawnListeners_0.add_11rb$(callback);
  };
  Model.prototype.subscribePlayerShipDespawn_zc6rbt$ = function (callback) {
    return this.expirationEngine_0.subscribePlayer_zc6rbt$(callback);
  };
  Model.prototype.subscribeFriendlyShipSpawn_zc6rbt$ = function (callback) {
    return this.friendlyShipSpawnListeners_0.add_11rb$(callback);
  };
  Model.prototype.subscribeFriendlyShipDespawn_zc6rbt$ = function (callback) {
    return this.expirationEngine_0.subscribeFriendlyShip_zc6rbt$(callback);
  };
  Model.prototype.subscribeHostileShipSpawn_zc6rbt$ = function (callback) {
    return this.hostileShipSpawnListeners_0.add_11rb$(callback);
  };
  Model.prototype.subscribeHostileShipDespawn_zc6rbt$ = function (callback) {
    return this.expirationEngine_0.subscribeHostileShip_zc6rbt$(callback);
  };
  Model.prototype.unsubscribeHostileShipDespawn_zc6rbt$ = function (callback) {
    return this.expirationEngine_0.unsubscribeHostile_zc6rbt$(callback);
  };
  Model.prototype.subscribeFriendlyProjectileSpawn_w8v4bi$ = function (callback) {
    return this.friendlyProjectileSpawnListeners_0.add_11rb$(callback);
  };
  Model.prototype.subscribeFriendlyProjectileDespawn_qotlth$ = function (callback) {
    return this.expirationEngine_0.subscribeFriendly_qotlth$(callback);
  };
  Model.prototype.subscribeHostileProjectileSpawn_w8v4bi$ = function (callback) {
    return this.hostileProjectileSpawnListeners_0.add_11rb$(callback);
  };
  Model.prototype.subscribeHostileProjectileDespawn_qotlth$ = function (callback) {
    return this.expirationEngine_0.subscribeHostile_qotlth$(callback);
  };
  Model.prototype.subscribePickupSpawn_59syzd$ = function (callback) {
    return this.pickupSpawnListeners_0.add_11rb$(callback);
  };
  Model.prototype.subscribePickupDespawn_t5w92d$ = function (callback) {
    return this.expirationEngine_0.subscribePickup_t5w92d$(callback);
  };
  function Model_init$lambda(this$Model) {
    return function (it) {
      this$Model.movementEngine_0.add_51mp45$(it);
      this$Model.collisionEngine_0.addPlayer_w5sr5q$(it);
      this$Model.firingEngine_0.add_9ii2v5$(it);
      this$Model.pilotingEngine_0.add_xjpi86$(it);
      this$Model.boostingEngine_0.add_m46ali$(it);
      return Unit;
    };
  }
  function Model_init$lambda_0(this$Model) {
    return function (it) {
      this$Model.movementEngine_0.remove_51mp45$(it);
      this$Model.collisionEngine_0.removePlayer_w5sr5q$(it);
      this$Model.firingEngine_0.remove_9ii2v5$(it);
      this$Model.pilotingEngine_0.remove_xjpi86$(it);
      this$Model.boostingEngine_0.remove_m46ali$(it);
      return Unit;
    };
  }
  function Model_init$lambda_1(this$Model) {
    return function (it) {
      this$Model.movementEngine_0.add_51mp45$(it);
      this$Model.collisionEngine_0.addFriendly_w5sr5q$(it);
      this$Model.firingEngine_0.add_9ii2v5$(it);
      this$Model.pilotingEngine_0.add_xjpi86$(it);
      this$Model.boostingEngine_0.add_m46ali$(it);
      return Unit;
    };
  }
  function Model_init$lambda_2(this$Model) {
    return function (it) {
      this$Model.movementEngine_0.remove_51mp45$(it);
      this$Model.collisionEngine_0.removeFriendly_w5sr5q$(it);
      this$Model.firingEngine_0.remove_9ii2v5$(it);
      this$Model.pilotingEngine_0.remove_xjpi86$(it);
      this$Model.boostingEngine_0.remove_m46ali$(it);
      return Unit;
    };
  }
  function Model_init$lambda_3(this$Model) {
    return function (it) {
      this$Model.movementEngine_0.add_51mp45$(it);
      this$Model.collisionEngine_0.addHostile_w5sr5q$(it);
      this$Model.firingEngine_0.add_9ii2v5$(it);
      this$Model.pilotingEngine_0.add_xjpi86$(it);
      this$Model.boostingEngine_0.add_m46ali$(it);
      return Unit;
    };
  }
  function Model_init$lambda_4(this$Model) {
    return function (it) {
      this$Model.movementEngine_0.remove_51mp45$(it);
      this$Model.collisionEngine_0.removeHostile_w5sr5q$(it);
      this$Model.firingEngine_0.remove_9ii2v5$(it);
      this$Model.pilotingEngine_0.remove_xjpi86$(it);
      this$Model.boostingEngine_0.remove_m46ali$(it);
      return Unit;
    };
  }
  function Model_init$lambda_5(this$Model) {
    return function (projectile, f) {
      this$Model.movementEngine_0.add_51mp45$(projectile);
      this$Model.collisionEngine_0.addFriendly_qxb2w8$(projectile);
      return Unit;
    };
  }
  function Model_init$lambda_6(this$Model) {
    return function (projectile, f) {
      this$Model.movementEngine_0.remove_51mp45$(projectile);
      this$Model.collisionEngine_0.removeFriendly_qxb2w8$(projectile);
      return Unit;
    };
  }
  function Model_init$lambda_7(this$Model) {
    return function (projectile, f) {
      this$Model.movementEngine_0.add_51mp45$(projectile);
      this$Model.collisionEngine_0.addHostile_qxb2w8$(projectile);
      return Unit;
    };
  }
  function Model_init$lambda_8(this$Model) {
    return function (projectile, f) {
      this$Model.movementEngine_0.remove_51mp45$(projectile);
      this$Model.collisionEngine_0.removeHostile_qxb2w8$(projectile);
      return Unit;
    };
  }
  function Model_init$lambda_9(this$Model) {
    return function (it) {
      this$Model.movementEngine_0.add_51mp45$(it);
      this$Model.collisionEngine_0.addPickup_91x5fi$(it);
      return Unit;
    };
  }
  function Model_init$lambda_10(this$Model) {
    return function (pickup, f) {
      this$Model.movementEngine_0.remove_51mp45$(pickup);
      this$Model.collisionEngine_0.removePickup_91x5fi$(pickup);
      return Unit;
    };
  }
  function Model_init$lambda_11(a, b) {
    a.damage_14dthe$(30.0);
    b.damage_14dthe$(30.0);
    return Unit;
  }
  function Model_init$lambda_12(pickup, ship) {
    pickup.effect(ship);
    pickup.disable_sh3iqe$(Cause$IMPACT_getInstance());
    return Unit;
  }
  Model.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Model',
    interfaces: []
  };
  function Boostable() {
  }
  Boostable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Boostable',
    interfaces: []
  };
  function BoostingEngine() {
    this.boostables_0 = LinkedHashSet_init();
  }
  BoostingEngine.prototype.tick = function () {
    var tmp$;
    tmp$ = this.boostables_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.boost();
    }
  };
  BoostingEngine.prototype.add_m46ali$ = function (boostable) {
    return this.boostables_0.add_11rb$(boostable);
  };
  BoostingEngine.prototype.remove_m46ali$ = function (boostable) {
    return this.boostables_0.remove_11rb$(boostable);
  };
  BoostingEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoostingEngine',
    interfaces: [Engine]
  };
  function Collidable() {
  }
  Collidable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Collidable',
    interfaces: []
  };
  function CollisionEngine(projectileMinY, projectileMaxY, playerMinX, playerMaxX, playerMinY, playerMaxY) {
    if (projectileMinY === void 0)
      projectileMinY = -100.0;
    if (projectileMaxY === void 0)
      projectileMaxY = 1000.0;
    if (playerMinX === void 0)
      playerMinX = 0.0;
    if (playerMaxX === void 0)
      playerMaxX = 1550.0;
    if (playerMinY === void 0)
      playerMinY = 0.0;
    if (playerMaxY === void 0)
      playerMaxY = 850.0;
    this.projectileMinY_0 = projectileMinY;
    this.projectileMaxY_0 = projectileMaxY;
    this.playerMinX_0 = playerMinX;
    this.playerMaxX_0 = playerMaxX;
    this.playerMinY_0 = playerMinY;
    this.playerMaxY_0 = playerMaxY;
    this.playerShips_0 = LinkedHashSet_init();
    this.friendlyShips_0 = LinkedHashSet_init();
    this.friendlyProjectiles_0 = LinkedHashSet_init();
    this.hostileShips_0 = LinkedHashSet_init();
    this.hostileProjectiles_0 = LinkedHashSet_init();
    this.pickups_0 = LinkedHashSet_init();
    this.shipToShipListeners_0 = LinkedHashSet_init();
    this.hostileShipToProjectileListeners_0 = LinkedHashSet_init();
    this.friendlyShipToProjectileListeners_0 = LinkedHashSet_init();
    this.playerToPickupListeners_0 = LinkedHashSet_init();
  }
  CollisionEngine.prototype.addFriendly_w5sr5q$ = function (ship) {
    return this.friendlyShips_0.add_11rb$(ship);
  };
  CollisionEngine.prototype.addFriendly_qxb2w8$ = function (projectile) {
    return this.friendlyProjectiles_0.add_11rb$(projectile);
  };
  CollisionEngine.prototype.addHostile_w5sr5q$ = function (ship) {
    return this.hostileShips_0.add_11rb$(ship);
  };
  CollisionEngine.prototype.addHostile_qxb2w8$ = function (projectile) {
    return this.hostileProjectiles_0.add_11rb$(projectile);
  };
  CollisionEngine.prototype.removeFriendly_w5sr5q$ = function (ship) {
    return this.friendlyShips_0.remove_11rb$(ship);
  };
  CollisionEngine.prototype.removeFriendly_qxb2w8$ = function (projectile) {
    return this.friendlyProjectiles_0.remove_11rb$(projectile);
  };
  CollisionEngine.prototype.addPlayer_w5sr5q$ = function (ship) {
    return this.playerShips_0.add_11rb$(ship);
  };
  CollisionEngine.prototype.removePlayer_w5sr5q$ = function (ship) {
    return this.playerShips_0.remove_11rb$(ship);
  };
  CollisionEngine.prototype.removeHostile_w5sr5q$ = function (ship) {
    return this.hostileShips_0.remove_11rb$(ship);
  };
  CollisionEngine.prototype.removeHostile_qxb2w8$ = function (projectile) {
    return this.hostileProjectiles_0.remove_11rb$(projectile);
  };
  CollisionEngine.prototype.addPickup_91x5fi$ = function (pickup) {
    return this.pickups_0.add_11rb$(pickup);
  };
  CollisionEngine.prototype.removePickup_91x5fi$ = function (pickup) {
    return this.pickups_0.remove_11rb$(pickup);
  };
  CollisionEngine.prototype.tick = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    tmp$ = this.pickups_0.iterator();
    while (tmp$.hasNext()) {
      var pickup = tmp$.next();
      if (pickup.y < this.projectileMinY_0 || pickup.y > this.projectileMaxY_0) {
        pickup.disable_sh3iqe$(Cause$OUT_OF_BOUNDS_getInstance());
      }
    }
    tmp$_0 = this.playerShips_0.iterator();
    while (tmp$_0.hasNext()) {
      var player = tmp$_0.next();
      if (player.y < this.playerMinY_0) {
        player.y = this.playerMinY_0;
      }
       else if (player.y > this.playerMaxY_0) {
        player.y = this.playerMaxY_0;
      }
      if (player.x < this.playerMinX_0) {
        player.x = this.playerMinX_0;
      }
       else if (player.x > this.playerMaxX_0) {
        player.x = this.playerMaxX_0;
      }
    }
    tmp$_1 = this.friendlyProjectiles_0.iterator();
    while (tmp$_1.hasNext()) {
      var projectile = tmp$_1.next();
      if (projectile.y < this.projectileMinY_0 || projectile.y > this.projectileMaxY_0) {
        projectile.disable_sh3iqe$(Cause$OUT_OF_BOUNDS_getInstance());
      }
    }
    tmp$_2 = this.hostileProjectiles_0.iterator();
    while (tmp$_2.hasNext()) {
      var projectile_0 = tmp$_2.next();
      if (projectile_0.y < this.projectileMinY_0 || projectile_0.y > this.projectileMaxY_0) {
        projectile_0.disable_sh3iqe$(Cause$OUT_OF_BOUNDS_getInstance());
      }
    }
    tmp$_3 = this.playerShips_0.iterator();
    while (tmp$_3.hasNext()) {
      var player_0 = tmp$_3.next();
      tmp$_4 = this.hostileProjectiles_0.iterator();
      while (tmp$_4.hasNext()) {
        var projectile_1 = tmp$_4.next();
        if (this.entitiesCollide_0(player_0, projectile_1)) {
          var tmp$_12;
          tmp$_12 = this.friendlyShipToProjectileListeners_0.iterator();
          while (tmp$_12.hasNext()) {
            var element = tmp$_12.next();
            element(projectile_1, player_0);
          }
        }
      }
      tmp$_5 = this.hostileShips_0.iterator();
      while (tmp$_5.hasNext()) {
        var hostile = tmp$_5.next();
        if (this.entitiesCollide_0(player_0, hostile)) {
          var tmp$_13;
          tmp$_13 = this.shipToShipListeners_0.iterator();
          while (tmp$_13.hasNext()) {
            var element_0 = tmp$_13.next();
            element_0(player_0, hostile);
          }
        }
      }
      tmp$_6 = this.pickups_0.iterator();
      while (tmp$_6.hasNext()) {
        var pickup_0 = tmp$_6.next();
        if (this.entitiesCollide_0(player_0, pickup_0)) {
          var tmp$_14;
          tmp$_14 = this.playerToPickupListeners_0.iterator();
          while (tmp$_14.hasNext()) {
            var element_1 = tmp$_14.next();
            element_1(pickup_0, player_0);
          }
        }
      }
    }
    tmp$_7 = this.friendlyShips_0.iterator();
    while (tmp$_7.hasNext()) {
      var friendly = tmp$_7.next();
      tmp$_8 = this.hostileProjectiles_0.iterator();
      while (tmp$_8.hasNext()) {
        var projectile_2 = tmp$_8.next();
        if (this.entitiesCollide_0(friendly, projectile_2)) {
          var tmp$_15;
          tmp$_15 = this.friendlyShipToProjectileListeners_0.iterator();
          while (tmp$_15.hasNext()) {
            var element_2 = tmp$_15.next();
            element_2(projectile_2, friendly);
          }
        }
      }
      tmp$_9 = this.hostileShips_0.iterator();
      while (tmp$_9.hasNext()) {
        var hostile_0 = tmp$_9.next();
        if (this.entitiesCollide_0(friendly, hostile_0)) {
          var tmp$_16;
          tmp$_16 = this.shipToShipListeners_0.iterator();
          while (tmp$_16.hasNext()) {
            var element_3 = tmp$_16.next();
            element_3(friendly, hostile_0);
          }
        }
      }
    }
    tmp$_10 = this.hostileShips_0.iterator();
    while (tmp$_10.hasNext()) {
      var hostile_1 = tmp$_10.next();
      tmp$_11 = this.friendlyProjectiles_0.iterator();
      while (tmp$_11.hasNext()) {
        var projectile_3 = tmp$_11.next();
        if (this.entitiesCollide_0(projectile_3, hostile_1)) {
          var tmp$_17;
          tmp$_17 = this.hostileShipToProjectileListeners_0.iterator();
          while (tmp$_17.hasNext()) {
            var element_4 = tmp$_17.next();
            element_4(projectile_3, hostile_1);
          }
        }
      }
    }
  };
  CollisionEngine.prototype.entitiesCollide_0 = function (a, b) {
    var tmp$;
    if (equals(a, b))
      return false;
    if (a.minY > b.maxY || b.minY > a.maxY) {
      tmp$ = false;
    }
     else
      tmp$ = !(a.minX > b.maxX || b.minX > a.maxX);
    return tmp$;
  };
  CollisionEngine.prototype.subscribeHostileShipToProjectile_f2lmv5$ = function (listener) {
    return this.hostileShipToProjectileListeners_0.add_11rb$(listener);
  };
  CollisionEngine.prototype.subscribeFriendlyShipToProjectile_f2lmv5$ = function (listener) {
    return this.friendlyShipToProjectileListeners_0.add_11rb$(listener);
  };
  CollisionEngine.prototype.subscribeShipToShip_8mf76h$ = function (listener) {
    return this.shipToShipListeners_0.add_11rb$(listener);
  };
  CollisionEngine.prototype.subscribePlayerToPickup_fq70t5$ = function (listener) {
    return this.playerToPickupListeners_0.add_11rb$(listener);
  };
  CollisionEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CollisionEngine',
    interfaces: [Engine]
  };
  function Damagable() {
  }
  Damagable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Damagable',
    interfaces: []
  };
  function Engine() {
  }
  Engine.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Engine',
    interfaces: []
  };
  function Cause(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Cause_initFields() {
    Cause_initFields = function () {
    };
    Cause$OUT_OF_BOUNDS_instance = new Cause('OUT_OF_BOUNDS', 0);
    Cause$IMPACT_instance = new Cause('IMPACT', 1);
  }
  var Cause$OUT_OF_BOUNDS_instance;
  function Cause$OUT_OF_BOUNDS_getInstance() {
    Cause_initFields();
    return Cause$OUT_OF_BOUNDS_instance;
  }
  var Cause$IMPACT_instance;
  function Cause$IMPACT_getInstance() {
    Cause_initFields();
    return Cause$IMPACT_instance;
  }
  Cause.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cause',
    interfaces: [Enum]
  };
  function Cause$values() {
    return [Cause$OUT_OF_BOUNDS_getInstance(), Cause$IMPACT_getInstance()];
  }
  Cause.values = Cause$values;
  function Cause$valueOf(name) {
    switch (name) {
      case 'OUT_OF_BOUNDS':
        return Cause$OUT_OF_BOUNDS_getInstance();
      case 'IMPACT':
        return Cause$IMPACT_getInstance();
      default:throwISE('No enum constant wylaga.model.systems.expiration.Cause.' + name);
    }
  }
  Cause.valueOf_61zpoe$ = Cause$valueOf;
  function ExpirationEngine() {
    this.players_0 = LinkedHashSet_init();
    this.friendlyShips_0 = LinkedHashSet_init();
    this.hostileShips_0 = LinkedHashSet_init();
    this.friendlyProjectiles_0 = LinkedHashSet_init();
    this.hostileProjectiles_0 = LinkedHashSet_init();
    this.pickups_0 = LinkedHashSet_init();
    this.playerListeners_0 = LinkedHashSet_init();
    this.friendlyShipListeners_0 = LinkedHashSet_init();
    this.hostileShipListeners_0 = LinkedHashSet_init();
    this.friendlyProjectileListeners_0 = LinkedHashSet_init();
    this.hostileProjectileListeners_0 = LinkedHashSet_init();
    this.pickupListeners_0 = LinkedHashSet_init();
  }
  ExpirationEngine.prototype.addPlayer_w5sr5q$ = function (player) {
    return this.players_0.add_11rb$(player);
  };
  ExpirationEngine.prototype.addFriendly_w5sr5q$ = function (ship) {
    return this.friendlyShips_0.add_11rb$(ship);
  };
  ExpirationEngine.prototype.addHostile_w5sr5q$ = function (ship) {
    return this.hostileShips_0.add_11rb$(ship);
  };
  ExpirationEngine.prototype.addFriendly_7ct0n2$ = function (projectile, cause) {
    return this.friendlyProjectiles_0.add_11rb$(new Pair(projectile, cause));
  };
  ExpirationEngine.prototype.addHostile_7ct0n2$ = function (projectile, cause) {
    return this.hostileProjectiles_0.add_11rb$(new Pair(projectile, cause));
  };
  ExpirationEngine.prototype.addPickup_54wmhk$ = function (pickup, cause) {
    return this.pickups_0.add_11rb$(new Pair(pickup, cause));
  };
  ExpirationEngine.prototype.subscribePlayer_zc6rbt$ = function (callback) {
    return this.playerListeners_0.add_11rb$(callback);
  };
  ExpirationEngine.prototype.subscribeFriendlyShip_zc6rbt$ = function (callback) {
    return this.friendlyShipListeners_0.add_11rb$(callback);
  };
  ExpirationEngine.prototype.subscribeHostileShip_zc6rbt$ = function (callback) {
    return this.hostileShipListeners_0.add_11rb$(callback);
  };
  ExpirationEngine.prototype.subscribeFriendly_qotlth$ = function (callback) {
    return this.friendlyProjectileListeners_0.add_11rb$(callback);
  };
  ExpirationEngine.prototype.subscribeHostile_qotlth$ = function (callback) {
    return this.hostileProjectileListeners_0.add_11rb$(callback);
  };
  ExpirationEngine.prototype.subscribePickup_t5w92d$ = function (callback) {
    return this.pickupListeners_0.add_11rb$(callback);
  };
  ExpirationEngine.prototype.unsubscribeHostile_zc6rbt$ = function (callback) {
    return this.hostileShipListeners_0.remove_11rb$(callback);
  };
  ExpirationEngine.prototype.tick = function () {
    var tmp$;
    tmp$ = this.players_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = this.playerListeners_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        element_0(element);
      }
    }
    var tmp$_1;
    tmp$_1 = this.friendlyShips_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      var tmp$_2;
      tmp$_2 = this.friendlyShipListeners_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_2 = tmp$_2.next();
        element_2(element_1);
      }
    }
    var tmp$_3;
    tmp$_3 = this.hostileShips_0.iterator();
    while (tmp$_3.hasNext()) {
      var element_3 = tmp$_3.next();
      var tmp$_4;
      tmp$_4 = this.hostileShipListeners_0.iterator();
      while (tmp$_4.hasNext()) {
        var element_4 = tmp$_4.next();
        element_4(element_3);
      }
    }
    var tmp$_5;
    tmp$_5 = this.friendlyProjectiles_0.iterator();
    while (tmp$_5.hasNext()) {
      var element_5 = tmp$_5.next();
      var tmp$_6;
      tmp$_6 = this.friendlyProjectileListeners_0.iterator();
      while (tmp$_6.hasNext()) {
        var element_6 = tmp$_6.next();
        element_6(element_5.first, element_5.second);
      }
    }
    var tmp$_7;
    tmp$_7 = this.hostileProjectiles_0.iterator();
    while (tmp$_7.hasNext()) {
      var element_7 = tmp$_7.next();
      var tmp$_8;
      tmp$_8 = this.hostileProjectileListeners_0.iterator();
      while (tmp$_8.hasNext()) {
        var element_8 = tmp$_8.next();
        element_8(element_7.first, element_7.second);
      }
    }
    var tmp$_9;
    tmp$_9 = this.pickups_0.iterator();
    while (tmp$_9.hasNext()) {
      var element_9 = tmp$_9.next();
      var tmp$_10;
      tmp$_10 = this.pickupListeners_0.iterator();
      while (tmp$_10.hasNext()) {
        var element_10 = tmp$_10.next();
        element_10(element_9.first, element_9.second);
      }
    }
    this.players_0.clear();
    this.friendlyShips_0.clear();
    this.hostileShips_0.clear();
    this.friendlyProjectiles_0.clear();
    this.hostileProjectiles_0.clear();
    this.pickups_0.clear();
  };
  ExpirationEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExpirationEngine',
    interfaces: [Engine]
  };
  function Fireable() {
  }
  Fireable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Fireable',
    interfaces: []
  };
  function FiringEngine() {
    this.fireables_0 = LinkedHashSet_init();
  }
  FiringEngine.prototype.add_9ii2v5$ = function (entity) {
    return this.fireables_0.add_11rb$(entity);
  };
  FiringEngine.prototype.remove_9ii2v5$ = function (entity) {
    return this.fireables_0.remove_11rb$(entity);
  };
  FiringEngine.prototype.tick = function () {
    var tmp$;
    tmp$ = this.fireables_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.fire();
    }
  };
  FiringEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FiringEngine',
    interfaces: [Engine]
  };
  function Movable() {
  }
  Movable.prototype.moveTo_lu1900$ = function (x, y) {
    this.x = x;
    this.y = y;
  };
  Movable.prototype.moveBy_lu1900$ = function (dx, dy) {
    this.x = this.x + dx;
    this.y = this.y + dy;
  };
  Movable.prototype.move = function () {
    this.moveBy_lu1900$(this.trajectory.dx * this.velocity, this.trajectory.dy * this.velocity);
  };
  Movable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Movable',
    interfaces: []
  };
  function MovementEngine() {
    this.entities_0 = LinkedHashSet_init();
  }
  MovementEngine.prototype.add_51mp45$ = function (entity) {
    return this.entities_0.add_11rb$(entity);
  };
  MovementEngine.prototype.remove_51mp45$ = function (entity) {
    return this.entities_0.remove_11rb$(entity);
  };
  MovementEngine.prototype.tick = function () {
    var tmp$;
    tmp$ = this.entities_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.move();
    }
  };
  MovementEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MovementEngine',
    interfaces: [Engine]
  };
  function Pilotable() {
  }
  Pilotable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Pilotable',
    interfaces: []
  };
  function PilotingEngine() {
    this.pilotables_0 = LinkedHashSet_init();
  }
  PilotingEngine.prototype.tick = function () {
    var tmp$;
    tmp$ = this.pilotables_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.pilot();
    }
  };
  PilotingEngine.prototype.add_xjpi86$ = function (entity) {
    return this.pilotables_0.add_11rb$(entity);
  };
  PilotingEngine.prototype.remove_xjpi86$ = function (entity) {
    return this.pilotables_0.remove_11rb$(entity);
  };
  PilotingEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PilotingEngine',
    interfaces: [Engine]
  };
  function SimpleStage(spritePairs, weaponPairs, onStageComplete) {
    this.spritePairs_0 = spritePairs;
    this.weaponPairs_0 = weaponPairs;
    this.onStageComplete_0 = onStageComplete;
    this.shipsLeft_0 = 0;
  }
  SimpleStage.prototype.load_19dnld$ = function (view) {
    var tmp$;
    tmp$ = this.spritePairs_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      view.setSprite_tszr4f$(element.first, element.second);
    }
    var tmp$_0;
    tmp$_0 = this.weaponPairs_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      view.setSpriteMaker_rymwiy$(element_0.first, element_0.second);
    }
  };
  function SimpleStage$start$lambda(closure$prevOnStageComplete, closure$model, this$SimpleStage) {
    return function () {
      closure$prevOnStageComplete();
      closure$model.unsubscribeHostileShipDespawn_zc6rbt$(getCallableRef('onShipDespawn', function ($receiver, ship) {
        return $receiver.onShipDespawn_0(ship), Unit;
      }.bind(null, this$SimpleStage)));
      return Unit;
    };
  }
  SimpleStage.prototype.start_e9rrev$ = function (model) {
    var tmp$;
    tmp$ = this.spritePairs_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      model.spawnHostileShip_w5sr5q$(element.first);
    }
    this.shipsLeft_0 = this.spritePairs_0.size;
    var prevOnStageComplete = this.onStageComplete_0;
    this.onStageComplete_0 = SimpleStage$start$lambda(prevOnStageComplete, model, this);
    model.subscribeHostileShipDespawn_zc6rbt$(getCallableRef('onShipDespawn', function ($receiver, ship) {
      return $receiver.onShipDespawn_0(ship), Unit;
    }.bind(null, this)));
  };
  SimpleStage.prototype.onShipDespawn_0 = function (ship) {
    var tmp$;
    tmp$ = this.spritePairs_0.iterator();
    while (tmp$.hasNext()) {
      var pair = tmp$.next();
      if (pair.first === ship) {
        this.shipDied_0(ship);
        return;
      }
    }
  };
  SimpleStage.prototype.shipDied_0 = function (ship) {
    this.shipsLeft_0 = this.shipsLeft_0 - 1 | 0;
    if (this.shipsLeft_0 <= 0) {
      this.onStageComplete_0();
    }
  };
  SimpleStage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleStage',
    interfaces: [Stage]
  };
  function Stage() {
  }
  Stage.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Stage',
    interfaces: []
  };
  function StageFactory(weaponFactory, shipFactory, spriteFactory, wingmanMap) {
    this.weaponFactory_0 = weaponFactory;
    this.shipFactory_0 = shipFactory;
    this.spriteFactory_0 = spriteFactory;
    this.wingmanMap_0 = wingmanMap;
  }
  StageFactory.prototype.stage1_o14v8n$ = function (onStageComplete) {
    var pair = this.makeWing_0(800.0, 125.0);
    return new SimpleStage(pair.first, pair.second, onStageComplete);
  };
  StageFactory.prototype.stage2_o14v8n$ = function (onStageComplete) {
    var spritePairs = LinkedHashSet_init();
    var weaponPairs = LinkedHashSet_init();
    var pair = this.makeWing_0(800.0, 125.0);
    spritePairs.addAll_brywnq$(pair.first);
    weaponPairs.addAll_brywnq$(pair.second);
    pair = this.makeWing_0(600.0, 100.0);
    spritePairs.addAll_brywnq$(pair.first);
    weaponPairs.addAll_brywnq$(pair.second);
    pair = this.makeWing_0(1000.0, 100.0);
    spritePairs.addAll_brywnq$(pair.first);
    weaponPairs.addAll_brywnq$(pair.second);
    return new SimpleStage(spritePairs, weaponPairs, onStageComplete);
  };
  StageFactory.prototype.stage3_o14v8n$ = function (onStageComplete) {
    var spritePairs = LinkedHashSet_init();
    var weaponPairs = LinkedHashSet_init();
    var pair = this.makeWing_0(800.0, 125.0);
    spritePairs.addAll_brywnq$(pair.first);
    weaponPairs.addAll_brywnq$(pair.second);
    pair = this.makeWing_0(600.0, 100.0);
    spritePairs.addAll_brywnq$(pair.first);
    weaponPairs.addAll_brywnq$(pair.second);
    pair = this.makeWing_0(1000.0, 100.0);
    spritePairs.addAll_brywnq$(pair.first);
    weaponPairs.addAll_brywnq$(pair.second);
    pair = this.makeWing_0(400.0, 100.0);
    spritePairs.addAll_brywnq$(pair.first);
    weaponPairs.addAll_brywnq$(pair.second);
    pair = this.makeWing_0(1200.0, 100.0);
    spritePairs.addAll_brywnq$(pair.first);
    weaponPairs.addAll_brywnq$(pair.second);
    return new SimpleStage(spritePairs, weaponPairs, onStageComplete);
  };
  StageFactory.prototype.stage4_o14v8n$ = function (onStageComplete) {
    var pair = this.makeBossWing_0(800.0, 125.0);
    return new SimpleStage(pair.first, pair.second, onStageComplete);
  };
  StageFactory.prototype.makeBossWing_0 = function (x, y) {
    var spritePairs = LinkedHashSet_init();
    var weaponPairs = LinkedHashSet_init();
    var pairs = this.makeNemesis_0(x - 25.0, y);
    spritePairs.add_11rb$(pairs.first);
    weaponPairs.add_11rb$(pairs.second);
    return new Pair(spritePairs, weaponPairs);
  };
  StageFactory.prototype.makeNemesis_0 = function (x, y) {
    var weapon = this.weaponFactory_0.makePlayerWeapon_14dthe$(50.0);
    var nemesis = this.shipFactory_0.makeEvilPlayer_fa1mpq$(x, y - 300, weapon, this.makeRallyPilot_0(x, y, 0.08));
    return new Pair(new Pair(nemesis, this.spriteFactory_0.makePlayer_w5sr5q$(nemesis)), new Pair(weapon, getCallableRef('makeRedPlayerProjectile', function ($receiver, projectile) {
      return $receiver.makeRedPlayerProjectile_qsqm6m$(projectile);
    }.bind(null, this.spriteFactory_0))));
  };
  StageFactory.prototype.makeWing_0 = function (x, y) {
    var spritePairs = LinkedHashSet_init();
    var weaponPairs = LinkedHashSet_init();
    var pairs = this.makeBigEnemy_0(x - 25.0, y);
    spritePairs.add_11rb$(pairs.first);
    weaponPairs.add_11rb$(pairs.second);
    var leader = pairs.first.first;
    pairs = this.makeSmallEnemy_0(x - 75, y - 50, leader);
    spritePairs.add_11rb$(pairs.first);
    weaponPairs.add_11rb$(pairs.second);
    var left = pairs.first.first;
    pairs = this.makeSmallEnemy_0(x + 50, y - 50, leader);
    spritePairs.add_11rb$(pairs.first);
    weaponPairs.add_11rb$(pairs.second);
    var right = pairs.first.first;
    var $receiver = this.wingmanMap_0;
    var value = new Pair(left, right);
    $receiver.put_xwzc9p$(leader, value);
    return new Pair(spritePairs, weaponPairs);
  };
  StageFactory.prototype.makeBigEnemy_0 = function (x, y) {
    var weapon = this.weaponFactory_0.makeEnemyWeapon_14dthe$(20.0);
    var enemy = this.shipFactory_0.makeEnemy_fa1mpq$(x, y - 300, weapon, this.makeRallyPilot_0(x, y));
    return new Pair(new Pair(enemy, this.spriteFactory_0.makeBigEnemy_w5sr5q$(enemy)), new Pair(weapon, getCallableRef('makeGreenSquareProjectile', function ($receiver, projectile) {
      return $receiver.makeGreenSquareProjectile_qsqm6m$(projectile);
    }.bind(null, this.spriteFactory_0))));
  };
  StageFactory.prototype.makeSmallEnemy_0 = function (x, y, leader) {
    var weapon = this.weaponFactory_0.makeEnemyWeapon_14dthe$(10.0);
    var enemy = this.shipFactory_0.makeSmallEnemy_fa1mpq$(x, y - 300, weapon, this.makeMirrorPilot_0(leader));
    return new Pair(new Pair(enemy, this.spriteFactory_0.makeEnemy_w5sr5q$(enemy)), new Pair(weapon, getCallableRef('makeGreenSquareProjectile', function ($receiver, projectile) {
      return $receiver.makeGreenSquareProjectile_qsqm6m$(projectile);
    }.bind(null, this.spriteFactory_0))));
  };
  function StageFactory$makeRallyPilot$lambda(closure$fireChance) {
    return function (it) {
      it.activePilot = new RandomPilot(0.01, closure$fireChance, 0.01);
      return Unit;
    };
  }
  StageFactory.prototype.makeRallyPilot_0 = function (x, y, fireChance) {
    if (fireChance === void 0)
      fireChance = 0.02;
    return new RallyPilot(x, y, StageFactory$makeRallyPilot$lambda(fireChance));
  };
  StageFactory.prototype.makeMirrorPilot_0 = function (leader) {
    return new MirrorPilot(leader, 4);
  };
  StageFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StageFactory',
    interfaces: []
  };
  function StageIterator(stageFactory, onComplete) {
    this.onComplete_0 = onComplete;
    this.stageMakers_0 = [getCallableRef('stage1', function ($receiver, onStageComplete) {
      return $receiver.stage1_o14v8n$(onStageComplete);
    }.bind(null, stageFactory)), getCallableRef('stage2', function ($receiver, onStageComplete) {
      return $receiver.stage2_o14v8n$(onStageComplete);
    }.bind(null, stageFactory)), getCallableRef('stage3', function ($receiver, onStageComplete) {
      return $receiver.stage3_o14v8n$(onStageComplete);
    }.bind(null, stageFactory)), getCallableRef('stage4', function ($receiver, onStageComplete) {
      return $receiver.stage4_o14v8n$(onStageComplete);
    }.bind(null, stageFactory))];
    this.stageCount_0 = 0;
  }
  StageIterator.prototype.next = function () {
    var tmp$;
    return this.stageMakers_0[tmp$ = this.stageCount_0, this.stageCount_0 = tmp$ + 1 | 0, tmp$](this.onComplete_0);
  };
  StageIterator.prototype.hasNext = function () {
    return this.stageCount_0 < this.stageMakers_0.length;
  };
  StageIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StageIterator',
    interfaces: [Iterator]
  };
  function DirectionVector(dx, dy) {
    DirectionVector$Companion_getInstance();
    this.dx = 0;
    this.dy = 0;
    var x = dx * dx + dy * dy;
    var mag = Math_0.sqrt(x);
    if (mag <= 1.0) {
      this.dx = dx;
      this.dy = dy;
    }
     else {
      this.dx = dx / mag;
      this.dy = dy / mag;
    }
  }
  function DirectionVector$Companion() {
    DirectionVector$Companion_instance = this;
    this.NULL = new DirectionVector(0.0, 0.0);
    this.NORTH = new DirectionVector(0.0, -1.0);
    this.NORTHEAST = new DirectionVector(1.0, -1.0);
    this.EAST = new DirectionVector(1.0, 0.0);
    this.SOUTHEAST = new DirectionVector(1.0, 1.0);
    this.SOUTH = new DirectionVector(0.0, 1.0);
    this.SOUTHWEST = new DirectionVector(-1.0, 1.0);
    this.WEST = new DirectionVector(-1.0, 0.0);
    this.NORTHWEST = new DirectionVector(-1.0, -1.0);
  }
  DirectionVector$Companion.prototype.random = function () {
    return new DirectionVector(Random.Default.nextDouble() * 2 - 1, Random.Default.nextDouble() * 2 - 1);
  };
  DirectionVector$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DirectionVector$Companion_instance = null;
  function DirectionVector$Companion_getInstance() {
    if (DirectionVector$Companion_instance === null) {
      new DirectionVector$Companion();
    }
    return DirectionVector$Companion_instance;
  }
  DirectionVector.prototype.equals = function (other) {
    var tmp$;
    if (Kotlin.isType(other, DirectionVector)) {
      tmp$ = (other.dx === this.dx && other.dy === this.dy);
    }
     else
      tmp$ = false;
    return tmp$;
  };
  DirectionVector.prototype.hashCode = function () {
    return numberToInt(this.dx + 17 * this.dy);
  };
  DirectionVector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DirectionVector',
    interfaces: []
  };
  function ScrollingLogo(x, y, logo, endY, onEnd) {
    this.endY_0 = endY;
    this.onEnd_0 = onEnd;
    this.root_0 = new TranslatedDisplayable(x, y, logo);
  }
  ScrollingLogo.prototype.display_9kr3df$ = function (p) {
    this.root_0.display_9kr3df$(p);
  };
  ScrollingLogo.prototype.tick = function () {
    this.root_0.y = this.root_0.y - 2;
    if (this.root_0.y <= this.endY_0) {
      this.onEnd_0(this);
    }
  };
  ScrollingLogo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScrollingLogo',
    interfaces: [Tickable, Displayable]
  };
  function Starfield(width, height, starCount) {
    this.height_0 = height;
    this.displayRoot_0 = new CompositeDisplayable([]);
    this.tickRoot_0 = new CompositeTickable([]);
    this.displayRoot_0.add_8p1vy5$(new SolidRect(width, this.height_0, Color$Companion_getInstance().BLACK));
    for (var i = 1; i <= starCount; i++) {
      var star = new Starfield$Star(this, Random.Default.nextDouble() * width, Random.Default.nextDouble() * this.height_0, Random.Default.nextDouble() * 3 + 0.2, 1.0, new Color(Random.Default.nextInt_za3lpa$(255), Random.Default.nextInt_za3lpa$(255), Random.Default.nextInt_za3lpa$(255)));
      this.displayRoot_0.add_8p1vy5$(star);
      this.tickRoot_0.add_1ih14v$(star);
    }
  }
  Starfield.prototype.display_9kr3df$ = function (p) {
    this.displayRoot_0.display_9kr3df$(p);
  };
  Starfield.prototype.tick = function () {
    this.tickRoot_0.tick();
  };
  function Starfield$Star($outer, x, y, dy, size, color) {
    this.$outer = $outer;
    this.dy_0 = dy;
    this.displayable_0 = new TranslatedDisplayable(x, y, new SolidRect(size, size, color));
  }
  Starfield$Star.prototype.display_9kr3df$ = function (p) {
    this.displayable_0.display_9kr3df$(p);
  };
  Starfield$Star.prototype.tick = function () {
    this.displayable_0.y = this.displayable_0.y + this.dy_0;
    if (this.displayable_0.y >= this.$outer.height_0) {
      this.displayable_0.y = 0.0;
    }
  };
  Starfield$Star.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Star',
    interfaces: [Tickable, Displayable]
  };
  Starfield.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Starfield',
    interfaces: [Tickable, Displayable]
  };
  function Color(red, green, blue, alpha) {
    Color$Companion_getInstance();
    if (alpha === void 0)
      alpha = 255;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  Color.prototype.withAlpha_za3lpa$ = function (alpha) {
    return new Color(this.red, this.green, this.blue, alpha);
  };
  function Color$Companion() {
    Color$Companion_instance = this;
    this.BLACK = new Color(0, 0, 0);
    this.WHITE = new Color(255, 255, 255);
    this.GRAY = new Color(128, 128, 128);
    this.RED = new Color(255, 0, 0);
    this.GREEN = new Color(0, 255, 0);
    this.BLUE = new Color(0, 0, 255);
    this.YELLOW = new Color(255, 255, 0);
    this.MAGENTA = new Color(255, 0, 255);
    this.CYAN = new Color(0, 255, 255);
    this.PINK = new Color(255, 192, 203);
    this.ORANGE = new Color(255, 165, 0);
  }
  Color$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: []
  };
  function AbstractDisplayable() {
  }
  AbstractDisplayable.prototype.display_9kr3df$ = function (p) {
    p.push();
    this.doDisplay_9kr3df$(p);
    p.pop();
  };
  AbstractDisplayable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractDisplayable',
    interfaces: [Displayable]
  };
  function CompositeDisplayable(children) {
    AbstractDisplayable.call(this);
    this.children_0 = linkedSetOf(children.slice());
  }
  Object.defineProperty(CompositeDisplayable.prototype, 'size', {
    get: function () {
      return this.children_0.size;
    }
  });
  CompositeDisplayable.prototype.doDisplay_9kr3df$ = function (p) {
    var tmp$;
    tmp$ = this.children_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.display_9kr3df$(p);
    }
  };
  CompositeDisplayable.prototype.add_8p1vy5$ = function (displayable) {
    return this.children_0.add_11rb$(displayable);
  };
  CompositeDisplayable.prototype.remove_8p1vy5$ = function (displayable) {
    return this.children_0.remove_11rb$(displayable);
  };
  CompositeDisplayable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompositeDisplayable',
    interfaces: [AbstractDisplayable]
  };
  function RotatedDisplayable(target, centerX, centerY, theta) {
    RotatedDisplayable$Companion_getInstance();
    AbstractDisplayable.call(this);
    this.target_0 = target;
    this.centerX_0 = centerX;
    this.centerY_0 = centerY;
    this.theta_0 = theta;
  }
  function RotatedDisplayable$Companion() {
    RotatedDisplayable$Companion_instance = this;
    this.TWO_PI = math.PI * 2;
    this.NEGATIVE_TWO_PI = -this.TWO_PI;
  }
  RotatedDisplayable$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RotatedDisplayable$Companion_instance = null;
  function RotatedDisplayable$Companion_getInstance() {
    if (RotatedDisplayable$Companion_instance === null) {
      new RotatedDisplayable$Companion();
    }
    return RotatedDisplayable$Companion_instance;
  }
  RotatedDisplayable.prototype.doDisplay_9kr3df$ = function (p) {
    p.translate_lu1900$(this.centerX_0, this.centerY_0);
    p.rotate_14dthe$(this.theta_0);
    p.translate_lu1900$(-this.centerX_0, -this.centerY_0);
    this.target_0.display_9kr3df$(p);
  };
  RotatedDisplayable.prototype.rotate_14dthe$ = function (radians) {
    this.theta_0 += radians;
    if (this.theta_0 > RotatedDisplayable$Companion_getInstance().TWO_PI || this.theta_0 < RotatedDisplayable$Companion_getInstance().NEGATIVE_TWO_PI) {
      this.theta_0 %= RotatedDisplayable$Companion_getInstance().TWO_PI;
    }
  };
  RotatedDisplayable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RotatedDisplayable',
    interfaces: [AbstractDisplayable]
  };
  function TranslatedDisplayable(x, y, target) {
    AbstractDisplayable.call(this);
    this.x = x;
    this.y = y;
    this.target = target;
  }
  TranslatedDisplayable.prototype.doDisplay_9kr3df$ = function (p) {
    p.translate_lu1900$(this.x, this.y);
    this.target.display_9kr3df$(p);
  };
  TranslatedDisplayable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslatedDisplayable',
    interfaces: [AbstractDisplayable]
  };
  function Displayable() {
  }
  Displayable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Displayable',
    interfaces: []
  };
  function NullDisplayable() {
    NullDisplayable$Companion_getInstance();
  }
  NullDisplayable.prototype.display_9kr3df$ = function (p) {
  };
  function NullDisplayable$Companion() {
    NullDisplayable$Companion_instance = this;
    this.INSTANCE = new NullDisplayable();
  }
  NullDisplayable$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NullDisplayable$Companion_instance = null;
  function NullDisplayable$Companion_getInstance() {
    if (NullDisplayable$Companion_instance === null) {
      new NullDisplayable$Companion();
    }
    return NullDisplayable$Companion_instance;
  }
  NullDisplayable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullDisplayable',
    interfaces: [Displayable]
  };
  function SolidRect(width, height, color) {
    AbstractDisplayable.call(this);
    this.width_0 = width;
    this.height_0 = height;
    this.color_0 = color;
  }
  SolidRect.prototype.doDisplay_9kr3df$ = function (p) {
    p.setColor_154pcl$(this.color_0);
    p.fillRect_6y0v78$(0.0, 0.0, this.width_0, this.height_0);
  };
  SolidRect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolidRect',
    interfaces: [AbstractDisplayable]
  };
  function StringDisplayable(stringGenerator, typeface, fontSize, fontColor) {
    AbstractDisplayable.call(this);
    this.stringGenerator_0 = stringGenerator;
    this.typeface_0 = typeface;
    this.fontSize_0 = fontSize;
    this.fontColor_0 = fontColor;
  }
  StringDisplayable.prototype.doDisplay_9kr3df$ = function (p) {
    p.setColor_154pcl$(this.fontColor_0);
    p.setFont_bm4lxs$(this.typeface_0, this.fontSize_0);
    p.drawString_61zpoe$(this.stringGenerator_0());
  };
  StringDisplayable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringDisplayable',
    interfaces: [AbstractDisplayable]
  };
  function Base64Encoding(prefix, data) {
    this.prefix = prefix;
    this.data = data;
  }
  Base64Encoding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base64Encoding',
    interfaces: []
  };
  function Painter() {
  }
  Painter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Painter',
    interfaces: []
  };
  function CompositeTickable(children) {
    this.children_0 = mutableSetOf(children.slice());
    this.expired_0 = LinkedHashSet_init();
  }
  CompositeTickable.prototype.add_1ih14v$ = function (t) {
    return this.children_0.add_11rb$(t);
  };
  CompositeTickable.prototype.remove_1ih14v$ = function (t) {
    return this.expired_0.add_11rb$(t);
  };
  CompositeTickable.prototype.tick = function () {
    if (this.expired_0.size > 0) {
      this.children_0.removeAll_brywnq$(this.expired_0);
      this.expired_0.clear();
    }
    var tmp$;
    tmp$ = this.children_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.tick();
    }
  };
  CompositeTickable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompositeTickable',
    interfaces: [Tickable]
  };
  function DelegateTickable(delegate) {
    if (delegate === void 0)
      delegate = NullTickable$Companion_getInstance().instance;
    this.delegate = delegate;
  }
  DelegateTickable.prototype.tick = function () {
    this.delegate.tick();
  };
  DelegateTickable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegateTickable',
    interfaces: [Tickable]
  };
  function CountdownTickable(counter, countdownComplete) {
    this.counter_0 = counter;
    this.countdownComplete_0 = countdownComplete;
  }
  CountdownTickable.prototype.tick = function () {
    if (this.counter_0 === 0) {
      this.countdownComplete_0();
    }
     else
      this.counter_0 = this.counter_0 - 1 | 0;
  };
  CountdownTickable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CountdownTickable',
    interfaces: [Tickable]
  };
  function IntervalTickable(interval, onInterval) {
    this.interval_0 = interval;
    this.onInterval_0 = onInterval;
    this.counter_0 = this.interval_0;
  }
  IntervalTickable.prototype.tick = function () {
    if (this.counter_0 <= 0) {
      this.counter_0 = this.interval_0;
      this.onInterval_0();
    }
     else
      this.counter_0 = this.counter_0 - 1 | 0;
  };
  IntervalTickable.prototype.skipAhead = function () {
    this.counter_0 = 0;
  };
  IntervalTickable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntervalTickable',
    interfaces: [Tickable]
  };
  function NullTickable() {
    NullTickable$Companion_getInstance();
  }
  NullTickable.prototype.tick = function () {
  };
  function NullTickable$Companion() {
    NullTickable$Companion_instance = this;
    this.instance = new NullTickable();
  }
  NullTickable$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NullTickable$Companion_instance = null;
  function NullTickable$Companion_getInstance() {
    if (NullTickable$Companion_instance === null) {
      new NullTickable$Companion();
    }
    return NullTickable$Companion_instance;
  }
  NullTickable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullTickable',
    interfaces: [Tickable]
  };
  function SimpleTickable(onTick) {
    this.onTick_0 = onTick;
  }
  SimpleTickable.prototype.tick = function () {
    this.onTick_0();
  };
  SimpleTickable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleTickable',
    interfaces: [Tickable]
  };
  function Tickable() {
  }
  Tickable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Tickable',
    interfaces: []
  };
  function ImageLoader(decode) {
    this.wylagaLogo = decode(new ImageLoader$PNG('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'));
    this.redPlayerProjectile = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAQAAAAPCAYAAADDNm69AAAAH0lEQVQoU2P8P2HCfwYkwAgWKCiACE2YwDD8BJB8CwAfTUjSYtSVFQAAAABJRU5ErkJgggAA'));
    this.orangePlayerProjectile = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAQAAAAPCAYAAADDNm69AAAAH0lEQVQoU2P8f3DCfwYkwAgWuFgAEdKfwDD8BJB8CwDHfkux89QabwAAAABJRU5ErkJgggAA'));
    this.yellowPlayerProjectile = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAQAAAAPCAYAAADDNm69AAAAHUlEQVQoU2P8/3/CfwYkwAgRKIAKTWAYhgII7wIAJyZCU9+uA9UAAAAASUVORK5CYIIA'));
    this.greenPlayerProjectile = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAQAAAAPCAYAAADDNm69AAAAIUlEQVQoU2M8+H/CfwYkwAgSsGcoAAsdZJjAMOwEkH0LAJWMS7FHB+sLAAAAAElFTkSuQmCC'));
    this.cyanPlayerProjectile = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAQAAAAPCAYAAADDNm69AAAAH0lEQVQoU2M8+P//fwYkwAgSsIcKHGRgYBh2Asi+BQCj5EUy76TnHAAAAABJRU5ErkJgggAA'));
    this.magentaPlayerProjectile = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAQAAAAPCAYAAADDNm69AAAAHUlEQVQoU2P83/D/PwMSYAQLNEBFGhgYhp8Akm8BtnZBY+mdcMUAAAAASUVORK5CYIIA'));
    this.greenSquareProjectile = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAASUlEQVQYV2NkgIKT/0/+h7HNGc0ZQWwwAZKYxzAPJseQxJDEAFLACJO4znAdLqnJoAlWgCJ5iOEQgx2DHQNWSZhWuCReO/G5FgCToyy40SBJMAAAAABJRU5ErkJgggAA'));
    this.playerBaseChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACDUlEQVRoQ+2YwXGEMAxF4ZhyuKaAdOE6UkPqcBcpIFfKyTE79kaMkGVLNtYuIeayM4uR9PQlYTxPF7nmi3BMA+RsSg5F/pUi3vsfDOycM6sAM8MBIIA45yKL934aIIo6NlMEygorEuKxUsUEhEJAQkN5WcGYgYAS3593jJe3+69VrwyQXP/hsgI1YG1Qxaq8uipCe4MDgfLq3SvdQWhvUOWsemWA0ExLZYX7xKK8DinC7KU2PtofFATDwL0jL8tqkFLwENCyLNPXx8oOttf3ZVrX9B5Ms1YoFYgmeBx1Cwh+vgUqC1IbPAcSso+voFJOkcJ7aXcrV34sSG6vlHNG/w+KwAVlxP2ntQfrSi/TBOQoRHBqBVKadjsQAYJC777+aGkdUET0wymzPVQJAXEWYeh0CkpxEwslIdeziR8KswOB7QWpXWmysTBc0AJItR/8SSCBSMZFZZQN3eQnAenR4MqAuy7D5RUzgU87unp6gDFQRQShb9kQW6aXYtjceo6n1kZu/QZSKivu+1pa/wtarPkWG7mqgcTNpQW57QAXSO0nbIuNUqwsiOakgxrVPENLrMUGBxN8JyDagFqC6AHCDacERAvxgGEkuqDnypsifwkC7YbjIfmmiGbSiCl60gIYGlGRAfIkFbDbaypy5BjmBKLEvaJ2+3yGeIsxDJCzSTQUGYoYZWCUllFim83eAMSCqDoeVT/pAAAAAElFTkSuQmCC'));
    this.playerHurtChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACEElEQVRoQ+2YwW3DMAxF5VvXcY8doFNUc3SGzuFO0QF6TNbpLQUd0KBpiqJkMXBd+RIgYaj/9ElJ1hBO8gwn4Qgd5GhOdkf+lSPTNN0ocIzRrQLcEgMAgLzFOLN8TlPoIIY6dnMEy4o6Anq8XHEB4RA4oVBeXjBuIOjEz9cd4+n1/unVKx0k1X+0rNANjAVXvMqrqSO8NyQQLK/WvdIchPcGd86rVzoIn+lcWdE+8SivXY7wsxSWFQjl/cFBKAz+tmezLAbRxKOg53EM3x9XcWF7eR/D5br9DVezWigTiEU8VV0DQv9fA5UEKRUvgcDs0wdcSjmS2pesUCJI6qxkOITOIeAIPlhG0nfWfBinbaYbkL0QniDaarcC0SCGsL5xuYWwevvjpVXriGUcyZkFpAQCReZg+OoE5SWtWJiPQ2jjcJgVCN0HcslzMJJoDSQFkYPBvUcFySXPwVibuXYc+m4zg7RocKvolnG0vBYQqaxaDuqVC13JgvANCQRp0FK8BFGaIxW/gGhlJb1f5+JBdO7wV5OD3pFJx5lBC0gJkoSUvsLW5NC0iiCWmw6e1PIfXmI1OSQYGHsDYhVUI6IFCK6ytGc2IFYIrxWoJC+/V14c+UsQCIwwiyOWlaZkth4Zi4vG7EgHeeTUJ8Y6pyO5nfgAE69KAFdMtyhHBwF9HeRoLnVHuiNOM9BLy2liq9P+AhJ7sDqaq0RRAAAAAElFTkSuQmCC'));
    this.playerDireChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACmElEQVRoQ+2YS07DMBCGnSWLnINKrLJAqjgApyAXKAfgDByAXiCcggMgJBZdIZVzZNFl0LgedzKZ2E4aq0lxNqCkHs83v+eRZOpKruxKOFQCmZuSSZF/pUhVVQ0FLssy2gmIZhgAAKQsS81SVZVKIAHnOJoi+zxvbu9qlX0dvQBF4IqlShQQDoEBjQkTBaRZq+b3J1erulaHjyPGzeNJmRiqRAGhSb5YECy5UK0QAo8WqBLreE2qCIUA5yWQWIk/OQj2DQ5BVYnRVxII71G+YyUpMmVfmUwRWqmk/OAgNFfw2TlleTAIHQTZxnZALIpCfb7uxMHi4aVQu1332bmzWBAIn2LvNxtlxg+9Hhog/MVxZCjIPs+1PWND23QETAxQL4gwglsDzVo7rdfiOIKdHO4hCESfXqCSpAjYM+utP2AXJgPsO77jJ4LwxJVCQKNIIRAE1+AxAjh+j9oFe6u6zqTA4O9czbQDEgIhaktuSk6HgOC0bBQXt+mDaYF4IDh06+2P7joGhKx37oPKcUq7aCAE2nHC8OoEgFLFckB09qH5aUq+ZmiB4HjBaH2VTYSRnPaABO1Dc+l7u7Uvaj4Qn3GvMr58Ms8H7QOqwPX+fPoO0AKB/gAlbykXTfxWJOib3ZJgYMLogOjEMR8M4H/ekOBeTy5pdun3UlCG2uj7PY42GVarp7cSu6vdV5p/XNUt9O1vjA0+lPImqUEkWtcQJzkSCkEc0NWO7u2z4fJVBAmZRLnRkDX8iI2xIcHA3h2QUIfGODEFiMnD1inqgIRCzKGi8e/KVpElQdA8gxyzipikC+2ucxCEVtbjSx2pQAnkkhKhENelyDmfYS6pBk36ReaFFLwEMocjRX1IiiRFIkUgHa1IgR1t9g8sG+s6aH7n+AAAAABJRU5ErkJgggAA'));
    this.playerHealChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACFElEQVRoQ+2YMXbDIAyG7bHHScbuvUV8jp6h53Bu0b1jcpyM7pNj8UAIIWP04rp4TGTxf/wSYPruIE9/EI6ugezNyebIv3JkHMfJBx6GwawCzBIDAIAMl8vMMl6vXQNR1LGZI1hWviOgx8oVExAKgRMK5WUFYwaCTjy+n0O8fTz73qpXGkiq//yyQjcwFlyxKq+qjtDe4ECwvGr3SnUQ2hvUOateaSB0pnNl5feJRXltciQ6Sy3HERBK+4OC+DD435bNcjWIJB4Fnc7n7ufrzi5s75+n7n67Rf/halYKpQLRiPeVlYD475dAJUHWiudAYPb9B1xKOZLcl5ZjTc4pFiR1VlIcQucQcAQfLCPuN20+jJM20whkK4QliLTaBSAiRN+H0NMUfP3R0ip2RDEO54wTtwoCVWZg6OoE5cWtWG4SKIQwDoUJQPB4EdRuKnkGhhMtghSM438SyCC55ApnVA1dOE4EUqPBVYIrB/nlNTvi33ZUHss8HbqSBaG7LChje2mRzMVzNGtzpOIdiFRW3Pd1Ln4GzVzEleRIVQ1OXC8FpARxQtZ+wpbkkLSyIJqbDppU8w4tsZIcHAyMHYFoBZWIqAHCLU4RiBbCfClSDEDvlZ0jfwnCnYaXS3LniGalUUzSS0Jw0ZgdaSAv8SAc9JiO5HbiHUy8KAFcUd2i7B0E9DWQvbnUHGmOGM1AKy2jiS1O+wvROsA65DQ76AAAAABJRU5ErkJgggAA'));
    this.playerBaseSpecial = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAACQAAAAECAYAAADmrJ2uAAAAOklEQVQoU2NkQAKGhob/kfnnz59nROZTi43PHriF6IpgllPbUYTsATsIlyJqO4oYexgJKaKWo4i1BwCsKx2XCVZoUgAAAABJRU5ErkJgggAA'));
    this.playerBoostSpecial = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAACQAAAAECAYAAADmrJ2uAAAAS0lEQVQoU2NkQAKGhob/z59bAxYxNAphOH/+PCOyPLXY+OyBWwhTBHIICIAcRgtHEbIH7CBkRSghRGVHEWMPI3Lw4YoSaoQUsfYAALVdR5fmYNrmAAAAAElFTkSuQmCC'));
    this.playerBaseWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAH0lEQVQYV2NkwAEYyZdYvHjxf5Du2NhYsClwo4iWAADCcgwHip7LSgAAAABJRU5ErkJgggAA'));
    this.playerFiringWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAN0lEQVQYV32NyQ0AIAzDnEE7XQcFpVIQH3g1zSFrwRLIFyBafmJaJzzNmFf4WTwZnnf3wKtquBuM1BYBeezCIQAAAABJRU5ErkJgggAA'));
    this.playerFiringOrangeWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAN0lEQVQYV2P8NJPhP186AyOIZmBgYICxGUEcmCCIDZOEq4QJwmj8OnDaAdK+ePFisOWxsbFgUwAyYh2lCvTdPAAAAABJRU5ErkJgggAA'));
    this.playerFiringYellowWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAANklEQVQYV32NyQ0AQAgCoVCro1A3mODPfYkcGXajSdAXAKLpJ6Z1wm3G3PC7OBleSRp4VQ33Ab3LHv6S+lzvAAAAAElFTkSuQmCC'));
    this.playerFiringGreenWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAANklEQVQYV2Nk+M/wn4GRgRFMgwCUzQjmwATBHIgkQiVMEC6HVwdOOxgYGBYvXgy2PDY2FmwvAIPXFgGVdnQFAAAAAElFTkSuQmCC'));
    this.playerFiringCyanWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAANklEQVQYV2Nk+P//PwMjIyOYBgEomxHMgQmCORBJhEqYIEwOvw6cdjAwMCxevBhseWxsLNheAKvRHv7OxL34AAAAAElFTkSuQmCC'));
    this.playerFiringMagentaWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAANklEQVQYV32Nyw0AMAhCYVCnY1AbTLCn9iTyyWOjmyB9ASCafmJaJ9xmzBv+Fk+G55IGXlXDPbTOHv6d1ZiQAAAAAElFTkSuQmCC'));
    this.playerBaseEngine1 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABoAAAAHCAYAAAAWAl2LAAAAQ0lEQVQoU2NkgIHv3//D2TAGJycjhhg+ATxmIAwafhaBggTZV6QGG7YoQDIDMw5AlpFrCbJlaGaQFtkkpQxUxXSzCAD+TB4IwJjyDwAAAABJRU5ErkJgggAA'));
    this.playerBaseEngine2 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABoAAAAHCAYAAAAWAl2LAAAAQklEQVQoU2NkgIHv3//D2TAGJycjhhg+ATxmIAyim0UglyJbRqpvsIUMkhmYQQOyjFxLkC1DM4O0OCApwlAVDz+LAKzqGAh4HcFtAAAAAElFTkSuQmCC'));
    this.playerBrakeEngine = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABoAAAAHCAYAAAAWAl2LAAAAP0lEQVQoU2NkgIHv3//D2TAGJycjhhg+ATxmoBqErJBUS7A5GMkMTBeDLCPXEmTL0MwgLWhICkdUxaMWkR14AOVbEggz65+VAAAAAElFTkSuQmCC'));
    this.playerBoostEngine1 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABoAAAAHCAYAAAAWAl2LAAAASElEQVQoU2NkAIHv3/+DaWyAk5MRpxyyBAEzGPFaAjOIkGX4LIGaMRwtolscweIBWzgTihv0VILHDEgcwQxEVogsRshCIswAADTHNbwgviCpAAAAAElFTkSuQmCC'));
    this.playerBoostEngine2 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABoAAAAHCAYAAAAWAl2LAAAARklEQVQoU2NkAIHv3/+DaWyAk5MRpxyyBAEzGPFaAjOIkGX4LIGaMRwtolscweIBWzgTihv0VILHDNQUhayQVEuwORjJDADFrCnPinVJugAAAABJRU5ErkJgggAA'));
    this.wingmanBaseChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAA7klEQVRIS+2UzRFCIQyE4WhjdkF1dGFjHnWCLrPkgW6cN5zkSsjH5mdz2nDyBkb6Q0JVDper1voopYTehYINAAkRkAwBoJSSaq2NpYJCEAPgGOhUyLsPLf/9ltLl+kKpIEkJIAbAMdApEO4DVDAEar71Z6nEA1YQBTRA3IgeFs6Xywdg6ryyDpn93CdB07n5s9X3I94gC4Dd9eUTfOQQj8HIHwDIq4C47D0eihqEl0z4cSjEQAOEG0ce1W1klp1thu/x8SmErQIqeenYhWf36LEMCdWFgrkFgxLVIlQwq+TpknxMhfBq7IFEfvZr7BM9NbpavOSX+wAAAABJRU5ErkJgggAA'));
    this.wingmanHurtChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAA8UlEQVRIS+3UwQ3DIAwFUHPrZJ2iTEen6GS9pXKqH/0gI76riFNzhfCwjV1swVcWGPZHUllOp6u1ttVaU/+lNjuAEDKQjAB41GrP1nZLhVKIA/gcuhTxKAC8X2a3+5dSISkSIA7gc+gShOvgh/cIopnVZxhJD4wQBToh/ES5yEhRFAl3JV5dH9mBRDfv2xpF5+JHrd8/8R2JgGJWNrOj+WZzJNqPh1FGAA5VIAei/YhoR6L8z26urjt0QrhwOITHSHTwaB0XDxEeFYiSm46ncLSOGsuImpJ+H5fgFIk6IlSYozxelzpRVYRbYw2Sudmvez9eK75af3i54gAAAABJRU5ErkJgggAA'));
    this.wingmanDireChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABV0lEQVRIS+2Uu20DMQxAqS4pNEPKHOA6gCfIAm6tBTyEC+/gW0B1FsgEB6Q2cCk9g4qkU0BKPNCyzqAM46qwuhMpPv5EAwuIWYAB/5CmKjeXy3sfnXNN95qMEcAptIDUEAY458B7TywtqAmCABYEPRSS+0D+fz4Bnt8TSgtSZcIQBLBkkOr+TSPZB86ihAibWV+zCgkYrYUuBCoVy9MewAxpY4zWxq++n+3RBaQYUfIX18lZXEP8PdQhqDND6lFtxK8ywagwapachcHzl49ATceMzhtLJl0IpJN3yhEnSI5EfuMx/tPjy9lUV4nQTfblmBss0dtuRxFxffk7G0+vvEpJh7Iikz1nRJDt0cH3ycLrKmD9HyoIIgi/ZNk40cCLhpYRyDUjddLnFUSuCg5Avmy5hWt6BJWB34TcW7dZiHYPacEyS8oEL2o3qhbCZaPRWwTSEtm9tn+DUuJaEiukwAAAAABJRU5ErkJgggAA'));
    this.wingmanHealChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAA+UlEQVRIS+3VPQ7DIAwFYBg5VG+RldOx5hY5FGMroz7yQEax1ShTWUPyYfyTGB5Y8QEj/BHXLbuvq5Tyzjm73nNtFgAheCAzAiBvWyj73iwr5EIEwBLoVqTl4QvUI4X0qs2yQqZIgAiAJdAtCOdBPj4jiOYqP8tIZmCFWKABGUqUkowr0iLhrkTVzZF1RDv53NZIOidfa/25xBuiAinFUGtvvss5ouxHYcQl0O/IAAmg7EdEDeEmuzyxc4NAA8KJ6zOKxoj2fR4z/BwHVxEeFYiSm46nsPYcOTYjzps55xqlYIjEOiKsMEd5VpfzR2TBULnPIJYT/brnAxJuyVqN1hOzAAAAAElFTkSuQmCC'));
    this.wingmanBaseSpecial = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAACCAYAAACHSIaUAAAAJElEQVQYV2NkYGBgMDQ0/H/+/HlGEJsYAFPPCGLANBBjALJ6AKYODZVb+jGjAAAAAElFTkSuQmCC'));
    this.wingmanBoostSpecial = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAACCAYAAACHSIaUAAAAIUlEQVQYV2NkAIHv3/8zcHIygtnEAKh6RrBGGCDGACT1AO0NC/A48zfJAAAAAElFTkSuQmCC'));
    this.wingmanBaseWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGElEQVQYV2NkwAIYqSS4ePHi/7GxsWDjACdEBAb8GxNvAAAAAElFTkSuQmCC'));
    this.wingmanFiringWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAALUlEQVQYV2NkYGBg+M/A8J+RgYERRsMZaBIQlSAdIADSgV/lksWLGWJiY8EqAZt2FwKWF8N0AAAAAElFTkSuQmCC'));
    this.wingmanBaseEngine1 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAFCAYAAACaTbYsAAAALklEQVQoU2NkgIHv3//D2ZycjHA2HnmEooHTDHIeyHZsTkZ2OpI8pt8wPItbAABj0xgG4cai1AAAAABJRU5ErkJgggAA'));
    this.wingmanBaseEngine2 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAFCAYAAACaTbYsAAAAMElEQVQoU2NkgIHv3//D2ZycjHA2HnmEIoo0g2wAGYDNVmTbkeQxnYfhXtwCFGkGACt9EgZRjlWuAAAAAElFTkSuQmCC'));
    this.wingmanBrakeEngine = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAFCAYAAACaTbYsAAAAK0lEQVQoU2NkgIHv3//D2ZycjHA2HnlURSADsGlENgBJHtMGDCtxCwycZgCFCQwGGjrSqgAAAABJRU5ErkJgggAA'));
    this.wingmanBoostEngine1 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAFCAYAAACaTbYsAAAANUlEQVQoU2NkAIHv3/+DaWTAyckI5+KQhyigSDO6Aci2wqxHtgAqj91pJGuG2Y5NI7LtSPIAW7oeBob7+C0AAAAASUVORK5CYIIA'));
    this.wingmanBoostEngine2 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAFCAYAAACaTbYsAAAAMklEQVQoU2NkAIHv3/+DaWTAyckI5+KQhygYOM3otiM7GeZ2ZNdB5RnBToYpxsbGIw8A2Ycp8wZaCPYAAAAASUVORK5CYIIA'));
    this.bigEnemyBaseChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJESURBVGhD7ZgBboMwDEXLbjMu1jPtYt1xOhkwM8Y/tkOC2oonRaUp2P/bSQXcLt6Zx+PxpLF87UZNnq/l0+UMA5pMzpARDjiO35vvPajN5RrRgYlxHIflsDkydsZM0ci+Or/T5xlwrqgZaMTqBNGzG4zOETFjGrFMnNkNRub0zJjVpZMtE9lu6KS112stVpxdR5DjjAiKIUXIaqL4FiinFcNcWrICtUgDhP5eC4qxMZKpFkLH+HkO05D0yLPrSM+qEb3im0urFbITuiutWY147W6xHLJkNG06gtrO82ea4VyeJia8tFBAScZo5NxITia9R5AAr4ISPseLlWHagRkRpVsVfb3e4Pdhqy8Ty0LecaxGIhdm8Yy0gG9ZwNIig7PJI9yH/3s5eVwP1pXeI6/KkNkfeXT1ns3XFu+TqSN1JrRIq+VSuGUiEqMMa3f2iB4SEsZz9FlTbS8GzVljz8E9wkKQCZnUFuDHiBE0QklQomMCZkqxY/E7/WtRhbnKcvB8exwjWoAeFjQvr2PQvITmrcHXYTp15HyAEa8Cpd/lfORYQvPoNwL//ukdQXBF9BoukTmHB6484rM6UnoumEEVylfOpj7+eq+VeYP4qhSeRzxKldLrnUHzEr8DiM/71/L3SRSuqq4umq9Hap6M8D45Zqa0ZCyy529hrax97UgbM+egTRC7irR/9OWqt11O0gSxM0JYL8j6PNP7WCtEmyBMIxrb2D5Y5v0YCUQxlsMV6zxNyIhmFhwTUQIXwxd+cXGR4Xb7A0XmpwEgPmc8AAAAAElFTkSuQmCC'));
    this.bigEnemyHurtChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJYSURBVGhD7ZgBcoNACEWT3qYerL1TD2aP04qzWPzCArpr0oxvZieKK/BhN9HcLv4z4zj+0Cin3dgT5618upwhAMnEDAlhh+/DsDrvwd5YrhB0TAzDcC+HzZG+M2KqQlDE9zjOn2fAsaJiTCFaJ4ie3WAwRkSMKkQTcWY3GBnTE6NWlyZrIrLdwKB778dcND+bjliKM0mQD5mErKblX8OKqflQl5aswF6kAALP92L5WAnJVMsCfXxNZzQkPeJsOtKzakQv/+rSaoXsBHalNYsQr90tlkOWTE6rjlhtZ/uZYjiWlxMTXlqWQ0lGaGRuJCaT3iNWAl4FJTzH85Vh/sHJJFF7VMH7cYN/wM9bxpeGfOJYhERuzOIJaQE/sqhLa4pHCg+H/bz/+ZDHe6nlld4jz8o9sz+yYPWmQLDYjsP7ZO7IHhGYJJ4TMnFNRMSHB+de3SM4yuUZSoxt9Kkl6uH5IJs2yuUVh/YIJ4IJMDKolYDnI0pICAWxAh1NgKj5jvrv8q1FFeYqy8H2Mq0pVSGYAI4ybQXZ5X3FbNolZNcG31emqXTpyCNQhXgVqF2X9sixhOzWNaJ2/bU7YsEVwTVcLqtk5vCoVd7itTpSey8grApZ9iyWH8suWZ61Mv8gPivm+4hHrVK43ovZtEtqfj1e71vL2ydRuKpYXct+BJnzLIT3yRExtSWjkZ2PcK6c+9KRFmLOAkUQm4q0fvWdAswxWi8nKYLYCCG0P8h6vNNH0FYIiiBUIYgmTHOW+X+MErR8lMMFbR4SEoJQsGgSNSwfkcQvLi4y3G6/wBGlAYICre8AAAAASUVORK5CYII='));
    this.bigEnemyDireChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL7SURBVGhD7ZiBcYMwDEWh24RlMkZn6CgdI8uk41BLWFQWki2Bnbve5d05gDGyvmQbk+nNf+b5fK5Q8uUwzvTzkY9NXiFAEunTJYQMLsutuB7B2b6aQqRhYFmWOZ92h9uOiGkKuX0tzOAPHl8B9eUV454jxMhsELIPj5i2kMd2eGU2CN5nS0w1uut9WufHuhuMZkN2evZ5EgGAL5qdQ0bgYRCQLKAIIuIE2OBO8GhSvQerT82GOrRAwDy5+1PhAgB5fRbLRiEkEi0LaeN7nbFwRvRzyMjIqAGj7LdXrQvwTMis9GYX0kp3j+EQJeJTkREr7VT/SjHUV8snwj20LIOciNBWW9ga3ZYlX7UJzxHLgVYEOZ4Mz4/6y1qCjSNO1LYq8nk5wT/n0m9pS74AaWdhcdhxbELwZd61fK9TUbQ2VOgEHUqACLpXK5QEY2jNSSGUa3zOf8ODn2vgTuKeXMvbI9qslth+hefISHBrlLdH0S3SHJkfcWT0INh9oXmCGTknQjqppZw7ronw2KhDvjfmiCwccIzq4Hgm2i0bUKeVIxfnCDliieCd6g60bfhwCoFOrI6uOQCg8Xua3qmU1PotGbRqQYQpyrxQ/QatT1gJb3J1yfXRECIdkEUD6vlzRFmP0U/vjfSLbeDGdk62eaHnbAZlxAftp3ArEnxvSAwhrQjU7qftxj7WeRtxnobR8U8OvGTtJPb97hnBMZ8ifZy4JTg7OvzJQQSFUETkGN6giZsvM2UbHW4Lih15i3Fz5MIKdAYUUvvG2LAiJOrTKgRAZWzIOO0r7HutyD+IHnqsQDVg+EpAw8mhpUdq24bjNGGF4HW8nlPPACwg8LAmZtwc6QwuJPQdn4cwZxfSnideKKoyula9E/h6hAdh6Ob3Dvd5z9H1DywaLtLJaL0PEkFzfM8IVfTLzDikCGA/Ifp/+l6LvEQTARyEACSGM+abvo02QqQIQBUi0YUdjUE7r2Bw0LKRT3e0dhKXEMnmsM+JGnYw2o6/efMmwjT9AlYIQ9i3m8e0AAAAAElFTkSuQmCC'));
    this.bigEnemyHealChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACrUlEQVRoQ+2aa3KDMAyE8XHgYjlTLkaOQ8ckYoTQY2VMpmWaX80klvVpV7aJW4abvMpNOIYUyDzPSwWfpik1LluslnnghCj4N0Eyc0EgW4XGcZhfr7XAV6nSOlcIwgNXgApyFQRZsM45jeP6Fi2cC6JBXKkGB1nnScCYIBLiW2poqiDKqCAWxDfUsFSJYEwQkjUK4C2tfKVrKULGFQeQzGALYrdUC59ngXjje0VVQbgaLb0hJ+fA2VVPi6XF2IFoamRBZIzn5/DwGNZDAbycWk1vxTiASDVaQHgMCXI23gYo9rNLQQiCJueqoJuqZVNprw3EslXWDnzisyCZnHYgmq24lMiK0wvEg9DsBYMg3rYaXbNWVBRv5esCYiWgVdCyVmRXRA1Z2FURdCBPQNsMpTU9kGwsbT5+Mt5AvP7wjiHeZxFIa1xtg9VBSnn3zrK8d7HWVynlubx3wkcZSo94Mi9ahu8DkumPtDCkLA08q7CSAPVJQZY5FaAmyROT72mQZ1M0RlDBCqODyEpaFaVELIg6Luo3LwaYx3kQStSyDGqtSE2piJgPB2n1NgoSNV8Q5zoQy06RzSyg0yCkBOjVNQ9uE+Rvnnw0j1GIWJE/DyIl7uX1qBfkkg3uP7YitwexrOatakiDW4ojYz8/aGA7uwyYsRqSTC+Q6qTUMR5JDjmiWBZO7FvbWavGSp+3fhlI/UWm/4OVtRcExwx0QZPf859HWqPyQ2IUI2EfL9QBJN0nUaItPYLG/Hzv8MxOfXIKJnu+yvSZAiiv5KAfsaFCfRFEu1eE7kcgkOjk2rEnVueIu3736o3nltpnTpHvB1P1d7ko/7AQXk/z/omCZfYj68JHXtdp1dfqBIEc1u56D65URUvCE8eKgV458NhNIB2d0y3UP0i3UnYKdBtFfgDQ5+3eh4PB5wAAAABJRU5ErkJgggAA'));
    this.bigEnemyBaseSpecial = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADkSURBVGhD7dYLDsIwCAbgzut5Xs83w1JMQ4DS16L2/xIzsw1KGYsmAAAAAAAAAID7Pc/z+owqc8zKZ+R55OPPO/JxDdm917F2vS6ySGt0nHEI5wjQO2QllB2l++gcHzWcy7tu5eBYSck19o5YBbCyEK8oL0dQvQDSu8iNedZshONlnHW+ZngjHCATMa0gureMq30v1dbh60rsZr8jslNaN2fqWG/TJyJnlXkdc+b6w8oXic3+5on0oU7JLlpW3Svg368p2tHA3LfY/B1pMTD3LeY9kdaCJ28QoxU2ufMAAPBFUnoDCzSkhcwu4kUAAAAASUVORK5CYII='));
    this.bigEnemyBoostSpecial = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADlSURBVGhD7daLDsIgDAVQ8P//eY6Em2BDS3ktKvdEg260QGHRQERERERERET0uOu6X/c7fx1W5liVT8vzyu3Pi7ndQlYvxr3jDZGT1LbcOg7eHB7VCmkJZUVTv3QNbb78Abms+1oOxEq1XFPPiDYBKCdiTcrK4dWcQDI6yJN5tiwE8TJOu94yvRAEyERQS5j6lnGtz6XWOLhfiz3rd0RWqlaRlUbGO3NH5FkFq2LWuQYtnycW/mZHhqRKySpqdvWV+O9X462o59z3OPsZ6TFz7nss25HeCa9eII+W1+rKExHRFwnhDXGrts0QMCjRAAAAAElFTkSuQmCC'));
    this.bigEnemyBaseWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA1SURBVGhD7czBCQAgDAPA4P7zdR1F6Ab6ELmDEPJJ+EFVzZ2e15z8jm4AAAAAAAAAAIAnJQtE7Q4HzpK9GwAAAABJRU5ErkJggg=='));
    this.bigEnemyFiringWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABdSURBVGhD7c9BDoAgDARA9P/v4zsKKokajKYXOcz00FBIsySillKjyDnXOHv1vM3vvSnnbXfAfPSYqVQnzGV+7nVetfveu189hfkacohPNEOFAQAAAAAAAACAqJRW2JYy46C8Gi0AAAAASUVORK5CYII='));
    this.bigEnemyBaseEngine1 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABSSURBVGhD7dIxCoBADATAxP//OSKcYmFzRxqPmWZTLQQ2AAAAAAAAAACgSY6cVhU1zkfmXF9Hx+0Y+XvbPLI8rct7GquT6Oho8bXzWR0dm4g4AUNGEgEwBjnxAAAAAElFTkSuQmCC'));
    this.bigEnemyBaseEngine2 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABNSURBVGhD7dMxCsAwCAVQ7f3vbAmkpWuCQ1veW3T6IGoAAAAAAAAAAECTnHVZVdRsb5lreR0Zl2PWzzPI22z/yPC88d3b7sgYfrKRiBOHIwwLR7XcgAAAAABJRU5ErkJggg=='));
    this.bigEnemyBrakeEngine = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABFSURBVGhD7c8xDsAwCANA6P//TBWJVh26JGK8W8xkmQAAAAAAAAAAgCHZua0qqs9X5l7fRMfj+JHlO+R0wETHcnUCfyJuni4MBSxhTy0AAAAASUVORK5CYII='));
    this.bigEnemyBoostEngine1 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABXSURBVGhD7dMxDoAgDAXQ4v3vjDEB42AMCIPE95Z2+gltCQAAAAAAAAAAmCSV2i3nyKU9pdSXNyOj2kpd3qvX302yap3ojIyrf2/k8LU/MuzpRFqNZ0TsulYYAlXcQt0AAAAASUVORK5CYII='));
    this.bigEnemyBoostEngine2 = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABaSURBVGhD7dMxDoAgDAVQ8P53xpiAMmgU0kHje0s7/bQlJAAAAAAAAAAACJJrHVZKKrXd5TyWF5HRLLV+3tT2Z5dsnl40IqP37xfZvO2PTOkHuOrvRGQcUloBbekj9jRj8cMAAAAASUVORK5CYII='));
    this.enemyBaseChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAU9JREFUSA3dVctuwzAMc4p+ZnPYd+yw076jh/QzB6SgAxqsTDlJe5uBWC9KlK00LcWsZVlWPCaUuk7lAHwt6ykCMiNvtzkSfELiiC7sIsrdjkLCCN9IAPqabyH1PRN1lLSRaLn78ijzPE/q29OBR55bV+fMfNrd2Sbq0TAwNzQSgoCYozg2Za+LhSkBjvOK906skxdXwAHp+16Pj4qNdCdhgEVVkoBSY9CzhjsSgEdEiLuVEQCbvl0bUamfF+huHcHUPHTAtwYO6pn8WUvDZxits9WvVNuGpL8ytcnClnBVf6fOVf2jPDsTZDmCWi3ZdvHuyrQWCmRPxMEmFnVhdyeJHUUbSbpiPNqKffm0EEgJIHTaqjNGyRhPAX93EjixWFB1DpfSYWryaNPZsCNKJWNxxqLUU1i+EVEs5mxH0H4Tykig/mfQpzgXV59i/4f+BO74Z/Zva8DpAAAAAElFTkSuQmCC'));
    this.enemyHurtChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAU1JREFUSA3dlVFywyAMRN1Mj1nO0tyF3jP1kj5mIwS2278y40hIq13J4Mm2JavW+tCTpKahSzUC7+yXBFBW3WFzCPxFJBO60UW0hx2FghW+iwj0UUoo/d1WPC7aRZzuq9atlPLmsSNfeNVl6z0LzmLe3dUm2mg6sOzQEJQAmLM4mkpfF8RYgeN5xfcONrO3jCADErvvY5xdNDJMQiIjQgAbMbOGBxEVroQiMfuZgPLT2yWh/Ua0l9N82MyewTS4OuDWKIA/s5+P5y2c5RV3HvG/TCLA/gX2j5CC1s3Pz71nPdqKeibWpWdCJ680610kHtDZK3OQCGZPxGkPVrzaD5MIoAQr7oljYz7uwTXr0wDECiCfvfvksOSYQvFhEgW1IHSfS4HNMK149ROnoSvIMusYfJ8i1VsJQbKymUC/264I0P8ziDkuy3vMsf/D/wawWmFOvGwlPwAAAABJRU5ErkJggg=='));
    this.enemyDireChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAbRJREFUSA3dVTtOxDAUfEZLGa7BSnCAPcymoOYIFNBwBGqK7F3IAUCCa2xKkEwm0VgT5zlhoSOS5efnmTfv49WaOV/TNBHLuSq6TuIAvLF4kgCVwVtNjgJ/EfGEzphFvq9mlBGW8EkEoJt6n1F/d0QcFU0iGu65OVhd10F9azbw4HmfK+IB4Yu7frL90ixL2JkfJAzMG1oOfq+qRZwX60eVIHuKXV51g5n3nffursqlSpA9FsTuo61WzbYy3qwSL0Nkf90d7eFlzPMuLr+J0Fr4eKtSUTMR3ORCh9smEUqGthQYthW2K4ILCPHbP9U0JzuTQcuROYXQWq1k+NHwZSECbezsLV8UfDoTxcLm3BQ/zlxyA/DLQmr4eRvja3Uxlt6OwMeQHpowzcDb4uH1uI0dJ6BiuyCIKBh4L5YCfu6CQRhLP+LVN7H1GeMiJ+DMhVaQzBnwTB6xiIu7WSUE5kSe9dVguGt48oZdqyGROwCweeaAGYB+YrCzCmBmleREnBmEj2LbdQFzol8x5Bf3vBrNTAMxuN6rrVW4YktCGqhkewLpN6GKBOofF32K8+7Vp9j/YX8DGgCc0Wge/acAAAAASUVORK5CYII='));
    this.enemyHealChassis = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABNElEQVRIS72WURLDIAhE8Z7NWTo9i7mnHWzJbHBB7Uf9jMhjcaMWIaPW2vTzcRyFze+uGZIo4Hg8REpZBlzQ1lo9z6G4W6ILoKt+hOhSDwohrKKsdVhgCLmpINXM9iZbfynJKpkBbD7KsQUx10XOSyErKlbbyXJ1JTOIB1ztIXalkJUKMeYpRV7S/9XBqr5giymsSm9Bi1GADQVFcWgUjaEQX+UKJGtpCDFQd5IeMyLilbAYb/dRiR4lrX0aHgzckzAI8vB24Zk1Ad4gwbocsgMwmoFgbYcMtjOpq4p8nGuV3kkjJKkq3QOddOrN4vTs6sm8IkuA5sD2ONPgPxRDUBEC7DuDglQKYUfC4B5NjAoDc6Q34xSU/UDfuekdbznYawXvEovD10z2wtl/kSyo8SF/gbwBLEpggZTzQx8AAAAASUVORK5CYIIA'));
    this.enemyBaseSpecial = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABMAAAAICAYAAAAbQcSUAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAGFJREFUKBWtjVsOgCAMBIvhdp7X86HVtKwTCZrID+0+pmZra/bHOzjl5ChwK5f25gB6y63zBeRF5GvC3MCl9Dgwp3tmXXw0MtGHaTZADIbuKPVU72cwaSjK1FCZrwHgP2juKXxAc5e6i3EAAAAASUVORK5CYII='));
    this.enemyBoostSpecial = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAABMAAAAICAYAAAAbQcSUAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAF1JREFUKBWtjdsKwCAMQ1vZ//9yR4RoCBMn6EttLqdRFRUXHjgJjgIzo2t/+N5rWjoBoef5hzAYfomeT8/pPrIQP42RmJ9tliAPUgdKPdXnGftpiGXXrLJfCfC5ar7FXU3PegQQ8wAAAABJRU5ErkJggg=='));
    this.enemyBaseWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA0AAAACCAYAAACDvVapAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAABdJREFUCB1jWLx48X8GEgBIPRMJ6uFKAc3nBdM4I+s5AAAAAElFTkSuQmCC'));
    this.enemyFiringWeapon = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA0AAAACCAYAAACDvVapAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAACNJREFUCB1jWLx48X8GEAQBImiQeiawYpgGRgZGsEZcNFQxAIJKG8WoJD+LAAAAAElFTkSuQmCC'));
    this.enemyBaseEngine = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAsAAAADCAYAAABF//VLAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAACRJREFUCB1j/P+f4T8DFDAyMjDC2DAaWZ4JJkg0jawbmyaYPABEFQv7LTkNmAAAAABJRU5ErkJggg=='));
    this.enemyBoostEngine = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAAsAAAADCAYAAABF//VLAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAACZJREFUCB1j/P+f4T8DFDAyMjDC2DAaWZ4JJkgMDVaMzURkzTB5AL1wBgl6SSFdAAAAAElFTkSuQmCC'));
    this.healthPickup = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAnUlEQVQ4T7WTUQ6AIAxD5Z5wOrgnpjOdtRITTfRLiq9lY5bNnt77dI3r1lrRvVwoVGu98WOM1GgSMMEV5C40gUHCBMshbXOep3cNBgFrKj4iAgsYrDSmB6yp2q0wkHPTEBIMHmGv9z8YSVqj36k28XbsTzAgvWNP11rZrAjikPiA0MBBwpch8fQsQYZFUxPWEV2ZKIT3y2xrV9/8VTv+4olojdad8wAAAABJRU5ErkJgggAA'));
    this.energyPickup = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAlUlEQVQ4T6WT4RGAIAhGcYT20xGaCvZrBLtP7/PQ7Mryn8R7BFGQ4ahqHmO8p5SCf9YuHooxXngzazFKCkxwBo0WSiBo8BuQIggK7KuG6uqOqko8Uo3tdRysXmBW9XDOInB52DYV5kIwhQHiLMMEf8Fsf+m12Sun9ggjEYNYnjaX5NN3/r1hXsAW7tYS8W63feLKX3UCwOiNaChmHVsAAAAASUVORK5CYIIA'));
    this.pointsPickup = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAkElEQVQ4T62T3Q3AIAiEyyRdTKfTxToJDTRnTqxN/3xD/e4AUZawSika9xDnnIXPWsBQSmnga61tDyIOAwQk0hk4pHokBBETaDCDuo2Jy9oLOMyu5sigAyQEAbg7bK4M2qW4IMICU/gsdRO8Bb92jiDX/q+zOcWmtfquuo0hefXOnyeMBVBCbNp0tvnik1+1A8b+nGjDbTFLAAAAAElFTkSuQmCC'));
    this.weaponUpgradePickup = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABEklEQVQ4T52TKxLCQAyGs6J3QCBQnAGDRHY6g0B1xfYUcANO0RVbhWCmU4nAcgYUAgEnQJZJlmTCAjNAVLa7Xx5/UgOJhRD69BufrbVG38lBQ7acQb8e0LtsGZ/7JgjHQQhmECG0FNybWMy0v0JoduRjAIG/ATlwMwwR1lkxY3V0EGpP0XVGXRHCaASnPW7aLXRt96JbXuSwKOaiAcHl2Yo4tnKAj9h0EIaxolNoYmaEWVWEvffgnCO+HscW+J5bEdiVMTOD6COswRsAHBLVKTPCGLF2lWRNQW4jgwu5ODJRe2RLmqOrVm9LnfQGNEhq85L8NWe9YVr1T3PmGcuG6QAk1kMDXknukft+2m29Db/8VXftQb1oRcx+5QAAAABJRU5ErkJgggAA'));
    this.fullHealthPickup = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAApklEQVQ4T7WT0Q2EMAxD6Tr8ss51urIOv7cOyEEOrqlOOiT4oqHPblJTJntaa7vXuK61Fv2WC4U+S73x69ayRpGACY4gV6EIBBImWOZz+/69MK9BIGB1xSY2DFUIjGp0D1hddVohIOemIEoQ+Al7v+/BcNIe/U51iLdjP4IB6R27u/bKYYURQ+IBoYCDhLuQuHu2IGFR14Q1oiMRhfDeZVun+s9fdQB8x31o+Db6YQAAAABJRU5ErkJgggAA'));
    this.healthUpgradePickup = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABAklEQVQ4T5WTvQ0CMQyFHQl2oKBgkSvZ4lKwBUwAW1DktqCgYBEKCtgBKeg594xj0eDqkvjzz7MvSbBSSo13POeck3+zg4fyuJV6Wqnfct/cz1MxjkEUJggIFsFrasUM9SVluug3AhhMUFLLuJiLBzjIXGB9auBpXRrcZU0rYcNwv0kD/V09isIwhdljOog56iNacArhzIqggcLjI7dIAY6qE0Yr9zJ9Yaj6Tn2mXzBagRm8G1tmivNr0NTAq65lA7ZxOIHiQqiA9aXXGJmpvcmjPWBcUagIUlBdkrggFM9GNmfs5uw3jKpzJSGgz0iw2zAfAN+dBq5HatDtthfmn7/qAxRFpWhbJK5PAAAAAElFTkSuQmCC'));
    this.wingmenPickup = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAiElEQVQ4T62TXQrAIAyD7T3t6fSejgopXX+Gwnwz40tozai5M8ZYXsOdmcl+04uFeu+Bn3OqBpMNA8wg7wITMVA4A4morRWnEIMNV6kC4ngDpG/Yp1rwyyCFq21bXdL/hasleT0kV0vKdIVllpM3xsy6bZTkFn6V5DQ9NMxWtDIpu23f7+avegCk2XBo4J1QAwAAAABJRU5ErkJgggAA'));
    this.superWingmenPickup = decode(new ImageLoader$PNG('iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAj0lEQVQ4T62Tyw2AMAxD23W4sg6ZrqzDlXWKUslRyAe1Er3V6NlKamoxp7XWrYY7EVX9TS4aOnZy/Hk10WAyYIARZF1gwgYCR2DdSum3H4INBpylMohjDZA+YJuqwS+DEM62rXVO/xfOlmR1l5wtKdIF5llm3hgzy7ZRklX4VZLZdNcwXdHMJO22fr+Vv+oBUxZpaDiXPnMAAAAASUVORK5CYIIA'));
  }
  function ImageLoader$PNG(data) {
    Base64Encoding.call(this, 'data:image/png;base64,', data);
  }
  ImageLoader$PNG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PNG',
    interfaces: [Base64Encoding]
  };
  ImageLoader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageLoader',
    interfaces: []
  };
  function SpriteFactory(decodeBase64, onExpire, getMuzzleFlash) {
    this.onExpire_0 = onExpire;
    this.getMuzzleFlash_0 = getMuzzleFlash;
    this.imageLoader_0 = new ImageLoader(decodeBase64);
  }
  SpriteFactory.prototype.makeWingman_w5sr5q$ = function (wingman) {
    var chassis = this.makeStandardShipChassis_0(wingman, 0.0, 0.0, this.imageLoader_0.wingmanBaseChassis, this.imageLoader_0.wingmanHurtChassis, this.imageLoader_0.wingmanDireChassis, this.imageLoader_0.wingmanHealChassis);
    var special = this.makeStandardShipSpecial_0(wingman, 5.0, 15.0, this.imageLoader_0.wingmanBaseSpecial, this.imageLoader_0.wingmanBoostSpecial);
    var weapon = this.makeStandardWeapon_0(wingman, 10.0, 0.0, this.imageLoader_0.wingmanBaseWeapon, this.imageLoader_0.wingmanFiringWeapon);
    var engine = this.makeStandardEngine_0(wingman, 5.0, 20.0, this.imageLoader_0.wingmanBaseEngine1, this.imageLoader_0.wingmanBaseEngine2, this.imageLoader_0.wingmanBrakeEngine, this.imageLoader_0.wingmanBoostEngine1, this.imageLoader_0.wingmanBoostEngine2);
    return new Sprite(wingman, new CompositeDisplayable([chassis.first, special.first, weapon.first, engine.first]), this.onExpire_0, Color$Companion_getInstance().MAGENTA, 100, 80.0, new CompositeTickable([chassis.second, special.second, weapon.second, engine.second]));
  };
  SpriteFactory.prototype.makeEnemy_w5sr5q$ = function (enemy) {
    var chassis = this.makeStandardShipChassis_0(enemy, 0.0, 0.0, this.imageLoader_0.enemyBaseChassis, this.imageLoader_0.enemyHurtChassis, this.imageLoader_0.enemyDireChassis, this.imageLoader_0.enemyHealChassis);
    var special = this.makeStandardShipSpecial_0(enemy, 3.0, 13.0, this.imageLoader_0.enemyBaseSpecial, this.imageLoader_0.enemyBoostSpecial);
    var weapon = this.makeStandardWeapon_0(enemy, 6.0, 1.0, this.imageLoader_0.enemyBaseWeapon, this.imageLoader_0.enemyFiringWeapon);
    var engine = this.makeStandardEngine_0(enemy, 7.0, 22.0, this.imageLoader_0.enemyBaseEngine, this.imageLoader_0.enemyBoostEngine, this.imageLoader_0.enemyBaseEngine, this.imageLoader_0.enemyBoostEngine, this.imageLoader_0.enemyBoostEngine);
    return new Sprite(enemy, new CompositeDisplayable([chassis.first, special.first, weapon.first, engine.first]), this.onExpire_0, Color$Companion_getInstance().GREEN, 100, 80.0, new CompositeTickable([chassis.second, special.second, weapon.second, engine.second]));
  };
  SpriteFactory.prototype.makeBigEnemy_w5sr5q$ = function (enemy) {
    var chassis = this.makeStandardShipChassis_0(enemy, 0.0, 0.0, this.imageLoader_0.bigEnemyBaseChassis, this.imageLoader_0.bigEnemyHurtChassis, this.imageLoader_0.bigEnemyDireChassis, this.imageLoader_0.bigEnemyHealChassis);
    var special = this.makeStandardShipSpecial_0(enemy, 0.0, 0.0, this.imageLoader_0.bigEnemyBaseSpecial, this.imageLoader_0.bigEnemyBoostSpecial);
    var weapon = this.makeStandardWeapon_0(enemy, 0.0, 0.0, this.imageLoader_0.bigEnemyBaseWeapon, this.imageLoader_0.bigEnemyFiringWeapon);
    var engine = this.makeStandardEngine_0(enemy, 0.0, 0.0, this.imageLoader_0.bigEnemyBaseEngine1, this.imageLoader_0.bigEnemyBaseEngine2, this.imageLoader_0.bigEnemyBrakeEngine, this.imageLoader_0.bigEnemyBoostEngine1, this.imageLoader_0.bigEnemyBoostEngine2);
    return new Sprite(enemy, new CompositeDisplayable([chassis.first, special.first, weapon.first, engine.first]), this.onExpire_0, Color$Companion_getInstance().GREEN, 100, 80.0, new CompositeTickable([chassis.second, special.second, weapon.second, engine.second]));
  };
  SpriteFactory.prototype.makePlayer_w5sr5q$ = function (player) {
    var chassis = this.makePlayerChassis_0(player);
    var special = this.makePlayerSpecial_0(player);
    var weapon = this.makePlayerWeapon_0(player);
    var engine = this.makePlayerEngine_0(player);
    return new Sprite(player, new CompositeDisplayable([chassis.first, special.first, weapon.first, engine.first]), this.onExpire_0, Color$Companion_getInstance().MAGENTA, 140, 100.0, new CompositeTickable([chassis.second, special.second, weapon.second, engine.second]));
  };
  SpriteFactory.prototype.makePlayerEngine_0 = function (player) {
    var base1 = this.imageLoader_0.playerBaseEngine1;
    var base2 = this.imageLoader_0.playerBaseEngine2;
    var brake = this.imageLoader_0.playerBrakeEngine;
    var boost1 = this.imageLoader_0.playerBoostEngine1;
    var boost2 = this.imageLoader_0.playerBoostEngine2;
    return this.makeStandardEngine_0(player, 12.0, 35.0, base1, base2, brake, boost1, boost2);
  };
  SpriteFactory.prototype.makePlayerWeapon_0 = function (player) {
    var baseWeapon = this.imageLoader_0.playerBaseWeapon;
    var firingWeapon = this.imageLoader_0.playerFiringWeapon;
    return this.makeStandardWeapon_0(player, 22.0, 0.0, baseWeapon, firingWeapon);
  };
  SpriteFactory.prototype.makePlayerSpecial_0 = function (player) {
    var baseSpecial = this.imageLoader_0.playerBaseSpecial;
    var boostSpecial = this.imageLoader_0.playerBoostSpecial;
    return this.makeStandardShipSpecial_0(player, 7.0, 24.0, baseSpecial, boostSpecial);
  };
  SpriteFactory.prototype.makePlayerChassis_0 = function (player) {
    var baseChassis = this.imageLoader_0.playerBaseChassis;
    var hurtChassis = this.imageLoader_0.playerHurtChassis;
    var direChassis = this.imageLoader_0.playerDireChassis;
    var healChassis = this.imageLoader_0.playerHealChassis;
    return this.makeStandardShipChassis_0(player, 0.0, 0.0, baseChassis, hurtChassis, direChassis, healChassis);
  };
  function SpriteFactory$makeStandardEngine$lambda(closure$engine, closure$base1, closure$base2) {
    return function () {
      closure$engine.target = closure$engine.target === closure$base1 ? closure$base2 : closure$base1;
      return Unit;
    };
  }
  function SpriteFactory$makeStandardEngine$lambda_0(closure$brake, closure$engine) {
    return function () {
      closure$engine.target = closure$brake;
      return Unit;
    };
  }
  function SpriteFactory$makeStandardEngine$lambda_1(closure$engine, closure$boost1, closure$boost2) {
    return function () {
      closure$engine.target = closure$engine.target === closure$boost1 ? closure$boost2 : closure$boost1;
      return Unit;
    };
  }
  function SpriteFactory$makeStandardEngine$lambda_2(closure$boostTickable, closure$tickable, closure$brakeTickable, closure$baseTickable) {
    return function (it) {
      var dy = it.trajectory.dy;
      if (dy < 0) {
        closure$tickable.delegate = closure$boostTickable;
        closure$boostTickable.skipAhead();
      }
       else if (dy > 0)
        closure$tickable.delegate = closure$brakeTickable;
      else {
        closure$baseTickable.skipAhead();
        closure$tickable.delegate = closure$baseTickable;
      }
      return Unit;
    };
  }
  function SpriteFactory$makeStandardEngine$lambda_3(closure$boostTickable, closure$tickable, closure$brakeTickable, closure$baseTickable) {
    return function (it) {
      var dy = it.trajectory.dy;
      if (dy > 0) {
        closure$tickable.delegate = closure$boostTickable;
        closure$boostTickable.skipAhead();
      }
       else if (dy < 0)
        closure$tickable.delegate = closure$brakeTickable;
      else {
        closure$baseTickable.skipAhead();
        closure$tickable.delegate = closure$baseTickable;
      }
      return Unit;
    };
  }
  SpriteFactory.prototype.makeStandardEngine_0 = function (ship, x, y, base1, base2, brake, boost1, boost2) {
    var engine = new TranslatedDisplayable(x, y, base1);
    var baseTickable = new IntervalTickable(40, SpriteFactory$makeStandardEngine$lambda(engine, base1, base2));
    var brakeTickable = new SimpleTickable(SpriteFactory$makeStandardEngine$lambda_0(brake, engine));
    var boostTickable = new IntervalTickable(10, SpriteFactory$makeStandardEngine$lambda_1(engine, boost1, boost2));
    var tickable = new DelegateTickable(baseTickable);
    if (ship.orientation === Entity$Orientation$NORTH_getInstance()) {
      ship.subscribeTrajectory_zc6rbt$(SpriteFactory$makeStandardEngine$lambda_2(boostTickable, tickable, brakeTickable, baseTickable));
    }
     else if (ship.orientation === Entity$Orientation$SOUTH_getInstance()) {
      ship.subscribeTrajectory_zc6rbt$(SpriteFactory$makeStandardEngine$lambda_3(boostTickable, tickable, brakeTickable, baseTickable));
    }
    return new Pair(engine, tickable);
  };
  function SpriteFactory$makeStandardWeapon$lambda$lambda(closure$base, closure$weapon, closure$tickable) {
    return function () {
      closure$weapon.target = closure$base;
      closure$tickable.delegate = NullTickable$Companion_getInstance().instance;
      return Unit;
    };
  }
  function SpriteFactory$makeStandardWeapon$lambda(closure$firing, closure$weapon, closure$base, closure$tickable) {
    return function (it) {
      closure$weapon.target = closure$firing.v;
      closure$tickable.delegate = new CountdownTickable(3, SpriteFactory$makeStandardWeapon$lambda$lambda(closure$base, closure$weapon, closure$tickable));
      return Unit;
    };
  }
  function SpriteFactory$makeStandardWeapon$lambda_0(this$SpriteFactory, closure$firing) {
    return function (it) {
      closure$firing.v = this$SpriteFactory.getMuzzleFlash_0(it);
      return Unit;
    };
  }
  SpriteFactory.prototype.makeStandardWeapon_0 = function (ship, x, y, base, initialFiring) {
    var weapon = new TranslatedDisplayable(x, y, base);
    var tickable = new DelegateTickable();
    var firing = {v: initialFiring};
    ship.subscribeFire_zc6rbt$(SpriteFactory$makeStandardWeapon$lambda(firing, weapon, base, tickable));
    ship.subscribeWeaponChange_9eum6x$(SpriteFactory$makeStandardWeapon$lambda_0(this, firing));
    return new Pair(weapon, tickable);
  };
  function SpriteFactory$makeStandardShipSpecial$lambda(closure$boost, closure$base, closure$special) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = closure$special;
      if (it.wantsToBoost) {
        tmp$ = closure$boost;
      }
       else {
        tmp$ = closure$base;
      }
      tmp$_0.target = tmp$;
      return Unit;
    };
  }
  SpriteFactory.prototype.makeStandardShipSpecial_0 = function (ship, x, y, base, boost) {
    var special = new TranslatedDisplayable(x, y, base);
    ship.subscribeBoost_zc6rbt$(SpriteFactory$makeStandardShipSpecial$lambda(boost, base, special));
    return new Pair(special, NullTickable$Companion_getInstance().instance);
  };
  function SpriteFactory$makeStandardShipChassis$lambda$lambda(closure$it, closure$dire, closure$base, closure$chassis, closure$chassisAnimation) {
    return function () {
      closure$chassis.target = closure$it.health <= closure$it.maxHealth * 0.2 ? closure$dire : closure$base;
      closure$chassisAnimation.delegate = NullTickable$Companion_getInstance().instance;
      return Unit;
    };
  }
  function SpriteFactory$makeStandardShipChassis$lambda(closure$hurt, closure$chassis, closure$dire, closure$base, closure$chassisAnimation) {
    return function (it) {
      closure$chassis.target = closure$hurt;
      closure$chassisAnimation.delegate = new CountdownTickable(6, SpriteFactory$makeStandardShipChassis$lambda$lambda(it, closure$dire, closure$base, closure$chassis, closure$chassisAnimation));
      return Unit;
    };
  }
  function SpriteFactory$makeStandardShipChassis$lambda$lambda_0(closure$it, closure$dire, closure$base, closure$chassis, closure$chassisAnimation) {
    return function () {
      closure$chassis.target = closure$it.health <= closure$it.maxHealth * 0.2 ? closure$dire : closure$base;
      closure$chassisAnimation.delegate = NullTickable$Companion_getInstance().instance;
      return Unit;
    };
  }
  function SpriteFactory$makeStandardShipChassis$lambda_0(closure$heal, closure$chassis, closure$dire, closure$base, closure$chassisAnimation) {
    return function (it) {
      closure$chassis.target = closure$heal;
      closure$chassisAnimation.delegate = new CountdownTickable(6, SpriteFactory$makeStandardShipChassis$lambda$lambda_0(it, closure$dire, closure$base, closure$chassis, closure$chassisAnimation));
      return Unit;
    };
  }
  SpriteFactory.prototype.makeStandardShipChassis_0 = function (ship, x, y, base, hurt, dire, heal) {
    var chassis = new TranslatedDisplayable(x, y, base);
    var chassisAnimation = new DelegateTickable();
    ship.subscribeDamage_zc6rbt$(SpriteFactory$makeStandardShipChassis$lambda(hurt, chassis, dire, base, chassisAnimation));
    ship.subscribeHeal_zc6rbt$(SpriteFactory$makeStandardShipChassis$lambda_0(heal, chassis, dire, base, chassisAnimation));
    return new Pair(chassis, chassisAnimation);
  };
  SpriteFactory.prototype.makeOrangeMuzzleFlash = function () {
    return this.imageLoader_0.playerFiringOrangeWeapon;
  };
  SpriteFactory.prototype.makeYellowMuzzleFlash = function () {
    return this.imageLoader_0.playerFiringYellowWeapon;
  };
  SpriteFactory.prototype.makeGreenMuzzleFlash = function () {
    return this.imageLoader_0.playerFiringGreenWeapon;
  };
  SpriteFactory.prototype.makeCyanMuzzleFlash = function () {
    return this.imageLoader_0.playerFiringCyanWeapon;
  };
  SpriteFactory.prototype.makeMagentaMuzzleFlash = function () {
    return this.imageLoader_0.playerFiringMagentaWeapon;
  };
  SpriteFactory.prototype.makeWylagaLogo = function () {
    return this.imageLoader_0.wylagaLogo;
  };
  SpriteFactory.prototype.makeRedWingmanProjectile_qsqm6m$ = function (projectile) {
    return new Sprite(projectile, new SolidRect(projectile.width, projectile.height, Color$Companion_getInstance().RED), this.onExpire_0, Color$Companion_getInstance().RED, 50, 40.0);
  };
  SpriteFactory.prototype.makeRedPlayerProjectile_qsqm6m$ = function (projectile) {
    return new Sprite(projectile, this.imageLoader_0.redPlayerProjectile, this.onExpire_0, Color$Companion_getInstance().RED, 70, 50.0);
  };
  SpriteFactory.prototype.makeOrangePlayerProjectile_qsqm6m$ = function (projectile) {
    return new Sprite(projectile, this.imageLoader_0.orangePlayerProjectile, this.onExpire_0, Color$Companion_getInstance().ORANGE, 70, 50.0);
  };
  SpriteFactory.prototype.makeYellowPlayerProjectile_qsqm6m$ = function (projectile) {
    return new Sprite(projectile, this.imageLoader_0.yellowPlayerProjectile, this.onExpire_0, Color$Companion_getInstance().YELLOW, 70, 50.0);
  };
  SpriteFactory.prototype.makeGreenPlayerProjectile_qsqm6m$ = function (projectile) {
    return new Sprite(projectile, this.imageLoader_0.greenPlayerProjectile, this.onExpire_0, Color$Companion_getInstance().GREEN, 70, 50.0);
  };
  SpriteFactory.prototype.makeCyanPlayerProjectile_qsqm6m$ = function (projectile) {
    return new Sprite(projectile, this.imageLoader_0.cyanPlayerProjectile, this.onExpire_0, Color$Companion_getInstance().CYAN, 70, 50.0);
  };
  SpriteFactory.prototype.makeMagentaPlayerProjectile_qsqm6m$ = function (projectile) {
    return new Sprite(projectile, this.imageLoader_0.magentaPlayerProjectile, this.onExpire_0, Color$Companion_getInstance().MAGENTA, 70, 50.0);
  };
  SpriteFactory.prototype.makeGreenSquareProjectile_qsqm6m$ = function (projectile) {
    return new Sprite(projectile, this.imageLoader_0.greenSquareProjectile, this.onExpire_0, Color$Companion_getInstance().GREEN, 70, 50.0);
  };
  SpriteFactory.prototype.makeHealingPickup_qsqm6m$ = function (pickup) {
    return new Sprite(pickup, this.imageLoader_0.healthPickup, this.onExpire_0, Color$Companion_getInstance().CYAN, 50, 45.0);
  };
  SpriteFactory.prototype.makeFullHealingPickup_qsqm6m$ = function (pickup) {
    return new Sprite(pickup, this.imageLoader_0.fullHealthPickup, this.onExpire_0, Color$Companion_getInstance().CYAN, 100, 60.0);
  };
  SpriteFactory.prototype.makeEnergyPickup_qsqm6m$ = function (pickup) {
    return new Sprite(pickup, this.imageLoader_0.energyPickup, this.onExpire_0, Color$Companion_getInstance().YELLOW, 50, 45.0);
  };
  SpriteFactory.prototype.makePointsPickup_qsqm6m$ = function (pickup) {
    return new Sprite(pickup, this.imageLoader_0.pointsPickup, this.onExpire_0, Color$Companion_getInstance().YELLOW, 50, 45.0);
  };
  SpriteFactory.prototype.makeWeaponUpgradePickup_qsqm6m$ = function (pickup) {
    return new Sprite(pickup, this.imageLoader_0.weaponUpgradePickup, this.onExpire_0, Color$Companion_getInstance().MAGENTA, 100, 75.0);
  };
  SpriteFactory.prototype.makeHealthUpgradePickup_qsqm6m$ = function (pickup) {
    return new Sprite(pickup, this.imageLoader_0.healthUpgradePickup, this.onExpire_0, Color$Companion_getInstance().CYAN, 100, 75.0);
  };
  SpriteFactory.prototype.makeWingmenPickup_qsqm6m$ = function (pickup) {
    return new Sprite(pickup, this.imageLoader_0.wingmenPickup, this.onExpire_0, Color$Companion_getInstance().ORANGE, 100, 60.0);
  };
  SpriteFactory.prototype.makeSuperWingmenPickup_qsqm6m$ = function (pickup) {
    return new Sprite(pickup, this.imageLoader_0.superWingmenPickup, this.onExpire_0, Color$Companion_getInstance().ORANGE, 200, 100.0);
  };
  SpriteFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpriteFactory',
    interfaces: []
  };
  function Explosion(x, y, radius, particleCount, particleColor, onExpire) {
    this.onExpire_0 = onExpire;
    this.displayRoot_0 = new CompositeDisplayable([]);
    this.tickRoot_0 = new CompositeTickable([]);
    this.expiredParticles_0 = LinkedHashSet_init();
    for (var i = 1; i <= particleCount; i++) {
      var speed = 4 + Random.Default.nextDouble() * 12;
      var trajectory = new DirectionVector(Random.Default.nextDouble() * 720 - 360, Random.Default.nextDouble() * 720 - 360);
      var lifespan = numberToInt(radius / speed);
      var particle = new Explosion$Particle(x, y, trajectory.dx * speed, trajectory.dy * speed, lifespan, particleColor, Explosion_init$lambda(this));
      this.displayRoot_0.add_8p1vy5$(particle);
      this.tickRoot_0.add_1ih14v$(particle);
    }
  }
  Explosion.prototype.expireParticle_0 = function (particle) {
    return this.expiredParticles_0.add_11rb$(particle);
  };
  Explosion.prototype.display_9kr3df$ = function (p) {
    this.displayRoot_0.display_9kr3df$(p);
  };
  Explosion.prototype.tick = function () {
    this.tickRoot_0.tick();
    var tmp$;
    tmp$ = this.expiredParticles_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.displayRoot_0.remove_8p1vy5$(element);
      this.tickRoot_0.remove_1ih14v$(element);
    }
    this.expiredParticles_0.clear();
    if (this.displayRoot_0.size <= 0) {
      this.onExpire_0(this);
    }
  };
  function Explosion$Particle(x, y, dx, dy, lifetime, color, onExpire) {
    this.dx_0 = dx;
    this.dy_0 = dy;
    this.lifetime_0 = lifetime;
    this.onExpire_0 = onExpire;
    this.displayable_0 = new TranslatedDisplayable(x, y, new SolidRect(2.0, 2.0, color));
  }
  Explosion$Particle.prototype.display_9kr3df$ = function (p) {
    this.displayable_0.display_9kr3df$(p);
  };
  Explosion$Particle.prototype.tick = function () {
    this.displayable_0.x = this.displayable_0.x + this.dx_0;
    this.displayable_0.y = this.displayable_0.y + this.dy_0;
    this.lifetime_0 = this.lifetime_0 - 1 | 0;
    if (this.lifetime_0 <= 0) {
      this.onExpire_0(this);
    }
  };
  Explosion$Particle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Particle',
    interfaces: [Tickable, Displayable]
  };
  function Explosion_init$lambda(this$Explosion) {
    return function (particle) {
      this$Explosion.expireParticle_0(particle);
      return Unit;
    };
  }
  Explosion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Explosion',
    interfaces: [Tickable, Displayable]
  };
  function Sprite(entity, displayable, onExpire, explosionColor, explosionParticles, explosionRadius, tickable) {
    if (tickable === void 0)
      tickable = NullTickable$Companion_getInstance().instance;
    this.entity_0 = entity;
    this.onExpire_0 = onExpire;
    this.tickable_0 = tickable;
    this.sprite_0 = new TranslatedDisplayable(this.entity_0.x, this.entity_0.y, new RotatedDisplayable(displayable, this.entity_0.width / 2.0, this.entity_0.height / 2.0, this.entity_0.orientation.radians - Entity$Orientation$NORTH_getInstance().radians));
    this.explosion_0 = new Explosion(this.entity_0.width / 2.0, this.entity_0.height / 2.0, explosionRadius, explosionParticles, explosionColor, Sprite$explosion$lambda(this));
  }
  Sprite.prototype.display_9kr3df$ = function (p) {
    this.sprite_0.display_9kr3df$(p);
  };
  Sprite.prototype.tick = function () {
    this.sprite_0.x = this.entity_0.x;
    this.sprite_0.y = this.entity_0.y;
    this.tickable_0.tick();
  };
  Sprite.prototype.explode = function () {
    this.sprite_0.target = this.explosion_0;
    this.tickable_0 = this.explosion_0;
  };
  Sprite.prototype.expire = function () {
    this.onExpire_0(this);
  };
  function Sprite$explosion$lambda(this$Sprite) {
    return function (it) {
      this$Sprite.onExpire_0(this$Sprite);
      return Unit;
    };
  }
  Sprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sprite',
    interfaces: [Tickable, Displayable]
  };
  function View() {
    this.sprites_0 = new CompositeDisplayable([]);
    this.background_0 = new CompositeDisplayable([]);
    this.hud_0 = new CompositeDisplayable([]);
    this.root_0 = new CompositeDisplayable([this.background_0, this.sprites_0, this.hud_0]);
    this.tickables_0 = new CompositeTickable([]);
    this.entityToSpriteMap_0 = LinkedHashMap_init();
    this.sourceToSpriteMakerMap_0 = LinkedHashMap_init();
    this.weaponToMuzzleFlashMap_0 = LinkedHashMap_init();
    this.expiredSprites_0 = LinkedHashSet_init();
  }
  View.prototype.display_9kr3df$ = function (p) {
    this.root_0.display_9kr3df$(p);
  };
  View.prototype.tick = function () {
    this.tickables_0.tick();
    var $receiver = this.expiredSprites_0;
    var action = getCallableRef('removeSprite', function ($receiver, sprite) {
      return $receiver.removeSprite_0(sprite), Unit;
    }.bind(null, this));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
    this.expiredSprites_0.clear();
  };
  View.prototype.addSprite_0 = function (sprite) {
    this.sprites_0.add_8p1vy5$(sprite);
    this.tickables_0.add_1ih14v$(sprite);
  };
  View.prototype.removeSprite_0 = function (sprite) {
    this.sprites_0.remove_8p1vy5$(sprite);
    this.tickables_0.remove_1ih14v$(sprite);
  };
  View.prototype.addTickable_1ih14v$ = function (tickable) {
    return this.tickables_0.add_1ih14v$(tickable);
  };
  View.prototype.addToBackground_8p1vy5$ = function (displayable) {
    return this.background_0.add_8p1vy5$(displayable);
  };
  View.prototype.addToHud_8p1vy5$ = function (displayable) {
    return this.hud_0.add_8p1vy5$(displayable);
  };
  View.prototype.removeTickable_1ih14v$ = function (tickable) {
    return this.tickables_0.remove_1ih14v$(tickable);
  };
  View.prototype.removeFromBackground_8p1vy5$ = function (displayable) {
    return this.background_0.remove_8p1vy5$(displayable);
  };
  View.prototype.spawnChildSprite_q05hc3$ = function (entity, source) {
    this.addSprite_0(this.makeChildSprite_0(entity, source));
  };
  View.prototype.makeChildSprite_0 = function (entity, source) {
    var sprite = this.getSpriteMaker_0(source)(entity);
    this.entityToSpriteMap_0.put_xwzc9p$(entity, sprite);
    return sprite;
  };
  function View$getSpriteMaker$lambda$lambda(this$View) {
    return function (entity) {
      return this$View.makeDefaultSprite_0(entity);
    };
  }
  View.prototype.getSpriteMaker_0 = function (source) {
    var tmp$;
    var value = this.sourceToSpriteMakerMap_0.get_11rb$(source);
    if (value == null) {
      return View$getSpriteMaker$lambda$lambda(this);
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  View.prototype.spawnSprite_qsqm6m$ = function (entity) {
    this.addSprite_0(this.getSprite_0(entity));
  };
  View.prototype.despawnSprite_foztsf$ = function (sprite) {
    this.expiredSprites_0.add_11rb$(sprite);
  };
  View.prototype.despawnSprite_qsqm6m$ = function (entity) {
    this.despawnSprite_foztsf$(this.getSprite_0(entity));
  };
  View.prototype.explodeSprite_qsqm6m$ = function (entity) {
    this.explodeSprite_foztsf$(this.getSprite_0(entity));
  };
  View.prototype.explodeSprite_foztsf$ = function (sprite) {
    sprite.explode();
  };
  View.prototype.setMuzzleFlash_c5lyaz$ = function (weapon, displayable) {
    this.weaponToMuzzleFlashMap_0.put_xwzc9p$(weapon, displayable);
  };
  View.prototype.getMuzzleFlash_tcwema$ = function (weapon) {
    var tmp$;
    var value = this.weaponToMuzzleFlashMap_0.get_11rb$(weapon);
    if (value == null) {
      return NullDisplayable$Companion_getInstance().INSTANCE;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  View.prototype.setSpriteMaker_rymwiy$ = function (source, spriteMaker) {
    this.sourceToSpriteMakerMap_0.put_xwzc9p$(source, spriteMaker);
  };
  View.prototype.getSprite_0 = function (entity) {
    var $receiver = this.entityToSpriteMap_0;
    var tmp$;
    var value = $receiver.get_11rb$(entity);
    if (value == null) {
      var answer = this.makeDefaultSprite_0(entity);
      $receiver.put_xwzc9p$(entity, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  View.prototype.setSprite_tszr4f$ = function (entity, sprite) {
    this.entityToSpriteMap_0.put_xwzc9p$(entity, sprite);
  };
  View.prototype.unloadSprite_qsqm6m$ = function (entity) {
    return this.entityToSpriteMap_0.remove_11rb$(entity);
  };
  View.prototype.makeDefaultSprite_0 = function (entity) {
    return new Sprite(entity, new SolidRect(entity.width, entity.height, Color$Companion_getInstance().CYAN), getCallableRef('despawnSprite', function ($receiver, sprite) {
      return $receiver.despawnSprite_foztsf$(sprite), Unit;
    }.bind(null, this)), Color$Companion_getInstance().CYAN, 70, 75.0);
  };
  View.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: [Tickable, Displayable]
  };
  var WIDTH;
  var HEIGHT;
  function Wylaga(decodeBase64) {
    this.model_0 = new Model();
    this.view_0 = new View();
    this.controller_0 = null;
    this.stageIterator_0 = null;
    this.playerScore_0 = 0;
    var starfield = new Starfield(WIDTH, HEIGHT, 200);
    this.view_0.addToBackground_8p1vy5$(starfield);
    this.view_0.addTickable_1ih14v$(starfield);
    this.model_0.subscribePlayerShipSpawn_zc6rbt$(getCallableRef('spawnSprite', function ($receiver, entity) {
      return $receiver.spawnSprite_qsqm6m$(entity), Unit;
    }.bind(null, this.view_0)));
    this.model_0.subscribeFriendlyShipSpawn_zc6rbt$(getCallableRef('spawnSprite', function ($receiver, entity) {
      return $receiver.spawnSprite_qsqm6m$(entity), Unit;
    }.bind(null, this.view_0)));
    this.model_0.subscribeHostileShipSpawn_zc6rbt$(getCallableRef('spawnSprite', function ($receiver, entity) {
      return $receiver.spawnSprite_qsqm6m$(entity), Unit;
    }.bind(null, this.view_0)));
    this.model_0.subscribeFriendlyProjectileSpawn_w8v4bi$(getCallableRef('spawnChildSprite', function ($receiver, entity, source) {
      return $receiver.spawnChildSprite_q05hc3$(entity, source), Unit;
    }.bind(null, this.view_0)));
    this.model_0.subscribeHostileProjectileSpawn_w8v4bi$(getCallableRef('spawnChildSprite', function ($receiver, entity, source) {
      return $receiver.spawnChildSprite_q05hc3$(entity, source), Unit;
    }.bind(null, this.view_0)));
    this.model_0.subscribePickupSpawn_59syzd$(getCallableRef('spawnSprite', function ($receiver, entity) {
      return $receiver.spawnSprite_qsqm6m$(entity), Unit;
    }.bind(null, this.view_0)));
    this.model_0.subscribePlayerShipDespawn_zc6rbt$(getCallableRef('explodeSprite', function ($receiver, entity) {
      return $receiver.explodeSprite_qsqm6m$(entity), Unit;
    }.bind(null, this.view_0)));
    this.model_0.subscribeFriendlyShipDespawn_zc6rbt$(getCallableRef('explodeSprite', function ($receiver, entity) {
      return $receiver.explodeSprite_qsqm6m$(entity), Unit;
    }.bind(null, this.view_0)));
    this.model_0.subscribeFriendlyProjectileDespawn_qotlth$(Wylaga_init$lambda(this));
    this.model_0.subscribeHostileShipDespawn_zc6rbt$(getCallableRef('explodeSprite', function ($receiver, entity) {
      return $receiver.explodeSprite_qsqm6m$(entity), Unit;
    }.bind(null, this.view_0)));
    this.model_0.subscribeHostileProjectileDespawn_qotlth$(Wylaga_init$lambda_0(this));
    this.model_0.subscribePickupDespawn_t5w92d$(Wylaga_init$lambda_1(this));
    this.model_0.subscribePlayerShipDespawn_zc6rbt$(Wylaga_init$lambda_2(this));
    this.model_0.subscribeFriendlyShipDespawn_zc6rbt$(Wylaga_init$lambda_3(this));
    this.model_0.subscribeHostileShipDespawn_zc6rbt$(Wylaga_init$lambda_4(this));
    var spriteFactory = new SpriteFactory(decodeBase64, getCallableRef('despawnSprite', function ($receiver, sprite) {
      return $receiver.despawnSprite_foztsf$(sprite), Unit;
    }.bind(null, this.view_0)), getCallableRef('getMuzzleFlash', function ($receiver, weapon) {
      return $receiver.getMuzzleFlash_tcwema$(weapon);
    }.bind(null, this.view_0)));
    var scrollingLogo = new ScrollingLogo(800.0 - 141, 450.0 - 47, spriteFactory.makeWylagaLogo(), -231.0, Wylaga_init$lambda_5(this));
    this.view_0.addToBackground_8p1vy5$(scrollingLogo);
    this.view_0.addTickable_1ih14v$(scrollingLogo);
    var friendlyWeaponFactory = new WeaponFactory(Wylaga_init$lambda_6(this));
    var playerShipFactory = new ShipFactory(Wylaga_init$lambda_7(this), getCallableRef('spawnFriendlyProjectile', function ($receiver, projectile, source) {
      return $receiver.spawnFriendlyProjectile_g1jwul$(projectile, source), Unit;
    }.bind(null, this.model_0)), Entity$Orientation$NORTH_getInstance());
    var friendlyShipFactory = new ShipFactory(Wylaga_init$lambda_8(this), getCallableRef('spawnFriendlyProjectile', function ($receiver, projectile, source) {
      return $receiver.spawnFriendlyProjectile_g1jwul$(projectile, source), Unit;
    }.bind(null, this.model_0)), Entity$Orientation$NORTH_getInstance());
    var playerPilot = new ControlBufferPilot();
    var playerWeapon = friendlyWeaponFactory.makePlayerWeapon_14dthe$(10.0);
    var player = playerShipFactory.makeHardpointedPlayer_fa1mpq$(WIDTH / 2.0 - 25.0, 3.0 * HEIGHT / 4.0, playerWeapon, playerPilot);
    this.view_0.setSprite_tszr4f$(player, spriteFactory.makePlayer_w5sr5q$(player));
    this.view_0.setSpriteMaker_rymwiy$(playerWeapon, getCallableRef('makeRedPlayerProjectile', function ($receiver, projectile) {
      return $receiver.makeRedPlayerProjectile_qsqm6m$(projectile);
    }.bind(null, spriteFactory)));
    this.model_0.spawnPlayerShip_w5sr5q$(player);
    var orangePlayerWeapon = friendlyWeaponFactory.makePlayerWeapon_14dthe$(14.0);
    this.view_0.setMuzzleFlash_c5lyaz$(orangePlayerWeapon, spriteFactory.makeOrangeMuzzleFlash());
    this.view_0.setSpriteMaker_rymwiy$(orangePlayerWeapon, getCallableRef('makeOrangePlayerProjectile', function ($receiver, projectile) {
      return $receiver.makeOrangePlayerProjectile_qsqm6m$(projectile);
    }.bind(null, spriteFactory)));
    var yellowPlayerWeapon = friendlyWeaponFactory.makePlayerWeapon_14dthe$(18.0);
    this.view_0.setMuzzleFlash_c5lyaz$(yellowPlayerWeapon, spriteFactory.makeYellowMuzzleFlash());
    this.view_0.setSpriteMaker_rymwiy$(yellowPlayerWeapon, getCallableRef('makeYellowPlayerProjectile', function ($receiver, projectile) {
      return $receiver.makeYellowPlayerProjectile_qsqm6m$(projectile);
    }.bind(null, spriteFactory)));
    var greenPlayerWeapon = friendlyWeaponFactory.makePlayerWeapon_14dthe$(22.0);
    this.view_0.setMuzzleFlash_c5lyaz$(greenPlayerWeapon, spriteFactory.makeGreenMuzzleFlash());
    this.view_0.setSpriteMaker_rymwiy$(greenPlayerWeapon, getCallableRef('makeGreenPlayerProjectile', function ($receiver, projectile) {
      return $receiver.makeGreenPlayerProjectile_qsqm6m$(projectile);
    }.bind(null, spriteFactory)));
    var cyanPlayerWeapon = friendlyWeaponFactory.makePlayerWeapon_14dthe$(26.0);
    this.view_0.setMuzzleFlash_c5lyaz$(cyanPlayerWeapon, spriteFactory.makeCyanMuzzleFlash());
    this.view_0.setSpriteMaker_rymwiy$(cyanPlayerWeapon, getCallableRef('makeCyanPlayerProjectile', function ($receiver, projectile) {
      return $receiver.makeCyanPlayerProjectile_qsqm6m$(projectile);
    }.bind(null, spriteFactory)));
    var magentaPlayerWeapon = friendlyWeaponFactory.makePlayerWeapon_14dthe$(30.0);
    this.view_0.setMuzzleFlash_c5lyaz$(magentaPlayerWeapon, spriteFactory.makeMagentaMuzzleFlash());
    this.view_0.setSpriteMaker_rymwiy$(magentaPlayerWeapon, getCallableRef('makeMagentaPlayerProjectile', function ($receiver, projectile) {
      return $receiver.makeMagentaPlayerProjectile_qsqm6m$(projectile);
    }.bind(null, spriteFactory)));
    var playerWeaponUpgrades = [orangePlayerWeapon, yellowPlayerWeapon, greenPlayerWeapon, cyanPlayerWeapon, magentaPlayerWeapon];
    var wingmanMap = LinkedHashMap_init();
    var spawnWingmen = Wylaga_init$spawnWingmen(wingmanMap, friendlyWeaponFactory, this, spriteFactory, friendlyShipFactory);
    var spawnSuperWingmen = Wylaga_init$spawnSuperWingmen(wingmanMap, friendlyWeaponFactory, this, spriteFactory, friendlyShipFactory, spawnWingmen);
    var friendlyRandomPilot = new RandomPilot(0.01, 0.02, 0.01, void 0, 450.0, void 0, 850.0);
    var hostileRandomPilot = new RandomPilot(0.01, 0.02, 0.01);
    var handleFriendlyLeaderDespawn = Wylaga_init$handleFriendlyLeaderDespawn(wingmanMap, friendlyRandomPilot);
    var handleHostileLeaderDespawn = Wylaga_init$handleHostileLeaderDespawn(wingmanMap, hostileRandomPilot);
    this.model_0.subscribeFriendlyShipDespawn_zc6rbt$(getCallableRef('handleFriendlyLeaderDespawn', function (leader) {
      return handleFriendlyLeaderDespawn(leader), Unit;
    }));
    this.model_0.subscribePlayerShipDespawn_zc6rbt$(getCallableRef('handleFriendlyLeaderDespawn', function (leader) {
      return handleFriendlyLeaderDespawn(leader), Unit;
    }));
    this.model_0.subscribeHostileShipDespawn_zc6rbt$(getCallableRef('handleHostileLeaderDespawn', function (leader) {
      return handleHostileLeaderDespawn(leader), Unit;
    }));
    var pickupFactory = new PickupFactory(Wylaga_init$lambda_9(this), Wylaga_init$lambda_10(this), playerWeaponUpgrades, getCallableRef('spawnWingmen', function (ship) {
      return spawnWingmen(ship), Unit;
    }), getCallableRef('spawnSuperWingmen', function (ship) {
      return spawnSuperWingmen(ship), Unit;
    }));
    this.model_0.subscribeHostileShipDespawn_zc6rbt$(Wylaga_init$lambda_11(pickupFactory, this, spriteFactory));
    var controllerFactory = new ControllerFactory();
    this.controller_0 = controllerFactory.makeCombatController_1fixc3$(playerPilot);
    this.view_0.addToHud_8p1vy5$(new TranslatedDisplayable(40.0, 40.0, new StringDisplayable(Wylaga_init$lambda_12(player), 'arial', 16, Color$Companion_getInstance().WHITE)));
    this.view_0.addToHud_8p1vy5$(new TranslatedDisplayable(40.0, 60.0, new StringDisplayable(Wylaga_init$lambda_13(player), 'arial', 16, Color$Companion_getInstance().WHITE)));
    this.view_0.addToHud_8p1vy5$(new TranslatedDisplayable(40.0, 80.0, new StringDisplayable(Wylaga_init$lambda_14(this), 'arial', 16, Color$Companion_getInstance().WHITE)));
    var hostileWeaponFactory = new WeaponFactory(Wylaga_init$lambda_15(this));
    var hostileShipFactory = new ShipFactory(Wylaga_init$lambda_16(this), getCallableRef('spawnHostileProjectile', function ($receiver, projectile, source) {
      return $receiver.spawnHostileProjectile_g1jwul$(projectile, source), Unit;
    }.bind(null, this.model_0)), Entity$Orientation$SOUTH_getInstance());
    this.stageIterator_0 = new StageIterator(new StageFactory(hostileWeaponFactory, hostileShipFactory, spriteFactory, wingmanMap), getCallableRef('loadAndStartNextStage', function ($receiver) {
      return $receiver.loadAndStartNextStage_0(), Unit;
    }.bind(null, this)));
    this.loadAndStartNextStage_0();
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda(closure$shipsActive, closure$shipsEver) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$shipsActive.v;
      closure$shipsActive.v = tmp$ + 1 | 0;
      tmp$_0 = closure$shipsEver.v;
      closure$shipsEver.v = tmp$_0 + 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_0(closure$shipsActive, closure$shipsEver) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$shipsActive.v;
      closure$shipsActive.v = tmp$ + 1 | 0;
      tmp$_0 = closure$shipsEver.v;
      closure$shipsEver.v = tmp$_0 + 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_1(closure$shipsActive, closure$shipsEver) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$shipsActive.v;
      closure$shipsActive.v = tmp$ + 1 | 0;
      tmp$_0 = closure$shipsEver.v;
      closure$shipsEver.v = tmp$_0 + 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_2(closure$projectilesActive, closure$projectilesEver) {
    return function (f, f_0) {
      var tmp$, tmp$_0;
      tmp$ = closure$projectilesActive.v;
      closure$projectilesActive.v = tmp$ + 1 | 0;
      tmp$_0 = closure$projectilesEver.v;
      closure$projectilesEver.v = tmp$_0 + 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_3(closure$projectilesActive, closure$projectilesEver) {
    return function (f, f_0) {
      var tmp$, tmp$_0;
      tmp$ = closure$projectilesActive.v;
      closure$projectilesActive.v = tmp$ + 1 | 0;
      tmp$_0 = closure$projectilesEver.v;
      closure$projectilesEver.v = tmp$_0 + 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_4(closure$pickupsActive, closure$pickupsEver) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$pickupsActive.v;
      closure$pickupsActive.v = tmp$ + 1 | 0;
      tmp$_0 = closure$pickupsEver.v;
      closure$pickupsEver.v = tmp$_0 + 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_5(closure$shipsActive) {
    return function (it) {
      var tmp$;
      tmp$ = closure$shipsActive.v;
      closure$shipsActive.v = tmp$ - 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_6(closure$shipsActive) {
    return function (it) {
      var tmp$;
      tmp$ = closure$shipsActive.v;
      closure$shipsActive.v = tmp$ - 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_7(closure$shipsActive) {
    return function (it) {
      var tmp$;
      tmp$ = closure$shipsActive.v;
      closure$shipsActive.v = tmp$ - 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_8(closure$projectilesActive) {
    return function (f, f_0) {
      var tmp$;
      tmp$ = closure$projectilesActive.v;
      closure$projectilesActive.v = tmp$ - 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_9(closure$projectilesActive) {
    return function (f, f_0) {
      var tmp$;
      tmp$ = closure$projectilesActive.v;
      closure$projectilesActive.v = tmp$ - 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_10(closure$pickupsActive) {
    return function (f, f_0) {
      var tmp$;
      tmp$ = closure$pickupsActive.v;
      closure$pickupsActive.v = tmp$ - 1 | 0;
      return Unit;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_11(closure$shipsActive, closure$shipsEver) {
    return function () {
      return 'SHIPS: ' + closure$shipsActive.v + '/' + closure$shipsEver.v;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_12(closure$projectilesActive, closure$projectilesEver) {
    return function () {
      return 'PROJS: ' + closure$projectilesActive.v + '/' + closure$projectilesEver.v;
    };
  }
  function Wylaga$initializeLifecycleDiagnosticWidget$lambda_13(closure$pickupsActive, closure$pickupsEver) {
    return function () {
      return 'PKUPS: ' + closure$pickupsActive.v + '/' + closure$pickupsEver.v;
    };
  }
  Wylaga.prototype.initializeLifecycleDiagnosticWidget_0 = function () {
    var projectilesActive = {v: 0};
    var projectilesEver = {v: 0};
    var shipsActive = {v: 0};
    var shipsEver = {v: 0};
    var pickupsActive = {v: 0};
    var pickupsEver = {v: 0};
    this.model_0.subscribePlayerShipSpawn_zc6rbt$(Wylaga$initializeLifecycleDiagnosticWidget$lambda(shipsActive, shipsEver));
    this.model_0.subscribeFriendlyShipSpawn_zc6rbt$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_0(shipsActive, shipsEver));
    this.model_0.subscribeHostileShipSpawn_zc6rbt$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_1(shipsActive, shipsEver));
    this.model_0.subscribeFriendlyProjectileSpawn_w8v4bi$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_2(projectilesActive, projectilesEver));
    this.model_0.subscribeHostileProjectileSpawn_w8v4bi$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_3(projectilesActive, projectilesEver));
    this.model_0.subscribePickupSpawn_59syzd$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_4(pickupsActive, pickupsEver));
    this.model_0.subscribePlayerShipDespawn_zc6rbt$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_5(shipsActive));
    this.model_0.subscribeFriendlyShipDespawn_zc6rbt$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_6(shipsActive));
    this.model_0.subscribeHostileShipDespawn_zc6rbt$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_7(shipsActive));
    this.model_0.subscribeFriendlyProjectileDespawn_qotlth$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_8(projectilesActive));
    this.model_0.subscribeHostileProjectileDespawn_qotlth$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_9(projectilesActive));
    this.model_0.subscribePickupDespawn_t5w92d$(Wylaga$initializeLifecycleDiagnosticWidget$lambda_10(pickupsActive));
    this.view_0.addToHud_8p1vy5$(new TranslatedDisplayable(40.0, 800.0, new StringDisplayable(Wylaga$initializeLifecycleDiagnosticWidget$lambda_11(shipsActive, shipsEver), 'arial', 16, Color$Companion_getInstance().WHITE)));
    this.view_0.addToHud_8p1vy5$(new TranslatedDisplayable(40.0, 820.0, new StringDisplayable(Wylaga$initializeLifecycleDiagnosticWidget$lambda_12(projectilesActive, projectilesEver), 'arial', 16, Color$Companion_getInstance().WHITE)));
    this.view_0.addToHud_8p1vy5$(new TranslatedDisplayable(40.0, 840.0, new StringDisplayable(Wylaga$initializeLifecycleDiagnosticWidget$lambda_13(pickupsActive, pickupsEver), 'arial', 16, Color$Companion_getInstance().WHITE)));
  };
  Wylaga.prototype.loadAndStartNextStage_0 = function () {
    if (this.stageIterator_0.hasNext()) {
      var stage = this.stageIterator_0.next();
      stage.load_19dnld$(this.view_0);
      stage.start_e9rrev$(this.model_0);
    }
     else {
      println('Game complete!');
    }
  };
  Wylaga.prototype.press_lq8mc$ = function (action) {
    this.controller_0.press_lq8mc$(action);
  };
  Wylaga.prototype.release_lq8mc$ = function (action) {
    this.controller_0.release_lq8mc$(action);
  };
  Wylaga.prototype.display_9kr3df$ = function (p) {
    this.view_0.display_9kr3df$(p);
  };
  Wylaga.prototype.tick = function () {
    this.model_0.tick();
    this.view_0.tick();
  };
  function Wylaga_init$lambda(this$Wylaga) {
    return function (projectile, cause) {
      if (cause === Cause$IMPACT_getInstance())
        this$Wylaga.view_0.explodeSprite_qsqm6m$(projectile);
      else
        this$Wylaga.view_0.despawnSprite_qsqm6m$(projectile);
      return Unit;
    };
  }
  function Wylaga_init$lambda_0(this$Wylaga) {
    return function (projectile, cause) {
      if (cause === Cause$IMPACT_getInstance())
        this$Wylaga.view_0.explodeSprite_qsqm6m$(projectile);
      else
        this$Wylaga.view_0.despawnSprite_qsqm6m$(projectile);
      return Unit;
    };
  }
  function Wylaga_init$lambda_1(this$Wylaga) {
    return function (pickup, cause) {
      if (cause === Cause$IMPACT_getInstance())
        this$Wylaga.view_0.explodeSprite_qsqm6m$(pickup);
      else
        this$Wylaga.view_0.despawnSprite_qsqm6m$(pickup);
      return Unit;
    };
  }
  function Wylaga_init$lambda_2(this$Wylaga) {
    return function (it) {
      this$Wylaga.playerScore_0 = this$Wylaga.playerScore_0 - it.points | 0;
      return Unit;
    };
  }
  function Wylaga_init$lambda_3(this$Wylaga) {
    return function (it) {
      this$Wylaga.playerScore_0 = this$Wylaga.playerScore_0 - it.points | 0;
      return Unit;
    };
  }
  function Wylaga_init$lambda_4(this$Wylaga) {
    return function (it) {
      this$Wylaga.playerScore_0 = this$Wylaga.playerScore_0 + it.points | 0;
      return Unit;
    };
  }
  function Wylaga_init$lambda_5(this$Wylaga) {
    return function (it) {
      this$Wylaga.view_0.removeTickable_1ih14v$(it);
      this$Wylaga.view_0.removeFromBackground_8p1vy5$(it);
      return Unit;
    };
  }
  function Wylaga_init$lambda_6(this$Wylaga) {
    return function (projectile, cause) {
      this$Wylaga.model_0.despawnFriendlyProjectile_7ct0n2$(projectile, cause);
      return Unit;
    };
  }
  function Wylaga_init$lambda_7(this$Wylaga) {
    return function (it) {
      this$Wylaga.model_0.despawnPlayerShip_w5sr5q$(it);
      return Unit;
    };
  }
  function Wylaga_init$lambda_8(this$Wylaga) {
    return function (it) {
      this$Wylaga.model_0.despawnFriendlyShip_w5sr5q$(it);
      return Unit;
    };
  }
  function Wylaga_init$spawnWingmen(closure$wingmanMap, closure$friendlyWeaponFactory, this$Wylaga, closure$spriteFactory, closure$friendlyShipFactory) {
    return function (ship) {
      var prev = closure$wingmanMap.get_11rb$(ship);
      if (prev != null) {
        prev.first.heal_14dthe$(prev.first.maxHealth);
        prev.second.heal_14dthe$(prev.second.maxHealth);
      }
       else {
        var leftWeapon = closure$friendlyWeaponFactory.makeWingmanWeapon_14dthe$(8.0);
        this$Wylaga.view_0.setSpriteMaker_rymwiy$(leftWeapon, getCallableRef('makeRedWingmanProjectile', function ($receiver, projectile) {
          return $receiver.makeRedWingmanProjectile_qsqm6m$(projectile);
        }.bind(null, closure$spriteFactory)));
        var left = closure$friendlyShipFactory.makeWingman_fa1mpq$(ship.x - 25, ship.y + 50, leftWeapon, new MirrorPilot(ship, 5));
        this$Wylaga.view_0.setSprite_tszr4f$(left, closure$spriteFactory.makeWingman_w5sr5q$(left));
        var rightWeapon = closure$friendlyWeaponFactory.makeWingmanWeapon_14dthe$(8.0);
        this$Wylaga.view_0.setSpriteMaker_rymwiy$(rightWeapon, getCallableRef('makeRedWingmanProjectile', function ($receiver, projectile) {
          return $receiver.makeRedWingmanProjectile_qsqm6m$(projectile);
        }.bind(null, closure$spriteFactory)));
        var right = closure$friendlyShipFactory.makeWingman_fa1mpq$(ship.x + 50, ship.y + 50, rightWeapon, new MirrorPilot(ship, 5));
        this$Wylaga.view_0.setSprite_tszr4f$(right, closure$spriteFactory.makeWingman_w5sr5q$(right));
        var $receiver = closure$wingmanMap;
        var value = new Pair(left, right);
        $receiver.put_xwzc9p$(ship, value);
        this$Wylaga.model_0.spawnFriendlyShip_w5sr5q$(left);
        this$Wylaga.model_0.spawnFriendlyShip_w5sr5q$(right);
      }
    };
  }
  function Wylaga_init$spawnSuperWingmen(closure$wingmanMap, closure$friendlyWeaponFactory, this$Wylaga, closure$spriteFactory, closure$friendlyShipFactory, closure$spawnWingmen) {
    return function (ship) {
      var prev = closure$wingmanMap.get_11rb$(ship);
      if (prev != null) {
        prev.first.damage_14dthe$(prev.first.maxHealth);
        prev.second.damage_14dthe$(prev.second.maxHealth);
      }
      var leftWeapon = closure$friendlyWeaponFactory.makePlayerWeapon_14dthe$(10.0);
      this$Wylaga.view_0.setSpriteMaker_rymwiy$(leftWeapon, getCallableRef('makeRedPlayerProjectile', function ($receiver, projectile) {
        return $receiver.makeRedPlayerProjectile_qsqm6m$(projectile);
      }.bind(null, closure$spriteFactory)));
      var left = closure$friendlyShipFactory.makeHardpointedPlayer_fa1mpq$(ship.x - 60, ship.y + 50, leftWeapon, new MirrorPilot(ship, 5));
      this$Wylaga.view_0.setSprite_tszr4f$(left, closure$spriteFactory.makePlayer_w5sr5q$(left));
      var rightWeapon = closure$friendlyWeaponFactory.makePlayerWeapon_14dthe$(10.0);
      this$Wylaga.view_0.setSpriteMaker_rymwiy$(rightWeapon, getCallableRef('makeRedPlayerProjectile', function ($receiver, projectile) {
        return $receiver.makeRedPlayerProjectile_qsqm6m$(projectile);
      }.bind(null, closure$spriteFactory)));
      var right = closure$friendlyShipFactory.makeHardpointedPlayer_fa1mpq$(ship.x + 60, ship.y + 50, rightWeapon, new MirrorPilot(ship, 5));
      this$Wylaga.view_0.setSprite_tszr4f$(right, closure$spriteFactory.makePlayer_w5sr5q$(right));
      var $receiver = closure$wingmanMap;
      var value = new Pair(left, right);
      $receiver.put_xwzc9p$(ship, value);
      this$Wylaga.model_0.spawnFriendlyShip_w5sr5q$(left);
      this$Wylaga.model_0.spawnFriendlyShip_w5sr5q$(right);
      closure$spawnWingmen(left);
      closure$spawnWingmen(right);
    };
  }
  function Wylaga_init$handleFriendlyLeaderDespawn(closure$wingmanMap, closure$friendlyRandomPilot) {
    return function (leader) {
      var wingmen = closure$wingmanMap.remove_11rb$(leader);
      if (wingmen != null) {
        wingmen.first.activePilot = closure$friendlyRandomPilot;
        wingmen.second.activePilot = closure$friendlyRandomPilot;
      }
    };
  }
  function Wylaga_init$handleHostileLeaderDespawn(closure$wingmanMap, closure$hostileRandomPilot) {
    return function (leader) {
      var wingmen = closure$wingmanMap.remove_11rb$(leader);
      if (wingmen != null) {
        wingmen.first.activePilot = closure$hostileRandomPilot;
        wingmen.second.activePilot = closure$hostileRandomPilot;
      }
    };
  }
  function Wylaga_init$lambda_9(this$Wylaga) {
    return function (pickup, cause) {
      this$Wylaga.model_0.despawnPickup_54wmhk$(pickup, cause);
      return Unit;
    };
  }
  function Wylaga_init$lambda_10(this$Wylaga) {
    return function (it) {
      this$Wylaga.playerScore_0 = this$Wylaga.playerScore_0 + it | 0;
      return Unit;
    };
  }
  function Wylaga_init$lambda_11(closure$pickupFactory, this$Wylaga, closure$spriteFactory) {
    return function (it) {
      if (Random.Default.nextDouble() <= 1) {
        var roll = Random.Default.nextDouble();
        var x = it.x + it.width / 2;
        var y = it.y + it.height / 2;
        if (roll <= 0.1) {
          var pickup = closure$pickupFactory.makeHealing_lu1900$(x, y);
          this$Wylaga.view_0.setSprite_tszr4f$(pickup, closure$spriteFactory.makeHealingPickup_qsqm6m$(pickup));
          this$Wylaga.model_0.spawnPickup_91x5fi$(pickup);
        }
         else if (roll <= 0.2) {
          var pickup_0 = closure$pickupFactory.makeEnergy_lu1900$(x, y);
          this$Wylaga.view_0.setSprite_tszr4f$(pickup_0, closure$spriteFactory.makeEnergyPickup_qsqm6m$(pickup_0));
          this$Wylaga.model_0.spawnPickup_91x5fi$(pickup_0);
        }
         else if (roll <= 0.25) {
          var pickup_1 = closure$pickupFactory.makeFullHealing_lu1900$(x, y);
          this$Wylaga.view_0.setSprite_tszr4f$(pickup_1, closure$spriteFactory.makeFullHealingPickup_qsqm6m$(pickup_1));
          this$Wylaga.model_0.spawnPickup_91x5fi$(pickup_1);
        }
         else if (roll <= 0.3) {
          var pickup_2 = closure$pickupFactory.makeHealthUpgrade_lu1900$(x, y);
          this$Wylaga.view_0.setSprite_tszr4f$(pickup_2, closure$spriteFactory.makeHealthUpgradePickup_qsqm6m$(pickup_2));
          this$Wylaga.model_0.spawnPickup_91x5fi$(pickup_2);
        }
         else if (roll <= 0.6) {
          var pickup_3 = closure$pickupFactory.makeSuperWingmen_lu1900$(x, y);
          this$Wylaga.view_0.setSprite_tszr4f$(pickup_3, closure$spriteFactory.makeSuperWingmenPickup_qsqm6m$(pickup_3));
          this$Wylaga.model_0.spawnPickup_91x5fi$(pickup_3);
        }
         else if (roll <= 0.7) {
          var pickup_4 = closure$pickupFactory.makeWingmen_lu1900$(x, y);
          this$Wylaga.view_0.setSprite_tszr4f$(pickup_4, closure$spriteFactory.makeWingmenPickup_qsqm6m$(pickup_4));
          this$Wylaga.model_0.spawnPickup_91x5fi$(pickup_4);
        }
         else if (roll <= 0.8) {
          var pickup_5 = closure$pickupFactory.makeWeaponUpgrade_lu1900$(x, y);
          this$Wylaga.view_0.setSprite_tszr4f$(pickup_5, closure$spriteFactory.makeWeaponUpgradePickup_qsqm6m$(pickup_5));
          this$Wylaga.model_0.spawnPickup_91x5fi$(pickup_5);
        }
         else {
          var pickup_6 = closure$pickupFactory.makePoints_lu1900$(x, y);
          this$Wylaga.view_0.setSprite_tszr4f$(pickup_6, closure$spriteFactory.makePointsPickup_qsqm6m$(pickup_6));
          this$Wylaga.model_0.spawnPickup_91x5fi$(pickup_6);
        }
      }
      return Unit;
    };
  }
  function Wylaga_init$lambda_12(closure$player) {
    return function () {
      return 'SHIELD: ' + toString(numberToInt(closure$player.health)) + '/' + toString(numberToInt(closure$player.maxHealth));
    };
  }
  function Wylaga_init$lambda_13(closure$player) {
    return function () {
      return 'ENERGY: ' + toString(numberToInt(closure$player.energy)) + '/' + toString(numberToInt(closure$player.maxEnergy));
    };
  }
  function Wylaga_init$lambda_14(this$Wylaga) {
    return function () {
      return 'POINTS: ' + this$Wylaga.playerScore_0;
    };
  }
  function Wylaga_init$lambda_15(this$Wylaga) {
    return function (projectile, cause) {
      this$Wylaga.model_0.despawnHostileProjectile_7ct0n2$(projectile, cause);
      return Unit;
    };
  }
  function Wylaga_init$lambda_16(this$Wylaga) {
    return function (it) {
      this$Wylaga.model_0.despawnHostileShip_w5sr5q$(it);
      return Unit;
    };
  }
  Wylaga.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wylaga',
    interfaces: [Tickable, Displayable]
  };
  function Sample() {
  }
  Sample.prototype.checkMe = function () {
    return 12;
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }
    return Platform_instance;
  }
  var package$sample = _.sample || (_.sample = {});
  package$sample.hello = hello;
  Object.defineProperty(Action, 'PRIMARY', {
    get: Action$PRIMARY_getInstance
  });
  Object.defineProperty(Action, 'SECONDARY', {
    get: Action$SECONDARY_getInstance
  });
  Object.defineProperty(Action, 'UP', {
    get: Action$UP_getInstance
  });
  Object.defineProperty(Action, 'DOWN', {
    get: Action$DOWN_getInstance
  });
  Object.defineProperty(Action, 'LEFT', {
    get: Action$LEFT_getInstance
  });
  Object.defineProperty(Action, 'RIGHT', {
    get: Action$RIGHT_getInstance
  });
  Object.defineProperty(Action, 'BACK', {
    get: Action$BACK_getInstance
  });
  var package$wylaga = _.wylaga || (_.wylaga = {});
  var package$external = package$wylaga.external || (package$wylaga.external = {});
  package$external.Action = Action;
  var package$control = package$wylaga.control || (package$wylaga.control = {});
  package$control.Controller = Controller;
  package$control.ControllerFactory = ControllerFactory;
  package$external.DpadParser = DpadParser;
  package$external.KeyboardAdapter = KeyboardAdapter;
  Object.defineProperty(Entity$Orientation, 'NORTH', {
    get: Entity$Orientation$NORTH_getInstance
  });
  Object.defineProperty(Entity$Orientation, 'SOUTH', {
    get: Entity$Orientation$SOUTH_getInstance
  });
  Entity.Orientation = Entity$Orientation;
  var package$model = package$wylaga.model || (package$wylaga.model = {});
  var package$entities = package$model.entities || (package$model.entities = {});
  package$entities.Entity = Entity;
  var package$pickups = package$entities.pickups || (package$entities.pickups = {});
  package$pickups.Pickup = Pickup;
  package$pickups.PickupFactory = PickupFactory;
  var package$pilots = package$entities.pilots || (package$entities.pilots = {});
  package$pilots.ControlBufferPilot = ControlBufferPilot;
  package$pilots.MirrorPilot = MirrorPilot;
  package$pilots.NullPilot = NullPilot;
  package$pilots.Pilot = Pilot;
  package$pilots.RallyPilot = RallyPilot;
  package$pilots.RandomPilot = RandomPilot;
  var package$projectiles = package$entities.projectiles || (package$entities.projectiles = {});
  package$projectiles.Projectile = Projectile;
  Ship.Hardpoint = Ship$Hardpoint;
  var package$ships = package$entities.ships || (package$entities.ships = {});
  package$ships.Ship = Ship;
  package$ships.ShipFactory = ShipFactory;
  Object.defineProperty(NullWeapon, 'Companion', {
    get: NullWeapon$Companion_getInstance
  });
  var package$weapons = package$entities.weapons || (package$entities.weapons = {});
  package$weapons.NullWeapon = NullWeapon;
  package$weapons.SimpleWeapon = SimpleWeapon;
  package$weapons.Weapon = Weapon;
  package$weapons.WeaponFactory = WeaponFactory;
  package$model.Model = Model;
  var package$systems = package$model.systems || (package$model.systems = {});
  var package$boosting = package$systems.boosting || (package$systems.boosting = {});
  package$boosting.Boostable = Boostable;
  package$boosting.BoostingEngine = BoostingEngine;
  var package$collision = package$systems.collision || (package$systems.collision = {});
  package$collision.Collidable = Collidable;
  package$collision.CollisionEngine = CollisionEngine;
  var package$damage = package$systems.damage || (package$systems.damage = {});
  package$damage.Damagable = Damagable;
  package$systems.Engine = Engine;
  Object.defineProperty(Cause, 'OUT_OF_BOUNDS', {
    get: Cause$OUT_OF_BOUNDS_getInstance
  });
  Object.defineProperty(Cause, 'IMPACT', {
    get: Cause$IMPACT_getInstance
  });
  var package$expiration = package$systems.expiration || (package$systems.expiration = {});
  package$expiration.Cause = Cause;
  package$expiration.ExpirationEngine = ExpirationEngine;
  var package$firing = package$systems.firing || (package$systems.firing = {});
  package$firing.Fireable = Fireable;
  package$firing.FiringEngine = FiringEngine;
  var package$movement = package$systems.movement || (package$systems.movement = {});
  package$movement.Movable = Movable;
  package$movement.MovementEngine = MovementEngine;
  var package$piloting = package$systems.piloting || (package$systems.piloting = {});
  package$piloting.Pilotable = Pilotable;
  package$piloting.PilotingEngine = PilotingEngine;
  var package$stages = package$wylaga.stages || (package$wylaga.stages = {});
  package$stages.SimpleStage = SimpleStage;
  package$stages.Stage = Stage;
  package$stages.StageFactory = StageFactory;
  package$stages.StageIterator = StageIterator;
  Object.defineProperty(DirectionVector, 'Companion', {
    get: DirectionVector$Companion_getInstance
  });
  var package$util = package$wylaga.util || (package$wylaga.util = {});
  package$util.DirectionVector = DirectionVector;
  var package$view = package$wylaga.view || (package$wylaga.view = {});
  var package$backgrounds = package$view.backgrounds || (package$view.backgrounds = {});
  package$backgrounds.ScrollingLogo = ScrollingLogo;
  package$backgrounds.Starfield = Starfield;
  Object.defineProperty(Color, 'Companion', {
    get: Color$Companion_getInstance
  });
  var package$display = package$view.display || (package$view.display = {});
  package$display.Color = Color;
  var package$displayables = package$display.displayables || (package$display.displayables = {});
  package$displayables.AbstractDisplayable = AbstractDisplayable;
  var package$composites = package$displayables.composites || (package$displayables.composites = {});
  package$composites.CompositeDisplayable = CompositeDisplayable;
  Object.defineProperty(RotatedDisplayable, 'Companion', {
    get: RotatedDisplayable$Companion_getInstance
  });
  var package$decorators = package$displayables.decorators || (package$displayables.decorators = {});
  package$decorators.RotatedDisplayable = RotatedDisplayable;
  package$decorators.TranslatedDisplayable = TranslatedDisplayable;
  package$displayables.Displayable = Displayable;
  Object.defineProperty(NullDisplayable, 'Companion', {
    get: NullDisplayable$Companion_getInstance
  });
  var package$primitives = package$displayables.primitives || (package$displayables.primitives = {});
  package$primitives.NullDisplayable = NullDisplayable;
  package$primitives.SolidRect = SolidRect;
  package$primitives.StringDisplayable = StringDisplayable;
  var package$image = package$display.image || (package$display.image = {});
  package$image.Base64Encoding = Base64Encoding;
  package$display.Painter = Painter;
  var package$tickables = package$display.tickables || (package$display.tickables = {});
  var package$composites_0 = package$tickables.composites || (package$tickables.composites = {});
  package$composites_0.CompositeTickable = CompositeTickable;
  package$tickables.DelegateTickable = DelegateTickable;
  package$tickables.CountdownTickable = CountdownTickable;
  var package$primitives_0 = package$tickables.primitives || (package$tickables.primitives = {});
  package$primitives_0.IntervalTickable = IntervalTickable;
  Object.defineProperty(NullTickable, 'Companion', {
    get: NullTickable$Companion_getInstance
  });
  package$tickables.NullTickable = NullTickable;
  package$tickables.SimpleTickable = SimpleTickable;
  package$tickables.Tickable = Tickable;
  package$view.ImageLoader = ImageLoader;
  package$view.SpriteFactory = SpriteFactory;
  var package$sprites = package$view.sprites || (package$view.sprites = {});
  package$sprites.Explosion = Explosion;
  package$sprites.Sprite = Sprite;
  package$view.View = View;
  Object.defineProperty(package$wylaga, 'WIDTH', {
    get: function () {
      return WIDTH;
    }
  });
  Object.defineProperty(package$wylaga, 'HEIGHT', {
    get: function () {
      return HEIGHT;
    }
  });
  package$wylaga.Wylaga = Wylaga;
  package$sample.Sample = Sample;
  Object.defineProperty(package$sample, 'Platform', {
    get: Platform_getInstance
  });
  Entity.prototype.move = Movable.prototype.move;
  Entity.prototype.moveBy_lu1900$ = Movable.prototype.moveBy_lu1900$;
  Entity.prototype.moveTo_lu1900$ = Movable.prototype.moveTo_lu1900$;
  WIDTH = 1600.0;
  HEIGHT = 900.0;
  Kotlin.defineModule('WylagaKT', _);
  return _;
}(typeof WylagaKT === 'undefined' ? {} : WylagaKT, kotlin);
