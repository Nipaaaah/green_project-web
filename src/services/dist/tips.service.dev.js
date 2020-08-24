"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddTip = exports.DeleteTip = exports.EditTip = exports.GetTip = exports.GetTips = void 0;

var _axios = _interopRequireDefault(require("../tools/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6OTAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5ODEwMDEyOSwiZXhwIjoxNTk4MTAzNzI5LCJuYmYiOjE1OTgxMDAxMjksImp0aSI6ImN6aFpHckhGY1dwMW04RTMiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.6T6bjk08qF6d_RLY9PwzyTIeP47s1yuCsGsD2gn_lqM';
var config = {
  headers: {
    Authorization: "Bearer ".concat(token)
  }
};

var GetTips = function GetTips() {
  var res;
  return regeneratorRuntime.async(function GetTips$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("/allTips", config));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.GetTips = GetTips;

var GetTip = function GetTip(id) {
  var res;
  return regeneratorRuntime.async(function GetTip$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("/tip/".concat(id), config));

        case 2:
          res = _context2.sent;
          return _context2.abrupt("return", res);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.GetTip = GetTip;

var EditTip = function EditTip(id, formData) {
  var res;
  return regeneratorRuntime.async(function EditTip$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("/editTip/".concat(id), formData, config));

        case 2:
          res = _context3.sent;
          return _context3.abrupt("return", res);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.EditTip = EditTip;

var DeleteTip = function DeleteTip(id) {
  var res;
  return regeneratorRuntime.async(function DeleteTip$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("/deleteTip/".concat(id), config));

        case 2:
          res = _context4.sent;
          return _context4.abrupt("return", res);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.DeleteTip = DeleteTip;

var AddTip = function AddTip(formData) {
  return regeneratorRuntime.async(function AddTip$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.AddTip = AddTip;