export type Ref = any;
export type Props = any;
export type ElementType = any;
export type Action<State> = any;


export interface ReactElementType {
    $$typeof: symbol | number;
    type: ElementType;
    key: Key;
    ref: Ref;
    props: Props;
    __mark: string;
}