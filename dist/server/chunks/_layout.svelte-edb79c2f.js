import { c as create_ssr_component, v as validate_component, a as subscribe, e as each, d as escape, f as null_to_empty, g as add_attribute, h as identity, o as onDestroy, m as missing_component, j as assign, k as now, l as loop } from './index-c574249f.js';
import { d as derived, w as writable } from './index2-5501b94c.js';
import './Api-5728f2c6.js';
import 'axios';

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var ErrorKind;
(function (ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */
    ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */
    ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */
    ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
    ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
    ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
    ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */
    ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */
    ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */
    ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
    ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */
    ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
    ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
    ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));

var TYPE;
(function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */
    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */
    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */
    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */
    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */
    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */
    TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isTagElement(el) {
    return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}

// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;

/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
        var len = match.length;
        switch (match[0]) {
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            // Period
            case 'a': // AM, PM
                result.hour12 = true;
                break;
            case 'b': // am, pm, noon, midnight
            case 'B': // flexible day periods
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
            // Second
            case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z': // 1..3, 4: specific non-location format
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
            case 'O': // 1, 4: miliseconds in day short, long
            case 'v': // 1, 4: generic non-location format
            case 'V': // 1, 2, 3, 4: time zone ID or city
            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}

// @generated from regex-gen.ts
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton
        .split(WHITE_SPACE_REGEX)
        .filter(function (x) { return x.length > 0; });
    var tokens = [];
    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({ stem: stem, options: options });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === 'r') {
        result.roundingPriority = 'morePrecision';
    }
    else if (str[str.length - 1] === 's') {
        result.roundingPriority = 'lessPrecision';
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        }
        // @@@+ case
        else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        }
        // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        }
        // .@@## or .@@@ case
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits =
                g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch (str) {
        case 'sign-auto':
            return {
                signDisplay: 'auto',
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting',
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always',
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting',
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero',
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never',
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering',
        };
        stem = stem.slice(2);
    }
    else if (stem[0] === 'E') {
        result = {
            notation: 'scientific',
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        }
        else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        switch (token.stem) {
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = __assign(__assign(__assign({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return (__assign(__assign({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'engineering':
                result = __assign(__assign(__assign({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return (__assign(__assign({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    }
                    else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    }
                    else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                }
                // .### case
                else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                }
                // .00## case
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                }
                else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            var opt = token.options[0];
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
            if (opt === 'w') {
                result = __assign(__assign({}, result), { trailingZeroDisplay: 'stripIfInteger' });
            }
            else if (opt) {
                result = __assign(__assign({}, result), parseSignificantPrecision(opt));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = __assign(__assign({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = __assign(__assign({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = __assign(__assign({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}

// @generated from time-data-gen.ts
// prettier-ignore  
var timeData = {
    "AX": [
        "H"
    ],
    "BQ": [
        "H"
    ],
    "CP": [
        "H"
    ],
    "CZ": [
        "H"
    ],
    "DK": [
        "H"
    ],
    "FI": [
        "H"
    ],
    "ID": [
        "H"
    ],
    "IS": [
        "H"
    ],
    "ML": [
        "H"
    ],
    "NE": [
        "H"
    ],
    "RU": [
        "H"
    ],
    "SE": [
        "H"
    ],
    "SJ": [
        "H"
    ],
    "SK": [
        "H"
    ],
    "AS": [
        "h",
        "H"
    ],
    "BT": [
        "h",
        "H"
    ],
    "DJ": [
        "h",
        "H"
    ],
    "ER": [
        "h",
        "H"
    ],
    "GH": [
        "h",
        "H"
    ],
    "IN": [
        "h",
        "H"
    ],
    "LS": [
        "h",
        "H"
    ],
    "PG": [
        "h",
        "H"
    ],
    "PW": [
        "h",
        "H"
    ],
    "SO": [
        "h",
        "H"
    ],
    "TO": [
        "h",
        "H"
    ],
    "VU": [
        "h",
        "H"
    ],
    "WS": [
        "h",
        "H"
    ],
    "001": [
        "H",
        "h"
    ],
    "AL": [
        "h",
        "H",
        "hB"
    ],
    "TD": [
        "h",
        "H",
        "hB"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "CF": [
        "H",
        "h",
        "hB"
    ],
    "CM": [
        "H",
        "h",
        "hB"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "LU": [
        "H",
        "h",
        "hB"
    ],
    "NP": [
        "H",
        "h",
        "hB"
    ],
    "PF": [
        "H",
        "h",
        "hB"
    ],
    "SC": [
        "H",
        "h",
        "hB"
    ],
    "SM": [
        "H",
        "h",
        "hB"
    ],
    "SN": [
        "H",
        "h",
        "hB"
    ],
    "TF": [
        "H",
        "h",
        "hB"
    ],
    "VA": [
        "H",
        "h",
        "hB"
    ],
    "CY": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "GR": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "CO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "DO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KP": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "VE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BW": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BZ": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "DG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "FK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GB": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IM": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IO": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "JE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "LT": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MS": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NF": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NR": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NU": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "PN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SH": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "TA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ZA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "AR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CL": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CU": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "EA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BO": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-EC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-PE": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "GT": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "HN": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "IC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KG": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KM": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "LK": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MX": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "NI": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "PY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "SV": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "UY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "JP": [
        "H",
        "h",
        "K"
    ],
    "AD": [
        "H",
        "hB"
    ],
    "AM": [
        "H",
        "hB"
    ],
    "AO": [
        "H",
        "hB"
    ],
    "AT": [
        "H",
        "hB"
    ],
    "AW": [
        "H",
        "hB"
    ],
    "BE": [
        "H",
        "hB"
    ],
    "BF": [
        "H",
        "hB"
    ],
    "BJ": [
        "H",
        "hB"
    ],
    "BL": [
        "H",
        "hB"
    ],
    "BR": [
        "H",
        "hB"
    ],
    "CG": [
        "H",
        "hB"
    ],
    "CI": [
        "H",
        "hB"
    ],
    "CV": [
        "H",
        "hB"
    ],
    "DE": [
        "H",
        "hB"
    ],
    "EE": [
        "H",
        "hB"
    ],
    "FR": [
        "H",
        "hB"
    ],
    "GA": [
        "H",
        "hB"
    ],
    "GF": [
        "H",
        "hB"
    ],
    "GN": [
        "H",
        "hB"
    ],
    "GP": [
        "H",
        "hB"
    ],
    "GW": [
        "H",
        "hB"
    ],
    "HR": [
        "H",
        "hB"
    ],
    "IL": [
        "H",
        "hB"
    ],
    "IT": [
        "H",
        "hB"
    ],
    "KZ": [
        "H",
        "hB"
    ],
    "MC": [
        "H",
        "hB"
    ],
    "MD": [
        "H",
        "hB"
    ],
    "MF": [
        "H",
        "hB"
    ],
    "MQ": [
        "H",
        "hB"
    ],
    "MZ": [
        "H",
        "hB"
    ],
    "NC": [
        "H",
        "hB"
    ],
    "NL": [
        "H",
        "hB"
    ],
    "PM": [
        "H",
        "hB"
    ],
    "PT": [
        "H",
        "hB"
    ],
    "RE": [
        "H",
        "hB"
    ],
    "RO": [
        "H",
        "hB"
    ],
    "SI": [
        "H",
        "hB"
    ],
    "SR": [
        "H",
        "hB"
    ],
    "ST": [
        "H",
        "hB"
    ],
    "TG": [
        "H",
        "hB"
    ],
    "TR": [
        "H",
        "hB"
    ],
    "WF": [
        "H",
        "hB"
    ],
    "YT": [
        "H",
        "hB"
    ],
    "BD": [
        "h",
        "hB",
        "H"
    ],
    "PK": [
        "h",
        "hB",
        "H"
    ],
    "AZ": [
        "H",
        "hB",
        "h"
    ],
    "BA": [
        "H",
        "hB",
        "h"
    ],
    "BG": [
        "H",
        "hB",
        "h"
    ],
    "CH": [
        "H",
        "hB",
        "h"
    ],
    "GE": [
        "H",
        "hB",
        "h"
    ],
    "LI": [
        "H",
        "hB",
        "h"
    ],
    "ME": [
        "H",
        "hB",
        "h"
    ],
    "RS": [
        "H",
        "hB",
        "h"
    ],
    "UA": [
        "H",
        "hB",
        "h"
    ],
    "UZ": [
        "H",
        "hB",
        "h"
    ],
    "XK": [
        "H",
        "hB",
        "h"
    ],
    "AG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "CA": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "DM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FJ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GD": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "JM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KN": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LR": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MH": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MP": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MW": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "NZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SL": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TT": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "UM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "US": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ZM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BO": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "EC": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "ES": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "GQ": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "PE": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "AE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "BH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "DZ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EG": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "HK": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "IQ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "JO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "KW": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LB": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MR": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "OM": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PS": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "QA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SD": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "TN": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "YE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "AF": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "LA": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "CN": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "LV": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "TL": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "CD": [
        "hB",
        "H"
    ],
    "IR": [
        "hB",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "KH": [
        "hB",
        "h",
        "H",
        "hb"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "BN": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "MY": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "ET": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "TW": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "KE": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "MM": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "TZ": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UG": [
        "hB",
        "hb",
        "H",
        "h"
    ]
};

/**
 * Returns the best matching date time pattern if a date time skeleton
 * pattern is provided with a locale. Follows the Unicode specification:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
 * @param skeleton date time skeleton pattern that possibly includes j, J or C
 * @param locale
 */
function getBestPattern(skeleton, locale) {
    var skeletonCopy = '';
    for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
        var patternChar = skeleton.charAt(patternPos);
        if (patternChar === 'j') {
            var extraLength = 0;
            while (patternPos + 1 < skeleton.length &&
                skeleton.charAt(patternPos + 1) === patternChar) {
                extraLength++;
                patternPos++;
            }
            var hourLen = 1 + (extraLength & 1);
            var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
            var dayPeriodChar = 'a';
            var hourChar = getDefaultHourSymbolFromLocale(locale);
            if (hourChar == 'H' || hourChar == 'k') {
                dayPeriodLen = 0;
            }
            while (dayPeriodLen-- > 0) {
                skeletonCopy += dayPeriodChar;
            }
            while (hourLen-- > 0) {
                skeletonCopy = hourChar + skeletonCopy;
            }
        }
        else if (patternChar === 'J') {
            skeletonCopy += 'H';
        }
        else {
            skeletonCopy += patternChar;
        }
    }
    return skeletonCopy;
}
/**
 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
 * of the given `locale` to the corresponding time pattern.
 * @param locale
 */
function getDefaultHourSymbolFromLocale(locale) {
    var hourCycle = locale.hourCycle;
    if (hourCycle === undefined &&
        // @ts-ignore hourCycle(s) is not identified yet
        locale.hourCycles &&
        // @ts-ignore
        locale.hourCycles.length) {
        // @ts-ignore
        hourCycle = locale.hourCycles[0];
    }
    if (hourCycle) {
        switch (hourCycle) {
            case 'h24':
                return 'k';
            case 'h23':
                return 'H';
            case 'h12':
                return 'h';
            case 'h11':
                return 'K';
            default:
                throw new Error('Invalid hourCycle');
        }
    }
    // TODO: Once hourCycle is fully supported remove the following with data generation
    var languageTag = locale.language;
    var regionTag;
    if (languageTag !== 'root') {
        regionTag = locale.maximize().region;
    }
    var hourCycles = timeData[regionTag || ''] ||
        timeData[languageTag || ''] ||
        timeData["".concat(languageTag, "-001")] ||
        timeData['001'];
    return hourCycles[0];
}

var _a;
var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));
function createLocation(start, end) {
    return { start: start, end: end };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith;
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger
    ? Number.isSafeInteger
    : function (n) {
        return (typeof n === 'number' &&
            isFinite(n) &&
            Math.floor(n) === n &&
            Math.abs(n) <= 0x1fffffffffffff);
    };
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */
    REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
}
catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith
    ? // Native
        function startsWith(s, search, position) {
            return s.startsWith(search, position);
        }
    : // For IE11
        function startsWith(s, search, position) {
            return s.slice(position, position + search.length) === search;
        };
var fromCodePoint = hasNativeFromCodePoint
    ? String.fromCodePoint
    : // IE11
        function fromCodePoint() {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            var elements = '';
            var length = codePoints.length;
            var i = 0;
            var code;
            while (length > i) {
                code = codePoints[i++];
                if (code > 0x10ffff)
                    throw RangeError(code + ' is not a valid code point');
                elements +=
                    code < 0x10000
                        ? String.fromCharCode(code)
                        : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
            }
            return elements;
        };
var fromEntries = 
// native
hasNativeFromEntries
    ? Object.fromEntries
    : // Ponyfill
        function fromEntries(entries) {
            var obj = {};
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _a = entries_1[_i], k = _a[0], v = _a[1];
                obj[k] = v;
            }
            return obj;
        };
var codePointAt = hasNativeCodePointAt
    ? // Native
        function codePointAt(s, index) {
            return s.codePointAt(index);
        }
    : // IE 11
        function codePointAt(s, index) {
            var size = s.length;
            if (index < 0 || index >= size) {
                return undefined;
            }
            var first = s.charCodeAt(index);
            var second;
            return first < 0xd800 ||
                first > 0xdbff ||
                index + 1 === size ||
                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                second > 0xdfff
                ? first
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
        };
var trimStart = hasTrimStart
    ? // Native
        function trimStart(s) {
            return s.trimStart();
        }
    : // Ponyfill
        function trimStart(s) {
            return s.replace(SPACE_SEPARATOR_START_REGEX, '');
        };
var trimEnd = hasTrimEnd
    ? // Native
        function trimEnd(s) {
            return s.trimEnd();
        }
    : // Ponyfill
        function trimEnd(s) {
            return s.replace(SPACE_SEPARATOR_END_REGEX, '');
        };
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
}
else {
    // IE11
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var match = [];
        while (true) {
            var c = codePointAt(s, index);
            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
            }
            match.push(c);
            index += c >= 0x10000 ? 2 : 1;
        }
        return fromCodePoint.apply(void 0, match);
    };
}
var Parser = /** @class */ (function () {
    function Parser(message, options) {
        if (options === void 0) { options = {}; }
        this.message = message;
        this.position = { offset: 0, line: 1, column: 1 };
        this.ignoreTag = !!options.ignoreTag;
        this.locale = options.locale;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function () {
        if (this.offset() !== 0) {
            throw Error('parser can only be used once');
        }
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while (!this.isEOF()) {
            var char = this.char();
            if (char === 123 /* `{` */) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else if (char === 125 /* `}` */ && nestingLevel > 0) {
                break;
            }
            else if (char === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: TYPE.pound,
                    location: createLocation(position, this.clonePosition()),
                });
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) {
                    break;
                }
                else {
                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                }
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
        }
        return { val: elements, err: null };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */
    Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) {
            // Self closing tag
            return {
                val: {
                    type: TYPE.literal,
                    value: "<".concat(tagName, "/>"),
                    location: createLocation(startPosition, this.clonePosition()),
                },
                err: null,
            };
        }
        else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) {
                return childrenResult;
            }
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                return {
                    val: {
                        type: TYPE.tag,
                        value: tagName,
                        children: children,
                        location: createLocation(startPosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            else {
                return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
            }
        }
        else {
            return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
        }
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */
    Parser.prototype.parseTagName = function () {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
            this.bump();
        }
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while (true) {
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = createLocation(start, this.clonePosition());
        return {
            val: { type: TYPE.literal, value: value, location: location },
            err: null,
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function () {
        if (!this.isEOF() &&
            this.char() === 60 /* `<` */ &&
            (this.ignoreTag ||
                // If at the opening tag or closing tag position, bail.
                !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */
    Parser.prototype.tryParseQuote = function (parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */) {
            return null;
        }
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch (this.peek()) {
            case 39 /* `'` */:
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35: // '#'
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                    break;
                }
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [this.char()]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch === 39 /* `'` */) {
                if (this.peek() === 39 /* `'` */) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                }
                else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            }
            else {
                codePoints.push(ch);
            }
            this.bump();
        }
        return fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
        if (this.isEOF()) {
            return null;
        }
        var ch = this.char();
        if (ch === 60 /* `<` */ ||
            ch === 123 /* `{` */ ||
            (ch === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
            (ch === 125 /* `}` */ && nestingLevel > 0)) {
            return null;
        }
        else {
            this.bump();
            return fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        if (this.char() === 125 /* `}` */) {
            this.bump();
            return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) {
            return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        switch (this.char()) {
            // Simple argument: `{name}`
            case 125 /* `}` */: {
                this.bump(); // `}`
                return {
                    val: {
                        type: TYPE.argument,
                        // value does not include the opening and closing braces.
                        value: value,
                        location: createLocation(openingBracePosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */: {
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) {
                    return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                }
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            }
            default:
                return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */
    Parser.prototype.parseIdentifierIfPossible = function () {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = createLocation(startingPosition, endPosition);
        return { value: value, location: location };
    };
    Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch (argType) {
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time': {
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                    this.bumpSpace();
                    var styleStartPosition = this.clonePosition();
                    var result = this.parseSimpleArgStyleIfPossible();
                    if (result.err) {
                        return result;
                    }
                    var style = trimEnd(result.val);
                    if (style.length === 0) {
                        return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                    styleAndLocation = { style: style, styleLocation: styleLocation };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                    // Skeleton starts with `::`.
                    var skeleton = trimStart(styleAndLocation.style.slice(2));
                    if (argType === 'number') {
                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                        if (result.err) {
                            return result;
                        }
                        return {
                            val: { type: TYPE.number, value: value, location: location_1, style: result.val },
                            err: null,
                        };
                    }
                    else {
                        if (skeleton.length === 0) {
                            return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
                        }
                        var dateTimePattern = skeleton;
                        // Get "best match" pattern only if locale is passed, if not, let it
                        // pass as-is where `parseDateTimeSkeleton()` will throw an error
                        // for unsupported patterns.
                        if (this.locale) {
                            dateTimePattern = getBestPattern(skeleton, this.locale);
                        }
                        var style = {
                            type: SKELETON_TYPE.dateTime,
                            pattern: dateTimePattern,
                            location: styleAndLocation.styleLocation,
                            parsedOptions: this.shouldParseSkeletons
                                ? parseDateTimeSkeleton(dateTimePattern)
                                : {},
                        };
                        var type = argType === 'date' ? TYPE.date : TYPE.time;
                        return {
                            val: { type: type, value: value, location: location_1, style: style },
                            err: null,
                        };
                    }
                }
                // Regular style or no style.
                return {
                    val: {
                        type: argType === 'number'
                            ? TYPE.number
                            : argType === 'date'
                                ? TYPE.date
                                : TYPE.time,
                        value: value,
                        location: location_1,
                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
                    },
                    err: null,
                };
            }
            case 'plural':
            case 'selectordinal':
            case 'select': {
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) {
                    return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, __assign({}, typeEndPosition_1)));
                }
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                    if (!this.bumpIf(':')) {
                        return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    this.bumpSpace();
                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (result.err) {
                        return result;
                    }
                    // Parse another identifier for option parsing
                    this.bumpSpace();
                    identifierAndLocation = this.parseIdentifierIfPossible();
                    pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                if (optionsResult.err) {
                    return optionsResult;
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') {
                    return {
                        val: {
                            type: TYPE.select,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            location: location_2,
                        },
                        err: null,
                    };
                }
                else {
                    return {
                        val: {
                            type: TYPE.plural,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            offset: pluralOffset,
                            pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                            location: location_2,
                        },
                        err: null,
                    };
                }
            }
            default:
                return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bump(); // `}`
        return { val: true, err: null };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */
    Parser.prototype.parseSimpleArgStyleIfPossible = function () {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while (!this.isEOF()) {
            var ch = this.char();
            switch (ch) {
                case 39 /* `'` */: {
                    // Treat apostrophe as quoting but include it in the style part.
                    // Find the end of the quoted literal text.
                    this.bump();
                    var apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) {
                        return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                    }
                    this.bump();
                    break;
                }
                case 123 /* `{` */: {
                    nestedBraces += 1;
                    this.bump();
                    break;
                }
                case 125 /* `}` */: {
                    if (nestedBraces > 0) {
                        nestedBraces -= 1;
                    }
                    else {
                        return {
                            val: this.message.slice(startPosition.offset, this.offset()),
                            err: null,
                        };
                    }
                    break;
                }
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null,
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
        var tokens = [];
        try {
            tokens = parseNumberSkeletonFromString(skeleton);
        }
        catch (e) {
            return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: SKELETON_TYPE.number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons
                    ? parseNumberSkeleton(tokens)
                    : {},
            },
            err: null,
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */
    Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while (true) {
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) {
                        return result;
                    }
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                }
                else {
                    break;
                }
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) {
                return this.error(parentArgType === 'select'
                    ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            }
            if (selector === 'other') {
                hasOtherClause = true;
            }
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) {
                return this.error(parentArgType === 'select'
                    ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) {
                return fragmentResult;
            }
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) {
                return argCloseResult;
            }
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition()),
                },
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
        }
        if (options.length === 0) {
            return this.error(parentArgType === 'select'
                ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
                : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        }
        if (this.requiresOtherClause && !hasOtherClause) {
            return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        }
        return { val: options, err: null };
    };
    Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) ;
        else if (this.bumpIf('-')) {
            sign = -1;
        }
        var hasDigits = false;
        var decimal = 0;
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            }
            else {
                break;
            }
        }
        var location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) {
            return this.error(expectNumberError, location);
        }
        decimal *= sign;
        if (!isSafeInteger(decimal)) {
            return this.error(invalidNumberError, location);
        }
        return { val: decimal, err: null };
    };
    Parser.prototype.offset = function () {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function () {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function () {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column,
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */
    Parser.prototype.char = function () {
        var offset = this.position.offset;
        if (offset >= this.message.length) {
            throw Error('out of bound');
        }
        var code = codePointAt(this.message, offset);
        if (code === undefined) {
            throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
        }
        return code;
    };
    Parser.prototype.error = function (kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location,
            },
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */
    Parser.prototype.bump = function () {
        if (this.isEOF()) {
            return;
        }
        var code = this.char();
        if (code === 10 /* '\n' */) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        }
        else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */
    Parser.prototype.bumpIf = function (prefix) {
        if (startsWith(this.message, prefix, this.offset())) {
            for (var i = 0; i < prefix.length; i++) {
                this.bump();
            }
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */
    Parser.prototype.bumpUntil = function (pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        }
        else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */
    Parser.prototype.bumpTo = function (targetOffset) {
        if (this.offset() > targetOffset) {
            throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
        }
        targetOffset = Math.min(targetOffset, this.message.length);
        while (true) {
            var offset = this.offset();
            if (offset === targetOffset) {
                break;
            }
            if (offset > targetOffset) {
                throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
            }
            this.bump();
            if (this.isEOF()) {
                break;
            }
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */
    Parser.prototype.bumpSpace = function () {
        while (!this.isEOF() && _isWhiteSpace(this.char())) {
            this.bump();
        }
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */
    Parser.prototype.peek = function () {
        if (this.isEOF()) {
            return null;
        }
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}());
/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
    return ((codepoint >= 97 && codepoint <= 122) ||
        (codepoint >= 65 && codepoint <= 90));
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
    return (c === 45 /* '-' */ ||
        c === 46 /* '.' */ ||
        (c >= 48 && c <= 57) /* 0..9 */ ||
        c === 95 /* '_' */ ||
        (c >= 97 && c <= 122) /** a..z */ ||
        (c >= 65 && c <= 90) /* A..Z */ ||
        c == 0xb7 ||
        (c >= 0xc0 && c <= 0xd6) ||
        (c >= 0xd8 && c <= 0xf6) ||
        (c >= 0xf8 && c <= 0x37d) ||
        (c >= 0x37f && c <= 0x1fff) ||
        (c >= 0x200c && c <= 0x200d) ||
        (c >= 0x203f && c <= 0x2040) ||
        (c >= 0x2070 && c <= 0x218f) ||
        (c >= 0x2c00 && c <= 0x2fef) ||
        (c >= 0x3001 && c <= 0xd7ff) ||
        (c >= 0xf900 && c <= 0xfdcf) ||
        (c >= 0xfdf0 && c <= 0xfffd) ||
        (c >= 0x10000 && c <= 0xeffff));
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
    return ((c >= 0x0009 && c <= 0x000d) ||
        c === 0x0020 ||
        c === 0x0085 ||
        (c >= 0x200e && c <= 0x200f) ||
        c === 0x2028 ||
        c === 0x2029);
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
    return ((c >= 0x0021 && c <= 0x0023) ||
        c === 0x0024 ||
        (c >= 0x0025 && c <= 0x0027) ||
        c === 0x0028 ||
        c === 0x0029 ||
        c === 0x002a ||
        c === 0x002b ||
        c === 0x002c ||
        c === 0x002d ||
        (c >= 0x002e && c <= 0x002f) ||
        (c >= 0x003a && c <= 0x003b) ||
        (c >= 0x003c && c <= 0x003e) ||
        (c >= 0x003f && c <= 0x0040) ||
        c === 0x005b ||
        c === 0x005c ||
        c === 0x005d ||
        c === 0x005e ||
        c === 0x0060 ||
        c === 0x007b ||
        c === 0x007c ||
        c === 0x007d ||
        c === 0x007e ||
        c === 0x00a1 ||
        (c >= 0x00a2 && c <= 0x00a5) ||
        c === 0x00a6 ||
        c === 0x00a7 ||
        c === 0x00a9 ||
        c === 0x00ab ||
        c === 0x00ac ||
        c === 0x00ae ||
        c === 0x00b0 ||
        c === 0x00b1 ||
        c === 0x00b6 ||
        c === 0x00bb ||
        c === 0x00bf ||
        c === 0x00d7 ||
        c === 0x00f7 ||
        (c >= 0x2010 && c <= 0x2015) ||
        (c >= 0x2016 && c <= 0x2017) ||
        c === 0x2018 ||
        c === 0x2019 ||
        c === 0x201a ||
        (c >= 0x201b && c <= 0x201c) ||
        c === 0x201d ||
        c === 0x201e ||
        c === 0x201f ||
        (c >= 0x2020 && c <= 0x2027) ||
        (c >= 0x2030 && c <= 0x2038) ||
        c === 0x2039 ||
        c === 0x203a ||
        (c >= 0x203b && c <= 0x203e) ||
        (c >= 0x2041 && c <= 0x2043) ||
        c === 0x2044 ||
        c === 0x2045 ||
        c === 0x2046 ||
        (c >= 0x2047 && c <= 0x2051) ||
        c === 0x2052 ||
        c === 0x2053 ||
        (c >= 0x2055 && c <= 0x205e) ||
        (c >= 0x2190 && c <= 0x2194) ||
        (c >= 0x2195 && c <= 0x2199) ||
        (c >= 0x219a && c <= 0x219b) ||
        (c >= 0x219c && c <= 0x219f) ||
        c === 0x21a0 ||
        (c >= 0x21a1 && c <= 0x21a2) ||
        c === 0x21a3 ||
        (c >= 0x21a4 && c <= 0x21a5) ||
        c === 0x21a6 ||
        (c >= 0x21a7 && c <= 0x21ad) ||
        c === 0x21ae ||
        (c >= 0x21af && c <= 0x21cd) ||
        (c >= 0x21ce && c <= 0x21cf) ||
        (c >= 0x21d0 && c <= 0x21d1) ||
        c === 0x21d2 ||
        c === 0x21d3 ||
        c === 0x21d4 ||
        (c >= 0x21d5 && c <= 0x21f3) ||
        (c >= 0x21f4 && c <= 0x22ff) ||
        (c >= 0x2300 && c <= 0x2307) ||
        c === 0x2308 ||
        c === 0x2309 ||
        c === 0x230a ||
        c === 0x230b ||
        (c >= 0x230c && c <= 0x231f) ||
        (c >= 0x2320 && c <= 0x2321) ||
        (c >= 0x2322 && c <= 0x2328) ||
        c === 0x2329 ||
        c === 0x232a ||
        (c >= 0x232b && c <= 0x237b) ||
        c === 0x237c ||
        (c >= 0x237d && c <= 0x239a) ||
        (c >= 0x239b && c <= 0x23b3) ||
        (c >= 0x23b4 && c <= 0x23db) ||
        (c >= 0x23dc && c <= 0x23e1) ||
        (c >= 0x23e2 && c <= 0x2426) ||
        (c >= 0x2427 && c <= 0x243f) ||
        (c >= 0x2440 && c <= 0x244a) ||
        (c >= 0x244b && c <= 0x245f) ||
        (c >= 0x2500 && c <= 0x25b6) ||
        c === 0x25b7 ||
        (c >= 0x25b8 && c <= 0x25c0) ||
        c === 0x25c1 ||
        (c >= 0x25c2 && c <= 0x25f7) ||
        (c >= 0x25f8 && c <= 0x25ff) ||
        (c >= 0x2600 && c <= 0x266e) ||
        c === 0x266f ||
        (c >= 0x2670 && c <= 0x2767) ||
        c === 0x2768 ||
        c === 0x2769 ||
        c === 0x276a ||
        c === 0x276b ||
        c === 0x276c ||
        c === 0x276d ||
        c === 0x276e ||
        c === 0x276f ||
        c === 0x2770 ||
        c === 0x2771 ||
        c === 0x2772 ||
        c === 0x2773 ||
        c === 0x2774 ||
        c === 0x2775 ||
        (c >= 0x2794 && c <= 0x27bf) ||
        (c >= 0x27c0 && c <= 0x27c4) ||
        c === 0x27c5 ||
        c === 0x27c6 ||
        (c >= 0x27c7 && c <= 0x27e5) ||
        c === 0x27e6 ||
        c === 0x27e7 ||
        c === 0x27e8 ||
        c === 0x27e9 ||
        c === 0x27ea ||
        c === 0x27eb ||
        c === 0x27ec ||
        c === 0x27ed ||
        c === 0x27ee ||
        c === 0x27ef ||
        (c >= 0x27f0 && c <= 0x27ff) ||
        (c >= 0x2800 && c <= 0x28ff) ||
        (c >= 0x2900 && c <= 0x2982) ||
        c === 0x2983 ||
        c === 0x2984 ||
        c === 0x2985 ||
        c === 0x2986 ||
        c === 0x2987 ||
        c === 0x2988 ||
        c === 0x2989 ||
        c === 0x298a ||
        c === 0x298b ||
        c === 0x298c ||
        c === 0x298d ||
        c === 0x298e ||
        c === 0x298f ||
        c === 0x2990 ||
        c === 0x2991 ||
        c === 0x2992 ||
        c === 0x2993 ||
        c === 0x2994 ||
        c === 0x2995 ||
        c === 0x2996 ||
        c === 0x2997 ||
        c === 0x2998 ||
        (c >= 0x2999 && c <= 0x29d7) ||
        c === 0x29d8 ||
        c === 0x29d9 ||
        c === 0x29da ||
        c === 0x29db ||
        (c >= 0x29dc && c <= 0x29fb) ||
        c === 0x29fc ||
        c === 0x29fd ||
        (c >= 0x29fe && c <= 0x2aff) ||
        (c >= 0x2b00 && c <= 0x2b2f) ||
        (c >= 0x2b30 && c <= 0x2b44) ||
        (c >= 0x2b45 && c <= 0x2b46) ||
        (c >= 0x2b47 && c <= 0x2b4c) ||
        (c >= 0x2b4d && c <= 0x2b73) ||
        (c >= 0x2b74 && c <= 0x2b75) ||
        (c >= 0x2b76 && c <= 0x2b95) ||
        c === 0x2b96 ||
        (c >= 0x2b97 && c <= 0x2bff) ||
        (c >= 0x2e00 && c <= 0x2e01) ||
        c === 0x2e02 ||
        c === 0x2e03 ||
        c === 0x2e04 ||
        c === 0x2e05 ||
        (c >= 0x2e06 && c <= 0x2e08) ||
        c === 0x2e09 ||
        c === 0x2e0a ||
        c === 0x2e0b ||
        c === 0x2e0c ||
        c === 0x2e0d ||
        (c >= 0x2e0e && c <= 0x2e16) ||
        c === 0x2e17 ||
        (c >= 0x2e18 && c <= 0x2e19) ||
        c === 0x2e1a ||
        c === 0x2e1b ||
        c === 0x2e1c ||
        c === 0x2e1d ||
        (c >= 0x2e1e && c <= 0x2e1f) ||
        c === 0x2e20 ||
        c === 0x2e21 ||
        c === 0x2e22 ||
        c === 0x2e23 ||
        c === 0x2e24 ||
        c === 0x2e25 ||
        c === 0x2e26 ||
        c === 0x2e27 ||
        c === 0x2e28 ||
        c === 0x2e29 ||
        (c >= 0x2e2a && c <= 0x2e2e) ||
        c === 0x2e2f ||
        (c >= 0x2e30 && c <= 0x2e39) ||
        (c >= 0x2e3a && c <= 0x2e3b) ||
        (c >= 0x2e3c && c <= 0x2e3f) ||
        c === 0x2e40 ||
        c === 0x2e41 ||
        c === 0x2e42 ||
        (c >= 0x2e43 && c <= 0x2e4f) ||
        (c >= 0x2e50 && c <= 0x2e51) ||
        c === 0x2e52 ||
        (c >= 0x2e53 && c <= 0x2e7f) ||
        (c >= 0x3001 && c <= 0x3003) ||
        c === 0x3008 ||
        c === 0x3009 ||
        c === 0x300a ||
        c === 0x300b ||
        c === 0x300c ||
        c === 0x300d ||
        c === 0x300e ||
        c === 0x300f ||
        c === 0x3010 ||
        c === 0x3011 ||
        (c >= 0x3012 && c <= 0x3013) ||
        c === 0x3014 ||
        c === 0x3015 ||
        c === 0x3016 ||
        c === 0x3017 ||
        c === 0x3018 ||
        c === 0x3019 ||
        c === 0x301a ||
        c === 0x301b ||
        c === 0x301c ||
        c === 0x301d ||
        (c >= 0x301e && c <= 0x301f) ||
        c === 0x3020 ||
        c === 0x3030 ||
        c === 0xfd3e ||
        c === 0xfd3f ||
        (c >= 0xfe45 && c <= 0xfe46));
}

function pruneLocation(els) {
    els.forEach(function (el) {
        delete el.location;
        if (isSelectElement(el) || isPluralElement(el)) {
            for (var k in el.options) {
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
            }
        }
        else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
            delete el.style.location;
        }
        else if ((isDateElement(el) || isTimeElement(el)) &&
            isDateTimeSkeleton(el.style)) {
            delete el.style.location;
        }
        else if (isTagElement(el)) {
            pruneLocation(el.children);
        }
    });
}
function parse(message, opts) {
    if (opts === void 0) { opts = {}; }
    opts = __assign({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
    var result = new Parser(message, opts).parse();
    if (result.err) {
        var error = SyntaxError(ErrorKind[result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
        pruneLocation(result.val);
    }
    return result.val;
}

//
// Main
//
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer,
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
    return JSON.stringify(arguments);
};
//
// Cache
//
function ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
};
var cacheDefault = {
    create: function create() {
        // @ts-ignore
        return new ObjectWithoutPrototypeCache();
    },
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
};

var ErrorCode;
(function (ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = /** @class */ (function (_super) {
    __extends(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function () {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError;
}(Error));
var InvalidValueError = /** @class */ (function (_super) {
    __extends(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join('", "'), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError));
var InvalidValueTypeError = /** @class */ (function (_super) {
    __extends(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError));
var MissingValueError = /** @class */ (function (_super) {
    __extends(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError));

var PART_TYPE;
(function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== PART_TYPE.literal ||
            part.type !== PART_TYPE.literal) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && isLiteralElement(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if (isLiteralElement(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if (isPoundElement(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new MissingValueError(varName, originalMessage);
        }
        var value = values[varName];
        if (isArgumentElement(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (isDateElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.date[el.style]
                : isDateTimeSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTimeElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : isDateTimeSkeleton(el.style)
                    ? el.style.parsedOptions
                    : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isNumberElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : isNumberSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            if (style && style.scale) {
                value =
                    value *
                        (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTagElement(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new InvalidValueTypeError(value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function (p) { return p.value; }));
            if (!Array.isArray(chunks)) {
                chunks = [chunks];
            }
            result.push.apply(result, chunks.map(function (c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                };
            }));
        }
        if (isSelectElement(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if (isPluralElement(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API, originalMessage);
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return __assign(__assign(__assign({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
        all[k] = __assign(__assign({}, c1[k]), (c2[k] || {}));
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, __assign({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) { cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
    }; }
    return {
        getNumberFormat: memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: strategies.variadic,
        }),
        getDateTimeFormat: memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: strategies.variadic,
        }),
        getPluralRules: memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: strategies.variadic,
        }),
    };
}
var IntlMessageFormat = /** @class */ (function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;
        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {},
        };
        this.format = function (values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function (all, part) {
                if (!all.length ||
                    part.type !== PART_TYPE.literal ||
                    typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                }
                else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function (values) {
            return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function () { return ({
            locale: _this.resolvedLocale.toString(),
        }); };
        this.getAst = function () { return _this.ast; };
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, {
                ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
                locale: this.resolvedLocale,
            });
        }
        else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        this.formatters =
            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function () {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.resolveLocale = function (locales) {
        var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
        if (supportedLocales.length > 0) {
            return new Intl.Locale(supportedLocales[0]);
        }
        return new Intl.Locale(typeof locales === 'string' ? locales : locales[0]);
    };
    IntlMessageFormat.__parse = parse;
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0,
            },
            currency: {
                style: 'currency',
            },
            percent: {
                style: 'percent',
            },
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric',
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
        },
    };
    return IntlMessageFormat;
}());

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
var o = IntlMessageFormat;

const r = {}, i = (e, n, t2) => t2 ? (n in r || (r[n] = {}), e in r[n] || (r[n][e] = t2), t2) : t2, l = (e, n) => {
  if (null == n)
    return;
  if (n in r && e in r[n])
    return r[n][e];
  const t2 = E(n);
  for (let o2 = 0; o2 < t2.length; o2++) {
    const r2 = c(t2[o2], e);
    if (r2)
      return i(e, n, r2);
  }
};
let a;
const s = writable({});
function u(e) {
  return e in a;
}
function c(e, n) {
  if (!u(e))
    return null;
  const t2 = function(e2) {
    return a[e2] || null;
  }(e);
  return function(e2, n2) {
    if (null == n2)
      return;
    if (n2 in e2)
      return e2[n2];
    const t3 = n2.split(".");
    let o2 = e2;
    for (let e3 = 0; e3 < t3.length; e3++)
      if ("object" == typeof o2) {
        if (e3 > 0) {
          const n3 = t3.slice(e3, t3.length).join(".");
          if (n3 in o2) {
            o2 = o2[n3];
            break;
          }
        }
        o2 = o2[t3[e3]];
      } else
        o2 = void 0;
    return o2;
  }(t2, n);
}
function m(e, ...n) {
  delete r[e], s.update((o2) => (o2[e] = cjs.all([o2[e] || {}, ...n]), o2));
}
derived([s], ([e]) => Object.keys(e));
s.subscribe((e) => a = e);
const d = {};
function g(e) {
  return d[e];
}
function h(e) {
  return null != e && E(e).some((e2) => {
    var n;
    return null === (n = g(e2)) || void 0 === n ? void 0 : n.size;
  });
}
function w(e, n) {
  const t2 = Promise.all(n.map((n2) => (function(e2, n3) {
    d[e2].delete(n3), 0 === d[e2].size && delete d[e2];
  }(e, n2), n2().then((e2) => e2.default || e2))));
  return t2.then((n2) => m(e, ...n2));
}
const p = {};
function b(e) {
  if (!h(e))
    return e in p ? p[e] : Promise.resolve();
  const n = function(e2) {
    return E(e2).map((e3) => {
      const n2 = g(e3);
      return [e3, n2 ? [...n2] : []];
    }).filter(([, e3]) => e3.length > 0);
  }(e);
  return p[e] = Promise.all(n.map(([e2, n2]) => w(e2, n2))).then(() => {
    if (h(e))
      return b(e);
    delete p[e];
  }), p[e];
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function v(e, n) {
  var t2 = {};
  for (var o2 in e)
    Object.prototype.hasOwnProperty.call(e, o2) && n.indexOf(o2) < 0 && (t2[o2] = e[o2]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var r2 = 0;
    for (o2 = Object.getOwnPropertySymbols(e); r2 < o2.length; r2++)
      n.indexOf(o2[r2]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o2[r2]) && (t2[o2[r2]] = e[o2[r2]]);
  }
  return t2;
}
function O({ locale: e, id: n }) {
  console.warn(`[svelte-i18n] The message "${n}" was not found in "${E(e).join('", "')}".${h(P()) ? "\n\nNote: there are at least one loader still registered to this locale that wasn't executed." : ""}`);
}
const j = { fallbackLocale: null, loadingDelay: 200, formats: { number: { scientific: { notation: "scientific" }, engineering: { notation: "engineering" }, compactLong: { notation: "compact", compactDisplay: "long" }, compactShort: { notation: "compact", compactDisplay: "short" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } }, warnOnMissingMessages: true, handleMissingMessage: void 0, ignoreTag: true };
function M() {
  return j;
}
function $(e) {
  const { formats: n } = e, t2 = v(e, ["formats"]), o2 = e.initialLocale || e.fallbackLocale;
  return t2.warnOnMissingMessages && (delete t2.warnOnMissingMessages, null == t2.handleMissingMessage ? t2.handleMissingMessage = O : console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')), Object.assign(j, t2, { initialLocale: o2 }), n && ("number" in n && Object.assign(j.formats.number, n.number), "date" in n && Object.assign(j.formats.date, n.date), "time" in n && Object.assign(j.formats.time, n.time)), D.set(o2);
}
const k = writable(false);
let T;
const L = writable(null);
function x(e) {
  return e.split("-").map((e2, n, t2) => t2.slice(0, n + 1).join("-")).reverse();
}
function E(e, n = M().fallbackLocale) {
  const t2 = x(e);
  return n ? [.../* @__PURE__ */ new Set([...t2, ...x(n)])] : t2;
}
function P() {
  return null != T ? T : void 0;
}
L.subscribe((e) => {
  T = null != e ? e : void 0, "undefined" != typeof window && null != e && document.documentElement.setAttribute("lang", e);
});
const D = Object.assign(Object.assign({}, L), { set: (e) => {
  if (e && function(e2) {
    if (null == e2)
      return;
    const n = E(e2);
    for (let e3 = 0; e3 < n.length; e3++) {
      const t2 = n[e3];
      if (u(t2))
        return t2;
    }
  }(e) && h(e)) {
    const { loadingDelay: n } = M();
    let t2;
    return "undefined" != typeof window && null != P() && n ? t2 = window.setTimeout(() => k.set(true), n) : k.set(true), b(e).then(() => {
      L.set(e);
    }).finally(() => {
      clearTimeout(t2), k.set(false);
    });
  }
  return L.set(e);
} }), F = () => "undefined" == typeof window ? null : window.navigator.language || window.navigator.languages[0], C = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (t2) => {
    const o2 = JSON.stringify(t2);
    return o2 in n ? n[o2] : n[o2] = e(t2);
  };
}, G = (e, n) => {
  const { formats: t2 } = M();
  if (e in t2 && n in t2[e])
    return t2[e][n];
  throw new Error(`[svelte-i18n] Unknown "${n}" ${e} format.`);
}, J = C((e) => {
  var { locale: n, format: t2 } = e, o2 = v(e, ["locale", "format"]);
  if (null == n)
    throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
  return t2 && (o2 = G("number", t2)), new Intl.NumberFormat(n, o2);
}), U = C((e) => {
  var { locale: n, format: t2 } = e, o2 = v(e, ["locale", "format"]);
  if (null == n)
    throw new Error('[svelte-i18n] A "locale" must be set to format dates');
  return t2 ? o2 = G("date", t2) : 0 === Object.keys(o2).length && (o2 = G("date", "short")), new Intl.DateTimeFormat(n, o2);
}), V = C((e) => {
  var { locale: n, format: t2 } = e, o2 = v(e, ["locale", "format"]);
  if (null == n)
    throw new Error('[svelte-i18n] A "locale" must be set to format time values');
  return t2 ? o2 = G("time", t2) : 0 === Object.keys(o2).length && (o2 = G("time", "short")), new Intl.DateTimeFormat(n, o2);
}), _ = (e = {}) => {
  var { locale: n = P() } = e, t2 = v(e, ["locale"]);
  return J(Object.assign({ locale: n }, t2));
}, q = (e = {}) => {
  var { locale: n = P() } = e, t2 = v(e, ["locale"]);
  return U(Object.assign({ locale: n }, t2));
}, B = (e = {}) => {
  var { locale: n = P() } = e, t2 = v(e, ["locale"]);
  return V(Object.assign({ locale: n }, t2));
}, H = C((e, n = P()) => new o(e, n, M().formats, { ignoreTag: M().ignoreTag })), K = (e, n = {}) => {
  var t2, o2, r2, i2;
  let a2 = n;
  "object" == typeof e && (a2 = e, e = a2.id);
  const { values: s2, locale: u2 = P(), default: c2 } = a2;
  if (null == u2)
    throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
  let m2 = l(e, u2);
  if (m2) {
    if ("string" != typeof m2)
      return console.warn(`[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof m2}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`), m2;
  } else
    m2 = null !== (i2 = null !== (r2 = null === (o2 = (t2 = M()).handleMissingMessage) || void 0 === o2 ? void 0 : o2.call(t2, { locale: u2, id: e, defaultValue: c2 })) && void 0 !== r2 ? r2 : c2) && void 0 !== i2 ? i2 : e;
  if (!s2)
    return m2;
  let f = m2;
  try {
    f = H(m2, u2).format(s2);
  } catch (n2) {
    console.warn(`[svelte-i18n] Message "${e}" has syntax error:`, n2.message);
  }
  return f;
}, Q = (e, n) => B(n).format(e), R = (e, n) => q(n).format(e), W = (e, n) => _(n).format(e), X = (e, n = P()) => l(e, n);
derived([D, s], () => K);
derived([D], () => Q);
derived([D], () => R);
derived([D], () => W);
derived([D, s], () => X);
const fr = {};
const defaults = {
  duration: 4e3,
  initial: 1,
  next: 0,
  pausable: false,
  dismissable: true,
  reversed: false,
  intro: { x: 256 }
};
const createToast = () => {
  const { subscribe: subscribe2, update } = writable([]);
  let count = 0;
  const options = {};
  const _obj = (obj) => obj instanceof Object;
  const push = (msg, opts = {}) => {
    const param = { target: "default", ..._obj(msg) ? msg : { ...opts, msg } };
    const conf = options[param.target] || {};
    const entry = {
      ...defaults,
      ...conf,
      ...param,
      theme: { ...conf.theme, ...param.theme },
      classes: [...conf.classes || [], ...param.classes || []],
      id: ++count
    };
    update((n) => entry.reversed ? [...n, entry] : [entry, ...n]);
    return count;
  };
  const pop = (id) => {
    update((n) => {
      if (!n.length || id === 0)
        return [];
      if (_obj(id))
        return n.filter((i2) => id(i2));
      const target = id || Math.max(...n.map((i2) => i2.id));
      return n.filter((i2) => i2.id !== target);
    });
  };
  const set = (id, opts = {}) => {
    const param = _obj(id) ? { ...id } : { ...opts, id };
    update((n) => {
      const idx = n.findIndex((i2) => i2.id === param.id);
      if (idx > -1) {
        n[idx] = { ...n[idx], ...param };
      }
      return n;
    });
  };
  const _init = (target = "default", opts = {}) => {
    options[target] = opts;
    return options;
  };
  return { subscribe: subscribe2, push, pop, set, _init };
};
const toast = createToast();
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a2, b2) {
  if (a2 === b2 || a2 !== a2)
    return () => a2;
  const type = typeof a2;
  if (type !== typeof b2 || Array.isArray(a2) !== Array.isArray(b2)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a2)) {
    const arr = b2.map((bi, i2) => {
      return get_interpolator(a2[i2], bi);
    });
    return (t2) => arr.map((fn) => fn(t2));
  }
  if (type === "object") {
    if (!a2 || !b2)
      throw new Error("Object cannot be null");
    if (is_date(a2) && is_date(b2)) {
      a2 = a2.getTime();
      b2 = b2.getTime();
      const delta = b2 - a2;
      return (t2) => new Date(a2 + t2 * delta);
    }
    const keys = Object.keys(b2);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a2[key], b2[key]);
    });
    return (t2) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t2);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b2 - a2;
    return (t2) => a2 + t2 * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults2 = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults2), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const css$2 = {
  code: "._toastItem.svelte-10l0ogd{width:var(--toastWidth, 16rem);height:var(--toastHeight, auto);min-height:var(--toastMinHeight, 3.5rem);margin:var(--toastMargin, 0 0 0.5rem 0);padding:var(--toastPadding, 0);background:var(--toastBackground, rgba(66, 66, 66, 0.9));color:var(--toastColor, #fff);box-shadow:var(\n    --toastBoxShadow,\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  );border:var(--toastBorder, none);border-radius:var(--toastBorderRadius, 0.125rem);position:relative;display:flex;flex-direction:row;align-items:center;overflow:hidden;will-change:transform, opacity;-webkit-tap-highlight-color:transparent}._toastMsg.svelte-10l0ogd{padding:var(--toastMsgPadding, 0.75rem 0.5rem);flex:1 1 0%}.pe.svelte-10l0ogd,._toastMsg.svelte-10l0ogd a{pointer-events:auto}._toastBtn.svelte-10l0ogd{width:var(--toastBtnWidth, 2rem);height:var(--toastBtnHeight, 100%);font:var(--toastBtnFont, 1rem sans-serif);display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none}._toastBtn.svelte-10l0ogd::after{content:var(--toastBtnContent, '\u2715')}._toastBar.svelte-10l0ogd{top:var(--toastBarTop, auto);right:var(--toastBarRight, auto);bottom:var(--toastBarBottom, 0);left:var(--toastBarLeft, 0);height:var(--toastBarHeight, 6px);width:var(--toastBarWidth, 100%);position:absolute;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;pointer-events:none}._toastBar.svelte-10l0ogd::-webkit-progress-bar{background:transparent}._toastBar.svelte-10l0ogd::-webkit-progress-value{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}._toastBar.svelte-10l0ogd::-moz-progress-bar{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}",
  map: null
};
const ToastItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let { item } = $$props;
  const progress = tweened(item.initial, { duration: item.duration, easing: identity });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  const close = () => toast.pop(item.id);
  const autoclose = () => {
    if ($progress === 1 || $progress === 0) {
      close();
    }
  };
  let next = item.initial;
  let prev = next;
  let paused = false;
  const pause = () => {
    if (!paused && $progress !== next) {
      progress.set($progress, { duration: 0 });
      paused = true;
    }
  };
  const resume = () => {
    if (paused) {
      const d2 = item.duration;
      const duration = d2 - d2 * (($progress - prev) / (next - prev));
      progress.set(next, { duration }).then(autoclose);
      paused = false;
    }
  };
  let componentProps = {};
  const handler = () => document.hidden ? pause() : resume();
  const listener = (add) => {
    const { hidden, addEventListener, removeEventListener } = document;
    if (typeof hidden === "undefined")
      return;
    const name = "visibilitychange";
    add ? addEventListener(name, handler) : removeEventListener(name, handler);
    return true;
  };
  onDestroy(() => {
    if (typeof item.onpop === "function") {
      item.onpop(item.id);
    }
    listener(false);
  });
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$2);
  {
    if (typeof item.progress !== "undefined") {
      item.next = item.progress;
    }
  }
  {
    if (next !== item.next) {
      next = item.next;
      prev = $progress;
      paused = false;
      progress.set(next).then(autoclose);
    }
  }
  {
    if (item.component) {
      const { props = {}, sendIdTo } = item.component;
      componentProps = {
        ...props,
        ...sendIdTo && { [sendIdTo]: item.id }
      };
    }
  }
  $$unsubscribe_progress();
  return `<div class="${["_toastItem svelte-10l0ogd", item.pausable ? "pe" : ""].join(" ").trim()}"><div role="${"status"}" class="${["_toastMsg svelte-10l0ogd", item.component ? "pe" : ""].join(" ").trim()}">${item.component ? `${validate_component(item.component.src || missing_component, "svelte:component").$$render($$result, Object.assign(componentProps), {}, {})}` : `<!-- HTML_TAG_START -->${item.msg}<!-- HTML_TAG_END -->`}</div>
  ${item.dismissable ? `<div class="${"_toastBtn pe svelte-10l0ogd"}" role="${"button"}" tabindex="${"0"}"></div>` : ``}
  <progress class="${"_toastBar svelte-10l0ogd"}"${add_attribute("value", $progress, 0)}></progress>
</div>`;
});
const css$1 = {
  code: "._toastContainer.svelte-yh90az{top:var(--toastContainerTop, 1.5rem);right:var(--toastContainerRight, 2rem);bottom:var(--toastContainerBottom, auto);left:var(--toastContainerLeft, auto);position:fixed;margin:0;padding:0;list-style-type:none;pointer-events:none;z-index:var(--toastContainerZIndex, 9999)}",
  map: null
};
const SvelteToast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toast, $$unsubscribe_toast;
  $$unsubscribe_toast = subscribe(toast, (value) => $toast = value);
  let { options = {} } = $$props;
  let { target = "default" } = $$props;
  let items;
  const getCss = (theme) => Object.keys(theme).reduce((a2, c2) => `${a2}${c2}:${theme[c2]};`, "");
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  $$result.css.add(css$1);
  {
    toast._init(target, options);
  }
  items = $toast.filter((i2) => i2.target === target);
  $$unsubscribe_toast();
  return `<ul class="${"_toastContainer svelte-yh90az"}">${each(items, (item) => {
    return `<li class="${escape(null_to_empty(item.classes.join(" ")), true) + " svelte-yh90az"}"${add_attribute("style", getCss(item.theme), 0)}>${validate_component(ToastItem, "ToastItem").$$render($$result, { item }, {}, {})}
    </li>`;
  })}
</ul>`;
});
const css = {
  code: ".wrap.svelte-w1j5qz{--toastContainerTop:0.5rem;--toastContainerRight:0.5rem;--toastContainerBottom:auto;--toastContainerLeft:0.5rem;--toastWidth:100%;--toastMinHeight:2rem;--toastPadding:0 0.5rem;font-size:0.875rem}@media(min-width: 40rem){.wrap.svelte-w1j5qz{--toastContainerRight:auto;--toastContainerLeft:calc(50vw - 20rem);--toastWidth:40rem}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  m("fr", fr);
  $({
    fallbackLocale: "fr",
    initialLocale: F()
  });
  const options = { duration: 1e4, pausable: true };
  $$result.css.add(css);
  return `<main><div class="${"wrap svelte-w1j5qz"}">${validate_component(SvelteToast, "SvelteToast").$$render($$result, { options }, {}, {})}</div>
	${slots.default ? slots.default({}) : ``}
</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-edb79c2f.js.map
