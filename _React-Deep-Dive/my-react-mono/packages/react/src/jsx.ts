import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Type,
	Ref,
	Key,
	Props,
	ReactElementType,
	ElementType
} from 'shared/ReactTypes';

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'mini'   // 为了与官方 react 包做区分的一个自定义字段
	};
	return element;
};


export const jsx = (type: ElementType, config: any, ...children: any) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	const childrenLength = children.length;
	if (childrenLength) {
		if (childrenLength === 1) {
			props.children = children[0];
		} else {
			props.children = children;
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDEV = (type: ElementType, config: any) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	return ReactElement(type, key, ref, props);
};
