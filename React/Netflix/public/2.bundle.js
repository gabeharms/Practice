webpackJsonp([2],{

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var _React$PropTypes = React.PropTypes;
	var object = _React$PropTypes.object;
	var arrayOf = _React$PropTypes.arrayOf;

	var ShowCard = __webpack_require__(239);
	var Header = __webpack_require__(240);

	var _require = __webpack_require__(219);

	var connector = _require.connector;

	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);

	  //   static propTypes = {
	  // //    shows: object,
	  //       searchTerm: string
	  //   };

	  function Search() {
	    _classCallCheck(this, Search);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this));
	  }

	  _createClass(Search, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return React.createElement(
	        'div',
	        { className: 'container' },
	        React.createElement(Header, { showSearch: true }),
	        React.createElement(
	          'div',
	          { className: 'shows' },
	          this.props.shows.filter(function (show) {
	            return (show.title + ' ' + show.description).toUpperCase().indexOf(_this2.props.searchTerm.toUpperCase()) >= 0;
	          }).map(function (show) {
	            return React.createElement(ShowCard, _extends({ key: show.title }, show));
	          })
	        )
	      );
	    }
	  }]);

	  return Search;
	}(React.Component);

	Search.propTypes = {
	  shows: arrayOf(object)
	};

	module.exports = connector(Search);

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(162);

	var Link = _require.Link;


	var ShowCard = function ShowCard(props) {
	  return React.createElement(
	    Link,
	    { to: '/details/' + props.imdbID },
	    React.createElement(
	      'div',
	      { className: 'show-card' },
	      React.createElement('img', { src: 'public/img/posters/' + props.poster, className: 'show-card-img' }),
	      React.createElement(
	        'div',
	        { className: 'show-card-text' },
	        React.createElement(
	          'h3',
	          { className: 'show-card-title' },
	          props.title
	        ),
	        React.createElement(
	          'h4',
	          { className: 'show-card-year' },
	          '(',
	          props.year,
	          ')'
	        ),
	        React.createElement(
	          'p',
	          { className: 'show-card-description' },
	          props.description
	        )
	      )
	    )
	  );
	};

	var string = React.PropTypes.string;


	ShowCard.propTypes = {
	  title: string.isRequired,
	  poster: string.isRequired,
	  year: string.isRequired,
	  description: string.isRequired
	};

	module.exports = ShowCard;

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var _React$PropTypes = React.PropTypes;
	var func = _React$PropTypes.func;
	var bool = _React$PropTypes.bool;
	var string = _React$PropTypes.string;

	var _require = __webpack_require__(162);

	var Link = _require.Link;

	var _require2 = __webpack_require__(219);

	var connector = _require2.connector;

	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header(props) {
	    _classCallCheck(this, Header);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

	    _this.handleSearchTermEvent = _this.handleSearchTermEvent.bind(_this);
	    return _this;
	  }

	  _createClass(Header, [{
	    key: 'handleSearchTermEvent',
	    value: function handleSearchTermEvent(event) {
	      this.props.setSearchTerm(event.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var utilSpace = void 0;
	      if (this.props.showSearch) {
	        utilSpace = React.createElement('input', {
	          type: 'text',
	          className: 'search-input',
	          placeholder: 'search',
	          value: this.props.searchTerm,
	          onChange: this.handleSearchTermEvent
	        });
	      } else {
	        utilSpace = React.createElement(
	          'h2',
	          { className: 'header-back' },
	          React.createElement(
	            Link,
	            { to: '/search' },
	            'Back'
	          )
	        );
	      }
	      return React.createElement(
	        'header',
	        { className: 'header' },
	        React.createElement(
	          'h1',
	          { className: 'brand' },
	          React.createElement(
	            Link,
	            { to: '/', className: 'brand-link' },
	            'svideo'
	          )
	        ),
	        utilSpace
	      );
	    }
	  }]);

	  return Header;
	}(React.Component);

	Header.propTypes = {
	  handleSearchChange: func,
	  showSearch: bool,
	  searchTerm: string
	};

	module.exports = connector(Header);

/***/ }

});