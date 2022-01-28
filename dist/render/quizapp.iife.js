
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var arrayWithHoles = createCommonjsModule(function (module) {
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var iterableToArrayLimit = createCommonjsModule(function (module) {
	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var arrayLikeToArray = createCommonjsModule(function (module) {
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var unsupportedIterableToArray = createCommonjsModule(function (module) {
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var nonIterableRest = createCommonjsModule(function (module) {
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var slicedToArray = createCommonjsModule(function (module) {
	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
	}

	module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _slicedToArray = /*@__PURE__*/getDefaultExportFromCjs(slicedToArray);

	var $ = function $(selector) {
	  var elems = document.querySelectorAll(selector);

	  if (elems.length === 0) {
	    return null;
	  }

	  if (elems.length === 1) {
	    return elems[0];
	  }

	  return elems;
	};

	var callCounter = 0;
	var alphabets = ["A", "b", "C", "d", "E", "f", "G", "h", "I", "j", "K", "l", "M", "n", "O", "p", "Q", "r", "S", "t", "U", "v", "W", "x", "Y", "z"];
	var questionsList = ["Describe the most ridiculous thing you own. Show it.;MF", "Repeat 5 times: How much wood would a woodchuck chuck if a woodchuck could chuck wood;MF", "Dance on 'chaka chaka' song;M", "What is the most useless talent you have?;MF", "If you had to change your name, what would your name be and why would you choose that name?; MF", "What's your biggest screw-up in the kitchen?;M", "Tell a lie about <:name> and a truth about <:name>;MF", "Where was the most embarrassing place you have ever farted?;M", "What is the silliest thing you’ve ever seen a stranger do in public?;MF", "What do you think your last meal would be if you were on death row?;MF", "What’s the craziest thing you’ve ever done after getting really drunk?;MF", "What are the things you would like to change if you became God for a day?;MF", "Dance on 'Srivalli' song;M", "Dance on 'O Antava Mawa' song;M", "What is your deepest, darkest secret that no one else knows about?;MF", "What was the most embarrassing dress you ever worn in school?;M", "What would you do if you were made prime minister for one day?;MF", "What is the soundtrack of your life?;MF", "What’s the most amusing thing you’ve seen recently?;MF", "<:name> would like to ask a question to you;MF", "What's your post retirement plan?;MF", "What's your most favorite meme?;MF", "What’s the best inside joke you’ve ever heard?;MF", "If you are a dog, which breed would you want to be?;MF", "If you are a cat, and <:name> is a dog, who would win?;MF", "What do you want to be remembered for?;MF", "What do you want to be NOT remembered for?;MF", "How would you sum up the internet in two sentences?;MF", "Would you rather be smart or sexy?;MF", "In zombie apocalypse, who would last the longest? <:name> or <:name>;MF"];
	var names = ["Gopal Saini,M", "Chandra Shekhar Pant,M", "Naman Jain,M", "Rahul Sharma,M", "Vinay Kumar,M", "Koushik Sadhukhan,M", "Jaideep Singh 4,M", "Ankit Sharma,M", "Shashwat Goyal,M", "Vivek Chaudhary,M", "Saswata Arabinda,M", "Neha Jain,F", "Prasun Mukherjee,M", "Namit Sawhney,M", "Divyansh Kumar,M", "Gagan V,M", "Nikhil Avina,M", "Rishabh Kumar,M", "Swetha R,F"];
	var dupNames = [].concat(names);

	function getRandom(max) {
	  return Math.floor(Math.random() * max);
	}

	function getRandomNames() {
	  if (callCounter === 0) {
	    return "Click to select a name!";
	  }

	  if (dupNames.length === 0) {
	    return "Game over!";
	  }

	  var index = getRandom(dupNames.length);

	  while (index === dupNames.length) {
	    index = getRandom(dupNames.length);
	  }

	  var _dupNames$splice = dupNames.splice(index, 1),
	      _dupNames$splice2 = _slicedToArray(_dupNames$splice, 1),
	      name = _dupNames$splice2[0];

	  return name;
	}

	function getRandomQuestion(gender) {
	  var qList = questionsList.filter(function (q) {
	    var _q$split = q.split(";"),
	        _q$split2 = _slicedToArray(_q$split, 2),
	        allowedGender = _q$split2[1];

	    return allowedGender.includes(gender);
	  });
	  var qIndex = getRandom(qList.length);

	  var _qList$qIndex$split = qList[qIndex].split(";"),
	      _qList$qIndex$split2 = _slicedToArray(_qList$qIndex$split, 1),
	      ques = _qList$qIndex$split2[0];

	  questionsList.splice(questionsList.indexOf(qList[qIndex]), 1);
	  ques = ques.replace(/<:name>/g, function () {
	    return names[getRandom(names.length)].split(",")[0];
	  });
	  return ques;
	}

	var target = $("app-root");
	var showQuestion = false;

	function getTemplate() {
	  var _getRandomNames$split = getRandomNames().split(","),
	      _getRandomNames$split2 = _slicedToArray(_getRandomNames$split, 2),
	      name = _getRandomNames$split2[0],
	      gender = _getRandomNames$split2[1];

	  console.log(name, gender);
	  return "\n  <button class=\"names btn btn-primary btn-lg\">".concat(name, "</button>\n  ").concat(showQuestion && gender ? "<h2 class=\"question mt-4\">".concat(getRandomQuestion(gender), "</h2>") : "", "\n");
	}

	target.innerHTML = getTemplate();

	function triggerTimeout() {
	  setTimeout(function () {
	    document.dispatchEvent(new Event("timeout"));
	  }, 2000);
	}

	var interv;

	function startInterval(name, target) {
	  interv = setInterval(function () {
	    var ranStr = "";

	    for (var i = 0; i < name.length; i++) {
	      ranStr += alphabets[getRandom(26)];
	    }

	    target.textContent = ranStr;
	  }, 50);
	}

	document.addEventListener("click", function (event) {
	  var btn = event.target.closest(".names");

	  if (btn) {
	    var _$;

	    // Button is clicked
	    callCounter += 1;
	    showQuestion = false;
	    (_$ = $(".question")) === null || _$ === void 0 ? void 0 : _$.remove();
	    triggerTimeout();
	    var currentText = btn.textContent || "";
	    startInterval(currentText, btn);
	  }
	});
	document.addEventListener("timeout", function () {
	  showQuestion = true;
	  clearInterval(interv);
	  target.innerHTML = getTemplate();
	});

})();
//# sourceMappingURL=quizapp.iife.js.map
