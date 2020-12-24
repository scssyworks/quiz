(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.quizapp = {}));
}(this, (function (exports) { 'use strict';

    /**
     * This file is entry file for your library
     */
    function render() {
      var root = document.querySelector('app-root');

      if (root) {
        root.innerHTML = '<div>Hello World</div>';
      }
    }

    exports.render = render;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=quizapp.js.map
