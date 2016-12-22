(function() {
    'use strict';

    angular.module('ui.fabric')
        .factory('fabric', fabric);

    /** @ngInject */
    function fabric($log, $rootScope, fabricCanvas, fabricConfig, fabricWindow, fabricShape) {
        var TAG = 'ui-fabric.factory: ';

        var service = this;

        service.canvas = null;

        service.canvasDefaults = null;
        service.controlDefaults = null;
        service.rectDefaults = null;
        service.connectorDefaults = null;
        service.arrowDefaults = null;

        // service.formatShape = { show: false};

        service.init = function () {

            $log.debug(TAG + 'init()');

            service.canvasDefaults = fabricConfig.getCanvasDefaults();
            service.controlDefaults = fabricConfig.getControlDefaults();
            service.rectDefaults = fabricConfig.getRectDefaults();
            service.connectorDefaults = fabricConfig.getConnectorDefaults();
            service.arrowDefaults = fabricConfig.getArrowDefaults();
        };

        //
        // Canvas
        //

        service.getCanvas = function () {

            $log.debug(TAG + 'getCanvas()');

            service.canvas = fabricCanvas.getCanvas();

            $log.debug(TAG + 'getCanvas() - ' + service.canvas);

            return service.canvas;
        };

        //
        // Shapes
        //

        var addObjectToCanvas = function(object, render) {

            render = render || false;

            if (service.canvas === null) {
                $log.error(TAG + 'You must call getCanvas() before you try to add shapes to a canvas.');
                service.getCanvas();
            }

            service.canvas.add(object);
            // service.setObjectZoom(object);
            // service.canvas.setActiveObject(object);
            object.bringToFront();

            // $log.debug('fabric - addObjectToCanvas() - render: ' + render.toLocaleString());

            if (render !== false) {
                $log.debug(TAG + 'addObjectToCanvas() - renderAll');
                service.canvas.renderAll();
            }

            return object;
        };

        /**
         * @name addRect
         * @desc Creates a new Rect and adds it to the canvas
         * @param {Object} [options] A configuration object, defaults to service.rectDefaults
         * @param {Boolean} [render] When true, service.canvas.renderAll() is invoked
         * @return {Object} Returns the new Rect object
         */
        service.addRect = function(options, render) {

            $log.debug('fabric - addRect()');

            return addObjectToCanvas(fabricShape.rect(options), render);
        };

        /**
         * @name addRectWithText
         * @desc Creates a new Rect and adds it to the canvas
         * @param {String} [text] A string of text
         * @param {Object} [options] A configuration object, defaults to service.rectDefaults
         * @param {Boolean} [render] When true, service.canvas.renderAll() is invoked
         * @return {Object} Returns the new Rect object
         */
        service.addRectWithText = function(text, options, render) {

            $log.debug('fabric - addRectWithText()');

            return addObjectToCanvas(fabricShape.rectWithText(text, options), render);
        };

        /**
         * @name addSubjectElement
         * @desc Creates a new SubjectElement and adds it to the canvas
         * @param {Object} [options] A configuration object, defaults to service.rectDefaults
         * @param {Boolean} [render] When true, service.canvas.renderAll() is invoked
         * @return {Object} Returns the new Rect object
         */
        service.addSubjectElement = function(options, render) {

            $log.debug(TAG + 'addSubjectElement()');

            return addObjectToCanvas(fabricShape.subjectElement(options), render);
        };

        service.init();

        return service;

    }

})();
